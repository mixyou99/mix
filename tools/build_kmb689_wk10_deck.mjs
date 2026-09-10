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
const sourcePath = "/Users/gunwoonglee/Downloads/Teaching_2025/Fall/BUSS256_BigData/Seminar 10-11 Clustering/Seminars 10-11_Clustering_Lecture_Inclass2_25F.pptx";
const SKILL_DIR = "/Users/gunwoonglee/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations";
const RUNTIME_PYTHON = "/Users/gunwoonglee/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const buildDir = path.join(workspaceDir, "work/wk10_pptx_build");
const outputDir = path.join(workspaceDir, "teaching/KMB689/02_working/Wk10");
const FINAL_PPTX = path.join(outputDir, "KMB689_Wk10_Block1_Clustering_R3.pptx");

const BLUE = "#003478";
const RED = "#C60C30";
const GOLD = "#C49000";
const INK = "#262626";
const MUTED = "#5B6573";
const LIGHT_BLUE = "#EAF1F8";
const LIGHT_RED = "#FBECEF";
const LIGHT_GOLD = "#FAF4E1";
const KOR = "Apple SD Gothic Neo";
const LATIN = "Helvetica Neue";

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });
const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
const originals = [...presentation.slides.items];
if (originals.length !== 64) throw new Error(`Source slide count changed: ${originals.length}`);

function shapeByName(slide, name) {
  const hit = slide.shapes.items.find((shape) => shape.name === name);
  if (!hit) throw new Error(`Missing shape ${name} on slide ${slide.slideNumber}`);
  return hit;
}

function addText(slide, name, textValue, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = textValue;
  shape.text.style = {
    typeface: KOR,
    fontSize: 22,
    color: INK,
    autoFit: "shrinkText",
    wrap: "square",
    verticalAlignment: "middle",
    insets: { top: 4, right: 6, bottom: 4, left: 6 },
    ...style,
  };
  return shape;
}

function addBox(slide, name, position, fill, line = BLUE, radius = "rounded-xl") {
  return slide.shapes.add({
    geometry: "roundRect",
    name,
    position,
    fill,
    line: { style: "solid", fill: line, width: 1.4 },
    borderRadius: radius,
  });
}

function addTitle(slide, section, title) {
  addText(slide, "section-label", section, { left: 48, top: 8, width: 250, height: 22 }, {
    typeface: LATIN, fontSize: 12, bold: true, color: RED, verticalAlignment: "middle",
  });
  addText(slide, "slide-title", title, { left: 48, top: 28, width: 864, height: 56 }, {
    typeface: KOR, fontSize: 28, bold: true, color: BLUE, alignment: "center",
  });
}

function addSourceBar(slide, textValue) {
  const bar = addBox(slide, "source-backed-callout", { left: 52, top: 612, width: 856, height: 60 }, LIGHT_BLUE, BLUE);
  bar.text = textValue;
  bar.text.style = {
    typeface: KOR, fontSize: 17, bold: true, color: BLUE, alignment: "center",
    verticalAlignment: "middle", autoFit: "shrinkText", wrap: "square",
    insets: { top: 6, right: 12, bottom: 6, left: 12 },
  };
  return bar;
}

function addBulletList(slide, items, position, options = {}) {
  const paragraphs = items.map((item) => ({
    bulletCharacter: "•",
    marginLeft: 24 * 12700,
    indent: -12 * 12700,
    spaceAfter: (options.spaceAfterPt ?? 10) * 100,
    runs: Array.isArray(item) ? item : [item],
  }));
  return addText(slide, options.name ?? "body-bullets", paragraphs, position, {
    fontSize: options.fontSize ?? 22,
    color: options.color ?? INK,
    lineSpacing: options.lineSpacing ?? 1.08,
    verticalAlignment: options.verticalAlignment ?? "top",
  });
}

function freshSlide(section, title) {
  const slide = originals[60].duplicate();
  for (const shape of [...slide.shapes.items]) shape.delete();
  addTitle(slide, section, title);
  return slide;
}

function note(slide, mapping, source) {
  slide.speakerNotes.textFrame.setText(`KMB689 Wk10 Block 1 | mapping: ${mapping} | source: ${source}`);
}

function smallTag(slide, textValue, position = { left: 700, top: 640, width: 185, height: 28 }) {
  const tag = addBox(slide, "wk10-tag", position, LIGHT_RED, RED);
  tag.text = textValue;
  tag.text.style = {
    typeface: KOR, fontSize: 13, bold: true, color: RED, alignment: "center",
    verticalAlignment: "middle", autoFit: "shrinkText", insets: { top: 2, right: 5, bottom: 2, left: 5 },
  };
}

const outputs = [];

// 1.1 — six slides
{
  const slide = originals[0].duplicate();
  shapeByName(slide, "Title 1").text = "KMB689: Big Data for Business Applications";
  shapeByName(slide, "Rectangle 5").delete();
  shapeByName(slide, "Subtitle 1").delete();
  addText(slide, "cover-seminar", "Seminar 10", { left: 280, top: 315, width: 400, height: 56 }, { typeface: LATIN, fontSize: 26, bold: true, color: RED, alignment: "center" });
  addText(slide, "cover-topic", "Clustering", { left: 280, top: 395, width: 400, height: 60 }, { typeface: LATIN, fontSize: 29, bold: true, color: BLUE, alignment: "center" });
  addText(slide, "cover-instructor", "Instructor: Prof. Gun-woong Lee", { left: 260, top: 520, width: 440, height: 36 }, { typeface: LATIN, fontSize: 18, color: BLUE, alignment: "center" });
  addText(slide, "cover-school", "Korea University Business School", { left: 260, top: 565, width: 440, height: 36 }, { typeface: LATIN, fontSize: 17, color: BLUE, alignment: "center" });
  note(slide, "R1", "BUSS256 source slide 1; KMB689 source slide 1 branding");
  outputs.push(slide);
}
{
  const slide = originals[1].duplicate();
  const body = shapeByName(slide, "Text Placeholder 2");
  body.text = [
    { bulletCharacter: "•", marginLeft: 24 * 12700, indent: -12 * 12700, runs: ["1.1 여는 이야기 — 감독 신조와 오늘의 기준"] },
    { bulletCharacter: "•", marginLeft: 24 * 12700, indent: -12 * 12700, runs: ["1.2 군집분석 직관 — 크기와 프로파일"] },
    { bulletCharacter: "•", marginLeft: 24 * 12700, indent: -12 * 12700, runs: ["1.3 DBSCAN — 밀도·핵심·경계·잡음"] },
    { bulletCharacter: "•", marginLeft: 24 * 12700, indent: -12 * 12700, runs: ["1.4 이 사례가 요구하는 판단"] },
    { bulletCharacter: "•", marginLeft: 24 * 12700, indent: -12 * 12700, runs: ["1.5 관리자의 군집 검증 5문"] },
  ];
  body.text.style = { typeface: KOR, fontSize: 23, color: INK, autoFit: "shrinkText", verticalAlignment: "top" };
  note(slide, "R2", "BUSS256 source slide 2; Wk10 deck plan §4");
  outputs.push(slide);
}
{
  const slide = originals[4].duplicate();
  addSourceBar(slide, [
    [{ run: "Marketing", textStyle: { bold: true, color: RED } }, ":", " Help marketers discover distinct groups in their customer bases, and then use this knowledge to develop targeted marketing programs"],
    [{ run: "Bank/Internet Security", textStyle: { bold: true, color: RED } }, ":", " fraud/spam pattern discovery"],
  ]);
  note(slide, "R5+R6", "BUSS256 source slides 5 and 6; exact source strings retained");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.1 · HOOK", "감독 신조 recap");
  const labels = ["기준을 세운다", "AI에게 시킨다", "검증한다", "결정한다"];
  const colors = [LIGHT_BLUE, LIGHT_RED, LIGHT_GOLD, "#EEF4EB"];
  for (let i = 0; i < labels.length; i++) {
    const left = 60 + i * 220;
    const box = addBox(slide, `creed-${i+1}`, { left, top: 230, width: 180, height: 120 }, colors[i], i === 1 ? RED : BLUE);
    box.text = `${i + 1}\n${labels[i]}`;
    box.text.style = { typeface: KOR, fontSize: 22, bold: true, color: i === 1 ? RED : BLUE, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText" };
    if (i < labels.length - 1) {
      addText(slide, `arrow-${i+1}`, "→", { left: left + 183, top: 265, width: 36, height: 50 }, { typeface: LATIN, fontSize: 32, bold: true, color: GOLD, alignment: "center" });
    }
  }
  addText(slide, "creed-note", "분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.", { left: 120, top: 420, width: 720, height: 58 }, { fontSize: 22, color: MUTED, alignment: "center" });
  note(slide, "N1", "MBA_S10_Block1_LectureNotes_KR.md §1.1");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.1 · STANDARD", "오늘의 기준 두 개");
  const cards = [
    { n: "①", title: "각 군집의 실제 프로파일", body: "어떤 변수가 높은가", fill: LIGHT_BLUE, line: BLUE },
    { n: "②", title: "잡음 비중", body: "얼마나 많은 점이 어느 군집에도 안 들었나", fill: LIGHT_RED, line: RED },
  ];
  cards.forEach((card, i) => {
    const left = 80 + i * 420;
    const box = addBox(slide, `standard-${i+1}`, { left, top: 175, width: 380, height: 270 }, card.fill, card.line);
    box.text = [[{ run: card.n, textStyle: { fontSize: "32pt", bold: true, color: card.line } }], [{ run: card.title, textStyle: { fontSize: "22pt", bold: true, color: card.line } }], [{ run: card.body, textStyle: { fontSize: "17pt", color: INK } }]];
    box.text.style = { typeface: KOR, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", lineSpacing: 1.15 };
  });
  addText(slide, "interpretation-note", "이름은 해석이지 데이터가 아니다.", { left: 170, top: 495, width: 620, height: 56 }, { fontSize: 24, bold: true, color: GOLD, alignment: "center" });
  note(slide, "N2", "MBA_S10_Block1_LectureNotes_KR.md §1.1");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.1 · OBJECTIVES", "오늘의 목표 네 개");
  addBulletList(slide, [
    "군집분석(clustering)이 무엇인지 — 비지도 그룹화 — 안다.",
    "DBSCAN의 핵심점·경계점·잡음점을 읽는다.",
    "한 군집을 크기 + 프로파일로 읽고, 잡음 비중을 확인한다.",
    "AI가 군집을 과잉 명명하거나 잡음을 숨겼는지 잡는다.",
  ], { left: 105, top: 150, width: 750, height: 380 }, { fontSize: 23, spaceAfterPt: 17, lineSpacing: 1.12 });
  note(slide, "N3", "MBA_S10_Block1_LectureNotes_KR.md §1.1");
  outputs.push(slide);
}

// 1.2 — eleven slides
for (const n of [4, 9, 10, 11]) {
  const slide = originals[n - 1].duplicate();
  note(slide, `R${n}`, `BUSS256 source slide ${n}; exact source slide retained`);
  outputs.push(slide);
}
{
  const slide = originals[11].duplicate();
  const box = addBox(slide, "distance-question", { left: 600, top: 155, width: 295, height: 72 }, LIGHT_GOLD, GOLD);
  box.text = [["How to compute the shortest distance between tow dots?"], ["Pythagorean Theorem = "]];
  box.text.style = { typeface: LATIN, fontSize: 17, color: INK, autoFit: "shrinkText", verticalAlignment: "middle", alignment: "center" };
  note(slide, "R12+R13", "BUSS256 source slides 12 and 13; source strings retained verbatim");
  outputs.push(slide);
}
{
  const slide = originals[14].duplicate();
  note(slide, "R15", "BUSS256 source slide 15; source strings retained verbatim");
  outputs.push(slide);
}
{
  const slide = originals[16].duplicate();
  note(slide, "R17+R20", "BUSS256 source slides 17 and 20; source strings retained verbatim");
  outputs.push(slide);
}
for (const n of [18, 19]) {
  const slide = originals[n - 1].duplicate();
  note(slide, `R${n}`, `BUSS256 source slide ${n}; exact source slide retained`);
  outputs.push(slide);
}
{
  const slide = originals[23].duplicate();
  shapeByName(slide, "Title 2").position = { left: 50, top: 14, width: 860, height: 60 };
  note(slide, "R24+R25", "BUSS256 source slides 24 and 25; source strings retained verbatim");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.2 · READ THE RESULT", "군집을 읽는 법 — 크기 + 프로파일");
  const cards = [
    { title: "SIZE", body: "이 군집에 몇 개의 점(고객)이 들었나", fill: LIGHT_BLUE, line: BLUE },
    { title: "PROFILE", body: "표에서 z값이 높은 변수를 찾는다", fill: LIGHT_GOLD, line: GOLD },
    { title: "NAME", body: "프로파일 수치로 방어된 뒤 붙인다", fill: LIGHT_RED, line: RED },
  ];
  cards.forEach((card, i) => {
    const left = 55 + i * 300;
    const box = addBox(slide, `profile-${i+1}`, { left, top: 185, width: 260, height: 250 }, card.fill, card.line);
    box.text = [[{ run: card.title, textStyle: { fontSize: "23pt", bold: true, color: card.line } }], [{ run: card.body, textStyle: { fontSize: "18pt", color: INK } }]];
    box.text.style = { typeface: KOR, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", lineSpacing: 1.14 };
    if (i < 2) addText(slide, `profile-arrow-${i+1}`, "→", { left: left + 263, top: 270, width: 35, height: 48 }, { typeface: LATIN, fontSize: 30, bold: true, color: MUTED, alignment: "center" });
  });
  addText(slide, "profile-rule", "근거 변수를 못 대면 그 이름은 허구다.", { left: 170, top: 500, width: 620, height: 64 }, { fontSize: 24, bold: true, color: RED, alignment: "center" });
  note(slide, "N4", "MBA_S10_Block1_LectureNotes_KR.md §1.2; 신규 — 포크 원본 부재");
  outputs.push(slide);
}

// 1.3 — seven slides
{
  const slide = originals[22].duplicate();
  const db = addBox(slide, "dbscan-algorithm", { left: 520, top: 320, width: 260, height: 65 }, LIGHT_RED, RED);
  db.text = "DBSCAN — density-based";
  db.text.style = { typeface: LATIN, fontSize: 21, bold: true, color: RED, alignment: "center", verticalAlignment: "middle" };
  note(slide, "R23", "BUSS256 source slide 23; DBSCAN added from S10 blueprint §1.3");
  outputs.push(slide);
}
{
  const slide = originals[52].duplicate();
  note(slide, "R53+R56+R60", "BUSS256 source slides 53, 56 and 60; exact source strings retained");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.3 · DBSCAN", "빽빽한 곳을 군집으로 본다");
  addText(slide, "density-definition", "DBSCAN\nDensity-Based Spatial Clustering", { left: 115, top: 175, width: 730, height: 130 }, { typeface: LATIN, fontSize: 30, bold: true, color: BLUE, alignment: "center" });
  addSourceBar(slide, "점들이 빽빽하게 모인 곳을 군집으로 본다.");
  addText(slide, "density-note", "거리만이 아니라 주변의 밀도를 읽는다.", { left: 185, top: 365, width: 590, height: 65 }, { fontSize: 23, color: MUTED, alignment: "center" });
  note(slide, "N5", "MBA_S10_Block1_LectureNotes_KR.md §1.3");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.3 · DBSCAN", "핵심·경계·잡음 개념도");
  slide.shapes.add({ geometry: "ellipse", name: "dense-region", position: { left: 80, top: 135, width: 500, height: 390 }, fill: "#EAF1F8", line: { style: "solid", fill: "#A9C2DB", width: 1.2 } });
  slide.shapes.add({ geometry: "ellipse", name: "epsilon-radius", position: { left: 215, top: 238, width: 175, height: 175 }, fill: "none", line: { style: "dashed", fill: GOLD, width: 2.2 } });
  const points = [
    [165,220],[210,190],[255,220],[305,195],[350,230],[405,210],[455,250],
    [150,300],[205,285],[260,300],[305,275],[360,310],[420,290],[475,325],
    [190,365],[245,355],[300,350],[355,375],[410,360],[455,400],
  ];
  points.forEach(([x,y], i) => {
    const isCore = i === 10;
    const isBorder = i === 0;
    slide.shapes.add({ geometry: "ellipse", name: `cluster-point-${i+1}`, position: { left: x, top: y, width: isCore ? 25 : 18, height: isCore ? 25 : 18 }, fill: isCore ? BLUE : (isBorder ? GOLD : "#7FA6C9"), line: { style: "solid", fill: isCore ? "#FFFFFF" : BLUE, width: isCore ? 2.2 : 0.8 } });
  });
  const noisePts = [[650,190],[740,300],[675,445]];
  noisePts.forEach(([x,y], i) => {
    const p = slide.shapes.add({ geometry: "ellipse", name: `noise-point-${i+1}`, position: { left:x, top:y, width:20, height:20 }, fill: "#D9D9D9", line: { style: "solid", fill: "#777777", width: 1.4 } });
    p.text = "×";
    p.text.style = { typeface: LATIN, fontSize: 16, bold: true, color: "#555555", alignment: "center", verticalAlignment: "middle", insets: { top:0,right:0,bottom:0,left:0 } };
  });
  addText(slide, "epsilon-label", "epsilon", { left: 320, top: 210, width: 90, height: 28 }, { typeface: LATIN, fontSize: 16, bold: true, color: GOLD, alignment: "center" });
  addText(slide, "minpts-label", "minPts", { left: 250, top: 333, width: 100, height: 30 }, { typeface: LATIN, fontSize: 16, bold: true, color: BLUE, alignment: "center" });
  const legend = [
    { y: 505, color: BLUE, text: "핵심(core) — 주변에 이웃이 충분히 많은 점" },
    { y: 550, color: GOLD, text: "경계(border) — 핵심점 근처의 점" },
    { y: 595, color: "#777777", text: "잡음(noise) — 어느 군집에도 안 드는 점" },
  ];
  legend.forEach((item, i) => {
    slide.shapes.add({ geometry: "ellipse", name: `legend-dot-${i+1}`, position: { left: 110, top: item.y + 8, width: 18, height: 18 }, fill: item.color, line: { style: "solid", fill: item.color, width: 1 } });
    addText(slide, `legend-text-${i+1}`, item.text, { left: 140, top: item.y, width: 675, height: 34 }, { fontSize: 18, color: INK, verticalAlignment: "middle" });
  });
  note(slide, "N6", "MBA_S10_Clustering_blueprint.md §1.3; editable native concept diagram");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.3 · DBSCAN", "군집 개수를 미리 정하지 않는다");
  const left = addBox(slide, "kmeans-card", { left: 90, top: 175, width: 350, height: 310 }, LIGHT_RED, RED);
  left.text = [[{ run: "k-means", textStyle: { fontSize: "28pt", bold: true, color: RED } }], [{ run: "K를 먼저 지정", textStyle: { fontSize: "21pt", bold: true } }], ["모든 점을 어떤 군집엔가 배정"]];
  left.text.style = { typeface: KOR, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", color: INK };
  const right = addBox(slide, "dbscan-card", { left: 520, top: 175, width: 350, height: 310 }, LIGHT_BLUE, BLUE);
  right.text = [[{ run: "DBSCAN", textStyle: { fontSize: "28pt", bold: true, color: BLUE } }], [{ run: "밀도에서 군집 수가 자연히 나옴", textStyle: { fontSize: "20pt", bold: true } }], ["어느 군집에도 안 드는 점을 따로 표시"]];
  right.text.style = { typeface: KOR, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", color: INK };
  addText(slide, "contrast", "≠", { left: 455, top: 270, width: 50, height: 60 }, { typeface: LATIN, fontSize: 38, bold: true, color: GOLD, alignment: "center" });
  note(slide, "N7", "MBA_S10_Block1_LectureNotes_KR.md §1.3; BUSS256 source slides 53 and 60 contrast");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.3 · DBSCAN", "파라미터 둘이 결과를 좌우한다");
  const eps = addBox(slide, "epsilon-card", { left: 85, top: 175, width: 370, height: 320 }, LIGHT_GOLD, GOLD);
  eps.text = [[{ run: "epsilon", textStyle: { fontSize: "30pt", bold: true, color: GOLD } }], [{ run: "반경", textStyle: { fontSize: "23pt", bold: true } }], ["얼마나 가까워야 ‘이웃’인가"]];
  eps.text.style = { typeface: KOR, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", color: INK };
  const minpts = addBox(slide, "minpts-card", { left: 505, top: 175, width: 370, height: 320 }, LIGHT_BLUE, BLUE);
  minpts.text = [[{ run: "minPts", textStyle: { fontSize: "30pt", bold: true, color: BLUE } }], [{ run: "최소 이웃 수", textStyle: { fontSize: "23pt", bold: true } }], ["핵심점이 되려면 이웃이 몇 개 필요한가"]];
  minpts.text.style = { typeface: KOR, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", color: INK };
  addSourceBar(slide, "값을 바꾸면 군집 수와 잡음 비중이 달라진다.");
  note(slide, "N8", "MBA_S10_Block1_LectureNotes_KR.md §1.3 and §1.4");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.3 · DBSCAN", "반드시 물어라");
  const box = addBox(slide, "noise-question", { left: 110, top: 175, width: 740, height: 300 }, LIGHT_RED, RED);
  box.text = [[{ run: "얼마나 많은 데이터가", textStyle: { fontSize: "25pt", color: INK } }], [{ run: "잡음(noise)인가?", textStyle: { fontSize: "38pt", bold: true, color: RED } }]];
  box.text.style = { typeface: KOR, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", lineSpacing: 1.1 };
  addText(slide, "noise-meaning", "이 점은 어느 무리에도 안 든다 — 결과가 말하는 중요한 정보다.", { left: 120, top: 510, width: 720, height: 65 }, { fontSize: 21, color: MUTED, alignment: "center" });
  note(slide, "N9", "MBA_S10_Block1_LectureNotes_KR.md §1.3");
  outputs.push(slide);
}

// 1.4 — six slides
{
  const slide = originals[49].duplicate();
  note(slide, "R50+R63", "BUSS256 source slides 50 and 63; exact source strings retained verbatim");
  outputs.push(slide);
}
{
  const slide = originals[61].duplicate();
  note(slide, "R62", "BUSS256 source slide 62; exact source slide retained");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.4 · JUDGMENT", "(가) 잡음 무시 — 1차 함정");
  addText(slide, "lure", "AI: ‘깔끔한 N개 세그먼트입니다.’", { left: 125, top: 160, width: 710, height: 80 }, { fontSize: 28, bold: true, color: RED, alignment: "center" });
  const box = addBox(slide, "manager-question", { left: 120, top: 290, width: 720, height: 170 }, LIGHT_BLUE, BLUE);
  box.text = "관리자: 그래서 전체의 몇 %가\n어느 세그먼트에도 안 들었나?";
  box.text.style = { typeface: KOR, fontSize: 26, bold: true, color: BLUE, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText" };
  addText(slide, "trap-note", "잡음 비중을 놓치면 세분화가 실제보다 깔끔하다고 착각한다.", { left: 125, top: 500, width: 710, height: 65 }, { fontSize: 21, color: MUTED, alignment: "center" });
  note(slide, "N10", "MBA_S10_Block1_LectureNotes_KR.md §1.4(가)");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.4 · JUDGMENT", "(나) 사후 이름 붙이기 검증");
  addText(slide, "name-question", "AI가 붙인 이름이 실제 프로파일을 대표하는가?", { left: 110, top: 145, width: 740, height: 90 }, { fontSize: 29, bold: true, color: BLUE, alignment: "center" });
  const rule = addBox(slide, "naming-rule", { left: 145, top: 290, width: 670, height: 180 }, LIGHT_GOLD, GOLD);
  rule.text = [[{ run: "좋은 이름의 규칙", textStyle: { fontSize: "24pt", bold: true, color: GOLD } }], [{ run: "프로파일 수치로 방어 가능해야 한다", textStyle: { fontSize: "28pt", bold: true, color: INK } }]];
  rule.text.style = { typeface: KOR, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText" };
  addText(slide, "naming-warning", "근거 변수를 못 대면 그 이름은 허구다.", { left: 180, top: 510, width: 600, height: 55 }, { fontSize: 22, bold: true, color: RED, alignment: "center" });
  note(slide, "N11", "MBA_S10_Block1_LectureNotes_KR.md §1.2 and §1.4(나)");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.4 · JUDGMENT", "(나′) 중복 군집을 다른 이름으로");
  const a = addBox(slide, "cluster-a", { left: 110, top: 190, width: 290, height: 230 }, LIGHT_BLUE, BLUE);
  a.text = [[{ run: "군집 A", textStyle: { fontSize: "25pt", bold: true, color: BLUE } }], ["프로파일 X"]];
  a.text.style = { typeface: KOR, fontSize: 21, alignment: "center", verticalAlignment: "middle", color: INK };
  const b = addBox(slide, "cluster-b", { left: 560, top: 190, width: 290, height: 230 }, LIGHT_BLUE, BLUE);
  b.text = [[{ run: "군집 B", textStyle: { fontSize: "25pt", bold: true, color: BLUE } }], ["사실상 같은 프로파일 X"]];
  b.text.style = { typeface: KOR, fontSize: 21, alignment: "center", verticalAlignment: "middle", color: INK };
  addText(slide, "not-equal-names", "다른 이름 ≠ 다른 근거", { left: 350, top: 270, width: 260, height: 70 }, { fontSize: 24, bold: true, color: RED, alignment: "center" });
  addSourceBar(slide, "프로파일이 사실상 같은 두 군집을 다른 세그먼트로 나누지 않았나?");
  note(slide, "N12", "MBA_S10_Block1_LectureNotes_KR.md §1.4(나)");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.4 · JUDGMENT", "균형점 — 문제는 방법이 아니라 해석");
  const strength = addBox(slide, "strength", { left: 105, top: 170, width: 750, height: 150 }, LIGHT_BLUE, BLUE);
  strength.text = [[{ run: "DBSCAN의 강점", textStyle: { fontSize: "25pt", bold: true, color: BLUE } }], ["어느 군집에도 안 드는 점을 잡음으로 정직하게 표시한다"]];
  strength.text.style = { typeface: KOR, fontSize: 21, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", color: INK };
  const risk = addBox(slide, "interpretation-risk", { left: 105, top: 365, width: 750, height: 150 }, LIGHT_RED, RED);
  risk.text = [[{ run: "해석의 문제", textStyle: { fontSize: "25pt", bold: true, color: RED } }], ["AI가 결과를 ‘깔끔한 세분화’로 과장한다"]];
  risk.text.style = { typeface: KOR, fontSize: 21, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText", color: INK };
  addText(slide, "balance-line", "결과를 정직하게 읽어야 한다.", { left: 200, top: 560, width: 560, height: 56 }, { fontSize: 24, bold: true, color: GOLD, alignment: "center" });
  note(slide, "N13", "MBA_S10_Block1_LectureNotes_KR.md §1.4 균형점");
  outputs.push(slide);
}

// 1.5 — five slides
{
  const slide = originals[60].duplicate();
  addText(slide, "validation-subtitle", "다섯 질문으로 결과를 판정한다", { left: 170, top: 405, width: 620, height: 65 }, { fontSize: 24, bold: true, color: RED, alignment: "center" });
  note(slide, "R61", "BUSS256 source slide 61; title retained verbatim");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.5 · CHECKLIST", "관리자의 군집 검증 5문");
  const questions = [
    "① 각 군집의 실제 프로파일은 무엇인가 — 높은 z값은 무엇이며, z≈0만 있으면 어떻게 판정할 것인가?",
    "② 얼마나 많은 점이 잡음(무군집)인가 — AI가 그걸 숨겼나?",
    "③ AI 이름이 프로파일을 대표하는가 — z≈0만인 프로파일이나 중복 군집을 과잉 명명하지 않았나?",
    "④ 파라미터(epsilon·minPts)는 왜 이 값인가 — 바꾸면 달라지나?",
    "⑤ 세분화로 인과·행동을 단정하지 않았나 — 비지도·관찰 결과인가?",
  ];
  questions.forEach((q, i) => {
    const fill = i === 1 ? LIGHT_RED : (i === 0 || i === 2 ? LIGHT_GOLD : LIGHT_BLUE);
    const line = i === 1 ? RED : (i === 0 || i === 2 ? GOLD : BLUE);
    const box = addBox(slide, `question-${i+1}`, { left: 65, top: 100 + i * 103, width: 830, height: 86 }, fill, line);
    box.text = q;
    box.text.style = { typeface: KOR, fontSize: 18, bold: i < 3, color: INK, verticalAlignment: "middle", autoFit: "shrinkText", insets: { top: 5, right: 12, bottom: 5, left: 12 } };
  });
  note(slide, "N14", "MBA_S10_Block1_LectureNotes_KR.md §1.5; approved two-stage profile-reading questions");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.5 · READING CAUTION", "산점도는 36차원의 2D 투영");
  const dim36 = addBox(slide, "dimension-36", { left: 95, top: 205, width: 270, height: 190 }, LIGHT_BLUE, BLUE);
  dim36.text = [[{ run: "36개 관심사", textStyle: { fontSize: "25pt", bold: true, color: BLUE } }], ["군집 결과"]];
  dim36.text.style = { typeface: KOR, fontSize: 21, alignment: "center", verticalAlignment: "middle", color: INK };
  addText(slide, "pca-arrow", "PCA →", { left: 390, top: 260, width: 170, height: 70 }, { typeface: LATIN, fontSize: 30, bold: true, color: GOLD, alignment: "center" });
  const dim2 = addBox(slide, "dimension-2", { left: 590, top: 205, width: 270, height: 190 }, LIGHT_RED, RED);
  dim2.text = [[{ run: "2차원 산점도", textStyle: { fontSize: "25pt", bold: true, color: RED } }], ["큰 그림"]];
  dim2.text.style = { typeface: KOR, fontSize: 21, alignment: "center", verticalAlignment: "middle", color: INK };
  addSourceBar(slide, "2D에서 점들이 겹쳐 보여도 ‘같은 군집’이라는 뜻이 아니다 — 진짜 판정은 프로파일 표로 한다.");
  note(slide, "N15", "MBA_S10_Block1_LectureNotes_KR.md §1.5; MBA_S10_Clustering_blueprint.md §5");
  outputs.push(slide);
}
{
  const slide = freshSlide("1.5 · BRIDGE", "이제 실제 사례로 간다");
  addText(slide, "bridge-question", "AI가 자신 있게 내놓은\n‘5개 세그먼트’가", { left: 130, top: 160, width: 700, height: 150 }, { fontSize: 32, bold: true, color: BLUE, alignment: "center" });
  const box = addBox(slide, "bridge-verdict", { left: 155, top: 360, width: 650, height: 140 }, LIGHT_RED, RED);
  box.text = "관리자의 군집 검증 5문을\n통과하는지 직접 검증하자.";
  box.text.style = { typeface: KOR, fontSize: 28, bold: true, color: RED, alignment: "center", verticalAlignment: "middle", autoFit: "shrinkText" };
  note(slide, "N16", "MBA_S10_Block1_LectureNotes_KR.md §1.5 closing bridge");
  outputs.push(slide);
}
{
  const slide = originals[63].duplicate();
  note(slide, "R64", "BUSS256 source slide 64; source strings retained verbatim; S10 lecture notes balance point");
  outputs.push(slide);
}

if (outputs.length !== 35) throw new Error(`Authored ${outputs.length} slides, expected 35`);
for (const slide of originals) slide.delete();
for (let i = 0; i < outputs.length; i++) outputs[i].moveTo(i);
if (presentation.slides.count !== 35) throw new Error(`Final model has ${presentation.slides.count} slides`);

const { finalizePresentation } = await import(pathToFileURL(path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs")).href);
const candidatePath = path.join(buildDir, "candidate_R3.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);
const result = await finalizePresentation({
  explicitTotalSlideCount: 35,
  requiredNativeTableOwnerSlides: [],
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
  ],
  fontPolicy: {
    basis: "design",
    families: ["Apple SD Gothic Neo", "Calibri", "Helvetica Neue", "Helvetica Neue Light", "Times New Roman"],
    scriptFonts: { ea: KOR },
  },
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, "KMB689_Wk10_Block1_Clustering_R3.validation.json"),
});

console.log(JSON.stringify({ finalPath: FINAL_PPTX, slideCount: presentation.slides.count, result }, null, 2));
