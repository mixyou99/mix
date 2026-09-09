// ============================================================================
// render_shared.js — KMB689 공유 렌더러 · v6 (반입 2026-08-26, Phase K)
//
// ── 배포 전 게이트 (필독) ───────────────────────────────────────────────────
// 합격 기준은 **픽스처 통과가 아니다.** 다음 셋을 모두 본다.
//   ① 실자산 재렌더 diff에서 **회귀 0**
//   ② **이미지 보존** — word/media 개수 · 각 png md5 · PDF 페이지 수
//   ③ **노출 별 총수 대칭 판정** — 신 > 구 이면 **회귀**. 증감 0이어도 위치가
//      바뀌었으면 대목을 인용해 보고한다.
// v1~v3는 픽스처 전건 통과하고도 실자산에서 회귀를 냈다. v4는 회귀 0을 내고도
// `![](...)` 를 조용히 삼켜 S11 학생본 그림을 없앴다(PDF 4p→3p). v5는 자리표시자를
// 놓쳤다. ③이 없어 배치 A에서 24건 중 17건 악화를 통과시켰다가 전건 롤백했다.
//   → fixtures/ 는 **회귀 재발 감시용**이지 승인 근거가 아니다.
//
// ── 이미지 정책 (v5·v6 가드) ────────────────────────────────────────────────
// 이 렌더러는 이미지 문법을 **일부러 지원하지 않는다.** 두 형태 모두 가드가 막는다.
//   · 표준 마크다운  `![alt](path.png)`        → v5 가드
//   · 자리표시자     `*[여기에 x.png 삽입]*`   → v6 가드 (imageResolver 없을 때)
// 각 주차 build 스크립트의 **허용목록(imgs)** 이 학생용/강사용 그림 분리 장치이며,
// 목록에 있는 것만 자리표시자로 전처리된다. 렌더러에 이미지 지원을 넣으면
// 그 허용목록이 무력화되어 **강사용 그림이 학생용에 섞인다.**
// **가드가 걸리면 우회하지 말고 해당 주차의 build 스크립트를 통해 렌더할 것.**
//
// ⚠ 알려진 한계 — 여러 줄에 걸친 이탤릭 블록
//   한 이탤릭이 여러 줄에 걸쳐 열리고 닫히는 md는 **줄 단위 파서에서 어떤 규칙으로도
//   온전히 처리되지 않는다**(해당 md 110개). 고칠 곳은 렌더러가 아니라 소스다.
//   구 렌더러가 덜 나빠 보였던 것은 우연히 별 두 개를 먹었기 때문이다.
//   상세: cases/scripts/SCAN_NOTES.md §6-2
//
// 환경 고정: package.json + package-lock.json (node 22.23.2 · docx 9.7.1).
// 통합 상태: 기존 렌더러 10개는 그대로 둔다(교수 지시, Phase F §1-1).
// ────────────────────────────────────────────────────────────────────────────
//
// 베이스: 02_working/exam_assets_final/scripts/render.js (렌더러 "C", 370줄)
//         — exam 잠금 산출물 6종을 <w:t> 시퀀스까지 재현하는 것으로 확정된 진본.
//
// C 대비 변경은 인라인 파서 하나뿐이다(블록 파서·표·폰트·페이지 설정 무변경):
//   E-1  백슬래시 이스케이프(\* \_ \` \\)를 강조 매칭 前에 마스킹  [Phase B 패치 승계]
//   E-5b 비이스케이프 별 런이 서로를 잡아먹던 결함 제거
//        (0.139*** … 0.032** 가 짝지어져 사이 텍스트를 굵게 먹고 별을 소실시켰다.
//         뒤따르는 정상 **굵게** 쌍까지 파괴됐다.)
//
// v2 (E-4) — v1의 CommonMark 좌/우 플랭킹 규칙을 폐기했다.
//   v1은 닫는 구분자 앞이 문장부호(`)`·`%`)이고 뒤가 한글일 때 닫기를 거부해
//   `**G1(러너)과 G2(마라톤 애호가)**에` 같은 정상 굵게를 리터럴로 깨뜨렸다.
//   한국어는 조사가 바로 붙으므로 이 패턴이 자료 전반에 깔려 있다(회귀 89건).
//   v2는 문장부호·문자 종류를 보지 않고 규칙 두 개만 쓴다:
//     R1  별 런 길이 >= 3 은 항상 리터럴
//     R2  여는 구분자 뒤가 공백/끝이면 안 되고, 닫는 구분자 앞이 공백/끝이면 안 된다
//   또한 코드 스팬을 선분리하지 않고 원본과 같은 좌->우 단일 스캔으로 처리한다
//   (v1은 *이탤릭 안의 `코드`* 를 쪼갰다).
//
// v3 — v2는 *이탤릭 안의 **굵게*** 중첩을 처리하지 못해 안쪽 별을 리터럴로 노출시켰다
//   (임원 슬라이드 머리말·토론 프롬프트 관용구, 실자산 회귀 68건).
//   R3: 강조 span의 내용을 재귀 파싱한다. 단 코드 스팬은 재귀하지 않는다 —
//   원본 C도 강조 안의 백틱을 리터럴로 남기므로(정규식 alternation 순서),
//   재귀하면 *…(`EXHIBITS_F`)…* 의 백틱이 사라져 텍스트가 달라진다.
//
// v4 — 두 가지 추가.
//   R1' len>=3 은 "열지 못한다"로 완화. 닫을 때는 부분소비를 허용해
//        *이탤릭 **굵게** 끝*** 의 끝 *** 를 **(굵게 닫기)+*(이탤릭 닫기)로 분해한다.
//        유의도 표기(0.139***)는 스택에 열린 것이 없어 그대로 리터럴로 남는다.
//   R4  뒤에 닫을 수 있는 런이 없으면 애초에 열지 않는다. 이것이 없으면
//        별표(*, **, ***) 같은 별 나열이 문서 끝까지 강조로 물들었다.
//   E-4  선택적 출처 스탬프(buildDocx의 stamp 옵션, 기본 OFF)
//
// ⚠ 회귀 대조용으로 쓸 때는 stamp를 켜지 말 것 — 메타데이터가 달라진다.
// ⚠ D7 조판(cantSplit·keepNext)은 포함하지 않는다. 그건 render_cases.js 소관이고
//    페이지 배치를 바꾼다.
// ============================================================================
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


const RENDERER_ID = 'render_shared.js v6 (v5 + placeholder-image guard)';

// ---------- Inline text parser (E-3 rewrite) --------------------------------
// Two independent defects fixed vs renderer "C":
//   (1) backslash escapes (\* \_ \` \\) were parsed as emphasis  [Phase B patch]
//   (2) UNESCAPED star runs (0.139***) paired with a later star run and ate
//       the text between them — and could destroy a legitimate **bold** pair
//       downstream. Not fixable by (1); this is the E-5b rewrite.
//
// Model: CommonMark-style delimiter runs with left/right flanking, plus one
// deliberate restriction — a run of THREE OR MORE stars is always literal.
// Rationale: this corpus uses *** exclusively as a significance marker; no
// source uses ***bold-italic***. Verified against all promoted sources.

// 델리미터 규칙 v2 — CommonMark 플랭킹 폐기, 최소 규칙 2개만.
//  R1) 별 런 길이 >= 3 은 항상 리터럴 (이 코퍼스에서 *** 는 유의도 표기 전용)
//  R2) 여는 구분자는 뒤가 공백/문서끝이면 안 되고, 닫는 구분자는 앞이 공백/문서끝이면 안 된다
//      -> 문장부호·한글 여부를 보지 않는다. 한국어 조사 결합에 안전.
// 스캔 순서는 원본 정규식과 동일: 좌->우, 각 위치에서 코드스팬 먼저, 그 다음 강조.
// 델리미터 규칙 v3 — v2 + 중첩 재귀
//  R1 별 런 길이 >= 3 은 항상 리터럴
//  R2 여는 구분자 뒤가 공백/끝이면 안 되고, 닫는 구분자 앞이 공백/끝이면 안 된다
//  R3 (신규) 강조 span의 내용은 강조에 한해 재귀 파싱한다 — *이탤릭 안의 **굵게*** 지원.
//     단 코드 스팬은 재귀하지 않는다(원본 C도 강조 안의 백틱을 리터럴로 남긴다).
//  스캔 순서는 원본과 동일: 좌->우, 각 위치에서 코드스팬 먼저, 그다음 강조.
// 델리미터 규칙 v4 — v3 + 닫는 위치 부분소비
//  R1' 별 런 길이 >= 3 은 **열지 못한다**(유의도 표기 보호). 단 닫을 때는 부분소비 허용:
//      *이탤릭 **굵게** 끝*** 의 끝 *** 는 **(굵게 닫기) + *(이탤릭 닫기)로 분해된다.
//      유의도 표기는 여는/닫는 대상이 스택에 없어 그대로 리터럴로 남는다.
//  R2  여는 구분자 뒤가 공백/끝이면 안 되고, 닫는 구분자 앞이 공백/끝이면 안 된다
//  R3  강조는 중첩된다. 코드 스팬은 강조 바깥(최상위)에서만 인식한다(원본 C와 동일).
const ESC_MAP   = { '*': '\u0001', '_': '\u0002', '`': '\u0003', '\\': '\u0004' };
const UNESC_MAP = { '\u0001': '*', '\u0002': '_', '\u0003': '`', '\u0004': '\\' };
function maskEscapes(s)   { return s.replace(/\\([*_`\\])/g, (m, ch) => ESC_MAP[ch] || ch); }
function unmaskEscapes(s) { return s.replace(/[\u0001-\u0004]/g, c => UNESC_MAP[c]); }
const isWs = c => c === undefined || /\s/.test(c);

function starRuns(s) {
  const at = new Map(), list = [];
  for (let i = 0; i < s.length; ) {
    if (s[i] !== '*') { i++; continue; }
    let j = i; while (j < s.length && s[j] === '*') j++;
    const len = j - i;
    const r = { start: i, end: j, len,
                canOpen:  len <= 2 && !isWs(s[j]),      // R1' : len>=3 은 열지 못함
                canClose: !isWs(s[i - 1]) };
    at.set(i, r); list.push(r); i = j;
  }
  // R4: 뒤에 닫을 수 있는 런이 없으면 애초에 열지 않는다(짝 없는 별을 리터럴로 보존)
  for (let k = 0; k < list.length; k++) {
    if (!list[k].canOpen) continue;
    const need = list[k].len;
    if (!list.slice(k + 1).some(x => x.canClose && x.len >= need)) list[k].canOpen = false;
  }
  return at;
}

function tokenize(text) {
  const at = starRuns(text);
  const root = { ch: [] };
  const stack = [{ node: root, len: 0, kind: null }];
  let buf = '', i = 0;
  const top = () => stack[stack.length - 1].node;
  const flush = () => { if (buf) { top().ch.push({ k: 'text', t: buf }); buf = ''; } };

  while (i < text.length) {
    if (stack.length === 1 && text[i] === '`') {      // R3: 코드는 최상위에서만
      const j = text.indexOf('`', i + 1);
      if (j > i + 1) { flush(); top().ch.push({ k: 'code', t: text.slice(i + 1, j) }); i = j + 1; continue; }
    }
    const r = at.get(i);
    if (r) {
      let avail = r.len;
      if (r.canClose) {                                // 안쪽부터 부분소비하며 닫는다
        while (avail > 0 && stack.length > 1 && stack[stack.length - 1].len <= avail) {
          flush();                                     // 닫히는 프레임 안으로 먼저 비운다
          avail -= stack.pop().len;
        }
      }
      if (avail > 0 && r.canOpen) {                    // 남은 별로 연다
        flush();
        const len = avail >= 2 ? 2 : 1;
        const node = { ch: [], kind: len === 2 ? 'bold' : 'italic' };
        top().ch.push(node);
        stack.push({ node, len, kind: node.kind });
        avail -= len;
      }
      // 짝 못 찾은 별은 리터럴 — flush 하지 않는다(런이 쪼개져 대조에 허위 차이가 생긴다)
      if (avail > 0) buf += '*'.repeat(avail);
      i = r.end; continue;
    }
    buf += text[i]; i++;
  }
  flush();

  const out = [];
  (function walk(node, bold, italics) {
    for (const c of node.ch) {
      if (c.ch) walk(c, bold || c.kind === 'bold', italics || c.kind === 'italic');
      else out.push({ k: c.k, t: c.t, bold, italics });
    }
  })(root, false, false);
  return out;
}

function parseInline(rawText, opts = {}) {
  if (!rawText) return [new TextRun({ text: '', font: BODY_FONT })];
  const runs = [];
  for (const tok of tokenize(maskEscapes(rawText))) {
    const text = unmaskEscapes(tok.t);
    runs.push(new TextRun({
      text,
      font: tok.k === 'code' ? CODE_FONT : BODY_FONT,
      size: opts.size || (tok.k === 'code' ? 20 : 22),
      bold:    tok.bold    || opts.bold    || false,
      italics: tok.italics || opts.italics || false,
    }));
  }
  if (runs.length === 0) {
    runs.push(new TextRun({ text: unmaskEscapes(maskEscapes(rawText)), font: BODY_FONT, size: opts.size || 22 }));
  }
  return runs;
}

// ---------- Block-level parser --------------------------------------
// Reads the markdown and produces a list of docx elements.
function parseMarkdown(src, imageResolver) {
  const lines = src.split('\n');
  const blocks = [];
  let i = 0;
  let pendingPB = false;

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
      pendingPB = true;
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
        pageBreakBefore: pendingPB,
        spacing: { before: 240, after: 160 },
      }));
      pendingPB = false;
      i++; continue;
    }
    if (h2) {
      blocks.push(new Paragraph({
        children: parseInline(h2[1], { size: 30, bold: true }),
        heading: HeadingLevel.HEADING_2,
        pageBreakBefore: pendingPB,
        spacing: { before: 240, after: 120 },
      }));
      pendingPB = false;
      i++; continue;
    }
    if (h3) {
      blocks.push(new Paragraph({
        children: parseInline(h3[1], { size: 26, bold: true }),
        heading: HeadingLevel.HEADING_3,
        pageBreakBefore: pendingPB,
        spacing: { before: 200, after: 100 },
      }));
      pendingPB = false;
      i++; continue;
    }
    if (h4) {
      blocks.push(new Paragraph({
        children: parseInline(h4[1], { size: 24, bold: true }),
        heading: HeadingLevel.HEADING_4,
        pageBreakBefore: pendingPB,
        spacing: { before: 180, after: 80 },
      }));
      pendingPB = false;
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
    children: headerCells.map(c => new TableCell({
      width: { size: colW, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: 'D9D9D9', color: 'auto' },
      children: [new Paragraph({
        children: parseInline(c, { bold: true }),
        alignment: AlignmentType.CENTER,
      })],
    })),
  }));
  // Body rows
  for (const row of bodyRows) {
    const padded = [...row];
    while (padded.length < nCols) padded.push('');
    rows.push(new TableRow({
      children: padded.slice(0, nCols).map(c => new TableCell({
        width: { size: colW, type: WidthType.DXA },
        children: [new Paragraph({ children: parseInline(c || ' ') })],
      })),
    }));
  }

  return new Table({
    rows,
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths,
  });
}

// ---------- Document builder --------------------------------------
// ⚠ 이미지 가드 (v5, 2026-08-26) — 조용한 그림 소실을 막는다.
// 이 렌더러는 원본 C와 마찬가지로 표준 마크다운 이미지 문법을 처리하지 않는다.
// 그림은 각 build 스크립트가 **명시적 허용목록**을 가지고 전처리해서
//   ![alt](../figures/x.png)  ->  *[x.png 삽입]*
// 로 바꾸고 imageResolver를 넘기는 구조다(Wk4·Wk5 build 스크립트 참조).
// 전처리 없이 이 렌더러를 직접 부르면 그림이 오류 없이 사라진다 — 실제로 한 번 냈다.
// 그래서 전처리되지 않은 ![](...) 가 남아 있으면 **던진다**. 조용히 넘어가지 않는다.
const RAW_IMG_RE = /!\[[^\]]*\]\([^)]*\)/g;
// v6 — 자리표시자도 같은 가드 대상이다. `*[… x.png 삽입]*` 는 imageResolver 가 없으면
// 조용히 버려진다(v5 는 ![](...) 만 막았다). Wk3 3건이 이 구멍으로 그림을 잃을 뻔했다.
const PLACEHOLDER_IMG_RE = /\*\[[^\]]*?[A-Za-z0-9_]+\.png[^\]]*?\]\*/g;
function assertResolverForPlaceholders(md, mdPath, imageResolver) {
  const hits = md.match(PLACEHOLDER_IMG_RE);
  if (!hits) return;
  const resolves = imageResolver && hits.some(h => {
    const m = h.match(/([A-Za-z0-9_]+\.png)/);
    try { return m && imageResolver(m[1]); } catch (e) { return false; }
  });
  if (resolves) return;
  throw new Error(
    `[render_shared] 그림 자리표시자 ${hits.length}건이 있는데 해결되는 imageResolver 가 없다: ${path.basename(mdPath)}\n` +
    `  ${hits.slice(0, 3).join('\n  ')}\n` +
    `  -> 이 파일은 해당 주차 build 스크립트(허용목록 + imageResolver)를 통해 렌더해야 한다.`);
}
function assertNoRawImageMarkdown(md, mdPath, allow) {
  const hits = md.match(RAW_IMG_RE);
  if (!hits || allow) return;
  throw new Error(
    `[render_shared] 전처리되지 않은 이미지 마크다운 ${hits.length}건: ${path.basename(mdPath)}\n` +
    `  ${hits.slice(0, 3).join('\n  ')}\n` +
    `  -> 이 파일은 해당 주차의 build 스크립트(허용목록 + imageResolver)를 통해 렌더해야 한다.\n` +
    `  -> 의도적으로 텍스트로 남기려면 buildDocx({ allowRawImageMarkdown: true })`);
}

async function buildDocx({ mdPath, outPath, title, imageResolver, stamp = false, allowRawImageMarkdown = false }) {
  const md = fs.readFileSync(mdPath, 'utf-8');
  assertNoRawImageMarkdown(md, mdPath, allowRawImageMarkdown);
  assertResolverForPlaceholders(md, mdPath, imageResolver);
  const children = parseMarkdown(md, imageResolver);

  const doc = new Document({
    creator: '',
    lastModifiedBy: '',
    title: title || path.basename(outPath, '.docx'),
    description: stamp
      ? `${RENDERER_ID} | src=${path.basename(mdPath)} | ${new Date().toISOString()}`
      : '',
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

module.exports = { buildDocx, parseMarkdown, parseInline, RENDERER_ID };
