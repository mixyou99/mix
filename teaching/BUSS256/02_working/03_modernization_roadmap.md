# 03 — Modernization Roadmap (BUSS256)

*Change log: Jun 18, 2026 — created. Prioritized, sequenced plan derived from
`01_audit_report.md` + `02_benchmark_scan.md`. Recommendations only — nothing is rewritten or
finalized. Work proceeds module by module only after professor review.*

---

## ⬛ DECISIONS NEEDED FROM PROFESSOR (resolve these first; they gate the work)

| # | Decision | Why it blocks work | Recommended default |
|---|----------|--------------------|---------------------|
| **D-1** | **Canonical syllabus:** Updated (Oct 2025, Asg 2 in Wk 13) vs. Original (Aug 2025, Wk 11)? | Every downstream date/correction propagates from one source of truth. | **Updated (Oct 2025).** |
| **D-2** | **Assignment-weight split** within the 30% (group vs. individual). | Needed before any rubric/grading-automation work. | **15% / 15%.** |
| **D-3** | **AIAS level per assessment** — confirm: A1 = *No AI*; A2 = *AI Collaboration*; midterm/final = *No AI (secure)*; second-half exercises = *AI Collaboration*. | Sets the rule students see; gates the AI-ban inversion (P-1) and rubric design. | As listed (two-lane: secure checks + open AI work). |
| **D-4** | **Week-7 Data Visualization:** author a new first-class module, or formally fold viz into Data Management + exercises? | Determines whether this is a *content-creation* project or a *scoping* edit. | **Author a small standalone viz module** (it is also a prime AI-as-extension slot). |
| **D-5** | **Dataset-refresh appetite:** refresh the flagship App Store / Airbnb / mtcars / snsdata data to recent vintage, *or* keep and clearly date them as historical snapshots? | Large lever; affects nearly every module's exercises and the exams. | **Re-collect the App Store thread once; date the rest as historical.** A re-collection task can be scheduled. |
| **D-6** | **Python depth in the pilot:** keep "allowed alternative for assignments," or push a parallel track? | Affects exercise authoring scope. | **Keep as allowed alternative** (don't build a second track in the pilot). |
| **D-7** | **In-class groups:** 8–9 vs. 6–7 (open item from `00_initial_findings.md`). | Minor; needed for syllabus/script cleanup. | Professor to state; default leave as syllabus. |
| **D-8** | **Hygiene mandate:** may the TA, in `02_working/`, produce *cleaned copies* that (a) rename BUSS215/246/216 → BUSS256, (b) designate one canonical deck per seminar, (c) quarantine misfiled/old-week variants? Originals stay untouched. | Prevents teaching from a stale variant; needs explicit go-ahead since it reorganizes. | **Yes**, as drafts in `02_working/` for review. |
| **D-9** | **Student-PII boundary:** confirm the TA should never open/process the student records inside the source folder (scores, named submissions, peer evals, rosters) for any content task. | Standing privacy rule. | **Confirm — do not open.** |

*Nothing below is started until D-1…D-9 are answered.*

---

## Sequencing logic

Three ordering principles: **(i)** fix student-facing correctness errors first (cheap, high
trust); **(ii)** establish the AI **policy + two-lane structure** before authoring AI content,
so every module is built to one standard; **(iii)** then go module by module, front-loading the
highest-impact AI integration (text mining) and the one true content gap (visualization). Each
item is tagged to the six recurring tasks: **CU** content update · **AI** AI-topic integration ·
**AC** assignment creation · **LN** lecture-note authoring · **SC** script writing · **GA**
grading automation.

---

## PHASE 0 — Corrections & policy foundation *(do first; low effort, high trust)*

| ID | Action | Task | Source findings | Impact/Effort |
|----|--------|------|-----------------|---------------|
| **P-0a** | Correct the Seminar 1 **script** grading section (5 errors → 10/30/30/30, 4+ absences, 1 group + 1 individual, midterm exists) and remove the curved/non-curved contradiction. | SC | F-1, X-3 | H / L |
| **P-0b** | Author the **course AI policy + tool policy** (AI-required-and-disclosed; two-lane; AIAS level per assessment) as a syllabus insert + a Seminar 1 slide. | CU, AI | X-1, X-2, benchmark T3 | H / M |
| **P-0c** | Reconcile minor open inconsistencies from `00_initial_findings.md`: office hours, 15-vs-16 weeks, in-class group count (D-7), the algorithm worked-example arithmetic error. | CU | initial findings | M / L |
| **P-0d** | Hygiene drafts (pending **D-8**): canonical-deck list per seminar; renamed BUSS256 copies of the BUSS215/246/216 deliverables; quarantine list for misfiled/old-week variants. | CU | X-4, X-5, A-3 | M / M |

## PHASE 1 — Assessment redesign for AI *(the structural backbone; build before module AI content)*

| ID | Action | Task | Source | Impact/Effort |
|----|--------|------|--------|---------------|
| **P-1** | **Invert the AI bans** in A1 (reframe as a deliberate no-AI Lane-1 checkpoint), A2, and A2 "Common Mistakes." | AC, CU | X-2, F-18, S-15 | H / L |
| **P-2** | **Redesign A2 as the flagship AI-assisted assignment:** add prompt-log + AI-verification step + reflection; assign **unique data slices** per group; demote mechanical-compliance items to the floor, judgment to the graded ceiling. Reuse the existing peer-eval form. | AC, GA | S-17, benchmark T2 | H / M |
| **P-3** | **Build the AI-assisted rubric standard** (GRADING_POLICY §E) seeded by the 20/30/50 output/prompt-log/reflection split; reuse the A2 "Common Mistakes" interpretation rubric as the critique criteria. | GA | benchmark T2, GRADING_POLICY §B–E | H / M |
| **P-4** | **Add AI/verification + algorithm-literacy items to exams** — one final-exam question critiquing an AI analysis against a hand-computed foundation (reuse Q3b/Q4 format); one explicit algorithm-literacy item. | AC | S-18, S-19, X-6 | H / M |

## PHASE 2 — Module-by-module modernization *(after Phases 0–1)*

Ordered by impact. Each module: refresh currency → add the AI "direct → verify → interpret"
layer → author/refresh the lecture note → update the script.

| ID | Module | Key actions | Tasks | Impact/Effort |
|----|--------|-------------|-------|---------------|
| **M-1** | **Text mining (Wk 14–15)** ★ | Rebuild as a classical→LLM **compare-and-verify lab** on the existing corpora (app descriptions + 575 hotel reviews); migrate brittle `tm`/`gsub` code to **tidytext**; replace the ~2005–10 tool-roster slide; date the 2012 corpus or re-collect. Unique-slice the hotel reviews per group. | AI, CU, LN, SC | S-10…S-14, benchmark T5 | H / H |
| **M-2** | **Regression (Wk 10–11)** | Add AI direct-then-verify on `lm()`; fix the p-value misstatement; refresh `cars.csv`/`07192013Apps.csv` (per D-5). | AI, CU, LN | S-4, S-5, S-6 | H / M |
| **M-3** | **Association rules (Wk 9)** | Add AI-direct + hand-verify of support/confidence/lift → merchandising decision; optional date fix on `groceries`. | AI, LN | S-1, S-2, S-3 | H / M |
| **M-4** | **Clustering (Wk 12–13)** | Add AI-run-multiple-K + human verifies elbow and **labels/justifies** clusters (authenticity hook); note dataset vintage. | AI, LN | S-7, S-8, S-9 | H / M |
| **M-5** | **Week-7 Data Visualization (new)** | Author a first-class viz module (chart choice, grammar of graphics, "does this plot mislead?"); ideal AI-as-extension slot (AI makes the plot → human verifies). Pending **D-4**; seed from scattered ggplot snippets — `Old/` has no ready module (A-5). | LN, AI, CU | V-1, F-4 | M / M |
| **M-6** | **First-half foundations (Wk 1–5)** | Add the "AI as third literacy" slide (F-2); add an "AI-assisted analytics workflow" concept slide at Seminar 2 (F-7); add verification prompts to R exercises; refresh the App Store dataset + big-data stats; fix the Seminar 3 `<-` glyph and Posit/RStudio URLs. | CU, AI, LN | F-2,F-5,F-7,F-9,F-13,F-20 | M / M |

## PHASE 3 — Currency & maintenance *(continuous; pre-semester pass)*

| ID | Action | Task | Source |
|----|--------|------|--------|
| **P-5** | Run the `CURRENCY_LOG.md` pre-semester checklist; re-verify every stat + year, all links, AI tool/model names, and re-run AI workflow examples. | CU | CURRENCY_LOG §C |
| **P-6** | Keep all volatile AI content (model names, prompts, screenshots) in `_currency/`, referenced by placeholder in the stable notes. | CU | CURRENCY_LOG §B |
| **P-7** | ⚠ Re-confirm the small-N / link-volatile benchmark citations before they enter student-facing material. | CU | `02_benchmark_scan.md` caveat |

---

## Recommended order for the *next* task (after decisions)

1. **P-0a + P-0b** (script correction + AI policy) — fastest trust-builders, and the policy gates
   everything else.
2. **P-1 + P-2** (invert bans, redesign A2) — establishes the AI assessment pattern on the one
   assignment that already fits it.
3. **M-1 (text mining)** — highest-impact module and the clearest classical→LLM showcase.

Then proceed M-2 → M-6 with currency refresh folded into each.

## What this roadmap deliberately does **not** do
- It does not rewrite, finalize, or grade anything — all items produce drafts in `02_working/`
  for review, per the TA charter.
- It does not resolve the canonical-syllabus or AIAS-level questions — those are professor
  decisions (D-1, D-3).
- It does not touch student records (D-9).
