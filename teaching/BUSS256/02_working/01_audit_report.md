# 01 — Content Modernization Audit (BUSS256)

*Change log: Jun 18, 2026 — created. Module-by-module audit of the Fall 2025 BUSS256
materials (current set + `Old/` archive) against five lenses. Findings only; no source
file edited, nothing rewritten. Awaiting professor review before any module work.*

---

## How to read this

**Source (read-only, read in place):** `/Users/gunwoonglee/Dropbox/3_Teaching/2025/Fall/BUSS256_BigData`.
Nothing in that folder was edited or copied. Student records (score sheets, named
submissions, peer-evaluation forms, attendance rosters) were **not opened** — only their
existence is noted where relevant.

**Five lenses** (each finding is tagged): **(1)** redesign alignment (Decision B
scaffolding + two-literacies + AI-as-extension); **(2)** currency; **(3)** internal
consistency (canonical = GRADING_POLICY §A); **(4)** AI-coverage gaps; **(5)** assessment
alignment. **Impact / Effort** rated H/M/L.

**Finding IDs** carry a half prefix: `F` = first half (Wk 1–7 + A1), `S` = second half
(Wk 9–16 + A2 + exams), `A` = archive/`Old/`. Each finding cites file + location.

**One scope note resolved by the professor, one still open:**
- *Canonical syllabus (still flagged, not resolved):* two current versions exist —
  `BUSS256_Course Syllabus_2025Fall.docx` (Aug 2025) and `..._Updated.docx` (Oct 2025).
  They differ only in **Assignment 2 timing** (original: due Week 11; updated: Week 13).
  This audit uses the **Updated (Oct 2025)** as working-canonical but does **not** finalize
  that choice — see Decision D-1 in `03_modernization_roadmap.md`.

---

## TL;DR — the five highest-order findings

1. **The redesign is an addition, not a rebuild.** The course already teaches the exact
   thesis the AI redesign extends ("automation moves the human from execution to
   judgment/verification") and already assesses verification by hand (final-exam "find the
   errors in this R code"). What is missing is AI itself: there is **zero** AI/LLM content
   anywhere in the course, first half or second.
2. **Three materials actively forbid AI**, directly contradicting the confirmed
   "AI-required-and-disclosed" tool policy: A1, the A2 group assignment, and the A2 "Common
   Mistakes" handout.
3. **The Seminar 1 lecture script broadcasts the wrong grading scheme on five separate
   points** — the single most student-facing consistency error.
4. **Text mining (Wk 14–15) is the most outdated module** — 100% pre-LLM bag-of-words, with
   a tool roster from ~2005–2010 — and simultaneously the best-positioned for the redesign.
5. **Week 7 "Data Visualization" has no first-class module** anywhere (current set or
   `Old/`); it survives only as a rider on the data-management exercise.

---

# PART A — Cross-cutting findings

| ID | Finding | Lens | Impact/Effort |
|----|---------|------|---------------|
| X-1 | **No AI/LLM content anywhere** — no policy, slide, exercise, or exam item, in either half. The two-literacies framing (the redesign's natural home) sits ready and unused. | 1,4 | H / H |
| X-2 | **Active AI prohibitions** in A1 (`"DO NOT use any Gen AI applications!"`), A2 (`"DO NOT USE AI CHATBOTS"`), and A2 Common Mistakes (`"Do not copy ... from ... AI Chatbots"`). Contradicts the confirmed tool policy. | 1,3 | H / L |
| X-3 | **Seminar 1 script contradicts canonical grading 5×** (detail in F-1). | 3 | H / L |
| X-4 | **Course-code sprawl:** current deliverables carry stale codes — final exam = `BUSS246_*`, A2 sample/submissions = `BUSS215_*`, a `BUSS216_*` syllabus that is internally titled BUSS256. | 2,3 | M / L |
| X-5 | **Variant sprawl, no canonical marker:** 3–5 near-duplicate decks + multiple script versions per seminar (`_InClass`, `_Updated`, `_2`, `_25F`, `복사본`); some files keep old week-numbers (`Seminars 2-3_LRM`, `Seminars 4-5_Clustering`) and some are misfiled across folders. | 2,3 | M / M |
| X-6 | **Verification literacy already exists and is assessed** — final-exam Q3b ("identify errors/unnecessary lines in this R code") and Q4 (trace a numbered script's outputs). The redesign extends "debug my code" → "verify the AI's code" with low conceptual lift. *(Positive.)* | 1,5 | (asset) |
| X-7 | **Student PII co-mingled in the read-only source** (midterm scores `.xlsx`/`.htm`, named A2 submissions, peer-eval form, `Old/BUSS256.xlsx` attendance roster). Not a content defect, but a data-handling boundary the workspace must respect. | — | (governance) |

---

# PART B — First half (Weeks 1–7 + A1)

### Seminar 1 — Course Overview / Data & Algorithm Literacy (Wk 1)
*Files: `Seminar 1_Intro/Seminar 1_Lecture_Course Introduction.pdf/.pptx`, `.../Script/Script1_Lecture.docx`.*

- **F-1 [Lens 3 · H/L] The script broadcasts the wrong grading on five points.** In
  `Script1_Lecture.docx` §[22] "Grading Composition": "**five or more** absences = fail"
  (canon: 4+), "**three group assignments**" (canon: 1 group + 1 individual),
  "assignment = **50%**" (canon: 30%), "**no midterm exam**" (canon: midterm exists, Wk 8,
  30%), "final = **40%**" (canon: 30%). The Seminar 1 **slide deck and both syllabi are
  correct** — the error is isolated to the spoken script. The script also calls grading
  "non-curved" then gives a fixed 40/40/20 A/B/C split (internally inconsistent). Highest
  student-facing priority. *(Root cause traced in A-2: these are leftovers from the older
  BUSS453 multi-assignment design.)*
- **F-2 [Lens 1 · H/M, asset] The two-literacies opening is the ideal AI on-ramp.** The deck
  opens on **Data Literacy** and **Algorithm Literacy** (cited to Oeldorf-Hirsch 2023) — the
  exact assessment target — and already uses ChatGPT/Google Translate as a *then-vs-now*
  automation example (script [11]). One added slide ("directing and verifying AI is the
  third literacy that sits on top of these two") converts the existing structure into the
  redesign thesis. AI is named as an example but never as a course tool.
- **F-3 [Lens 2 · L/L] Minor aged figures.** McKinsey stat shows "52% of C-level" on the
  slide but "about 50%" in the script (cited "McKinsey 2024" — verify); "Amazon, Netflix,
  Facebook ... use R" is dated framing (these are Python/Spark-first now); `pic.pptx`
  (Mar 2020) is an orphan asset.
- **F-4 [Lens 4 · M/L] The "Course Outline" slide promises "Data Visualization, Weeks 6–7"**
  that no standalone module delivers (see V-1) — a deck-vs-syllabus expectation gap.

### Seminar 2 — Principles in Data Science + R install (Wk 1–2)
*Files: `Seminar 2_Data Science/Seminar 2_Lecture_Data Science.pdf/.ppt`, `.../Script/...docx`, `.../R_Install/`.*

- **F-5 [Lens 2 · M/M] Big-data scale stats are badly aged and undated.** "Drowning in Data"
  slide: "Google processes **20 PB**/day; Facebook **2.5 PB** + 15 TB/day; eBay **6.5 PB**."
  These are ~2012-era and off by 2–3 orders of magnitude, with no year label — a
  high-visibility miss for a course whose pitch is data scale.
- **F-6 [Lens 2 · L/L] Dead embedded media.** Script [26] admits a YouTube clip is already
  gone; deck links to `youtube.com/watch?v=ly1RSNRWmEs` ("What is Business Analytics?") plus
  old `go-gulf.com`/`webopedia.com` sources — link-rot risk.
- **F-7 [Lens 4 · M/M] Natural slot for an "AI-assisted analytics workflow" concept slide.**
  Seminar 2 defines the 8-step pipeline (Problem → Collection → Storage → Management →
  Analysis → Interpretation → Insight); the "human moves to judgment/verification" thesis
  maps cleanly onto it (where AI accelerates vs. where verification stays mandatory).
- **F-8 [Lens 1/5 · L/L, asset] R exercise is solid and correctly syntax-first** (values,
  classes, coercion, vectors, good inline comments). No "how would you check this output?"
  verification prompts yet — an easy Decision-B add.

### Seminar 3 — Data Structure: Matrix & Data Frame (Wk 2)
*Files: `Seminar 3_Data Structure/Seminar 3_R Tutorial_DataFrame.pdf` (Mar 2020), exercise sets.*

- **F-9 [Lens 2 · M/L] Tutorial PDF (Mar 2020) has a broken assignment-operator glyph** —
  renders `<-` as `< ̶` (e.g., `a < ̶ seq(1,6)`). A beginner copy-pasting will hit errors.
  Content otherwise sound; regenerate the PDF.
- **F-10 [Lens 5 · L/L, asset] Well-scaffolded** (separate Data-Frame vs. Functions tracks;
  `Excel_IFELSE.xlsx` bridges spreadsheet logic → R `ifelse`). The `ifelse`/function track is
  the conceptual seed for a later "have AI write this function, then verify it against the
  truth table" exercise.

### Seminar 4 — Overview of Data Analytics (Wk 3)
*Files: `Seminar 4_Data Analytics/Seminar 4_Lecture_Data Analytics_Updated.pdf` (Nov 2025) + variants; `admission.csv`.*

- **F-11 [Lens 2 · L/L, asset] Best-maintained currency in the first half** — the `_Updated`
  deck reframes churn as "In 2025, 30% of cell-phone customers left when contracts expired"
  (Korea Telecom). A model for the then-vs-now style to emulate elsewhere.
- **F-12 [Lens 1 · M/L] Enumerates the six techniques** (clustering, association,
  classification, regression, visualization, text-mining) — the course spine, each framed by
  "what question it answers" (data literacy). AI is never named as a technique that now
  generates/explains these models.

### Seminar 5 — Data Management I & II (Wk 4–5) *(folder also holds the "Seminar 6" = Data Mgmt II exercise)*
*Files: `Seminar 5_Data Management/Seminar 5_Lecture_Data_Management I_Updated.pdf` + variants; scripts; `Exercise/` airbnb data + `Seminar 6_R_airbnb_code.r`.*

- **F-13 [Lens 2 · H/M] The flagship App Store dataset is 12 years old.** Script
  (`Seminar 3 Data Managment Script_Updated 25F.docx`, ~line 101): "I collected this data in
  **July 2013**." Prices/ranks/categories are a 2013 snapshot, and this dataset recurs into
  exams — a meaningful modernization lever (refresh or clearly date as historical).
- **F-14 [Lens 1/5 · M/L, asset] Strongest data-literacy content in the course** — sources,
  primary vs. secondary data, variable types, sampling, correlation, missing values,
  outliers, normalization, log transforms, cleansing. Ideal foundation to layer AI
  verification onto.
- **F-15 [Lens 5 · M/L, asset] The airbnb exercise is the best first-half hands-on artifact.**
  `Seminar 6_R_airbnb_code.r`: merge → coerce → mean-impute → outlier removal → normalize →
  log → correlation → **ggplot2 histogram + ggcorrplot** → export. Real data, scaffolded
  Q1–Q9, clean solution. AI verification prompts bolt on directly.
- **F-16 [Lens 3 · L/L] Script confirms a Week-8 midterm** ("After the midterm we'll move on
  to Data Visualization") — corroborates canon and contradicts the Seminar 1 script's "no
  midterm" (reinforces F-1). The script file is itself **mislabeled "Seminar 3"** (X-5).

### A1 — Individual / In-Class Assignment (Wk 5)
*Files: `A1/BUSS256_Individual_Assignment_2025Fall.pdf/.pptx`, `A1/BUSS256_A1_Solutions.r` (+ `_수정.r`).*

- **F-17 [Lens 5 · M/L, asset] A well-constructed, auto-gradeable R-fluency test** — 5 tasks
  incl. a min-max `NORM()` function, truth-table `ifelse` logic, and the `admission.csv` task
  (rank-binning + conditional probability `P(admit=1 | GPA_Rank ≠ Mid)`). Task 4 genuinely
  tests data + algorithm literacy, not just syntax.
- **F-18 [Lens 1/5 · H/L] "Turn off Wi-Fi. DO NOT use any Gen AI applications!"** (see X-2).
  As a *first-half no-AI fluency checkpoint* this is **defensible under Decision B** — but the
  framing should be relabeled ("this is a deliberate no-AI checkpoint; later assignments will
  require AI use with disclosure") rather than reading as a blanket prohibition.
- **F-19 [Lens 3 · L/L] Two solution files** (`_Solutions.r`, `_Solutions_수정.r`) with no
  canonical marker — confirm which is the released key.

### Week 7 — Data Visualization GAP (verified)
- **V-1 [Lens 1/3/4 · M/M] No standalone visualization lecture or exercise exists** — confirmed
  by filesystem search across the current set **and** `Old/` (A-5). Visualization survives
  only as (a) a one-line technique slide in Seminar 4, (b) a conceptual script section in
  Seminar 5, and (c) hands-on ggplot practice **embedded** in the airbnb exercise. The
  syllabus does not list Week-7 viz, yet Seminar 1's outline slide promises it (F-4). For a
  2026/2027 redesign this is a real content gap **and** a prime AI-as-extension slot (AI makes
  the plot instantly → the human's job becomes choosing the right chart and verifying it does
  not mislead = pure data literacy).

### Tooling currency
- **F-20 [Lens 2 · L/L] R-install guides are current on version (R 4.5.1) but stale on
  branding** — they link `rstudio.com`; RStudio is now **Posit** (`posit.co`). Old URLs still
  redirect but are a future dead-link risk.

---

# PART C — Second half (Weeks 9–16 + A2 + exams)

### Seminar 7 — Association Rules (Wk 9)
*Files: `Seminar 7_Association Rules/Seminar 7_Lecture_Association Rules_Updated.pdf`, `Seminar 7_R_Exercise_Code.r`; `groceries.csv`, `Exercise/mba.csv`.*

- **S-1 [Lens 4 · H/M] No AI-assisted workflow.** Clean classical pipeline
  (`read.transactions` → `apriori(support=0.006, confidence=0.25)` → `sort(by="lift")` →
  `subset`). Best AI hook: student *directs* AI to write the `apriori` call, **verifies**
  support/confidence/lift by hand (already taught + tested), and **interprets** top-lift rules
  into a merchandising decision.
- **S-2 [Lens 2 · L/L] Synthetic date stamp** — slide 24 says the `groceries` data was "made
  in 2020," but it is the ~2000s Hahsler dataset. Cosmetic; flag only if "real dataset"
  currency matters.
- **S-3 [Lens 5 · M/L, asset] Final-exam Q2 tests the three metrics by hand** — ready-made
  anchor for grading *verification* of an AI's rules.

### Seminars 8–9 — Linear Regression + Basics in Statistics (Wk 10–11)
*Files: `Seminar 8-9 LRM/Seminars 8-9_Linear Regression Model.pdf`, `..._Basics in Statistics.pdf`, `Exercise/...Code.r`; `cars.csv`, `07192013Apps.csv`.*

- **S-4 [Lens 2 · M/M] Aged datasets.** Lecture worked example uses `cars.csv` = **`mtcars`**
  (1973–74 cars, ~50 yr old); the exercise uses `07192013Apps.csv` (App Store, **19 Jul
  2013**). Both work mathematically but clash with the "real datasets / then-vs-now" style.
- **S-5 [Lens 2 · L/L] p-value misstatement.** `Basics in Statistics.pdf` (~slide 45):
  "p = 0.03 → only a 3% chance the result is due to mistakes." This is the classic
  misinterpretation; worth tightening given verification is a course pillar.
- **S-6 [Lens 4 · H/M] No AI regression workflow.** The 8-step procedure (framing → … →
  interpretation → recommendation) is an ideal AI-orchestration scaffold — steps 1/7/8 are
  AI-resistant judgment. The interpretation rubric in A2's "Common Mistakes" is directly
  reusable as an AI-output-critique rubric.

### Seminars 10–11 — Clustering (Wk 12–13)
*Files: `Seminar 10-11 Clustering/Seminars 10-11_Clustering_Lecture.pdf`, `Exercise/...Code.r`; `snsdata.csv`, `protein.csv`.*

- **S-7 [Lens 4 · H/M] No AI workflow.** Classical k-means + Ward hclust + elbow on
  standardized SNS data. The lecture slide "no rule/theory determines optimal K — it depends
  on your purpose/domain knowledge" is a **perfect AI-resistant judgment anchor**: have AI run
  several K, student verifies the elbow/silhouette choice and labels the clusters.
- **S-8 [Lens 2 · L/M] Dataset currency.** `snsdata.csv` = 30k-teen 2006-era dataset;
  `protein.csv` = 1970s European protein consumption. Both dated vs. the App/Netflix/Airbnb
  thread.
- **S-9 [Lens 5 · M, asset] Cluster labeling is the best authenticity hook** — cannot be faked
  from raw AI output; final-exam Q4 already asks students to label and justify clusters.

### Seminar 12 — Text Mining (Wk 14–15) ★ highest priority
*Files: `Seminar 12_Text Mining/Seminar 12_Text_Mining_Lecture.pdf` (73 sl.), `..._R_Code.r`, `Exercise/...Task.pdf` + `...Solutions.r`; `App_Games_Desc.csv` (250 app descriptions, 2012), `Exercise/room_review.csv` (575 hotel reviews).*

- **S-10 [Lens 2/4 · H/H] Entire pipeline is pre-LLM bag-of-words, presented as current.**
  100% `tm`-package classical: `Corpus` → `tm_map` clean → `stemDocument` (SnowballC) →
  `DocumentTermMatrix` → frequency/word-cloud/`findAssocs` → k-means/hclust on terms →
  regression on cluster scores. **No embeddings, transformers, sentiment, zero-shot, semantic
  similarity, or topic models.** The "Text-mining Tools" slide lists **SAS Text Miner, IBM
  Intelligent Miner, ClearForest, Teragram, Autonomy, LexiQuest** — a ~2005–2010 roster,
  several defunct. This is the centerpiece of the redesign's "classical NLP now coexists with
  LLM" mandate and it is entirely absent.
- **S-11 [Lens 2 · M] "Currency theater."** Citations re-stamped to Oracle-2024 /
  Apple-2025, but the analyzed corpus is **250 app descriptions from Apr–Aug 2012** (example
  titles: Infinity Blade, Batman Arkham City). Framing claims currency the data does not have.
- **S-12 [Lens 1/4 · H/M, asset] The existing TM→Cluster→Regression spine is itself a perfect
  then-vs-now lesson.** An LLM can now do the Task-2 message-categorization via zero-shot, and
  aspect sentiment on the hotel reviews far better than `findAssocs`. Ideal redesign: run the
  classical pipeline, then an LLM on the **same** corpus, and have students compare, verify,
  and decide which is more defensible for the business question.
- **S-13 [Lens 5 · H, asset] The 575-review Holiday Inn exercise is the strongest AI-redesign
  candidate in the course** — review-comment analysis is overwhelmingly LLM-based in practice,
  and the corpus supports **unique data slices** (assign each group a different hotel/category)
  for authenticity grading.
- **S-14 [Lens 2 · L] Brittle code** — dozens of hardcoded `gsub("u2019"…)` unicode scrubs and
  the older `tm`/`Corpus(VectorSource())` idiom (modern work uses `tidytext`/`quanteda`).
  Itself a good "have AI clean this and verify it didn't over-strip" exercise.

### A2 — Group Assignment (Multiple Regression on App Store data)
*Files: `A2/BUSS256_Group Assignment.docx`, `A2/Sample/BUSS256_Common Mistakes in Assignment#2.pdf`, `A2/Sample/Tips for Group Assignment2.pdf`, `A2/BUSS256_Group_Assignment_Datasets/Paid{Books…Productivity}.csv`, `BUSS256_Group_Member_Evaluation.docx`.*

- **S-15 [Lens 1/3 · H/L] Explicit AI ban** (see X-2) — must invert to AI-required-and-disclosed.
- **S-16 [Lens 2 · M/M] Aged data + aged evidence.** Data "collected ... **1 Jan 2013**" (sample
  row: *Angry Birds Star Wars*); "Common Mistakes" instead references "**20 Jan 2013**" (internal
  date inconsistency); the Tips deck justifies hypotheses with **Statista Nov 2019** and
  2017/2019 ASO blog posts.
- **S-17 [Lens 5 · H/M, asset+gap] Structurally well-suited to AI-assisted assessment, with
  gaps.** *Already strong:* open-ended framing + hypothesis justification (AI-resistant);
  required R code + data submission (process artifact); group format with an existing A/B/C/D
  **peer-evaluation form** (matches canon). *Gaps:* every group gets the **same** 8 category
  CSVs → near-identical outputs (authenticity risk — assign unique category/time slices); **no
  prompt log, no AI-verification step, no reflection.** Mechanical-compliance items (file-naming
  penalty, mandated transforms/dummies) are exactly what AI auto-does — make them the floor,
  judgment the graded ceiling.

### Exams (content only — no score sheets / PII opened)
*Files: `20251020_Mid-term Exam Problem Sets_2025Fall.docx`; `BUSS246_Big_Data_Final Exam_2025F.docx`. (`BUSS246_Big_Data_Final Exam.docx` is password-encrypted and unreadable; `BUSS256 Final Exam Entry.docx` is a cover form only.)*

- **S-18 [Lens 1 · M] Algorithm literacy under-assessed.** The midterm tests "Data Literacy"
  by name (Q1a) but neither exam has an explicit algorithm-literacy or AI/verification item.
- **S-19 [Lens 4/5 · H/M, asset] The final exam is an ideal verification backbone, zero AI.**
  Q1 (define OLS/Ward/DTM in own words), Q2 (AR metrics by hand), Q3b ("identify errors/
  unnecessary lines in this R code"), Q4 (trace a numbered text-mining script, label clusters).
  Extend (don't replace): add one question where students critique an AI-generated analysis
  against the hand-computed foundation.
- **S-20 [Lens 3 · L/L, asset] Grading is consistent with canon** — the Updated syllabus shows
  10/30/30/30 and "FOUR or more absences → failure." No exam/syllabus contradiction found.

---

# PART D — `Old/` archive (reference; reuse, never edit in place)

- **A-1 [Lens 2] Course-code lineage.** `BIZ3008/DBA4003` (SKKU, ~2016) → `BUS453/BUSS453`
  "Data Management & Business Intelligence" (KUBS, ~2018–Spring 2020, COVID-era) →
  `BUSS215`/`BUSS246` (~2024) → **`BUSS256` (Fall 2025)**. Content (R; App Store + Airbnb data;
  regression/clustering/text-mining/trees) is continuous; only the code/packaging changed.
- **A-2 [Lens 3] Root cause of "three group assignments."** The legacy BUSS453 design had
  **A2 group regression + A3 (optional) individual text-mining + a final individual capstone
  project** (`Old/A2/`, `Old/A3/`, `Old/Individual Projects/`). The current course collapsed
  these to A1 + A2 — so the Seminar 1 script's "three assignments" (F-1) is stale reused
  boilerplate, not a typo. A `Old/20200310_Announcement.docx` likewise says "no group project
  and no mid-term exam" and "15-week" — more legacy text to keep out of the current materials.
- **A-3 [Lens 3] Mislabeled syllabus confirmed.** `0_Course Syllabus/BUSS216_Course
  Syllabus_2025Fall.docx` is internally titled **BUSS256** (Jul 2025). No real BUSS216 course
  exists — rename/dedupe.
- **A-4 [reuse] Datasets worth resurfacing** (read-only — copy, don't edit): `Old/Individual
  Projects/App_Data_Samples.zip` (155-country App Store charts, **2014**); `Old/Week
  6/Apps.csv` + `Apps_Ratings.csv` (mergeable, 2019); `Old/Individual Projects/Airbnb_2018.xlsx`
  (2,497×100). The BUSS453 capstone spec + `Project_Report_Sample_1.pdf` is a strong template
  if a capstone is ever reintroduced.
- **A-5 [Lens 4] `Old/` cannot fill the Week-7 viz gap.** No `Old/` deck contains "visualiz*";
  plotting appears only embedded in other topics' solution code. **Viz material must be
  authored largely from scratch** (V-1).
- **A-6 [PII] Records present, not opened:** `Old/[BUS453]05*Assignment/` (graded G01–G08
  submissions), `Old/A2/20200523_A2_Score_Announcement.docx`, `Old/BUSS256.xlsx` (attendance
  roster with names/IDs).

---

## Cross-references
- Currency items here are registered in `00_governance/CURRENCY_LOG.md` (updated Jun 18, 2026).
- External benchmarks that inform the fixes are in `02_working/02_benchmark_scan.md`.
- Prioritized, sequenced plan + professor decisions are in `02_working/03_modernization_roadmap.md`.
