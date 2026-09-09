// render.js — Shared markdown-to-docx renderer for KMB689 Wk3 R1.1a
// Handles: H1-H4, bold, italic, inline code, code blocks (fenced), tables,
//          blockquotes, bullet lists, numbered lists, horizontal rules,
//          image placeholders, and Korean typography.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  ImageRun, PageBreak, LevelFormat, convertInchesToTwip
} = require('docx');

const BODY_FONT = 'Noto Sans CJK KR';   // Cross-platform Korean font (avoids Windows-only Malgun Gothic page drift)
const CODE_FONT = 'Noto Sans Mono CJK KR';
const KR_FONT   = 'Noto Sans CJK KR';

// ---------- Inline text parser --------------------------------------
// Splits a line into TextRuns, honoring **bold**, *italic*, and `code`.
// --- Markdown backslash-escape support (case pipeline, R2/D2) -------
// Escaped chars are masked BEFORE emphasis matching so that `\*` can never be
// consumed as a bold/italic delimiter, then restored on output. Without this,
// `\*\*\*` leaked literal backslashes into the docx and destroyed
// significance markers. Scope: cases/ only. Wk*/scripts/render.js untouched.
const ESC_MAP = { '*': '\u0001', '_': '\u0002', '`': '\u0003', '\\': '\u0004' };
const UNESC_MAP = { '\u0001': '*', '\u0002': '_', '\u0003': '`', '\u0004': '\\' };
function maskEscapes(s) {
  return s.replace(/\\([*_`\\])/g, (m, ch) => ESC_MAP[ch] || ch);
}
function unmaskEscapes(s) {
  return s.replace(/[\u0001-\u0004]/g, c => UNESC_MAP[c]);
}

function parseInline(rawText, opts = {}) {
  const runs = [];
  // Guard against undefined
  if (!rawText) return [new TextRun({ text: '', font: BODY_FONT })];
  const text = maskEscapes(rawText);

  // Tokenize by the three markers. Escape regex-sensitive chars first.
  // Order: code (backtick) first (opaque), then bold **, then italic *
  const pattern = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*\n]+\*)/g;

  let lastIdx = 0;
  let m;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > lastIdx) {
      runs.push(new TextRun({
        text: unmaskEscapes(text.slice(lastIdx, m.index)),
        font: BODY_FONT,
        size: opts.size || 22,
        bold: opts.bold || false,
        italics: opts.italics || false,
      }));
    }
    const tok = m[0];
    if (tok.startsWith('`') && tok.endsWith('`')) {
      runs.push(new TextRun({
        text: unmaskEscapes(tok.slice(1, -1)),
        font: CODE_FONT,
        size: opts.size || 20,
      }));
    } else if (tok.startsWith('**')) {
      runs.push(new TextRun({
        text: unmaskEscapes(tok.slice(2, -2)),
        font: BODY_FONT,
        size: opts.size || 22,
        bold: true,
      }));
    } else if (tok.startsWith('*')) {
      runs.push(new TextRun({
        text: unmaskEscapes(tok.slice(1, -1)),
        font: BODY_FONT,
        size: opts.size || 22,
        italics: true,
      }));
    }
    lastIdx = m.index + tok.length;
  }
  if (lastIdx < text.length) {
    runs.push(new TextRun({
      text: unmaskEscapes(text.slice(lastIdx)),
      font: BODY_FONT,
      size: opts.size || 22,
      bold: opts.bold || false,
      italics: opts.italics || false,
    }));
  }
  if (runs.length === 0) {
    runs.push(new TextRun({ text: unmaskEscapes(text), font: BODY_FONT, size: opts.size || 22 }));
  }
  return runs;
}

// ---------- Block-level parser --------------------------------------
// Reads the markdown and produces a list of docx elements.
function parseMarkdown(src, imageResolver) {
  const lines = src.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block ```...```
    if (line.match(/^```/)) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].match(/^```/)) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      // One paragraph per code line to preserve line breaks
      for (const codeLine of codeLines) {
        blocks.push(new Paragraph({
          children: [new TextRun({
            text: codeLine || ' ',
            font: CODE_FONT,
            size: 18,
          })],
          spacing: { before: 0, after: 0, line: 264 },
          shading: { type: ShadingType.CLEAR, fill: 'F2F2F2', color: 'auto' },
          border: {
            left:  { style: BorderStyle.SINGLE, size: 4, color: 'DDDDDD', space: 4 },
            right: { style: BorderStyle.SINGLE, size: 4, color: 'DDDDDD', space: 4 },
          },
        }));
      }
      // Trailing spacer
      blocks.push(new Paragraph({ children: [new TextRun('')], spacing: { after: 120 } }));
      continue;
    }

    // Page break marker <!-- pagebreak -->  (typesetting only; absent from all pre-existing files)
    if (line.trim() === '<!-- pagebreak -->') {
      blocks.push(new Paragraph({ children: [new PageBreak()] }));
      i++;
      continue;
    }

    // Horizontal rule ---
    if (line.trim() === '---') {
      blocks.push(new Paragraph({
        children: [new TextRun('')],
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '888888', space: 1 } },
        spacing: { before: 120, after: 120 },
      }));
      i++;
      continue;
    }

    // Table: line contains | and next line is separator
    if (line.includes('|') && lines[i + 1] && /^\s*\|?\s*[:\-\|\s]+\|/.test(lines[i + 1])) {
      const tableLines = [];
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      // Remove separator row (2nd line)
      const header = splitRow(tableLines[0]);
      const bodyRows = tableLines.slice(2).map(splitRow);
      blocks.push(buildTable(header, bodyRows));
      blocks.push(new Paragraph({ children: [new TextRun('')], spacing: { after: 100 } }));
      continue;
    }

    // Headings
    const h1 = line.match(/^#\s+(.*)$/);
    const h2 = line.match(/^##\s+(.*)$/);
    const h3 = line.match(/^###\s+(.*)$/);
    const h4 = line.match(/^####\s+(.*)$/);
    if (h1) {
      blocks.push(new Paragraph({
        children: parseInline(h1[1], { size: 36, bold: true }),
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 240, after: 160 },
      }));
      i++; continue;
    }
    if (h2) {
      blocks.push(new Paragraph({
        children: parseInline(h2[1], { size: 30, bold: true }),
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
      }));
      i++; continue;
    }
    if (h3) {
      blocks.push(new Paragraph({
        children: parseInline(h3[1], { size: 26, bold: true }),
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 },
      }));
      i++; continue;
    }
    if (h4) {
      blocks.push(new Paragraph({
        children: parseInline(h4[1], { size: 24, bold: true }),
        heading: HeadingLevel.HEADING_4,
        spacing: { before: 180, after: 80 },
      }));
      i++; continue;
    }

    // Image placeholder: *[여기에 X.png 삽입 ...]*
    const imgMatch = line.match(/\*\[.*?([A-Za-z0-9_]+\.png).*?\]\*/);
    if (imgMatch && imageResolver) {
      const imgPath = imageResolver(imgMatch[1]);
      if (imgPath && fs.existsSync(imgPath)) {
        const imgBuf = fs.readFileSync(imgPath);
        blocks.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 200 },
          children: [new ImageRun({
            data: imgBuf,
            transformation: { width: 520, height: 340 },
            type: 'png',
          })],
        }));
        i++; continue;
      }
    }

    // Blockquote > text
    if (line.match(/^>\s/) || line.match(/^>$/)) {
      // Collect consecutive blockquote lines
      const quoteLines = [];
      while (i < lines.length && (lines[i].match(/^>\s?/) || lines[i].trim() === '>')) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      for (const ql of quoteLines) {
        blocks.push(new Paragraph({
          children: parseInline(ql || ' '),
          indent: { left: 400 },
          border: {
            left: { style: BorderStyle.SINGLE, size: 12, color: 'AAAAAA', space: 8 },
          },
          shading: { type: ShadingType.CLEAR, fill: 'F8F8F8', color: 'auto' },
          spacing: { before: 40, after: 40 },
        }));
      }
      continue;
    }

    // Bullet list
    if (line.match(/^-\s+/) || line.match(/^\*\s+/)) {
      const content = line.replace(/^[-*]\s+/, '');
      blocks.push(new Paragraph({
        children: parseInline(content),
        bullet: { level: 0 },
        spacing: { before: 40, after: 40 },
      }));
      i++; continue;
    }

    // Numbered list
    const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch) {
      blocks.push(new Paragraph({
        children: parseInline(numMatch[2]),
        numbering: { reference: 'default-numbering', level: 0 },
        spacing: { before: 40, after: 40 },
      }));
      i++; continue;
    }

    // Empty line
    if (line.trim() === '') {
      blocks.push(new Paragraph({
        children: [new TextRun('')],
        spacing: { before: 40, after: 40 },
      }));
      i++; continue;
    }

    // Default paragraph
    blocks.push(new Paragraph({
      children: parseInline(line),
      spacing: { before: 60, after: 60, line: 320 },
    }));
    i++;
  }

  return blocks;
}

function splitRow(rowLine) {
  return rowLine.split('|').slice(1, -1).map(c => c.trim());
}

function buildTable(headerCells, bodyRows) {
  const nCols = headerCells.length;
  // Total table width ≈ 9000 DXA (6.25")
  const totalWidth = 9000;
  const colW = Math.floor(totalWidth / nCols);
  const columnWidths = Array(nCols).fill(colW);

  const rows = [];
  // Header row
  rows.push(new TableRow({
    tableHeader: true,
    cantSplit: true,
    children: headerCells.map(c => new TableCell({
      width: { size: colW, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: 'D9D9D9', color: 'auto' },
      children: [new Paragraph({
        children: parseInline(c, { bold: true }),
        alignment: AlignmentType.CENTER,
        keepNext: true,
      })],
    })),
  }));
  // Body rows — keepNext on every row but the last keeps the whole
  // regression table on one page (R2/D7).
  bodyRows.forEach((row, ri) => {
    const padded = [...row];
    while (padded.length < nCols) padded.push('');
    const notLast = ri < bodyRows.length - 1;
    rows.push(new TableRow({
      cantSplit: true,
      children: padded.slice(0, nCols).map(c => new TableCell({
        width: { size: colW, type: WidthType.DXA },
        children: [new Paragraph({ children: parseInline(c || ' '), keepNext: notLast })],
      })),
    }));
  });

  return new Table({
    rows,
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths,
  });
}

// ---------- Document builder --------------------------------------
async function buildDocx({ mdPath, outPath, title, imageResolver }) {
  const md = fs.readFileSync(mdPath, 'utf-8');
  const children = parseMarkdown(md, imageResolver);

  const doc = new Document({
    creator: '',
    lastModifiedBy: '',
    title: title || path.basename(outPath, '.docx'),
    description: '',
    numbering: {
      config: [{
        reference: 'default-numbering',
        levels: [{
          level: 0,
          format: LevelFormat.DECIMAL,
          text: '%1.',
          alignment: AlignmentType.START,
          style: { paragraph: { indent: { left: 360, hanging: 260 } } },
        }],
      }],
    },
    styles: {
      default: {
        document: { run: { font: BODY_FONT, size: 22 } },
      },
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },     // US Letter (DXA)
          margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
        },
      },
      children,
    }],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buf);
  // Strip author metadata via post-processing (docx-js already accepts creator:'', but belt-and-suspenders):
  return outPath;
}

module.exports = { buildDocx, parseMarkdown };
