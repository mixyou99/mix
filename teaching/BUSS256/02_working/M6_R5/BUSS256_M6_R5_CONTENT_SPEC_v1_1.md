# BUSS256 M6-R5 — Seminar 5 Data Management I: Content Spec v1.1

**Status: M6-R5 CONTENT SPEC v1.1 = DRAFT — RED-TEAM REVIEW REQUIRED**

*Created 2026-10-09. This is an evidence patch of v1. `BUSS256_M6_R5_CONTENT_SPEC_v1.md` is preserved unchanged as historical evidence (SHA-256 `4e49cfb0…6a06`). Content architecture only: no PPTX, no build spec, no visual design.*

## 1. Authority and scope

- **Authority record:** `docs/rounds/BUSS256_M6_R5_SOURCE_AUTHORITY_RESOLUTION.md`
- **Source:** `Seminar 5_Lecture_Data_Management I_Updated.pptx`, the editable source paired with the distributed canonical `_Updated.pdf`.
  - SHA-256 `5d0ba636…80ff5` (PPTX)
  - SHA-256 `f63b458e…59ee` (PDF)
- **Safe lecture authority:** PPTX slides **3–37 and 40** (36 slides).
- **Excluded and not used:**
  - slides 1, 2, 38, 39;
  - InClass variants, `Exercise/`, scripts, exam/review files;
  - `admission.csv`, the held import/export and functions exercises, package material.
- **Evidence incorporated:**
  - `docs/rounds/BUSS256_M6_R5_ASSESSMENT_ALIGNMENT.md` (AA-R5-01 to AA-R5-07; AA-R5-08 declined)
  - `docs/rounds/BUSS256_M6_R5_EXTERNAL_VERIFICATION.md` (VX-R5-01 to VX-R5-04)
- **Governed curriculum inputs:**
  - `M-6_foundations_blueprint.md` (row D; §6)
  - `01_audit_report.md` (F-13, F-14)
  - `M-6_currency_refresh_spec.md`
  - `M-6_verification_seed_spec.md` (Wk 4)
  - closed M6-R1 to M6-R4A records
- **Format:** the source is 4:3; the 2027 target is 16:9. This is recorded only; there is no build spec.
- No assessment file was re-read in this tranche. No assessment wording, values, or stimuli appear in this spec.

## 2. Project-lead locked decisions

| Decision | Locked value |
|---|---|
| Identity | Wk 4 · Seminar 5 · Data Management I (M6-R5) |
| Target slide count | **29** (freeze range 28–30) |
| Topic spine | v1 spine 0 / A–G kept |
| Merges and header deletions | v1 merges (6+40, 8+9, 15→center, 31→close, 32→scale) and deletion of headers 5 and 13 kept |
| HANDOFF-ASSESS-01 for M6-R5 | Narrow alignment run; the six required additions are applied here |
| Mode | **Not added** |
| VX-R5-01 | **REMOVE** the Math Is Fun citation |
| VX-R5-02 | Copied figures, screenshots, and photos = **0**. Every one is REDRAW or REMOVE |
| VX-R5-03 | Fallback accepted: **no exact App Store numbers** |
| VX-R5-04 | "**HISTORICAL COURSE DATASET — JULY 2013**", only for explicit course-dataset context |

## 3. 2027 learning objectives

Students will be able to:

1. Distinguish data sources and primary vs. secondary data, and describe data as records (observations) and attributes (variables) in one analysis table.
2. Classify variables (numeric vs. categorical; discrete vs. continuous; ordered vs. unordered; binary 0/1). Explain that a variable's type limits which values are possible, and that the mean of a 0/1 variable is the proportion coded 1.
3. Explain why representativeness and quality matter more than raw sample size.
4. Summarize a numeric variable by center (mean, median) and spread (range, variance, standard deviation). Use mean vs. median to reason about skew. Recognize that a variable with almost no variation usually carries little information for distinguishing observations.
5. Describe a numeric distribution with a histogram (categorical counts use a bar-type display). Interpret correlation by sign (direction) and |r| (strength of linear association), without treating r ≈ 0 as "no relationship" or correlation as causation.
6. Identify duplicates, missing values, and outliers. Choose missing-value treatment by variable type and purpose. Distinguish **impossible / invalid** values from **unusual but valid** values.
7. Explain **standardization** and **min-max normalization** and when scaling matters; preview log transformation, binning, indicator coding, and category reduction.
8. Distinguish observations, variables, missingness, and dimensionality, and explain intuitively why many variables can create problems.

## 4. Proposed 29-slide architecture

Assessment-alignment additions are marked **[A] skew**, **[B] binary mean**, **[C] near-zero variation**, **[D] correlation strength**, **[E] imputation by type**, **[F] impossible vs. unusual**, and **[T] terminology**.

| # | Block | Working title | Content contract | Source |
|---:|---|---|---|---|
| 1 | 0 | Data Management I | 2027 title, course, term | 3 |
| 2 | 0 | Before the technique: understand and prepare the data | Guiding question; bridge from M6-R3 (containers) and M6-R4A (choosing a technique); roadmap A–G | 4 |
| 3 | A | Where business data come from | Generic sources and their business uses (POS, card records, claims, web logs, email response, surveys, service calls, documents). Recall M6-R1 "Variety". Text or native icons only. | 6 + 40 |
| 4 | A | Primary vs. secondary data | Definitions, methods, examples. Secondary-data example: reusing a dataset collected by someone else. If the course dataset is named here, use the label **HISTORICAL COURSE DATASET — JULY 2013** (§8). | 7 |
| 5 | A | Records, transactions, and one analysis table | Record data, transaction data (bridge to association, M6-R4A), one row per entity, columns = attributes (recall M6-R3). Course-owned toy tables only. | 8 + 9 |
| 6 | B | Types of variables | Numeric vs. text; discrete vs. continuous; categorical ordered vs. unordered; binary 0/1 as a special case. Numeric-looking codes (e.g., zip codes) can be categorical. **Type limits possible values** (feeds [F]). | 10 |
| 7 | B | Samples, populations, and representativeness | Representative-sample definition; random sampling; sample size vs. precision and cost (redrawn diagram) | 11 (part) + 12 |
| 8 | B | How much data? Observations and variables | Correction E (§6); #observations > #variables as a heuristic; feeds slide 28 | 11 (part) |
| 9 | C | Summarize → clean → prepare | Workflow map for blocks C–E | 14 |
| 10 | C | Center: mean and median **[A]** | Definitions (plain language or native equations). The mean is sensitive to outliers. **Skew = asymmetry, a longer tail on one side; the mean is pulled toward the long tail more than the median, so comparing mean and median helps reason about skew.** No skewness coefficient. A mean describes the group, not each individual. | 15 + 16 |
| 11 | C | Why center is not enough | Course toy sets with the same mean and median but different spread (verified: all have mean = median = 7) | 17 |
| 12 | C | Spread: range, variance, standard deviation **[C]** | Range (sensitive to outliers); variance and SD as concentration around the mean; SD is in the variable's units. **A variable with almost no variation often carries little information for distinguishing observations, though it is not automatically useless in every context.** Course toy examples (verified arithmetic). | 18 |
| 13 | C | Reading a summary table **[B][A]** | **ILLUSTRATIVE EXAMPLE** (course-owned toy values; §8). The table shows #obs, mean, SD, min and max, with one variable that has fewer observations (a missingness cue), variables on very different scales, and one 0/1 variable. **[B]** Mean of a 0/1 variable = proportion coded 1. Tiny example: values 0, 1, 1, 0, 1 → mean 0.6 = 60% coded 1. **[A]** A maximum far above the mean suggests a long right tail. | 19 |
| 14 | C | Distributions and histograms | Correction A (§6). Histogram = distribution of a numeric variable; bins and bar heights; shape depends on bin count; recognizing roughly symmetric vs. right-skewed shapes (links to [A]). Categorical counts use a bar-type display. Course-owned schematic plot; axis correctly labeled (count or frequency). Brief recall of M6-R4A visualization; M-5 owns visualization in full. | 22 + 23 |
| 15 | C | Correlation: measuring association **[D]** | Pearson r ranges from −1 to +1. **The sign gives the direction; \|r\| gives the strength of linear association; r near 0 means little linear association but does not prove that no relationship exists (e.g., a curved pattern; very little variation); correlation does not establish causation** (recall M6-R4A). Course-owned schematic scatter examples. No citation (VX-R5-01). | 20 |
| 16 | C | Correlation matrix and matrix plot | **ILLUSTRATIVE EXAMPLE** matrix: diagonal = 1, symmetric, a mix of weak and moderate values. Correction D (§6). A matrix plot is a screening aid for redundant variables, not proof. | 21 + 24 |
| 17 | D | Data quality problems | Duplicates, missing values, outliers, invalid values; "What can we do?" prompt | 25 |
| 18 | D | Duplicates | Merging heterogeneous sources; "keep newest" needs a reliable timestamp; the choice is a documented judgment; generic example | 26 |
| 19 | D | Missing values: what is missing? | Reasons for missingness; "0" vs. missing vs. not applicable; missing ≠ low prevalence (a rare value that is present is not missing); "many methods drop or cannot use incomplete records unless they are handled" | 27 |
| 20 | D | Handling missing values **[E]** | Options: substitute (imputation), omit records, drop variables (the 90% figure is a rule of thumb). **Mean imputation is a simple example for numeric variables only. It is not a default for categorical or binary variables, where a mean may not be a valid category. Treatment depends on variable type, context, and purpose.** Trade-off: imputation keeps rows but can understate variability. No advanced imputation methods. | 28 |
| 21 | D | Detecting outliers | An outlier is an unusually distant observation ("distant" is deliberately vague); ±3 SD is a heuristic, most useful for roughly symmetric data; outliers can have disproportionate influence | 29 |
| 22 | D | Judging values: impossible vs. unusual **[F]** | **IMPOSSIBLE / INVALID value: violates domain or coding constraints** (e.g., a fractional count, a negative age, a category code outside the allowed set). **UNUSUAL / OUTLIER value: rare but possibly valid. "Outlier" does not equal "error".** Domain knowledge decides; examples (zero-priced paid product; very high price; 50 °C in different climates), genericized. Small numbers of problem records may be treated as missing. | 30 |
| 23 | E | Why scale matters | **ILLUSTRATIVE EXAMPLE:** one variable with a far larger range dominates a comparison or distance; bridge to M6-R4A "distance depends on representation"; forward link to M-4 | 32 + 34 |
| 24 | E | Standardization and min-max normalization **[T]** | **STANDARDIZATION:** z = (x − mean) / SD. When computed from the same data it gives mean 0 and SD 1. **It does not make the distribution normal**; the shape is unchanged. **MIN-MAX NORMALIZATION:** x′ = (x − min) / (max − min), rescaling to 0–1. Tiny worked example: 10, 20, 40 → 0, 0.33, 1. Do not call both simply "normalization". 0/1 indicators are not rescaled like continuous variables. Log transformation: a one-line preview that compresses a long right tail and needs positive values; M-2 owns the detail. | 33 |
| 25 | E | Binning and binary conversion | Continuous → categorical bins (income tiers); probability → 0/1 with a chosen cut-off; binning loses information | 35 (part) |
| 26 | E | Indicator coding vs. category codes | Codes such as Low=1 / Mid=2 / High=3 are labels, not distances (recall M6-R4A); indicator (dummy) variables per category | 35 (part) |
| 27 | E | Reducing categories | m categories: one indicator per category describes the data, while models such as regression use m − 1 with a reference category; combine sparse or similar categories with business meaning (M-2 link) | 36 |
| 28 | F | Observations, variables, missingness, dimensionality **[C]** | Correction C (§6); why many variables create problems (sparsity; distance less informative; M-4 link). One line: near-zero-variation variables add dimensions with little information. | 37 |
| 29 | G | Close: understand → clean → represent → prepare | Recap of the workflow before modeling; verification-mindset prompt ("Does this summary / correlation / cleaning choice make sense?") | 31 + 14 |

**PROPOSED_2027_SLIDES = 29** (freeze range 28–30). All six required additions sit inside existing slides 10, 12, 13, 15, 20, 22 and 28; no slide was added.

**Architecture changed:** no. Two titles were refined:
- slide 22 is now "Judging values: impossible vs. unusual" (was "Judging and handling outliers");
- slide 24 now names both standardization and min-max normalization.

**Density note:** slide 24 carries two definitions, a worked example, and a log preview. See §14 for the option to move the log preview.

## 5. Complete source-slide reconciliation (36 safe slides)

The CONTENT decision governs. The VISUAL column applies VX-R5-02:
- REDRAW = reproduce the concept with native, course-owned shapes, tables, or plots;
- REMOVE = drop the visual;
- — = text only.

| SOURCE_SLIDE | SOURCE_TOPIC | CONTENT DECISION | VISUAL | RATIONALE | 2027 DESTINATION | DEPENDENCY / HANDOFF |
|---|---|---|---|---|---|---|
| 3 | Title | REVISE | REMOVE (logo and photo images; use template branding) | 2027 identity | 1 | — |
| 4 | Content agenda | REVISE | — | 2027 roadmap and bridge | 2 | Overlap M6-R3, M6-R4A |
| 5 | Section header "Basics in Data" | DELETE | — | Header only | — | — |
| 6 | Potentially useful data | MERGE | REMOVE (web-search images) | Combined with 40 | 3 | Overlap M6-R1 |
| 7 | Primary vs. secondary | KEEP-BUT-CLARIFY | — | Core distinction; course-dataset label only if named | 4 | §8 (VX-R5-04) |
| 8 | Record and transaction data | MERGE | REDRAW (tables, original toy content); REMOVE (cart photo) | Combined with 9 | 5 | VX-R5-02; overlap M6-R4A |
| 9 | Organizing data (single table); dataset screenshot | MERGE | REMOVE (dataset screenshot) | One-table principle kept; schematic toy table | 5 | VX-R5-02/03; overlap M6-R3 |
| 10 | Types of variables | KEEP-BUT-CLARIFY | REMOVE (dataset screenshot reused on this slide) | Core; add binary 0/1 and "type limits possible values" | 6 | [F] feeder; overlap M6-R4A |
| 11 | Sampling; how many variables and observations | REVISE | REDRAW (15 × 1 vs. 1 × 15 toy table) | Typos fixed; correction E; split | 7, 8 | Correction E |
| 12 | Sample size and time | KEEP-BUT-CLARIFY | REDRAW (course-owned sample-size diagram) | Precision vs. cost kept | 7 | VX-R5-02 |
| 13 | Section header "Data Management" | DELETE | — | Header only | — | — |
| 14 | Data management overview | KEEP | — | Workflow map; reused at the close | 9, 29 | — |
| 15 | Common summary metrics | MERGE | — | List folded into center | 10 | — |
| 16 | Mean vs. median | KEEP-BUT-CLARIFY | REDRAW (native equations or plain language) | Typo "aloing" fixed; **[A] skew** added | 10 | AA-R5-01 |
| 17 | Mean and median not enough | KEEP | — | Toy arithmetic verified | 11 | — |
| 18 | Range, variance, SD | KEEP-BUT-CLARIFY | REDRAW (formula; toy table may be reproduced natively) | **[C] near-zero variation** added; toy arithmetic verified | 12 | AA-R5-03 |
| 19 | Statistical summary example (historical App Store values) | REVISE | — (historical table not reproduced) | Exact values removed; ILLUSTRATIVE EXAMPLE with the required teaching properties; **[B][A]** | 13 | VX-R5-03; AA-R5-01/02/05 |
| 20 | Correlation analysis; Math Is Fun citation and strip graphic | REVISE | REDRAW (course-owned scatter examples); citation REMOVED | **[D]** added; citation removed | 15 | VX-R5-01/02; AA-R5-04 |
| 21 | Correlation matrix (historical values); third-party ranking screenshot | REVISE | REMOVE (ranking screenshot) | Matrix-reading skill kept with an illustrative matrix | 16 | VX-R5-02/03/04 |
| 22 | Visualization; histogram definition | REVISE | — | Correction A | 14 | Correction A; M-5 |
| 23 | Histogram example (historical) | REVISE | REDRAW (generic schematic, correct axis label) | Historical bars not reproduced | 14 | VX-R5-02/03 |
| 24 | Matrix plot; "exactly correlated" | REVISE | REDRAW (illustrative) | Correction D | 16 | Correction D; VX-R5-03 |
| 25 | Data quality problems | KEEP | — | Block D opener; adds invalid values to the list | 17 | — |
| 26 | Duplicate data | KEEP-BUT-CLARIFY | REDRAW | "Keep newest" qualified | 18 | — |
| 27 | Missing values: reasons; 0 vs. NA | KEEP-BUT-CLARIFY | — | Soften "most algorithms"; low prevalence ≠ missing | 19 | AA-R5-05 |
| 28 | Handling missing values | KEEP-BUT-CLARIFY | REDRAW | **[E] imputation by type** added; trade-off | 20 | AA-R5-05 |
| 29 | Outliers; ±3 SD | REVISE | REDRAW (outlier scatter); REMOVE (web photo) | Typo "outliner" fixed; heuristic framing | 21 | VX-R5-02 |
| 30 | Handling outliers | KEEP-BUT-CLARIFY | — | **[F] impossible vs. unusual** added; exact price figure genericized | 22 | AA-R5-06; VX-R5-03 |
| 31 | Review: Data Management | MERGE | — | Recap becomes the close | 29 | — |
| 32 | Data pre-processing intro | MERGE | — | Framing folded into the scale slide | 23 | — |
| 33 | Normalization (z, min-max, log); "x ~ N(0,1)" | REVISE | REDRAW | Correction B; **[T] terminology**; new course-owned min-max example | 24 | AA-R5-07; M-2 |
| 34 | Normalization example (historical values) | REVISE | — (historical table not reproduced) | Scale-dominance lesson kept as an ILLUSTRATIVE EXAMPLE | 23 | VX-R5-03; M6-R4A |
| 35 | Variable transformation (binary, bins, dummies) | REVISE | — | Typo "Continues" fixed; split | 25, 26 | M6-R4A |
| 36 | Reducing categories; m − 1 | KEEP-BUT-CLARIFY | — | Reconciles one-per-category vs. m − 1 | 27 | M-2 |
| 37 | Curse of dimensionality | REVISE | — | Correction C; **[C]** one-liner | 28 | M-4 |
| 40 | Data sources (logs, surveys, calls, documents) | MERGE | REMOVE (web-search images including commercial film imagery) | Combined with 6 | 3 | VX-R5-02 |

**Tally:**
- KEEP 3 (14, 17, 25)
- KEEP-BUT-CLARIFY 10 (7, 10, 12, 16, 18, 26, 27, 28, 30, 36)
- REVISE 14 (3, 4, 11, 19, 20, 21, 22, 23, 24, 29, 33, 34, 35, 37)
- MERGE 7 (6, 8, 9, 15, 31, 32, 40)
- DELETE 2 (5, 13)
- DEFER 0
- **Total = 36.** No safe slide is missing.

**Changes from v1:**
- 19, 21, 23 and 34 move to REVISE, because their exact historical values are replaced.
- 30 moves to KEEP-BUT-CLARIFY, because [F] is added.
- 25 stays KEEP; a list addition only.
- No skill was removed.

## 6. Accuracy corrections (carried from v1; confirmed in VX §sanity check)

| ID | Source | 2027 rule |
|---|---|---|
| A. Histogram | 22 | A histogram shows the distribution of a quantitative (numeric) variable via bins. Categorical variables use counts with a bar-type display. Bin count affects the apparent shape. |
| B. Standardization | 33 | z-standardization centers and scales to mean 0 and SD 1 when computed from the same data. It does not make the distribution normal. |
| C. Dimensionality | 37, 11 | Observations (rows) ≠ variables or features (columns) ≠ missingness ≠ dimensionality (the number of variables or features in the representation). Sparsity in high dimensions is not the same as missing values. |
| D. Correlation wording | 24 | "Perfect correlation (r = +1 or −1)" for exact linear relationships. A high \|r\| is a screening signal, not identity and not causation. |
| E. Sample size | 11 | More relevant, representative, high-quality data can help, but more observations are not automatically better. Biased samples stay biased; poor measurement stays poor; data cost money and time. |

**Typos corrected:**
- smapling → sampling
- obervations → observations
- aloing → along
- outliner → outlier
- Continues → Continuous

## 7. Assessment-alignment additions (HANDOFF-ASSESS-01, M6-R5)

| ID | Addition | Slide | Guardrail |
|---|---|---|---|
| AA-R5-01 | **[A] Skew**: asymmetry or longer tail; the mean is pulled toward the tail more than the median; mean vs. median as reasoning aid | 10 (primary), 13, 14 | No formal skewness coefficient |
| AA-R5-02 | **[B] Binary mean** = proportion coded 1; tiny course-owned example (0, 1, 1, 0, 1 → 0.6) | 13 (primary), 6 | No assessment-derived values |
| AA-R5-03 | **[C] Near-zero variation** carries little information for distinguishing observations, but is not automatically useless | 12 (primary), 28 | No overstatement |
| AA-R5-04 | **[D] Correlation strength**: sign = direction; \|r\| = strength of linear association; r ≈ 0 ≠ no relationship; not causation | 15 (primary), 16 | — |
| AA-R5-05 | **[E] Imputation by type**: mean imputation only as a simple numeric example; not a default for categorical or binary variables; depends on type, context, and purpose; missing ≠ low prevalence; keep the missingness cue in the illustrative table | 20 (primary), 19, 13 | No advanced imputation |
| AA-R5-06 | **[F] Impossible / invalid** (violates domain or coding constraints) vs. **unusual / outlier** (rare but possibly valid); outlier ≠ error | 22 (primary), 6, 17, 21 | — |
| AA-R5-07 | **[T] Terminology**: standardization vs. min-max normalization, conceptual formulas, one tiny course-owned min-max example; 0/1 indicators not rescaled | 24 | Introductory mathematics only |
| AA-R5-08 | Mode | — | **Not added** (project-lead decision) |

**Stimulus separation:** all examples are course-owned and use contexts, variables and values unrelated to any assessment stimulus. No assessment scenario is mirrored.

**Assessment-side follow-up (deferred to assessment freeze; assessment files not altered):**
- **AF-R5-01:** a draft assessment element uses "histogram" loosely for per-category counts. Align its wording with correction A at assessment freeze.

## 8. Historical-data policy

- **No exact App Store numerical claims** are retained (VX-R5-03 fallback). The underlying dataset was not opened.
- **No third-party screenshots.** The old slide-21 ranking screenshot is removed; it is a later third-party snapshot, not the course dataset.
- The label **"HISTORICAL COURSE DATASET — JULY 2013"** may appear only where a slide explicitly refers to the historical course dataset (most likely slide 4 as a secondary-data example, at the build's discretion). It is supported by governed lineage (VX-R5-04). It must not be applied to any other image, screenshot, or example.
- Where a teaching example needs the old data's properties (slides 13, 16, 23), use an **ILLUSTRATIVE EXAMPLE** with course-owned toy values. Required properties:
  - one variable with fewer observations (missingness);
  - variables on substantially different scales;
  - a 0/1 variable;
  - a right-skewed variable.
- Historical exact values are not preserved, and no new empirical claims are made.

## 9. Figure / provenance policy

- **Copied figures, screenshots, and photos = 0.**
- Redraw only what the concept needs, using native shapes, course-owned toy tables, schematic plots, and conceptual diagrams.
- Not retained:
  - the Math Is Fun correlation graphic;
  - the textbook-lineage record-data, sample-size, outlier, and formula images (concepts redrawn with original content);
  - web image-search images (slides 3, 6, 8, 29, 40);
  - commercial film imagery (slide 40);
  - the dataset screenshot (slides 9, 10);
  - the third-party ranking screenshot (slide 21).
- The spec defines the information to show, not the copied visual.

## 10. Overlap management

| Prior module | Overlap | 2027 slide | Class | Treatment |
|---|---|---|---|---|
| M6-R1 | Variety (structured / unstructured); "data management covered later" | 3 | RECALL | One line |
| M6-R3 | Data frame rows = observations, columns = variables | 5, 28 | RECALL / REMOVE-DUPLICATION | Bridge only; no R syntax |
| M6-R4A | Category codes need interpretation | 6, 26 | RECALL → EXTEND | Extend to indicator coding |
| M6-R4A | Distance depends on representation / scale | 23, 28 | EXTEND | Scaling and dimensionality give the "why" |
| M6-R4A | Correlation / co-occurrence is not cause | 15 | RECALL | One line, with [D] |
| M6-R4A | Data visualization (conceptual) | 14 | EXTEND | Histogram only; M-5 owns the rest |
| M6-R4A | Transaction data for association | 5 | RECALL | One clause |

## 11. M6-R4B boundary

M6-R4B = **HOLD**. M6-R5 adds none of the following:
- `admission.csv`;
- import/export instruction;
- user-defined functions;
- package install or library instruction;
- exercise code or filenames;
- R syntax demonstrations;
- assessment content.

Blueprint row D's "import/export" and "descriptive-stats functions" stay with the separately governed exercise track, since they are absent from the canonical lecture. The lecture is independently teachable.

## 12. Open handoffs

| Handoff | Status |
|---|---|
| HANDOFF-ASSESS-01 — M6-R5 content-freeze alignment | **READY TO CLOSE, SUBJECT TO PROJECT-LEAD REVIEW.** AA-R5-01 to AA-R5-07 are present; AA-R5-08 is declined. **Not closed globally.** AF-R5-01 is deferred to assessment freeze. |
| HANDOFF-M5-01 | **OPEN.** Not resolved by M6-R5; no AI-timing wording. |
| HANDOFF-S3-01 (#53) | **OPEN.** Not resolved by M6-R5; no R-review content. |

## 13. Verification closure

| Item | Disposition | Status |
|---|---|---|
| VX-R5-01 Math Is Fun citation | REMOVE | **Closed.** The citation is removed; no replacement is needed for textbook-level correlation. |
| VX-R5-02 Figure provenance | REDRAW or REMOVE | **Closed by policy.** Copied visuals = 0. |
| VX-R5-03 App Store numbers | Fallback: genericize | **Closed.** No exact App Store figures; illustrative toy values only. |
| VX-R5-04 July 2013 date | Accepted with scope | **Closed.** Label restricted to explicit course-dataset context. |

Course-owned toy arithmetic retained and verified: slide 11 (all means and medians 7), slide 12 (ranges 12; toy mean and SD). The source slide-33 "Mean 5.5, SD 3.03" example is **not** carried forward. Slide 24 uses the new min-max example (10, 20, 40 → 0, 0.33, 1).

## 14. Decisions still requiring project-lead review

1. **Slide 24 density:** keep the log preview on slide 24, or move its one line to slide 14 (distributions and skew). Either option keeps 29 slides.
2. **Course-dataset label placement:** confirm whether slide 4 names the historical course dataset (with the label) or uses a fully generic secondary-data example.
3. **Illustrative-table context** for slides 13, 16 and 23: approve a neutral, course-owned business context (e.g., a small online-store dataset). It must differ from any assessment context.
4. **Red-team review** of this v1.1 before freeze.
5. **AF-R5-01 owner:** confirm it is routed to the assessment-freeze tranche.

## 15. Integrity

- v1 preserved unchanged.
- Sources: safe slides 3–37 and 40, plus the governed and evidence records in §1.
- Assessment files re-read: 0. M6-R4B contents read: 0. External research redone: no.
- Existing files modified: 0.
- Git staged: 0. Commit: 0. Push: 0.
- Status: **DRAFT — RED-TEAM REVIEW REQUIRED.** Not frozen.
