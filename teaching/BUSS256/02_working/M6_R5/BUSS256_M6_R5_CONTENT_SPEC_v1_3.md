# BUSS256 M6-R5 — Seminar 5 Data Management I: Content Spec v1.3

**Status: M6-R5 CONTENT SPEC v1.3 = APPROVED / FROZEN** — canonical M6-R5 content authority (freeze record: `docs/rounds/BUSS256_M6_R5_CONTENT_FREEZE.md`).

*Created 2026-10-09. Final minor patch of v1.2 per the project-lead freeze decision. Applies exactly MP-01, MP-02 and MP-03 (from `docs/rounds/BUSS256_M6_R5_CONTENT_SPEC_v1_2_TARGETED_VERIFICATION.md`) plus the B-01 resolution. No other content or architecture change.*

Preserved unchanged:
- `BUSS256_M6_R5_CONTENT_SPEC_v1.md` (SHA-256 `4e49cfb0…6a06`)
- `BUSS256_M6_R5_CONTENT_SPEC_v1_1.md` (SHA-256 `cb189e53…`)
- `BUSS256_M6_R5_CONTENT_SPEC_v1_2.md` (SHA-256 `cf8915ff…`)

Content architecture only: no PPTX, no build spec, no visual production.

## 1. Authority and scope

- **Authority:** `docs/rounds/BUSS256_M6_R5_SOURCE_AUTHORITY_RESOLUTION.md`
- **Source:** `Seminar 5_Lecture_Data_Management I_Updated.pptx` (SHA-256 `5d0ba636…80ff5`), paired with the distributed canonical `_Updated.pdf` (SHA-256 `f63b458e…59ee`).
- **Safe lecture authority:** PPTX slides **3–37 and 40** (36 slides).
- **Excluded:**
  - slides 1, 2, 38, 39;
  - InClass variants, `Exercise/`, scripts, exam/review files;
  - `admission.csv`, held import/export and functions exercises, package material.
- **Evidence applied:**
  - `BUSS256_M6_R5_ASSESSMENT_ALIGNMENT.md`
  - `BUSS256_M6_R5_EXTERNAL_VERIFICATION.md`
  - `BUSS256_M6_R5_CONTENT_SPEC_v1_1_RED_TEAM.md` (SHA-256 `a68cea76…`; RT-01 to RT-20, all applied)
- **Format:** the source is 4:3; the 2027 target is 16:9. This is recorded only.
- **Guiding question:** *What does it mean to prepare and understand data before applying an analytical technique?*
- **Bridge:**
  - M6-R3 gave the containers (rows, columns).
  - M6-R4A gave the purpose (matching a technique to a question).
  - M6-R5 covers what must be true of the data in between.
  - Later modules (M-2, M-4, M-5) apply analytics to prepared data.
- **Pedagogy:** concept and judgment first; no code on slides; introductory mathematics only; business reading for every idea; no AI integration (Wk 4 precedes the Wk 7 on-ramp).

## 2. Project-lead locked decisions

| Decision | Value |
|---|---|
| Identity | Wk 4 · Seminar 5 · Data Management I |
| Slide count | **29** (no 30th slide) |
| Architecture | v1.1 retained. Only one structural change: **v1.1 slides 13 and 14 swapped** |
| D-R5-01 | The log preview moves from slide 24 to slide 13 (conceptual only) |
| D-R5-02 | Student-facing content does not depend on the historical App Store dataset; slide 4 is generic |
| D-R5-03 | One recurring fictional online-store dataset, labeled ILLUSTRATIVE EXAMPLE |
| D-R5-04 | AF-R5-01 = OPEN — ASSESSMENT-FREEZE TRANCHE |
| Mode | Not added |
| VX-R5-01 to VX-R5-04 | Closed per v1.1 §13: citation removed; copied visuals = 0; no exact App Store numbers; July 2013 lineage stays in governance only |

## 3. 2027 learning objectives

1. Describe data as records (observations) and attributes (variables) in one analysis table, and distinguish primary vs. secondary data.
2. Classify variables (numeric vs. categorical, discrete vs. continuous, ordered vs. unordered, binary 0/1), and recognize that a variable's type limits its possible values.
3. Explain why representativeness and quality matter more than raw sample size.
4. Summarize a numeric variable by center (mean, median) and spread (range, standard deviation), and recognize when a variable barely varies.
5. Read the shape of a numeric distribution from a histogram, including skew. Read a simple summary table, including the proportion meaning of a 0/1 mean.
6. Interpret correlation by direction and strength of linear association, without treating r ≈ 0 as "no relationship" or correlation as causation.
7. Identify data-quality problems (duplicates, missing, impossible, unusual), and choose treatments that fit the variable type and purpose. An outlier is not the same as an error.
8. Choose a representation for analysis (standardization, min-max normalization, binning, indicator coding, category reduction), and distinguish observations, variables, missingness, and dimensionality.

## 4. Recurring dataset — ILLUSTRATIVE EXAMPLE (fictional online store)

This dataset is entirely course-owned and fictional. It has no real company, no student or applicant data, and no assessment-derived numbers. It is labeled **ILLUSTRATIVE EXAMPLE** wherever it is shown, and the build creates the toy values.

| Field | Type | Intended property | Used on slides |
|---|---|---|---|
| `product_id` | identifier | one row = one product | 5 |
| `category` (e.g., Books / Home / Electronics) | categorical, unordered | a few categories with unequal counts | 6, 13 (bar-type counts), 26, 27 |
| `price` | numeric, continuous; complete | most items low-priced; a few expensive ones (right tail) | 10, 13, 14, 16, 22, 23, 24, 25 |
| `units_sold` | numeric, discrete count; complete | a much larger range than `price` | 12, 15, 16, 23 |
| `rating` (allowed 1–5) | ordered numeric | a few missing values; **not used in any correlation example** (B-01) | 14 (cue), 19, 20, 22 |
| `featured` (0/1) | binary indicator | a clear mix of 0s and 1s (**not** near-constant) | 6, 14 |

**Display rules:**
- Each slide shows only the 2–4 columns it needs. No giant table is repeated.
- The summary table on slide 14 shows three columns (`price`, `rating`, `featured`) with exactly two callouts; it is not a vehicle for every concept.
- An optional **orders view** (order → set of products) appears on slide 5 only, introduced as "a second view of the same store".

**Separate example for near-zero variation (slide 12):** a one-line, nearly constant, non-binary attribute, such as a shipping fee that is the same amount for almost every product. It is **not** a field of the core table and never uses `featured`.

## 5. Proposed 29-slide architecture

Assessment-alignment concepts are marked **[A] skew**, **[B] binary mean**, **[C] near-zero variation**, **[D] correlation strength**, **[E] imputation by type**, **[F] impossible vs. unusual**, and **[T] scaling terminology**. *Notes* = speaker notes only.

| # | Block | Title | On-slide teaching job (single) | Notes / visual | Source |
|---:|---|---|---|---|---|
| 1 | 0 | Data Management I | Title | Template branding only | 3 |
| 2 | 0 | Before the technique: understand and prepare the data | Guiding question; roadmap A–G; **RECALL** M6-R3 (containers) and M6-R4A (choosing a technique) | — | 4 |
| 3 | A | Data for a business question | Which data could answer a business question: generic sources (transactions, card records, web logs, surveys, service calls, documents) and their uses. **RECALL** M6-R1 "Variety" in one line. | Text or native icons; no images | 6 + 40 |
| 4 | A | Primary vs. secondary data | Definitions, typical methods, and **generic** examples (a firm's own survey vs. reusing published or partner data) | July 2013 lineage: governance only; no visible label | 7 |
| 5 | A | Records, transactions, and one analysis table | Record data (one row per product, one column per attribute) vs. transaction data (order → items). **RECALL** M6-R3 rows/columns; **RECALL** M6-R4A association in one clause. | Toy products table + optional orders view | 8 + 9 |
| 6 | B | Types of variables | One compact table mapping each dataset column to its type (categorical, continuous, discrete count, ordered, binary 0/1). Numeric-looking codes can be categorical. A type limits possible values (e.g., a count is a whole number). **EXTEND** M6-R4A category codes. | Native table | 10 |
| 7 | B | Samples and representativeness | A sample should reflect the population on the attributes that matter; random sampling; larger samples capture the shape better but cost more | Native redrawn diagram of the same shape at three sample sizes | 11 (part) + 12 |
| 8 | B | How much data? | More relevant, representative, high-quality data can help, but more observations are not automatically better (bias persists; poor measurement persists; cost). Keep more observations than variables (rule of thumb). | Forward pointer to 28 | 11 (part) |
| 9 | C | Two questions about data | **DATA QUALITY: "Is the value right?"** (duplicates, missing, impossible, unusual) vs. **DATA PREPARATION / REPRESENTATION: "Is the representation suitable for the analytical task?"** (scaling, log, binning, indicators, fewer categories). Summarizing comes first, to see both. | Native two-column map; recalled on 17 and 29 | 14 |
| 10 | C | Center: mean and median | Mean = the balance point (average); median = the middle value when sorted. Extreme values pull the mean more than the median, so the two can differ. Business reading: "typical price" vs. "average price". | Plain language; no equations. *Notes:* "a mean describes the group, not each individual" (optional). | 15 + 16 |
| 11 | C | Why center is not enough | Same mean and median, different spread (toy sets A/B/C, all mean = median = 7) | Verified course toy arithmetic | 17 |
| 12 | C | Spread: range and standard deviation **[C]** | Range = max − min (sensitive to extremes); SD = how far values typically sit from the mean, in the variable's units. **"A variable with almost no variation often provides little information for distinguishing observations. That does not make it automatically useless in every context."** | Example: the nearly constant shipping fee (§4). No variance formula. *Notes:* variance is the squared-unit quantity behind SD. | 18 |
| 13 | C | Distributions, histograms, and shape **[A]** | A distribution shows how numeric values spread out; a **histogram** shows the distribution of a numeric variable via bins. Text line: **"For categorical variables, show category counts with a bar-type display."** **Skew:** asymmetry, a longer tail on one side. **"In a strongly skewed distribution, the mean is often pulled toward the long tail more than the median."** There is no universal mean > median rule. Preview (preparation step, see 9): **"A transformation such as log can sometimes reduce strong right-skew."** | **ONE chart only:** native schematic histogram of `price` (right tail), from the ILLUSTRATIVE EXAMPLE dataset. No second chart. No log formula; no claim that log always fixes skew. *Notes / build note:* bin choice changes the look of a histogram; log needs positive values (M-2 detail). | 22 + 23 |
| 14 | C | Reading a summary table **[B]** | Read #obs, mean, SD, min, and max for a few columns as a natural synthesis. **Exactly two visible callouts:** (1) **binary mean:** the mean of a 0/1 variable = the proportion coded 1 (tiny example: 0, 1, 1, 0, 1 → 0.6 = 60% featured); (2) **missing-value cue:** "`rating` has some missing observations; we return to this on slide 19." No skew, correlation, scaling, outlier, or near-zero-variation callouts. | Native table of **three columns**: `price`, `rating`, `featured`. ILLUSTRATIVE EXAMPLE. *Notes:* optional remark that price's maximum sits far above its median (link to slide 13). | 19 |
| 15 | C | Correlation: direction and strength **[D]** | Pearson r ranges from −1 to +1. **The sign gives the direction; \|r\| gives the strength of linear association; r near 0 means little linear association, but a nonlinear relationship may still exist; correlation does not establish causation** (**RECALL** M6-R4A). Perfect correlation = r = +1 or −1. | Native schematic scatter plots (strong positive, near zero, strong negative, curved). No formula. | 20 |
| 16 | C | Correlation matrix and matrix plot | Reading a matrix (diagonal = 1; symmetric), and a matrix plot as a **screening aid** for redundant variables, not proof. **The correlation demonstration uses complete variables only: `price` and `units_sold`.** `rating` is not used, so no missing-data rule, deletion convention, or imputation discussion is needed here. | Illustrative matrix / matrix plot of `price` and `units_sold` (B-01 resolved) | 21 + 24 |
| 17 | D | Data quality: four things to check | Organizes the quality block (recalls slide 9): check for duplicates, missing values, impossible/invalid values, and unusual/outlier values. An unusual value is something to **check**, not automatically a problem or an error (see slide 22: outlier ≠ error). Prompt: "What would you check, and why?" | Native list | 25 |
| 18 | D | Duplicates | Duplicate or near-duplicate records, especially after merging sources. Options: keep the most reliable record (needs a trustworthy timestamp), merge, or delete, as a documented judgment. | Toy example: the same product listed twice | 26 |
| 19 | D | Missing values: what is missing? | Missingness is not a value. Reasons it occurs; 0 vs. missing vs. not applicable (e.g., a zero balance vs. no account). Many methods drop or cannot use incomplete records unless handled. | `rating` blanks. *Notes:* a rare value that is present is not "missing" (optional). | 27 |
| 20 | D | Handling missing values **[E]** | Options: substitute a value, omit records, or drop a variable. **Treatment depends on variable type, context, and purpose. Mean imputation is only a simple numeric example; it is not a default for categorical or binary variables.** "Drop a variable that is mostly missing" is labeled **RULE OF THUMB**; no universal threshold. | *Notes:* imputation can understate variability; the source's 90% example as an illustration only. | 28 |
| 21 | D | Detecting unusual values | An outlier is an observation far from the rest ("far" is deliberately vague). ±3 SD is a heuristic, most useful for roughly symmetric data. Outliers can strongly influence results. | Native scatter with a few distant points | 29 |
| 22 | D | Outlier ≠ error **[F]** | **IMPOSSIBLE / INVALID: violates a coding or domain constraint** (e.g., a `rating` of 7 when 1–5 is allowed). **UNUSUAL / OUTLIER: rare but potentially valid** (e.g., one very expensive product). Domain knowledge decides; unusual values are **not** removed automatically. | Recurring dataset examples; generic "50 °C" context optional. *Notes:* a few invalid records may be treated as missing. | 30 |
| 23 | E | Why scale matters | **RECALL** (M6-R4A): "representation changes comparisons." **EXTEND** with one concrete case: `price` and `units_sold` sit on very different scales, so the larger-range variable dominates a combined comparison. | Native side-by-side bars of the ranges. No re-teaching of distance. | 32 + 34 |
| 24 | E | Two scaling choices **[T]** | **STANDARDIZATION:** "Z-standardization centers a variable at 0 and scales it to unit standard deviation." Conceptual formula z = (x − mean) / SD. "It does not make the distribution normal." **MIN-MAX NORMALIZATION:** x′ = (x − min) / (max − min); commonly maps the observed range to 0–1. Worked example: 10, 20, 40 → 0, 0.33, 1. Neither is called plain "normalization". | No log content. *Notes (if raised):* binary indicators may already be on a comparable 0–1 scale; handle them according to modeling purpose. | 33 |
| 25 | E | Binning and binary conversion | Numeric → categories (e.g., `price` tiers); a probability or score → yes/no with a chosen cut-off. Binning loses detail. | Native tier diagram | 35 (part) |
| 26 | E | Indicator coding vs. category codes | **RECALL** (M6-R4A): codes like Low=1 / Mid=2 / High=3 are labels, not distances. **EXTEND:** one 0/1 indicator per `category`. | Native table | 35 (part) |
| 27 | E | Reducing categories | Too many categories create too many indicators; combine sparse or similar categories with business meaning | *Notes:* models such as regression use m − 1 indicators with a reference category (forward pointer, M-2). | 36 |
| 28 | F | Rows, columns, missingness, dimensionality | Observations = rows; variables/features = columns; **dimensionality = the number of variables/features**; missingness is separate from dimensionality. Many variables need more data, make distances less informative, and each variable should earn its place. **"Recall: a variable with little variation may add little separation."** | Plain intuition; no "sparsity" term on the slide; **RECALL** M6-R3 rows/columns | 37 |
| 29 | G | Close: understand → clean → represent → prepare | Recall the slide-9 two questions; verification-mindset prompt ("Does this summary, correlation, or cleaning choice make sense?") | — | 31 + 14 |

**SLIDES = 29.**
- Architecture: v1.1 retained, with one structural change (the 13/14 swap).
- Title refinements: 9, 13, 14, 15, 17, 21, 22 and 24.

## 6. Complete source reconciliation (36 safe slides)

| SOURCE_SLIDE | SOURCE_TOPIC | CONTENT_DISPOSITION | VISUAL_DISPOSITION | 2027_DESTINATION | RATIONALE |
|---|---|---|---|---|---|
| 3 | Title | REVISE | REMOVE (logo and photo; template branding) | 1 | 2027 identity |
| 4 | Content agenda | REVISE | — | 2 | 2027 roadmap and bridge |
| 5 | Section header "Basics in Data" | DELETE | — | — | Header only |
| 6 | Potentially useful data | MERGE | REMOVE (web-search images) | 3 | Combined with 40; business-question framing |
| 7 | Primary vs. secondary | KEEP-BUT-CLARIFY | — | 4 | Generic examples (D-R5-02) |
| 8 | Record and transaction data | MERGE | REDRAW (original toy tables); REMOVE (cart photo) | 5 | Combined with 9 |
| 9 | Organizing data; dataset screenshot | MERGE | REMOVE (screenshot) | 5 | One-table principle via the recurring dataset |
| 10 | Types of variables | KEEP-BUT-CLARIFY | REMOVE (screenshot reused here) | 6 | Types mapped to dataset columns |
| 11 | Sampling; how many variables and observations | REVISE | REDRAW (15 × 1 vs. 1 × 15 idea, natively, if used) | 7, 8 | Typos fixed; correction E; split |
| 12 | Sample size and time | KEEP-BUT-CLARIFY | REDRAW (course-owned diagram) | 7 | Precision vs. cost |
| 13 | Section header "Data Management" | DELETE | — | — | Header only |
| 14 | Data management overview | KEEP | — | 9, 29 | Becomes the two-question boundary map and close |
| 15 | Common summary metrics | MERGE | — | 10 | Folded into center |
| 16 | Mean vs. median | KEEP-BUT-CLARIFY | REDRAW → plain language (no equation images) | 10 | Typo fixed; skew moved to 13 |
| 17 | Mean and median not enough | KEEP | — | 11 | Verified toy arithmetic |
| 18 | Range, variance, SD | KEEP-BUT-CLARIFY | REDRAW (formula removed) | 12 | Concept only; [C] taught here |
| 19 | Statistical summary (historical values) | REVISE | — (not reproduced) | 14 | Synthesis table on the recurring dataset; [B] |
| 20 | Correlation; Math Is Fun citation and graphic | REVISE | REDRAW (course scatter set); citation removed | 15 | [D]; no formula |
| 21 | Correlation matrix (historical); ranking screenshot | REVISE | REMOVE (screenshot) | 16 | Illustrative matrix |
| 22 | Visualization; histogram definition | REVISE | — | 13 | Correction A; [A]; log preview |
| 23 | Histogram example (historical) | REVISE | REDRAW (schematic, correct axis) | 13 | Recurring-dataset `price` histogram |
| 24 | Matrix plot; "exactly correlated" | REVISE | REDRAW | 16 | Correction D; screening aid |
| 25 | Data quality problems | KEEP | — | 17 | Four-problem organizer |
| 26 | Duplicate data | KEEP-BUT-CLARIFY | REDRAW | 18 | Judgment framing |
| 27 | Missing values: reasons; 0 vs. NA | KEEP-BUT-CLARIFY | — | 19 | "Missingness is not a value"; side-note to notes |
| 28 | Handling missing values | KEEP-BUT-CLARIFY | REDRAW | 20 | [E]; RULE OF THUMB label; trade-off to notes |
| 29 | Outliers; ±3 SD | REVISE | REDRAW (scatter); REMOVE (photo) | 21 | Typo fixed; heuristic |
| 30 | Handling outliers | KEEP-BUT-CLARIFY | — | 22 | [F]; outlier ≠ error |
| 31 | Review: Data Management | MERGE | — | 29 | Recap becomes the close |
| 32 | Data pre-processing intro | MERGE | — | 23 | Framing folded |
| 33 | Normalization (z, min-max, log) | REVISE | REDRAW | 24 (log → 13) | Correction B; [T]; new toy example |
| 34 | Normalization example (historical values) | REVISE | — (not reproduced) | 23 | Scale lesson with `price` vs. `units_sold` |
| 35 | Variable transformation | REVISE | — | 25, 26 | Typo fixed; split |
| 36 | Reducing categories; m − 1 | KEEP-BUT-CLARIFY | — | 27 | m − 1 detail to notes |
| 37 | Curse of dimensionality | REVISE | — | 28 | Correction C; [C] recall |
| 40 | Data sources | MERGE | REMOVE (web images incl. commercial film imagery) | 3 | Combined with 6 |

**Tally:**
- KEEP 3
- KEEP-BUT-CLARIFY 10
- REVISE 14
- MERGE 7
- DELETE 2
- DEFER 0
- **= 36/36.** No source slide is missing.

## 7. Accuracy corrections (retained)

| ID | Rule |
|---|---|
| A. Histogram | A histogram shows the distribution of a numeric variable; categorical counts use a bar-type display. |
| B. Standardization | Centers at 0 and scales to unit SD; does not make the distribution normal. |
| C. Dimensionality | Rows ≠ columns ≠ missingness. Dimensionality = number of variables/features. |
| D. Correlation | "Perfect correlation (r = +1 or −1)"; high \|r\| is a screening signal, not identity or causation. |
| E. Sample size | More observations are not automatically better (relevance, representativeness, quality, cost). |

**Typos corrected:**
- smapling → sampling
- obervations → observations
- aloing → along
- outliner → outlier
- Continues → Continuous

## 8. Assessment-alignment concepts (6/6 retained; natural placement)

| Concept | TEACH slide | Recall / application | Form |
|---|---|---|---|
| [A] Skew | 13 | 14 (optional light application) | Hedged "often" rule; no coefficient; no universal mean > median rule |
| [B] Binary mean = proportion | 14 | 6 (binary type) | One tiny course-owned example |
| [C] Near-zero variation | 12 | 28 (one-line recall) | Hedged; non-binary example |
| [D] Correlation strength | 15 | 16 | Linear only; nonlinear may exist; not causation |
| [E] Imputation by type | 20 | 19 | Mean imputation numeric-only example; no default for categorical/binary |
| [F] Impossible vs. unusual | 22 | 6 (type limits values), 17 (list), 21 (detect) | Outlier ≠ error |
| [T] Scaling terminology | 24 | 23 | Standardization vs. min-max named distinctly |

**Assessment-influence cleanup:**
- "A mean describes the group" → notes, optional (slide 10).
- "Low prevalence ≠ missing" → notes, optional (slide 19).
- The binary-rescaling absolute rule is removed; only an optional, qualified note remains on slide 24.
- No single summary table carries every assessed cue; the cues are distributed across slides 12, 13, 14, 19 and 22.
- All examples are course-owned and unrelated to any assessment stimulus.
- **Mode not added.**

## 9. Historical-data and visual policy

- **Exact App Store numerical claims: 0.**
- **App Store screenshots and copied historical graphics: 0.**
- **Visible "HISTORICAL COURSE DATASET — JULY 2013" label: omitted.** No slide needs the historical dataset pedagogically. The July 2013 lineage remains in the authority and verification records; it may go in speaker notes only if genuinely helpful.
- **Copied figures, screenshots, and photos: 0.** All visuals are course-owned native diagrams, shapes, toy tables, or conceptual charts. §5 states what each visual must teach; no source figure composition is mimicked.

## 10. Prior-module overlap (RECALL / EXTEND only)

| Prior idea | Slide | Label |
|---|---|---|
| M6-R1 data sources / variety | 3 | RECALL |
| M6-R3 rows / columns / data frame | 2, 5, 28 | RECALL |
| M6-R4A choosing a technique | 2 | RECALL |
| M6-R4A transaction data for association | 5 | RECALL |
| M6-R4A category codes need interpretation | 6, 26 | RECALL → EXTEND (types; indicators) |
| M6-R4A visualization (conceptual) | 13 | EXTEND (histogram and shape) |
| M6-R4A correlation / co-occurrence ≠ cause | 15 | RECALL |
| M6-R4A representation changes comparisons | 23 | RECALL → EXTEND (one scale example) |
| M6-R4A distance / grouping | 28 | EXTEND (dimensionality intuition) |

No duplicated full teaching block remains.

## 11. M6-R4B boundary

M6-R4B = HOLD. The following are absent:
- `admission.csv`;
- import/export instruction;
- user-defined functions;
- package install/library;
- exercise code or filenames;
- R syntax;
- assessment content.

**M6-R4B leakage: 0.**

## 12. Statistics-course drift control

Removed or demoted:
- equation images for mean and median;
- the variance formula (n vs. n − 1) → notes;
- the Pearson covariance/(SD·SD) formula;
- formal skewness measures (none);
- statistical inference (none);
- the log formula (none);
- the m − 1 regression detail → notes.

Remaining formulas: only the conceptual z and min-max formulas on slide 24. Every statistics slide has a business reading on the recurring dataset.

## 13. RT disposition (RT-01 to RT-20)

| RT | Item | Disposition | Where |
|---|---|---|---|
| RT-01 | Plain-language mean/median; no equations | APPLIED | 10 |
| RT-02 | Remove variance formula; SD as typical distance from the mean | APPLIED | 12 |
| RT-03 | Remove Pearson covariance formula | APPLIED | 15 |
| RT-04 | Swap 13 and 14; skew TEACH moved from 10 to new 13 | APPLIED | 10, 13, 14 |
| RT-05 | Correlation rule; remove low-variation example | APPLIED | 15 |
| RT-06 | Standardization wording; no "same data" or n vs. n − 1 | APPLIED | 24 |
| RT-07 | Hedged skew wording ("often"); no coefficient; no universal rule | APPLIED | 13 |
| RT-08 | Log preview off 24, onto 13, one conceptual line; positive-values note to notes | APPLIED | 13, 24 |
| RT-09 | One recurring fictional dataset; cues distributed; `featured` not near-constant | APPLIED (residual slide-14 gap completed by MP-02 in v1.3) | §4; 5, 6, 10–16, 18–27 |
| RT-10 | Slide-9 two-question boundary map; 17 organizes quality; 29 recalls; log labeled a preparation preview | APPLIED | 9, 13, 17, 29 |
| RT-11 | Slide 23: recall plus one concrete example; no re-teaching | APPLIED | 23 |
| RT-12 | Slide 3: brief business-question framing; R1 recall | APPLIED | 3 |
| RT-13 | Slide 4 generic; July 2013 only in governance or notes | APPLIED | 4 |
| RT-14 | Types mapped to dataset columns in one compact table | APPLIED | 6 |
| RT-15 | Assessment-driven side-notes to speaker notes | APPLIED | 10, 19 |
| RT-16 | Near-zero variation: TEACH on 12, RECALL on 28 | APPLIED | 12, 28 |
| RT-17 | Trade-off to notes; RULE OF THUMB label | APPLIED | 20 |
| RT-18 | Binary-rescaling absolute rule removed; qualified optional note | APPLIED | 24 |
| RT-19 | m − 1 detail to notes / forward pointer | APPLIED | 27 |
| RT-20 | Plain dimensionality intuition; no "sparsity" term | APPLIED | 28 |

**20/20 dispositioned: 20 APPLIED, 0 NOT-APPLICABLE.**

## 14. Handoffs

| Handoff | Status |
|---|---|
| HANDOFF-ASSESS-01 — M6-R5 content-freeze alignment | **CLOSED — M6-R5 CONTENT FREEZE ONLY.** All six concepts retained, none dropped or distorted. Not closed course-wide; later assessment-freeze work remains separate. |
| AF-R5-01 | **OPEN — ASSESSMENT-FREEZE TRANCHE.** The assessment's histogram wording is not lecture authority; no assessment file was modified. |
| HANDOFF-M5-01 | **OPEN.** Not affected. |
| HANDOFF-S3-01 | **OPEN.** Not affected. |

## 15. v1.3 final minor patches

| ID | Slide | Change | Status |
|---|---|---|---|
| MP-01 | 13 | One chart only (`price` histogram); categorical bar rule as text; "bin choice changes the look" moved to notes / build note | APPLIED |
| MP-02 | 14 | Exactly two visible callouts (binary mean; missing-value cue); three columns; optional skew remark moved to notes | APPLIED |
| MP-03 | 17 | "Four problems" → "four things to check"; unusual values framed as something to check, not an error | APPLIED |
| B-01 | 16 | Correlation demonstration uses complete variables only (`price`, `units_sold`); `rating` excluded, so no missing-data rule is needed | RESOLVED |

Not applied (not authorized by the freeze decision): the executor's bundle suggestions MP-05 (one-line "sources use 'normalization' loosely"), MP-06 (conditional; moot after B-01) and MP-07 (rating scale shown on slide 6; slide 22 already states "when 1–5 is allowed").

## 16. Freeze checklist

| Item | Value |
|---|---|
| SLIDES | **29** |
| RT-01..RT-20 | **20/20 resolved** (RT-09 completed by MP-02) |
| MP-01 / MP-02 / MP-03 | **APPLIED** |
| B-01 | **RESOLVED** |
| Assessment additions | **6/6 retained** |
| Copied visuals | **0** |
| Exact App Store numerical claims | **0** |
| Visible historical App Store dependency | **0** |
| M6-R4B leakage | **0** (term scan) |
| Protected assessment content | **0** |
| HANDOFF-ASSESS-01 (M6-R5 content-freeze scope) | **CLOSED** (see freeze record; not course-wide) |
| AF-R5-01 | **OPEN — ASSESSMENT-FREEZE TRANCHE** |
| HANDOFF-M5-01 | **OPEN** |
| HANDOFF-S3-01 | **OPEN** |

## 17. Integrity

- v1, v1.1 and v1.2 preserved unchanged.
- Assessment files re-read: 0. M6-R4B contents read: 0. New web research: 0. Source mutations: 0.
- Existing files modified: 0.
- Git staged: 0. Commit: 0. Push: 0.
- Status: **APPROVED / FROZEN.** Canonical M6-R5 content authority.
