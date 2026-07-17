from __future__ import annotations

import csv
import difflib
import hashlib
import io
import json
import posixpath
import random
import copy
import re
import secrets
import shutil
import tempfile
import zipfile
from dataclasses import asdict, dataclass, field
from datetime import UTC, datetime, timedelta
from pathlib import Path
from typing import Iterable
from xml.etree import ElementTree as ET


W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
XML_NS = "http://www.w3.org/XML/1998/namespace"
R_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
REL_NS = "http://schemas.openxmlformats.org/package/2006/relationships"
CT_NS = "http://schemas.openxmlformats.org/package/2006/content-types"
COMMENTS_REL_TYPE = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
COMMENTS_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml"
NS = {"w": W_NS}
ET.register_namespace("w", W_NS)
ET.register_namespace("", REL_NS)


def w_tag(name: str) -> str:
    return f"{{{W_NS}}}{name}"


def rel_tag(name: str) -> str:
    return f"{{{REL_NS}}}{name}"


def ct_tag(name: str) -> str:
    return f"{{{CT_NS}}}{name}"


def local_name(tag: str) -> str:
    return tag.rsplit("}", 1)[-1]


def register_namespaces_from_xml(xml_bytes: bytes) -> None:
    for prefix, uri in namespace_map_from_xml(xml_bytes).items():
        if prefix == "xml":
            continue
        try:
            ET.register_namespace(prefix or "", uri)
        except ValueError:
            continue


def namespace_map_from_xml(xml_bytes: bytes) -> dict[str, str]:
    namespaces: dict[str, str] = {}
    for _event, item in ET.iterparse(io.BytesIO(xml_bytes), events=("start-ns",)):
        prefix, uri = item
        namespaces[prefix or ""] = uri
    return namespaces


def ensure_ignorable_namespaces(xml_bytes: bytes, namespaces: dict[str, str], root: ET.Element) -> bytes:
    ignorable = root.get("{http://schemas.openxmlformats.org/markup-compatibility/2006}Ignorable", "")
    required_prefixes = [prefix for prefix in ignorable.split() if prefix in namespaces]
    if not required_prefixes:
        return xml_bytes

    xml = xml_bytes.decode("utf-8")
    search_start = 0
    if xml.startswith("<?xml"):
        declaration_end = xml.find("?>")
        if declaration_end != -1:
            search_start = declaration_end + 2

    root_start = xml.find("<", search_start)
    root_end = xml.find(">", root_start)
    if root_end == -1:
        return xml_bytes

    additions = []
    opening_tag = xml[root_start:root_end]
    for prefix in required_prefixes:
        declaration = f"xmlns:{prefix}="
        if declaration not in opening_tag:
            additions.append(f' xmlns:{prefix}="{namespaces[prefix]}"')

    if not additions:
        return xml_bytes
    return (xml[:root_end] + "".join(additions) + xml[root_end:]).encode("utf-8")


@dataclass
class ExcludedPeriod:
    start: datetime
    end: datetime
    description: str = ""


@dataclass
class BuildRequest:
    original_path: Path
    revised_path: Path
    result_path: Path
    reviewer_name: str
    execution_mode: str
    requested_start: datetime | None = None
    requested_end: datetime | None = None
    excluded_periods: list[ExcludedPeriod] = field(default_factory=list)
    minimum_interval_minutes: int = 1
    random_seed: str | None = None
    granularity: str = "word-level"
    compare_options: dict[str, bool] = field(default_factory=dict)


@dataclass
class RevisionRecord:
    sequence: int
    type: str
    author: str
    actual_revision_date: str
    story_type: str
    paragraph_index: int | None
    table_index: int | None
    row_index: int | None
    cell_index: int | None
    before_text: str
    after_text: str
    context_snippet: str
    simulated_at: str | None = None
    timestamp_type: str = "ACTUAL"


@dataclass
class BuildResult:
    result_document_path: Path
    json_report_path: Path
    csv_report_path: Path
    execution_log_path: Path
    revision_count: int
    warnings: list[str]


@dataclass
class StyledChar:
    char: str
    rpr: ET.Element | None


@dataclass
class StyledUnit:
    text: str
    chars: list[StyledChar]


class ExecutionLogger:
    def __init__(self) -> None:
        self.lines: list[str] = []

    def info(self, message: str) -> None:
        self._add("INFO", message)

    def warning(self, message: str) -> None:
        self._add("WARN", message)

    def error(self, message: str) -> None:
        self._add("ERROR", message)

    def save(self, path: Path) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("\n".join(self.lines) + "\n", encoding="utf-8")

    def _add(self, level: str, message: str) -> None:
        self.lines.append(f"{datetime.now().astimezone().isoformat()} [{level}] {message}")


def parse_timestamp(value: str) -> datetime:
    normalized = value.strip()
    for timestamp_format in (
        "%Y%m%d %H:%M",
        "%Y%m%d %H%M",
        "%Y%m%dT%H:%M",
        "%Y-%m-%dT%H:%M",
        "%Y-%m-%d %H:%M",
        "%m/%d/%Y %H:%M",
        "%m/%d/%YT%H:%M",
        "%m/%d/%Y %H%M",
    ):
        try:
            return datetime.strptime(normalized, timestamp_format).astimezone()
        except ValueError:
            continue
    raise ValueError("Timestamp must use YYYYMMDD HH:mm, YYYYMMDD HHmm, or MM/DD/YYYY HH:mm.")


def iso(value: datetime | None) -> str | None:
    return value.isoformat() if value else None


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def normalize_text(value: str) -> str:
    return " ".join(value.split())


def element_text(element: ET.Element) -> str:
    return "".join(text.text or "" for text in element.iter(w_tag("t"))) + "".join(
        text.text or "" for text in element.iter(w_tag("delText"))
    )


def block_text(element: ET.Element) -> str:
    return normalize_text(element_text(element))


def snippet(value: str, limit: int = 200) -> str:
    value = normalize_text(value)
    return value[:limit]


def set_attr(element: ET.Element, name: str, value: str) -> None:
    element.set(w_tag(name), value)


def get_w_attr(element: ET.Element, name: str) -> str | None:
    return element.get(w_tag(name))


def revision_timestamp() -> str:
    return datetime.now(UTC).strftime("%Y-%m-%dT%H:%M:%SZ")


def max_revision_id(root: ET.Element) -> int:
    maximum = 0
    for element in root.iter():
        value = element.get(w_tag("id"))
        if value and value.isdigit():
            maximum = max(maximum, int(value))
    return maximum


def make_run_text(tag_name: str, text: str, rpr: ET.Element | None = None) -> ET.Element:
    run = ET.Element(w_tag("r"))
    if rpr is not None:
        run.append(copy.deepcopy(rpr))
    text_element = ET.SubElement(run, w_tag(tag_name))
    text_element.set(f"{{{XML_NS}}}space", "preserve")
    text_element.text = text
    return run


def make_revision_container(
    kind: str,
    author: str,
    date_value: str,
    revision_id: int,
    text: str,
    rpr: ET.Element | None = None,
) -> ET.Element:
    container = ET.Element(w_tag(kind))
    set_attr(container, "id", str(revision_id))
    set_attr(container, "author", author)
    set_attr(container, "date", date_value)
    container.append(make_run_text("delText" if kind == "del" else "t", text, rpr))
    return container


def make_revision_paragraph(
    kind: str,
    author: str,
    date_value: str,
    revision_id: int,
    text: str,
    source_block: ET.Element | None = None,
    comment_ids: list[str] | None = None,
) -> ET.Element:
    paragraph = ET.Element(w_tag("p"))
    if source_block is not None:
        ppr = source_block.find("w:pPr", NS)
        if ppr is not None:
            paragraph.append(copy.deepcopy(ppr))
    paragraph.append(make_revision_container(kind, author, date_value, revision_id, text, first_run_properties(source_block)))
    add_comment_anchors_to_paragraph(paragraph, comment_ids or [])
    return paragraph


INSERT_REVISION_TAGS = {"ins", "moveTo"}
DELETE_REVISION_TAGS = {"del", "moveFrom"}
REVISION_PROPERTY_TAGS = {
    "pPrChange",
    "rPrChange",
    "tblPrChange",
    "trPrChange",
    "tcPrChange",
    "sectPrChange",
}


def accept_revisions_in_place(element: ET.Element) -> None:
    for child in list(element):
        child_name = local_name(child.tag)
        if child_name in DELETE_REVISION_TAGS or child_name in REVISION_PROPERTY_TAGS:
            element.remove(child)
            continue

        if child_name in INSERT_REVISION_TAGS:
            index = list(element).index(child)
            element.remove(child)
            accept_revisions_in_place(child)
            for nested in reversed(list(child)):
                element.insert(index, nested)
            continue

        accept_revisions_in_place(child)


def accepted_revision_copy(element: ET.Element) -> ET.Element:
    result = copy.deepcopy(element)
    accept_revisions_in_place(result)
    return result


def comment_ids_in_element(element: ET.Element) -> list[str]:
    ids: list[str] = []
    for child in element.iter():
        if local_name(child.tag) in {"commentRangeStart", "commentReference"}:
            value = get_w_attr(child, "id")
            if value is not None and value not in ids:
                ids.append(value)
    return ids


def strip_comment_markup(element: ET.Element) -> None:
    for parent in list(element.iter()):
        for child in list(parent):
            if local_name(child.tag) in {"commentRangeStart", "commentRangeEnd", "commentReference"}:
                parent.remove(child)
            else:
                strip_comment_markup(child)


def add_comment_reference_run(paragraph: ET.Element, comment_id: str) -> None:
    run = ET.Element(w_tag("r"))
    rpr = ET.SubElement(run, w_tag("rPr"))
    style = ET.SubElement(rpr, w_tag("rStyle"))
    set_attr(style, "val", "CommentReference")
    reference = ET.SubElement(run, w_tag("commentReference"))
    set_attr(reference, "id", comment_id)
    paragraph.append(run)


def add_comment_anchors_to_paragraph(paragraph: ET.Element, comment_ids: Iterable[str]) -> None:
    ids = [comment_id for comment_id in comment_ids if comment_id is not None]
    if not ids:
        return

    insert_index = 1 if len(paragraph) and paragraph[0].tag == w_tag("pPr") else 0
    for comment_id in reversed(ids):
        start = ET.Element(w_tag("commentRangeStart"))
        set_attr(start, "id", comment_id)
        paragraph.insert(insert_index, start)

    for comment_id in ids:
        end = ET.Element(w_tag("commentRangeEnd"))
        set_attr(end, "id", comment_id)
        paragraph.append(end)
        add_comment_reference_run(paragraph, comment_id)


def first_run_properties(element: ET.Element | None) -> ET.Element | None:
    if element is None:
        return None
    for run in element.iter(w_tag("r")):
        rpr = run.find("w:rPr", NS)
        if rpr is not None:
            return rpr
    return None


def paragraph_styled_chars(paragraph: ET.Element) -> list[StyledChar]:
    chars: list[StyledChar] = []
    for run in paragraph.iter(w_tag("r")):
        rpr = run.find("w:rPr", NS)
        for text_node in list(run.iter(w_tag("t"))) + list(run.iter(w_tag("delText"))):
            for char in text_node.text or "":
                chars.append(StyledChar(char, rpr))
    return chars


def styled_units(chars: list[StyledChar], granularity: str) -> list[StyledUnit]:
    if granularity == "character-level":
        return [StyledUnit(item.char, [item]) for item in chars]

    text = "".join(item.char for item in chars)
    units: list[StyledUnit] = []
    for match in re.finditer(r"\s+|[\w\u00C0-\uFFFF]+|[^\w\s]", text, flags=re.UNICODE):
        start, end = match.span()
        units.append(StyledUnit(match.group(0), chars[start:end]))
    return units


def flatten_units(units: list[StyledUnit]) -> list[StyledChar]:
    return [char for unit in units for char in unit.chars]


def style_key(rpr: ET.Element | None) -> bytes:
    return ET.tostring(rpr, encoding="utf-8") if rpr is not None else b""


def style_for_position(original_chars: list[StyledChar], revised_chars: list[StyledChar], index: int) -> ET.Element | None:
    if original_chars:
        if index < len(original_chars):
            return original_chars[index].rpr
        return original_chars[-1].rpr
    if revised_chars:
        return revised_chars[min(index, len(revised_chars) - 1)].rpr
    return None


def append_text_runs(parent: ET.Element, text: str, tag_name: str, rpr: ET.Element | None) -> None:
    if not text:
        return
    parent.append(make_run_text(tag_name, text, rpr))


def append_grouped_plain_runs(paragraph: ET.Element, chars: list[StyledChar]) -> None:
    cursor = 0
    while cursor < len(chars):
        current_style = chars[cursor].rpr
        current_key = style_key(current_style)
        end = cursor + 1
        while end < len(chars) and style_key(chars[end].rpr) == current_key:
            end += 1
        append_text_runs(paragraph, "".join(char.char for char in chars[cursor:end]), "t", current_style)
        cursor = end


def append_revision_runs(
    paragraph: ET.Element,
    kind: str,
    author: str,
    date_value: str,
    revision_id: int,
    chars: list[StyledChar],
    fallback_rpr: ET.Element | None,
) -> None:
    if not chars:
        return
    container = ET.Element(w_tag(kind))
    set_attr(container, "id", str(revision_id))
    set_attr(container, "author", author)
    set_attr(container, "date", date_value)

    cursor = 0
    while cursor < len(chars):
        current_style = chars[cursor].rpr or fallback_rpr
        current_key = style_key(current_style)
        end = cursor + 1
        while end < len(chars):
            next_style = chars[end].rpr or fallback_rpr
            if style_key(next_style) != current_key:
                break
            end += 1
        append_text_runs(container, "".join(char.char for char in chars[cursor:end]), "delText" if kind == "del" else "t", current_style)
        cursor = end

    paragraph.append(container)


def revision_chunks(units: list[StyledUnit], granularity: str) -> list[list[StyledUnit]]:
    if not units:
        return []
    if granularity == "character-level":
        return [[unit] for unit in units]

    chunks: list[list[StyledUnit]] = []
    current: list[StyledUnit] = []
    for unit in units:
        current.append(unit)
        if unit.text.strip():
            chunks.append(current)
            current = []
    if current:
        if chunks:
            chunks[-1].extend(current)
        else:
            chunks.append(current)
    return chunks


def append_revision_records(
    paragraph: ET.Element,
    kind: str,
    author: str,
    date_value: str,
    revision_id: int,
    units: list[StyledUnit],
    fallback_rpr: ET.Element | None,
    granularity: str,
    location: tuple[int, int | None, int | None, int | None],
    context: str,
) -> tuple[list[RevisionRecord], int]:
    records: list[RevisionRecord] = []
    paragraph_index, table_index, row_index, cell_index = location
    for chunk in revision_chunks(units, granularity):
        chars = flatten_units(chunk)
        text = "".join(item.char for item in chars)
        if not text:
            continue
        append_revision_runs(paragraph, kind, author, date_value, revision_id, chars, fallback_rpr)
        records.append(
            RevisionRecord(
                sequence=0,
                type=(
                    ("deleted_characters" if granularity == "character-level" else "deleted_words")
                    if kind == "del"
                    else ("inserted_characters" if granularity == "character-level" else "inserted_words")
                ),
                author=author,
                actual_revision_date=date_value,
                story_type="MainDocument",
                paragraph_index=paragraph_index,
                table_index=table_index,
                row_index=row_index,
                cell_index=cell_index,
                before_text=text if kind == "del" else "",
                after_text=text if kind == "ins" else "",
                context_snippet=snippet(context),
            )
        )
        revision_id += 1
    return records, revision_id


def make_inline_revision_paragraph(
    original_paragraph: ET.Element,
    revised_paragraph: ET.Element,
    author: str,
    date_value: str,
    revision_id: int,
    paragraph_index: int,
    table_index: int | None = None,
    row_index: int | None = None,
    cell_index: int | None = None,
    granularity: str = "character-level",
    comment_ids: list[str] | None = None,
) -> tuple[ET.Element, list[RevisionRecord], int]:
    original_chars = paragraph_styled_chars(original_paragraph)
    revised_chars = paragraph_styled_chars(revised_paragraph)
    original_text = "".join(item.char for item in original_chars)
    revised_text = "".join(item.char for item in revised_chars)

    paragraph = ET.Element(w_tag("p"))
    ppr = revised_paragraph.find("w:pPr", NS) or original_paragraph.find("w:pPr", NS)
    if ppr is not None:
        paragraph.append(copy.deepcopy(ppr))

    records: list[RevisionRecord] = []
    original_units = styled_units(original_chars, granularity)
    revised_units = styled_units(revised_chars, granularity)
    matcher = difflib.SequenceMatcher(
        a=[unit.text for unit in original_units],
        b=[unit.text for unit in revised_units],
        autojunk=False,
    )
    next_revision_id = revision_id

    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag == "equal":
            append_grouped_plain_runs(paragraph, flatten_units(revised_units[j1:j2]))
            continue

        char_index = sum(len(unit.chars) for unit in original_units[:i1])
        fallback_rpr = style_for_position(original_chars, revised_chars, char_index)
        if tag in {"delete", "replace"}:
            emitted, next_revision_id = append_revision_records(
                paragraph,
                "del",
                author,
                date_value,
                next_revision_id,
                original_units[i1:i2],
                fallback_rpr,
                granularity,
                (paragraph_index, table_index, row_index, cell_index),
                original_text,
            )
            records.extend(emitted)

        if tag in {"insert", "replace"}:
            emitted, next_revision_id = append_revision_records(
                paragraph,
                "ins",
                author,
                date_value,
                next_revision_id,
                revised_units[j1:j2],
                fallback_rpr,
                granularity,
                (paragraph_index, table_index, row_index, cell_index),
                revised_text,
            )
            records.extend(emitted)

    add_comment_anchors_to_paragraph(paragraph, comment_ids or [])
    return paragraph, records, next_revision_id


def table_paragraphs(table: ET.Element) -> list[tuple[ET.Element, int, int, int]]:
    result: list[tuple[ET.Element, int, int, int]] = []
    paragraph_index = 1
    for row_index, row in enumerate(table.findall(".//w:tr", NS), start=1):
        for cell_index, cell in enumerate(row.findall("w:tc", NS), start=1):
            for paragraph in cell.findall("w:p", NS):
                result.append((paragraph, row_index, cell_index, paragraph_index))
                paragraph_index += 1
    return result


def add_revised_comments_to_block(block: ET.Element, revised_block: ET.Element) -> ET.Element:
    result = copy.deepcopy(block)
    strip_comment_markup(result)

    if result.tag == w_tag("p") and revised_block.tag == w_tag("p"):
        add_comment_anchors_to_paragraph(result, comment_ids_in_element(revised_block))
        return result

    if result.tag == w_tag("tbl") and revised_block.tag == w_tag("tbl"):
        result_paragraphs = table_paragraphs(result)
        revised_paragraphs = table_paragraphs(revised_block)
        for index in range(min(len(result_paragraphs), len(revised_paragraphs))):
            add_comment_anchors_to_paragraph(result_paragraphs[index][0], comment_ids_in_element(revised_paragraphs[index][0]))
    return result


def parent_map(root: ET.Element) -> dict[ET.Element, ET.Element]:
    return {child: parent for parent in root.iter() for child in list(parent)}


def replace_child(parent: ET.Element, old_child: ET.Element, new_child: ET.Element) -> None:
    children = list(parent)
    for index, child in enumerate(children):
        if child is old_child:
            parent.remove(old_child)
            parent.insert(index, new_child)
            return
    raise ValueError("Could not replace paragraph inside table.")


def make_inline_revision_table(
    original_table: ET.Element,
    revised_table: ET.Element,
    author: str,
    date_value: str,
    revision_id: int,
    table_index: int,
    granularity: str,
) -> tuple[ET.Element, list[RevisionRecord], int, bool]:
    original_paragraphs = table_paragraphs(original_table)
    revised_paragraphs = table_paragraphs(revised_table)
    if not original_paragraphs or not revised_paragraphs:
        return original_table, [], revision_id, False

    table = copy.deepcopy(revised_table)
    table_paragraph_copies = table_paragraphs(table)
    pairs = min(len(original_paragraphs), len(revised_paragraphs), len(table_paragraph_copies))
    parents = parent_map(table)
    records: list[RevisionRecord] = []
    next_revision_id = revision_id

    for index in range(pairs):
        original_paragraph, row_index, cell_index, paragraph_index = original_paragraphs[index]
        revised_paragraph = revised_paragraphs[index][0]
        table_paragraph_copy = table_paragraph_copies[index][0]
        if element_text(original_paragraph) == element_text(revised_paragraph):
            continue

        inline_paragraph, inline_records, next_revision_id = make_inline_revision_paragraph(
            original_paragraph,
            revised_paragraph,
            author,
            date_value,
            next_revision_id,
            paragraph_index,
            table_index=table_index,
            row_index=row_index,
            cell_index=cell_index,
            granularity=granularity,
            comment_ids=comment_ids_in_element(revised_paragraph),
        )
        replace_child(parents[table_paragraph_copy], table_paragraph_copy, inline_paragraph)
        records.extend(inline_records)

    if len(original_paragraphs) != len(revised_paragraphs):
        return table, records, next_revision_id, False

    return table, records, next_revision_id, True


def make_whole_revision_paragraph(
    source_paragraph: ET.Element,
    kind: str,
    author: str,
    date_value: str,
    revision_id: int,
    paragraph_index: int,
    table_index: int | None,
    row_index: int | None,
    cell_index: int | None,
    granularity: str,
    comment_ids: list[str] | None = None,
) -> tuple[ET.Element, list[RevisionRecord], int]:
    paragraph = ET.Element(w_tag("p"))
    ppr = source_paragraph.find("w:pPr", NS)
    if ppr is not None:
        paragraph.append(copy.deepcopy(ppr))

    chars = paragraph_styled_chars(source_paragraph)
    units = styled_units(chars, granularity)
    records, next_revision_id = append_revision_records(
        paragraph,
        kind,
        author,
        date_value,
        revision_id,
        units,
        first_run_properties(source_paragraph),
        granularity,
        (paragraph_index, table_index, row_index, cell_index),
        element_text(source_paragraph),
    )
    add_comment_anchors_to_paragraph(paragraph, comment_ids or [])
    return paragraph, records, next_revision_id


def make_whole_revision_block(
    source_block: ET.Element,
    kind: str,
    author: str,
    date_value: str,
    revision_id: int,
    block_index: int,
    granularity: str,
) -> tuple[ET.Element, list[RevisionRecord], int]:
    if source_block.tag == w_tag("p"):
        return make_whole_revision_paragraph(
            source_block,
            kind,
            author,
            date_value,
            revision_id,
            block_index,
            None,
            None,
            None,
            granularity,
            comment_ids_in_element(source_block) if kind == "ins" else [],
        )

    if source_block.tag != w_tag("tbl"):
        return copy.deepcopy(source_block), [], revision_id

    table = copy.deepcopy(source_block)
    parents = parent_map(table)
    records: list[RevisionRecord] = []
    next_revision_id = revision_id

    for paragraph, row_index, cell_index, paragraph_index in table_paragraphs(table):
        replacement, emitted, next_revision_id = make_whole_revision_paragraph(
            paragraph,
            kind,
            author,
            date_value,
            next_revision_id,
            paragraph_index,
            block_index,
            row_index,
            cell_index,
            granularity,
            comment_ids_in_element(paragraph) if kind == "ins" else [],
        )
        replace_child(parents[paragraph], paragraph, replacement)
        records.extend(emitted)

    return table, records, next_revision_id


def read_document_xml(path: Path) -> bytes:
    with zipfile.ZipFile(path, "r") as package:
        return package.read("word/document.xml")


def update_comments_dates(comments_xml: bytes, date_value: str) -> bytes:
    register_namespaces_from_xml(comments_xml)
    root = ET.fromstring(comments_xml)
    for comment in root.iter(w_tag("comment")):
        set_attr(comment, "date", date_value)
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def update_content_types(content_types_xml: bytes, include_comments: bool) -> bytes:
    if not include_comments:
        return content_types_xml
    ET.register_namespace("", CT_NS)
    root = ET.fromstring(content_types_xml)
    for override in root.findall(ct_tag("Override")):
        if override.get("PartName") == "/word/comments.xml":
            override.set("ContentType", COMMENTS_CONTENT_TYPE)
            return ET.tostring(root, encoding="utf-8", xml_declaration=True)

    override = ET.SubElement(root, ct_tag("Override"))
    override.set("PartName", "/word/comments.xml")
    override.set("ContentType", COMMENTS_CONTENT_TYPE)
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def update_document_relationships(rels_xml: bytes | None, include_comments: bool) -> bytes:
    ET.register_namespace("", REL_NS)
    if rels_xml:
        root = ET.fromstring(rels_xml)
    else:
        root = ET.Element(rel_tag("Relationships"))

    if not include_comments:
        return ET.tostring(root, encoding="utf-8", xml_declaration=True)

    for relationship in root.findall(rel_tag("Relationship")):
        if relationship.get("Type") == COMMENTS_REL_TYPE:
            relationship.set("Target", "comments.xml")
            return ET.tostring(root, encoding="utf-8", xml_declaration=True)

    existing_ids = {relationship.get("Id") for relationship in root.findall(rel_tag("Relationship"))}
    index = 1
    while f"rId{index}" in existing_ids:
        index += 1

    relationship = ET.SubElement(root, rel_tag("Relationship"))
    relationship.set("Id", f"rId{index}")
    relationship.set("Type", COMMENTS_REL_TYPE)
    relationship.set("Target", "comments.xml")
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def read_optional_zip_part(docx_path: Path, part_name: str) -> bytes | None:
    with zipfile.ZipFile(docx_path, "r") as package:
        try:
            return package.read(part_name)
        except KeyError:
            return None


def write_document_xml(base_docx: Path, result_docx: Path, document_xml: bytes, revised_docx: Path | None = None, revision_date: str | None = None) -> None:
    result_docx.parent.mkdir(parents=True, exist_ok=True)
    revised_comments = read_optional_zip_part(revised_docx, "word/comments.xml") if revised_docx else None
    comments_xml = update_comments_dates(revised_comments, revision_date) if revised_comments and revision_date else revised_comments
    include_comments = comments_xml is not None

    with zipfile.ZipFile(base_docx, "r") as source, zipfile.ZipFile(result_docx, "w", zipfile.ZIP_DEFLATED) as target:
        written: set[str] = set()
        original_rels = None
        for item in source.infolist():
            if item.filename == "word/_rels/document.xml.rels":
                original_rels = source.read(item.filename)
                data = update_document_relationships(original_rels, include_comments)
            elif item.filename == "[Content_Types].xml":
                data = update_content_types(source.read(item.filename), include_comments)
            elif item.filename == "word/comments.xml" and include_comments:
                data = comments_xml
            if item.filename == "word/document.xml":
                data = document_xml
            elif item.filename in {"word/comments.xml", "word/_rels/document.xml.rels", "[Content_Types].xml"}:
                pass
            else:
                data = source.read(item.filename)
            target.writestr(item, data)
            written.add(item.filename)

        if include_comments and "word/comments.xml" not in written:
            target.writestr("word/comments.xml", comments_xml)
        if include_comments and "word/_rels/document.xml.rels" not in written:
            target.writestr("word/_rels/document.xml.rels", update_document_relationships(original_rels, include_comments))


def table_signature(table: ET.Element) -> tuple:
    rows = []
    for row in table.findall(".//w:tr", NS):
        cells = []
        for cell in row.findall("w:tc", NS):
            paragraphs = tuple(
                normalize_text(element_text(paragraph))
                for paragraph in cell.findall("w:p", NS)
                if normalize_text(element_text(paragraph))
            )
            cells.append(paragraphs)
        rows.append(tuple(cells))
    return tuple(rows)


def block_signature(block: ET.Element) -> tuple | None:
    if block.tag == w_tag("p"):
        text = normalize_text(element_text(block))
        return ("p", text) if text else None
    if block.tag == w_tag("tbl"):
        signature = table_signature(block)
        has_text = any(any(any(paragraph for paragraph in cell) for cell in row) for row in signature)
        return ("tbl", signature) if has_text else None
    return None


def accepted_body_signature(docx_path: Path) -> list[tuple]:
    xml = read_document_xml(docx_path)
    register_namespaces_from_xml(xml)
    root = accepted_revision_copy(ET.fromstring(xml))
    _, blocks, _ = body_blocks(root)
    signature: list[tuple] = []
    for block in blocks:
        item = block_signature(block)
        if item is not None:
            signature.append(item)
    return signature


def validate_result_matches_revised(result_path: Path, revised_path: Path) -> None:
    result_signature = accepted_body_signature(result_path)
    revised_signature = accepted_body_signature(revised_path)
    if result_signature == revised_signature:
        return

    mismatch_index = 1
    for mismatch_index, (result_item, revised_item) in enumerate(zip(result_signature, revised_signature), start=1):
        if result_item != revised_item:
            break
    else:
        mismatch_index = min(len(result_signature), len(revised_signature)) + 1

    raise ValueError(
        "Content validation failed: accepting all changes in the result does not match the revised document "
        f"at block {mismatch_index} (result blocks: {len(result_signature)}, revised blocks: {len(revised_signature)})."
    )


def validate_document_relationships(docx_path: Path) -> None:
    with zipfile.ZipFile(docx_path, "r") as package:
        names = set(package.namelist())
        document_xml = package.read("word/document.xml")
        try:
            rels_xml = package.read("word/_rels/document.xml.rels")
        except KeyError:
            rels_xml = b""

    root = ET.fromstring(document_xml)
    referenced_ids = {
        value
        for element in root.iter()
        for attribute, value in element.attrib.items()
        if attribute.startswith(f"{{{R_NS}}}") and value.startswith("rId")
    }
    if not referenced_ids:
        return

    relationships: dict[str, ET.Element] = {}
    if rels_xml:
        rel_root = ET.fromstring(rels_xml)
        relationships = {
            relationship.get("Id", ""): relationship
            for relationship in rel_root.findall(rel_tag("Relationship"))
        }

    missing_ids = sorted(rel_id for rel_id in referenced_ids if rel_id not in relationships)
    if missing_ids:
        raise ValueError(f"Content validation failed: missing document relationships: {', '.join(missing_ids[:10])}.")

    missing_targets: list[str] = []
    for rel_id in sorted(referenced_ids):
        relationship = relationships[rel_id]
        if relationship.get("TargetMode") == "External":
            continue
        target_name = relationship.get("Target", "")
        if not target_name:
            continue
        resolved = posixpath.normpath(posixpath.join("word", target_name))
        if resolved not in names:
            missing_targets.append(f"{rel_id}->{resolved}")

    if missing_targets:
        raise ValueError(
            "Content validation failed: missing internal relationship targets: "
            + ", ".join(missing_targets[:10])
            + "."
        )


def body_blocks(root: ET.Element) -> tuple[ET.Element, list[ET.Element], ET.Element | None]:
    body = root.find(".//w:body", NS)
    if body is None:
        raise ValueError("DOCX document.xml does not contain a w:body element.")
    section_properties = body.find("w:sectPr", NS)
    blocks = [child for child in list(body) if child.tag in {w_tag("p"), w_tag("tbl")}]
    return body, blocks, section_properties


def create_tracked_document(request: BuildRequest, logger: ExecutionLogger) -> tuple[list[RevisionRecord], list[str]]:
    original_xml = read_document_xml(request.original_path)
    revised_xml = read_document_xml(request.revised_path)
    original_namespaces = namespace_map_from_xml(original_xml) | namespace_map_from_xml(revised_xml)
    register_namespaces_from_xml(original_xml)
    register_namespaces_from_xml(revised_xml)
    original_root = accepted_revision_copy(ET.fromstring(original_xml))
    revised_root = accepted_revision_copy(ET.fromstring(revised_xml))

    original_body, original_blocks, _ = body_blocks(original_root)
    _, revised_blocks, section_properties = body_blocks(revised_root)
    original_texts = [block_text(block) for block in original_blocks]
    revised_texts = [block_text(block) for block in revised_blocks]
    matcher = difflib.SequenceMatcher(a=original_texts, b=revised_texts, autojunk=False)

    warnings: list[str] = []
    revisions: list[RevisionRecord] = []
    new_blocks: list[ET.Element] = []
    revision_id = max_revision_id(original_root) + 1
    date_value = revision_timestamp()

    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag == "equal":
            for offset in range(i2 - i1):
                revised_block = revised_blocks[j1 + offset]
                new_blocks.append(add_revised_comments_to_block(revised_block, revised_block))
            continue

        if tag == "replace" and request.granularity in {"character-level", "word-level"}:
            pair_count = min(i2 - i1, j2 - j1)
            for offset in range(pair_count):
                original_block = original_blocks[i1 + offset]
                revised_block = revised_blocks[j1 + offset]
                if original_block.tag == w_tag("p") and revised_block.tag == w_tag("p"):
                    inline_paragraph, inline_records, revision_id = make_inline_revision_paragraph(
                        original_block,
                        revised_block,
                        request.reviewer_name,
                        date_value,
                        revision_id,
                        i1 + offset + 1,
                        granularity=request.granularity,
                        comment_ids=comment_ids_in_element(revised_block),
                    )
                    new_blocks.append(inline_paragraph)
                    revisions.extend(inline_records)
                elif original_block.tag == w_tag("tbl") and revised_block.tag == w_tag("tbl"):
                    inline_table, inline_records, revision_id, handled = make_inline_revision_table(
                        original_block,
                        revised_block,
                        request.reviewer_name,
                        date_value,
                        revision_id,
                        i1 + offset + 1,
                        request.granularity,
                    )
                    if not handled and not inline_records:
                        pair_count = offset
                        break
                    new_blocks.append(inline_table)
                    revisions.extend(inline_records)
                    if not handled:
                        warnings.append(
                            "A table had a different paragraph structure; matched cells were compared inline and unmatched table content used fallback handling."
                        )
                else:
                    pair_count = offset
                    break

            i1 += pair_count
            j1 += pair_count

        if tag in {"delete", "replace"} and i1 < i2:
            for index, block in enumerate(original_blocks[i1:i2], start=i1 + 1):
                text = block_text(block)
                if not text:
                    continue
                deleted_block, deleted_records, revision_id = make_whole_revision_block(
                    block,
                    "del",
                    request.reviewer_name,
                    date_value,
                    revision_id,
                    index,
                    request.granularity,
                )
                new_blocks.append(deleted_block)
                revisions.extend(deleted_records)

        if tag in {"insert", "replace"} and j1 < j2:
            for index, block in enumerate(revised_blocks[j1:j2], start=j1 + 1):
                text = block_text(block)
                inserted_block, inserted_records, revision_id = make_whole_revision_block(
                    block,
                    "ins",
                    request.reviewer_name,
                    date_value,
                    revision_id,
                    index,
                    request.granularity,
                )
                if text or inserted_records:
                    new_blocks.append(inserted_block)
                    revisions.extend(inserted_records)

    original_body.clear()
    for block in new_blocks:
        original_body.append(block)
    if section_properties is not None:
        original_body.append(section_properties)

    if any(block.tag == w_tag("tbl") for block in original_blocks + revised_blocks):
        warnings.append(
            "Tables with matching cell paragraph structure are compared inline. Complex table structure changes may still fall back to block-level revisions."
        )

    for sequence, revision in enumerate(revisions, start=1):
        revision.sequence = sequence

    document_xml = ET.tostring(original_root, encoding="utf-8", xml_declaration=True)
    document_xml = ensure_ignorable_namespaces(document_xml, original_namespaces, original_root)
    write_document_xml(request.revised_path, request.result_path, document_xml, request.revised_path, date_value)
    validate_result_matches_revised(request.result_path, request.revised_path)
    validate_document_relationships(request.result_path)
    logger.info("Validated accepted result content against the revised document.")
    logger.info("Validated DOCX relationships and internal media targets.")
    logger.info(f"Saved tracked DOCX: {request.result_path}")
    return revisions, warnings


def merge_excluded_periods(periods: Iterable[ExcludedPeriod]) -> list[ExcludedPeriod]:
    ordered = sorted(periods, key=lambda period: period.start)
    merged: list[ExcludedPeriod] = []
    for period in ordered:
        if period.start >= period.end:
            raise ValueError(f"Invalid excluded period: {period.start.isoformat()} - {period.end.isoformat()}")
        if not merged or period.start > merged[-1].end:
            merged.append(period)
            continue
        merged[-1].end = max(merged[-1].end, period.end)
        descriptions = [merged[-1].description, period.description]
        merged[-1].description = "; ".join(item for item in descriptions if item)
    return merged


def allowed_ranges(start: datetime, end: datetime, excluded: list[ExcludedPeriod]) -> list[tuple[datetime, datetime]]:
    cursor = start
    ranges: list[tuple[datetime, datetime]] = []
    for period in excluded:
        period_start = max(period.start, start)
        period_end = min(period.end, end)
        if period_start >= period_end:
            continue
        if cursor < period_start:
            ranges.append((cursor, period_start))
        cursor = max(cursor, period_end)
    if cursor < end:
        ranges.append((cursor, end))
    return ranges


def generate_simulated_timestamps(
    start: datetime,
    end: datetime,
    excluded_periods: list[ExcludedPeriod],
    count: int,
    minimum_interval_minutes: int,
    seed: str | None,
) -> tuple[str, list[ExcludedPeriod], list[datetime], datetime]:
    if start >= end:
        raise ValueError("Start D must be earlier than End E.")
    if minimum_interval_minutes < 1:
        raise ValueError("Minimum interval must be at least 1 minute.")

    merged = merge_excluded_periods(excluded_periods)
    ranges = allowed_ranges(start, end, merged)
    if not ranges:
        raise ValueError("No allowed timeline remains after excluded periods are applied.")

    resolved_seed = seed.strip() if seed and seed.strip() else secrets.token_hex(16)
    if count == 0:
        return resolved_seed, merged, [], end

    min_gap = timedelta(minutes=minimum_interval_minutes)
    total_seconds = int(sum((range_end - range_start).total_seconds() for range_start, range_end in ranges))
    required_seconds = int((count - 1) * min_gap.total_seconds())
    if total_seconds < required_seconds:
        raise ValueError(
            f"Allowed time is insufficient for {count} revisions with a {minimum_interval_minutes}-minute minimum interval."
        )

    slack = total_seconds - required_seconds
    rng = random.Random(resolved_seed)
    offsets = sorted(rng.randint(0, slack) for _ in range(count))
    timestamps = [map_offset_to_ranges(ranges, offset + index * int(min_gap.total_seconds())) for index, offset in enumerate(offsets)]
    return resolved_seed, merged, timestamps, timestamps[-1] + timedelta(minutes=2)


def map_offset_to_ranges(ranges: list[tuple[datetime, datetime]], offset_seconds: int) -> datetime:
    cursor = offset_seconds
    for index, (start, end) in enumerate(ranges):
        duration = int((end - start).total_seconds())
        if cursor < duration or index == len(ranges) - 1:
            return start + timedelta(seconds=cursor)
        cursor -= duration
    return ranges[-1][1]


def output_paths(request: BuildRequest) -> tuple[Path, Path, Path]:
    base_name = request.original_path.stem
    directory = request.result_path.parent
    return (
        directory / f"{base_name}_RevisionReport.json",
        directory / f"{base_name}_RevisionReport.csv",
        directory / f"{base_name}_ExecutionLog.txt",
    )


def validate_request(request: BuildRequest) -> None:
    if not request.original_path.exists():
        raise FileNotFoundError(f"Original document does not exist: {request.original_path}")
    if not request.revised_path.exists():
        raise FileNotFoundError(f"Revised document does not exist: {request.revised_path}")
    if request.original_path.resolve() == request.revised_path.resolve():
        raise ValueError("Original and revised documents must be different files.")
    if request.result_path.resolve() in {request.original_path.resolve(), request.revised_path.resolve()}:
        raise ValueError("Result DOCX path must not overwrite the original or revised document.")
    if not request.reviewer_name.strip():
        raise ValueError("Reviewer display name is required.")
    if request.execution_mode not in {"Actual Audit Mode", "Simulation Manifest Mode"}:
        raise ValueError("Execution mode is invalid.")
    if request.execution_mode == "Simulation Manifest Mode" and (not request.requested_start or not request.requested_end):
        raise ValueError("Simulation Manifest Mode requires start D and end E.")


def write_json_report(path: Path, report: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")


def write_csv_report(path: Path, report: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8-sig", newline="") as stream:
        writer = csv.writer(stream)
        writer.writerow(
            [
                "sequence",
                "type",
                "author",
                "actual_revision_date",
                "story_type",
                "paragraph_index",
                "table_index",
                "row_index",
                "cell_index",
                "before_text",
                "after_text",
                "context_snippet",
                "simulated_at",
                "timestamp_type",
            ]
        )
        for revision in report["revisions"]:
            writer.writerow(
                [
                    revision["sequence"],
                    revision["type"],
                    revision["author"],
                    revision["actual_revision_date"],
                    revision["story_type"],
                    revision["paragraph_index"],
                    revision["table_index"],
                    revision["row_index"],
                    revision["cell_index"],
                    revision["before_text"],
                    revision["after_text"],
                    revision["context_snippet"],
                    revision["simulated_at"],
                    revision["timestamp_type"],
                ]
            )
        if report.get("simulated_save_at"):
            writer.writerow([])
            writer.writerow(["simulated_save_at", report["simulated_save_at"], "SIMULATED"])


def build(request: BuildRequest) -> BuildResult:
    json_path, csv_path, log_path = output_paths(request)
    logger = ExecutionLogger()
    temp_dir = Path(tempfile.mkdtemp(prefix="word_revision_builder_mac_"))
    warnings: list[str] = []
    actual_audit: dict[str, str] = {"application_started_at": datetime.now().astimezone().isoformat()}

    try:
        validate_request(request)
        logger.info("Build started.")
        logger.info("Mac version uses direct DOCX XML comparison. It does not use Microsoft Word CompareDocuments.")
        logger.info("Simulation timestamps are never written into DOCX revision dates or file LastWriteTime.")

        original_copy = temp_dir / f"original_{request.original_path.name}"
        revised_copy = temp_dir / f"revised_{request.revised_path.name}"
        shutil.copy2(request.original_path, original_copy)
        shutil.copy2(request.revised_path, revised_copy)
        logger.info(f"Created temporary working copies in {temp_dir}")
        actual_audit["original_opened_at"] = datetime.now().astimezone().isoformat()
        actual_audit["revised_opened_at"] = datetime.now().astimezone().isoformat()

        working_request = BuildRequest(
            original_path=original_copy,
            revised_path=revised_copy,
            result_path=request.result_path,
            reviewer_name=request.reviewer_name,
            execution_mode=request.execution_mode,
            requested_start=request.requested_start,
            requested_end=request.requested_end,
            excluded_periods=request.excluded_periods,
            minimum_interval_minutes=request.minimum_interval_minutes,
            random_seed=request.random_seed,
            granularity=request.granularity,
            compare_options=request.compare_options,
        )

        actual_audit["comparison_started_at"] = datetime.now().astimezone().isoformat()
        revisions, builder_warnings = create_tracked_document(working_request, logger)
        warnings.extend(builder_warnings)
        actual_audit["comparison_completed_at"] = datetime.now().astimezone().isoformat()
        actual_audit["result_saved_at"] = datetime.now().astimezone().isoformat()

        report: dict = {
            "timeline_type": "SIMULATED" if request.execution_mode == "Simulation Manifest Mode" else "ACTUAL",
            "requested_start": iso(request.requested_start),
            "requested_end": iso(request.requested_end),
            "excluded_periods": [
                {"start": iso(period.start), "end": iso(period.end), "description": period.description}
                for period in request.excluded_periods
            ],
            "random_seed": request.random_seed,
            "minimum_interval_minutes": request.minimum_interval_minutes,
            "actual_generated_at": datetime.now().astimezone().isoformat(),
            "simulated_save_at": None,
            "source_original_sha256": sha256_file(request.original_path),
            "source_revised_sha256": sha256_file(request.revised_path),
            "result_document_sha256": sha256_file(request.result_path),
            "mac_engine_notice": "Direct DOCX XML block comparison. For full Word CompareDocuments fidelity, use the Windows version.",
            "warnings": warnings,
            "revisions": [asdict(revision) for revision in revisions],
        }

        if request.execution_mode == "Actual Audit Mode":
            actual_audit["application_completed_at"] = datetime.now().astimezone().isoformat()
            report["actual_audit"] = actual_audit
        else:
            seed, merged, simulated, simulated_save_at = generate_simulated_timestamps(
                request.requested_start,
                request.requested_end,
                request.excluded_periods,
                len(revisions),
                request.minimum_interval_minutes,
                request.random_seed,
            )
            report["random_seed"] = seed
            report["excluded_periods"] = [
                {"start": iso(period.start), "end": iso(period.end), "description": period.description} for period in merged
            ]
            report["simulated_save_at"] = iso(simulated_save_at)
            for revision, simulated_at in zip(report["revisions"], simulated, strict=True):
                revision["simulated_at"] = iso(simulated_at)
                revision["timestamp_type"] = "SIMULATED"
            if simulated_save_at > request.requested_end:
                warning = "simulated_save_at exceeds requested_end. This warning is recorded only in JSON/CSV."
                warnings.append(warning)
                report["warnings"] = warnings

        write_json_report(json_path, report)
        write_csv_report(csv_path, report)
        logger.info(f"JSON report saved: {json_path}")
        logger.info(f"CSV report saved: {csv_path}")
        logger.save(log_path)

        return BuildResult(
            result_document_path=request.result_path,
            json_report_path=json_path,
            csv_report_path=csv_path,
            execution_log_path=log_path,
            revision_count=len(revisions),
            warnings=warnings,
        )
    except Exception as exc:
        logger.error(f"Build failed. Source documents were not modified. {exc}")
        logger.save(log_path)
        raise
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)
