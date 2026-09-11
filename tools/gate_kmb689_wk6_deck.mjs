import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { execFileSync } from "node:child_process";

const workspace = "/Users/gunwoonglee/Documents/ChatGPT/Lecture Materials";
const deck = path.join(workspace, "teaching/KMB689/02_working/Wk6/KMB689_Wk6_Good_Analysis_R1.pptx");
const manifestPath = path.join(workspace, "docs/rounds/KMB689_Wk6_source_manifest_R1.json");
const receipt = path.join(workspace, ".codex-finalizer/wk6-r1/KMB689_Wk6_Good_Analysis_R1.validation.json");
const renderDir = "/tmp/kmb689_wk6_r1_render_final";
const visualAuditPath = path.join(workspace, "docs/rounds/KMB689_Wk6_visual_audit_R1.json");

function decodeXml(value) {
  return value
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&");
}

function normalize(value) {
  return value
    .replaceAll("\u00A0", " ")
    .replace(/[\n\r\t]/g, " ")
    .replace(/ +/g, " ")
    .trim();
}

function zipEntries(file) {
  return execFileSync("unzip", ["-Z1", file], { encoding: "utf8" }).split("\n").filter(Boolean);
}

function part(file, name) {
  return execFileSync("unzip", ["-p", file, name], { encoding: "utf8", maxBuffer: 24 * 1024 * 1024 });
}

function xmlText(xml) {
  return normalize([...xml.matchAll(/<a:t(?: [^>]*)?>([\s\S]*?)<\/a:t>/g)].map((m) => decodeXml(m[1])).join(""));
}

function slideText(file, number) {
  return xmlText(part(file, `ppt/slides/slide${number}.xml`));
}

function allNotesBySlide(file) {
  const entries = zipEntries(file).filter((name) => /^ppt\/notesSlides\/notesSlide\d+\.xml$/.test(name));
  const result = new Map();
  for (const name of entries) {
    const number = Number(name.match(/notesSlide(\d+)\.xml$/)[1]);
    result.set(number, xmlText(part(file, name)));
  }
  return result;
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function check(condition, message) {
  if (!condition) throw new Error(message);
}

function countMatches(text, regex) {
  return [...text.matchAll(regex)].length;
}

function validateSourceCoverage(slides, notes, manifest) {
  check(manifest.slides.length === 36, `G3 manifest slide count ${manifest.slides.length}`);
  check(manifest.classification.reused === 0 && manifest.classification.new === 36, "G3 R/N classification mismatch");
  const knownSources = new Set(Object.keys(manifest.sourceCatalog));
  for (const [code, relativePath] of Object.entries(manifest.sourceCatalog)) {
    check(fs.existsSync(path.join(workspace, relativePath)), `G3 missing source ${code}: ${relativePath}`);
  }
  for (let i = 0; i < 36; i++) {
    const expected = manifest.slides[i];
    check(expected.slide === i + 1, `G3 manifest order mismatch at ${i + 1}`);
    check(expected.mapping === `N${i + 1}`, `G3 mapping mismatch at ${i + 1}`);
    check(Array.isArray(expected.sourceRefs) && expected.sourceRefs.length > 0, `G3 unsupported slide N${i + 1}`);
    for (const code of expected.sourceRefs) check(knownSources.has(code), `G3 unknown source ${code} on N${i + 1}`);
    const note = notes.get(i + 1) ?? "";
    check(note.includes(`mapping: N${i + 1}`), `G3 note mapping missing on N${i + 1}`);
    check(note.includes(`sourceRefs: ${expected.sourceRefs.join(",")}`), `G3 sourceRefs mismatch on N${i + 1}`);
    check(slides[i].includes(expected.title), `G3 expected title missing on N${i + 1}: ${expected.title}`);
  }
  return true;
}

const bannedTerms = [
  "기저율", "정밀도", "재현율", "거짓양성", "거짓음성", "위양성", "위음성", "다수범주",
  "lift", "Lift", "향상도", "ROC", "혼동행렬", "송장", "97.5%", "72.3%", "측정 타당성",
  "비용 비대칭", "데이터과학 정의", "DDD", "여섯 과제 유형", "지도학습", "비지도학습",
];
const earlyAnswerTerms = ["손실이 같으면 검토 A가 맞다", "검토 B의 지적도 사라진다", "놓친 40개 × 20만", "800만"];

function validateBoundary(slides, notes) {
  const all = `${slides.join("\n")}\n${[...notes.values()].join("\n")}`;
  for (const token of bannedTerms) check(!all.includes(token), `G4 prohibited term present: ${token}`);
  for (let i = 0; i < 23; i++) {
    check(!slides[i].includes("한빛정밀"), `G4 case leaked before block 2 on slide ${i + 1}`);
    check(!slides[i].includes("92%"), `G4 case result leaked before block 2 on slide ${i + 1}`);
  }
  for (let i = 0; i < 29; i++) check(!slides[i].includes("불완전"), `G4 debrief leaked on slide ${i + 1}`);
  check(slides[28].includes("검토 A의 92%는 틀린 숫자입니까"), "G4 D4 prompt missing on slide 29");
  check(slides[29].includes("92%는 틀린 숫자가 아니다"), "G4 post-discussion debrief missing on slide 30");
  check(slides[30].includes("똑같이 20만 원이었다면") && slides[30].includes("어떻게 됩니까"), "G4 Q3 question missing on slide 31");
  for (const token of earlyAnswerTerms) check(!all.includes(token), `G4 Q3 answer exposed: ${token}`);
  return true;
}

function validateCaseNumbers(slides) {
  const s25 = slides[24];
  const s26 = slides[25];
  const s27 = slides[26];
  const s30 = slides[29];
  for (const token of ["2천 개", "8천 개", "500만 원", "20만 원", "월 1만 개"]) {
    check(s25.includes(token), `G5 slide 25 value missing: ${token}`);
  }
  for (const token of ["500개", "460개", "40개", "92%"]) {
    check(s26.includes(token), `G5 slide 26 value missing: ${token}`);
  }
  for (const token of ["92%", "100개 중 92개", "100개 중 35개", "1억 7,600만 원"]) {
    check(s27.includes(token), `G5 slide 27 value missing: ${token}`);
  }
  for (const token of ["100개 중 65개", "1억 7,600만 원", "2,240만 원", "약 8배"]) {
    check(s30.includes(token), `G5 slide 30 value missing: ${token}`);
  }
  check(460 / 500 === 0.92, "G5 460/500 arithmetic failed");
  check(35 * 5_000_000 + 5 * 200_000 === 176_000_000, "G5 actual loss arithmetic failed");
  check(3 * 5_000_000 + 37 * 200_000 === 22_400_000, "G5 comparison loss arithmetic failed");
  const ratio = 176_000_000 / 22_400_000;
  check(ratio > 7.8 && ratio < 7.9, "G5 ratio arithmetic failed");
  return true;
}

function walkMarkdown(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walkMarkdown(full));
    else if (/^Wk5.*\.md$/i.test(entry.name)) result.push(full);
  }
  return result;
}

const slideEntries = zipEntries(deck).filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name));
const slides = Array.from({ length: 36 }, (_, i) => slideText(deck, i + 1));
const notes = allNotesBySlide(deck);
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const findings = [];

// G1 · structure
check(slideEntries.length === 36, `G1 slide count ${slideEntries.length}, expected 36`);
check(notes.size === 36, `G1 note count ${notes.size}, expected 36`);
check(countMatches([...notes.values()].join("\n"), /mapping: N\d+/g) === 36, "G1 N count mismatch");
check(countMatches([...notes.values()].join("\n"), /mapping: R/g) === 0, "G1 R count must be zero");
check(slides[22].includes("BLOCK 1") && slides[23].includes("BLOCK 2"), "G1 block boundary mismatch");
findings.push({ gate: "G1", status: "pass", detail: "36 slides; R0/N36; block 1 package 23, block 2 13; unclassified 0" });

// G2 · N/A
findings.push({ gate: "G2", status: "N/A", excludedFromDenominator: true, detail: "No reused content slides" });

// G3 · full-deck source coverage
validateSourceCoverage(slides, notes, manifest);
const strategyOverreach = ["경쟁우위", "포터", "자원기반", "전략적 자산", "산업구조 분석"];
for (const token of strategyOverreach) check(!slides.join("\n").includes(token), `G3 Ch13 overreach: ${token}`);

const wk5Files = walkMarkdown(path.join(workspace, "teaching/KMB689/03_final"));
check(wk5Files.length === 9, `G3 Wk5 source count changed: ${wk5Files.length}`);
const wk5OwnedTerms = [
  "데이터 품질", "결측", "이상치", "인코딩", "원본 N", "분석 N", "중앙값", "분위수", "왜도",
  "산점도", "Pearson", "Spearman", "상관계수",
];
for (let i = 3; i < slides.length; i++) {
  for (const token of wk5OwnedTerms) check(!slides[i].includes(token), `G3 Wk5 duplicate topic ${token} on slide ${i + 1}`);
}
check(slides[2].includes("지난주에 우리는 데이터를 읽었다."), "G3 approved Wk5 recall missing on slide 3");
check(!slides[2].includes("데이터 품질") && !slides[2].includes("결측") && !slides[2].includes("평균"), "G3 Wk5 recall exceeds one-sentence boundary");
findings.push({ gate: "G3", status: "pass", detail: `N36/36 sourceRefs; approved sources exist; Ch13 overreach 0; Wk5 ${wk5Files.length} files compared, duplicate teaching slides 0` });

// G4 · reveal boundary
validateBoundary(slides, notes);
findings.push({ gate: "G4", status: "pass", detail: "case first at slide 24; debrief first at 30; Q3 question-only at 31; prohibited terms and early answers 0" });

// G5 · native evidence and arithmetic
validateCaseNumbers(slides);
const tableXmlEntries = zipEntries(deck).filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name));
const nativeTableSlides = tableXmlEntries
  .map((name) => ({ name, number: Number(name.match(/slide(\d+)\.xml$/)[1]) }))
  .filter(({ name }) => part(deck, name).includes("<a:tbl>"))
  .map(({ number }) => number);
const requiredTables = [2, 11, 17, 20, 23, 25, 26, 27, 33, 34];
for (const number of requiredTables) check(nativeTableSlides.includes(number), `G5 native table missing on slide ${number}`);
findings.push({ gate: "G5", status: "pass", detail: "10 native table slides; source values and 92%, 1.76억, 2,240만, 약 8배 arithmetic match" });

// G6 · package and visual
execFileSync("unzip", ["-t", deck], { stdio: "ignore" });
const validation = JSON.parse(fs.readFileSync(receipt, "utf8"));
check(validation.packageIntegrity?.status === "pass", "G6 package integrity failed");
check(validation.presentationLayout?.finding_count === 0, "G6 layout findings present");
const renders = fs.readdirSync(renderDir).filter((name) => /^slide-\d+\.png$/.test(name));
check(renders.length === 36, `G6 render count ${renders.length}, expected 36`);
const visualAudit = JSON.parse(fs.readFileSync(visualAuditPath, "utf8"));
check(visualAudit.status === "pass" && visualAudit.slidesReviewed === 36 && visualAudit.defects === 0, "G6 visual audit failed");
findings.push({ gate: "G6", status: "pass", detail: "ZIP CRC; relationships; 4:3; 36/36 renders; visual audit 0 defects" });

// W1-X · no planned creed exposure, but zero/variant scan still runs
const creedTokens = ["기준을 세운다", "AI에게 시킨다", "검증한다", "결정한다"];
const creedFooter = "분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.";
const allText = `${slides.join("\n")}\n${[...notes.values()].join("\n")}`;
check(!allText.includes(creedFooter), "W1-X footer variant unexpectedly present");
for (const text of [...slides, ...notes.values()]) {
  const hits = creedTokens.filter((token) => text.includes(token));
  check(hits.length < 2, `W1-X partial creed detected: ${hits.join(",")}`);
}
findings.push({ gate: "W1-X", status: "N/A", excludedFromDenominator: true, detail: "planned creed exposure 0; full and partial/variant creed occurrences 0" });

// Controls · in-memory mutations must be detected
const controls = {};
try {
  const mutated = structuredClone(manifest);
  mutated.slides[0].sourceRefs = [];
  validateSourceCoverage(slides, notes, mutated);
  controls.unsourcedSlide = false;
} catch { controls.unsourcedSlide = true; }

try {
  const mutated = [...slides];
  mutated[25] = mutated[25].replace("460개", "461개");
  validateCaseNumbers(mutated);
  controls.numericChange = false;
} catch { controls.numericChange = true; }

try {
  const mutated = [...slides];
  mutated[0] += " 기저율";
  validateBoundary(mutated, notes);
  controls.prohibitedTerm = false;
} catch { controls.prohibitedTerm = true; }

try {
  const mutated = [...slides];
  mutated[28] += " 손실이 같으면 검토 A가 맞다";
  validateBoundary(mutated, notes);
  controls.earlyQ3Answer = false;
} catch { controls.earlyQ3Answer = true; }

for (const [name, detected] of Object.entries(controls)) check(detected, `Control not detected: ${name}`);

const active = findings.filter((item) => item.status === "pass" && /^G[13456]$/.test(item.gate));
check(active.length === 5, `Active gate denominator mismatch: ${active.length}`);

console.log(JSON.stringify({
  deck,
  sha256: sha256(deck),
  size: fs.statSync(deck).size,
  result: "PASS",
  activePassed: active.length,
  activeTotal: 5,
  findings,
  controls,
}, null, 2));
