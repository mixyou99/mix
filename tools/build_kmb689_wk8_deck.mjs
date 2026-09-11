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

const SKILL_DIR = "/Users/gunwoonglee/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations";
const { finalizePresentation, makeNativeBulletParagraphs } = await import(pathToFileURL(
  path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs"),
).href);

const workspaceDir = "/Users/gunwoonglee/Documents/ChatGPT/Lecture Materials";
const sourcePath = "/Users/gunwoonglee/Downloads/Teaching_2025/Fall/BUSS256_BigData/Seminar 8-9 LRM/Seminars 8-9_Linear Regression Model_InClass3_F25.pptx";
const kmbSourcePath = "/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Seminar 8_LRM/Seminar 8_Linear Regression Models_Inclass.pptx";
const buildDir = path.join(workspaceDir, ".codex-finalizer/wk8-r1");
const outputDir = path.join(workspaceDir, "teaching/KMB689/02_working/Wk8");
const FINAL_PPTX = path.join(outputDir, "KMB689_Wk8_Regression_CausalInference_R1.pptx");
const manifestPath = path.join(workspaceDir, "docs/rounds/KMB689_Wk8_source_manifest_R1.json");
const RUNTIME_PYTHON = "/Users/gunwoonglee/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";

const BLUE = "#003478";
const RED = "#C60C30";
const GOLD = "#C49000";
const INK = "#262626";
const MUTED = "#5B6573";
const LIGHT_BLUE = "#EAF1F8";
const LIGHT_RED = "#FBECEF";
const LIGHT_GOLD = "#FAF4E1";
const WHITE = "#FFFFFF";
const KOR = "Apple SD Gothic Neo";
const LATIN = "Helvetica Neue";

const SOURCE_CATALOG = {
  BUSS: sourcePath,
  KMB: kmbSourcePath,
  DESIGN: "teaching/KMB689/deck_inputs/reference/MBA_BigData_design_plan.md",
  W1: "teaching/KMB689/02_working/Wk1/KMB689_Wk1_Orientation_Supervision_R1.pptx",
  S_B1: "teaching/KMB689/03_final/student/MBA_S8_Block1_LectureNotes_KR.md",
  S_CASE: "teaching/KMB689/03_final/student/MBA_S8_Case_Handout_KR.md",
  S_E1: "teaching/KMB689/03_final/student/MBA_S8_Exhibit1_SummaryStats_KR.md",
  S_E2: "teaching/KMB689/03_final/student/MBA_S8_Exhibit2_Decomposition_KR.md",
  S_AI: "teaching/KMB689/03_final/student/MBA_S8_AI_Output_Exhibit_KR_STUDENT.md",
  S_WS: "teaching/KMB689/03_final/student/MBA_S8_Verification_Worksheet_KR.md",
  I_AI: "teaching/KMB689/03_final/instructor/MBA_S8_AI_Output_Exhibit_KR_INSTRUCTOR.md",
  I_DISC: "teaching/KMB689/03_final/instructor/MBA_S8_Discussion_Prompts_INSTRUCTOR_KR.md",
  I_SCRIPT: "teaching/KMB689/03_final/instructor/MBA_S8_Instructor_Demo_Script_INSTRUCTOR_KR.md",
};

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });

const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
const originals = [...presentation.slides.items];
if (originals.length !== 76) throw new Error(`Source slide count changed: ${originals.length}`);

function shapeByName(slide, name) {
  const shape = slide.shapes.items.find((item) => item.name === name);
  if (!shape) throw new Error(`Missing shape ${name} on slide ${slide.slideNumber}`);
  return shape;
}

function addText(slide, name, value, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: style.fill ?? "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = value;
  shape.text.style = {
    typeface: style.typeface ?? KOR,
    fontSize: style.fontSize ?? 22,
    bold: style.bold ?? false,
    color: style.color ?? INK,
    alignment: style.alignment ?? "left",
    verticalAlignment: style.verticalAlignment ?? "top",
    autoFit: style.autoFit ?? "shrinkText",
    wrap: "square",
    lineSpacing: style.lineSpacing ?? 1.08,
    insets: style.insets ?? { top: 4, right: 6, bottom: 4, left: 6 },
  };
  return shape;
}

function addTitle(slide, number, title, section) {
  addText(slide, `section-${number}`, section, { left: 52, top: 18, width: 430, height: 22 }, {
    typeface: LATIN, fontSize: 12, bold: true, color: RED, verticalAlignment: "middle",
  });
  addText(slide, `title-${number}`, title, { left: 52, top: 43, width: 820, height: 58 }, {
    fontSize: 31, bold: true, color: BLUE, verticalAlignment: "middle",
  });
  addText(slide, `number-${number}`, String(number), { left: 886, top: 650, width: 34, height: 24 }, {
    typeface: LATIN, fontSize: 12, color: MUTED, alignment: "right", verticalAlignment: "middle",
  });
}

function fresh(number, title, section) {
  const slide = originals[72].duplicate();
  for (const shape of [...slide.shapes.items]) shape.delete();
  for (const image of [...(slide.images?.items ?? [])]) image.delete();
  for (const table of [...(slide.tables?.items ?? [])]) table.delete();
  for (const chart of [...(slide.charts?.items ?? [])]) chart.delete();
  slide.background.fill = WHITE;
  addTitle(slide, number, title, section);
  return slide;
}

function addBullets(slide, name, items, position = { left: 88, top: 145, width: 785, height: 450 }, options = {}) {
  const shape = addText(slide, name, makeNativeBulletParagraphs(items, {
    marginLeftPoints: options.marginLeftPoints ?? 19,
    hangingPoints: options.hangingPoints ?? 9,
    spaceAfterPoints: options.spaceAfterPoints ?? 10,
  }), position, {
    fontSize: options.fontSize ?? 23,
    color: options.color ?? INK,
    lineSpacing: options.lineSpacing ?? 1.1,
    verticalAlignment: options.verticalAlignment ?? "top",
  });
  return shape;
}

function addQuote(slide, name, quote, detail = "", options = {}) {
  addText(slide, name, quote, options.position ?? { left: 95, top: 175, width: 770, height: 190 }, {
    typeface: options.typeface ?? KOR,
    fontSize: options.fontSize ?? 34,
    bold: options.bold ?? true,
    color: options.color ?? BLUE,
    alignment: "center",
    verticalAlignment: "middle",
    fill: options.fill ?? "none",
  });
  if (detail) {
    addText(slide, `${name}-detail`, detail, options.detailPosition ?? { left: 115, top: 405, width: 730, height: 125 }, {
      fontSize: options.detailSize ?? 22,
      color: options.detailColor ?? MUTED,
      alignment: "center",
      verticalAlignment: "middle",
    });
  }
}

function addTable(slide, name, values, position, columnWidths, options = {}) {
  const table = slide.tables.add({
    name,
    rows: values.length,
    columns: values[0].length,
    left: position.left,
    top: position.top,
    width: position.width,
    height: position.height,
    columnWidths,
    values,
  });
  table.borders.assign({ style: "solid", fill: options.borderColor ?? "#C9CED6", width: 1 });
  for (let row = 0; row < values.length; row++) {
    for (let column = 0; column < values[0].length; column++) {
      const cell = table.getCell(row, column);
      cell.fill = row === 0 ? BLUE : (row % 2 === 0 ? LIGHT_BLUE : WHITE);
      cell.text.style = {
        typeface: options.typeface ?? KOR,
        fontSize: row === 0 ? (options.headerSize ?? 18) : (options.fontSize ?? 18),
        bold: row === 0 || (options.boldFirstColumn && column === 0),
        color: row === 0 ? WHITE : INK,
        alignment: options.alignments?.[column] ?? "center",
        verticalAlignment: "middle",
        autoFit: "shrinkText",
        insets: { top: 3, right: 4, bottom: 3, left: 4 },
      };
    }
  }
  return table;
}

function setSourceSlideNumber(slide, number) {
  const pageShape = slide.shapes.items.find((shape) => shape.name === "Slide Number Placeholder 3");
  if (pageShape) pageShape.text = String(number);
  else addText(slide, `number-${number}`, String(number), { left: 886, top: 650, width: 34, height: 24 }, {
    typeface: LATIN, fontSize: 12, color: MUTED, alignment: "right", verticalAlignment: "middle",
  });
}

function addKoreanFooter(slide, number, textValue) {
  addText(slide, `korean-footer-${number}`, textValue, { left: 72, top: 635, width: 790, height: 44 }, {
    fontSize: 17, bold: true, color: RED, alignment: "center", verticalAlignment: "middle", fill: WHITE,
  });
}

const outputs = [];
const sourceManifest = [];

function register(slide, number, classification, sourceRefs, bussSlides = [], requiredSourceSnippets = [], reveal = "normal") {
  if (number !== outputs.length + 1) throw new Error(`Slide registration out of order: ${number}`);
  if (!new Set(["reposition", "revise", "new"]).has(classification)) throw new Error(`Unknown classification ${classification}`);
  if (sourceRefs.length === 0) throw new Error(`Slide ${number} has no sourceRefs`);
  for (const code of sourceRefs) if (!SOURCE_CATALOG[code]) throw new Error(`Unknown sourceRef ${code} on slide ${number}`);
  if (classification === "new" && bussSlides.length) throw new Error(`New slide ${number} cannot have BUSS source slides`);
  if (classification !== "new" && !bussSlides.length) throw new Error(`R slide ${number} has no BUSS source slide`);
  const mapping = classification === "new" ? `N${number}` : `R${number}`;
  slide.speakerNotes.textFrame.setText(
    `KMB689 Wk8 | slide: ${number} | mapping: ${mapping} | class: ${classification} | bussSlides: ${bussSlides.join(",") || "none"} | sourceRefs: ${sourceRefs.join(",")} | reveal: ${reveal}`,
  );
  sourceManifest.push({
    slide: number,
    mapping,
    classification,
    bussSlides,
    requiredSourceSnippets,
    sourceRefs,
    reveal,
  });
  outputs.push(slide);
}

// 1.1 · opening, 5 slides
{
  const slide = fresh(1, "회귀분석과 인과추론", "KMB689 · SEMINAR 8");
  addQuote(slide, "cover", "Linear Regression Model", "회귀분석으로 무엇이 성과를 만드는지 읽는다", {
    fontSize: 38, color: BLUE, detailSize: 27, detailColor: RED,
  });
  addText(slide, "school", "Korea University Business School", { left: 180, top: 580, width: 600, height: 32 }, {
    typeface: LATIN, fontSize: 17, color: BLUE, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 1, "revise", ["BUSS", "KMB", "DESIGN", "S_B1"], [1], ["Linear Regression Model", "Korea University Business School"]);
}
{
  const slide = fresh(2, "오늘의 두 블록", "1.1 · OVERVIEW");
  addTable(slide, "route", [
    ["1블록 · 75분", "2블록 · 약 70분"],
    ["회귀 출력 읽기\n분해·자기선택 판단 도구\n회귀 검증 5문", "SmartAds 사례\n강사 시범\n학생 검증과 토론"],
  ], { left: 90, top: 190, width: 780, height: 310 }, [390, 390], { fontSize: 23, headerSize: 21 });
  addText(slide, "time-note", "자료에 별도 지정이 없는 5분은 운영 여유로 남긴다.", { left: 160, top: 545, width: 640, height: 45 }, {
    fontSize: 18, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 2, "new", ["DESIGN", "S_B1", "S_CASE", "I_SCRIPT", "I_DISC"]);
}
{
  const slide = fresh(3, "감독 신조 recap", "1.1 · SUPERVISION CREED");
  addQuote(slide, "creed", "기준을 세운다 → AI에게 시킨다 → 검증한다 → 결정한다.", "분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.", {
    fontSize: 34, color: RED, detailSize: 23, detailColor: BLUE,
  });
  register(slide, 3, "new", ["W1", "S_B1"], [], [], "W1-X canonical exposure");
}
{
  const slide = fresh(4, "관리자의 역할", "1.1 · ROLE");
  addBullets(slide, "role", [
    "회귀 코드를 직접 작성하는 자리가 아니다.",
    "출력표에서 계수·유의성·결정계수를 읽는다.",
    "분석의 비교와 분해가 결론을 지지하는지 평가한다.",
    "사업 결정에 필요한 추가 분석을 요구한다.",
  ], { left: 105, top: 165, width: 750, height: 390 }, { fontSize: 24, spaceAfterPoints: 15 });
  register(slide, 4, "new", ["S_B1", "DESIGN"]);
}
{
  const slide = fresh(5, "오늘의 목표", "1.1 · OBJECTIVES");
  addBullets(slide, "objectives", [
    "회귀분석 출력표에서 계수·유의성·결정계수를 읽는다.",
    "계수를 다른 조건을 통제한 상태의 관계로 해석한다.",
    "하나의 종합 숫자가 숨기는 경로를 분해한다.",
    "도입자 비교에서 자발적 선택 가능성을 묻는다.",
  ], { left: 105, top: 165, width: 750, height: 390 }, { fontSize: 24, spaceAfterPoints: 16 });
  register(slide, 5, "new", ["S_B1"]);
}

// 1.2 · reading regression output, 15 slides
{
  const slide = fresh(6, "회귀분석의 역할", "1.2 · OUTPUT READING");
  addQuote(slide, "definition", "Regression analysis is a probabilistic model", "회귀분석은 관측할 수 없는 오차를 남긴 채 변수 사이의 관계를 설명한다.", {
    fontSize: 32, color: BLUE, detailSize: 24,
  });
  addText(slide, "formula-examples", "매출 = f(가격, 광고비, 인지도, …) + 오차", { left: 130, top: 535, width: 700, height: 52 }, {
    fontSize: 23, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 6, "revise", ["BUSS", "KMB", "S_B1"], [3, 4], ["Regression analysis is a probabilistic model"]);
}
{
  const slide = fresh(7, "종속변수와 독립변수", "1.2 · OUTPUT READING");
  addTable(slide, "variables", [
    ["BUSS256 원문", "KMB689 용어", "오늘의 예"],
    ["Dependent/Response/Target/Outcome Variable", "종속변수(결과변수, Y)", "앱 순위 점수"],
    ["Independent/Explanatory Variables/Predictors", "독립변수(설명변수, X)", "가격·리뷰 수·카테고리"],
  ], { left: 50, top: 190, width: 860, height: 300 }, [330, 255, 275], { fontSize: 18, headerSize: 18 });
  addText(slide, "term-note", "KMB689 판의 종속변수·독립변수를 기본 용어로 쓰고, MBA_S8의 결과변수·설명변수를 괄호에 병기한다.", { left: 95, top: 535, width: 770, height: 60 }, {
    fontSize: 19, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 7, "revise", ["BUSS", "KMB", "S_B1"], [4, 5], ["Dependent/Response/Target/Outcome Variable", "Independent/Explanatory Variables/Predictors"]);
}
{
  const slide = fresh(8, "절편과 기울기", "1.2 · OUTPUT READING");
  addQuote(slide, "line", "y = a + bx", "Intercept는 X=0일 때의 출발점, Slope는 X가 1단위 변할 때 Y가 움직이는 정도다.", {
    fontSize: 50, typeface: LATIN, color: BLUE, detailSize: 23,
  });
  addText(slide, "labels", "Intercept    ·    Slope", { left: 240, top: 505, width: 480, height: 44 }, {
    typeface: LATIN, fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 8, "revise", ["BUSS", "KMB", "S_B1"], [7, 8], ["y = a + bx", "Intercept", "Slope"]);
}
{
  const slide = originals[5].duplicate();
  setSourceSlideNumber(slide, 9);
  addKoreanFooter(slide, 9, "KMB689 용어: 상관분석은 두 변수를 동등하게 보고, 회귀분석은 X와 Y의 역할을 정해 관계를 읽는다.");
  register(slide, 9, "reposition", ["BUSS", "KMB"], [6], [], "source full text retained except page number");
}
{
  const slide = originals[9].duplicate();
  setSourceSlideNumber(slide, 10);
  addKoreanFooter(slide, 10, "KMB689 용어: 단순회귀 모형은 독립변수 1개, 다중회귀 모형은 독립변수 여러 개를 둔다.");
  register(slide, 10, "reposition", ["BUSS", "KMB"], [10], [], "source full text retained except page number");
}
{
  const slide = fresh(11, "계수 읽기", "1.2 · OUTPUT READING");
  addTable(slide, "coefficient-fields", [
    ["Estimate", "Standard Error", "t Value", "P-value"],
    ["계수의 부호·크기", "추정의 불확실성", "계수/표준오차", "우연과 구분할 근거"],
  ], { left: 65, top: 205, width: 830, height: 190 }, [210, 210, 190, 220], { fontSize: 20, headerSize: 20 });
  addQuote(slide, "coefficient-question", "먼저 부호를 읽고, 그다음 유의성을 확인한다", "부호가 사업 상식에 맞는가. 우연이 아니라고 볼 근거가 있는가.", {
    position: { left: 105, top: 430, width: 750, height: 82 }, fontSize: 27, color: RED,
    detailPosition: { left: 120, top: 520, width: 720, height: 65 }, detailSize: 20,
  });
  register(slide, 11, "revise", ["BUSS", "KMB", "S_B1"], [30, 31, 32], ["Estimate", "Standard Error", "t Value", "P-value"]);
}
{
  const slide = fresh(12, "p-value와 유의수준", "1.2 · OUTPUT READING");
  addTable(slide, "pvalue-alpha", [
    ["p-value", "Significance Level (α)"],
    ["관측한 결과가 우연한 잡음만으로 나올 가능성을 읽는 근거", "분석 전에 정하는 판단 기준"],
    ["작을수록 귀무가설과 양립하기 어려움", "흔히 α = 0.05를 사용"],
  ], { left: 80, top: 190, width: 800, height: 300 }, [400, 400], { fontSize: 20, headerSize: 20 });
  addText(slide, "pvalue-caution", "p-value는 효과의 크기나 사업 가치를 대신하지 않는다.", { left: 160, top: 535, width: 640, height: 52 }, {
    fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 12, "revise", ["BUSS", "KMB", "S_B1"], [22, 23], ["p-value", "Significance Level (α)"]);
}
{
  const slide = fresh(13, "별표와 n.s.", "1.2 · OUTPUT READING");
  addTable(slide, "stars", [
    ["p-value", "유의수준", "표기"],
    ["p ≤ 0.001", "0.1%", "***"],
    ["0.001 < p ≤ 0.01", "1%", "**"],
    ["0.01 < p ≤ 0.05", "5%", "*"],
    ["0.05 < p", "유의하지 않음", "n.s."],
  ], { left: 130, top: 160, width: 700, height: 360 }, [270, 240, 190], { fontSize: 19, headerSize: 19 });
  addText(slide, "stars-source", "*** = 0.1%, ** = 1%, * = 5%", { left: 210, top: 535, width: 540, height: 42 }, {
    typeface: LATIN, fontSize: 18, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 13, "revise", ["BUSS", "KMB", "S_B1"], [33], ["0.1%", "0.001", "0.01", "0.05", "***"]);
}
{
  const slide = originals[40].duplicate();
  setSourceSlideNumber(slide, 14);
  addKoreanFooter(slide, 14, "70%Explained by IV’s · 30%Not explained by IV’s · KMB689 용어: 결정계수");
  register(slide, 14, "reposition", ["BUSS", "KMB", "S_B1"], [41, 43], ["70%Explained by IV’s", "30%Not explained by IV’s"], "source slide 41 retained; slide 43 supplies the 70/30 reading example");
}
{
  const slide = fresh(15, "R²가 높은 분석", "1.2 · LURE");
  addQuote(slide, "r2-lure", "R²가 높다", "설명력이 높다는 뜻이다. 비교가 적절한지, 종합 숫자를 분해했는지까지 보장하지 않는다.", {
    fontSize: 46, color: GOLD, detailSize: 25, detailColor: INK,
  });
  register(slide, 15, "new", ["S_B1", "I_SCRIPT"], [], [], "general lure only; no SmartAds answer");
}
{
  const slide = fresh(16, "MobileApp 읽기 예시", "1.2 · EXAMPLE");
  addText(slide, "source-label", "Multiple Liner Regression Model on Mobile App Sales", { left: 110, top: 125, width: 740, height: 45 }, {
    typeface: LATIN, fontSize: 20, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  addTable(slide, "mobile-vars", [
    ["종속변수(결과변수)", "독립변수(설명변수)"],
    ["순위가 좋을수록 큰 값\n−log(Rank)", "Price · Screenshots · Rating_Score\nlog(Rating_Num) · Category dummies"],
  ], { left: 80, top: 205, width: 800, height: 250 }, [330, 470], { fontSize: 21, headerSize: 19 });
  addText(slide, "example-rule", "코드를 쓰지 않고 출력표의 부호·유의성·결정계수를 읽는다.", { left: 140, top: 515, width: 680, height: 52 }, {
    fontSize: 22, color: BLUE, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 16, "revise", ["BUSS", "KMB", "S_B1"], [71], ["Multiple Liner Regression Model on Mobile App Sales"]);
}
{
  const slide = originals[70].duplicate();
  setSourceSlideNumber(slide, 17);
  shapeByName(slide, "Rectangle 3").position = { left: 18.94, top: 72.72, width: 940.8, height: 302.4 };
  register(slide, 17, "reposition", ["BUSS", "S_B1"], [71], [], "source full text retained except page number");
}
{
  const slide = fresh(18, "MobileApp 계수의 부호", "1.2 · EXAMPLE");
  addText(slide, "model-line", "-ln(Rank) = -6.556***", { left: 155, top: 122, width: 650, height: 44 }, {
    typeface: LATIN, fontSize: 22, bold: true, color: BLUE, alignment: "center", verticalAlignment: "middle",
  });
  addTable(slide, "mobile-coefs", [
    ["설명변수", "계수", "별표", "첫 읽기"],
    ["Price", "−0.009", "n.s.", "뚜렷한 관계를 말하기 어려움"],
    ["Screenshots", "+0.084", "**", "스크린샷 수와 순위 점수의 양의 관계"],
    ["Rating_Score", "+0.038", "n.s.", "평점만의 효과를 말하기 어려움"],
    ["log(Rating_Num)", "+0.152", "***", "리뷰 수와 순위 점수의 양의 관계"],
  ], { left: 55, top: 185, width: 850, height: 390 }, [210, 150, 130, 360], { fontSize: 17, headerSize: 18 });
  register(slide, 18, "revise", ["BUSS", "S_B1"], [72], ["-ln(Rank) = -6.556***", "0.152"]);
}
{
  const slide = fresh(19, "유의하지 않은 변수", "1.2 · EXAMPLE");
  addTable(slide, "ns-vars", [
    ["변수", "출력", "허용되는 말", "허용되지 않는 말"],
    ["Price", "−0.009 · n.s.", "가격 효과를 말할 근거가 부족하다", "가격을 낮추면 순위가 오른다"],
    ["Rating_Score", "+0.038 · p≈0.14", "평점만의 효과를 말하기 어렵다", "평점을 올리면 순위가 오른다"],
  ], { left: 45, top: 180, width: 870, height: 315 }, [170, 170, 265, 265], { fontSize: 17, headerSize: 18 });
  addQuote(slide, "ns-rule", "n.s.이면 효과가 있다고 말할 수 없다", "0이라는 뜻도 아니다. 현재 출력으로 효과를 주장할 근거가 부족하다는 뜻이다.", {
    position: { left: 115, top: 500, width: 730, height: 54 }, fontSize: 25, color: RED,
    detailPosition: { left: 120, top: 557, width: 720, height: 55 }, detailSize: 18,
  });
  register(slide, 19, "revise", ["BUSS", "S_B1"], [72], ["Price", "Rating_Score"]);
}
{
  const slide = fresh(20, "R² ≈ 0.14", "1.2 · EXAMPLE");
  addQuote(slide, "r2-value", "14% 설명", "나머지 86%는 모형 밖 요인에 남는다. ‘모형이 14%만 맞다’는 뜻이 아니다.", {
    fontSize: 46, color: BLUE, detailSize: 25, detailColor: RED,
  });
  addText(slide, "source-token", "Predicted Model", { left: 360, top: 555, width: 240, height: 35 }, {
    typeface: LATIN, fontSize: 16, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 20, "revise", ["BUSS", "S_B1"], [72], ["Predicted Model"]);
}

// 1.3 · multiple regression and baseline, 4 slides
{
  const slide = fresh(21, "다중회귀 모형", "1.3 · MULTIPLE REGRESSION");
  addQuote(slide, "holding-constant", "if all other variables in the model are held constant.", "다른 독립변수의 값을 같게 둔 상태에서 한 계수의 관계를 읽는다.", {
    fontSize: 29, typeface: LATIN, color: BLUE, detailSize: 24,
  });
  addText(slide, "multiple-formula", "Y = β₀ + β₁X + β₂W + β₃Z + ε", { left: 170, top: 520, width: 620, height: 55 }, {
    typeface: LATIN, fontSize: 29, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 21, "revise", ["BUSS", "KMB", "S_B1"], [58, 59, 60], ["if all other variables in the model are held constant."]);
}
{
  const slide = fresh(22, "더미변수와 기준 범주", "1.3 · BASELINE");
  addTable(slide, "dummy-baseline", [
    ["범주", "더미 값", "회귀표에서의 역할"],
    ["Games", "모든 category dummy = 0", "기준 범주(baseline)"],
    ["Business", "Business = 1", "Games 대비 차이"],
    ["Utilities", "Utilities = 1", "Games 대비 차이"],
  ], { left: 110, top: 175, width: 740, height: 350 }, [220, 250, 270], { fontSize: 19, headerSize: 19 });
  addText(slide, "baseline-note", "기준이 무엇인지 모르면 카테고리 계수를 잘못 읽는다.", { left: 170, top: 550, width: 620, height: 45 }, {
    fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 22, "revise", ["BUSS", "S_B1"], [72], ["Utilities = 1", "Games"]);
}
{
  const slide = fresh(23, "기준 대비 차이", "1.3 · BASELINE");
  addTable(slide, "category-coefs", [
    ["카테고리", "계수", "기준"],
    ["Business", "+0.678 ***", "Games 대비"],
    ["Finance", "+0.638 ***", "Games 대비"],
    ["Health", "+0.491 ***", "Games 대비"],
    ["Utilities", "+0.518 ***", "Games 대비"],
  ], { left: 165, top: 155, width: 630, height: 390 }, [250, 190, 190], { fontSize: 20, headerSize: 19 });
  addText(slide, "category-read", "같은 조건에서 해당 카테고리의 순위 점수가 Games와 얼마나 다른지 읽는다.", { left: 125, top: 560, width: 710, height: 48 }, {
    fontSize: 20, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 23, "revise", ["BUSS", "S_B1"], [72], ["0.678", "0.638", "0.491", "0.518"]);
}
{
  const slide = fresh(24, "로그 계수 읽기", "1.3 · LOG COEFFICIENT");
  addTable(slide, "log-rule", [
    ["종속변수", "독립변수", "BUSS256 예", "읽는 법"],
    ["Log(Sales)", "Price", "- 0.045", "Price 1단위 증가와 Sales 약 4.5% 감소"],
    ["−log(Rank)", "log(Rating_Num)", "+0.152 ***", "리뷰 수 1% 증가와 순위 점수 약 0.152% 증가"],
  ], { left: 45, top: 175, width: 870, height: 310 }, [190, 210, 180, 290], { fontSize: 17, headerSize: 17 });
  addText(slide, "log-correction", "MobileApp의 +0.152는 이 예시의 계수다. 뒤 사례의 계수와 섞지 않는다.", { left: 140, top: 520, width: 680, height: 58 }, {
    fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 24, "revise", ["BUSS", "S_B1", "S_E1"], [65, 72], ["Log(Sales)", "Price", "- 0.045", "0.152"]);
}

// 1.4 · decomposition and self-selection tools, 8 slides
{
  const slide = fresh(25, "출력표와 인과 판단", "1.4 · TWO JUDGMENTS");
  addTable(slide, "output-causal", [
    ["출력표가 주는 것", "관리자가 더 물을 것"],
    ["계수·p-value·R²", "종합 효과가 어느 경로에서 왔는가"],
    ["관측된 관계", "비교한 집단이 원래 달랐는가"],
  ], { left: 85, top: 195, width: 790, height: 290 }, [355, 435], { fontSize: 22, headerSize: 20 });
  addText(slide, "judgment-scope", "1블록에서는 질문하는 도구만 세운다. 사례의 답은 아직 보지 않는다.", { left: 150, top: 525, width: 660, height: 55 }, {
    fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 25, "new", ["S_B1", "I_SCRIPT"], [], [], "tool only; no case answer");
}
{
  const slide = fresh(26, "매출 분해", "1.4 · DECOMPOSITION");
  addQuote(slide, "gmv-identity", "매출(GMV) = 방문자 수 × 전환율 × 객단가", "종합 숫자를 세 채널로 열어야 매출이 왜 움직였는지 알 수 있다.", {
    fontSize: 37, color: BLUE, detailSize: 24, detailColor: RED,
  });
  register(slide, 26, "new", ["S_B1", "S_E2", "S_WS"], [], [], "general identity only");
}
{
  const slide = fresh(27, "같은 매출 증가, 다른 경로", "1.4 · DECOMPOSITION");
  addTable(slide, "two-paths", [
    ["가상 경로", "방문자", "전환율", "객단가", "GMV"],
    ["A", "+15%", "변화 없음", "변화 없음", "약 +15%"],
    ["B", "변화 없음", "+15%", "변화 없음", "약 +15%"],
  ], { left: 55, top: 190, width: 850, height: 270 }, [120, 185, 185, 185, 175], { fontSize: 19, headerSize: 18 });
  addText(slide, "path-question", "같은 +15%라도 다음 행동은 같지 않다. 어느 채널을 바꿔야 하는가?", { left: 120, top: 505, width: 720, height: 65 }, {
    fontSize: 23, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 27, "new", ["S_B1"], [], [], "generic examples, not SmartAds values");
}
{
  const slide = fresh(28, "분해 뒤의 질문", "1.4 · DECOMPOSITION");
  addQuote(slide, "decomp-question", "셋 중 어디서 움직였는가", "방문자가 움직였는가. 전환율이 움직였는가. 객단가가 움직였는가.\n그 답이 투자와 메시지를 바꾼다.", {
    fontSize: 42, color: RED, detailSize: 24,
  });
  register(slide, 28, "new", ["S_B1", "I_SCRIPT"], [], [], "question only");
}
{
  const slide = fresh(29, "도입자와 비도입자 비교", "1.4 · COMPARISON");
  addTable(slide, "simple-comparison", [
    ["관측", "바로 말할 수 있는가"],
    ["도입자의 성과가 더 높다", "도구가 성과를 높였다"],
  ], { left: 125, top: 205, width: 710, height: 210 }, [330, 380], { fontSize: 24, headerSize: 21 });
  addQuote(slide, "comparison-question", "도입 전에도 달랐는가", "단순 비교는 도구 효과와 원래 차이를 섞을 수 있다.", {
    position: { left: 130, top: 445, width: 700, height: 70 }, fontSize: 31, color: RED,
    detailPosition: { left: 140, top: 525, width: 680, height: 55 }, detailSize: 21,
  });
  register(slide, 29, "new", ["S_B1", "S_E1"], [], [], "general comparison trap only");
}
{
  const slide = fresh(30, "자발적 선택", "1.4 · SELF-SELECTION");
  addQuote(slide, "selection", "어떤 판매자가 먼저 도입했는가", "이미 성장세가 높거나 마케팅 역량과 예산이 큰 판매자가 신도구를 먼저 선택할 수 있다.", {
    fontSize: 36, color: BLUE, detailSize: 24,
  });
  addText(slide, "selection-rule", "도입 후 격차만으로는 도구가 더한 몫을 분리할 수 없다.", { left: 165, top: 535, width: 630, height: 52 }, {
    fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 30, "new", ["S_B1", "I_DISC"]);
}
{
  const slide = fresh(31, "차이-내-차이(DID)", "1.4 · COMPARISON TOOL");
  addTable(slide, "did", [
    ["그룹", "도입 전", "도입 후", "변화"],
    ["도입 그룹", "A₀", "A₁", "A₁ − A₀"],
    ["비도입 그룹", "B₀", "B₁", "B₁ − B₀"],
    ["도구가 더한 몫", "", "", "(A₁ − A₀) − (B₁ − B₀)"],
  ], { left: 75, top: 165, width: 810, height: 355 }, [210, 180, 180, 240], { fontSize: 19, headerSize: 18 });
  addText(slide, "did-rule", "직접 계산하지 않는다. 전·후 변화의 차이를 요구할 수 있으면 된다.", { left: 140, top: 550, width: 680, height: 48 }, {
    fontSize: 21, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 31, "new", ["S_B1"]);
}
{
  const slide = fresh(32, "매칭", "1.4 · COMPARISON TOOL");
  addTable(slide, "matching", [
    ["도입 전 조건", "도입 판매자", "비도입 판매자"],
    ["규모", "비슷한 수준", "비슷한 수준"],
    ["광고비", "비슷한 수준", "비슷한 수준"],
    ["성장 추세", "비슷한 수준", "비슷한 수준"],
  ], { left: 130, top: 165, width: 700, height: 345 }, [250, 225, 225], { fontSize: 20, headerSize: 19 });
  addQuote(slide, "matching-rule", "사과는 사과끼리", "도입 전 조건이 비슷한 판매자끼리 비교한다.", {
    position: { left: 250, top: 525, width: 460, height: 52 }, fontSize: 28, color: RED,
    detailPosition: { left: 180, top: 580, width: 600, height: 40 }, detailSize: 19,
  });
  register(slide, 32, "new", ["S_B1"]);
}

// 1.5 · five checks and bridge, 3 slides
{
  const slide = fresh(33, "회귀 검증 5문 (1–3)", "1.5 · VERIFICATION");
  addTable(slide, "checks-123", [
    ["번호", "관리자의 질문"],
    ["1", "부호가 사업 상식에 맞는가?"],
    ["2", "유의한가?"],
    ["3", "R²을 오해하지 않았는가?"],
  ], { left: 115, top: 180, width: 730, height: 330 }, [120, 610], { fontSize: 23, headerSize: 20, boldFirstColumn: true });
  addText(slide, "checks-123-note", "계산값을 읽은 뒤, 그 숫자가 주장에 충분한지 묻는다.", { left: 160, top: 545, width: 640, height: 45 }, {
    fontSize: 21, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 33, "new", ["S_B1"]);
}
{
  const slide = fresh(34, "회귀 검증 5문 (4–5)", "1.5 · VERIFICATION");
  addTable(slide, "checks-45", [
    ["번호", "관리자의 질문"],
    ["4", "비교 그룹이 올바른가?"],
    ["5", "하나의 종합 숫자를 분해했는가?"],
  ], { left: 115, top: 205, width: 730, height: 260 }, [120, 610], { fontSize: 24, headerSize: 20, boldFirstColumn: true });
  addText(slide, "checks-45-note", "2블록에서는 5번 분해를 먼저, 4번 비교를 다음에 검증한다.", { left: 145, top: 510, width: 670, height: 58 }, {
    fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 34, "new", ["S_B1", "I_SCRIPT"], [], [], "questions only");
}
{
  const slide = fresh(35, "사례 검증으로 전환", "1.5 · BRIDGE");
  addQuote(slide, "bridge", "AI가 내놓은 SmartAds 분석은 다섯 질문을 통과하는가", "1블록의 도구를 그대로 들고 2블록에서 직접 판정한다.", {
    fontSize: 33, color: BLUE, detailSize: 24, detailColor: RED,
  });
  register(slide, 35, "new", ["S_B1", "S_CASE"], [], [], "case named; no result or answer");
}

// Block 2 · case, demo, student verification, discussion, 8 slides
{
  const slide = fresh(36, "SmartAds 사례", "2.1 · CASE · 15 MIN");
  addQuote(slide, "case-hook", "매출은 분명히 늘었다. 그런데 왜 늘었는지 아무도 확신하지 못했다.", "이지수는 6개월 성과를 이사회에 보고하고, 상품 로드맵과 자원 배분을 정해야 한다.", {
    position: { left: 70, top: 125, width: 820, height: 135 }, fontSize: 31, color: RED,
    detailPosition: { left: 100, top: 270, width: 760, height: 80 }, detailSize: 21,
  });
  addTable(slide, "case-facts", [
    ["관측 단위", "규모", "핵심 질문"],
    ["판매자 1명의 1주", "약 189,942개 관측치\n약 2,060명 × 104주", "GMV 증가는 방문자·전환율·객단가 중 어디서 왔는가"],
  ], { left: 60, top: 390, width: 840, height: 185 }, [200, 250, 390], { fontSize: 18, headerSize: 17 });
  register(slide, 36, "new", ["S_CASE"], [], [], "case setup only");
}
{
  const slide = fresh(37, "도입 전·후와 그룹 비교", "2.1 · EXHIBIT 1");
  addTable(slide, "exhibit1-gmv", [
    ["그룹", "도입 전 평균 GMV", "도입 후 평균 GMV", "증감"],
    ["SmartAds 도입 판매자", "12,400,000원", "13,900,000원", "+약 12%"],
    ["비도입 판매자", "11,600,000원", "11,600,000원", "+약 0%"],
  ], { left: 45, top: 150, width: 870, height: 245 }, [260, 205, 205, 200], { fontSize: 17, headerSize: 17 });
  addTable(slide, "exhibit1-reg", [
    ["Adopted 계수", "유의성", "관측치", "R²"],
    ["+0.150 (≈ GMV +15%)", "*** (p < 0.001)", "189,942", "≈ 0.62"],
  ], { left: 65, top: 420, width: 830, height: 135 }, [245, 210, 180, 195], { fontSize: 17, headerSize: 16 });
  addText(slide, "exhibit1-question", "표를 가로와 세로로 읽을 때 어떤 차이가 이미 보이는가?", { left: 155, top: 575, width: 650, height: 45 }, {
    fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 37, "new", ["S_E1", "S_CASE"], [], [], "surface values only; students inspect pre-period gap");
}
{
  const slide = fresh(38, "AI 분석 보고서", "2.2 · INSTRUCTOR DEMO · ABOUT 20 MIN");
  addQuote(slide, "ai-claim", "“SmartAds는 타겟팅을 정교화하여 매출을 15% 끌어올립니다.”", "AI가 제시한 결론이다. 아직 채택하거나 반박하지 않는다.", {
    position: { left: 75, top: 112, width: 810, height: 105 }, fontSize: 29, color: RED,
    detailPosition: { left: 125, top: 215, width: 710, height: 45 }, detailSize: 18,
  });
  addTable(slide, "ai-regression", [
    ["변수", "계수", "표준오차", "유의성"],
    ["Adopted(도입=1)", "+0.150", "0.021", "*** (p<0.001)"],
    ["log(광고비)", "+0.412", "0.010", "***"],
    ["판매자등급", "+0.088", "0.015", "***"],
    ["입점기간", "+0.006", "0.002", "**"],
  ], { left: 95, top: 285, width: 770, height: 310 }, [250, 170, 170, 180], { fontSize: 17, headerSize: 17 });
  register(slide, 38, "new", ["S_AI", "S_E1", "I_SCRIPT"], [], [], "AI claim displayed as verification target");
}
{
  const slide = fresh(39, "두 질문에서 멈춘다", "2.2 · INSTRUCTOR DEMO");
  addTable(slide, "stop-questions", [
    ["AI 주장", "강사가 소리 내어 묻는 질문"],
    ["GMV 약 +15%", "방문자·전환율·객단가 중 어디서 왔는가?"],
    ["도입자 GMV 약 +20%", "도입 전에도 같은 판매자였는가?"],
  ], { left: 70, top: 185, width: 820, height: 285 }, [300, 520], { fontSize: 22, headerSize: 19 });
  addQuote(slide, "stop-rule", "여기서 멈춘다", "강사는 실제 방향과 최종 판정을 말하지 않는다. 다음 장부터 학생이 검증한다.", {
    position: { left: 280, top: 500, width: 400, height: 55 }, fontSize: 29, color: RED,
    detailPosition: { left: 150, top: 557, width: 660, height: 50 }, detailSize: 19,
  });
  register(slide, 39, "new", ["I_SCRIPT", "S_AI"], [], [], "smell only; actual direction withheld");
}
{
  const slide = fresh(40, "조별 검증", "2.3 · GUIDED VERIFY · ABOUT 20 MIN");
  addBullets(slide, "verify-steps", [
    "두 명이 한 조가 되어 AI 분석과 워크시트를 함께 읽는다.",
    "Exhibit 2에서 세 채널의 부호와 시간 추세를 옮겨 적는다.",
    "도입자 비교가 인과 효과인지 검증 4번으로 확인한다.",
    "이사회 메시지와 후속 투자 우선순위를 한 문장으로 정한다.",
  ], { left: 100, top: 160, width: 760, height: 350 }, { fontSize: 23, spaceAfterPoints: 14 });
  addText(slide, "verify-boundary", "화면에는 정답값을 띄우지 않는다. Exhibit와 워크시트에서 직접 찾는다.", { left: 135, top: 535, width: 690, height: 55 }, {
    fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 40, "new", ["S_WS", "S_E2", "I_SCRIPT"], [], [], "student discovery; no answer on screen");
}
{
  const slide = fresh(41, "동적 분해표", "2.4 · DEBRIEF · ABOUT 15 MIN");
  addTable(slide, "exhibit2", [
    ["도입 후", "방문자(도달)", "전환율", "객단가", "GMV 순효과"],
    ["0–3개월", "+9% ***", "−1% (n.s.)", "+0% (n.s.)", "≈ +8%"],
    ["4–6개월", "+15% ***", "−2% *", "+0% (n.s.)", "≈ +13%"],
    ["7–9개월", "+20% ***", "−3% **", "−0% (n.s.)", "≈ +17%"],
    ["10–12개월", "+24% ***", "−4% **", "+0% (n.s.)", "≈ +20%"],
  ], { left: 30, top: 145, width: 900, height: 390 }, [150, 195, 170, 180, 205], { fontSize: 16.5, headerSize: 16.5 });
  addText(slide, "exhibit2-note", "열 ①+②+③ ≈ GMV 순효과(로그 근사). 셀 값은 구조를 보여 주는 예시다.", { left: 90, top: 555, width: 780, height: 42 }, {
    fontSize: 17, color: MUTED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 41, "new", ["S_E2", "S_WS", "I_DISC"], [], [], "first actual mechanism reveal");
}
{
  const slide = fresh(42, "검증 결과", "2.4 · DEBRIEF");
  addTable(slide, "verified-mechanism", [
    ["검증 항목", "데이터가 말한 것", "AI 주장 판정"],
    ["분해", "방문자(도달)가 증가를 주도\n전환율은 정체 또는 소폭 감소\n객단가는 변화 없음", "전환율 향상 주장은 기각"],
    ["비교", "도입 판매자는 도입 전에도 달랐음\nDID·매칭 요구", "20% 단순 비교는 인과 근거가 아님"],
  ], { left: 55, top: 165, width: 850, height: 365 }, [190, 360, 300], { fontSize: 19, headerSize: 18 });
  addText(slide, "verified-lesson", "틀린 계산이 아니라 덜 쪼갠 해석과 잘못된 비교였다.", { left: 145, top: 555, width: 670, height: 48 }, {
    fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle",
  });
  register(slide, 42, "new", ["S_E1", "S_E2", "S_AI", "I_AI", "I_DISC"], [], [], "post-activity answer and interpretation");
}
{
  const slide = fresh(43, "이사회 보고와 다음 투자", "2.4 · DECISION");
  addTable(slide, "decision", [
    ["결정", "AI 제안", "검증 뒤 선택"],
    ["커뮤니케이션", "타겟팅으로 전환율·매출 향상", "도달 확장으로 매출 증가"],
    ["상품 로드맵", "타겟팅 알고리즘 고도화", "노출 지면·재고·도달 품질 검토"],
    ["추가 분석", "현재 결론 확정", "DID·매칭으로 도구의 추가분 확인"],
  ], { left: 50, top: 165, width: 860, height: 365 }, [190, 315, 355], { fontSize: 19, headerSize: 18 });
  addQuote(slide, "decision-close", "숫자를 열어 본 뒤 사업 메시지와 투자를 고친다", "", {
    position: { left: 125, top: 555, width: 710, height: 55 }, fontSize: 25, color: RED,
  });
  register(slide, 43, "new", ["S_WS", "S_E2", "I_DISC"], [], [], "decision after reveal");
}

if (outputs.length !== 43) throw new Error(`Authored ${outputs.length} slides, expected 43`);
if (sourceManifest.length !== 43) throw new Error(`Manifest has ${sourceManifest.length} entries, expected 43`);

for (const slide of originals) slide.delete();
for (let index = 0; index < outputs.length; index++) outputs[index].moveTo(index);
if (presentation.slides.count !== 43) throw new Error(`Final model has ${presentation.slides.count} slides`);

const candidatePath = path.join(buildDir, "candidate_R1.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);

const nativeTableOwnerSlides = [2, 7, 11, 12, 13, 16, 18, 19, 22, 23, 24, 25, 27, 29, 31, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43];
const result = await finalizePresentation({
  explicitTotalSlideCount: 43,
  requiredNativeTableOwnerSlides: nativeTableOwnerSlides,
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
    ...nativeTableOwnerSlides.flatMap((number) => ["--require-native-table-slide", String(number)]),
  ],
  fontPolicy: {
    basis: "design",
    families: ["Apple SD Gothic Neo", "Book Antiqua", "Helvetica Neue", "Helvetica Neue Light", "Tahoma", "Times New Roman"],
    scriptFonts: { ea: KOR },
  },
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, "KMB689_Wk8_Regression_CausalInference_R1.validation.json"),
});

const classification = sourceManifest.reduce((counts, slide) => {
  counts[slide.classification] += 1;
  return counts;
}, { reposition: 0, revise: 0, new: 0 });

await fs.writeFile(manifestPath, `${JSON.stringify({
  deck: path.relative(workspaceDir, FINAL_PPTX),
  sourceDeck: sourcePath,
  terminologyDeck: kmbSourcePath,
  classification,
  sourceCatalog: SOURCE_CATALOG,
  slides: sourceManifest,
}, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  finalPath: FINAL_PPTX,
  manifestPath,
  slideCount: presentation.slides.count,
  classification,
  result,
}, null, 2));
