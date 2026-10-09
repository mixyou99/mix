# BUSS256 M6-R5 — Seminar 5 Data Management I: Production Blueprint v1

**Status: M6-R5 PRODUCTION BLUEPRINT v1 = DRAFT — PROJECT-LEAD REVIEW REQUIRED**

*Created 2026-10-09. This is a production plan only: no PPTX, PDF, images, charts, or build scripts were created. It translates the frozen content into slide-level production instructions and does not change any content decision.*

## 1. Authority

| Item | Value |
|---|---|
| Only content authority | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md`: INDEPENDENTLY ACCEPTED / FROZEN |
| Authority SHA-256 | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Freeze / acceptance | `docs/rounds/BUSS256_M6_R5_CONTENT_FREEZE.md`; `docs/rounds/BUSS256_M6_R5_PROJECT_LEAD_ACCEPTANCE.md` |
| Repository state at drafting | `buss256/2027-refresh` @ `52c2e32535f993df6a4b5abdeaab3d8c9077972a` |
| Consistency reference (read-only) | `teaching/BUSS256/02_working/M6_R4A/BUSS256_M6_R4A_PPTX_BUILD_SPEC_v1.md` (visual system). No M6-R1/R3/R4A content decision is reopened. |

## 2. Frozen facts (preserved exactly)

- **SLIDES = 29.** M6-R5 · Wk 4 · Seminar 5 · Data Management I.
- **Guiding question:** "What does it mean to prepare and understand data before applying an analytical technique?"
- **Architecture:** 0 Open (1–2) · A Data for a business question (3–5) · B Variables and samples (6–8) · C Summarize and understand (9–16) · D Data quality (17–22) · E Preparation / representation (23–27) · F Dimensionality (28) · G Close (29).
- The order is unchanged. The 13/14 swap is already part of the frozen sequence.
- **Production wording for slide 17 is "four things to check".** The historical reconciliation phrase "Four-problem organizer" (source row 25) is internal only and must not appear in any student-facing text or notes.

## 3. Visual language (consistent with the 2027 BUSS256 M6 modules)

| Element | Specification |
|---|---|
| Format and safe area | 16:9 (13.333 × 7.5 in); 0.45 in left/right margin; 0.35 in top margin; 0.40 in footer reserve; no meaningful object outside the canvas |
| Type | Arial throughout. Title 30–34 pt; key statement 24–28 pt; body 20–22 pt; table/chart labels 16–18 pt; captions and labels 15–16 pt; nothing below 12 pt |
| Base palette | Navy/charcoal base with one muted accent, as in M6-R4A. Accent is never the only carrier of meaning (PC-2). |
| Header | Small caps institution line top-left (as in M6-R4A); title below it; thin rule under the title |
| Section / progress cue | A small block tag next to the slide number, e.g. "C · Summarize", in text plus a short position bar of 7 segments (0, A–G) with the current segment **filled and labeled**. Readable in grayscale. |
| Slide families | **L-TITLE** (1), **L-BRIDGE** (2, 29), **L-CONCEPT** (3, 6, 8, 9, 17, 19, 27, 28), **L-COMPARE** (4, 11, 22, 24, 26), **L-DATA** (5, 10, 12, 13, 14, 15, 16, 18, 20, 21, 23, 25), **L-CLOSE** (29) |
| Table style | Native table; bold header row with a bottom rule; light row banding (grayscale-safe); numbers right-aligned with one decimal unless integers; units in headers |
| Chart style | Native course-owned charts; axis titles always present (with units); direct data labels instead of legends; no 3-D; no gridline clutter |
| Callout style | Rounded rectangle with a **numbered marker** ("1", "2") plus a leader line to the referenced cell or element; text 18–20 pt |
| Equation style | Native editable equation or plain text in a boxed card. **Only two formulas in the lecture, both on slide 24.** All other quantities are explained in words. |
| RECALL vs. NEW cue | **RECALL** items use a small outlined tag "RECALL · M6-R4A" (or R1/R3) in italic with a left bracket line. New content has no tag. The distinction is carried by text and line, not color. |
| Illustrative label | Small outlined upper-right label **ILLUSTRATIVE EXAMPLE** on every slide that shows toy data (§4), the same style as M6-R4A |
| Caveat style | A boxed "CAUTION" or "NOT A RULE" text tag with a dashed border, for hedges such as "often", "rule of thumb", "outlier ≠ error" |
| Rule-of-thumb tag | Outlined tag **RULE OF THUMB** (text), dashed border |
| Imagery | None decorative. No photos, screenshots, web images, logos (beyond template branding), or copied figures. Simple native icons only where they carry meaning (slides 3 and 17). |

## 4. Canonical toy dataset — ILLUSTRATIVE EXAMPLE (fictional online store)

This dataset is course-owned and fictional. It has no real company, no student or applicant data, no assessment-derived values, and no App Store material. It is used unchanged on every slide that shows store data. There is **one table, 10 rows**.

| product_id | category | price ($) | units_sold | rating (1–5) | featured (0/1) |
|---|---|---:|---:|---:|---:|
| P01 | Books | 8 | 900 | 4 | 0 |
| P02 | Books | 10 | 940 | 5 | 1 |
| P03 | Books | 12 | 700 | 3 | 1 |
| P04 | Home | 12 | 820 | *(missing)* | 0 |
| P05 | Books | 15 | 610 | 4 | 1 |
| P06 | Home | 18 | 450 | 4 | 0 |
| P07 | Home | 20 | 520 | 5 | 0 |
| P08 | Home | 25 | 380 | *(missing)* | 1 |
| P09 | Electronics | 40 | 260 | 3 | 0 |
| P10 | Electronics | 120 | 40 | 4 | 1 |

**Design properties (all verified by computation):**
- **Right tail in `price`:** P10 = 120 (with P09 = 40). Mean 28.0, median 16.5, SD 33.6, min 8, max 120.
- **`units_sold`, larger range, complete:** range 900 (40–940); mean 562.0, median 565, SD 289.9. It is roughly symmetric, a useful contrast with `price`.
- **`rating` (allowed 1–5):** missing for **P04 and P08** (8 of 10 observed). Observed mean 4.0, median 4, SD 0.8, min 3, max 5. All stored values are valid.
- **`featured`:** 5 of 10 = **mean 0.5** (not near-constant). The first five products (P01–P05) are 0, 1, 1, 0, 1 → **0.6**, the frozen tiny example.
- **`category`:** Books 4 · Home 4 · Electronics 2 (unequal counts).
- **`price` vs. `units_sold`:** Pearson **r = −0.80** (both complete). Used on slide 16.
- **Histogram bins for `price`** (width 20, left-closed): 0–20: 6 · 20–40: 2 · 40–60: 1 · 60–80: 0 · 80–100: 0 · 100–120: 0 · 120–140: 1.
- **Price tiers (slide 25):** Low (< 15): 4 · Mid (15 to < 30): 4 · High (≥ 30): 2. P09 (40) and P10 (120) become the same tier, which shows the information loss.
- **Min-max worked example (slide 24):** P02, P07, P09 prices 10, 20, 40 → 0, 0.33, 1.

**Separate near-zero-variation example (slide 12 only; not a column of the table):** shipping fee for the same 10 products: **$5 for nine products, $6 for one** → range 1, SD 0.32.

**Derived views (explained on slide as "another view of the same store"):**
- **Orders view (slide 5 only):** O-101 = {P01, P05}; O-102 = {P02}; O-103 = {P04, P06, P07}.
- **Merged-listing view (slide 18 only):** P03 appears twice, once from "store catalog" (updated 2026-03-02) and once from "partner feed" (updated 2026-01-15), with the same product.
- **Data-entry check (slide 22 only):** a hypothetical new entry **P11 with rating = 7**, shown as an incoming record that fails the 1–5 rule. It is **not** added to the canonical table.

**Computation convention (build note only; never discussed on slides):**
- SD values use the common spreadsheet sample-SD function.
- Display to one decimal.
- No n vs. n − 1 discussion anywhere.

**Slides using toy data:** 5, 6, 10, 12 (shipping-fee example + `units_sold`), 13, 14, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28. **17 slides in total.** Slides 15 and 27 use course-owned schematic patterns, not dataset values.

## 5. Slide-by-slide production plan

Each entry gives: TITLE · TEACHING_JOB · VISIBLE_CONTENT · VISUAL_STRUCTURE · DATA_USED · LABELS · PC2_NONCOLOR_CUE · SPEAKER_NOTES (NOTES_REQUIRED) · SOURCE_LINEAGE · DENSITY · BUILD_RISK · QA_CHECK.

---

### Slide 1 — Data Management I
- **TEACHING_JOB:** open the session.
- **VISIBLE_CONTENT:** title "Data Management I"; "Seminar 5 · Week 4"; course line.
- **VISUAL_STRUCTURE:** L-TITLE; title band only.
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** text only.
- **NOTES_REQUIRED:** NO.
- **SOURCE:** source slide 3.
- **DENSITY:** LOW.
- **BUILD_RISK:** template logo reuse.
- **QA_CHECK:** no copied logo or photo; template branding only.

### Slide 2 — Before the technique: understand and prepare the data
- **TEACHING_JOB:** state the guiding question and place the session between prior and later modules.
- **VISIBLE_CONTENT:**
  - The guiding question, verbatim.
  - A four-step bridge: "Store data in rows and columns (M6-R3)" → "**Understand and prepare the data (today)**" → "Choose a technique for the question (M6-R4A)" → "Apply analytics (later modules)".
  - Roadmap A–G as seven short labels.
- **VISUAL_STRUCTURE:** L-BRIDGE; a horizontal chevron flow, with today's step enlarged and outlined.
- **DATA_USED:** none.
- **LABELS:** RECALL tags on the M6-R3 and M6-R4A steps.
- **PC2:** today's step is marked by size, a thick outline, and the word "today".
- **NOTES_REQUIRED:** YES. "Students already chose techniques in Seminar 4; today asks what must be true of the data first."
- **SOURCE:** source slide 4.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** the roadmap crowding the flow.
- **QA_CHECK:** the roadmap sits on one line below the flow; the guiding question is legible at ≥ 24 pt.

### Slide 3 — Data for a business question
- **TEACHING_JOB:** which data could answer a business question.
- **VISIBLE_CONTENT:** six source tiles, each with "source → example question":
  - transactions → "What sells together?"
  - card records → "Which charges look unusual?"
  - web logs → "Where do visitors leave?"
  - surveys → "How satisfied are customers?"
  - service calls → "What do customers complain about?"
  - documents → "What do reviews mention?"
  - One-line RECALL: "Recall (M6-R1): data come in many forms, structured and unstructured."
- **VISUAL_STRUCTURE:** L-CONCEPT; a 3 × 2 tile grid with a simple native icon per tile.
- **DATA_USED:** none.
- **LABELS:** RECALL · M6-R1.
- **PC2:** a text label and icon in each tile; no color coding.
- **NOTES_REQUIRED:** YES. The examples are generic and illustrative; no claims about any company.
- **SOURCE:** source slides 6 + 40.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** the urge to reuse the old web images; tile text overflow.
- **QA_CHECK:** zero images; each tile ≤ 2 lines.

### Slide 4 — Primary vs. secondary data
- **TEACHING_JOB:** distinguish primary from secondary data.
- **VISIBLE_CONTENT:** two columns (Primary | Secondary) with rows Definition / Typical methods / Example:
  - Primary example: "A store surveys its own customers."
  - Secondary example: "A store reuses published industry statistics or a partner's sales data."
  - Takeaway: "Secondary data were collected for someone else's purpose. Check their fit."
- **VISUAL_STRUCTURE:** L-COMPARE; a two-column table.
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** column headers in text; position.
- **NOTES_REQUIRED:** YES. Optional instructor context only; no visible historical-dataset label. The July 2013 lineage stays in governance records and is not needed in notes.
- **SOURCE:** source slide 7.
- **DENSITY:** LOW.
- **BUILD_RISK:** reintroducing App Store wording.
- **QA_CHECK:** no "App Store" or "2013" text anywhere on the slide.

### Slide 5 — Records, transactions, and one analysis table
- **TEACHING_JOB:** record data vs. transaction data; one row per entity.
- **VISIBLE_CONTENT:**
  - Left: a products table excerpt (P01–P04; columns `product_id`, `category`, `price`, `units_sold`), captioned "Record data: one row per product, one column per attribute".
  - Right: the orders view (O-101, O-102, O-103 with item sets), captioned "Transaction data: each order is a set of items".
  - RECALL line: "Recall (M6-R3): rows = observations, columns = variables."
  - RECALL clause: "Transaction data feed association (M6-R4A)."
- **VISUAL_STRUCTURE:** L-DATA; two side-by-side native tables with captions.
- **DATA_USED:** canonical P01–P04; orders view.
- **LABELS:** ILLUSTRATIVE EXAMPLE; RECALL · M6-R3; RECALL · M6-R4A.
- **PC2:** captions in text; distinct table shapes (grid vs. list).
- **NOTES_REQUIRED:** YES. "The orders view is another view of the same store."
- **SOURCE:** source slides 8 + 9.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** overflow from two tables.
- **QA_CHECK:** ≤ 4 rows each; table text ≥ 16 pt.

### Slide 6 — Types of variables
- **TEACHING_JOB:** map dataset columns to variable types.
- **VISIBLE_CONTENT:** one table (Column | Type | Example values | What values are possible):
  - `product_id`: identifier · P01 · "a label, not a quantity"
  - `category`: categorical, unordered · Books/Home/Electronics
  - `price`: numeric, continuous · 8, 12.50
  - `units_sold`: numeric, discrete count · 940 · "whole numbers only"
  - `rating`: ordered · 1–5 · "only 1, 2, 3, 4 or 5"
  - `featured`: binary · 0/1
  - Footer line: "Numeric-looking codes can be categorical (e.g., a product code or zip code). A variable's type limits which values are possible."
- **VISUAL_STRUCTURE:** L-CONCEPT; a single 4-column table.
- **DATA_USED:** canonical columns.
- **LABELS:** ILLUSTRATIVE EXAMPLE; EXTEND · M6-R4A (category codes).
- **PC2:** a text type label per row.
- **NOTES_REQUIRED:** YES. "Recall from Seminar 4 that category codes need interpretation; today we name the types."
- **SOURCE:** source slide 10.
- **DENSITY:** **HIGH.** Teachable as a single reference table read row by row. Progressive reveal: rows appear top to bottom (6 steps), and the footer line appears last.
- **BUILD_RISK:** table overflow.
- **QA_CHECK:** 6 rows fit at ≥ 16 pt; the "1–5" scale is visible (this supports slide 22).

### Slide 7 — Samples and representativeness
- **TEACHING_JOB:** a sample should reflect the population on what matters; bigger samples cost more.
- **VISIBLE_CONTENT:**
  - Definition line.
  - "Random sampling helps avoid systematic bias."
  - A three-panel diagram: a course-owned population of customer ages with **two groups**, shown as a dot strip, and samples of 100, 30 and 8 dots under it. The two groups are visible at 100 and 30 and lost at 8.
  - Captions: "larger sample → shape captured better" and "but more cost and effort".
- **VISUAL_STRUCTURE:** L-DATA; stacked native dot strips. The composition is **not** the old shape-sampling figure: no letter or blob shapes, and a one-dimensional strip.
- **DATA_USED:** course-owned dot pattern (deterministic: two groups at about 25 and about 55 years).
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** sample size written above each strip; dots in one shade.
- **NOTES_REQUIRED:** YES. "Representativeness concerns the attributes that matter for the question."
- **SOURCE:** source slides 11 (part) + 12.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** visual similarity to the copied source figure.
- **QA_CHECK:** dot-strip design, not a 2-D blob; no copied composition.

### Slide 8 — How much data?
- **TEACHING_JOB:** more data is not automatically better.
- **VISIBLE_CONTENT:**
  - Key statement: "More relevant, representative, high-quality data can help, but more observations are not automatically better."
  - Three short reasons: "A biased sample stays biased." · "Poor measurement stays poor." · "Collecting and managing data costs time and money."
  - RULE OF THUMB tag: "Keep more observations than variables."
  - Forward pointer to slide 28.
- **VISUAL_STRUCTURE:** L-CONCEPT; a key statement with three reason cards.
- **DATA_USED:** none.
- **LABELS:** RULE OF THUMB.
- **PC2:** text tags.
- **NOTES_REQUIRED:** YES. "A tall table (many rows, few columns) is usually easier to learn from than a wide one; revisit on slide 28."
- **SOURCE:** source slide 11 (part).
- **DENSITY:** LOW.
- **BUILD_RISK:** none notable.
- **QA_CHECK:** no "more is always better" wording.

### Slide 9 — Two questions about data
- **TEACHING_JOB:** set the quality vs. preparation boundary.
- **VISIBLE_CONTENT:** two columns:
  - **DATA QUALITY: "Is the value right?"** Duplicates · missing values · impossible values · unusual values.
  - **DATA PREPARATION / REPRESENTATION: "Is the representation suitable for the analytical task?"** Scaling · log transformation · binning · indicator coding · fewer categories.
  - Banner above: "First we summarize the data so we can see both."
- **VISUAL_STRUCTURE:** L-CONCEPT; a two-column map with question headers.
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** each column headed by its question in words; the left column has a check icon and the right a reshape icon.
- **NOTES_REQUIRED:** YES. "We return to this map on slides 17 and 29."
- **SOURCE:** source slide 14.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** the map reading as a rigid taxonomy.
- **QA_CHECK:** both questions verbatim; ≤ 5 items per column.

### Slide 10 — Center: mean and median
- **TEACHING_JOB:** mean and median as measures of center, and why they can differ.
- **VISIBLE_CONTENT:**
  - "Mean: the average (balance point)."
  - "Median: the middle value when sorted."
  - "Extreme values pull the mean more than the median, so the two can differ."
  - Store example: the 10 prices as a sorted dot strip with labeled markers — **mean $28.0** and **median $16.5**.
  - Business reading: "typical price ≈ median; average price is pulled up by one expensive product."
- **VISUAL_STRUCTURE:** L-DATA; text left, dot strip right.
- **DATA_USED:** canonical `price`.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** markers differ by line style (mean = solid, median = dashed) and by text labels.
- **NOTES_REQUIRED:** YES (optional line). "A mean describes the group as a whole, not any particular product." Skew is **not** named here; it is introduced on slide 13.
- **SOURCE:** source slides 15 + 16.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** sneaking in an equation or the word "skew".
- **QA_CHECK:** no equation; no "skew" on the slide.

### Slide 11 — Why center is not enough
- **TEACHING_JOB:** same center, different spread.
- **VISIBLE_CONTENT:** three toy sets as dot strips:
  - A = {7, 7, 7, 7, 7}
  - B = {5, 6, 7, 8, 9}
  - C = {1, 4, 7, 10, 13}
  - Each labeled "mean 7 · median 7".
  - Takeaway: "Same center, very different spread."
- **VISUAL_STRUCTURE:** L-COMPARE; three aligned dot strips on a shared axis.
- **DATA_USED:** course toy sets (verified).
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** set names A/B/C as text; shared axis position.
- **NOTES_REQUIRED:** NO.
- **SOURCE:** source slide 17.
- **DENSITY:** LOW.
- **BUILD_RISK:** misaligned axes.
- **QA_CHECK:** shared axis 0–14; all three strips aligned.

### Slide 12 — Spread: range and standard deviation [C]
- **TEACHING_JOB:** read spread, and recognize when a variable barely varies (TEACH).
- **VISIBLE_CONTENT:**
  - "Range: the distance from the smallest to the largest value. Sensitive to extremes."
  - "Standard deviation (SD): how far values typically sit from the mean, in the variable's own units."
  - Example 1: `units_sold`, range 900, SD 289.9 units.
  - Example 2: shipping fee, $5 for nine products and $6 for one → range $1, SD $0.32.
  - Key statement, verbatim: "**A variable with almost no variation often provides little information for distinguishing observations. That does not make it automatically useless in every context.**"
- **VISUAL_STRUCTURE:** L-DATA; two mini dot strips (wide spread vs. nearly constant) with value labels; the key statement in a caveat-style box.
- **DATA_USED:** canonical `units_sold`; separate shipping-fee example.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** strips labeled by name and numbers; the nearly constant strip is visibly flat.
- **NOTES_REQUIRED:** YES. "Variance is the squared-unit quantity behind SD; we do not compute it here." The shipping fee is deliberately non-binary.
- **SOURCE:** source slide 18.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** a variance formula creeping in; using `featured` for near-zero variation.
- **QA_CHECK:** no formula; shipping fee used; the qualifier present.

### Slide 13 — Distributions, histograms, and shape [A]
- **TEACHING_JOB:** see the shape of a numeric variable.
- **VISIBLE_CONTENT:**
  - "A histogram shows the distribution of a numeric variable by grouping values into bins."
  - Text line, verbatim: "**For categorical variables, show category counts with a bar-type display.**"
  - "Skew: asymmetry, a longer tail on one side."
  - Verbatim: "**In a strongly skewed distribution, the mean is often pulled toward the long tail more than the median.**"
  - Caveat tag: "NOT A RULE: mean > median does not always mean skew."
  - One-line preview, verbatim: "**A transformation such as log can sometimes reduce strong right-skew.**"
- **VISUAL_STRUCTURE:** L-DATA. **ONE chart only:** a native histogram of `price` (bins of 20; counts 6, 2, 1, 0, 0, 0, 1), with x-axis "Price ($)" and y-axis "Number of products". A long-tail bracket points at the 120–140 bin. Optional mean and median marker lines on the same chart: solid and labeled "mean 28.0"; dashed and labeled "median 16.5".
- **DATA_USED:** canonical `price`.
- **LABELS:** ILLUSTRATIVE EXAMPLE; NOT A RULE; "Preview · preparation step (see slide 9)".
- **PC2:** a "long tail" text bracket; the markers differ by line style and label.
- **NOTES_REQUIRED:** YES. "Bin choice changes the look of a histogram." · "Log works only for positive values; details later (M-2)."
- **SOURCE:** source slides 22 + 23.
- **DENSITY:** **HIGH.** Teachable through progressive reveal: (1) histogram + definition; (2) skew + "often" rule + NOT A RULE tag; (3) log preview line. The categorical-bar text line sits under the definition in a smaller caption style.
- **BUILD_RISK:** a second chart; a wrong axis label ("frequencies" vs. density); a formula for log.
- **QA_CHECK:** exactly one chart; count-based y-axis labeled; no log formula; "often" present.

### Slide 14 — Reading a summary table [B]
- **TEACHING_JOB:** read simple summaries as a synthesis.
- **VISIBLE_CONTENT:** a three-column summary table (rows: Products with a value · Mean · SD · Min · Max):

| | price ($) | rating (1–5) | featured (0/1) |
|---|---:|---:|---:|
| Products with a value | 10 | 8 | 10 |
| Mean | 28.0 | 4.0 | 0.5 |
| SD | 33.6 | 0.8 | 0.5 |
| Min | 8 | 3 | 0 |
| Max | 120 | 5 | 1 |

  **Exactly two numbered callouts:**
  1. **Binary mean:** "For a 0/1 variable, the mean is the proportion coded 1: here 0.5 → half the products are featured. (First five products: 0, 1, 1, 0, 1 → 0.6.)"
  2. **Missing-value cue:** "`rating` has some missing observations (8 of 10). We return to this on slide 19."
- **VISUAL_STRUCTURE:** L-DATA; the table left or center, two numbered callouts with leader lines to the `featured` mean cell and the `rating` count cell.
- **DATA_USED:** canonical `price`, `rating`, `featured`.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** numbered callouts with leader lines; no color highlighting needed.
- **NOTES_REQUIRED:** YES (optional). "Price's maximum sits far above its median, a reminder of the long tail on slide 13." No other callouts.
- **SOURCE:** source slide 19.
- **DENSITY:** **HIGH** (a 5 × 3 table + 2 callouts). Teachable because the table is read once and the two callouts are revealed in order 1 → 2.
- **BUILD_RISK:** adding a third callout; showing a fourth column; using the word "skew".
- **QA_CHECK:** 3 columns; exactly 2 callouts; no skew, correlation, scaling, outlier, or near-zero-variation callout.

### Slide 15 — Correlation: direction and strength [D]
- **TEACHING_JOB:** interpret a correlation coefficient.
- **VISIBLE_CONTENT:**
  - "Pearson r ranges from −1 to +1."
  - "Sign = direction." · "|r| = strength of **linear** association."
  - "r near 0 = little linear association, but a nonlinear relationship may still exist."
  - "Perfect correlation: r = +1 or r = −1."
  - RECALL line: "Correlation does not establish causation (M6-R4A)."
- **VISUAL_STRUCTURE:** L-DATA. A **2 × 2 grid** of four course-owned schematic scatter panels, each with a text caption: "strong positive (r near +1)" · "near zero" · "strong negative (r near −1)" · "curved: r near 0, but clearly related". Deterministic schematic points (about 10 per panel). This is deliberately **not** the old seven-panel horizontal strip.
- **DATA_USED:** schematic patterns (not store data).
- **LABELS:** RECALL · M6-R4A.
- **PC2:** each panel captioned in text; the patterns are visible in grayscale.
- **NOTES_REQUIRED:** YES. "The curved panel is the key caution."
- **SOURCE:** source slide 20.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** adding a formula; adding a low-variation panel; strip layout resembling the copied graphic.
- **QA_CHECK:** no formula; four panels exactly; no "causes" claim.

### Slide 16 — Correlation matrix and matrix plot
- **TEACHING_JOB:** read a correlation matrix as a screening aid.
- **VISIBLE_CONTENT:**
  - A **2 × 2 matrix**: rows and columns `price`, `units_sold`; diagonal 1.00; off-diagonal −0.80 (both cells).
  - Beside it, the matrix plot of the same pair: a scatter of `units_sold` against `price` for P01–P10.
  - Reading line: "Diagonal = 1 (a variable with itself). The matrix is symmetric."
  - "−0.80: strong negative linear association. Pricier products sold fewer units in this example."
  - Caveat: "A screening aid for redundant variables, not proof."
- **VISUAL_STRUCTURE:** L-DATA; matrix left, scatter right.
- **DATA_USED:** canonical `price` and `units_sold` only (complete). **`rating` is not used.**
- **LABELS:** ILLUSTRATIVE EXAMPLE; caveat tag.
- **PC2:** numbers printed in every cell; the scatter has axis titles.
- **NOTES_REQUIRED:** YES. "Larger datasets give bigger matrices; the reading rules are the same." No missing-data rule.
- **SOURCE:** source slides 21 + 24.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** adding `rating`; color-only heatmap.
- **QA_CHECK:** exactly 2 variables; numbers visible; no heat-only encoding.

### Slide 17 — Data quality: four things to check
- **TEACHING_JOB:** organize the quality block.
- **VISIBLE_CONTENT:**
  - Header recall: "Is the value right?" (from slide 9).
  - **Four things to check:** duplicates · missing values · impossible/invalid values · unusual/outlier values.
  - "An unusual value is something to check, not automatically a problem or an error (slide 22)."
  - Prompt: "What would you check, and why?"
- **VISUAL_STRUCTURE:** L-CONCEPT; four check tiles with native icons (two overlapping rectangles; an empty dashed cell; a crossed box; a distant dot).
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** icon shape plus a text label per tile.
- **NOTES_REQUIRED:** YES. "Each tile maps to one of the next slides (18–22)."
- **SOURCE:** source slide 25.
- **DENSITY:** LOW.
- **BUILD_RISK:** the phrase "four problems" leaking in from historical wording.
- **QA_CHECK:** the text says "four things to check"; "problems" does not appear as the frame.

### Slide 18 — Duplicates
- **TEACHING_JOB:** recognize duplicates and treat them by documented judgment.
- **VISIBLE_CONTENT:**
  - Merged-listing view: P03 appears twice (store catalog, updated 2026-03-02; partner feed, updated 2026-01-15).
  - Options: "keep the most reliable record (needs a trustworthy timestamp)" · "merge" · "delete".
  - "Write down which rule you used."
- **VISUAL_STRUCTURE:** L-DATA; a three-row table excerpt with both P03 rows bracketed.
- **DATA_USED:** merged-listing view.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** a bracket plus the label "same product".
- **NOTES_REQUIRED:** YES. "Duplicates are common after merging sources."
- **SOURCE:** source slide 26.
- **DENSITY:** LOW.
- **BUILD_RISK:** none notable.
- **QA_CHECK:** both rows clearly the same product.

### Slide 19 — Missing values: what is missing?
- **TEACHING_JOB:** what counts as missing.
- **VISIBLE_CONTENT:**
  - "Missingness is not a value."
  - The `rating` column for P01–P10 with **P04 and P08 blank**.
  - Why values go missing (not collected · not applicable · not yet recorded).
  - "0 vs. missing vs. not applicable": e.g., "a balance of 0 vs. no account at all".
  - "Many methods drop or cannot use incomplete records unless you handle them."
- **VISUAL_STRUCTURE:** L-DATA; the rating column left, three reason cards right.
- **DATA_USED:** canonical `rating`.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** blank cells shown as an empty dashed cell with the text "(missing)".
- **NOTES_REQUIRED:** YES (optional). "A rare value that is present is not missing."
- **SOURCE:** source slide 27.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** blanks rendered as 0.
- **QA_CHECK:** P04 and P08 show "(missing)", never 0.

### Slide 20 — Handling missing values [E]
- **TEACHING_JOB:** choose a treatment that fits type, context, and purpose.
- **VISIBLE_CONTENT:**
  - Three options: substitute a value · omit the records · drop the variable.
  - Verbatim: "**Treatment depends on variable type, context, and purpose.**"
  - Numeric illustration: "For a numeric column, a simple option is to fill blanks with the mean of the observed values. For `rating`, that would be 4.0."
  - Caveat: "**Mean imputation is only a simple numeric example. It is not a default for categorical or binary variables**: `category` has no mean, and a 0/1 mean such as 0.5 is not a valid value."
  - RULE OF THUMB tag: "If a variable is mostly missing, dropping it may be reasonable." No universal threshold.
- **VISUAL_STRUCTURE:** L-DATA; three option cards; a caveat box below.
- **DATA_USED:** canonical `rating` (observed mean 4.0); `category` and `featured` cited by name only.
- **LABELS:** ILLUSTRATIVE EXAMPLE; CAUTION; RULE OF THUMB.
- **PC2:** caveat and rule-of-thumb shown as text tags with dashed borders.
- **NOTES_REQUIRED:** YES. "Filling with the mean keeps rows but makes values look less varied." · "`rating` is ordered; the mean fill is shown only as the simplest numeric illustration." · "The source's 90% example is an illustration, not a rule."
- **SOURCE:** source slide 28.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** stating a fixed % threshold on the slide.
- **QA_CHECK:** no % threshold on the slide; the caveat present.

### Slide 21 — Detecting unusual values
- **TEACHING_JOB:** spot observations far from the rest.
- **VISIBLE_CONTENT:**
  - "An outlier is an observation far from the rest. 'Far' is deliberately vague."
  - A `price` dot strip with P10 (120) labeled "far from the rest".
  - RULE OF THUMB: "±3 SD from the mean is a common heuristic, most useful for roughly symmetric data."
  - "Unusual values can strongly influence results."
- **VISUAL_STRUCTURE:** L-DATA; a dot strip with an annotation.
- **DATA_USED:** canonical `price`.
- **LABELS:** ILLUSTRATIVE EXAMPLE; RULE OF THUMB.
- **PC2:** the annotation text plus a bracket; no colored dot alone.
- **NOTES_REQUIRED:** YES. Instructor nuance: "With these 10 skewed prices, the ±3 SD rule would *not* flag $120 (it is about 2.7 SD above the mean). This is another reason the rule is only a heuristic." Do not draw ±3 SD lines on the slide.
- **SOURCE:** source slide 29.
- **DENSITY:** LOW.
- **BUILD_RISK:** drawing ±3 SD bands that contradict the visual.
- **QA_CHECK:** no SD bands; P10 annotated.

### Slide 22 — Outlier ≠ error [F]
- **TEACHING_JOB:** judge a flagged value.
- **VISIBLE_CONTENT:**
  - Headline: **"OUTLIER ≠ ERROR"**.
  - Self-contained scale: "`rating` allows only 1, 2, 3, 4 or 5."
  - Left panel, **IMPOSSIBLE / INVALID**: "Breaks a coding or domain rule." Example: a new entry, P11, with rating = 7, outside 1–5.
  - Right panel, **UNUSUAL / OUTLIER**: "Rare but possibly valid." Example: P10 priced at $120, a real expensive product.
  - "Domain knowledge decides. Do not remove unusual values automatically."
- **VISUAL_STRUCTURE:** L-COMPARE; two panels.
- **DATA_USED:** hypothetical P11 entry; canonical P10.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** panel headers in text; invalid panel = crossed-box icon + solid border; unusual panel = distant-dot icon + dashed border.
- **NOTES_REQUIRED:** YES. "A few invalid entries may be treated as missing after checking." · Optional generic example: "50 °C is implausible in some climates and possible in others."
- **SOURCE:** source slide 30.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** red/green right-vs-wrong styling; P11 shown inside the canonical table.
- **QA_CHECK:** the 1–5 scale stated on the slide; P11 shown as an incoming entry; no red/green semantics.

### Slide 23 — Why scale matters
- **TEACHING_JOB:** show scale dominance with one concrete case.
- **VISIBLE_CONTENT:**
  - RECALL line: "Recall (M6-R4A): representation changes comparisons."
  - "`price` spans $8–$120 (range 112). `units_sold` spans 40–940 (range 900)."
  - "Combine them unscaled, and the larger-range variable dominates the comparison."
- **VISUAL_STRUCTURE:** L-DATA; two horizontal range bars drawn to the same scale, both labeled with endpoints.
- **DATA_USED:** canonical ranges.
- **LABELS:** ILLUSTRATIVE EXAMPLE; RECALL · M6-R4A.
- **PC2:** bar length plus endpoint labels.
- **NOTES_REQUIRED:** YES. "This is why the next slide rescales variables. The distance details stay with M6-R4A and later modules."
- **SOURCE:** source slides 32 + 34.
- **DENSITY:** LOW.
- **BUILD_RISK:** re-teaching distance theory.
- **QA_CHECK:** a single example; no distance formula.

### Slide 24 — Two scaling choices [T]
- **TEACHING_JOB:** two different ways to put numeric variables on comparable scales.
- **VISIBLE_CONTENT:** two cards.

  **STANDARDIZATION**
  - "Z-standardization centers a variable at 0 and scales it to unit standard deviation."
  - Formula 1: **z = (x − mean) / SD**
  - "It does not make the distribution normal."

  **MIN-MAX NORMALIZATION**
  - Formula 2: **x′ = (x − min) / (max − min)**
  - "Commonly maps the observed range to 0–1."
  - Worked example: prices of P02, P07, P09 = 10, 20, 40 → 0, 0.33, 1.

  Footer: "Two different choices. Do not call both simply 'normalization'."
- **VISUAL_STRUCTURE:** L-COMPARE; two equal cards; the worked example as a three-row mini table.
- **DATA_USED:** canonical P02/P07/P09 prices.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** card headers in text; position.
- **NOTES_REQUIRED:** YES (optional). "Binary indicators may already be on a comparable 0–1 scale; handle them according to the modeling purpose." No log content; no sample-vs-population SD discussion.
- **SOURCE:** source slide 33.
- **DENSITY:** **HIGH** (2 formulas + 1 worked example). Teachable through reveal: standardization card first, then min-max card, then the worked example.
- **BUILD_RISK:** formula readability; log reappearing.
- **QA_CHECK:** exactly 2 formulas in the whole deck (both here); equation text ≥ 24 pt; no log.

### Slide 25 — Binning and binary conversion
- **TEACHING_JOB:** turn numbers into categories, knowing the cost.
- **VISIBLE_CONTENT:**
  - Price tiers: Low (< $15): 4 products · Mid ($15 to < $30): 4 · High (≥ $30): 2.
  - "Binning loses detail: $40 and $120 both become 'High'."
  - Binary conversion: "A score or probability → yes/no using a chosen cut-off." Generic example: "likelihood to buy ≥ 0.5 → 'likely buyer'."
- **VISUAL_STRUCTURE:** L-DATA; a tier diagram (number line split into 3 labeled segments) plus one sentence.
- **DATA_USED:** canonical `price`.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** segment labels and boundary ticks.
- **NOTES_REQUIRED:** YES. "Cut-offs are choices; different cut-offs give different categories."
- **SOURCE:** source slide 35 (part).
- **DENSITY:** LOW.
- **BUILD_RISK:** a boundary-value ambiguity at 15 or 30.
- **QA_CHECK:** boundaries stated with < and ≥ exactly as above.

### Slide 26 — Indicator coding vs. category codes
- **TEACHING_JOB:** codes are labels; indicators represent categories for analysis.
- **VISIBLE_CONTENT:**
  - RECALL line: "Recall (M6-R4A): codes like Low = 1, Mid = 2, High = 3 are labels, not distances."
  - EXTEND: a table for P01, P04, P09 with `category` and three 0/1 indicator columns (is_Books, is_Home, is_Electronics).
  - "One 0/1 indicator per category."
- **VISUAL_STRUCTURE:** L-COMPARE; code column vs. indicator columns.
- **DATA_USED:** canonical `category`.
- **LABELS:** ILLUSTRATIVE EXAMPLE; RECALL · M6-R4A.
- **PC2:** column headers; 0/1 printed.
- **NOTES_REQUIRED:** NO.
- **SOURCE:** source slide 35 (part).
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** none notable.
- **QA_CHECK:** exactly one 1 per row.

### Slide 27 — Reducing categories
- **TEACHING_JOB:** combine categories when there are too many.
- **VISIBLE_CONTENT:**
  - "Too many categories create too many indicators."
  - "Combine sparse or similar categories into groups that make business sense."
  - Schematic: fine categories (e.g., Fiction, Non-fiction, Comics, Cookbooks, Kitchen, Bedding, Lighting, Phones, Audio) → grouped into Books / Home / Electronics.
- **VISUAL_STRUCTURE:** L-CONCEPT; a many-to-few grouping diagram.
- **DATA_USED:** schematic labels (consistent with the canonical categories).
- **LABELS:** none.
- **PC2:** grouping brackets and labels.
- **NOTES_REQUIRED:** YES. Forward pointer: "Some models, such as regression, use one fewer indicator than the number of categories, with a reference category; details later (M-2)."
- **SOURCE:** source slide 36.
- **DENSITY:** LOW.
- **BUILD_RISK:** the m − 1 detail leaking onto the slide.
- **QA_CHECK:** no m − 1 text on the slide.

### Slide 28 — Rows, columns, missingness, dimensionality
- **TEACHING_JOB:** keep four terms distinct, and see why many variables cost.
- **VISIBLE_CONTENT:**
  - A labeled grid (the canonical table outline): rows = **observations** (10 products); columns = **variables/features**.
  - "**Dimensionality = the number of variables/features used**" (e.g., 4: price, units_sold, rating, featured).
  - Two blank `rating` cells labeled "missingness, a separate issue".
  - "More variables need more data, make distances less informative, and each variable should earn its place."
  - RECALL line: "Recall: a variable with little variation may add little separation (slide 12)."
- **VISUAL_STRUCTURE:** L-CONCEPT; an annotated grid.
- **DATA_USED:** canonical table outline (values optional).
- **LABELS:** RECALL · M6-R3 (rows/columns); RECALL (slide 12).
- **PC2:** text annotations and brackets; missing cells shown dashed with "(missing)".
- **NOTES_REQUIRED:** YES. "Avoid jargon; the intuition is enough at this level."
- **SOURCE:** source slide 37.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** the slide turning into a miscellaneous cleanup slide; the word "sparsity".
- **QA_CHECK:** four terms each labeled once; no "sparsity".

### Slide 29 — Close: understand → clean → represent → prepare
- **TEACHING_JOB:** consolidate, with no new content.
- **VISIBLE_CONTENT:**
  - Flow: **understand → clean → represent → prepare** (before modeling).
  - Recall of the two questions: "DATA QUALITY: Is the value right?" · "DATA PREPARATION / REPRESENTATION: Is the representation suitable for the analytical task?"
  - Verification prompt: "Does this summary, correlation, or cleaning choice make sense?"
- **VISUAL_STRUCTURE:** L-CLOSE; a four-step chevron flow above the two-question pair.
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** step order by position and arrows; text labels.
- **NOTES_REQUIRED:** NO.
- **SOURCE:** source slides 31 + 14.
- **DENSITY:** LOW.
- **BUILD_RISK:** adding new content.
- **QA_CHECK:** no item absent from slides 1–28.

## 6. Density summary and overload plan

| Density | Slides |
|---|---|
| LOW | 1, 4, 8, 11, 17, 18, 21, 23, 25, 27, 29 |
| MEDIUM | 2, 3, 5, 7, 9, 10, 12, 15, 16, 19, 20, 22, 26, 28 |
| **HIGH** | **6, 13, 14, 24** |

- **6:** a reference table read row by row; 6-step reveal.
- **13:** 3-step reveal (histogram → skew + caveat → log preview). One chart.
- **14:** the table first, then callout 1, then callout 2.
- **24:** standardization card → min-max card → worked example.

No slide requires a frozen-content change to fit 16:9. All overload is handled by hierarchy, reveal, and notes.

## 7. Accessibility / PC-2 matrix (charts, tables, diagrams)

| Slide | Element | Grayscale | Color-vision deficiency | Printed PDF |
|---|---|---|---|---|
| 2, 29 | Chevron flow | Position + arrows + text | Same | Same |
| 5, 6, 14, 18, 19, 26 | Tables | Header text; banding is light gray | No color semantics | Static; reveal irrelevant |
| 7, 10, 11, 12, 21 | Dot strips | Labels + markers; mean solid vs. median dashed | No color semantics | Same |
| 13 | Histogram | Axis titles; long-tail text bracket; solid vs. dashed markers | Same | Same |
| 15 | 4 scatter panels | Caption per panel | Same | Same |
| 16 | 2 × 2 matrix + scatter | Numbers in every cell; no heat-only encoding | Same | Same |
| 17, 22 | Icon tiles / two panels | Icon shape + text; solid vs. dashed borders | **No red/green right-wrong** | Same |
| 23 | Range bars | Length + endpoint labels | Same | Same |
| 25, 27, 28 | Diagrams | Brackets, ticks, labels | Same | Same |

- Text contrast: dark text on a light background, at least the WCAG AA equivalent.
- Every table has meaningful headers with units.
- Because progressive reveals do not exist in a printed PDF, every revealed element must also read correctly when all elements are visible at once.

## 8. Speaker-note safety policy

- Notes may become visible to students, since the distribution workflow is not guaranteed private. Every note must therefore be safe to show students.
- Notes contain only instructor nuance, caveats, optional detail, forward pointers, and build hints.
- No assessment content, no protected-file references, no exam hints, no M6-R4B material, no historical App Store values, and no "four problems" wording.
- Slides with notes: 2–10, 12–25, 27, 28. Without notes: 1, 11, 26, 29.

## 9. Build-risk register

| # | RISK | LIKELIHOOD | IMPACT | MITIGATION | QA_GATE |
|---|---|---|---|---|---|
| 1 | Table overflow (6, 14, 5) | Medium | Medium | ≤ 6 rows; ≥ 16 pt; fixed column widths | Render check at 100%: no clipping |
| 2 | Formula readability (24) | Medium | Medium | Native equation; ≥ 24 pt; two cards | Both formulas legible in grayscale PDF |
| 3 | Histogram axis error (13) | Medium | High | Count axis "Number of products"; bins exactly as §4 | Bars = 6, 2, 1, 0, 0, 0, 1 |
| 4 | Summary-table crowding (14) | Medium | Medium | 3 columns; 2 callouts; reveal | Callout count = 2 |
| 5 | Correlation-matrix readability (16) | Low | Medium | 2 × 2 with numbers; no heat-only encoding | Cells show 1.00 / −0.80 |
| 6 | Speaker-note visibility | Medium | Medium | §8 policy | Notes scan: no assessment, R4B, App Store, or "four problems" |
| 7 | Similarity to copied source figures (7, 8, 15, 21) | Medium | High | Redesigned compositions (dot strips; 2 × 2 panels; new tables) | Side-by-side check against the source deck: no matching compositions |
| 8 | Inconsistent toy values | Medium | High | §4 is the single source of truth; derived numbers precomputed | Recompute all displayed statistics from §4 |
| 9 | Accidental historical App Store material | Low | High | Never open the source deck's dataset slides during build | Text scan: no "App Store", "2013", "Rating_Volume" |
| 10 | PC-2 failure | Medium | High | §7 matrix | Grayscale render review of all 29 slides |
| 11 | Font substitution | Low | Medium | Arial only; embed or verify | Font audit: 100% Arial |
| 12 | 16:9 overflow | Low | Medium | Safe margins per §3 | No object outside the canvas |
| 13 | Formula count drift | Low | Medium | Words elsewhere (e.g., range in words) | Exactly 2 formulas, both on slide 24 |
| 14 | Third callout or skew creeping onto 14; "skew" on 10 | Medium | Medium | Slide-level QA_CHECKs | Slides 10 and 14 text review |

## 10. Boundaries and handoffs (unchanged)

- **M6-R4B = HOLD.** None of the following appear: `admission.csv`, import/export instruction, user-defined functions, package install/library, exercise filenames, R code, solution, InClass, or exam/review material.
- **HANDOFF-ASSESS-01:** CLOSED only for M6-R5 content-freeze scope.
- **AF-R5-01:** OPEN — ASSESSMENT-FREEZE TRANCHE.
- **HANDOFF-M5-01:** OPEN.
- **HANDOFF-S3-01:** OPEN.

## 11. Blueprint checklist

| Item | Value |
|---|---|
| Slides | 29 (architecture unchanged) |
| Toy dataset | 1 canonical table, 10 rows (+ 3 explained derived views; separate shipping-fee example) |
| Slides using toy data | 17 |
| Formulas | 2 (slide 24 only) |
| Copied visuals | 0 |
| App Store dependency | 0 |
| HIGH-density slides | 4 (6, 13, 14, 24), each with a reveal plan |
| Notes policy | Safe if visible |

## 12. Integrity

- Existing files modified: 0. Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
- No PPTX, PDF, PNG, SVG, chart, script, or render folder was created.
- Git staged: 0. Commit: 0. Push: 0.
