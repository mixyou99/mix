import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const runtimeModules = process.env.RUNTIME_NODE_MODULES;
if (!runtimeModules || !path.isAbsolute(runtimeModules)) {
  throw new Error("Set RUNTIME_NODE_MODULES to the bundled workspace dependency path");
}
const { FileBlob, PresentationFile } = await import(pathToFileURL(
  path.join(runtimeModules, "@oai/artifact-tool/dist/artifact_tool.mjs"),
).href);

const workspaceDir = "/Users/gunwoonglee/Documents/ChatGPT/Lecture Materials";
const sourcePath = path.join(workspaceDir, "work/source/KMB689_Wk1_S1_Course_Introduction_Class25S.pptx");
const outputDir = path.join(workspaceDir, "teaching/KMB689/02_working/Wk1");
const FINAL_PPTX = path.join(outputDir, "KMB689_Wk1_Orientation_Supervision_R1.pptx");
const SKILL_DIR = "/Users/gunwoonglee/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations";
const RUNTIME_PYTHON = "/Users/gunwoonglee/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const buildDir = path.join(workspaceDir, ".codex-finalizer/wk1-r1");

const RED = "#A50000";
const NAVY = "#002060";
const INK = "#333333";
const MUTED = "#666666";
const LIGHT = "#F3F4F6";
const LIGHT_RED = "#F9E8E8";
const LIGHT_BLUE = "#EAF0F8";
const WHITE = "#FFFFFF";
const KOR = "Apple SD Gothic Neo";
const SERIF = "Times New Roman";
const pendingSlides = new Set([8, 10, 11, 13, 14]);

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });

const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
const originals = [...presentation.slides.items];
if (originals.length !== 47) throw new Error(`Source slide count changed: ${originals.length}`);

function shapeByName(slide, name) {
  const shape = slide.shapes.items.find((item) => item.name === name);
  if (!shape) throw new Error(`Missing shape ${name}`);
  return shape;
}

function setSlideNumber(slide, number) {
  for (const shape of slide.shapes.items) {
    if (shape.name?.startsWith("Slide Number Placeholder")) shape.text = String(number);
  }
}

function addText(slide, name, value, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = value;
  shape.text.style = {
    typeface: KOR,
    fontSize: 23,
    color: INK,
    autoFit: "shrinkText",
    wrap: "square",
    verticalAlignment: "top",
    insets: { top: 3, right: 5, bottom: 3, left: 5 },
    ...style,
  };
  return shape;
}

function addTitle(slide, title, section = "") {
  addText(slide, "wk1-title", title, { left: 58, top: 34, width: 770, height: 58 }, {
    typeface: KOR, fontSize: 34, bold: true, color: RED, verticalAlignment: "middle",
  });
  if (section) {
    addText(slide, "wk1-section", section, { left: 61, top: 93, width: 520, height: 24 }, {
      typeface: KOR, fontSize: 12, bold: true, color: NAVY, verticalAlignment: "middle",
    });
  }
}

function addBullets(slide, items, position = { left: 105, top: 155, width: 750, height: 440 }, options = {}) {
  const paragraphs = items.map((item) => ({
    bulletCharacter: "■",
    marginLeft: 24 * 12700,
    indent: -12 * 12700,
    spaceAfter: (options.spaceAfterPt ?? 12) * 100,
    runs: Array.isArray(item) ? item : [item],
  }));
  return addText(slide, options.name ?? "wk1-bullets", paragraphs, position, {
    fontSize: options.fontSize ?? 24,
    color: options.color ?? INK,
    lineSpacing: options.lineSpacing ?? 1.12,
    ...options.style,
  });
}

function addQuote(slide, quote, detail = "", options = {}) {
  addText(slide, "wk1-quote", quote, options.quotePosition ?? { left: 100, top: 190, width: 760, height: 170 }, {
    fontSize: options.fontSize ?? 34,
    bold: true,
    color: options.color ?? NAVY,
    alignment: "center",
    verticalAlignment: "middle",
  });
  if (detail) {
    addText(slide, "wk1-quote-detail", detail, options.detailPosition ?? { left: 125, top: 405, width: 710, height: 115 }, {
      fontSize: options.detailSize ?? 22,
      color: options.detailColor ?? MUTED,
      alignment: "center",
      verticalAlignment: "middle",
    });
  }
}

function addTable(slide, values, position, columnWidths, options = {}) {
  const table = slide.tables.add({
    rows: values.length,
    columns: values[0].length,
    left: position.left,
    top: position.top,
    width: position.width,
    height: position.height,
    columnWidths,
    values,
  });
  table.borders.assign({ style: "solid", fill: "#C8C8C8", width: 1 });
  for (let r = 0; r < values.length; r++) {
    for (let c = 0; c < values[0].length; c++) {
      const cell = table.getCell(r, c);
      cell.fill = r === 0 ? RED : (r % 2 === 0 ? LIGHT : WHITE);
      cell.text.style = {
        typeface: KOR,
        fontSize: r === 0 ? (options.headerSize ?? 15) : (options.fontSize ?? 15),
        bold: r === 0,
        color: r === 0 ? WHITE : INK,
        alignment: options.alignments?.[c] ?? "center",
        verticalAlignment: "middle",
        autoFit: "shrinkText",
        insets: { top: 2, right: 3, bottom: 2, left: 3 },
      };
    }
  }
  return table;
}

function note(slide, number, mapping, source, stage = "가") {
  slide.speakerNotes.textFrame.setText(
    `KMB689 Wk1 | slide: ${number} | stage: (${stage}) | mapping: ${mapping} | source: ${source}`,
  );
}

function fresh(number, title, section, mapping, source, stage = "가") {
  const slide = originals[34].duplicate();
  setSlideNumber(slide, number);
  addTitle(slide, title, section);
  note(slide, number, mapping, source, stage);
  return slide;
}

function pending(number, title, mapping, source) {
  const slide = fresh(number, title, "ORIENTATION · SYLLABUS PENDING", mapping, source, "나");
  return slide;
}

const outputs = [];

// 1 · cover
{
  const slide = originals[0].duplicate();
  setSlideNumber(slide, 1);
  shapeByName(slide, "Title 1").text = "KMB689: Big Data for Business Applications\n\nSeminar 1\nCourse Introduction";
  note(slide, 1, "R1", "Class25S source slide 1; Wk1 plan §8", "가");
  outputs.push(slide);
}

// 2 · route
{
  const slide = fresh(2, "오늘의 흐름", "ORIENTATION", "R2", "Class25S source slide 2; Wk1 block1/block2 notes");
  addBullets(slide, [
    "오리엔테이션과 과목의 범위",
    "왜 관리자가 분석을 감독하는가",
    "두 개의 보고서를 읽고 각자 판정",
    "학생의 질문을 16주 로드맵에 연결",
  ], { left: 125, top: 160, width: 710, height: 400 }, { fontSize: 27, spaceAfterPt: 18 });
  outputs.push(slide);
}

// 3 · instructor — exact reposition except slide number field
{
  const slide = originals[35].duplicate();
  setSlideNumber(slide, 3);
  note(slide, 3, "R36", "Class25S source slide 36", "가");
  outputs.push(slide);
}

// 4 · instructor context
{
  const slide = fresh(4, "강사소개 · 산업과 연구", "ORIENTATION", "R37+R38", "Class25S source slides 37–38");
  addTable(slide, [
    ["산업 데이터 분석", "플랫폼·AI 연구"],
    ["Medicine / Healthcare", "AI 추천과 소비자 선택"],
    ["Finance · Law", "디지털 경제와 기업 의사결정"],
    ["IT Industry · Retailing", "데이터 기반 경영"],
  ], { left: 90, top: 165, width: 780, height: 340 }, [390, 390], { fontSize: 21, headerSize: 22 });
  addText(slide, "instructor-link", "분석을 만드는 경험과 분석을 판단하는 연구를 이 수업에서 연결합니다.", { left: 110, top: 545, width: 740, height: 60 }, {
    fontSize: 22, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 5 · personal introduction
{
  const slide = fresh(5, "강사소개 · 수업 밖에서", "ORIENTATION", "R39+R40+R41", "Class25S source slides 39–41");
  addQuote(slide, "What I liked to do …\nI also loved to do …\nBUT I have to do …", "교수의 소개 뒤에는 여러분의 소개가 이어집니다.", {
    fontSize: 31, color: RED, detailSize: 21,
  });
  outputs.push(slide);
}

// 6 · student introductions
{
  const slide = originals[41].duplicate();
  setSlideNumber(slide, 6);
  note(slide, 6, "R42", "Class25S source slide 42", "가");
  outputs.push(slide);
}

// 7 · survey
{
  const slide = originals[46].duplicate();
  setSlideNumber(slide, 7);
  note(slide, 7, "R47", "Class25S source slide 47", "가");
  outputs.push(slide);
}

// 8 · pending logistics
outputs.push(pending(8, "강의 정보", "R10", "2027 syllabus required"));

// 9 · known class structure
{
  const slide = fresh(9, "수업의 두 블록", "ORIENTATION", "R22", "Wk1 block notes; design_plan §3");
  addTable(slide, [
    ["블록 1 · 75분", "휴식 · 10분", "블록 2 · 75분"],
    ["개념과 읽는 법", "판정을 손에 쥔 채", "사례와 감독 판단"],
  ], { left: 70, top: 225, width: 820, height: 220 }, [310, 200, 310], { fontSize: 24, headerSize: 22 });
  addText(slide, "class-duration", "한 주 수업은 2시간 40분입니다.", { left: 220, top: 500, width: 520, height: 55 }, {
    fontSize: 25, bold: true, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 10–11 · pending logistics
outputs.push(pending(10, "평가와 시험", "R23+R26", "2027 syllabus required"));
outputs.push(pending(11, "출석과 참여", "R24", "2027 syllabus required"));

// 12 · class operating principles
{
  const slide = fresh(12, "오늘의 운영 원칙", "ORIENTATION", "R32+R45", "Wk1 instructor notes; Class25S source slides 32 and 45");
  addBullets(slide, [
    "판정은 먼저 각자 기록한 뒤 조별로 대조합니다.",
    "학생의 질문은 강사 용어로 고쳐 쓰지 않고 그대로 모읍니다.",
    "표를 직접 정렬하고 계산을 검산하는 행동을 권장합니다.",
    "어느 보고서가 정답인지 미리 신호를 주지 않습니다.",
  ], { left: 105, top: 160, width: 760, height: 420 }, { fontSize: 25, spaceAfterPt: 17 });
  outputs.push(slide);
}

// 13–14 · pending logistics
outputs.push(pending(13, "자료 · LMS · 조 편성", "R21+R27+R28", "2027 syllabus required"));
outputs.push(pending(14, "과제와 마감", "R25", "2027 syllabus required"));

// 15 · required/not required
{
  const slide = fresh(15, "요구하는 것과 요구하지 않는 것", "COURSE SCOPE", "R17+R18", "Wk1 block1 notes A.3");
  addTable(slide, [
    ["요구하지 않음", "요구함"],
    ["코딩", "읽기 — 결과가 무엇을 말하는지"],
    ["통계 이론", "되묻기 — 무엇을 말하지 않는지"],
    ["수식 유도", "결정 — 그래서 무엇을 할 것인지"],
  ], { left: 90, top: 165, width: 780, height: 330 }, [300, 480], { fontSize: 23, headerSize: 23 });
  addText(slide, "course-scope-line", "이 과목은 여러분을 분석을 감독하는 사람으로 만듭니다.", { left: 115, top: 540, width: 730, height: 60 }, {
    fontSize: 25, bold: true, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 16 · expected background
{
  const slide = fresh(16, "선행 지식보다 필요한 것", "COURSE SCOPE", "R15+R16", "Wk1 block1 notes A.3; Class25S source slides 15–16");
  addQuote(slide, "코딩 경험은 선행 조건이 아닙니다", "결과를 읽고, 무엇이 부족한지 되묻고, 결정하려는 태도가 필요합니다.", {
    fontSize: 34, detailSize: 24,
  });
  outputs.push(slide);
}

// 17 · section header
{
  const slide = fresh(17, "왜 관리자가 분석을 감독하는가", "SUPERVISION PHILOSOPHY", "R9+R11", "Wk1 block1 notes Part B; Class25S source slides 9 and 11");
  addQuote(slide, "분석은 빨라졌습니다\n판단의 책임은 남았습니다", "그 사이가 관리자가 서 있는 자리입니다.", { fontSize: 36, color: RED });
  outputs.push(slide);
}

// 18 · before and now
{
  const slide = fresh(18, "분석을 얻는 방식의 변화", "SUPERVISION PHILOSOPHY", "R12", "Wk1 block1 notes B.1; Class25S source slide 12");
  addTable(slide, [
    ["몇 년 전", "지금"],
    ["데이터팀에 요청", "데이터를 붙여 넣고 한 문장 입력"],
    ["순번을 기다림", "몇 초 안에 결과"],
    ["분석은 희소한 자원", "표·그림·권고안까지 즉시 생성"],
  ], { left: 90, top: 165, width: 780, height: 350 }, [390, 390], { fontSize: 22, headerSize: 24 });
  outputs.push(slide);
}

// 19 · cost
{
  const slide = fresh(19, "잘못된 결정의 비용", "SUPERVISION PHILOSOPHY", "R6", "Wk1 block1 notes B.1; Class25S source slide 6");
  addQuote(slide, "분석의 생산 비용이 낮아져도\n틀린 명단으로 쓴 예산은 실제로 사라집니다", "분석이 틀렸을 때 치르는 대가는 그대로입니다.", {
    fontSize: 31, color: RED, detailSize: 23,
  });
  outputs.push(slide);
}

// 20 · responsibility
{
  const slide = fresh(20, "결정의 책임", "SUPERVISION PHILOSOPHY", "R13", "Wk1 block1 notes B.1; Class25S source slide 13");
  addQuote(slide, "AI가 분석을 만들 수 있습니다\n결정을 책임지는 사람은 바뀌지 않습니다", "결정을 내린 사람이 그 결과를 책임집니다.", { fontSize: 32 });
  outputs.push(slide);
}

// 21 · judging workload
{
  const slide = fresh(21, "판별하는 일", "SUPERVISION PHILOSOPHY", "R14", "Wk1 block1 notes B.1; Class25S source slide 14");
  addQuote(slide, "결과가 맞는지 판별하는 일은\n오히려 어려워졌습니다", "분석이 더 많이, 더 빠르게 나오기 때문입니다.", { fontSize: 34, color: RED });
  outputs.push(slide);
}

// 22 · central contrast
{
  const slide = fresh(22, "만드는 일과 판별하는 일", "SUPERVISION PHILOSOPHY", "R4+R5", "Wk1 block1 notes B.1; Class25S source slides 4–5");
  addQuote(slide, "만드는 일은 싸졌고,\n판별하는 일은 그대로다", "그 격차가 벌어진 자리가 오늘날 관리자가 서 있는 곳입니다.", {
    fontSize: 42, color: RED, detailSize: 23,
  });
  outputs.push(slide);
}

// 23 · organization roles
{
  const slide = fresh(23, "조직에서 결과를 보는 네 자리", "SUPERVISION PHILOSOPHY", "R7+R8", "Wk1 block1 notes B.2; Class25S source slides 7–8");
  addTable(slide, [
    ["자리", "볼 수 있는 것", "놓치기 쉬운 것"],
    ["분석을 만든 사람", "도구와 산출물", "결정의 조직 맥락"],
    ["데이터 전문가", "방법론", "회사의 현재 고민"],
    ["경영진", "조직 맥락과 결론", "결론에 딸린 단서"],
    ["관리자", "분석 내용과 조직 맥락", "둘을 함께 판단해야 함"],
  ], { left: 70, top: 145, width: 820, height: 410 }, [180, 300, 340], { fontSize: 19, headerSize: 20 });
  outputs.push(slide);
}

// 24 · manager position
{
  const slide = fresh(24, "관리자의 자리", "SUPERVISION PHILOSOPHY", "R3", "Wk1 block1 notes B.2; Class25S source slide 3");
  addQuote(slide, "분석의 내용과 조직의 맥락을\n동시에 아는 사람", "관리자입니다. 유능해서가 아니라 그 자리에 있기 때문에 맡는 일입니다.", {
    fontSize: 38, color: RED, detailSize: 23,
  });
  outputs.push(slide);
}

// 25 · promise
{
  const slide = fresh(25, "이 과목의 약속", "SUPERVISION PHILOSOPHY", "R18", "Wk1 block1 notes B.3; Class25S source slide 18");
  addBullets(slide, [
    "결과가 무엇을 말하고 무엇을 말하지 않는지 구분합니다.",
    "결정을 뒷받침하기에 충분한지 판단합니다.",
    "부족하면 무엇을 더 물어야 하는지 압니다.",
    "그래서 올릴지 되돌릴지 결정합니다.",
  ], { left: 105, top: 150, width: 760, height: 430 }, { fontSize: 25, spaceAfterPt: 18 });
  outputs.push(slide);
}

// 26 · limit
{
  const slide = fresh(26, "감독은 생산과 다른 기술", "SUPERVISION PHILOSOPHY", "R17", "Wk1 block1 notes B.3; Class25S source slide 17");
  addQuote(slide, "편집자가 소설을 쓰지 못해도\n원고를 판단할 수 있습니다", "이 과목은 모형을 세우거나 코드를 작성하는 법을 가르치지 않습니다.", {
    fontSize: 36, detailSize: 22,
  });
  outputs.push(slide);
}

// 27 · canonical creed
{
  const slide = fresh(27, "감독 신조", "SUPERVISION PHILOSOPHY", "N1", "Professor approval 2026-09-10; Wk10 slide 4");
  addText(slide, "canonical-creed", "기준을 세운다 → AI에게 시킨다 → 검증한다 → 결정한다", { left: 55, top: 245, width: 850, height: 95 }, {
    fontSize: 31, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  addText(slide, "canonical-creed-footer", "분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.", { left: 115, top: 400, width: 730, height: 75 }, {
    fontSize: 23, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 28 · scenario
{
  const slide = fresh(28, "대성식자재의 결정", "DEMO · BLOCK 1", "N2", "Wk1 demo exhibit STUDENT; block1 notes C.1");
  addQuote(slide, "우리 최고 고객은 누구인가", "원두와 식자재를 카페·식당·소매점에 납품하는 소규모 유통사의 관리자입니다.", {
    fontSize: 40, color: RED, detailSize: 22,
  });
  outputs.push(slide);
}

// 29 · two plans, no prompts
{
  const slide = fresh(29, "연말을 앞둔 두 계획", "DEMO · BLOCK 1", "N3", "Wk1 demo exhibit STUDENT; block1 notes C.1");
  addTable(slide, [
    ["계획 1", "계획 2"],
    ["주요 거래처 감사 선물", "신제품 원두 체험단"],
    ["먼저 정할 것", "먼저 정할 것"],
    ["우리 최고 고객 5곳", "우리 최고 고객 5곳"],
  ], { left: 90, top: 175, width: 780, height: 340 }, [390, 390], { fontSize: 24, headerSize: 23 });
  addText(slide, "demo-no-prompt", "인턴이 두 번 물었고, 두 개의 보고서를 가져왔습니다.", { left: 140, top: 550, width: 680, height: 55 }, {
    fontSize: 23, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 30 · customer summary table
{
  const slide = fresh(30, "거래처 14곳의 거래 요약", "DEMO · BLOCK 1", "N4", "Wk1 demo exhibit STUDENT; fixed reference date 2026-07-17");
  addText(slide, "reference-date", "기준일: 2026년 7월 17일 · 교육용 가상 데이터", { left: 535, top: 96, width: 350, height: 28 }, {
    fontSize: 13, color: MUTED, alignment: "right", verticalAlignment: "middle",
  });
  addTable(slide, [
    ["거래처", "주문", "누적 거래액(원)", "최종 주문일", "경과일"],
    ["서진F&B", "5", "2,578,100", "2026-06-25", "22"],
    ["카페 온", "11", "1,011,600", "2026-07-11", "6"],
    ["한성물산", "2", "9,321,500", "2025-01-03", "560"],
    ["명진식품", "4", "3,571,100", "2026-02-27", "140"],
    ["신광기업", "4", "8,257,300", "2026-06-23", "24"],
    ["라운드테이블", "8", "840,900", "2026-06-30", "17"],
    ["대림상사", "2", "8,994,800", "2025-04-05", "468"],
    ["우성상회", "7", "3,104,000", "2026-05-31", "47"],
    ["브루하우스", "10", "2,756,600", "2026-07-05", "12"],
    ["가온마켓", "3", "3,689,500", "2025-07-14", "368"],
    ["동아유통", "3", "12,029,000", "2025-03-17", "487"],
    ["하늘상사", "5", "1,395,700", "2026-05-29", "49"],
    ["정우유통", "4", "2,098,900", "2026-04-16", "92"],
    ["모닝빈", "9", "943,000", "2026-06-30", "17"],
  ], { left: 48, top: 125, width: 865, height: 525 }, [180, 80, 200, 210, 100], { fontSize: 12, headerSize: 12 });
  outputs.push(slide);
}

// 31 · report A
{
  const slide = fresh(31, "보고서 A · 누적 거래액", "DEMO · BLOCK 1", "N5", "Wk1 demo exhibit STUDENT report A");
  addText(slide, "report-a-basis", "최고 고객을 판단하는 가장 직접적인 근거는 그 거래처가 실제로 가져다준 매출입니다.", { left: 75, top: 125, width: 810, height: 60 }, {
    fontSize: 20, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  addTable(slide, [
    ["순위", "거래처", "누적 거래액(원)", "주문 건수"],
    ["1", "동아유통", "12,029,000", "3"],
    ["2", "한성물산", "9,321,500", "2"],
    ["3", "대림상사", "8,994,800", "2"],
    ["4", "신광기업", "8,257,300", "4"],
    ["5", "가온마켓", "3,689,500", "3"],
  ], { left: 110, top: 210, width: 740, height: 300 }, [100, 230, 270, 140], { fontSize: 19, headerSize: 18 });
  addText(slide, "report-a-summary", "주문 횟수는 적지만 건당 규모가 큰 거래처가 상위에 있습니다.", { left: 130, top: 545, width: 700, height: 55 }, {
    fontSize: 21, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 32 · report B
{
  const slide = fresh(32, "보고서 B · 최근성 + 빈도", "DEMO · BLOCK 1", "N6", "Wk1 demo exhibit STUDENT report B");
  addText(slide, "report-b-basis", "최고 고객을 판단하려면 지금 우리와 실제로 거래하고 있는가를 보아야 합니다.", { left: 75, top: 125, width: 810, height: 60 }, {
    fontSize: 20, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  addTable(slide, [
    ["순위", "거래처", "주문 건수", "경과일", "누적 거래액(원)"],
    ["1", "카페 온", "11", "6", "1,011,600"],
    ["2", "브루하우스", "10", "12", "2,756,600"],
    ["3", "모닝빈", "9", "17", "943,000"],
    ["4", "라운드테이블", "8", "17", "840,900"],
    ["5", "서진F&B", "5", "22", "2,578,100"],
  ], { left: 75, top: 210, width: 810, height: 300 }, [80, 210, 130, 110, 280], { fontSize: 18, headerSize: 17 });
  addText(slide, "report-b-summary", "최근 한 달 이내에 주문했고 주문 횟수도 상위권인 거래처입니다.", { left: 130, top: 545, width: 700, height: 55 }, {
    fontSize: 21, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 33 · zero overlap
{
  const slide = fresh(33, "두 명단의 교집합", "DEMO · BLOCK 1", "N7", "Wk1 demo exhibit STUDENT; instructor verification");
  addTable(slide, [
    ["보고서 A", "보고서 B"],
    ["동아유통", "카페 온"],
    ["한성물산", "브루하우스"],
    ["대림상사", "모닝빈"],
    ["신광기업", "라운드테이블"],
    ["가온마켓", "서진F&B"],
  ], { left: 150, top: 145, width: 660, height: 370 }, [330, 330], { fontSize: 22, headerSize: 22 });
  addText(slide, "zero-overlap", "겹치는 거래처 0곳", { left: 240, top: 550, width: 480, height: 65 }, {
    fontSize: 31, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 34 · judgment sheet
{
  const slide = fresh(34, "판정 기록지", "DEMO · BLOCK 1", "N8", "Wk1 judgment sheet");
  addTable(slide, [
    ["문항", "기록할 것"],
    ["1", "어느 보고서를 경영진에 올리겠는가"],
    ["2", "왜 그렇게 판정했는가"],
    ["3", "그 판정에 얼마나 확신하는가"],
    ["4", "무엇을 알면 판별할 수 있겠는가"],
  ], { left: 95, top: 165, width: 770, height: 350 }, [100, 670], { fontSize: 24, headerSize: 24 });
  addText(slide, "judgment-emphasis", "4번을 특히 채웁니다. 질문 형태로 세 개까지 적습니다.", { left: 130, top: 555, width: 700, height: 55 }, {
    fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 35 · individual judgment and break
{
  const slide = fresh(35, "개별 판정", "DEMO · BLOCK 1", "N9", "Wk1 judgment sheet; instructor demo script S3");
  addBullets(slide, [
    "논의하지 않고 각자 기록합니다.",
    "기록지는 걷지 않습니다. 각자 보관합니다.",
    "블록 2에서 조별로 판정을 맞춰 봅니다.",
  ], { left: 135, top: 175, width: 690, height: 290 }, { fontSize: 28, spaceAfterPt: 20 });
  addText(slide, "break-line", "1:15–1:25 · 판정을 손에 쥔 채 휴식", { left: 170, top: 515, width: 620, height: 65 }, {
    fontSize: 25, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 36 · group share
{
  const slide = fresh(36, "판정 공유", "BLOCK 2 · DISCUSSION", "N10", "Wk1 block2 notes A.1; discussion prompt D1");
  addQuote(slide, "어느 보고서를 올리시겠습니까?\n그리고 왜입니까?", "한 사람당 1분. 조 안에서 의견이 갈리는지 확인합니다.", { fontSize: 36 });
  outputs.push(slide);
}

// 37 · central question
{
  const slide = fresh(37, "조별 핵심 질문", "BLOCK 2 · DISCUSSION", "N11", "Wk1 block2 notes A.2; discussion prompt D2");
  addQuote(slide, "무엇을 알면 판별할 수 있겠습니까?", "판정 기록지 4번을 꺼내 조별로 질문 세 개를 고릅니다.", {
    fontSize: 39, color: RED,
  });
  outputs.push(slide);
}

// 38 · board collection
{
  const slide = fresh(38, "질문을 모으는 방식", "BLOCK 2 · DISCUSSION", "N12", "Wk1 instructor notes; discussion prompt D2");
  addBullets(slide, [
    "조별로 질문 세 개를 고릅니다.",
    "조당 1분 동안 발표합니다.",
    "강사는 학생의 표현을 그대로 칠판에 적습니다.",
    "칠판에는 7–10개를 모읍니다.",
  ], { left: 115, top: 160, width: 730, height: 400 }, { fontSize: 26, spaceAfterPt: 18 });
  outputs.push(slide);
}

// 39 · simultaneous prompt reveal
{
  const slide = fresh(39, "인턴이 AI에게 물은 두 질문", "BLOCK 2 · REVEAL", "N13", "Wk1 block2 notes B.1; instructor demo script S4");
  addTable(slide, [
    ["첫 번째", "두 번째"],
    ["우리 최고 고객 5명을 뽑아줘.\n연말 감사 선물을 보내려고 해.", "우리 최고 고객 5명을 뽑아줘.\n신제품 체험단으로 초대하려고 해."],
  ], { left: 65, top: 175, width: 830, height: 310 }, [415, 415], { fontSize: 23, headerSize: 23 });
  addText(slide, "prompt-question", "두 질문이 다르다고 느끼셨습니까?", { left: 180, top: 535, width: 600, height: 60 }, {
    fontSize: 28, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 40 · purpose line
{
  const slide = fresh(40, "다른 것은 목적 한 줄", "BLOCK 2 · REVEAL", "N14", "Wk1 block2 notes B.1; instructor demo script S4");
  addQuote(slide, "앞부분은 글자 하나까지 같습니다", "다른 것은 뒤에 붙은 목적 한 줄뿐입니다. 감사 선물이냐, 체험단이냐.", {
    fontSize: 37, color: RED, detailSize: 25,
  });
  outputs.push(slide);
}

// 41 · manager viewpoint
{
  const slide = fresh(41, "관리자가 아는 것", "BLOCK 2 · REVEAL", "N15", "Wk1 block2 notes B.1; instructor demo script S4");
  addQuote(slide, "우리 최고 고객 좀 뽑아 봐", "인턴이 어느 쪽으로 물었든, 관리자는 자기가 어느 쪽을 시켰는지 알지 못합니다.", {
    fontSize: 41, detailSize: 24,
  });
  outputs.push(slide);
}

// 42 · landing
{
  const slide = fresh(42, "감독 격차", "BLOCK 2 · REVEAL", "N16", "Wk1 block2 notes B.1; approved landing");
  addQuote(slide, "이 차이를 알아채신 분?\n그게 이 과목이 15주 동안 기르려는 능력입니다.\n\n못 알아채신 분?\n오늘이 그 출발점입니다.", "왜 목적 한 줄이 분석을 바꾸는지는 오늘 설명하지 않습니다.", {
    quotePosition: { left: 90, top: 135, width: 780, height: 330 },
    detailPosition: { left: 130, top: 500, width: 700, height: 75 },
    fontSize: 29, color: RED, detailSize: 20,
  });
  outputs.push(slide);
}

// 43 · questions to curriculum
{
  const slide = fresh(43, "여러분의 질문이 이 과목의 목차", "ROADMAP · AFTER REVEAL", "N17", "Wk1 block2 notes B.2; roadmap handout");
  addTable(slide, [
    ["여러분이 던진 질문", "답하는 주"],
    ["데이터가 어떻게 만들어졌나", "5주 · 데이터 관리"],
    ["어떻게 계산했는지 읽을 수 있나", "3주 · R 읽기 도구"],
    ["이런 분석에는 어떤 종류가 있나", "4주 · 데이터과학 개념 지도"],
    ["기법마다 무엇을 조심해야 하나", "8–13주 · 여섯 기법 감독"],
    ["전부 합쳐 실제로 감독하려면", "14주 · 캡스톤"],
  ], { left: 65, top: 145, width: 830, height: 420 }, [480, 350], { fontSize: 19, headerSize: 20, alignments: ["left", "left"] });
  outputs.push(slide);
}

// 44 · topic roadmap only, no dates/deadlines
{
  const slide = fresh(44, "16주 주제 로드맵", "ROADMAP · TOPICS ONLY", "R19", "design_plan §3; Wk1 roadmap handout; no dates or deadlines");
  addTable(slide, [
    ["주", "주제", "주", "주제"],
    ["1", "왜 관리자가 감독하는가", "8", "여섯 기법 감독 시작"],
    ["2", "빅데이터·비즈니스 애널리틱스", "9", "여섯 기법 감독"],
    ["3", "R 읽기 도구", "10", "여섯 기법 감독"],
    ["4", "데이터과학 개념 지도", "11", "여섯 기법 감독"],
    ["5", "데이터 관리", "12", "여섯 기법 감독"],
    ["6", "좋은 분석이란 무엇인가\n모델의 기준·비즈니스 가치", "13", "여섯 기법 감독"],
    ["7", "복습 · 중간고사", "14", "AI 감독 캡스톤"],
    ["15", "복습", "16", "기말고사"],
  ], { left: 45, top: 135, width: 870, height: 460 }, [65, 370, 65, 370], { fontSize: 17, headerSize: 18, alignments: ["center", "left", "center", "left"] });
  addText(slide, "roadmap-caveat", "주 번호는 강의 계획의 순서입니다. 정확한 주차는 등록처 학사일정으로 확정합니다.", { left: 100, top: 610, width: 760, height: 35 }, {
    fontSize: 15, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 45 · three phases
{
  const slide = fresh(45, "16주의 세 단계", "ROADMAP", "N18", "Wk1 roadmap handout; design_plan §3");
  addTable(slide, [
    ["1–2주 · 왜 그리고 무엇", "3–6주 · 도구", "8–14주 · 감독"],
    ["관리자가 감독자인 이유\n빅데이터와 애널리틱스", "코드를 쓰지 않고 읽는 최소 문법\n개념 지도와 데이터 관리", "매주 실제 AI 산출물을 감독\n캡스톤으로 통합"],
  ], { left: 45, top: 180, width: 870, height: 330 }, [290, 290, 290], { fontSize: 20, headerSize: 18 });
  addText(slide, "phase-bridge", "오늘 갖지 못했던 도구가 3주차부터 생깁니다.", { left: 185, top: 555, width: 590, height: 55 }, {
    fontSize: 23, bold: true, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  outputs.push(slide);
}

// 46 · weekly structure and AI rules
{
  const slide = fresh(46, "훈련 방식과 AI 사용 규칙", "COURSE PRACTICE", "N19", "Wk1 block2 notes B.3; roadmap handout");
  addTable(slide, [
    ["블록 1", "블록 2"],
    ["그 주의 도구\n개념과 읽는 법", "그 도구로 실제 AI 산출물을 감독\n사례와 판정"],
  ], { left: 90, top: 135, width: 780, height: 190 }, [390, 390], { fontSize: 20, headerSize: 20 });
  addBullets(slide, [
    "AI를 썼으면 어느 부분에 어떻게 썼는지 밝힙니다.",
    "AI가 만든 내용의 사실 여부는 제출자가 책임집니다.",
    "시험 중에는 AI를 사용하지 않습니다.",
  ], { left: 115, top: 370, width: 730, height: 250 }, { fontSize: 22, spaceAfterPt: 13 });
  outputs.push(slide);
}

// 47 · close
{
  const slide = fresh(47, "오늘의 원칙", "CLOSE", "R33+R34+R46", "Wk1 block2 notes C.3; Class25S source slides 33, 34 and 46");
  addQuote(slide, "AI는 답을 만든다.\n그 답이 맞는지는 아무도 대신 묻지 않는다\n관리자가 묻지 않으면.", "다음 주 · 빅데이터와 비즈니스 애널리틱스가 무엇이고 왜 지금 중요한가", {
    quotePosition: { left: 80, top: 150, width: 800, height: 260 },
    detailPosition: { left: 110, top: 500, width: 740, height: 70 },
    fontSize: 34, color: RED, detailSize: 21,
  });
  outputs.push(slide);
}

if (outputs.length !== 47) throw new Error(`Authored ${outputs.length} slides, expected 47`);
const stageACount = outputs.length - pendingSlides.size;
if (stageACount !== 42) throw new Error(`Stage (가) count is ${stageACount}, expected 42`);

for (const slide of originals) slide.delete();
for (let i = 0; i < outputs.length; i++) outputs[i].moveTo(i);
if (presentation.slides.count !== 47) throw new Error(`Final model has ${presentation.slides.count} slides`);

const { finalizePresentation } = await import(pathToFileURL(
  path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs"),
).href);
const candidatePath = path.join(buildDir, "candidate_R1.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);
const tableOwners = [4, 9, 15, 18, 23, 29, 30, 31, 32, 33, 34, 39, 43, 44, 45, 46];
const result = await finalizePresentation({
  explicitTotalSlideCount: 47,
  requiredNativeTableOwnerSlides: tableOwners,
  requiredNativeChartOwnerSlides: [],
  workspaceDir,
  candidatePath,
  finalPath: FINAL_PPTX,
  pythonExecutable: RUNTIME_PYTHON,
  integrityValidatorPath: path.join(SKILL_DIR, "container_tools/inspect_presentation_package_integrity.py"),
  layoutValidatorPath: path.join(SKILL_DIR, "container_tools/inspect_presentation_layout_geometry.py"),
  layoutArgs: [
    "--expected-slide-size-emu", "9144000,6858000",
    "--validate-bullet-geometry",
    "--validate-heading-fit",
    ...tableOwners.flatMap((number) => ["--require-native-table-slide", String(number)]),
  ],
  fontPolicy: {
    basis: "design",
    families: ["Apple SD Gothic Neo", "Times New Roman", "Arial", "Century Gothic"],
    scriptFonts: { ea: KOR },
  },
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, "KMB689_Wk1_Orientation_Supervision_R1.validation.json"),
});

console.log(JSON.stringify({
  finalPath: FINAL_PPTX,
  slideCount: presentation.slides.count,
  stageA: stageACount,
  stageB: pendingSlides.size,
  result,
}, null, 2));
