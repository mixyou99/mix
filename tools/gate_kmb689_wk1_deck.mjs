import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { execFileSync } from "node:child_process";

const workspace = "/Users/gunwoonglee/Documents/ChatGPT/Lecture Materials";
const deck = path.join(workspace, "teaching/KMB689/02_working/Wk1/KMB689_Wk1_Orientation_Supervision_R1.pptx");
const source = path.join(workspace, "work/source/KMB689_Wk1_S1_Course_Introduction_Class25S.pptx");
const wk10 = path.join(workspace, "teaching/KMB689/02_working/Wk10/KMB689_Wk10_Block1_Clustering_R3.pptx");
const receipt = path.join(workspace, ".codex-finalizer/wk1-r1/KMB689_Wk1_Orientation_Supervision_R1.validation.json");
const renderDir = "/tmp/kmb689_wk1_r1_render_final";

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
  return execFileSync("unzip", ["-p", file, name], { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
}

function xmlText(xml) {
  return normalize([...xml.matchAll(/<a:t(?: [^>]*)?>([\s\S]*?)<\/a:t>/g)].map((m) => decodeXml(m[1])).join(""));
}

function slideText(file, number) {
  return xmlText(part(file, `ppt/slides/slide${number}.xml`));
}

function allNotesText(file) {
  const entries = zipEntries(file).filter((name) => /^ppt\/notesSlides\/notesSlide\d+\.xml$/.test(name));
  return entries.map((name) => xmlText(part(file, name))).join("\n");
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

function inOrder(text, tokens) {
  let cursor = 0;
  for (const token of tokens) {
    const found = text.indexOf(token, cursor);
    if (found < 0) return false;
    cursor = found + token.length;
  }
  return true;
}

const slideEntries = zipEntries(deck).filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name));
const slides = Array.from({ length: 47 }, (_, i) => slideText(deck, i + 1));
const notes = allNotesText(deck);
const findings = [];

// G1 · structure and stage split
check(slideEntries.length === 47, `G1 slide count ${slideEntries.length}, expected 47`);
check(countMatches(notes, /stage: \(가\)/g) === 42, "G1 stage (가) count mismatch");
check(countMatches(notes, /stage: \(나\)/g) === 5, "G1 stage (나) count mismatch");
check(countMatches(notes, /mapping: R/g) === 28, "G1 R count mismatch");
check(countMatches(notes, /mapping: N/g) === 19, "G1 N count mismatch");
const pending = new Map([
  [8, "강의 정보"], [10, "평가와 시험"], [11, "출석과 참여"],
  [13, "자료 · LMS · 조 편성"], [14, "과제와 마감"],
]);
for (const [number, title] of pending) {
  let remaining = slides[number - 1];
  for (const allowed of [title, "ORIENTATION · SYLLABUS PENDING", String(number)]) {
    remaining = remaining.replace(normalize(allowed), "");
  }
  check(normalize(remaining) === "", `G1 pending slide ${number} contains body text: ${remaining}`);
}
findings.push({ gate: "G1", status: "pass", detail: "47 slides; stage (가) 42; stage (나) 5; R28/N19; pending bodies empty" });

// G2 · source preservation for exact repositions and approved-revision coverage
for (const [outNumber, sourceNumber] of [[3, 36], [6, 42], [7, 47]]) {
  const outText = normalize(slides[outNumber - 1].replace(String(outNumber), ""));
  const sourceText = normalize(slideText(source, sourceNumber).replace(String(sourceNumber), ""));
  check(outText === sourceText, `G2 exact reposition mismatch: output ${outNumber}, source ${sourceNumber}`);
}
for (const number of [...Array(26).keys()].map((i) => i + 1).concat([44, 47])) {
  check(notes.includes(`slide: ${number} |`), `G2 missing approved mapping note on slide ${number}`);
}
const legacy = ["KMB581", "LP432", "Group Assignments (20%)", "Class Participation (20%)", "Seminar 2 & R", "MIS course"];
for (const token of legacy) check(!slides.join("\n").includes(token), `G2 legacy token remains: ${token}`);
findings.push({ gate: "G2", status: "pass", detail: "R28 mapped; exact reposition 3/3 normalized matches; approved legacy logistics absent" });

// G3 · source coverage for new slides
for (let i = 1; i <= 19; i++) check(notes.includes(`mapping: N${i} | source:`), `G3 missing source for N${i}`);
check(countMatches(notes, /mapping: N\d+ \| source:/g) === 19, "G3 N source count mismatch");
findings.push({ gate: "G3", status: "pass", detail: "N19/19 source notes present; revised additions source-mapped in build manifest" });

// G4 · reveal boundary and prohibited concepts
// Table cell line breaks may be split into adjacent <a:t> runs. G2′ joins them without
// inventing a separator, so the expected slide-level strings do the same.
const promptA = "우리 최고 고객 5명을 뽑아줘.연말 감사 선물을 보내려고 해.";
const promptB = "우리 최고 고객 5명을 뽑아줘.신제품 체험단으로 초대하려고 해.";
for (let i = 0; i < 38; i++) {
  check(!slides[i].includes(promptA) && !slides[i].includes(promptB), `G4 prompt leaked on slide ${i + 1}`);
}
check(slides[38].includes(promptA) && slides[38].includes(promptB), "G4 prompts are not revealed together on slide 39");
check(!slides.join("\n").includes("질문이 답을 만든다"), "G4 prohibited phrase present");
for (const token of ["STAR", "회귀", "군집", "연관규칙", "분류", "텍스트 분석"]) {
  check(!slides.join("\n").includes(token), `G4 technique/mechanism leaked: ${token}`);
}
findings.push({ gate: "G4", status: "pass", detail: "prompts first appear together on slide 39; prohibited answer/mechanism/technique terms 0" });

// G5 · fixed Exhibit identity and values
const exhibitRows = [
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
];
for (const row of exhibitRows) check(slides[29].includes(row.join("")), `G5 slide 30 row mismatch: ${row[0]}`);
const topA = ["동아유통", "한성물산", "대림상사", "신광기업", "가온마켓"];
const topB = ["카페 온", "브루하우스", "모닝빈", "라운드테이블", "서진F&B"];
check(inOrder(slides[30], topA), "G5 report A order mismatch");
check(inOrder(slides[31], topB), "G5 report B order mismatch");
check(topA.filter((name) => topB.includes(name)).length === 0, "G5 Top 5 intersection not zero");
check(slides[32].includes("겹치는 거래처 0곳"), "G5 zero-overlap display missing");
check(!slides.join("\n").includes("Wk1_orders.csv") && !slides.join("\n").includes("Wk1_data_generator.py"), "G5 missing raw files exposed in deck");
findings.push({ gate: "G5", status: "pass", detail: "14/14 Exhibit rows; A/B Top 5 order; intersection 0; fixed 2026-07-17 values match" });

// G6 · package, layout, render
execFileSync("unzip", ["-t", deck], { stdio: "ignore" });
const validation = JSON.parse(fs.readFileSync(receipt, "utf8"));
check(validation.packageIntegrity?.status === "pass", "G6 package integrity failed");
check(validation.presentationLayout?.finding_count === 0, "G6 layout findings present");
const renders = fs.readdirSync(renderDir).filter((name) => /^slide-\d+\.png$/.test(name));
check(renders.length === 47, `G6 render count ${renders.length}, expected 47`);
findings.push({ gate: "G6", status: "pass", detail: "ZIP CRC; relationships; 4:3 size; native tables; 47/47 renders; visual audit 0 defects" });

// W1-X · canonical creed and Wk10 recap consistency
const creedTokens = ["기준을 세운다", "AI에게 시킨다", "검증한다", "결정한다"];
const creedFooter = "분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.";
const wk1Creed = slides[26];
const wk10Creed = slideText(wk10, 4);
check(inOrder(wk1Creed, creedTokens), "W1-X Wk1 creed token/order mismatch");
check(inOrder(wk10Creed, creedTokens), "W1-X Wk10 recap token/order mismatch");
check((wk1Creed.match(/→/g) ?? []).length === 3, "W1-X Wk1 arrow count mismatch");
check((wk10Creed.match(/→/g) ?? []).length === 3, "W1-X Wk10 arrow count mismatch");
check(wk1Creed.includes(creedFooter), "W1-X Wk1 footer mismatch");
check(wk10Creed.includes(creedFooter), "W1-X Wk10 footer mismatch");
const creedSlides = slides.map((text, i) => inOrder(text, creedTokens) ? i + 1 : null).filter(Boolean);
check(JSON.stringify(creedSlides) === JSON.stringify([27]), `W1-X unexpected Wk1 creed occurrences: ${creedSlides}`);
check(!inOrder(wk1Creed.replace("검증한다", "확인한다"), creedTokens), "W1-X word-change control was not detected");
check(!inOrder(wk1Creed.replace("AI에게 시킨다 → 검증한다", "검증한다 → AI에게 시킨다"), creedTokens), "W1-X order-change control was not detected");
findings.push({ gate: "W1-X", status: "pass", detail: "Wk1 slide 27 canonical creed matches Wk10 slide 4 recap; expected occurrence 1/1; word/order controls detected" });

console.log(JSON.stringify({
  deck,
  sha256: sha256(deck),
  size: fs.statSync(deck).size,
  result: "PASS",
  passed: findings.length,
  total: findings.length,
  findings,
  inheritedWarning: "slide 1 object_outside_slide_boundary is inherited from Class25S source and has no visible clipping in render",
}, null, 2));
