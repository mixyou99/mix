import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { execFileSync } from "node:child_process";

const workspace = "/Users/gunwoonglee/Documents/ChatGPT/Lecture Materials";
const deck = path.join(workspace, "teaching/KMB689/02_working/Wk11/KMB689_Wk11_Classification_R1.pptx");
const sourceKmb = "/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Classification/Extra_Lecture_Classification.pptx";
const sourceBuss = "/Users/gunwoonglee/Downloads/Teaching_2025/Fall/BUSS256_BigData/Old/Weeks 13-14/Seminars 22-24_Lecture_Notes.pptx";
const manifestPath = path.join(workspace, "docs/rounds/KMB689_Wk11_source_manifest_R1.json");
const planPath = path.join(workspace, "docs/rounds/KMB689_Wk11_deck_plan.md");
const conventionsPath = path.join(workspace, "docs/rounds/DECK_GATE_CONVENTIONS.md");
const revisionItemsPath = path.join(workspace, "docs/rounds/MATERIAL_REVISION_ITEMS.md");
const receiptPath = path.join(workspace, ".codex-finalizer/wk11-r1/KMB689_Wk11_Classification_R1.validation.json");
const renderDir = "/tmp/kmb689_wk11_render_final.j61Hwr";
const visualAuditPath = path.join(workspace, "docs/rounds/KMB689_Wk11_visual_audit_R1.json");

function check(condition, message) { if (!condition) throw new Error(message); }
function normalize(value) {
  return value.replaceAll("\u00A0", " ").replace(/[\r\n\t]/g, " ").replace(/ +/g, " ").trim();
}
function decodeXml(value) {
  return value.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&apos;", "'").replaceAll("&amp;", "&");
}
function zipEntries(file) { return execFileSync("unzip", ["-Z1", file], { encoding: "utf8" }).split("\n").filter(Boolean); }
function part(file, name) { return execFileSync("unzip", ["-p", file, name], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }); }
function xmlText(xml) { return normalize([...xml.matchAll(/<a:t(?: [^>]*)?>([\s\S]*?)<\/a:t>/g)].map((match) => decodeXml(match[1])).join("")); }
function slideText(file, number) { return xmlText(part(file, `ppt/slides/slide${number}.xml`)); }
function slideXml(file, number) { return part(file, `ppt/slides/slide${number}.xml`); }
function noteText(file, number, entries) {
  const name = `ppt/notesSlides/notesSlide${number}.xml`;
  return entries.includes(name) ? xmlText(part(file, name)) : "";
}
function sha256(file) { return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex"); }
function sourcePath(value) { return path.isAbsolute(value) ? value : path.join(workspace, value); }

const outputEvidence = {
  1: ["KMB689", "Classification"],
  5: ["분류", "결과/목표변수", "클래스"],
  7: ["모델 구축", "모델 평가", "모델 적용"],
  8: ["Training Data", "Test Data"],
  9: ["Logistic Regression"],
  18: ["모델 평가"],
  19: ["Accuracy", "Error rate"],
  20: ["Actual +", "Predicted +", "TP", "FN", "FP", "TN"],
  22: ["실제 성공", "FN"],
  23: ["9,990", "10,000", "99.9%"],
  25: ["오류", "비용"],
  26: ["비용 행렬", "TP 비용", "FN 비용", "FP 비용", "TN 비용"],
};

function sourceCorpus(item, kmbSlides, bussSlides) {
  return item.sourceSlides.map((id) => {
    const token = String(id);
    if (token.startsWith("KMB")) return kmbSlides[Number(token.slice(3))] ?? "";
    if (token.startsWith("BUSS")) return bussSlides[Number(token.slice(4))] ?? "";
    return kmbSlides[Number(token)] ?? "";
  }).join(" ");
}

function validateG2(slides, manifest, kmbSlides, bussSlides) {
  const failures = [];
  for (const item of manifest.slides.filter((slide) => slide.classification === "revise")) {
    const corpus = sourceCorpus(item, kmbSlides, bussSlides).toLowerCase();
    for (const snippet of item.requiredSourceSnippets) {
      if (!corpus.includes(normalize(snippet).toLowerCase())) failures.push(`R${item.number} source snippet absent: ${snippet}`);
    }
    for (const evidence of outputEvidence[item.number] ?? []) {
      if (!slides[item.number - 1].includes(evidence)) failures.push(`R${item.number} approved output evidence absent: ${evidence}`);
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
    for (const code of item.sourceRefs) if (!known.has(code)) failures.push(`slide ${number} unknown source ${code}`);
    if (!notes[index].includes(`mapping: ${item.mapping}`)) failures.push(`slide ${number} mapping missing from notes`);
    if (!notes[index].includes(`sourceRefs: ${item.sourceRefs.join(",")}`)) failures.push(`slide ${number} sourceRefs mismatch in notes`);
    if (item.classification === "new" && item.sourceSlides.length) failures.push(`N${number} unexpectedly maps source slides`);
    if (item.classification === "revise" && !item.sourceSlides.length) failures.push(`R${number} lacks source mapping`);
    if (!slides[index]) failures.push(`slide ${number} has no normalized text`);
  }
  return failures;
}

function validateG4(slides, notes) {
  const failures = [];
  const beforeDebrief = slides.slice(0, 42).join("\n");
  const notesBeforeDebrief = notes.slice(0, 42).join("\n");
  for (const token of [
    "54.6%", "약 55%", "슈퍼호스트는 높은 평점 등에 따라 붙은 결과 라벨", "성공의 원인이 아니라, 성공에 따라 붙은 이름표",
    "편의시설의 11배는 0→1 전 구간", "오류 비용 자료가 없으므로 임계값·정책을 확정할 수 없다",
  ]) {
    if (beforeDebrief.includes(token)) failures.push(`answer leaked before slide 43: ${token}`);
    if (notesBeforeDebrief.includes(token)) failures.push(`answer leaked in notes before slide 43: ${token}`);
  }
  if (!slides[35].includes("Case Handout 배포")) failures.push("slide 36 Case Handout distribution missing");
  if (!slides[37].includes("아직 채택하거나 반박하지 않는다")) failures.push("slide 38 surface lure boundary missing");
  if (!slides[39].includes("여기서 멈춘다") || !slides[39].includes("정답·계산 결과·행동 판정을 말하지 않는다")) failures.push("slide 40 stop boundary missing");
  if (!slides[40].includes("Student AI Exhibit + Verification Worksheet 배포")) failures.push("slide 41 student distribution missing");
  if (!slides[41].includes("계산 답과 최종 판정을 띄우지 않는다")) failures.push("slide 42 answer-withholding instruction missing");
  for (const token of ["결과 라벨", "0→1 전 구간", "54.6%", "약 55%", "오류 비용 자료가 없으므로 임계값·정책을 확정할 수 없다"]) {
    if (!slides[42].includes(token)) failures.push(`slide 43 first reveal missing: ${token}`);
  }
  return failures;
}

function validateG5(slides, manifest, xmls) {
  const failures = [];
  const declared = manifest.slides.filter((item) => item.placeholder).map((item) => item.number);
  if (JSON.stringify(declared) !== JSON.stringify([39])) failures.push(`placeholder list mismatch: ${declared.join(",")}`);
  const expected = normalize("2.1 · FIGURE PLACEHOLDER오즈비 도판 · 학생판/교원판39");
  if (slides[38] !== expected) failures.push("slide 39 has content beyond title/position/page");
  if (/<a:blip\b|<p:graphicFrame\b/.test(xmls[38])) failures.push("slide 39 contains figure/table/chart before figD recovery");
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
  if (!slides[2].includes(creed) || !slides[2].includes(footer)) failures.push("canonical creed/footer not both on slide 3");
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
const slides = Array.from({ length: 43 }, (_, index) => slideText(deck, index + 1));
const xmls = Array.from({ length: 43 }, (_, index) => slideXml(deck, index + 1));
const notes = Array.from({ length: 43 }, (_, index) => noteText(deck, index + 1, entries));
const kmbSlides = Object.fromEntries(Array.from({ length: 78 }, (_, index) => [index + 1, slideText(sourceKmb, index + 1)]));
const bussSlides = Object.fromEntries(Array.from({ length: 55 }, (_, index) => [index + 1, slideText(sourceBuss, index + 1)]));
const findings = [];

// G1
check(entries.filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name)).length === 43, "G1 slide count mismatch");
check(notes.filter(Boolean).length === 43 && manifest.slides.length === 43, "G1 notes/manifest count mismatch");
check(manifest.classification.revise === 12 && manifest.classification.new === 31, "G1 classification mismatch");
check(slides[34].includes("BRIDGE TO CASE") && slides[35].includes("AirbnbSuccessSignals 사례"), "G1 block boundary mismatch");
findings.push({ gate: "G1", status: "pass", detail: "43 slides; block1 35/block2 8; revise 12/new 31; boundary 35/36" });

// G2
const g2Failures = validateG2(slides, manifest, kmbSlides, bussSlides);
check(g2Failures.length === 0, `G2 failures: ${g2Failures.join(" | ")}`);
findings.push({ gate: "G2", status: "pass", detail: "R12 only; each source snippet exists in KMB78 or declared BUSS55 seed and approved translated/output evidence is retained" });

// G3
const g3Failures = validateG3(slides, notes, manifest);
check(g3Failures.length === 0, `G3 failures: ${g3Failures.join(" | ")}`);
findings.push({ gate: "G3", status: "pass", detail: "N31/31 and R additions mapped; 43/43 notes carry mapping and sourceRefs; missing/unknown source 0" });

// G4
const g4Failures = validateG4(slides, notes);
check(g4Failures.length === 0, `G4 failures: ${g4Failures.join(" | ")}`);
const plan = fs.readFileSync(planPath, "utf8");
check(plan.includes("Block1 LectureNotes") && plan.includes("2.4 종료 뒤") && plan.includes("2.3 시작"), "G4 distribution plan missing");
findings.push({ gate: "G4", status: "pass", detail: "tool → surface lure → questions/stop → student discovery → debrief; case answers first appear on slide 43; planned distribution boundaries present" });

// G5 excluded
const g5Failures = validateG5(slides, manifest, xmls);
check(g5Failures.length === 0, `G5 failures: ${g5Failures.join(" | ")}`);
check(manifest.g5Status === "incomplete_excluded_figD_absent", "G5 status mismatch");
findings.push({ gate: "G5", status: "incomplete_excluded", detail: "figD student/instructor absent; slide39 title/position/page only and contains no figure/table/chart; excluded from denominator" });

// G6
execFileSync("unzip", ["-t", deck], { stdio: "ignore" });
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
check(receipt.packageIntegrity?.status === "pass", "G6 package integrity failed");
check(receipt.presentationLayout?.finding_count === 0 && receipt.presentationLayout?.warning_count === 0, "G6 layout findings/warnings present");
check(JSON.stringify(receipt.presentationLayout?.slide_size_in) === JSON.stringify([10, 7.5]), "G6 slide size mismatch");
check(receipt.firstPartyImport?.passed === true && receipt.firstPartyImport?.slideCount === 43, "G6 first-party import failed");
check(fs.readdirSync(renderDir).filter((name) => /^slide-\d+\.png$/.test(name)).length === 43, "G6 render count mismatch");
const audit = JSON.parse(fs.readFileSync(visualAuditPath, "utf8"));
check(audit.status === "pass" && audit.slidesReviewed === 43 && audit.defects === 0, "G6 visual audit failed");
findings.push({ gate: "G6", status: "pass", detail: "ZIP CRC/relationships pass; 4:3; 43/43 render review; clipping/overlap/unreadable 0" });

// W1-X
const w1xFailures = validateW1X(slides, notes);
check(w1xFailures.length === 0, `W1-X failures: ${w1xFailures.join(" | ")}`);
findings.push({ gate: "W1-X", status: "pass", detail: "canonical creed and footer exactly once on slide3; partial/variant forms 0" });

// Source and documentation invariants
check(sha256(sourceKmb) === "079f9eb225a251a75dad0398bbf703121c084f024c8de961a2a6f153741690cc", "KMB78 hash changed");
check(sha256(sourceBuss) === "a98261a53d4218617a89dd68be69341b65d2129aa75494188de5617644f201dc", "BUSS55 seed hash changed");
check(JSON.stringify(manifest.secondarySeedSlides) === JSON.stringify([37, 38, 40, 42, 44]), "BUSS seed slide list changed");
const conventions = fs.readFileSync(conventionsPath, "utf8");
check(conventions.includes("배포 시점도 공개 순서다") && conventions.includes("실질 실패") && conventions.includes("형식 실패"), "gate conventions incomplete");
const revisionItems = fs.readFileSync(revisionItemsPath, "utf8");
for (const token of ["Wk11 분류", "Wk12 텍스트 분석", "Wk13 연관규칙", "원본 자료 미수정"]) check(revisionItems.includes(token), `revision item missing: ${token}`);

// Detection controls
const controls = {};
{
  const mutated = [...slides];
  mutated[22] = mutated[22].replace("99.9%", "99.8%");
  controls.g2NumericChange = validateG2(mutated, manifest, kmbSlides, bussSlides).length > 0;
}
{
  const mutated = structuredClone(manifest);
  mutated.slides[1].sourceRefs = [];
  controls.g3UngroundedSlide = validateG3(slides, notes, mutated).length > 0;
}
{
  const mutated = [...slides];
  mutated[39] += " 54.6%(약 55%)";
  controls.g4EarlyAnswer = validateG4(mutated, notes).length > 0;
}
{
  const mutated = [...slides];
  mutated[39] += " 슈퍼호스트는 높은 평점 등에 따라 붙은 결과 라벨";
  controls.g4ForbiddenPhrase = validateG4(mutated, notes).length > 0;
}
{
  const mutated = [...slides];
  mutated[38] += " 임의 대체 도판";
  controls.g5PlaceholderInsertion = validateG5(mutated, manifest, xmls).length > 0;
}
{
  const mutated = [...slides];
  mutated[3] += " 기준을 세운다 → 검증한다 → 결정한다";
  controls.w1xPartialVariant = validateW1X(mutated, notes).length > 0;
}
for (const [name, detected] of Object.entries(controls)) check(detected, `Detection control failed: ${name}`);
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
