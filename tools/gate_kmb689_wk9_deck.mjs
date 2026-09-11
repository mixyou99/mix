import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { execFileSync } from "node:child_process";

const workspace = "/Users/gunwoonglee/Documents/ChatGPT/Lecture Materials";
const deck = path.join(workspace, "teaching/KMB689/02_working/Wk9/KMB689_Wk9_Visualization_MeasurementValidity_R1.pptx");
const source119 = "/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Seminar 9_데이터 시각화/Seminar 9_Lecture_Data Visualization_InClass.pptx";
const source107 = "/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Seminar 9_데이터 시각화/Seminar 9_Lecture_Data Visualization.pptx";
const manifestPath = path.join(workspace, "docs/rounds/KMB689_Wk9_source_manifest_R1.json");
const planPath = path.join(workspace, "docs/rounds/KMB689_Wk9_deck_plan.md");
const conventionsPath = path.join(workspace, "docs/rounds/DECK_GATE_CONVENTIONS.md");
const receiptPath = path.join(workspace, ".codex-finalizer/wk9-r1/KMB689_Wk9_Visualization_MeasurementValidity_R1.validation.json");
const renderDir = "/tmp/kmb689_wk9_r1_render_final";
const visualAuditPath = path.join(workspace, "docs/rounds/KMB689_Wk9_visual_audit_R1.json");

function check(condition, message) {
  if (!condition) throw new Error(message);
}

function normalize(value) {
  return value
    .replaceAll("\u00A0", " ")
    .replace(/[\r\n\t]/g, " ")
    .replace(/ +/g, " ")
    .trim();
}

function decodeXml(value) {
  return value
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&");
}

function zipEntries(file) {
  return execFileSync("unzip", ["-Z1", file], { encoding: "utf8" }).split("\n").filter(Boolean);
}

function part(file, name) {
  return execFileSync("unzip", ["-p", file, name], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

function xmlText(xml) {
  return normalize([...xml.matchAll(/<a:t(?: [^>]*)?>([\s\S]*?)<\/a:t>/g)].map((match) => decodeXml(match[1])).join(""));
}

function slideText(file, number) {
  return xmlText(part(file, `ppt/slides/slide${number}.xml`));
}

function slideXml(file, number) {
  return part(file, `ppt/slides/slide${number}.xml`);
}

function noteText(file, number, entries) {
  const name = `ppt/notesSlides/notesSlide${number}.xml`;
  return entries.includes(name) ? xmlText(part(file, name)) : "";
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function sourcePath(value) {
  return path.isAbsolute(value) ? value : path.join(workspace, value);
}

function stripPageNumber(text, number) {
  const token = String(number).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`^${token}`), "").replace(new RegExp(`${token}$`), "");
}

function validateG2(slides, manifest, sourceSlides) {
  const failures = [];
  for (const item of manifest.slides.filter((slide) => slide.classification !== "new")) {
    const output = slides[item.number - 1];
    const sourceCorpus = item.sourceSlides.map((number) => sourceSlides[number]).join(" ");
    for (const rawSnippet of item.requiredSourceSnippets) {
      const snippet = normalize(rawSnippet);
      if (!sourceCorpus.includes(snippet)) failures.push(`R${item.number} snippet absent from source: ${snippet}`);
      if (!output.includes(snippet)) failures.push(`R${item.number} retained snippet absent from output: ${snippet}`);
    }
    if (item.classification === "reposition") {
      const primary = item.sourceSlides[0];
      const sourceCore = stripPageNumber(sourceSlides[primary], primary);
      const outputCore = stripPageNumber(output, item.number);
      if (!outputCore.includes(sourceCore)) failures.push(`R${item.number} no longer contains full source slide ${primary} normalized text`);
    }
  }
  return failures;
}

function validateG3(slides, notes, manifest) {
  const failures = [];
  const known = new Set(Object.keys(manifest.sourceCatalog));
  for (const [code, value] of Object.entries(manifest.sourceCatalog)) {
    if (!fs.existsSync(sourcePath(value))) failures.push(`missing source ${code}: ${value}`);
  }
  for (let index = 0; index < manifest.slides.length; index++) {
    const item = manifest.slides[index];
    const number = index + 1;
    if (item.number !== number) failures.push(`manifest order mismatch at ${number}`);
    if (!item.sourceRefs.length) failures.push(`slide ${number} has no sourceRefs`);
    for (const code of item.sourceRefs) if (!known.has(code)) failures.push(`slide ${number} has unknown source ${code}`);
    if (!notes[index].includes(`mapping: ${item.mapping}`)) failures.push(`slide ${number} mapping missing from notes`);
    if (!notes[index].includes(`sourceRefs: ${item.sourceRefs.join(",")}`)) failures.push(`slide ${number} sourceRefs mismatch in notes`);
    if (item.classification === "new" && item.sourceSlides.length) failures.push(`N${number} unexpectedly maps source slides`);
    if (item.classification !== "new" && !item.sourceSlides.length) failures.push(`R${number} lacks source mapping`);
    if (!slides[index]) failures.push(`slide ${number} has no normalized text`);
  }
  return failures;
}

function validateG4(slides, notes) {
  const failures = [];
  const beforeDebrief = slides.slice(0, 42).join("\n");
  const beforeStudentDiscovery = slides.slice(0, 40).join("\n");
  const allNotes = notes.join("\n");
  for (const token of ["약 +9%", "접속을 바꾸지 않은 사건은 약 +9%", "0–100 지수는 사람 수가 아니다.", "우회수단 검색 주의와 영효과 사건을 대시보드에 함께 넣는다."]) {
    if (beforeDebrief.includes(token)) failures.push(`answer leaked before slide 43: ${token}`);
  }
  if (!slides[35].includes("약 70% 하락") || !slides[35].includes("Case Handout은 학생 발견 구간 2.3에서 배포한다.")) failures.push("slide 36 surface lure or distribution boundary missing");
  if (!slides[38].includes("약 70% 줄이는") || !slides[38].includes("아직 채택하거나 반박하지 않는다.")) failures.push("slide 39 AI claim is not framed as a verification target");
  if (!slides[39].includes("여기서 멈춘다.")) failures.push("slide 40 instructor stop point missing");
  if (!slides[40].includes("이 구간에서 배포한다.") || !slides[40].includes("화면에는 정답을 띄우지 않는다.")) failures.push("slide 41 discovery/distribution instruction missing");
  if (beforeStudentDiscovery.includes("학생 발견 뒤 회수")) failures.push("debrief label leaked before student discovery");
  if (!slides[42].includes("약 +9%") || !slides[42].includes("0–100 지수는 사람 수가 아니다.")) failures.push("first answer reveal missing from slide 43");
  if (allNotes.includes("접속을 바꾸지 않은 사건은 약 +9%") || allNotes.includes("0–100 지수는 사람 수가 아니다.")) failures.push("answer leaked through speaker notes");
  return failures;
}

const placeholderExpected = {
  37: "2.1 · FIGURE PLACEHOLDER그림 1 · 법 시행 전후 검색 관심도37",
  38: "2.1 · FIGURE PLACEHOLDER그림 2–3 · 관할 비교와 검색 관심도 추이38",
  42: "2.3 · FIGURE PLACEHOLDERExhibit V-1·V-2 · 대시보드가 보여 주지 않은 그림42",
};

function validateG5Placeholders(slides, manifest, xmls) {
  const failures = [];
  const declared = manifest.slides.filter((item) => item.placeholder).map((item) => item.number);
  if (JSON.stringify(declared) !== JSON.stringify([37, 38, 42])) failures.push(`placeholder list mismatch: ${declared.join(",")}`);
  for (const number of [37, 38, 42]) {
    if (slides[number - 1] !== normalize(placeholderExpected[number])) failures.push(`slide ${number} has content beyond title/position/page`);
    if (/<a:blip\b|<p:graphicFrame\b/.test(xmls[number - 1])) failures.push(`slide ${number} contains a figure, table, chart, or diagram before P2`);
  }
  return failures;
}

function validateW1X(slides, notes) {
  const failures = [];
  const all = `${slides.join("\n")}\n${notes.join("\n")}`;
  const creed = "기준을 세운다 → AI에게 시킨다 → 검증한다 → 결정한다.";
  const footer = "분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.";
  const count = (value, token) => value.split(token).length - 1;
  if (count(all, creed) !== 1) failures.push(`canonical creed count ${count(all, creed)} != 1`);
  if (count(all, footer) !== 1) failures.push(`canonical footer count ${count(all, footer)} != 1`);
  if (!slides[2].includes(creed) || !slides[2].includes(footer)) failures.push("canonical creed and footer are not both on slide 3");
  const withoutCanonical = all.replaceAll(creed, "");
  for (const variant of [
    "기준을 세운다 → 검증한다 → 결정한다",
    "AI에게 시킨다 → 검증한다 → 결정한다",
    "기준을 세운다 → AI에게 시킨다 → 결정한다",
    "기준을 세운다→AI에게 시킨다→검증한다→결정한다",
  ]) if (withoutCanonical.includes(variant)) failures.push(`partial or variant creed found: ${variant}`);
  return failures;
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const entries = zipEntries(deck);
const slideEntries = entries.filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name));
const slides = Array.from({ length: 43 }, (_, index) => slideText(deck, index + 1));
const xmls = Array.from({ length: 43 }, (_, index) => slideXml(deck, index + 1));
const notes = Array.from({ length: 43 }, (_, index) => noteText(deck, index + 1, entries));
const sourceSlides = Object.fromEntries(Array.from({ length: 119 }, (_, index) => [index + 1, slideText(source119, index + 1)]));
const findings = [];

// G1 · structure and the retained 95-slide deletion ledger
check(slideEntries.length === 43, `G1 slide count ${slideEntries.length}, expected 43`);
check(notes.filter(Boolean).length === 43, `G1 note count ${notes.filter(Boolean).length}, expected 43`);
check(manifest.slides.length === 43, `G1 manifest count ${manifest.slides.length}, expected 43`);
check(manifest.classification.reposition === 6, "G1 reposition count mismatch");
check(manifest.classification.revise === 11, "G1 revise count mismatch");
check(manifest.classification.new === 26, "G1 new count mismatch");
check(manifest.slides.filter((item) => item.mapping.startsWith("R")).length === 17, "G1 R count mismatch");
check(manifest.slides.filter((item) => item.mapping.startsWith("N")).length === 26, "G1 N count mismatch");
check(slides[34].includes("BRIDGE TO CASE") && slides[35].includes("AttentionDisplacement 사례"), "G1 block boundary mismatch");
const plan = fs.readFileSync(planPath, "utf8");
const deletionRows = plan.match(/^\|\s*\d+\s*\|.*\|\s*삭제 —/gm) ?? [];
check(deletionRows.length === 95, `G1 deletion rationale count ${deletionRows.length}, expected 95`);
findings.push({ gate: "G1", status: "pass", detail: "43 slides; R17/N26; reposition 6, revise 11, new 26; block boundary 35/36; 95/95 deletion rationales retained" });

// G2 · normalized source text for R17
const g2Failures = validateG2(slides, manifest, sourceSlides);
check(g2Failures.length === 0, `G2 failures: ${g2Failures.join(" | ")}`);
findings.push({ gate: "G2", status: "pass", detail: "R17 only; six reposition slides retain full normalized source text except page number; eleven revised slides retain declared source snippets" });

// G3 · source ledger for N26 and provenance supplements on R17
const g3Failures = validateG3(slides, notes, manifest);
check(g3Failures.length === 0, `G3 failures: ${g3Failures.join(" | ")}`);
findings.push({ gate: "G3", status: "pass", detail: "43/43 source ledger; N26/26 full coverage; R17 additions mapped; unknown or missing source references 0" });

// G4 · trap reveal and distribution timing
const g4Failures = validateG4(slides, notes);
check(g4Failures.length === 0, `G4 failures: ${g4Failures.join(" | ")}`);
const conventions = fs.readFileSync(conventionsPath, "utf8");
check(conventions.includes("배포 시점도 공개 순서다") && conventions.includes("Wk11·Wk12·Wk13"), "G4 distribution-timing convention missing");
findings.push({ gate: "G4", status: "pass", detail: "tool → surface lure → questions/stop → student discovery → debrief; Case Handout distribution delayed to 2.3; +9% first appears on slide 43" });

// G5 · deliberately incomplete/excluded until P2, while blank-position integrity is enforced now
const g5Failures = validateG5Placeholders(slides, manifest, xmls);
check(g5Failures.length === 0, `G5 placeholder failures: ${g5Failures.join(" | ")}`);
check(manifest.g5Status === "incomplete_excluded_pending_P2", "G5 manifest status mismatch");
findings.push({ gate: "G5", status: "incomplete_excluded", detail: "P2 not received; slides 37, 38 and 42 contain title/position/page only and no figure/table/chart/diagram; excluded from denominator" });

// G6 · package and visual readability
execFileSync("unzip", ["-t", deck], { stdio: "ignore" });
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
check(receipt.packageIntegrity?.status === "pass", "G6 package integrity failed");
check(receipt.presentationLayout?.finding_count === 0, `G6 finalizer layout findings ${receipt.presentationLayout?.finding_count}`);
check(receipt.presentationLayout?.warning_count === 2, `G6 expected two formal warnings, found ${receipt.presentationLayout?.warning_count}`);
check(JSON.stringify(receipt.presentationLayout?.slide_size_in) === JSON.stringify([10, 7.5]), "G6 slide size is not 4:3 10 × 7.5 in");
check(receipt.presentationLayout?.font_policy?.passed === true, "G6 font policy failed");
check(receipt.firstPartyImport?.passed === true && receipt.firstPartyImport?.slideCount === 43, "G6 first-party import failed");
const renders = fs.readdirSync(renderDir).filter((name) => /^slide-\d+\.png$/.test(name));
check(renders.length === 43, `G6 render count ${renders.length}, expected 43`);
const audit = JSON.parse(fs.readFileSync(visualAuditPath, "utf8"));
check(audit.status === "pass" && audit.slidesReviewed === 43 && audit.defects === 0, "G6 visual audit failed");
findings.push({ gate: "G6", status: "pass", detail: "ZIP CRC and relationships pass; 4:3; 43/43 renders; clipping 0, overlap 0, unreadable 0; two source-object boundary warnings classified formal after visual review" });

// W1-X · canonical creed exactly once
const w1xFailures = validateW1X(slides, notes);
check(w1xFailures.length === 0, `W1-X failures: ${w1xFailures.join(" | ")}`);
findings.push({ gate: "W1-X", status: "pass", detail: "Wk1 slide 27 canonical creed and footer exactly once on slide 3; partial/variant strings 0" });

// Detection controls prove that the active checks still reject substantive changes.
const controls = {};
{
  const mutated = [...slides];
  mutated[0] = mutated[0].replaceAll("KMB689", "KMB688");
  controls.g2NumericChange = validateG2(mutated, manifest, sourceSlides).length > 0;
}
{
  const mutated = [...slides];
  mutated[9] = mutated[9].replace("비교 대상", "대상");
  controls.g2WordDeletion = validateG2(mutated, manifest, sourceSlides).length > 0;
}
controls.g2WhitespaceVariantAccepted = normalize("A\u00A0 B\nC\tD") === normalize("A B C D");
{
  const mutated = structuredClone(manifest);
  mutated.slides[1].sourceRefs = [];
  controls.g3MissingSource = validateG3(slides, notes, mutated).length > 0;
}
{
  const mutated = [...slides];
  mutated[39] += " 접속을 바꾸지 않은 사건은 약 +9%";
  controls.g4EarlyAnswer = validateG4(mutated, notes).length > 0;
}
{
  const mutated = [...slides];
  mutated[36] += " 임의 대체 도판";
  controls.g5PlaceholderBodyInsertion = validateG5Placeholders(mutated, manifest, xmls).length > 0;
}
{
  const mutated = [...slides];
  mutated[3] += " 기준을 세운다 → 검증한다 → 결정한다";
  controls.w1xPartialVariant = validateW1X(mutated, notes).length > 0;
}
for (const [name, detected] of Object.entries(controls)) check(detected, `Detection control failed: ${name}`);

check(sha256(source107) === "bad93f93bf7b503fbb88bf2ed9b8ba04eb5921260bd7d0d740f021179a8a711e", "107-slide distribution source hash changed");
check(sha256(source119) === "ff4cf50718afce4e61f2b01a7e6853fb7757cf29d2a8fe5ac7b33b6c1059cc52", "119-slide InClass comparator hash changed");
check(sha256(deck) === receipt.finalSha256, "deck hash differs from finalizer receipt");

console.log(JSON.stringify({
  deck,
  sha256: sha256(deck),
  size: fs.statSync(deck).size,
  result: "PASS_WITH_G5_PENDING",
  gateSummary: { passed: 6, denominator: 6, incompleteExcluded: ["G5"] },
  findings,
  controls,
}, null, 2));
