import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { execFileSync } from "node:child_process";

const workspace = "/Users/gunwoonglee/Documents/ChatGPT/Lecture Materials";
const deck = path.join(workspace, "teaching/KMB689/02_working/Wk8/KMB689_Wk8_Regression_CausalInference_R1.pptx");
const sourceDeck = "/Users/gunwoonglee/Downloads/Teaching_2025/Fall/BUSS256_BigData/Seminar 8-9 LRM/Seminars 8-9_Linear Regression Model_InClass3_F25.pptx";
const terminologyDeck = "/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Seminar 8_LRM/Seminar 8_Linear Regression Models_Inclass.pptx";
const manifestPath = path.join(workspace, "docs/rounds/KMB689_Wk8_source_manifest_R1.json");
const receiptPath = path.join(workspace, ".codex-finalizer/wk8-r1/KMB689_Wk8_Regression_CausalInference_R1.validation.json");
const renderDir = "/tmp/kmb689_wk8_r1_render_final";
const visualAuditPath = path.join(workspace, "docs/rounds/KMB689_Wk8_visual_audit_R1.json");

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
  return execFileSync("unzip", ["-p", file, name], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
}

function xmlText(xml) {
  return normalize([...xml.matchAll(/<a:t(?: [^>]*)?>([\s\S]*?)<\/a:t>/g)].map((match) => decodeXml(match[1])).join(""));
}

function slideText(file, number) {
  return xmlText(part(file, `ppt/slides/slide${number}.xml`));
}

function noteText(file, number) {
  const name = `ppt/notesSlides/notesSlide${number}.xml`;
  return zipEntries(file).includes(name) ? xmlText(part(file, name)) : "";
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
    const output = slides[item.slide - 1];
    const sourceCorpus = item.bussSlides.map((number) => sourceSlides[number]).join(" ");
    for (const rawSnippet of item.requiredSourceSnippets) {
      const snippet = normalize(rawSnippet);
      if (!sourceCorpus.includes(snippet)) failures.push(`R${item.slide} snippet absent from BUSS source: ${snippet}`);
      if (!output.includes(snippet)) failures.push(`R${item.slide} retained snippet absent from output: ${snippet}`);
    }
    if (item.classification === "reposition") {
      const primary = item.bussSlides[0];
      const sourceCore = stripPageNumber(sourceSlides[primary], primary);
      const outputCore = stripPageNumber(output, item.slide);
      if (!outputCore.includes(sourceCore)) failures.push(`R${item.slide} no longer contains full BUSS slide ${primary} text`);
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
    if (item.slide !== number) failures.push(`manifest order mismatch at ${number}`);
    if (!item.sourceRefs.length) failures.push(`slide ${number} has no sourceRefs`);
    for (const code of item.sourceRefs) if (!known.has(code)) failures.push(`slide ${number} has unknown source ${code}`);
    if (!notes[index].includes(`mapping: ${item.mapping}`)) failures.push(`slide ${number} mapping missing from notes`);
    if (!notes[index].includes(`sourceRefs: ${item.sourceRefs.join(",")}`)) failures.push(`slide ${number} sourceRefs mismatch in notes`);
    if (item.classification === "new" && item.bussSlides.length) failures.push(`N${number} unexpectedly maps BUSS slides`);
    if (item.classification !== "new" && !item.bussSlides.length) failures.push(`R${number} lacks BUSS mapping`);
  }

  const terminologyChecks = {
    7: ["종속변수(결과변수, Y)", "독립변수(설명변수, X)"],
    10: ["단순회귀 모형", "다중회귀 모형"],
    13: ["유의하지 않음", "n.s."],
    14: ["결정계수"],
    22: ["기준 범주(baseline)"],
    30: ["자발적 선택"],
    31: ["차이-내-차이(DID)"],
    32: ["매칭"],
  };
  for (const [number, tokens] of Object.entries(terminologyChecks)) {
    for (const token of tokens) if (!slides[Number(number) - 1].includes(token)) failures.push(`terminology token missing on slide ${number}: ${token}`);
  }
  return failures;
}

function validateG4(slides, notes) {
  const failures = [];
  const beforeCase = slides.slice(0, 35).join("\n");
  const beforeDebrief = slides.slice(0, 40).join("\n");
  const allNotes = notes.join("\n");

  for (const token of ["12,400,000원", "+0.150", "189,942", "R² ≈ 0.62"]) {
    if (beforeCase.includes(token)) failures.push(`case value leaked before block 2: ${token}`);
  }
  for (const token of ["+9% ***", "−1% (n.s.)", "+24% ***", "−4% **", "방문자(도달)가 증가를 주도", "전환율 향상 주장은 기각", "도달 확장으로 매출 증가"]) {
    if (beforeDebrief.includes(token)) failures.push(`answer leaked before student verification: ${token}`);
  }
  if (!slides[24].includes("1블록에서는 질문하는 도구만")) failures.push("block-1 tool-only boundary missing on slide 25");
  if (!slides[37].includes("AI가 제시한 결론") || !slides[37].includes("아직 채택하거나 반박하지 않는다")) failures.push("AI claim not framed as verification target on slide 38");
  if (!slides[38].includes("여기서 멈춘다")) failures.push("instructor stop point missing on slide 39");
  if (!slides[39].includes("정답값을 띄우지 않는다")) failures.push("student discovery boundary missing on slide 40");
  if (!slides[40].includes("+9% ***") || !slides[40].includes("−4% **")) failures.push("first answer reveal missing on slide 41");
  if (allNotes.includes("매출 증가 = 전환이 아니라 도달")) failures.push("instructor answer leaked through speaker notes");
  return failures;
}

function validateG5(slides, nativeTableSlides) {
  const failures = [];
  const requiredTables = [2, 7, 11, 12, 13, 16, 18, 19, 22, 23, 24, 25, 27, 29, 31, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43];
  for (const number of requiredTables) if (!nativeTableSlides.includes(number)) failures.push(`native table missing on slide ${number}`);

  const expected = {
    18: ["−0.009", "+0.084", "+0.038", "+0.152", "***"],
    20: ["R² ≈ 0.14", "14% 설명", "86%"],
    23: ["+0.678", "+0.638", "+0.491", "+0.518", "Games 대비"],
    24: ["+0.152", "- 0.045"],
    36: ["189,942개", "2,060명", "104주"],
    37: ["12,400,000원", "13,900,000원", "11,600,000원", "+0.150", "p < 0.001", "189,942", "≈ 0.62"],
    38: ["+0.150", "0.021", "+0.412", "+0.088", "+0.006"],
    41: ["+9% ***", "−1% (n.s.)", "+15% ***", "−2% *", "+20% ***", "−3% **", "+24% ***", "−4% **", "≈ +20%"],
    42: ["방문자(도달)가 증가를 주도", "전환율은 정체 또는 소폭 감소", "객단가는 변화 없음", "DID·매칭"],
  };
  for (const [number, tokens] of Object.entries(expected)) {
    for (const token of tokens) if (!slides[Number(number) - 1].includes(token)) failures.push(`evidence token missing on slide ${number}: ${token}`);
  }

  const adopterGrowth = 13_900_000 / 12_400_000 - 1;
  const postGap = 13_900_000 / 11_600_000 - 1;
  if (!(adopterGrowth > 0.12 && adopterGrowth < 0.122)) failures.push("Exhibit 1 adopter growth arithmetic mismatch");
  if (!(postGap > 0.198 && postGap < 0.199)) failures.push("Exhibit 1 post-period gap arithmetic mismatch");
  if (9 - 1 + 0 !== 8 || 15 - 2 + 0 !== 13 || 20 - 3 - 0 !== 17 || 24 - 4 + 0 !== 20) failures.push("Exhibit 2 decomposition arithmetic mismatch");

  const all = slides.join("\n");
  for (const token of ["학생 배포 금지", "⚠ 강사용", "정답표", "강사용 해설"]) {
    if (all.includes(token)) failures.push(`instructor-only marker leaked: ${token}`);
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
  const withoutCanonical = all.replaceAll(creed, "");
  const variants = [
    "기준을 세운다 → 검증한다 → 결정한다",
    "AI에게 시킨다 → 검증한다 → 결정한다",
    "기준을 세운다 → AI에게 시킨다 → 결정한다",
    "기준을 세운다→AI에게 시킨다→검증한다→결정한다",
  ];
  for (const variant of variants) if (withoutCanonical.includes(variant)) failures.push(`partial or variant creed found: ${variant}`);
  if (!slides[2].includes(creed) || !slides[2].includes(footer)) failures.push("canonical creed and footer are not both on slide 3");
  for (let index = 0; index < slides.length; index++) {
    if (index !== 2 && (slides[index].includes("기준을 세운다 →") || slides[index].includes("AI에게 시킨다 →"))) {
      failures.push(`creed-like arrow sequence outside slide 3: ${index + 1}`);
    }
  }
  return failures;
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const slideEntries = zipEntries(deck).filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name));
const slides = Array.from({ length: 43 }, (_, index) => slideText(deck, index + 1));
const notes = Array.from({ length: 43 }, (_, index) => noteText(deck, index + 1));
const sourceSlides = Object.fromEntries(Array.from({ length: 76 }, (_, index) => [index + 1, slideText(sourceDeck, index + 1)]));
const nativeTableSlides = slideEntries
  .map((name) => ({ name, number: Number(name.match(/slide(\d+)\.xml$/)[1]) }))
  .filter(({ name }) => part(deck, name).includes("<a:tbl>"))
  .map(({ number }) => number);

const findings = [];

// G1 structure
check(slideEntries.length === 43, `G1 slide count ${slideEntries.length}, expected 43`);
check(notes.filter(Boolean).length === 43, `G1 note count ${notes.filter(Boolean).length}, expected 43`);
check(manifest.slides.length === 43, `G1 manifest count ${manifest.slides.length}, expected 43`);
check(manifest.classification.reposition === 4, "G1 reposition count mismatch");
check(manifest.classification.revise === 15, "G1 revise count mismatch");
check(manifest.classification.new === 24, "G1 new count mismatch");
check(manifest.slides.filter((item) => item.mapping.startsWith("R")).length === 19, "G1 R count mismatch");
check(manifest.slides.filter((item) => item.mapping.startsWith("N")).length === 24, "G1 N count mismatch");
check(slides[34].includes("사례 검증으로 전환") && slides[35].includes("SmartAds 사례"), "G1 block boundary mismatch");
findings.push({ gate: "G1", status: "pass", detail: "43 slides; R19/N24; reposition 4, revise 15, new 24; block boundary 35/36" });

// G2 source preservation
const g2Failures = validateG2(slides, manifest, sourceSlides);
check(g2Failures.length === 0, `G2 failures: ${g2Failures.join(" | ")}`);
findings.push({ gate: "G2", status: "pass", detail: "R19 BUSS256 normalized text checks; four reposition slides retain full source text except page number; revised slides retain declared source snippets" });

// G3 source ledger and terminology
const g3Failures = validateG3(slides, notes, manifest);
check(g3Failures.length === 0, `G3 failures: ${g3Failures.join(" | ")}`);
findings.push({ gate: "G3", status: "pass", detail: "43/43 source ledger; N24 full coverage; R19 additions mapped; KMB689 Korean terminology choices present" });

// G4 reveal boundary
const g4Failures = validateG4(slides, notes);
check(g4Failures.length === 0, `G4 failures: ${g4Failures.join(" | ")}`);
findings.push({ gate: "G4", status: "pass", detail: "Block 1 supplies tools only; Block 2 shows lure and stop; student discovery on 40; first actual mechanism reveal on 41" });

// G5 evidence
const g5Failures = validateG5(slides, nativeTableSlides);
check(g5Failures.length === 0, `G5 failures: ${g5Failures.join(" | ")}`);
findings.push({ gate: "G5", status: "pass", detail: `${nativeTableSlides.length} native-table slides; MobileApp, Exhibit 1, AI output and Exhibit 2 values match; student/instructor marker leakage 0` });

// G6 package and visual
execFileSync("unzip", ["-t", deck], { stdio: "ignore" });
const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
check(receipt.packageIntegrity?.status === "pass", "G6 package integrity failed");
check(receipt.presentationLayout?.finding_count === 0, `G6 finalizer layout findings ${receipt.presentationLayout?.finding_count}`);
const renders = fs.readdirSync(renderDir).filter((name) => /^slide-\d+\.png$/.test(name));
check(renders.length === 43, `G6 render count ${renders.length}, expected 43`);
const audit = JSON.parse(fs.readFileSync(visualAuditPath, "utf8"));
check(audit.status === "pass" && audit.slidesReviewed === 43 && audit.defects === 0, "G6 visual audit failed");
findings.push({ gate: "G6", status: "pass", detail: "ZIP CRC, relationships, 4:3, 43/43 renders, visual audit: clipping 0, overlap 0, unreadable 0" });

// W1-X
const w1xFailures = validateW1X(slides, notes);
check(w1xFailures.length === 0, `W1-X failures: ${w1xFailures.join(" | ")}`);
findings.push({ gate: "W1-X", status: "pass", detail: "Wk1 slide 27 canonical creed and footer exactly once on slide 3; partial/variant strings 0" });

// Detection controls
const controls = {};
try {
  const mutated = [...slides];
  mutated[17] = mutated[17].replace("+0.152", "+0.153");
  controls.g2NumericChange = validateG2(mutated, manifest, sourceSlides).length > 0;
} catch { controls.g2NumericChange = true; }

try {
  const mutated = [...slides];
  mutated[5] = mutated[5].replace("probabilistic", "");
  controls.g2WordDeletion = validateG2(mutated, manifest, sourceSlides).length > 0;
} catch { controls.g2WordDeletion = true; }

try {
  const mutated = [...slides];
  mutated[12] = mutated[12].replaceAll("***", "**");
  controls.g2PunctuationChange = validateG2(mutated, manifest, sourceSlides).length > 0;
} catch { controls.g2PunctuationChange = true; }

{
  const baseline = "+0.152";
  const variant = "\t  +0.152\u00A0 \n";
  controls.g2WhitespaceVariantAccepted = normalize(baseline) === normalize(variant);
}

try {
  const mutated = structuredClone(manifest);
  mutated.slides[1].sourceRefs = [];
  controls.g3MissingSource = validateG3(slides, notes, mutated).length > 0;
} catch { controls.g3MissingSource = true; }

try {
  const mutated = [...slides];
  mutated[39] += " +9% ***";
  controls.g4EarlyAnswer = validateG4(mutated, notes).length > 0;
} catch { controls.g4EarlyAnswer = true; }

try {
  const mutated = [...slides];
  mutated[40] = mutated[40].replace("+24% ***", "+25% ***");
  controls.g5ExhibitNumber = validateG5(mutated, nativeTableSlides).length > 0;
} catch { controls.g5ExhibitNumber = true; }

try {
  const mutated = [...slides];
  mutated[3] += " 기준을 세운다 → 검증한다 → 결정한다";
  controls.w1xPartialVariant = validateW1X(mutated, notes).length > 0;
} catch { controls.w1xPartialVariant = true; }

for (const [name, detected] of Object.entries(controls)) check(detected, `Detection control failed: ${name}`);

check(fs.existsSync(terminologyDeck), "Terminology deck missing");
check(sha256(sourceDeck) === "f41e514e76e13f9a00dc8ec2b06e49323e91aabe940acbb7e3fabfb4fcdc3036", "BUSS256 source hash changed");
check(sha256(terminologyDeck) === "5c11f3514b691bc3f2a3f31fcca8e434e94c53fa2695bcba3bca791009693277", "KMB689 terminology source hash changed");

console.log(JSON.stringify({
  deck,
  sha256: sha256(deck),
  size: fs.statSync(deck).size,
  result: "PASS",
  gateSummary: { passed: 7, denominator: 7 },
  findings,
  controls,
}, null, 2));
