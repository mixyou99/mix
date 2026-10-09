# BUSS256 M6-R5 — Seminar 5 Data Management I: Content Spec v1

**Status: M6-R5 CONTENT SPEC v1 = DRAFT — PROJECT-LEAD REVIEW REQUIRED**

*Created 2026-10-09. Content architecture only. No PPTX, no build spec, no visual design.*

## 1. Authority and scope

- **Authority record:** `docs/rounds/BUSS256_M6_R5_SOURCE_AUTHORITY_RESOLUTION.md`
- **Source:** `Seminar 5_Lecture_Data_Management I_Updated.pptx`, the editable source paired with the distributed canonical `_Updated.pdf`.
  - SHA-256 `5d0ba636…80ff5` (PPTX)
  - SHA-256 `f63b458e…59ee` (PDF)
- **Safe lecture authority:** PPTX slides **3–37 and 40** (36 slides). This spec cites source slides by PPTX number.
- **Excluded and not used:**
  - slide 1 (2025 schedule), slide 2 (2025 assessment score statistics), slide 38 ("Sample Questions"), slide 39 (image after Sample Questions);
  - InClass variants, `Exercise/`, scripts, and exam/review files;
  - `admission.csv`, the held import/export and functions exercises, and package material.
- **Other inputs, all safe governed records:**
  - `M-6_foundations_blueprint.md` (row D, §6 dependency map)
  - `01_audit_report.md` (F-13, F-14)
  - `M-6_currency_refresh_spec.md` (F-13 relabel)
  - `M-6_verification_seed_spec.md` (Wk 4 verification-mindset intent)
  - closed M6-R1, M6-R2, M6-R3, and M6-R4A records
- **Format:** source is 4:3. The 2027 target is 16:9; this is recorded only, and no build spec exists yet.

## 2. M6-R5 / M6-R4B / assessment boundary

| In M6-R5 (lecture) | Not in M6-R5 |
|---|---|
| Concept-level data understanding, summary, quality, and preparation, from safe slides 3–37 and 40 | `admission.csv`; import/export instruction; user-defined functions; package install/library; exercise code or filenames; R syntax demonstrations |
| Historical App Store figures already on safe slides, labeled as a 2013 snapshot | Re-collecting or refreshing the dataset (D-5); new empirical claims |
| Skills the lecture already teaches | Using exam, review, or sample-question content to shape the lecture (HANDOFF-ASSESS-01 = DEFERRED) |

- The lecture must stay teachable without any held item.
- Blueprint row D's "import/export" and "descriptive-stats functions" are **not present** in the canonical lecture. They stay with the separately governed exercise track (HOLD ledger item 3, placement decision pending).
- **Assessment-preservation rule:** no substantive historical lecture skill is deleted in this draft. Deletions apply only to section-header slides and duplicated recap material. Each underlying skill is retained elsewhere and traced in §6.

## 3. Pedagogical role

**Guiding question:** *What does it mean to prepare and understand data before applying an analytical technique?*

**Bridge:**
- **M6-R3** gave students the containers: data frames, rows as observations, columns as variables.
- **M6-R4A** gave the purpose: matching a technique to a business question.
- **M6-R5** covers what has to be true of the data in between: understood, summarized, cleaned, represented, and prepared.
- **Later modules** apply analytics to prepared data:
  - M-2 regression uses correlation and log transforms.
  - M-4 clustering uses scaling and the distance intuition.
  - M-5 visualization uses distributions and plots.

**Style (established BUSS256 pedagogy):**
- Concept and judgment first.
- Low coding (none on slides).
- Introductory mathematics only (define mean, SD, correlation; no derivations).
- Business interpretation on every technical idea.
- Students' reasoning is preserved ("what would you check?").
- **No AI integration here.** Wk 4 precedes the Wk 7 on-ramp, under PC-3 and RESOLVED-M5-01.
- The verification mindset is seeded as a human habit only: for example, "Does this correlation make sense?" (`M-6_verification_seed_spec.md`, Wk 4).

## 4. 2027 learning objectives (draft)

Students will be able to:

1. Distinguish data sources and primary vs. secondary data, and describe data as records (observations) and attributes (variables) in a table.
2. Classify variables (numeric vs. categorical; discrete vs. continuous; ordered vs. unordered; binary) and explain why representativeness matters more than raw sample size.
3. Summarize a numeric variable by center (mean, median) and spread (range, variance, standard deviation), and read a summary table.
4. Describe a distribution with a histogram and an association with a correlation coefficient, without treating correlation as causation.
5. Identify duplicates, missing values, and outliers, and justify a context-appropriate treatment.
6. Explain why and how variables are prepared: standardization, min-max scaling, log transformation (preview), binning, indicator (dummy) coding, and category reduction.
7. Distinguish observations, variables, missingness, and dimensionality, and explain at an intuitive level why many variables can create problems.

## 5. Topic spine (refined)

| Block | 2027 content | Source slides |
|---|---|---|
| **0. Open** | Title; the guiding question and the bridge from M6-R3 and M6-R4A; roadmap | 3, 4 |
| **A. What counts as usable data?** | Data sources and business uses; primary vs. secondary; record and transaction data; one table, rows = observations, columns = variables | 6, 40, 7, 8, 9 |
| **B. Understanding variables and samples** | Variable types; sample vs. population and representativeness; how many observations and variables (qualified) | 10, 11, 12 |
| **C. Summarizing data** | The data-management workflow; center; why center is not enough; spread; reading a summary table (historical); distributions and histograms; correlation; correlation matrix and matrix plot | 14, 15, 16, 17, 18, 19, 22, 23, 20, 21, 24 |
| **D. Data quality** | Quality problems; duplicates; missing values (meaning of NA vs. 0); handling missing values; detecting outliers; judging and handling outliers | 25, 26, 27, 28, 29, 30 |
| **E. Preparing variables** | Why scale matters (historical example); standardization and min-max; log (preview); binning and binary conversion; indicator coding vs. category codes; reducing categories | 32, 34, 33, 35, 36 |
| **F. Dimensionality** | Observations vs. variables vs. missingness; dimensionality; why many variables create problems | 37 (+11) |
| **G. Close** | Understand → clean → represent → prepare, before modeling | 31 (recap repurposed) |

**Refinements to the provisional spine:**
- Sampling moves into B, next to variables, because "which data and how much" is one judgment.
- "Measurement / representation choices" is carried in B (variable types) and E (coding).
- The workflow overview (14) opens C, so students see summarize → clean → prepare before the details.

## 6. Source-slide decision matrix (all safe slides 3–37, 40)

| SOURCE_SLIDE | SOURCE_TOPIC | DECISION | RATIONALE | 2027_DESTINATION | DEPENDENCY / HANDOFF |
|---|---|---|---|---|---|
| 3 | Title: Data Management I / Seminar 5 | REVISE | 2027 title, course and term identity; same presenter block convention as M6-R4A. | 0-1 Title | — |
| 4 | Content agenda (9 items) | REVISE | Replace with the 2027 roadmap (blocks A–G) and the guiding question; add the bridge from M6-R3 and M6-R4A. | 0-2 Roadmap / bridge | Overlap M6-R3, M6-R4A (RECALL) |
| 5 | Section header "Basics in Data" | DELETE | Section header only; no content. Block labels are carried by the roadmap and section strips (a build decision). | — | — |
| 6 | Potentially useful data (POS, credit card, claims, web logs, email, survey) | MERGE | Same purpose as 40; one slide on sources and their business uses. Keep the use cases (generic, textbook-level). | A-1 Data sources and uses | Overlap M6-R1 (RECALL, structured/unstructured "Variety") |
| 7 | Data type by purpose: primary vs. secondary | KEEP-BUT-CLARIFY | Core distinction. The example "using mobile app data for finding key success factors" becomes a labeled historical secondary-data example. | A-2 Primary vs. secondary | App Store mention, §11 |
| 8 | Data structure: record and transaction data | MERGE | Combine with 9 into one "records, transactions, and tables" slide. Transaction data bridges to the association technique (M6-R4A). | A-3 Records and tables | Overlap M6-R4A association (RECALL) |
| 9 | Organizing data for analytics (single table; rows = entities; columns = attributes); "Sales Ranks on Mobile Apps" image | MERGE | Rows and columns were already taught in M6-R3. Brief recall plus the new idea: analysis needs one tidy table with one row per entity. The image becomes a labeled historical snapshot. | A-3 Records and tables | Overlap M6-R3 (RECALL / REMOVE-DUPLICATION); §11 |
| 10 | Types of variables (numeric vs. string; discrete vs. continuous; categorical ordered vs. unordered; binary) | KEEP-BUT-CLARIFY | Core and assessment-relevant. Clarify that zip codes are numeric-looking but categorical (a representation choice) and that ordered categories carry rank, not distance. | B-1 Variable types | Overlap M6-R4A slide 11, category codes (EXTEND) |
| 11 | Sampling approaches; how many variables; how many observations ("More is always better!"); 15 × 1 vs. 1 × 15 illustration | REVISE | Fix the typos "smapling" and "obervations". Apply correction E (§7). Keep the representativeness definition and the "#observations > #variables" rule of thumb as a heuristic. Split: sampling goes to B-2; observations/variables goes to B-3 and feeds F. | B-2 Samples; B-3 How much data | Correction E; feeds F |
| 12 | Sample size and time (8000/2000/500 points from a population of 10,000) | KEEP-BUT-CLARIFY | Shows the precision vs. cost trade-off. The figure's provenance must be established (VX-R5-02); otherwise redraw as a course-owned illustration. | B-2 Samples | VX-R5-02 |
| 13 | Section header "Data Management" | DELETE | Section header only. | — | — |
| 14 | Data management overview (summary / cleansing / pre-processing) | KEEP | The organizing map for blocks C–E; reuse it as the close template. | C-1 Workflow | — |
| 15 | Data summary: common metrics | MERGE | List-only slide; fold into center and spread. | C-2 Center | — |
| 16 | Mean vs. median; mean is sensitive to outliers | KEEP-BUT-CLARIFY | Fix the typo "aloing". Add one business reading (for example, typical price vs. average price). | C-2 Center | Links to D outliers |
| 17 | Mean and median not enough (A, B, C each with mean and median 7) | KEEP | Strong, assessment-relevant contrast; motivates spread. | C-3 Why center is not enough | — |
| 18 | Range and variance / SD | KEEP-BUT-CLARIFY | Keep definitions and the range-sensitivity example. State that SD is in the variable's units (interpretability). | C-4 Spread | — |
| 19 | Statistical summary example (App Store: Rank, Price, Screenshots, Rating_Score, Rating_Volume; 1,200 obs) | KEEP-BUT-CLARIFY | Teaches reading a summary table (#obs, mean, SD, min, max). Label **HISTORICAL DATA SNAPSHOT — JULY 2013**. Point out the Screenshots 1,180 vs. 1,200 count as a missing-value cue. | C-5 Reading a summary table | §11; VX-R5-03; forward link to D |
| 20 | Correlation analysis (dependence; Pearson r in −1 to +1; covariance / (SD × SD)); "Source: www.mathisfun.com, Sep 5, 2023" | REVISE | Keep the Pearson definition and range at introductory level. Correlation is a measure of linear association, **not causation** (recall M6-R4A). Citation is pending VX-R5-01; remove it if not authoritative (textbook-level definition needs none). | C-7 Correlation | VX-R5-01; overlap M6-R4A (RECALL) |
| 21 | Correlation matrix for mobile-app data | KEEP-BUT-CLARIFY | Teaches reading a matrix (diagonal = 1; symmetry; weak correlations). Historical label. Interpret only as association in the 2013 snapshot. | C-8 Correlation matrix | §11; VX-R5-03 |
| 22 | Visualization techniques; histogram definition ("commonly used for categorical variables") | REVISE | Apply correction A (§7). Keep the bins/bar-height explanation and "shape depends on bin count". Brief link to M6-R4A data visualization; M-5 owns full visualization. | C-6 Distributions | Correction A; overlap M6-R4A visualization (RECALL); M-5 |
| 23 | Histogram example: app rating scores 0–5 | KEEP-BUT-CLARIFY | A valid numeric-distribution example. Historical label. Ask students what the shape suggests. | C-6 Distributions | §11; VX-R5-03 |
| 24 | Matrix plot; variable selection; "exactly correlated" | REVISE | Apply correction D (§7). Frame as a screening aid for redundant variables, not proof. Historical label. | C-8 Correlation matrix | Correction D; §11 |
| 25 | Data quality problems (duplicates, outliers, missing) | KEEP | Block D opener; keep the "what can we do?" prompt. | D-1 Quality problems | — |
| 26 | Duplicate data (merging sources; app price duplicates; keep newest / merge / delete) | KEEP-BUT-CLARIFY | Clarify that "keep newest" depends on a reliable timestamp and is one option among several; the choice is a documented judgment. Generic app-price example, no dataset claim. | D-2 Duplicates | — |
| 27 | Missing values: reasons; "0" vs. missing (credit-card example); NA; "most algorithms will not process records with missing values" | KEEP-BUT-CLARIFY | Strong, assessment-relevant reasoning. Soften "most algorithms" to "many methods drop or cannot use incomplete records unless they are handled". | D-3 Missing values | R4B: no R `NA` syntax demonstration |
| 28 | Handling missing values: imputation by similar cases or mean; omit records; drop variables (90% rule); credit-card loan-review example | KEEP-BUT-CLARIFY | Keep all three options. Add the trade-off that mean imputation keeps rows but can understate variability. Present 90% as a rule of thumb. | D-4 Handling missing values | — |
| 29 | Outliers; ±3 SD rule; influence on models | REVISE | Fix the typo "outliner". Present 3 SD as a heuristic (most useful for roughly symmetric distributions), not a definition. Keep "deliberately vague" framing and model influence. | D-5 Detecting outliers | Links to C-2 / C-4 |
| 30 | Handling outliers (domain knowledge; zero-priced paid apps; $100 apps; 50 °C Korea vs. Libya) | KEEP | Excellent judgment-first content: error vs. truly extreme. The app examples are generic, so a historical label is optional. | D-6 Judging outliers | — |
| 31 | Review: Data Management (recap of 14) | MERGE | Mid-deck duplicate of 14. Its role becomes the close (G). | G-1 Close | — |
| 32 | Data pre-processing intro (normalization, transformation, dimensionality reduction) | MERGE | A short framing slide; fold into E-1. | E-1 Why scale matters | — |
| 33 | Normalization: z-score ("x ~ N(0,1)"), min-max, log in regression; "Mean 5.5, SD 3.03" example | REVISE | Apply correction B (§7). Keep z-score and min-max. Log is a conceptual preview only (compresses right-skewed scales); M-2 owns its use. | E-2 Standardization and scaling | Correction B; M-2 forward link |
| 34 | Normalization example: Rating_Volume dominates sales-rank analysis (App Store table) | KEEP-BUT-CLARIFY | The best motivation for scaling. Historical label. Connect to M6-R4A "distance depends on representation" (EXTEND). | E-1 Why scale matters | §11; overlap M6-R4A slide 12 (EXTEND) |
| 35 | Variable transformation: continuous → binary (0.5 threshold); continuous → categorical (income bins); categorical → dummies; Low=1/Mid=2/High=3 | REVISE | Fix the typo "Continues". Split into E-3 binning / binary and E-4 indicator coding. State that 1/2/3 codes are labels, not distances (recall M6-R4A). The threshold is a chosen cut-off and loses information. | E-3 Binning; E-4 Indicator coding | Overlap M6-R4A slide 11 (RECALL / EXTEND) |
| 36 | Reducing categories; m categories → m−1 dummies; combine close categories | KEEP-BUT-CLARIFY | Reconcile with 35, which shows 3 indicators for 3 categories: one indicator per category describes the data, while models such as regression use m−1 with a reference category. Category reduction is a judgment (business meaning, small groups). | E-5 Reducing categories | M-2 forward link |
| 37 | Curse of dimensionality ("#rows and #columns"; "sparse (#missing values)"); distance less meaningful | REVISE | Apply correction C (§7). Keep the distance intuition, which bridges to M-4 clustering and M6-R4A distance. | F-1 Dimensionality | Correction C; M-4 forward link |
| 40 | Data sources: logs, survey/interview, customer service calls, documents | MERGE | Same purpose as 6; merge into A-1. | A-1 Data sources and uses | Overlap M6-R1 (RECALL) |

**Coverage:** 36/36 safe slides mapped.
- KEEP 4 (14, 17, 25, 30)
- KEEP-BUT-CLARIFY 13 (7, 10, 12, 16, 18, 19, 21, 23, 26, 27, 28, 34, 36)
- REVISE 10 (3, 4, 11, 20, 22, 24, 29, 33, 35, 37)
- MERGE 7 (6, 8, 9, 15, 31, 32, 40)
- DELETE 2 (5, 13; section headers only)
- DEFER 0

## 7. Required factual corrections

| ID | Source | Problem | 2027 rule |
|---|---|---|---|
| **A. Histogram** | 22 | Says histograms are "commonly used for categorical variables". | Histograms show the **distribution of a quantitative (numeric) variable**, by grouping values into bins. For a categorical variable, show **counts per category** with a bar-type display (conceptual only). The bin count changes the histogram's shape. |
| **B. Standardization** | 33 | Implies standardized data are N(0,1). | z-standardization (subtract the mean, divide by the SD) **centers and scales** a variable to mean 0 and SD 1. It **does not make the distribution normal**; its shape is unchanged. Min-max rescales to 0–1. |
| **C. Dimensionality** | 37 (also 11) | Mixes dimensionality with rows and missing values. | Keep four terms distinct: **observations** (rows); **variables / features** (columns); **missingness** (absent values); **dimensionality** (the number of variables or features in the representation). As dimensionality grows relative to the observations, data become sparse in the space they occupy, and distance-based reasoning becomes less informative. This is an introductory intuition. Sparsity is not the same as missing values. |
| **D. Correlation wording** | 24 | "exactly correlated". | Use **perfect correlation** (r = +1 or r = −1) for exact linear relationships. A **high |r|** signals strong linear association and possible redundancy for screening. It does not mean the variables are identical, and it does not mean causation. |
| **E. Sample size** | 11 | "More is always better!" | More **relevant, representative, high-quality** data can help, but **more observations are not automatically better**. A large biased sample stays biased, poor measurement does not improve with volume, and collecting and managing data has a cost. Adequacy also depends on the technique and on the number of variables. |

**Typos corrected:**
- smapling → sampling (11)
- obervations → observations (11)
- aloing → along (16)
- outliner → outlier (29)
- Continues → Continuous (35)

Normalize "Rating_volume" and "Rating_Volume" to one spelling (19, 34) when the build is specified.

## 8. Overlap management

| Prior module | Overlapping idea | Where in M6-R5 | Class | Treatment |
|---|---|---|---|---|
| M6-R1 | Variety: structured vs. unstructured; "data types and data management are covered later" | A-1 (6, 40) | RECALL | One-line recall; M6-R5 delivers the promised data-management coverage. |
| M6-R3 | Data frame: rows = observations, columns = variables; mixed column types | A-3 (8, 9); F-1 | RECALL / REMOVE-DUPLICATION | No re-teaching of data frames and no R syntax. A brief bridge, then the new idea (one entity per row; one tidy table for analysis). |
| M6-R4A | Category codes need interpretation (slide 11) | B-1 (10); E-4 (35) | RECALL → EXTEND | Recall in one line; extend to indicator coding. |
| M6-R4A | Distance depends on representation / scales (slide 12) | E-1 (34); F-1 (37) | EXTEND | Scaling and dimensionality give the "why". |
| M6-R4A | Co-occurrence or prediction is not cause; statistics summarize and quantify (slides 15, 28) | C-7 (20) | RECALL | One-line "correlation ≠ causation" recall; no new limit block. |
| M6-R4A | Data visualization technique, conceptual (slide 22) | C-6 (22, 23) | EXTEND | Histogram only; full visualization stays with M-5 (Wk 7). |
| M6-R4A | Transaction / co-occurrence data for association | A-3 (8) | RECALL | One clause. |

## 9. Historical App Store data

Affected safe slides: **7, 9, 19, 21, 23, 24, 34.** Slides 26 and 30 use generic app examples without dataset values; a label is optional there.

- Visible label on each affected 2027 slide: **HISTORICAL DATA SNAPSHOT — JULY 2013**. The date comes from governance: F-13 in `01_audit_report.md` and `M-6_currency_refresh_spec.md`.
- Purpose framing (from the F-13 relabel): the data teach **data-management technique**, not current app-market conditions.
- No re-collection or refresh (D-5 is a separate task). No new empirical claims. Existing figures are shown only as historical teaching output, pending VX-R5-03.

## 10. Proposed 2027 sequence (content architecture, not a build)

| # | Block | Working title | Source |
|---:|---|---|---|
| 1 | 0 | Data Management I (title) | 3 |
| 2 | 0 | Before the technique: understand and prepare the data (bridge + roadmap) | 4 |
| 3 | A | Where business data come from | 6 + 40 |
| 4 | A | Primary vs. secondary data | 7 |
| 5 | A | Records, transactions, and one analysis table | 8 + 9 |
| 6 | B | Types of variables | 10 |
| 7 | B | Samples, populations, and representativeness | 11 (part) + 12 |
| 8 | B | How much data? Observations and variables | 11 (part) |
| 9 | C | Summarize → clean → prepare (workflow) | 14 |
| 10 | C | Center: mean and median | 15 + 16 |
| 11 | C | Why center is not enough | 17 |
| 12 | C | Spread: range, variance, standard deviation | 18 |
| 13 | C | Reading a summary table (historical) | 19 |
| 14 | C | Distributions and histograms | 22 + 23 |
| 15 | C | Correlation: measuring association | 20 |
| 16 | C | Correlation matrix and matrix plot (historical) | 21 + 24 |
| 17 | D | Data quality problems | 25 |
| 18 | D | Duplicates | 26 |
| 19 | D | Missing values: what is missing? | 27 |
| 20 | D | Handling missing values | 28 |
| 21 | D | Detecting outliers | 29 |
| 22 | D | Judging and handling outliers | 30 |
| 23 | E | Why scale matters (historical) | 32 + 34 |
| 24 | E | Standardization and min-max scaling (log preview) | 33 |
| 25 | E | Binning and binary conversion | 35 (part) |
| 26 | E | Indicator coding vs. category codes | 35 (part) |
| 27 | E | Reducing categories | 36 |
| 28 | F | Observations, variables, missingness, dimensionality | 37 |
| 29 | G | Close: understand → clean → represent → prepare | 31 + 14 |

- **SOURCE_SAFE_SLIDES = 36** (PPTX 3–37, 40).
- **PROPOSED_2027_SLIDES = 29** (acceptable range 28–31 after project-lead review).
- **RATIONALE:**
  - Two section headers are removed.
  - Three duplicate pairs are merged: 6+40, 8+9, and recap 31 into the close.
  - The list-only slide 15 and the framing slide 32 are absorbed.
  - Slide 11 is split, because it carries three distinct ideas.
  - Every assessment-relevant skill on the safe slides is retained.
  - The length is comparable to M6-R4A (36) but leaner, and fits one Seminar 5 session with discussion prompts.

## 11. External verification queue (no browsing in this tranche)

| ID | Claim / item | Source slide | Need | Fallback if not verified |
|---|---|---|---|---|
| **VX-R5-01** | Citation "Source: www.mathisfun.com, Sep 5, 2023"; the package also holds the external link `http://www.mathisfun.com/`. | 20 | Identify the intended source; verify the URL/domain, which appears misspelled but is unconfirmed; confirm it supports the correlation definition; decide whether a citation is needed at all. | Remove the citation. The Pearson definition and range are textbook-level and need no web source. |
| **VX-R5-02** | Provenance and reuse rights of embedded figures (images on safe slides 6, 8, 9, 10, 11, 12, 16, 18, 20, 21, 23, 24, 26, 28, 29, 33, 40). This is especially the sample-size figure (12) and the record/transaction figures (8). | as listed | Establish whether any figure is third-party (for example, a textbook figure) and whether attribution or permission is required. | Redraw as course-owned conceptual diagrams; no unattributed third-party figures. |
| **VX-R5-03** | Numerical values shown for the App Store data (summary table, correlation matrix, histogram, rank example). | 19, 21, 23, 24, 34 (and image on 9) | Confirm the figures trace to the July 2013 dataset and were transcribed correctly. **Caution:** the same dataset feeds A2 data slices (`PRODUCTION_PLAN.md` §5), so any dataset access needs explicit authorization under the assessment boundary. | Present the existing figures only as labeled historical teaching output; make no new claims from them. |
| **VX-R5-04** | The "July 2013" date label applied to the dataset on these slides. | 7, 9, 19, 21, 23, 24, 34 | Confirm that the governed date (F-13, from the 2025 script, which was not read in this tranche) refers to the same dataset shown on these slides. | Use "HISTORICAL DATA SNAPSHOT (2013)" only if the month cannot be confirmed. |

The following are textbook-level or rule-of-thumb material, presented as heuristics, and are not queued: the ±3 SD rule, the 90%-missing drop rule, "#observations > #variables", the Pearson definition, the generic data-use examples (6, 40), and the temperature examples (30).

## 12. Open handoffs

| Handoff | Status | Effect of M6-R5 |
|---|---|---|
| HANDOFF-M5-01 | **OPEN** | Not affected. M6-R5 contains no AI-timing wording and adds none. |
| HANDOFF-S3-01 (#53 R review) | **OPEN** | Not affected. M6-R5 has no R-review content. Not the place to resolve it. |
| HANDOFF-ASSESS-01 | **DEFERRED** | **Highly relevant but not resolved.** Data Management I carries midterm-relevant skills (blueprint §6), and the App Store dataset recurs in exams (F-13). This draft preserves all substantive skills. The professor-authorized alignment check should run before this spec is frozen or before assessment freeze, whichever comes first. |

## 13. Decisions requested from the project lead

1. Confirm 29 slides (range 28–31) and the A–G spine.
2. Confirm the deletion of section headers 5 and 13 and the merges in §6. No skill is removed.
3. Decide whether to order HANDOFF-ASSESS-01 before freezing this spec.
4. Decide the treatment of VX-R5-01 to VX-R5-04 (verify, or apply the fallbacks).

## 14. Integrity

- Sources used: safe PPTX slides 3–37 and 40 (scratchpad copy, SHA-256 matching source) and the governed records in §1.
- Excluded slides 1, 2, 38, 39 re-read: 0. InClass, exercise, script, and exam/review files read: 0.
- Protected assessment files read: 0. M6-R4B contents read: 0. Web browsing: 0.
- Existing files modified: 0. Git staged: 0. Commit: 0. Push: 0.
- Status: **DRAFT — PROJECT-LEAD REVIEW REQUIRED.** Not frozen.
