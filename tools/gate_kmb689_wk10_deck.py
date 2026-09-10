#!/usr/bin/env python3
"""Six-gate verifier for the 35-slide KMB689 Wk10 Block-1 PPTX.

Gate 5 is deliberately N/A until the P2 figure bundle arrives. It is excluded
from the pass denominator because Block 1 imports none of the three result figures.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import posixpath
import re
import sys
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

from PIL import Image


A_NS = "http://schemas.openxmlformats.org/drawingml/2006/main"
P_NS = "http://schemas.openxmlformats.org/presentationml/2006/main"
R_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
PKG_R_NS = "http://schemas.openxmlformats.org/package/2006/relationships"
NS = {"a": A_NS, "p": P_NS, "r": R_NS, "pr": PKG_R_NS}

EXPECTED_MAPPING = [
    "R1", "R2", "R5+R6", "N1", "N2", "N3",
    "R4", "R9", "R10", "R11", "R12+R13", "R15", "R17+R20", "R18", "R19", "R24+R25", "N4",
    "R23", "R53+R56+R60", "N5", "N6", "N7", "N8", "N9",
    "R50+R63", "R62", "N10", "N11", "N12", "N13",
    "R61", "N14", "N15", "N16", "R64",
]
SECTION_COUNTS = [6, 11, 7, 6, 5]
REUSED_SLIDES = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 25, 26, 31, 35]
NEW_SLIDES = [4, 5, 6, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30, 32, 33, 34]

EXACT_PRIMARY = {
    7: 4, 8: 9, 9: 10, 10: 11, 12: 15, 13: 17, 14: 18, 15: 19,
    16: 24, 19: 53, 25: 50, 26: 62, 35: 64,
}

RESULT_FIGURE_MD5 = {
    "187f9eb2320a0258210491973e952904",  # prior base/instructor copy; not P2 identity proof
    "aa7d9ff62195ca99fe0b3bd6007e69ec",  # prior student copy; not P2 identity proof
}


def xml_text(data: bytes) -> list[str]:
    root = ET.fromstring(data)
    return [(node.text or "") for node in root.findall(".//a:t", NS)]


def slide_paths(zf: ZipFile) -> list[str]:
    paths = [n for n in zf.namelist() if re.fullmatch(r"ppt/slides/slide\d+\.xml", n)]
    return sorted(paths, key=lambda value: int(re.search(r"(\d+)", Path(value).stem).group(1)))


def notes_for_slide(zf: ZipFile, slide_path: str) -> str:
    rel_path = f"ppt/slides/_rels/{Path(slide_path).name}.rels"
    if rel_path not in zf.namelist():
        return ""
    rel_root = ET.fromstring(zf.read(rel_path))
    for rel in rel_root.findall("pr:Relationship", NS):
        if rel.attrib.get("Type", "").endswith("/notesSlide"):
            raw_target = rel.attrib["Target"]
            target = raw_target.lstrip("/") if raw_target.startswith("/") else posixpath.normpath(posixpath.join("ppt/slides", raw_target))
            if target in zf.namelist():
                return "\n".join(xml_text(zf.read(target)))
    return ""


def source_tokens(source: Path) -> dict[int, list[str]]:
    with ZipFile(source) as zf:
        return {i: xml_text(zf.read(path)) for i, path in enumerate(slide_paths(zf), 1)}


def normalized_slide_text(tokens: list[str]) -> str:
    """Join runs, then normalize only whitespace differences PowerPoint may rewrite."""
    value = "".join(tokens)
    value = value.replace("\u00a0", " ")
    value = value.replace("\r\n", " ").replace("\r", " ").replace("\n", " ").replace("\t", " ")
    return re.sub(r" +", " ", value).strip(" ")


def preservation_detection_controls(src: dict[int, list[str]]) -> dict:
    """Prove whitespace tolerance without weakening word/number/punctuation checks."""
    control_slides = sorted(set(EXACT_PRIMARY.values()))
    control = "".join("".join(src[slide_no]) for slide_no in control_slides)
    format_variant = "\t" + control.replace(" ", "\u00a0  ", 1) + "\n"

    word_match = re.search(r"[A-Za-z가-힣]{3,}", control)
    digit_match = re.search(r"\d", control)
    punctuation_match = re.search(r"[^\w\s]", control, flags=re.UNICODE)
    if not word_match or not digit_match or not punctuation_match:
        raise ValueError("BUSS256 reused-slide corpus cannot supply the required mutation controls")

    word_deleted = control[:word_match.start()] + control[word_match.end():]
    old_digit = digit_match.group(0)
    new_digit = str((int(old_digit) + 1) % 10)
    number_changed = control[:digit_match.start()] + new_digit + control[digit_match.end():]
    punctuation_changed = control[:punctuation_match.start()] + control[punctuation_match.end():]

    baseline = normalized_slide_text([control])
    return {
        "source_slides": control_slides,
        "format_only_variant_accepted": normalized_slide_text([format_variant]) == baseline,
        "word_deletion_detected": normalized_slide_text([word_deleted]) != baseline,
        "number_change_detected": normalized_slide_text([number_changed]) != baseline,
        "punctuation_change_detected": normalized_slide_text([punctuation_changed]) != baseline,
    }


def gate_structure(texts: list[list[str]], notes: list[str]) -> dict:
    actual_mapping = []
    for index, note in enumerate(notes, 1):
        match = re.search(r"mapping:\s*([^|\n]+)", note)
        actual_mapping.append(match.group(1).strip() if match else f"MISSING@{index}")
    reuse_count = sum(value.startswith("R") for value in actual_mapping)
    new_count = sum(value.startswith("N") for value in actual_mapping)
    failures = []
    if len(texts) != 35:
        failures.append(f"slide count {len(texts)} != 35")
    if actual_mapping != EXPECTED_MAPPING:
        failures.append("35/35 mapping does not match the approved plan")
    if reuse_count != 19 or new_count != 16:
        failures.append(f"reuse/new counts {reuse_count}/{new_count} != 19/16")
    if sum(SECTION_COUNTS) != len(texts):
        failures.append("section counts do not sum to the deck length")
    if any("2블록" in "".join(texts[i - 1]) for i in range(1, len(texts) + 1)):
        failures.append("Block-2 slide content detected")
    return {
        "status": "pass" if not failures else "fail",
        "slide_count": len(texts),
        "section_counts": SECTION_COUNTS,
        "reuse_count": reuse_count,
        "new_count": new_count,
        "mapping_count": sum(a == b for a, b in zip(actual_mapping, EXPECTED_MAPPING)),
        "failures": failures,
    }


def gate_source_preservation(texts: list[list[str]], source: Path, kmb_source: Path) -> dict:
    src = source_tokens(source)
    kmb = source_tokens(kmb_source)
    failures = []
    checks = 0

    # PowerPoint may split/merge runs. Compare one joined string per slide after
    # normalizing whitespace only. Digits, symbols, punctuation, and order remain exact.
    for slide_no, source_no in EXACT_PRIMARY.items():
        checks += 1
        if normalized_slide_text(texts[slide_no - 1]) != normalized_slide_text(src[source_no]):
            failures.append(f"slide {slide_no}: normalized text differs from BUSS256 slide {source_no}")

    # Approved revised/merged slides use the same slide-level whitespace-only rule.
    expected = {
        1: ["1", "KMB689: Big Data for Business Applications", "Seminar 10", "Clustering", "Instructor: Prof. Gun-woong Lee", "Korea University Business School"],
        2: ["Today’s Outline", "1.1 여는 이야기 — 감독 신조와 오늘의 기준", "1.2 군집분석 직관 — 크기와 프로파일", "1.3 DBSCAN — 밀도·핵심·경계·잡음", "1.4 이 사례가 요구하는 판단", "1.5 관리자의 군집 검증 5문"],
        3: src[5] + ["Marketing", ":", src[6][25], "Bank/Internet Security", ":", src[6][4]],
        11: src[12] + [src[13][1], src[13][15]],
        18: src[23] + ["DBSCAN — density-based"],
        31: src[61] + ["다섯 질문으로 결과를 판정한다"],
    }
    # Cover branding must use the KMB689 source title and exact common strings.
    for token in ["KMB689: Big Data for Business Applications", "Clustering", "Korea University Business School"]:
        if token not in kmb[1]:
            failures.append(f"KMB689 cover source missing expected token {token!r}")
    for slide_no, exact in expected.items():
        checks += 1
        if normalized_slide_text(texts[slide_no - 1]) != normalized_slide_text(exact):
            failures.append(f"slide {slide_no}: approved revised/merged normalized text differs")

    controls = preservation_detection_controls(src)
    if not all(controls[key] for key in [
        "format_only_variant_accepted",
        "word_deletion_detected",
        "number_change_detected",
        "punctuation_change_detected",
    ]):
        failures.append(f"normalization mutation control failed: {controls}")
    return {
        "status": "pass" if not failures else "fail",
        "scope": "reused slides only",
        "reused_slide_count": len(REUSED_SLIDES),
        "comparison_unit": "slide-level concatenated <a:t> text",
        "normalization": ["U+00A0 to U+0020", "CR/LF/tab to space", "collapse ASCII spaces", "trim ASCII spaces"],
        "normalized_slide_checks": checks,
        "detection_controls": controls,
        "failures": failures,
    }


def gate_new_sources(texts: list[list[str]], notes: list[str]) -> dict:
    failures = []
    forbidden_stale = ["7,337", "3,852", "3,113", "4,236"]
    for slide_no in NEW_SLIDES:
        note = notes[slide_no - 1]
        mapping = EXPECTED_MAPPING[slide_no - 1]
        if mapping not in note:
            failures.append(f"slide {slide_no}: missing {mapping} provenance")
        if "MBA_S10_" not in note:
            failures.append(f"slide {slide_no}: missing S10 source citation")
        joined = "\n".join(texts[slide_no - 1])
        for stale in forbidden_stale:
            if stale in joined:
                failures.append(f"slide {slide_no}: disallowed stale/figure count {stale}")
    return {
        "status": "pass" if not failures else "fail",
        "scope": "new slides only",
        "new_slide_count": len(NEW_SLIDES),
        "source_citations": len(NEW_SLIDES) - sum("MBA_S10_" not in notes[n - 1] for n in NEW_SLIDES),
        "failures": failures,
    }


def gate_answer_leakage(texts: list[list[str]], notes: list[str]) -> dict:
    all_slide_text = ["\n".join(tokens) + "\n" + notes[i] for i, tokens in enumerate(texts)]
    banned = [
        "c0", "70.5%", "all z≈0", "not a segment", "diffuse residual",
        "세그먼트가 아니다", "그 밖의 모두", "주류 음악", "확산 군집", "잔여 군집",
    ]
    hits = []
    for slide_no, text in enumerate(all_slide_text, 1):
        lowered = text.casefold()
        for phrase in banned:
            if phrase.casefold() in lowered:
                hits.append({"slide": slide_no, "phrase": phrase})
    z_hits = []
    for slide_no, text in enumerate(all_slide_text, 1):
        count = text.count("z≈0")
        if count:
            z_hits.append({"slide": slide_no, "count": count})
    failures = []
    if hits:
        failures.append("C0 verdict or equivalent answer language detected")
    if z_hits != [{"slide": 32, "count": 2}]:
        failures.append(f"z≈0 occurrence scope is {z_hits}, expected two question-only occurrences on N14")
    return {
        "status": "pass" if not failures else "fail",
        "banned_hits": hits,
        "z_approx_zero_hits": z_hits,
        "failures": failures,
    }


def gate_figure_na(zf: ZipFile) -> dict:
    matches = []
    media = [name for name in zf.namelist() if name.startswith("ppt/media/")]
    for name in media:
        digest = hashlib.md5(zf.read(name)).hexdigest()
        if digest in RESULT_FIGURE_MD5:
            matches.append({"media": name, "md5": digest})
    return {
        "status": "n/a",
        "excluded_from_pass_denominator": True,
        "reason": "P2 pending; Block 1 imports no DBSCAN result figure",
        "known_prior_result_figure_matches": matches,
        "block1_result_figure_count": len(matches),
    }


def package_relationship_failures(zf: ZipFile) -> list[str]:
    names = set(zf.namelist())
    failures = []
    for rel_path in [name for name in names if name.endswith(".rels")]:
        root = ET.fromstring(zf.read(rel_path))
        if rel_path == "_rels/.rels":
            base = ""
        else:
            owner_dir = posixpath.dirname(posixpath.dirname(rel_path))
            base = owner_dir
        for rel in root.findall("pr:Relationship", NS):
            if rel.attrib.get("TargetMode") == "External":
                continue
            target = rel.attrib.get("Target", "")
            resolved = target.lstrip("/") if target.startswith("/") else posixpath.normpath(posixpath.join(base, target))
            if resolved not in names:
                failures.append(f"{rel_path}: missing target {resolved}")
    return failures


def gate_package_visual(zf: ZipFile, render_dir: Path, visual_audit: Path) -> dict:
    failures = []
    try:
        bad_crc = zf.testzip()
        if bad_crc:
            failures.append(f"CRC failure: {bad_crc}")
    except Exception as exc:  # pragma: no cover - defensive path
        failures.append(f"ZIP read failure: {exc}")
    failures.extend(package_relationship_failures(zf))
    root = ET.fromstring(zf.read("ppt/presentation.xml"))
    size = root.find("p:sldSz", NS)
    slide_size = [int(size.attrib["cx"]), int(size.attrib["cy"])] if size is not None else None
    if slide_size != [9144000, 6858000]:
        failures.append(f"slide size {slide_size} != [9144000, 6858000]")

    pngs = sorted(render_dir.glob("slide-*.png"), key=lambda p: int(re.search(r"(\d+)", p.stem).group(1)))
    dimensions = []
    if len(pngs) != 35:
        failures.append(f"rendered PNG count {len(pngs)} != 35")
    for png in pngs:
        with Image.open(png) as image:
            dimensions.append(list(image.size))
            if image.width < 900 or image.height < 675:
                failures.append(f"low-resolution render {png.name}: {image.size}")
    audit = json.loads(visual_audit.read_text(encoding="utf-8"))
    reviewed = audit.get("slides", [])
    if [entry.get("slide") for entry in reviewed] != list(range(1, 36)):
        failures.append("visual audit does not enumerate slides 1..35")
    if any(entry.get("status") != "pass" for entry in reviewed):
        failures.append("visual audit contains a non-pass slide")
    return {
        "status": "pass" if not failures else "fail",
        "zip_crc": "pass" if not zf.testzip() else "fail",
        "internal_relationships": "pass" if not package_relationship_failures(zf) else "fail",
        "slide_size_emu": slide_size,
        "rendered_pages": len(pngs),
        "render_dimensions": sorted({tuple(d) for d in dimensions}),
        "visual_reviewed_slides": len(reviewed),
        "visual_findings": sum(len(entry.get("findings", [])) for entry in reviewed),
        "failures": failures,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("pptx", type=Path)
    parser.add_argument("--source", type=Path, required=True)
    parser.add_argument("--kmb-source", type=Path, required=True)
    parser.add_argument("--render-dir", type=Path, required=True)
    parser.add_argument("--visual-audit", type=Path, required=True)
    args = parser.parse_args()

    with ZipFile(args.pptx) as zf:
        paths = slide_paths(zf)
        texts = [xml_text(zf.read(path)) for path in paths]
        notes = [notes_for_slide(zf, path) for path in paths]
        gates = {
            "1_structure": gate_structure(texts, notes),
            "2_source_preservation": gate_source_preservation(texts, args.source, args.kmb_source),
            "3_new_source": gate_new_sources(texts, notes),
            "4_answer_leakage": gate_answer_leakage(texts, notes),
            "5_figure_identity": gate_figure_na(zf),
            "6_package_visual": gate_package_visual(zf, args.render_dir, args.visual_audit),
        }
    scored = [key for key in gates if key != "5_figure_identity"]
    passed = sum(gates[key]["status"] == "pass" for key in scored)
    report = {
        "artifact": str(args.pptx.resolve()),
        "sha256": hashlib.sha256(args.pptx.read_bytes()).hexdigest(),
        "gate_summary": {"passed": passed, "denominator": len(scored), "gate_5": "n/a"},
        "gates": gates,
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if passed == len(scored) else 1


if __name__ == "__main__":
    sys.exit(main())
