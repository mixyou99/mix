import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

process.on("uncaughtException", (error) => {
  console.error(`BUILD_ERROR ${error?.name ?? "Error"}: ${error?.message ?? String(error)}`);
  process.exit(1);
});
process.on("unhandledRejection", (error) => {
  console.error(`BUILD_REJECTION ${error?.name ?? "Error"}: ${error?.message ?? String(error)}`);
  process.exit(1);
});

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
const sourcePath = "/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Seminar 9_데이터 시각화/Seminar 9_Lecture_Data Visualization_InClass.pptx";
const distributionPath = "/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Seminar 9_데이터 시각화/Seminar 9_Lecture_Data Visualization.pptx";
const buildDir = path.join(workspaceDir, ".codex-finalizer/wk9-r1");
const outputDir = path.join(workspaceDir, "teaching/KMB689/02_working/Wk9");
const FINAL_PPTX = path.join(outputDir, "KMB689_Wk9_Visualization_MeasurementValidity_R1.pptx");
const manifestPath = path.join(workspaceDir, "docs/rounds/KMB689_Wk9_source_manifest_R1.json");
const RUNTIME_PYTHON = "/Users/gunwoonglee/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";

const BLUE = "#003478";
const RED = "#C60C30";
const GOLD = "#C49000";
const INK = "#262626";
const MUTED = "#5B6573";
const LIGHT_BLUE = "#EAF1F8";
const LIGHT_RED = "#FBECEF";
const WHITE = "#FFFFFF";
const KOR = "Apple SD Gothic Neo";
const LATIN = "Helvetica Neue";

const SOURCE_CATALOG = {
  KMB119: sourcePath,
  KMB107: distributionPath,
  DESIGN: "teaching/KMB689/deck_inputs/reference/MBA_BigData_design_plan.md",
  W1: "teaching/KMB689/02_working/Wk1/KMB689_Wk1_Orientation_Supervision_R1.pptx",
  S_B1: "teaching/KMB689/03_final/student/MBA_S9_Block1_LectureNotes_KR.md",
  S_CASE: "teaching/KMB689/03_final/student/MBA_S9_Case_Handout_KR.md",
  S_AI: "teaching/KMB689/03_final/student/MBA_S9_AI_Dashboard_Exhibit_KR_STUDENT.md",
  S_VE: "teaching/KMB689/03_final/student/MBA_S9_Verification_Exhibit_KR.md",
  S_WS: "teaching/KMB689/03_final/student/MBA_S9_Verification_Worksheet_KR.md",
  I_AI: "teaching/KMB689/03_final/instructor/MBA_S9_AI_Dashboard_Exhibit_KR_INSTRUCTOR.md",
  I_DISC: "teaching/KMB689/03_final/instructor/MBA_S9_Discussion_Prompts_INSTRUCTOR_KR.md",
  I_SCRIPT: "teaching/KMB689/03_final/instructor/MBA_S9_Instructor_Demo_Script_INSTRUCTOR_KR.md",
};

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });

const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
const originals = [...presentation.slides.items];
if (originals.length !== 119) throw new Error(`Source slide count changed: ${originals.length}`);

function addText(slide, name, value, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: style.fill ?? "none",
    line: { style: "solid", fill: style.lineFill ?? "none", width: style.lineWidth ?? 0 },
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
  addText(slide, `section-${number}`, section, { left: 52, top: 18, width: 500, height: 22 }, {
    typeface: LATIN, fontSize: 12, bold: true, color: RED, verticalAlignment: "middle",
  });
  addText(slide, `title-${number}`, title, { left: 52, top: 43, width: 820, height: 58 }, {
    fontSize: 31, bold: true, color: BLUE, verticalAlignment: "middle",
  });
  addText(slide, `number-${number}`, String(number), { left: 886, top: 650, width: 34, height: 24 }, {
    typeface: LATIN, fontSize: 12, color: MUTED, alignment: "right", verticalAlignment: "middle", fill: WHITE,
  });
}

function fresh(number, title, section) {
  const slide = originals[118].duplicate();
  for (const shape of [...slide.shapes.items]) shape.delete();
  for (const image of [...(slide.images?.items ?? [])]) image.delete();
  for (const table of [...(slide.tables?.items ?? [])]) table.delete();
  for (const chart of [...(slide.charts?.items ?? [])]) chart.delete();
  slide.background.fill = WHITE;
  addTitle(slide, number, title, section);
  return slide;
}

function sourceSlide(sourceNumber, finalNumber, section, footer = "") {
  const slide = originals[sourceNumber - 1].duplicate();
  addText(slide, `section-${finalNumber}`, section, { left: 42, top: 12, width: 430, height: 20 }, {
    typeface: LATIN, fontSize: 11, bold: true, color: RED, verticalAlignment: "middle", fill: WHITE,
  });
  if (footer) {
    addText(slide, `footer-${finalNumber}`, footer, { left: 78, top: 606, width: 790, height: 42 }, {
      fontSize: 17, bold: true, color: RED, alignment: "center", verticalAlignment: "middle", fill: WHITE,
    });
  }
  return slide;
}

function addBullets(slide, name, items, position = { left: 88, top: 145, width: 785, height: 450 }, options = {}) {
  return addText(slide, name, makeNativeBulletParagraphs(items, {
    marginLeftPoints: options.marginLeftPoints ?? 19,
    hangingPoints: options.hangingPoints ?? 9,
    spaceAfterPoints: options.spaceAfterPoints ?? 10,
  }), position, {
    fontSize: options.fontSize ?? 23,
    color: options.color ?? INK,
    lineSpacing: options.lineSpacing ?? 1.1,
    verticalAlignment: options.verticalAlignment ?? "top",
  });
}

function addQuote(slide, name, quote, detail = "", options = {}) {
  addText(slide, name, quote, options.position ?? { left: 85, top: 165, width: 790, height: 190 }, {
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

const outputs = [];
const sourceManifest = [];

function register(slide, number, classification, sourceRefs, sourceSlides = [], requiredSourceSnippets = [], reveal = "normal", placeholder = false) {
  if (number !== outputs.length + 1) throw new Error(`Slide registration out of order: ${number}`);
  if (!new Set(["reposition", "revise", "new"]).has(classification)) throw new Error(`Unknown classification ${classification}`);
  if (!sourceRefs.length) throw new Error(`Slide ${number} has no sourceRefs`);
  for (const code of sourceRefs) if (!SOURCE_CATALOG[code]) throw new Error(`Unknown sourceRef ${code} on slide ${number}`);
  if (classification === "new" && sourceSlides.length) throw new Error(`New slide ${number} cannot map source slides`);
  if (classification !== "new" && !sourceSlides.length) throw new Error(`R slide ${number} lacks source slide mapping`);
  const mapping = classification === "new" ? `N${number}` : `R${number}`;
  slide.speakerNotes.textFrame.setText(
    `KMB689 Wk9 | slide: ${number} | mapping: ${mapping} | class: ${classification} | sourceSlides: ${sourceSlides.join(",") || "none"} | sourceRefs: ${sourceRefs.join(",")} | reveal: ${reveal} | placeholder: ${placeholder}`,
  );
  sourceManifest.push({ number, mapping, classification, sourceSlides, requiredSourceSnippets, sourceRefs, reveal, placeholder });
  outputs.push(slide);
}

// Block 1 · 35 slides
{
  const s = fresh(1, "데이터 시각화와 측정 타당성", "KMB689 · SEMINAR 9");
  addQuote(s, "cover", "Seminar 9 Data Visualization", "KMB689: Big Data for Business Applications\nKorea University Business School", { fontSize: 38, detailSize: 22, detailColor: RED });
  register(s, 1, "revise", ["KMB119", "KMB107", "DESIGN", "S_B1"], [2], ["Seminar 9 Data Visualization", "KMB689: Big Data for Business Applications", "Korea University Business School"]);
}
{
  const s = fresh(2, "오늘의 두 블록", "1.1 · OVERVIEW");
  addTable(s, "route", [["1블록 · 75분", "2블록 · 약 70분"], ["차트 선택과 정직한 인코딩\n오도 차트 체크리스트\n측정 타당성·검증 5문", "AttentionDisplacement 사례\nAI 대시보드 검증\n학생 발견과 정책 결정"]], { left: 80, top: 180, width: 800, height: 320 }, [400, 400], { fontSize: 22, headerSize: 20 });
  addText(s, "slack", "자료에 지정되지 않은 5분은 운영 여유로 남긴다.", { left: 160, top: 540, width: 640, height: 42 }, { fontSize: 18, color: MUTED, alignment: "center", verticalAlignment: "middle" });
  register(s, 2, "new", ["DESIGN", "S_B1", "S_CASE", "I_SCRIPT", "I_DISC"]);
}
{
  const s = fresh(3, "감독 신조 recap", "1.1 · SUPERVISION CREED");
  addQuote(s, "creed", "기준을 세운다 → AI에게 시킨다 → 검증한다 → 결정한다.", "분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.", { fontSize: 34, color: RED, detailSize: 23, detailColor: BLUE });
  register(s, 3, "new", ["W1", "S_B1"], [], [], "W1-X canonical exposure");
}
{
  const s = fresh(4, "수업 목표", "1.1 · OBJECTIVES");
  addBullets(s, "objectives", ["데이터 시각화의 중요성 이해", "데이터 시각화의 핵심 요구사항 파악", "질문에 맞는 차트 유형과 정직한 인코딩을 읽는다.", "측정 타당성을 점검하고 AI 대시보드를 비판한다."], { left: 105, top: 155, width: 750, height: 390 }, { fontSize: 24, spaceAfterPoints: 15 });
  register(s, 4, "revise", ["KMB119", "S_B1", "DESIGN"], [3, 4], ["수업 목표", "데이터 시각화의 중요성 이해", "데이터 시각화의 핵심 요구사항 파악"]);
}
{
  const s = fresh(5, "데이터 시각화란?", "1.2 · READING CHARTS");
  addTable(s, "purpose-accuracy", [["목적성", "정확성"], ["전달하려는 질문과 메시지가 분명한가", "객관적인 값·축·단위·출처를 읽을 수 있는가"]], { left: 90, top: 190, width: 780, height: 260 }, [390, 390], { fontSize: 23, headerSize: 22 });
  addText(s, "definition", "데이터 분석 결과를 쉽게 이해할 수 있도록 시각적으로 표현하고 전달되는 과정", { left: 125, top: 500, width: 710, height: 65 }, { fontSize: 21, color: MUTED, alignment: "center", verticalAlignment: "middle" });
  register(s, 5, "revise", ["KMB119", "S_B1"], [9, 10], ["데이터 시각화란?", "목적성", "정확성"]);
}
{
  const s = sourceSlide(14, 6, "1.2 · SAME SUMMARY, DIFFERENT SHAPE", "같은 요약 통계가 같은 분포를 뜻하지 않는다.");
  register(s, 6, "revise", ["KMB119", "S_B1"], [14], ["데이터 시각화의 필요성", "동일한 요약 통계 정보"]);
}
{
  const s = sourceSlide(25, 7, "1.2 · FOUR WORKER CHARTS", "질문이 달라지면 차트도 달라진다.");
  register(s, 7, "revise", ["KMB119", "S_B1"], [25], ["목적에 따라 적적한 그래프 선택"]);
}
{
  const s = fresh(8, "분포 질문과 히스토그램", "1.2 · DISTRIBUTION");
  addQuote(s, "question", "값들이 어떻게 퍼져 있나", "연속변수: 히스토그램\n불연속변수: 막대그래프", { fontSize: 34, color: BLUE, detailSize: 25, detailColor: RED });
  register(s, 8, "revise", ["KMB119", "S_B1"], [22], ["연속변수: 히스토그램", "불연속변수: 막대그래프"]);
}
{
  const s = fresh(9, "관계 질문과 산점도", "1.2 · RELATIONSHIP");
  addQuote(s, "question", "x가 커지면 y도 커지나", "두 변수의 값이 함께 움직이는 모양을 읽는다. 모양만으로 인과관계를 단정하지 않는다.", { fontSize: 34, detailSize: 23 });
  register(s, 9, "new", ["S_B1"]);
}
register(sourceSlide(22, 10, "1.2 · COMPARISON"), 10, "reposition", ["KMB119", "S_B1"], [22]);
register(sourceSlide(21, 11, "1.2 · TREND"), 11, "reposition", ["KMB119", "S_B1"], [21]);
{
  const s = fresh(12, "정직한 인코딩", "1.2 · ENCODING");
  addTable(s, "encoding", [["읽을 요소", "확인 질문"], ["x축·y축", "시간·범주·값 가운데 무엇이 매핑됐는가"], ["색", "색이 집단·강조·순서를 무엇으로 구분하는가"], ["단위·범례", "값의 단위와 계열의 뜻을 재현할 수 있는가"]], { left: 85, top: 145, width: 790, height: 410 }, [250, 540], { fontSize: 21, headerSize: 19 });
  register(s, 12, "new", ["S_B1"]);
}
{
  const s = fresh(13, "차트의 문법", "1.2 · GRAMMAR");
  addQuote(s, "grammar", "데이터 + 축·색 매핑 + 도형", "관리자는 조합이 질문에 맞는지 읽는다. 차트를 직접 만드는 수업은 아니다.", { fontSize: 35, color: BLUE, detailSize: 23, detailColor: RED });
  register(s, 13, "new", ["S_B1", "DESIGN"]);
}
{
  const s = sourceSlide(27, 14, "1.3 · MISLEADING CHARTS", "답을 먼저 붙이지 말고, 무엇이 문제인지 묻는다.");
  register(s, 14, "revise", ["KMB119", "S_B1"], [26, 27], ["다음 그래프의 문제점은?"]);
}
register(sourceSlide(38, 15, "1.3 · TRUNCATED AXIS"), 15, "reposition", ["KMB119", "S_B1"], [38]);
{
  const s = sourceSlide(44, 16, "1.3 · WRONG CHART AND ORDER", "데이터에 적절하지 않은 그래프 사용");
  register(s, 16, "revise", ["KMB119", "S_B1"], [44, 56], ["잘못된 그래프 사용 및 시계열 무시", "데이터에 적절하지 않은 그래프 사용"]);
}
{
  const s = sourceSlide(33, 17, "1.3 · SCALE, RANGE AND TIME", "값의 차이를 과대/축소 시킴 · 잘못된 시계열 표기");
  register(s, 17, "revise", ["KMB119", "S_B1"], [33, 35, 36], ["세로축 범위 (눈금) 바꾸기", "값의 차이를 과대/축소 시킴", "잘못된 시계열 표기"]);
}
register(sourceSlide(37, 18, "1.3 · DUAL AXES"), 18, "reposition", ["KMB119", "S_B1"], [37]);
{
  const s = fresh(19, "맥락 누락", "1.3 · MISSING CONTEXT");
  addBullets(s, "context", ["그래프에 자료가 빠짐", "그래프해석에 대한 설명이 필요함", "정렬순서 미흡, 제목과의 불일치", "축 이름·단위·출처가 없으면 읽을 수 없다."], { left: 110, top: 165, width: 740, height: 360 }, { fontSize: 25, spaceAfterPoints: 16 });
  register(s, 19, "revise", ["KMB119", "S_B1"], [57, 58, 59], ["그래프에 자료가 빠짐", "그래프해석에 대한 설명이 필요함", "정렬순서 미흡, 제목과의 불일치"]);
}
{
  const s = fresh(20, "오도하는 차트를 잡는 다섯 기준", "1.3 · CHECKLIST");
  addTable(s, "five", [["1", "잘린 축"], ["2", "잘못된 차트 유형"], ["3", "체리픽된 척도·범위"], ["4", "이중축"], ["5", "맥락 누락"]], { left: 205, top: 135, width: 550, height: 440 }, [90, 460], { fontSize: 23, headerSize: 18, boldFirstColumn: true });
  addText(s, "source-rule", "변수이름, 변수의 단위, 자료의 출처와 범례를 확인한다.", { left: 155, top: 590, width: 650, height: 42 }, { fontSize: 19, color: MUTED, alignment: "center", verticalAlignment: "middle" });
  register(s, 20, "revise", ["KMB119", "S_B1"], [60], ["변수이름", "변수의 단위", "자료의 출처", "범례"]);
}
{
  const s = fresh(21, "측정 타당성", "1.4 · MEASUREMENT VALIDITY");
  addQuote(s, "pivot", "이 축은 무엇을 세는가", "정직하게 그린 차트도 숫자가 잘못된 대상을 재면 잘못된 결론으로 이어진다.", { fontSize: 37, color: RED, detailSize: 23 });
  register(s, 21, "new", ["S_B1", "DESIGN"]);
}
{
  const s = fresh(22, "대리지표와 실체", "1.4 · PROXY AND CONSTRUCT");
  addTable(s, "proxy", [["실체", "대리지표"], ["직접 알고 싶은 행동·이용·소비", "직접 재기 어려워 대신 관측한 검색·클릭·신호"], ["판정", "대리지표가 실체를 언제 잘 대리하고 언제 어긋나는지 묻는다"]], { left: 70, top: 170, width: 820, height: 330 }, [330, 490], { fontSize: 22, headerSize: 21 });
  register(s, 22, "new", ["S_B1"]);
}
{
  const s = fresh(23, "대리지표 검증 질문", "1.4 · PROXY QUESTION");
  addQuote(s, "proxy-q", "관측한 신호가 줄었을 때, 우리가 알고 싶은 행동도 줄었다고 말할 수 있는가", "대체 경로·측정 공백·다른 설명을 먼저 찾는다.", { fontSize: 31, color: BLUE, detailSize: 24, detailColor: RED });
  register(s, 23, "new", ["S_B1"]);
}
{
  const s = fresh(24, "상대값과 절대값", "1.4 · RELATIVE AND ABSOLUTE");
  addTable(s, "relative", [["상대값", "절대값"], ["기준점에 대한 비율·지수", "건수·명·원처럼 단위가 있는 양"], ["확인: 기준점과 척도 정의", "확인: 단위와 분모"]], { left: 80, top: 180, width: 800, height: 300 }, [400, 400], { fontSize: 22, headerSize: 21 });
  register(s, 24, "new", ["S_B1"]);
}
{
  const s = fresh(25, "Google Trends 지수 0–100", "1.4 · RELATIVE INDEX");
  addQuote(s, "definition", "해당 기간·지역에서 검색 관심이 가장 높았던 시점을 100으로 놓고, 나머지 시점을 그에 대한 상대 비율로 환산한 값", "차원이 없는 상대 지표이며 검색 건수·방문자 수·사람 수가 아니다.", { position: { left: 80, top: 145, width: 800, height: 250 }, fontSize: 28, detailPosition: { left: 120, top: 430, width: 720, height: 105 }, detailSize: 24, detailColor: RED });
  register(s, 25, "new", ["S_B1"]);
}
{
  const s = fresh(26, "교란된 비교", "1.4 · CONFOUNDING");
  addQuote(s, "confounding", "두 집단이 여러 면에서 동시에 다르면, 보이는 격차를 한 원인의 효과로 분리할 수 없다", "인구·기저 관심·시점·미디어 보도가 함께 달라질 수 있다.", { fontSize: 31, detailSize: 23 });
  register(s, 26, "new", ["S_B1"]);
}
{
  const s = fresh(27, "같은 모집단 안의 대조", "1.4 · WITHIN-POPULATION CONTRAST");
  addQuote(s, "within", "같은 집단 안에서 접속 변화 여부만 다른 사건을 비교한다", "관할 간 격차보다 비교 가능한 조건을 먼저 찾는다.", { fontSize: 33, color: BLUE, detailSize: 24, detailColor: RED });
  register(s, 27, "new", ["S_B1"]);
}
{
  const s = fresh(28, "관측되지 않은 대체 경로", "1.4 · OBSERVABILITY");
  addQuote(s, "missing", "보이는 지표가 줄었을 때, 무엇이 다른 경로로 옮겨갔는가", "개입이 데이터에 남는 흔적 자체를 바꿀 수 있다.", { fontSize: 33, detailSize: 24 });
  register(s, 28, "new", ["S_B1"]);
}
{
  const s = fresh(29, "관리자의 시각화 검증 5문", "1.5 · FIVE QUESTIONS");
  addTable(s, "five-questions", [["1", "올바른 차트인가?"], ["2", "축이 정직한가?"], ["3", "이 숫자는 무엇을 세나?"], ["4", "비교가 공정한가?"], ["5", "무엇이 빠졌나?"]], { left: 165, top: 135, width: 630, height: 450 }, [90, 540], { fontSize: 23, headerSize: 18, boldFirstColumn: true });
  register(s, 29, "new", ["S_B1"]);
}
{
  const s = fresh(30, "검증 5문 ①–③", "1.5 · QUESTIONS 1–3");
  addBullets(s, "q123", ["① 올바른 차트인가? 질문에 맞는 유형인가?", "② 축이 정직한가? 막대는 0부터 시작하며 척도와 범위를 밝혔는가?", "③ 이 숫자는 무엇을 세나? 대리지표인가 실체인가, 상대값인가 절대값인가?"], { left: 90, top: 165, width: 790, height: 360 }, { fontSize: 25, spaceAfterPoints: 18 });
  register(s, 30, "new", ["S_B1"]);
}
{
  const s = fresh(31, "검증 5문 ④–⑤", "1.5 · QUESTIONS 4–5");
  addBullets(s, "q45", ["④ 비교가 공정한가? 동시에 다른 조건이 결론을 흐리는가?", "⑤ 무엇이 빠졌나? 대체·우회 계열과 영효과 사건을 함께 봤는가?"], { left: 100, top: 190, width: 760, height: 280 }, { fontSize: 26, spaceAfterPoints: 22 });
  addText(s, "boundary", "1블록에서는 질문하는 도구만 익힌다. 사례의 정답은 2블록에서 학생이 찾는다.", { left: 110, top: 520, width: 740, height: 60 }, { fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 31, "new", ["S_B1", "DESIGN"], [], [], "questions only");
}
register(sourceSlide(62, 32, "1.5 · WORKED CHECK · QUESTION"), 32, "reposition", ["KMB119", "S_B1"], [62], [], "question only");
register(sourceSlide(63, 33, "1.5 · WORKED CHECK · REVEAL"), 33, "reposition", ["KMB119", "S_B1"], [63], [], "generic chart answer only");
{
  const s = fresh(34, "사례 전 준비 점검", "1.5 · READY CHECK");
  addBullets(s, "ready", ["차트 유형과 질문이 맞는지 읽는다.", "축·범위·단위·출처를 확인한다.", "지표가 무엇을 재는지 묻는다.", "비교와 누락된 계열을 찾는다."], { left: 110, top: 165, width: 740, height: 350 }, { fontSize: 25, spaceAfterPoints: 16 });
  register(s, 34, "new", ["S_B1"]);
}
{
  const s = fresh(35, "이 대시보드는 정직한가?", "1.5 · BRIDGE TO CASE");
  addQuote(s, "bridge", "같은 다섯 질문으로 AI의 정책 대시보드를 검증한다", "답은 2블록의 자료에서 학생이 직접 찾는다.", { fontSize: 34, color: BLUE, detailSize: 24, detailColor: RED });
  register(s, 35, "new", ["DESIGN", "S_B1", "S_CASE"], [], [], "case named; no answer");
}

// Block 2 · 8 slides. P2-dependent slides 37, 38 and 42 intentionally have title/position only.
{
  const s = fresh(36, "AttentionDisplacement 사례", "2.1 · CASE · 15 MIN");
  addQuote(s, "case", "한 주에서 연령확인법이 시행되자 대형 플랫폼의 검색 관심이 약 70% 하락했다", "정책 분석가는 이 수치가 법의 효과를 보여 주는지 판단해야 한다. 모든 논의는 검색 주의 수준에 한정한다.", { position: { left: 75, top: 145, width: 810, height: 190 }, fontSize: 31, color: RED, detailPosition: { left: 105, top: 390, width: 750, height: 125 }, detailSize: 22 });
  addText(s, "distribution", "Case Handout은 학생 발견 구간 2.3에서 배포한다.", { left: 180, top: 565, width: 600, height: 42 }, { fontSize: 18, bold: true, color: BLUE, alignment: "center", verticalAlignment: "middle" });
  register(s, 36, "new", ["S_CASE", "DESIGN"], [], [], "surface lure; handout withheld until 2.3");
}
register(fresh(37, "그림 1 · 법 시행 전후 검색 관심도", "2.1 · FIGURE PLACEHOLDER"), 37, "new", ["S_AI"], [], [], "P2 pending; body intentionally blank", true);
register(fresh(38, "그림 2–3 · 관할 비교와 검색 관심도 추이", "2.1 · FIGURE PLACEHOLDER"), 38, "new", ["S_AI"], [], [], "P2 pending; body intentionally blank", true);
{
  const s = fresh(39, "AI의 정책 제언", "2.2 · VERIFICATION TARGET");
  addQuote(s, "ai-claim", "연령확인법은 플랫폼 이용을 약 70% 줄이는 효과적인 정책입니다", "AI는 ‘법 시행으로 이용자 대폭 감소, 정책 성공’으로 보고하고 강한 집행 모델의 확산을 제안했다. 아직 채택하거나 반박하지 않는다.", { position: { left: 80, top: 145, width: 800, height: 180 }, fontSize: 31, color: RED, detailPosition: { left: 105, top: 365, width: 750, height: 150 }, detailSize: 22 });
  register(s, 39, "new", ["S_AI", "I_SCRIPT"], [], [], "AI claim only; no answer");
}
{
  const s = fresh(40, "질문에서 멈춘다", "2.2 · INSTRUCTOR DEMO · ABOUT 20 MIN");
  addTable(s, "stop", [["검증 질문", "강사가 묻고 멈추는 지점"], ["이 숫자는 무엇을 세나?", "검색 관심은 행동과 같은가? 상대 지수에 사람 수 단위가 있는가?"], ["비교가 공정한가?", "관할들이 여러 조건에서 동시에 다르지 않은가?"], ["무엇이 빠졌나?", "대체·우회 계열과 같은 관할 안 대조가 보이는가?"]], { left: 55, top: 145, width: 850, height: 390 }, [255, 595], { fontSize: 20, headerSize: 18 });
  addText(s, "stop-rule", "여기서 멈춘다. 강사는 정답·V1/V2·최종 정책 판정을 말하지 않는다.", { left: 120, top: 565, width: 720, height: 50 }, { fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 40, "new", ["I_SCRIPT", "S_AI"], [], [], "questions and stop; no answer");
}
{
  const s = fresh(41, "학생 검증", "2.3 · GUIDED VERIFY · ABOUT 20 MIN");
  addBullets(s, "steps", ["Case Handout·AI Dashboard·Verification Worksheet를 이 구간에서 배포한다.", "검증 5문으로 AI의 주장과 차트를 대조한다.", "Verification Exhibit V1·V2에서 빠진 비교와 계열을 찾는다.", "보고 문구와 다음 측정 설계 권고를 한 문장으로 적는다."], { left: 90, top: 150, width: 790, height: 390 }, { fontSize: 23, spaceAfterPoints: 15 });
  addText(s, "screen-boundary", "화면에는 정답을 띄우지 않는다. 배포물과 도판에서 학생이 직접 찾는다.", { left: 135, top: 560, width: 690, height: 48 }, { fontSize: 20, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 41, "new", ["S_CASE", "S_AI", "S_WS", "S_VE", "I_SCRIPT"], [], [], "student discovery instructions; no answer");
}
register(fresh(42, "Exhibit V-1·V-2 · 대시보드가 보여 주지 않은 그림", "2.3 · FIGURE PLACEHOLDER"), 42, "new", ["S_VE"], [], [], "P2 pending; body intentionally blank", true);
{
  const s = fresh(43, "측정 타당성 판정과 정책 결정", "2.4 · DEBRIEF · ABOUT 15 MIN");
  addTable(s, "decision", [["검증", "학생 발견 뒤 회수"], ["주의와 행동", "핵심 플랫폼 검색 주의는 감소했지만, 실제 이용 감소로 단정할 수 없다."], ["상대와 절대", "0–100 지수는 사람 수가 아니다."], ["비교", "접속을 바꾼 사건은 −70%, 접속을 바꾸지 않은 사건은 약 +9%. 같은 관할 안 대조가 필요하다."], ["누락", "우회수단 검색 주의와 영효과 사건을 대시보드에 함께 넣는다."]], { left: 45, top: 125, width: 870, height: 460 }, [220, 650], { fontSize: 18.5, headerSize: 18 });
  addText(s, "close", "깔끔한 헤드라인 숫자는 검증의 시작이지 끝이 아니다.", { left: 150, top: 600, width: 660, height: 42 }, { fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 43, "new", ["S_VE", "S_WS", "I_AI", "I_DISC"], [], [], "first answer reveal after student discovery slot");
}

if (outputs.length !== 43) throw new Error(`Authored ${outputs.length} slides, expected 43`);
if (sourceManifest.length !== 43) throw new Error(`Manifest has ${sourceManifest.length} entries, expected 43`);

for (const slide of originals) slide.delete();
for (let index = 0; index < outputs.length; index++) outputs[index].moveTo(index);
if (presentation.slides.count !== 43) throw new Error(`Final model has ${presentation.slides.count} slides`);

const candidatePath = path.join(buildDir, "candidate_R1.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);

const nativeTableOwnerSlides = [2, 5, 12, 20, 22, 24, 29, 40, 43];
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
    families: ["Arial", "Helvetica Neue", "Helvetica Neue Light", "MS PGothic", "Times New Roman", "나눔고딕", "맑은 고딕", "ＭＳ Ｐゴシック", "Apple SD Gothic Neo"],
    scriptFonts: { ea: KOR },
  },
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, "KMB689_Wk9_Visualization_MeasurementValidity_R1.validation.json"),
});

const classification = sourceManifest.reduce((counts, slide) => {
  counts[slide.classification] += 1;
  return counts;
}, { reposition: 0, revise: 0, new: 0 });

await fs.writeFile(manifestPath, `${JSON.stringify({
  deck: path.relative(workspaceDir, FINAL_PPTX),
  distributionDeck: distributionPath,
  inClassSourceDeck: sourcePath,
  classification,
  figurePlaceholders: [37, 38, 42],
  g5Status: "incomplete_excluded_pending_P2",
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
