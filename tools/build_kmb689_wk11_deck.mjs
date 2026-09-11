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
if (!runtimeModules || !path.isAbsolute(runtimeModules)) throw new Error("Set RUNTIME_NODE_MODULES");
const { FileBlob, PresentationFile } = await import(pathToFileURL(
  path.join(runtimeModules, "@oai/artifact-tool/dist/artifact_tool.mjs"),
).href);

const SKILL_DIR = "/Users/gunwoonglee/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations";
const { finalizePresentation, makeNativeBulletParagraphs } = await import(pathToFileURL(
  path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs"),
).href);

const workspaceDir = "/Users/gunwoonglee/Documents/ChatGPT/Lecture Materials";
const sourcePath = "/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Classification/Extra_Lecture_Classification.pptx";
const bussSeedPath = "/Users/gunwoonglee/Downloads/Teaching_2025/Fall/BUSS256_BigData/Old/Weeks 13-14/Seminars 22-24_Lecture_Notes.pptx";
const buildDir = path.join(workspaceDir, ".codex-finalizer/wk11-r1");
const outputDir = path.join(workspaceDir, "teaching/KMB689/02_working/Wk11");
const FINAL_PPTX = path.join(outputDir, "KMB689_Wk11_Classification_R1.pptx");
const manifestPath = path.join(workspaceDir, "docs/rounds/KMB689_Wk11_source_manifest_R1.json");
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
  KMB78: sourcePath,
  BUSS55: bussSeedPath,
  DESIGN: "teaching/KMB689/deck_inputs/reference/MBA_BigData_design_plan.md",
  W1: "teaching/KMB689/02_working/Wk1/KMB689_Wk1_Orientation_Supervision_R1.pptx",
  S_B1: "teaching/KMB689/03_final/student/MBA_S11_Block1_LectureNotes_KR.md",
  S_CASE: "teaching/KMB689/03_final/student/MBA_S11_Case_Handout_KR.md",
  S_AI: "teaching/KMB689/03_final/student/MBA_S11_AI_ClassifInterp_Exhibit_KR_STUDENT.md",
  S_WS: "teaching/KMB689/03_final/student/MBA_S11_Verification_Worksheet_KR.md",
  I_AI: "teaching/KMB689/03_final/instructor/MBA_S11_AI_ClassifInterp_Exhibit_KR_INSTRUCTOR.md",
  I_DISC: "teaching/KMB689/03_final/instructor/MBA_S11_Discussion_Prompts_INSTRUCTOR_KR.md",
  I_SCRIPT: "teaching/KMB689/03_final/instructor/MBA_S11_Instructor_Demo_Script_INSTRUCTOR_KR.md",
};

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });
const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
const originals = [...presentation.slides.items];
if (originals.length !== 78) throw new Error(`Source slide count changed: ${originals.length}`);

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
  const slide = originals[60].duplicate();
  for (const shape of [...slide.shapes.items]) shape.delete();
  for (const image of [...(slide.images?.items ?? [])]) image.delete();
  for (const table of [...(slide.tables?.items ?? [])]) table.delete();
  for (const chart of [...(slide.charts?.items ?? [])]) chart.delete();
  slide.background.fill = WHITE;
  addTitle(slide, number, title, section);
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
  if (!new Set(["revise", "new"]).has(classification)) throw new Error(`Unknown classification ${classification}`);
  if (!sourceRefs.length) throw new Error(`Slide ${number} has no sourceRefs`);
  for (const code of sourceRefs) if (!SOURCE_CATALOG[code]) throw new Error(`Unknown sourceRef ${code} on slide ${number}`);
  if (classification === "new" && sourceSlides.length) throw new Error(`New slide ${number} cannot map source slides`);
  if (classification === "revise" && !sourceSlides.length) throw new Error(`Revised slide ${number} lacks source slide mapping`);
  const mapping = classification === "new" ? `N${number}` : `R${number}`;
  slide.speakerNotes.textFrame.setText(
    `KMB689 Wk11 | slide: ${number} | mapping: ${mapping} | class: ${classification} | sourceSlides: ${sourceSlides.join(",") || "none"} | sourceRefs: ${sourceRefs.join(",")} | reveal: ${reveal} | placeholder: ${placeholder}`,
  );
  sourceManifest.push({ number, mapping, classification, sourceSlides, requiredSourceSnippets, sourceRefs, reveal, placeholder });
  outputs.push(slide);
}

// 1블록 · 35장 / 75분
{
  const s = fresh(1, "분류 결과를 읽고 검증한다", "KMB689 · SEMINAR 11");
  addQuote(s, "cover", "Classification", "오즈비 · 기저율 · 목표 누출 · 비용 비대칭\nKMB689: Big Data for Business Applications", { fontSize: 43, detailSize: 23, detailColor: RED });
  register(s, 1, "revise", ["KMB78", "DESIGN", "S_B1"], [2], ["KMB689", "Classification"]);
}
{
  const s = fresh(2, "오늘의 두 블록", "1.1 · OVERVIEW");
  addTable(s, "route", [["1블록 · 75분", "2블록 · 약 70분"], ["분류·로지스틱 출력 읽기\n오즈비와 성과지표\n세 함정의 판정 도구", "AirbnbSuccessSignals 사례\nAI 분석 검증\n학생 발견과 결정"]], { left: 80, top: 180, width: 800, height: 320 }, [400, 400], { fontSize: 22, headerSize: 20 });
  addText(s, "slack", "자료에 지정되지 않은 약 5분은 운영 여유로 남긴다.", { left: 160, top: 540, width: 640, height: 42 }, { fontSize: 18, color: MUTED, alignment: "center", verticalAlignment: "middle" });
  register(s, 2, "new", ["DESIGN", "S_B1", "S_CASE", "I_SCRIPT", "I_DISC"]);
}
{
  const s = fresh(3, "감독 신조 recap", "1.1 · SUPERVISION CREED");
  addQuote(s, "creed", "기준을 세운다 → AI에게 시킨다 → 검증한다 → 결정한다.", "분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.", { fontSize: 34, color: RED, detailSize: 23, detailColor: BLUE });
  register(s, 3, "new", ["W1", "S_B1"], [], [], "W1-X canonical exposure");
}
{
  const s = fresh(4, "수업 목표", "1.1 · OBJECTIVES");
  addBullets(s, "objectives", ["분류·로지스틱 회귀 출력을 오즈비·유의성·효과 크기로 읽는다.", "정확도·정밀도·재현율을 기저율과 견줘 읽는다.", "결과로 만들어진 변수, 즉 목표 누출을 알아본다.", "예측 인자와 당길 수 있는 레버를 구분해 결정한다."], { left: 100, top: 155, width: 760, height: 390 }, { fontSize: 24, spaceAfterPoints: 14 });
  register(s, 4, "new", ["S_B1", "DESIGN"]);
}
{
  const s = fresh(5, "분류는 무엇을 예측하는가", "1.2 · CLASSIFICATION");
  addQuote(s, "definition", "분류는 결과/목표변수의 클래스를 예측한다", "속성·변수를 사용해 관측치를 미리 정의한 범주에 배정한다.", { fontSize: 35, detailSize: 23 });
  register(s, 5, "revise", ["KMB78", "S_B1"], [3], ["Classification", "attributes/variables", "class", "outcome/target"]);
}
{
  const s = fresh(6, "예/아니오 결과와 MBA 의사결정", "1.2 · BINARY OUTCOME");
  addTable(s, "binary", [["질문", "이진 결과의 예"], ["고객이 떠날까?", "이탈 / 유지"], ["대출이 부실해질까?", "부실 / 정상"], ["신청을 승인할까?", "승인 / 보류"]], { left: 90, top: 155, width: 780, height: 380 }, [360, 420], { fontSize: 22, headerSize: 20 });
  register(s, 6, "new", ["S_B1", "DESIGN"]);
}
{
  const s = fresh(7, "구축 → 평가 → 적용", "1.2 · MODEL WORKFLOW");
  addTable(s, "workflow", [["모델 구축", "모델 평가", "모델 적용"], ["분석가·AI가 학습", "관리자가 성과·누출 검증", "정책·행동 여부 결정"]], { left: 70, top: 205, width: 820, height: 230 }, [273, 274, 273], { fontSize: 21, headerSize: 20 });
  addText(s, "role", "학생의 자리는 평가와 적용 판단이다. 모델을 직접 돌리지 않는다.", { left: 130, top: 505, width: 700, height: 56 }, { fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 7, "revise", ["KMB78", "S_B1"], [4], ["Model Construction", "Model Evaluation", "Model Use"]);
}
{
  const s = fresh(8, "훈련 데이터와 테스트 데이터", "1.2 · PARTITION");
  addTable(s, "partition", [["Training Data", "Test Data"], ["모델이 규칙을 학습하는 데이터", "학습에 쓰지 않은 사례로 성과를 확인하는 데이터"]], { left: 80, top: 205, width: 800, height: 245 }, [400, 400], { fontSize: 22, headerSize: 21 });
  register(s, 8, "revise", ["KMB78", "S_B1"], [6], ["Training Data", "Test Data"]);
}
{
  const s = fresh(9, "오늘은 로지스틱 출력 읽기", "1.2 · TECHNIQUE");
  addQuote(s, "logistic", "Logistic Regression", "분류 기법 가운데 로지스틱 회귀의 결과를 읽는다. 구축 알고리즘은 범위 밖이다.", { fontSize: 42, color: RED, detailSize: 23 });
  register(s, 9, "revise", ["KMB78", "S_B1"], [7], ["Classification Techniques", "Logistic Regression"]);
}
{
  const s = fresh(10, "Wk8과 Wk11의 경계", "1.2 · REGRESSION VS CLASSIFICATION");
  addTable(s, "boundary", [["Wk8 · 회귀", "Wk11 · 분류"], ["연속값을 설명·예측", "예/아니오 결과의 확률을 다룸"], ["계수와 R² 읽기", "오즈비와 분류 성과지표 읽기"]], { left: 75, top: 165, width: 810, height: 350 }, [405, 405], { fontSize: 22, headerSize: 20 });
  register(s, 10, "new", ["S_B1"]);
}
{
  const s = fresh(11, "로지스틱 출력에서 먼저 읽을 것", "1.2 · OUTPUT FIELDS");
  addTable(s, "fields", [["Predictor", "Direction", "Significance", "Odds ratio"], ["무슨 변수인가", "+ / −", "별표·p", "몇 배인가"]], { left: 55, top: 220, width: 850, height: 230 }, [220, 190, 220, 220], { fontSize: 21, headerSize: 19 });
  register(s, 11, "new", ["S_B1"]);
}
{
  const s = fresh(12, "계수에서 오즈비로", "1.2 · ODDS RATIO");
  addQuote(s, "or", "로지스틱의 계수는 그대로 읽지 않고 오즈비로 바꿔 읽는다", "오즈비는 결과 오즈가 ‘몇 배’가 되는지를 말한다.", { fontSize: 31, detailSize: 24, detailColor: RED });
  register(s, 12, "new", ["S_B1"]);
}
{
  const s = fresh(13, "오즈비의 방향", "1.2 · DIRECTION");
  addTable(s, "or-dir", [["Odds ratio > 1", "Odds ratio = 1", "Odds ratio < 1"], ["결과 오즈를 높임", "무관", "결과 오즈를 낮춤"]], { left: 60, top: 210, width: 840, height: 240 }, [280, 280, 280], { fontSize: 22, headerSize: 20 });
  register(s, 13, "new", ["S_B1"]);
}
{
  const s = fresh(14, "오즈와 확률은 다르다", "1.2 · ODDS ≠ PROBABILITY");
  addQuote(s, "not-prob", "오즈비 11 ≠ 성공 확률 11배", "‘몇 배’라는 말만 보지 말고 무엇의 배수인지 확인한다.", { fontSize: 40, color: RED, detailSize: 24 });
  register(s, 14, "new", ["S_B1"]);
}
{
  const s = fresh(15, "변수의 단위와 구간", "1.2 · SCALE");
  addQuote(s, "interval", "이 오즈비는 어느 단위·어느 구간의 변화인가", "한 단위인가 · 0→1 전 구간인가 · 현실적인 변화량인가", { fontSize: 33, detailSize: 24, detailColor: RED });
  register(s, 15, "new", ["S_B1"]);
}
{
  const s = fresh(16, "유의성과 효과 크기", "1.2 · SIGNIFICANCE");
  addTable(s, "sig", [["유의성", "효과 크기"], ["우연으로 보기 어려운가", "의사결정에 충분히 큰가"], ["별표·p", "오즈비와 변수 구간"]], { left: 85, top: 175, width: 790, height: 340 }, [395, 395], { fontSize: 23, headerSize: 21 });
  register(s, 16, "new", ["S_B1"]);
}
{
  const s = fresh(17, "로지스틱 출력 읽기 · 일반형", "1.2 · PRACTICE FORMAT");
  addTable(s, "generic-output", [["Predictor", "Direction", "Significance", "Odds ratio", "되물을 것"], ["변수 A", "+", "***", "큰 값", "구간은?"], ["변수 B", "−", "*", "1보다 작음", "견고한가?"]], { left: 35, top: 165, width: 890, height: 350 }, [205, 135, 170, 185, 195], { fontSize: 18, headerSize: 17 });
  addText(s, "generic-only", "사례 변수와 정답은 넣지 않는다.", { left: 245, top: 555, width: 470, height: 42 }, { fontSize: 19, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 17, "new", ["S_B1"], [], [], "generic only; no Airbnb answer");
}
{
  const s = fresh(18, "모델 평가로 전환", "1.3 · EVALUATION");
  addQuote(s, "evaluation", "유의한 변수가 있다고 모델이 잘 맞히는 것은 아니다", "모델 평가 지표로 성과를 따로 확인한다.", { fontSize: 34, detailSize: 24, detailColor: RED });
  register(s, 18, "revise", ["KMB78", "S_B1"], [34, 35], ["Model Evaluation Metrics", "Model Evaluation"]);
}
{
  const s = fresh(19, "정확도와 오류율", "1.3 · ACCURACY");
  addTable(s, "accuracy", [["Accuracy", "Error rate"], ["전체 중 맞힌 비율", "전체 중 틀린 비율"], ["맞음 / 전체", "틀림 / 전체"]], { left: 85, top: 175, width: 790, height: 340 }, [395, 395], { fontSize: 23, headerSize: 21 });
  register(s, 19, "revise", ["KMB78", "S_B1"], [37], ["Accuracy", "Error Rate"]);
}
{
  const s = fresh(20, "혼동행렬의 네 칸", "1.3 · CONFUSION MATRIX");
  addTable(s, "confusion", [["", "Predicted +", "Predicted −"], ["Actual +", "TP", "FN"], ["Actual −", "FP", "TN"]], { left: 175, top: 155, width: 610, height: 360 }, [170, 220, 220], { fontSize: 25, headerSize: 20, boldFirstColumn: true });
  register(s, 20, "revise", ["KMB78", "BUSS55", "S_B1"], ["KMB38", "KMB60", "BUSS37", "BUSS38"], ["Actual", "Predicted", "TP", "FN", "FP", "TN"]);
}
{
  const s = fresh(21, "정밀도", "1.3 · PRECISION");
  addQuote(s, "precision", "‘성공’이라 예측한 것 중 실제 성공 비율", "성공이라고 표시한 대상을 믿어도 되는가?", { fontSize: 35, detailSize: 25, detailColor: RED });
  register(s, 21, "new", ["S_B1"]);
}
{
  const s = fresh(22, "재현율", "1.3 · RECALL");
  addQuote(s, "recall", "실제 성공 중 맞게 찾아낸 비율", "실제 성공을 얼마나 놓치지 않았는가? · FN을 함께 본다.", { fontSize: 35, detailSize: 24, detailColor: RED });
  register(s, 22, "revise", ["BUSS55", "S_B1"], ["BUSS42", "BUSS44"], ["TP", "FN", "Sensitivity", "Specificity"]);
}
{
  const s = fresh(23, "기저율과 다수범주 기준선", "1.3 · BASE RATE");
  addTable(s, "base-rate", [["자료", "가장 단순한 예측", "기준 정확도"], ["10,000건 중 양성 10건", "모두 음성으로 예측", "9,990 / 10,000 = 99.9%"]], { left: 65, top: 185, width: 830, height: 260 }, [270, 300, 260], { fontSize: 21, headerSize: 19 });
  addText(s, "base-rule", "모델 성과는 기저율·다수범주 기준선을 넘어야 의미가 있다.", { left: 120, top: 500, width: 720, height: 60 }, { fontSize: 22, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 23, "revise", ["BUSS55", "S_B1"], ["BUSS40"], ["9990", "10", "99.9 %"]);
}
{
  const s = fresh(24, "성과지표부터 요구한다", "1.3 · MANAGER HABIT");
  addQuote(s, "metrics", "Accuracy · Precision · Recall", "AI가 세 지표를 주지 않았다면, 해석과 처방보다 먼저 요구한다.", { fontSize: 40, color: BLUE, detailSize: 23, detailColor: RED });
  register(s, 24, "new", ["S_B1"]);
}
{
  const s = fresh(25, "오류마다 비용이 다르다", "1.3 · ASYMMETRIC COST");
  addQuote(s, "cost", "같은 오류 한 건이라도 의사결정 비용은 다를 수 있다", "정확도만으로는 어떤 오류를 줄여야 하는지 결정할 수 없다.", { fontSize: 32, detailSize: 23, detailColor: RED });
  register(s, 25, "revise", ["KMB78", "S_B1"], [59], ["Making Mistakes More Costlier than Others"]);
}
{
  const s = fresh(26, "비용 행렬", "1.3 · COST MATRIX");
  addTable(s, "cost-matrix", [["", "Predicted +", "Predicted −"], ["Actual +", "TP 비용", "FN 비용"], ["Actual −", "FP 비용", "TN 비용"]], { left: 165, top: 150, width: 630, height: 365 }, [180, 225, 225], { fontSize: 23, headerSize: 19, boldFirstColumn: true });
  register(s, 26, "revise", ["KMB78", "S_B1"], [60], ["Cost Matrix", "TP", "FN", "FP", "TN"]);
}
{
  const s = fresh(27, "오류 비용 자료가 없을 때", "1.3 · DECISION BOUNDARY");
  addQuote(s, "missing-cost", "오류 비용 자료가 없으면 무엇을 확정할 수 없는가", "숫자를 지어내지 않는다. 어떤 오류가 누구에게 얼마나 비싼지 먼저 요구한다.", { fontSize: 32, color: RED, detailSize: 23 });
  register(s, 27, "new", ["KMB78", "S_B1", "DESIGN"], [], [], "question only; decision withheld");
}
{
  const s = fresh(28, "목표변수 정의부터 읽는다", "1.4 · TARGET DEFINITION");
  addQuote(s, "target", "‘성공’은 무엇을 재는가", "매출인가 · 평점인가 · 유지인가 · 승인인가 — 이름 대신 정의를 읽는다.", { fontSize: 40, detailSize: 23, detailColor: RED });
  register(s, 28, "new", ["S_B1"]);
}
{
  const s = fresh(29, "목표 누출과 순환", "1.4 · TARGET LEAKAGE");
  addQuote(s, "leakage", "이 변수는 결과의 원인인가, 결과 때문에 붙은 이름표인가", "결과로 만들어진 라벨은 예측할 수 있어도 당길 레버가 아니다.", { fontSize: 31, detailSize: 23, detailColor: RED });
  register(s, 29, "new", ["S_B1"], [], [], "generic leakage tool; no case answer");
}
{
  const s = fresh(30, "예측 인자와 레버", "1.4 · PREDICTION VS ACTION");
  addTable(s, "predict-lever", [["예측 인자", "당길 수 있는 레버"], ["결과와 함께 움직여 예측에 도움", "관리자가 실제로 바꿀 수 있고 결과가 따라올 근거가 있음"], ["식별에 유용할 수 있음", "처방에는 추가 인과 근거가 필요"]], { left: 65, top: 165, width: 830, height: 360 }, [390, 440], { fontSize: 21, headerSize: 20 });
  register(s, 30, "new", ["S_B1"]);
}
{
  const s = fresh(31, "세 함정의 위계", "1.4 · THREE TRAPS");
  addTable(s, "traps", [["중심", "보조 1", "보조 2"], ["목표 누출\n레버인가 라벨인가", "기저율\n성과가 기준선을 넘나", "비용 비대칭\n어떤 오류가 더 비싼가"]], { left: 55, top: 185, width: 850, height: 300 }, [284, 283, 283], { fontSize: 21, headerSize: 19 });
  register(s, 31, "new", ["S_B1", "KMB78", "DESIGN"]);
}
{
  const s = fresh(32, "분류 검증 5문 ①–③", "1.5 · FIVE QUESTIONS");
  addBullets(s, "q123", ["① 이 변수는 결과의 원인인가, 결과로 만든 라벨인가?", "② 오즈비는 어느 구간·단위의 값이며 확률과 혼동하지 않았나?", "③ 정확도·정밀도·재현율을 줬나 — 기저율을 넘는가?"], { left: 90, top: 170, width: 790, height: 340 }, { fontSize: 25, spaceAfterPoints: 18 });
  register(s, 32, "new", ["S_B1"], [], [], "questions only");
}
{
  const s = fresh(33, "분류 검증 5문 ④–⑤", "1.5 · FIVE QUESTIONS");
  addBullets(s, "q45", ["④ 반직관적 부호는 견고한가, 측정·코딩의 산물인가?", "⑤ 결과는 무엇을 재며 표본은 누구인가?", "추가 질문: 오류 비용 자료가 있는가 — 없으면 무엇을 확정할 수 없는가?"], { left: 90, top: 170, width: 790, height: 330 }, { fontSize: 25, spaceAfterPoints: 18 });
  addText(s, "question-boundary", "질문에서 멈춘다. 사례의 판정은 2블록에서 학생이 발견한다.", { left: 130, top: 535, width: 700, height: 52 }, { fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 33, "new", ["S_B1", "KMB78", "DESIGN"], [], [], "questions only");
}
{
  const s = fresh(34, "사례 전 준비 점검", "1.5 · READY CHECK");
  addBullets(s, "ready", ["결과/목표변수의 정의를 읽는다.", "오즈비의 단위·구간과 확률의 차이를 확인한다.", "성과지표를 기저율과 견준다.", "예측 인자와 레버를 가르고 오류 비용 자료를 요구한다."], { left: 100, top: 165, width: 760, height: 355 }, { fontSize: 25, spaceAfterPoints: 15 });
  register(s, 34, "new", ["S_B1"]);
}
{
  const s = fresh(35, "이 ‘레버’를 믿어도 되는가", "1.5 · BRIDGE TO CASE");
  addQuote(s, "bridge", "분류 검증 5문으로 AI의 자신 있는 처방을 검증한다", "답은 2블록에서 학생이 자료를 대조하며 찾는다.", { fontSize: 34, color: BLUE, detailSize: 24, detailColor: RED });
  register(s, 35, "new", ["S_B1", "S_CASE", "DESIGN"], [], [], "case transition; no answer");
}

// 2블록 · 8장 / 약 70분
{
  const s = fresh(36, "AirbnbSuccessSignals 사례", "2.1 · CASE · 15 MIN");
  addQuote(s, "case", "가장 강력해 보이는 신호가 가장 의심해야 할 신호였다", "플랫폼 운영·분석 매니저로서 AI의 분석을 호스트 가이드와 검색 노출 정책에 반영할지 결정한다.", { fontSize: 31, color: RED, detailSize: 22 });
  addText(s, "distribution", "Case Handout 배포", { left: 330, top: 570, width: 300, height: 42 }, { fontSize: 18, bold: true, color: BLUE, alignment: "center", verticalAlignment: "middle" });
  register(s, 36, "new", ["S_CASE", "DESIGN"], [], [], "surface lure; case handout distributed");
}
{
  const s = fresh(37, "사례의 데이터와 결과 정의", "2.1 · CASE FACTS");
  addTable(s, "facts", [["표본", "시점", "성공의 정의", "성공 비율"], ["맨해튼 숙소 1,673곳", "2018년 중반", "종합 리뷰 평점 5.0", "45.4%"]], { left: 35, top: 195, width: 890, height: 255 }, [245, 190, 275, 180], { fontSize: 20, headerSize: 18 });
  addText(s, "facts-note", "공개 리스팅 · 상관/연관이지 인과 아님 · ‘성공’은 매출이 아님", { left: 125, top: 515, width: 710, height: 52 }, { fontSize: 20, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 37, "new", ["S_CASE"], [], [], "raw case facts; derived majority answer withheld");
}
{
  const s = fresh(38, "AI의 ‘성공 레버’ 주장", "2.1 · SURFACE LURE");
  addTable(s, "ai-claims", [["AI가 제안한 지침", "표면 주장"], ["모든 호스트를 슈퍼호스트로", "성공 오즈 약 11배"], ["편의시설을 조금이라도 늘리기", "성공 오즈 11배"], ["환불을 유연하게", "엄격 환불은 불리"], ["천천히 응답하기", "초고속 응답은 불리"]], { left: 55, top: 130, width: 850, height: 440 }, [425, 425], { fontSize: 20, headerSize: 18 });
  addText(s, "no-judgment", "아직 채택하거나 반박하지 않는다.", { left: 275, top: 590, width: 410, height: 38 }, { fontSize: 18, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 38, "new", ["S_CASE", "S_AI", "I_SCRIPT"], [], [], "AI claims only; no answer");
}
register(fresh(39, "오즈비 도판 · 학생판/교원판", "2.1 · FIGURE PLACEHOLDER"), 39, "new", ["S_AI", "I_AI"], [], [], "figD absent; title and position only", true);
{
  const s = fresh(40, "질문에서 멈춘다", "2.2 · INSTRUCTOR DEMO · ABOUT 20 MIN");
  addTable(s, "stop", [["검증 질문", "강사가 묻고 멈추는 지점"], ["레버인가 라벨인가?", "평점이 높아서 배지가 붙었나, 배지가 붙어서 평점이 올랐나?"], ["11배는 무엇의 배수인가?", "오즈인가 확률인가? 어느 구간의 값인가?"], ["성과는 기준선을 넘는가?", "45.4%일 때 다수범주 기준선은 얼마인가?"]], { left: 45, top: 135, width: 870, height: 410 }, [255, 615], { fontSize: 20, headerSize: 18 });
  addText(s, "stop-rule", "여기서 멈춘다. 정답·계산 결과·행동 판정을 말하지 않는다.", { left: 125, top: 570, width: 710, height: 48 }, { fontSize: 20, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 40, "new", ["I_SCRIPT", "S_AI", "S_CASE"], [], [], "questions and stop; script answer lines withheld");
}
{
  const s = fresh(41, "학생 발견 ① · 레버인가 이름표인가", "2.3 · GUIDED VERIFY · ABOUT 20 MIN");
  addBullets(s, "leakage-questions", ["Student AI Exhibit의 배지 자격 사실 박스를 읽는다.", "높은 평점과 배지 부여의 방향을 표시한다.", "예측 인자인지 당길 수 있는 레버인지 판정한다.", "‘모두 전환’ 지침을 실행/보류하고 이유를 적는다."], { left: 95, top: 155, width: 770, height: 360 }, { fontSize: 24, spaceAfterPoints: 15 });
  addText(s, "distribution", "Student AI Exhibit + Verification Worksheet 배포", { left: 200, top: 555, width: 560, height: 46 }, { fontSize: 19, bold: true, color: BLUE, alignment: "center", verticalAlignment: "middle" });
  register(s, 41, "new", ["S_AI", "S_WS", "I_SCRIPT"], [], [], "student discovery; no answer on screen");
}
{
  const s = fresh(42, "학생 발견 ② · 기준선과 오류 비용", "2.3 · GUIDED VERIFY");
  addTable(s, "student-tasks", [["기저율", "오류 비용"], ["성공 45.4%에서 다수범주 예측의 정확도를 직접 계산한다.", "어떤 오류가 누구에게 더 비싼지 자료가 있는지 찾는다."], ["모델 지표가 기준선을 넘는지 판정할 수 있는가?", "임계값·정책을 확정할 수 있는가?"]], { left: 60, top: 155, width: 840, height: 370 }, [420, 420], { fontSize: 21, headerSize: 20 });
  addText(s, "screen-boundary", "화면에는 계산 답과 최종 판정을 띄우지 않는다.", { left: 185, top: 560, width: 590, height: 44 }, { fontSize: 19, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 42, "new", ["S_WS", "KMB78", "I_SCRIPT"], [], [], "student calculation; answers withheld");
}
{
  const s = fresh(43, "판정 회수와 정책 결정", "2.4 · DEBRIEF · ABOUT 15 MIN");
  addTable(s, "debrief", [["검증", "학생 발견 뒤 첫 회수"], ["목표 누출", "슈퍼호스트는 높은 평점 등에 따라 붙은 결과 라벨이다. 예측에는 유용할 수 있으나 당길 레버는 아니다."], ["오즈비", "편의시설의 11배는 0→1 전 구간의 오즈비이며 확률 11배가 아니다."], ["기저율", "성공 45.4%이면 모두 실패로 예측해도 54.6%(약 55%)다. 성과지표가 없어 기준선 초과 여부를 모른다."], ["비용", "오류 비용 자료가 없으므로 임계값·정책을 확정할 수 없다."]], { left: 35, top: 115, width: 890, height: 485 }, [200, 690], { fontSize: 17.5, headerSize: 17 });
  addText(s, "close", "예측하는 변수가 곧 당길 레버는 아니다.", { left: 190, top: 610, width: 580, height: 40 }, { fontSize: 20, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" });
  register(s, 43, "new", ["I_AI", "I_DISC", "S_WS", "S_CASE"], [], [], "first answer reveal after student discovery");
}

if (outputs.length !== 43) throw new Error(`Authored ${outputs.length} slides, expected 43`);
const classification = sourceManifest.reduce((counts, slide) => {
  counts[slide.classification] += 1;
  return counts;
}, { revise: 0, new: 0 });
if (classification.revise !== 12 || classification.new !== 31) throw new Error(`Classification mismatch ${JSON.stringify(classification)}`);

for (const slide of originals) slide.delete();
for (let index = 0; index < outputs.length; index++) outputs[index].moveTo(index);
if (presentation.slides.count !== 43) throw new Error(`Final model has ${presentation.slides.count} slides`);

const candidatePath = path.join(buildDir, "candidate_R1.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);
const nativeTableOwnerSlides = [2, 6, 7, 8, 10, 11, 13, 16, 17, 19, 20, 23, 26, 30, 31, 37, 38, 40, 42, 43];
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
  receiptPath: path.join(buildDir, "KMB689_Wk11_Classification_R1.validation.json"),
});

await fs.writeFile(manifestPath, `${JSON.stringify({
  deck: path.relative(workspaceDir, FINAL_PPTX),
  primarySourceDeck: sourcePath,
  secondarySeedDeck: bussSeedPath,
  secondarySeedSlides: [37, 38, 40, 42, 44],
  classification,
  figurePlaceholders: [39],
  g5Status: "incomplete_excluded_figD_absent",
  sourceCatalog: SOURCE_CATALOG,
  slides: sourceManifest,
}, null, 2)}\n`, "utf8");

console.log(JSON.stringify({ finalPath: FINAL_PPTX, manifestPath, slideCount: presentation.slides.count, classification, result }, null, 2));
