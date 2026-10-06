# PRODUCTION PLAN — BUSS256 redeploy (PLAN ONLY — no artifacts built)

*Change log: Jun 18, 2026 — created. Sequenced production plan for professor approval. **Nothing is built here.**
Authority: TA_CHARTER §6 (produce once, after all drafts approved — condition now met); `_shared_library/
production/BW_PRODUCTION_STANDARD.md` + `PRODUCTION_BUILD_CHECKLIST.md`; STYLE_STANDARDS §9 (cross-platform);
finalized M-1…M-6 markdown; `M-6_currency_refresh_spec.md`; `RECONCILIATION_PREPARED_production_phase.md`; the
A2 redesign (P-1/P-2/P-3). **Pilot-first**: one document goes end-to-end through the full B&W pipeline before any
batching.*

*Change log: Jun 18, 2026 — APPROVED with answers: Q1 = 6 module docx; Q3 = solutions stay markdown; Q4 =
rebuild setup guide; Q5 = scripts stay markdown; Q7 = F-3/F-6 held; Q8 = pilot is M-3_note_W9-1. **Q2 = decks
built FRESH (Route A) but as a SEPARATE later round — Phase D is SKIPPED this run** (build notes/labs/setup/A2
first for March; fresh deck creation is its own later project). Q6 = ~45 students, 7–8 groups (profile in Phase
E, confirm N then).*
*Change log: Jun 18, 2026 — **PHASE C-CLEANUP COMPLETE** — stripped instructor asides from student editions: removed "(DRAFT)" from titles, the labs' "Code status" preambles, the M-2 "A2-consistency/Drift-risk" blockquote, and inline internal-path pointers (_currency/, *_llm.md, setup-guide filename); rephrased "UNTESTED" → kept the run-it instruction ("run on a machine with Ollama"). Corrected the ↔ normalization from "vs." to faithful "/ mix-up" (↔ meant confusion, not contrast). All 12 rebuilt: residual internal markers = 0, XML hex-scan PASS, paste-test PASS, run-instructions preserved. Source markdown kept intact (asides live there).*
*Change log: Jun 18, 2026 — **PHASE C COMPLETE** — batch-built 12 student-facing .docx (6 module notes, 5 labs, rebuilt setup guide) via a general md2docx converter through the validated B&W pipeline. All 12: blue-scrub applied, XML hex-scan PASS, XML validate OK, instructor metadata stripped, ASCII paste-test PASS on the 6 R-bearing docs. Fixed in-flight: tofu glyphs (❌/↔/ⓘ/−→safe), empty chapter titles (page-break logic), broken list continuation + per-list numbering restart. Output → 03_final/production/. Phase D (decks) deferred; Phase E (A2 slices) next.*
*Change log: Jun 18, 2026 — **PHASE A COMPLETE** (text/governance applied to source files; no documents built).
Governance DIFFs (GRADING_POLICY §A.1, COURSE_PROFILE §4) + P-0b reverts + P-2 edit applied; currency F-13
applied, F-9/F-20/F-5B locked, F-3/F-6 held; CURRENCY_LOG entry written. Awaiting GATE A review before Phase B
(pilot build).*

---

## 1. INVENTORY — every deliverable (source markdown → target artifact)

### Counts (finalized markdown in `02_working/`)
16 notes · 16 scripts · 5 labs · 5 solutions · 1 setup guide · 8 blueprints/specs (design records). M-6 has a
note+script (Wk1) but **no lab** (its student work is the currency-refreshed existing exercises + the
verification-seed prompts).

### (a) Lecture notes — STUDENT-FACING → `.docx` (16 sessions)
| Module | Notes | Target |
|---|---|---|
| M-1 (Wk14–15 text) | W14-1, W14-2, W15-1, W15-2 | 4 |
| M-2 (Wk10–11 regression) | W10-1, W10-2, W11-1, W11-2 | 4 |
| M-3 (Wk9 assoc) | W9-1, W9-2 | 2 |
| M-4 (Wk12–13 clustering) | W12-1, W12-2, W13-1, W13-2 | 4 |
| M-5 (Wk7 viz) | W7 | 1 |
| M-6 (Wk1 framing) | W1 three-literacies | 1 |
- **Decision needed [Q1]:** one `.docx` per session (16 files) **or** one consolidated `.docx` per module (6
  files, sessions as chapters)? *Recommend: one per module (6 docx) — fewer files, natural study unit, fewer
  pipeline runs.*

### (b) Slide decks — `.pptx` — **the biggest scope question [Q2]**
The notes/scripts are written against slides (`[click — slide: …]`). The modules **modernize existing decks**
(each note's source-file map points to an existing `Seminar N_Lecture_*.pdf/pptx`). Two routes:
- **Route A — build fresh `.pptx`** from the note content (clean, consistent, on-standard) — but ~16 decks, the
  largest single build.
- **Route B — refresh the existing decks** (apply currency fixes + the new framing/on-ramp text to the current
  slides), preserving the professor's existing design.
- *Recommend deciding per the professor's intent:* if the existing decks are good, **Route B** (targeted edits)
  is far cheaper and respects the assets (consistent with the M-6 "refresh not rebuild" philosophy). Route A only
  if a clean rebuild is wanted. **Flagged — do not assume.**
- **Note:** the `.docx` blue-scrub trap is **docx-js-specific**. `.pptx` built via the `pptx` skill (python-pptx)
  does **not** have that trap but needs its **own** B&W check (grayscale render + scan) — see §3.

### (c) Labs + solutions
| Lab (STUDENT-FACING → `.docx`) | Solution (INSTRUCTOR-ONLY) |
|---|---|
| M-1_compare_verify_lab | M-1_…_SOLUTION |
| M-2_regression_lab | M-2_…_SOLUTION |
| M-3_assocrules_lab | M-3_…_SOLUTION |
| M-4_clustering_lab | M-4_…_SOLUTION |
| M-5_visualization_lab | M-5_…_SOLUTION |
- Labs → 5 `.docx` (student-facing; contain copy-paste R — **paste-test gate**, see §3).
- Solutions → **decision [Q3]:** stay markdown (instructor-only) or produce as instructor `.docx`? *Recommend
  stay markdown* — instructor-only, frequently revised, no print-standard need.

### (d) Setup guide — `M-1_ollama_setup_guide.md` → **rebuild? [Q4]**
Produced once already, but **after** it: the model policy locked **qwen2.5-coder** (code) + **llama3.2** (text),
and **F-20** changed RStudio→**Posit**. **Recommend REBUILD** — it's student-facing, OS-dependent (Ollama
install on macOS+Windows), and now carries stale URLs/model names. Target: 1 `.docx`.

### (e) Student data files — A2 per-group CSV slices → see §5.

### (f) Governance / policy files — apply the prepared DIFFs (not docx; these are the repo governance files) → see §2.

### Instructor-only — NOT produced as documents (stay markdown)
- **16 scripts** [Q5] — spoken teaching scripts, instructor-only. *Recommend stay markdown* (you read them while
  teaching; producing 16 script docs is high-cost, low-value). Flagged.
- **8 blueprints + M-6 specs** — design records. Stay markdown (never were deliverables).
- **Audit / roadmap / reconciliation / currency-spec files** — working records. Stay markdown.

**Student-facing build total (recommended path):** 6 module note-docx + 5 lab-docx + 1 setup-guide-docx +
decks (Route B edits) + A2 CSVs = the print/B&W-verified set. Everything else stays markdown.

---

## 2. WHAT GETS APPLIED DURING PRODUCTION (prepared text changes)

### 2a. Currency fixes (`M-6_currency_refresh_spec.md`) — apply to the relevant source decks/labs
| Item | Apply? | Where |
|---|---|---|
| **F-9** broken `<-` glyph **+ smart quotes** | ✅ **HIGHEST PRIORITY** | Seminar-3 R tutorial → regenerate ASCII; **paste-test every code line in R** |
| **F-20** rstudio.com → Posit | ✅ | install/setup guide + any deck mentioning RStudio download |
| **F-13** App Store July-2013 historical relabel | ✅ | data-management materials + A2 data intro |
| **F-5 Option B** (date the 2012 figures, no new number) | ✅ | Seminar-2 "Drowning in Data" slide |
| **F-3** McKinsey 52% | ⛔ **HOLD for professor** | not applied |
| **F-6** dead YouTube links | ⛔ **HOLD for professor** | not applied |

### 2b. Governance + P-series (`RECONCILIATION_PREPARED_production_phase.md`)
- **GRADING_POLICY §A.1 DIFF 1** (A1 revert + Wk2–3 reframe) — governance file.
- **COURSE_PROFILE §4 DIFF 2** (Wks 2–3 AI-free) — governance file.
- **P-0b reverts (i)–(iv)** in `03_final/` (A1 → No-AI Week-5 hand-fluency).
- **P-2 L143 edit** in `02_working/` (drop "A1's job" clause).

### 2c. Sequencing — governance/policy applies BEFORE doc production
**Governance and policy text are separate files from the deliverable docs.** Apply them **first** (Phase A), so
that any doc referencing policy (e.g., the syllabus insert, A1/A2 framing in labs) is built against the corrected
governance. Order: **§A.1 + §4 DIFFs → P-0b/P-2 reverts → CURRENCY_LOG/change-log entry → then build docs.**

---

## 3. THE B&W BUILD PIPELINE (exact mechanical steps, per `PRODUCTION_BUILD_CHECKLIST.md`)

**Per `.docx` (docx-js):**
1. **Generate** raw `.docx` from the build script (docx-js, local node install).
2. **Unpack** (`unzip` into a working dir).
3. **Scrub blue → black** in `word/styles.xml` — the docx-js trap:
   `sed -i 's/2E74B5/000000/g; s/1F4D78/000000/g; s/0563C1/000000/g' word/styles.xml`
4. **Repack** (`zip -r -X`), copy to `03_final/production/` (never touch the source original).
5. **Verify STEP 1 — grayscale render:** `soffice --headless --convert-to pdf` → `pdftoppm -gray` → inspect every
   table, every distinction that could rely on color, all `[PROPOSED]`/code blocks.
6. **Verify STEP 2 — XML hex-code scan (FINAL GATE):** scan all `.xml` for `w:fill|w:color|w:val` hex; **must
   report ONLY grayscale codes (R≈G≈B).** Any non-grayscale → back to step 3. *(Visual pass is necessary but not
   sufficient — blue ≈ dark gray to the eye.)*
7. **Invariants:** US Letter, 1″ margins, Arial; tables `WidthType.DXA`; `ShadingType.CLEAR`; bullets via
   `LevelFormat.BULLET`; XML parses.

**Per `.pptx` (no docx-js blue trap, but still needs B&W proof):** build via the `pptx` skill → grayscale render
(export to PDF/images) → **same XML hex-scan principle** (scan slide XML for non-grayscale fills/colors) → confirm
meaning survives B&W. *(The blue-scrub `sed` is docx-only; pptx gets its own color audit.)*

**Extra gate for code-bearing docs (labs, setup guide, the F-9 tutorial):** **paste-test every R code block in a
real R console** before sign-off — catches the F-9 class of copy-paste breakage (`<-`, smart quotes).

**Batching without losing per-doc verification:** a build **script** generates all docs of a type, but **STEP 2
(the XML scan) runs per file and must pass for each** — batching the *build*, never the *gate*. A small driver
loops the scan over every output and prints a per-file PASS/FAIL table; **no file is "done" until its own scan is
green.** The pilot (Phase B) proves the per-doc steps before any loop runs.

---

## 4. CROSS-PLATFORM (STYLE_STANDARDS §9)
| Deliverable | OS-dependent content (needs macOS **and** Windows) | OS-independent (write once) |
|---|---|---|
| **Setup guide** (rebuild) | Ollama install, model pull, starting the server, terminal vs Command Prompt, file paths | what the models are; why local AI |
| **Labs** (all 5) | the `setwd()` / data-load step (`_shared_library/snippets/setwd_load_data.md` already dual-OS) | all R analysis code, tasks, rubrics |
| **F-9 tutorial / any data-load** | working-directory + file-path cues both OS | the R code itself |
| **Notes, solutions, decks** (content) | — (mostly OS-independent) | concepts, code, tables, rubrics |
- **Rule:** OS-dependent steps list **both** macOS + Windows; OS-independent content stays single. The dual-OS
  load snippet already exists and is referenced by every lab — reuse it, don't re-author.

---

## 5. A2 DATA SLICES — per-group App Store category CSVs
- **Source:** the App Store flagship dataset (`07192013Apps.csv`) — relabeled historical (F-13).
- **Design (P-2, Scheme 1):** each group gets a **unique data slice = one App Store category** (so no two groups
  share the same data, enabling open framing + preventing copy), and runs the A2 pipeline (`−log(Rank)`,
  `log(x+1)`, dummies-with-baseline regression) on it.
- **Plan to generate:**
  1. **Profile the dataset** — list categories, row counts per category, the variables the A2 gates need.
  2. **Select N category slices** (N = number of groups — **[Q6]**) that each have **enough rows** and **variation**
     to support a regression (rule of thumb: comfortably > 100 rows + a usable price/rank/feature spread).
  3. **Cut one CSV per group**, named neutrally (`A2_group01_<category>.csv`, …).
  4. **Verify each slice supports gates G1–G8** — a check script confirms, per slice: the required columns exist
     and are non-degenerate; price/rank present for `−log(Rank)` + `log(x+1)`; ≥1 categorical for a dummy;
     enough rows for a stable fit; no all-missing/constant column that would break a gate. Output: a per-slice
     **G1–G8 readiness table** (PASS/FAIL), so no group gets unworkable data.
  5. **Hold-back check:** confirm slices are genuinely disjoint (no shared rows) and comparable in difficulty.
- **[Q6] Need the group count** (class size / groups). Without it I can profile categories and *propose* a slice
  count, but the final cut needs the number. *Recommend: profile first, then you confirm N from the roster.*

---

## 6. SUGGESTED PHASE ORDER + APPROVAL GATES
*Each phase ends at a GATE — I stop, you review, you approve before the next.*

- **Phase A — Apply text/governance (no docx yet).** Governance DIFFs (§A.1, §4) → P-0b/P-2 reverts → currency
  fixes F-9/F-20/F-13/F-5B into the source markdown/decks (F-3/F-6 held) → CURRENCY_LOG entry.
  **GATE A:** you confirm the applied text before anything is built.
- **Phase B — PILOT one document end-to-end.** Build **one note** through the *entire* B&W pipeline (§3):
  docx-js → blue-scrub → grayscale render → XML scan → (paste-test if it has code). *Recommended pilot:*
  **M-3_note_W9-1** (has tables, code, a worked example, and the reconciled on-ramp callback — broad coverage) or
  a lab if you'd rather stress-test code first. **GATE B:** you eyeball the pilot PDF + the scan result and
  confirm the pipeline before we batch. *(This is the key risk-reducer — we catch pipeline issues on 1 doc.)*
- **Phase C — Batch by type.** Notes (6 module docx or 16 session docx per Q1) → labs (5) → setup guide (1) →
  solutions if Q3=docx. Per-file XML scan PASS table. **GATE C:** review the PASS table + spot-check.
- **Phase D — Decks** — **SKIPPED this run (Q2).** Decks will be built **fresh (Route A)** as a **separate later
  project** after the core student materials ship for March. Not part of this production run.
- **Phase E — A2 data slices** (§5): profile → cut N slices → G1–G8 readiness table. **GATE E.**
- **Phase F — Final sweep.** Whole-set XML-scan re-run; cross-platform check on OS-dependent docs; confirm F-3/F-6
  still flagged-open; update PRODUCTION_LOG. **GATE F → done.**

*Rationale for the order: text/governance first (so docs build on correct content); pilot before batch (catch
pipeline bugs once); decks after docs (largest/most-uncertain scope, isolated); data slices need the group count;
final sweep proves the whole set.*

---

## 7. OPEN QUESTIONS (need your decision before/within the relevant phase)
- **[Q1] Notes packaging:** one `.docx` per **module** (6 files, recommended) or per **session** (16 files)?
- **[Q2] Decks — the big one:** **Route A** (build fresh `.pptx` from notes) or **Route B** (refresh existing
  decks with currency + new framing, recommended if the current decks are good)? Or defer decks entirely for now?
- **[Q3] Solutions:** stay markdown (instructor-only, recommended) or produce instructor `.docx`?
- **[Q4] Setup guide:** rebuild for qwen/llama + Posit updates? (recommend **yes**.)
- **[Q5] Scripts:** stay markdown (instructor-only, recommended) or produce as docs?
- **[Q6] A2 groups:** how many groups / class size? (I can profile categories first and propose N.)
- **[Q7] Confirm holds:** F-3 (McKinsey) and F-6 (YouTube) stay **held/unapplied** in this production run? (recommend yes.)
- **[Q8] Pilot pick:** M-3_note_W9-1 as the pilot, or a different note/lab?

**No artifact is built until you approve this plan and the pilot-first approach.** On approval we execute Phase A,
stop at GATE A, and proceed phase by phase.
