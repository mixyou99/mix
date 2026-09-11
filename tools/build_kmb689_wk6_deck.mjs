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
const visualSourcePath = path.join(workspaceDir, "work/source/KMB689_Wk1_S1_Course_Introduction_Class25S.pptx");
const outputDir = path.join(workspaceDir, "teaching/KMB689/02_working/Wk6");
const FINAL_PPTX = path.join(outputDir, "KMB689_Wk6_Good_Analysis_R1.pptx");
const manifestPath = path.join(workspaceDir, "docs/rounds/KMB689_Wk6_source_manifest_R1.json");
const SKILL_DIR = "/Users/gunwoonglee/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations";
const RUNTIME_PYTHON = "/Users/gunwoonglee/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const buildDir = path.join(workspaceDir, ".codex-finalizer/wk6-r1");

const RED = "#A50000";
const NAVY = "#002060";
const INK = "#333333";
const MUTED = "#666666";
const LIGHT = "#F3F4F6";
const LIGHT_RED = "#F9E8E8";
const LIGHT_BLUE = "#EAF0F8";
const WHITE = "#FFFFFF";
const KOR = "Apple SD Gothic Neo";

const SOURCE_CATALOG = {
  DESIGN: "teaching/KMB689/deck_inputs/reference/MBA_BigData_design_plan.md",
  PLAN: "docs/rounds/KMB689_Wk6_deck_plan.md",
  S_B1: "teaching/KMB689/03_final/student/Wk6_01_lecture_notes_block1.md",
  S_B2: "teaching/KMB689/03_final/student/Wk6_02_lecture_notes_block2.md",
  S_CASE: "teaching/KMB689/03_final/student/Wk6_03_two_analyses.md",
  I_B1: "teaching/KMB689/03_final/instructor/Wk6_01_lecture_notes_block1_INSTRUCTOR_NOTES.md",
  I_B2: "teaching/KMB689/03_final/instructor/Wk6_02_lecture_notes_block2_INSTRUCTOR_NOTES.md",
  I_CASE: "teaching/KMB689/03_final/instructor/Wk6_03_two_analyses_INSTRUCTOR.md",
  I_DISC: "teaching/KMB689/03_final/instructor/Wk6_04_discussion_prompts_INSTRUCTOR.md",
  I_SCRIPT: "teaching/KMB689/03_final/instructor/Wk6_05_instructor_demo_script.md",
};

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });

for (const [code, relativePath] of Object.entries(SOURCE_CATALOG)) {
  await fs.access(path.join(workspaceDir, relativePath)).catch(() => {
    throw new Error(`Missing approved source ${code}: ${relativePath}`);
  });
}

const presentation = await PresentationFile.importPptx(await FileBlob.load(visualSourcePath));
const originals = [...presentation.slides.items];
if (originals.length !== 47) throw new Error(`Visual source slide count changed: ${originals.length}`);

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
  addText(slide, "wk6-title", title, { left: 58, top: 34, width: 770, height: 58 }, {
    fontSize: 34, bold: true, color: RED, verticalAlignment: "middle",
  });
  if (section) {
    addText(slide, "wk6-section", section, { left: 61, top: 93, width: 560, height: 24 }, {
      fontSize: 12, bold: true, color: NAVY, verticalAlignment: "middle",
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
  return addText(slide, options.name ?? "wk6-bullets", paragraphs, position, {
    fontSize: options.fontSize ?? 24,
    color: options.color ?? INK,
    lineSpacing: options.lineSpacing ?? 1.12,
    ...options.style,
  });
}

function addQuote(slide, quote, detail = "", options = {}) {
  addText(slide, "wk6-quote", quote, options.quotePosition ?? { left: 95, top: 175, width: 770, height: 190 }, {
    fontSize: options.fontSize ?? 34,
    bold: options.bold ?? true,
    color: options.color ?? NAVY,
    alignment: options.alignment ?? "center",
    verticalAlignment: "middle",
  });
  if (detail) {
    addText(slide, "wk6-quote-detail", detail, options.detailPosition ?? { left: 125, top: 405, width: 710, height: 120 }, {
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
        fontSize: r === 0 ? (options.headerSize ?? 17) : (options.fontSize ?? 18),
        bold: r === 0 || (options.boldFirstColumn && c === 0),
        color: r === 0 ? WHITE : INK,
        alignment: options.alignments?.[c] ?? "center",
        verticalAlignment: "middle",
        autoFit: "shrinkText",
        insets: { top: 3, right: 4, bottom: 3, left: 4 },
      };
    }
  }
  return table;
}

function fresh(number, title, section) {
  const slide = originals[34].duplicate();
  setSlideNumber(slide, number);
  addTitle(slide, title, section);
  return slide;
}

const outputs = [];
const sourceManifest = [];

function register(slide, number, title, sourceRefs, reveal = "normal") {
  if (number !== outputs.length + 1) throw new Error(`Slide registration out of order: ${number}`);
  if (sourceRefs.length === 0) throw new Error(`N${number} has no sourceRefs`);
  for (const code of sourceRefs) {
    if (!SOURCE_CATALOG[code]) throw new Error(`N${number} has unknown sourceRef ${code}`);
  }
  slide.speakerNotes.textFrame.setText(
    `KMB689 Wk6 | slide: ${number} | mapping: N${number} | sourceRefs: ${sourceRefs.join(",")} | reveal: ${reveal}`,
  );
  sourceManifest.push({ slide: number, mapping: `N${number}`, title, sourceRefs, reveal });
  outputs.push(slide);
}

// N1 · cover
{
  const slide = originals[0].duplicate();
  setSlideNumber(slide, 1);
  shapeByName(slide, "Title 1").text = "KMB689: Big Data for Business Applications\n\nSeminar 6\n좋은 분석이란 무엇인가";
  register(slide, 1, "좋은 분석이란 무엇인가", ["DESIGN", "S_B1"]);
}

// N2 · route
{
  const slide = fresh(2, "오늘의 두 블록", "WEEK 6 · OVERVIEW");
  addTable(slide, [
    ["블록 1 · 75분", "휴식 · 10분", "블록 2 · 75분"],
    ["좋은 분석의 기준", "기준을 손에 쥔 채", "두 검토를 읽고 판단"],
  ], { left: 70, top: 225, width: 820, height: 220 }, [310, 200, 310], { fontSize: 23, headerSize: 21 });
  register(slide, 2, "오늘의 두 블록", ["I_B1", "I_B2", "I_SCRIPT"]);
}

// N3 · Wk5 recall, exactly one sentence
{
  const slide = fresh(3, "지난주까지 온 길", "BLOCK 1 · PART A · 0:00");
  addQuote(slide, "지난주에 우리는 데이터를 읽었다. 요약 통계가 무엇을 말하고 무엇을 감추는지, 상관이 몇 개의 점에 흔들리는지 봤다.", "", { fontSize: 31 });
  register(slide, 3, "지난주까지 온 길", ["S_B1", "I_B1"]);
}

{
  const slide = fresh(4, "읽기와 판단", "BLOCK 1 · PART A");
  addQuote(slide, "읽을 줄 아는 것과\n좋고 나쁨을 가리는 것은 다르다", "원고를 읽을 줄 안다고 좋은 원고와 나쁜 원고를 바로 가리지는 못한다.");
  register(slide, 4, "읽기와 판단", ["S_B1"]);
}

{
  const slide = fresh(5, "오늘의 질문", "BLOCK 1 · PART A · 0:07");
  addQuote(slide, "눈앞의 분석이 좋은 분석인지,\n나쁜 분석인지 어떻게 아는가", "오늘 세울 것은 좋은 분석의 기준이다.", { color: RED });
  register(slide, 5, "오늘의 질문", ["S_B1", "I_B1"]);
}

{
  const slide = fresh(6, "감독에 필요한 것", "BLOCK 1 · PART A");
  addQuote(slide, "기준이 필요하다", "기준이 없으면 감독은 ‘그럴듯해 보인다’에서 멈춘다.", { fontSize: 42 });
  register(slide, 6, "감독에 필요한 것", ["S_B1"]);
}

{
  const slide = fresh(7, "정확한 분석과 좋은 분석", "BLOCK 1 · PART A");
  addQuote(slide, "좋은 분석 ≠ 정확한 분석", "정확한데 나쁜 분석이 있고, 그 반대도 있다. 오늘 그 이유를 본다.", { fontSize: 39, color: RED });
  register(slide, 7, "정확한 분석과 좋은 분석", ["S_B1", "I_B1"]);
}

{
  const slide = fresh(8, "AI 모델 정확도 90%", "BLOCK 1 · PART B · D1 · 0:15");
  addQuote(slide, "여러분 회사에서\n‘AI 모델 정확도 90%’라는 보고를 받았습니다", "어떻게 반응하시겠습니까?", { fontSize: 32, color: RED, detailSize: 28, detailColor: NAVY });
  register(slide, 8, "AI 모델 정확도 90%", ["I_DISC", "I_SCRIPT"], "D1 prompt");
}

{
  const slide = fresh(9, "보고서의 첫 줄", "BLOCK 1 · PART B");
  addQuote(slide, "“정확도 90%의 모델입니다.”", "90%면 열에 아홉을 맞힌다는 뜻이니 나쁘지 않아 보인다.", { fontSize: 39 });
  register(slide, 9, "보고서의 첫 줄", ["S_B1"]);
}

{
  const slide = fresh(10, "90%가 가린 것", "BLOCK 1 · PART B");
  addQuote(slide, "무엇에 대한 90%인가", "무엇을 맞히고 무엇을 틀렸는지는 보이지 않는다.\n맞힌 것이 중요한 것이었나, 틀린 것이 중요한 것이었나.", { color: RED, detailSize: 24 });
  register(slide, 10, "90%가 가린 것", ["S_B1", "I_B1"]);
}

{
  const slide = fresh(11, "두 가지 틀림", "BLOCK 1 · PART B · D2 · 0:25");
  addTable(slide, [
    ["놓쳐서 나는 손해", "괜히 잡아서 나는 손해"],
    ["잡았어야 할 것을 못 잡았다", "멀쩡한 것을 걸러 냈다"],
  ], { left: 90, top: 205, width: 780, height: 230 }, [390, 390], { fontSize: 24, headerSize: 24 });
  addText(slide, "wk6-question", "이 둘의 손해가 같습니까?", { left: 180, top: 485, width: 600, height: 65 }, {
    fontSize: 29, bold: true, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 11, "두 가지 틀림", ["S_B1", "I_DISC", "I_SCRIPT"], "D2 prompt");
}

{
  const slide = fresh(12, "놓쳐서 나는 손해", "BLOCK 1 · PART B");
  addBullets(slide, [
    "불량을 통과시켰다",
    "떠날 고객을 붙잡지 못했다",
    "위험한 거래를 승인했다",
  ], { left: 165, top: 190, width: 630, height: 330 }, { fontSize: 28, spaceAfterPt: 22 });
  register(slide, 12, "놓쳐서 나는 손해", ["S_B1"]);
}

{
  const slide = fresh(13, "괜히 잡아서 나는 손해", "BLOCK 1 · PART B");
  addBullets(slide, [
    "정상 부품을 폐기했다",
    "안 떠날 고객에게 비용을 썼다",
  ], { left: 165, top: 210, width: 630, height: 280 }, { fontSize: 29, spaceAfterPt: 26 });
  register(slide, 13, "괜히 잡아서 나는 손해", ["S_B1"]);
}

{
  const slide = fresh(14, "틀림의 값", "BLOCK 1 · PART B");
  addQuote(slide, "두 틀림의 값은 다를 수 있다", "불량 하나를 통과시키는 손해가 정상 부품 하나를 버리는 손해보다 클 수 있다. 그 반대일 수도 있다.", { color: RED, detailSize: 23 });
  register(slide, 14, "틀림의 값", ["S_B1", "I_B1"]);
}

{
  const slide = fresh(15, "정확도의 무게", "BLOCK 1 · PART B");
  addQuote(slide, "정확도는 두 종류의 틀림을\n같은 무게로 센다", "현실에서 두 틀림의 값은 다르다.", { fontSize: 36 });
  register(slide, 15, "정확도의 무게", ["S_B1", "I_SCRIPT"]);
}

{
  const slide = fresh(16, "결정이 치르는 값", "BLOCK 1 · PART B · 0:37");
  addQuote(slide, "이 분석을 따랐을 때,\n우리가 얻는 것에서 잃는 것을 뺀 값은 얼마인가", "정확도는 이 계산의 한 재료다.", { fontSize: 32, color: RED });
  register(slide, 16, "결정이 치르는 값", ["S_B1", "I_B1", "I_SCRIPT"]);
}

{
  const slide = fresh(17, "값을 읽는 세 항목", "BLOCK 1 · PART B");
  addTable(slide, [
    ["항목", "관리자가 확인할 것"],
    ["얻은 것", "맞혀서 막은 손해"],
    ["치른 것", "분석과 실행에 든 비용"],
    ["놓친 것", "놓쳐서 새어 나간 손해"],
  ], { left: 120, top: 175, width: 720, height: 360 }, [230, 490], { fontSize: 22, headerSize: 21, boldFirstColumn: true });
  register(slide, 17, "값을 읽는 세 항목", ["S_B1"]);
}

{
  const slide = fresh(18, "이 분석이 옳은 문제를 푸는가", "BLOCK 1 · PART C · D3 · 0:45");
  addQuote(slide, "‘어떤 고객이 이탈할지’ 정확히 맞히는 모델이 있습니다", "그런데 회사가 알고 싶던 것은 ‘어떻게 이탈을 막나’였습니다.\n이 모델은 좋은 분석입니까?", { fontSize: 30, color: NAVY, detailSize: 25, detailColor: RED });
  register(slide, 18, "이 분석이 옳은 문제를 푸는가", ["S_B1", "I_DISC", "I_SCRIPT"], "D3 prompt");
}

{
  const slide = fresh(19, "맞물림", "BLOCK 1 · PART C");
  addQuote(slide, "이게 내가 풀려던 문제를 푸는가", "문제를 잘못 잡으면 그 문제를 아무리 정확하게 풀어도 소용이 없다.", { color: RED });
  register(slide, 19, "맞물림", ["S_B1", "I_B1"]);
}

{
  const slide = fresh(20, "이탈 예측과 이탈 방지", "BLOCK 1 · PART C");
  addTable(slide, [
    ["분석이 답한 질문", "회사가 풀려던 질문"],
    ["어떤 고객이 이탈할까", "어떻게 하면 이탈을 막을까"],
  ], { left: 90, top: 220, width: 780, height: 220 }, [390, 390], { fontSize: 25, headerSize: 21 });
  addText(slide, "wk6-fit", "서로 다른 질문이다", { left: 250, top: 490, width: 460, height: 55 }, {
    fontSize: 27, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 20, "이탈 예측과 이탈 방지", ["S_B1", "I_B1", "I_DISC"]);
}

{
  const slide = fresh(21, "분석과 결정의 연결", "BLOCK 1 · PART C · 0:57");
  addQuote(slide, "데이터는 10년째 쌓였지만\n결정을 내리는 방식은 그대로였다", "분석이 행동으로 옮겨지지 않으면 그 분석은 서버에만 남는다.", { fontSize: 33 });
  register(slide, 21, "분석과 결정의 연결", ["S_B1", "I_B1"]);
}

{
  const slide = fresh(22, "관리자의 마지막 질문", "BLOCK 1 · PART C");
  addQuote(slide, "그래서 우리는 무엇을 다르게 하는가", "이 질문에 답할 수 없는 분석은 결정에 닿지 않는다.", { fontSize: 39, color: RED });
  register(slide, 22, "관리자의 마지막 질문", ["S_B1"]);
}

{
  const slide = fresh(23, "좋은 분석의 세 조건", "BLOCK 1 · PART C · 1:15");
  addTable(slide, [
    ["조건", "묻는 것"],
    ["값", "얻는 것에서 잃는 것을 뺀 값이 큰가"],
    ["맞물림", "옳은 문제를 풀고 있는가"],
    ["연결", "결정으로 이어지는가"],
  ], { left: 105, top: 160, width: 750, height: 350 }, [190, 560], { fontSize: 22, headerSize: 21, boldFirstColumn: true });
  addText(slide, "wk6-transition", "휴식 뒤, 계산이 모두 맞는 두 검토를 이 기준으로 판단합니다.", { left: 110, top: 540, width: 740, height: 55 }, {
    fontSize: 22, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 23, "좋은 분석의 세 조건", ["S_B1", "I_B1"]);
}

{
  const slide = fresh(24, "정확도 92%짜리 모델을 믿어도 될까", "BLOCK 2 · CASE · 1:25");
  addQuote(slide, "한빛정밀", "당신은 자동차 부품 제조사의 품질 담당 임원입니다.\n두 검토를 읽고 경영진에 무엇을 올릴지 판단합니다.", { fontSize: 43, color: RED, detailSize: 24 });
  register(slide, 24, "정확도 92%짜리 모델을 믿어도 될까", ["S_CASE", "S_B2", "I_B2"], "case distributed");
}

{
  const slide = fresh(25, "두 종류의 커넥터", "BLOCK 2 · CASE");
  addTable(slide, [
    ["종류", "월 생산량", "불량 유출 시 손실"],
    ["정밀 커넥터", "2천 개", "한 개당 평균 500만 원"],
    ["일반 커넥터", "8천 개", "한 개당 평균 20만 원"],
  ], { left: 75, top: 190, width: 810, height: 290 }, [260, 210, 340], { fontSize: 22, headerSize: 20, boldFirstColumn: true });
  addText(slide, "wk6-monthly-total", "월 1만 개 생산", { left: 330, top: 515, width: 300, height: 48 }, {
    fontSize: 23, bold: true, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 25, "두 종류의 커넥터", ["S_CASE"]);
}

{
  const slide = fresh(26, "한 달 시험 결과", "BLOCK 2 · CASE");
  addTable(slide, [
    ["실제 불량", "모델이 잡음", "모델이 놓침"],
    ["500개", "460개", "40개"],
  ], { left: 95, top: 205, width: 770, height: 220 }, [257, 256, 257], { fontSize: 30, headerSize: 21 });
  addText(slide, "wk6-rate", "검출률 92%", { left: 310, top: 480, width: 340, height: 65 }, {
    fontSize: 36, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 26, "한 달 시험 결과", ["S_CASE", "I_CASE"]);
}

{
  const slide = fresh(27, "두 검토", "BLOCK 2 · CASE");
  addTable(slide, [
    ["검토 A · 도입추진팀", "검토 B · 공정분석팀"],
    ["검출률 92%\n도입을 권고", "놓친 40개가 어디에 몰렸는지 확인\n놓친 손실로 성과를 측정"],
    ["100개 중 92개를 잡음", "정밀 불량 100개 중 35개 놓침\n놓친 손실 1억 7,600만 원"],
  ], { left: 65, top: 155, width: 830, height: 420 }, [365, 465], { fontSize: 19, headerSize: 19 });
  register(slide, 27, "두 검토", ["S_CASE", "I_CASE"]);
}

{
  const slide = fresh(28, "개별 판단", "BLOCK 2 · PART A · 1:35");
  addBullets(slide, [
    "검토 A는 무엇을 근거로 도입을 권했는가",
    "검토 B는 무엇을 다르게 봤는가",
    "어느 검토가 좋은 분석인가. 세 조건 중 무엇과 닿아 있는가",
  ], { left: 105, top: 165, width: 750, height: 350 }, { fontSize: 25, spaceAfterPt: 20 });
  addText(slide, "wk6-individual", "옆 사람과 상의하지 않고 판정 근거를 한 문장으로 적습니다.", { left: 110, top: 535, width: 740, height: 50 }, {
    fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 28, "개별 판단", ["S_B2", "I_B2"]);
}

{
  const slide = fresh(29, "어느 검토가 좋은가", "BLOCK 2 · PART B · D4 · 1:50");
  addQuote(slide, "검토 A의 92%는 틀린 숫자입니까?", "아니라면, 왜 그것만으로는 부족합니까?", { fontSize: 37, color: RED, detailSize: 27, detailColor: NAVY });
  register(slide, 29, "어느 검토가 좋은가", ["S_B2", "I_DISC", "I_SCRIPT"], "D4 prompt before debrief");
}

{
  const slide = fresh(30, "92%의 판정", "BLOCK 2 · PART B · AFTER DISCUSSION");
  addQuote(slide, "92%는 틀린 숫자가 아니다", "다만 그 숫자만으로는 결정할 수 없다.\n정밀 커넥터만 보면 100개 중 65개를 잡았다.", {
    fontSize: 38, color: NAVY, detailSize: 24, detailColor: RED,
    quotePosition: { left: 95, top: 155, width: 770, height: 150 },
    detailPosition: { left: 120, top: 320, width: 720, height: 100 },
  });
  addText(slide, "wk6-loss-comparison", "놓친 손실 1억 7,600만 원\n같은 40개를 놓쳐도 다른 구성이라면 2,240만 원, 약 8배 차이", { left: 115, top: 455, width: 730, height: 105 }, {
    fontSize: 22, bold: true, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 30, "92%의 판정", ["S_CASE", "I_CASE", "I_B2"], "after N29 discussion");
}

{
  const slide = fresh(31, "손실이 같다면", "BLOCK 2 · PART B · SELF-CHECK");
  addQuote(slide, "두 커넥터의 손실이\n똑같이 20만 원이었다면", "두 검토의 차이는 어떻게 됩니까?", { fontSize: 38, color: RED, detailSize: 30, detailColor: NAVY });
  register(slide, 31, "손실이 같다면", ["S_CASE", "S_B2", "I_DISC"], "Q3 question only");
}

{
  const slide = fresh(32, "그래서 무엇을 하는가", "BLOCK 2 · PART B · D5 · 2:05");
  addQuote(slide, "여러분이 이 회사 관리자라면\n다음에 무엇을 하겠습니까?", "판단에서 멈추지 않습니다.", { fontSize: 36, color: RED });
  register(slide, 32, "그래서 무엇을 하는가", ["S_B2", "I_DISC", "I_SCRIPT"], "D5 prompt");
}

{
  const slide = fresh(33, "관리자의 다음 질문", "BLOCK 2 · PART B");
  addTable(slide, [
    ["대상", "질문"],
    ["벤더", "무엇을 다시 요구할 것인가"],
    ["성과 기준", "앞으로 무엇으로 측정할 것인가"],
    ["재무팀·생산팀", "각각에게 무엇을 설명할 것인가"],
  ], { left: 105, top: 160, width: 750, height: 355 }, [230, 520], { fontSize: 22, headerSize: 21, boldFirstColumn: true });
  addText(slide, "wk6-no-single-answer", "정답은 하나가 아닙니다.", { left: 285, top: 540, width: 390, height: 48 }, {
    fontSize: 23, bold: true, color: NAVY, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 33, "관리자의 다음 질문", ["S_B2", "I_B2", "I_DISC"], "questions only");
}

{
  const slide = fresh(34, "한빛정밀과 세 조건", "BLOCK 2 · PART C · 2:20");
  addTable(slide, [
    ["조건", "한빛정밀에서 묻는 것"],
    ["값", "놓친 대상에 따라 손실이 어떻게 달라지는가"],
    ["맞물림", "도입 결정에 필요한 질문을 분석했는가"],
    ["연결", "벤더 재요구와 성과 측정으로 이어지는가"],
  ], { left: 95, top: 160, width: 770, height: 360 }, [190, 580], { fontSize: 21, headerSize: 20, boldFirstColumn: true });
  addText(slide, "wk6-incomplete", "한빛정밀의 92%는 틀린 값이 아니라 불완전한 값이었습니다.", { left: 105, top: 540, width: 750, height: 50 }, {
    fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 34, "한빛정밀과 세 조건", ["S_B2", "I_B2", "S_CASE"]);
}

{
  const slide = fresh(35, "감독의 출발점", "BLOCK 2 · PART C · 2:30");
  addQuote(slide, "정확한가가 아니라, 좋은가", "좋은 분석의 기준을 손에 쥐어야 AI가 만든 분석을 감독할 수 있습니다.", { fontSize: 41, color: RED, detailSize: 24 });
  register(slide, 35, "감독의 출발점", ["S_B2", "I_B2", "I_SCRIPT"]);
}

{
  const slide = fresh(36, "다음 주", "BLOCK 2 · PART C · 2:35");
  addQuote(slide, "복습과 중간고사", "판단을 묻습니다, 계산이 아니라.\n무엇이 문제인지, 결론을 받아들일 수 있는지, 무엇을 더 물어야 하는지를 답합니다.", { fontSize: 42, color: NAVY, detailSize: 23, detailColor: RED });
  register(slide, 36, "다음 주", ["S_B2", "I_B2", "I_SCRIPT"]);
}

if (outputs.length !== 36) throw new Error(`Authored ${outputs.length} slides, expected 36`);
if (sourceManifest.length !== 36) throw new Error(`Manifest has ${sourceManifest.length} slides, expected 36`);

for (const slide of originals) slide.delete();
for (let i = 0; i < outputs.length; i++) outputs[i].moveTo(i);
if (presentation.slides.count !== 36) throw new Error(`Final model has ${presentation.slides.count} slides`);

const { finalizePresentation } = await import(pathToFileURL(
  path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs"),
).href);
const candidatePath = path.join(buildDir, "candidate_R1.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);
const tableOwners = [2, 11, 17, 20, 23, 25, 26, 27, 33, 34];
const result = await finalizePresentation({
  explicitTotalSlideCount: 36,
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
  receiptPath: path.join(buildDir, "KMB689_Wk6_Good_Analysis_R1.validation.json"),
});

await fs.writeFile(manifestPath, `${JSON.stringify({
  deck: path.relative(workspaceDir, FINAL_PPTX),
  visualReference: path.relative(workspaceDir, visualSourcePath),
  classification: { reused: 0, new: 36 },
  sourceCatalog: SOURCE_CATALOG,
  slides: sourceManifest,
}, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  finalPath: FINAL_PPTX,
  manifestPath,
  slideCount: presentation.slides.count,
  reused: 0,
  newlyAuthored: 36,
  result,
}, null, 2));
