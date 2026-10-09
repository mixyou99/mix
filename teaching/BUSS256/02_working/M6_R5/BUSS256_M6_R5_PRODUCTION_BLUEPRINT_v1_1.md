# BUSS256 M6-R5 — Seminar 5 Data Management I: Production Blueprint v1.1

**Status: M6-R5 PRODUCTION BLUEPRINT v1.1 = DRAFT — TARGETED VERIFICATION REQUIRED**

*Created 2026-10-09. Production patch of `BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1.md` (SHA-256 `9d5ce6013df38a91c50063585fb9051fb8b749293a275b6d6b99538e6d8d24a5`, preserved unchanged). It applies the red-team `docs/rounds/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_RED_TEAM.md` (SHA-256 `01e7001f3a52f6a99d6371751ffcc4c3372af3199fb462c9573a07d3e3930bdb`) subject to the project-lead overrides. Production plan only: no PPTX, PDF, images, charts, build spec, or scripts.*

## 1. Authority

| Item | Value |
|---|---|
| Only content authority | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` (INDEPENDENTLY ACCEPTED / FROZEN), SHA-256 `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Freeze / acceptance | `docs/rounds/BUSS256_M6_R5_CONTENT_FREEZE.md`; `docs/rounds/BUSS256_M6_R5_PROJECT_LEAD_ACCEPTANCE.md` |
| Repository state | `buss256/2027-refresh` @ `52c2e32535f993df6a4b5abdeaab3d8c9077972a` |
| Visual consistency reference (read-only) | `teaching/BUSS256/02_working/M6_R4A/BUSS256_M6_R4A_PPTX_BUILD_SPEC_v1.md` |

## 2. Frozen facts (unchanged)

- **SLIDES = 29**, with the same sequence, titles, and frozen teaching jobs. M6-R5 · Wk 4 · Seminar 5 · Data Management I.
- **Guiding question:** "What does it mean to prepare and understand data before applying an analytical technique?"
- **Architecture:** 0 Open (1–2) · A Data for a business question (3–5) · B Variables and samples (6–8) · C Summarize and understand (9–16) · D Data quality (17–22) · E Preparation / representation (23–27) · F Dimensionality (28) · G Close (29).
- **Slide-17 production wording is "four things to check".** The historical reconciliation phrase "Four-problem organizer" never appears in student-facing text or notes.

## 3. Visual language (unchanged from v1)

| Element | Specification |
|---|---|
| Format and safe area | 16:9 (13.333 × 7.5 in). Margins: 0.45 in left/right, 0.35 in top, 0.40 in footer reserve. |
| Type | Arial only. Title 30–34 pt; key statement 24–28 pt; body 20–22 pt; table and chart labels 16–18 pt; captions 15–16 pt; minimum 12 pt. |
| Palette | Navy/charcoal base with one muted accent. The accent is never the sole carrier of meaning. |
| Header | Institution line top-left; title; thin rule. |
| Section cue | Text tag (e.g., "C · Summarize") plus a 7-segment position bar; the current segment is filled **and** labeled. |
| Families | L-TITLE (1); L-BRIDGE (2); L-CONCEPT (3, 6, 8, 9, 17, 19, 27, 28); L-COMPARE (4, 11, 22, 24, 26); L-DATA (5, 7, 10, 12, 13, 14, 15, 16, 18, 20, 21, 23, 25); L-CLOSE (29). |
| Tables | Native; bold header with a bottom rule; light gray banding; numbers right-aligned; units in headers. |
| Charts | Native; axis titles with units; direct labels; no legends where labels suffice; no 3-D. |
| Callouts | Numbered markers ("1", "2") with leader lines. |
| Equations | Native editable equation or plain text in a boxed card. **Exactly two formulas in the deck, both on slide 24.** |
| RECALL cue | Outlined italic tag "RECALL · M6-Rx" with a left bracket line. |
| Illustrative label | Outlined upper-right **ILLUSTRATIVE EXAMPLE** wherever toy or schematic values are shown. **MINI EXAMPLE** marks the standalone slide-24 calculation. |
| Caveat / heuristic tags | "NOT A RULE", "CAUTION", "RULE OF THUMB": text tags with a dashed border. |
| Imagery | None decorative. Native icons only where meaningful (slides 3, 17, 22). |

## 4. Canonical toy dataset — ILLUSTRATIVE EXAMPLE (fictional online store)

Course-owned and fictional: no real company, no student or applicant data, no assessment-derived values, no App Store material. **One table, 10 rows.**

| product_id | category | price ($) | units_sold | rating (1–5) | featured (0/1) |
|---|---|---:|---:|---:|---:|
| P01 | Books | 8 | 900 | 4 | 0 |
| P02 | Books | 10 | 940 | 5 | 1 |
| P03 | Books | 12 | 700 | 3 | 1 |
| P04 | Home | 12 | 820 | *(missing)* | 0 |
| P05 | Books | 15 | 610 | 4 | 1 |
| P06 | Home | 18 | 450 | 4 | **1** |
| P07 | Home | 20 | 520 | 5 | 0 |
| P08 | Home | 25 | 380 | *(missing)* | 1 |
| P09 | Electronics | 40 | 260 | 3 | 0 |
| P10 | Electronics | 120 | 40 | 4 | 1 |

**v1 → v1.1 change (BP-R2):** P06 `featured` 0 → 1. P06–P10 `featured` is now 1, 0, 1, 0, 1, and P01–P05 is unchanged (0, 1, 1, 0, 1). No other cell changed.

**Uses of the canonical table:** slides 5, 6, 10, 12 (`units_sold`), 13, 14, 16, 18 (derived view), 19, 20, 22 (P10), 23, 25, 26, 28. **Fifteen slides.**

**Separate course-owned illustrations (not part of the canonical table):**

| Illustration | Slide |
|---|---|
| Population/sample dot sets | 7 |
| Toy sets A/B/C | 11 |
| Shipping-fee example | 12 |
| Schematic scatter panels | 15 |
| Unusual-value schematic | 21 |
| Hypothetical P11 entry | 22 |
| MINI EXAMPLE 10/20/40 | 24 |
| Category grouping schematic | 27 |

See §6 for all exact values.

## 5. Slide-by-slide production plan

Each entry gives: TITLE · TEACHING_JOB · VISIBLE_CONTENT · VISUAL_STRUCTURE · DATA_USED · LABELS · PC2_NONCOLOR_CUE · NOTES_REQUIRED · SPEAKER_NOTES (student-safe only) · BUILD_METADATA (builder-only; never placed in PowerPoint notes) · SOURCE_LINEAGE · DENSITY · BUILD_RISK · QA_CHECK.

---

### Slide 1 — Data Management I
- **TEACHING_JOB:** open the session.
- **VISIBLE_CONTENT:** "Data Management I"; "Seminar 5 · Week 4"; course line.
- **VISUAL_STRUCTURE:** L-TITLE.
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** text only.
- **NOTES_REQUIRED:** NO.
- **SPEAKER_NOTES:** none.
- **BUILD_METADATA:** template branding only; no copied logo or photo.
- **SOURCE:** source slide 3.
- **DENSITY:** LOW.
- **BUILD_RISK:** logo reuse.
- **QA_CHECK:** no copied image.

### Slide 2 — Before the technique: understand and prepare the data
- **TEACHING_JOB:** state the guiding question and place the session in the analytics workflow.
- **VISIBLE_CONTENT:**
  - The guiding question, verbatim.
  - Four-step flow captioned **"Workflow order"**: "Store data in rows and columns (M6-R3)" → "**Understand and prepare the data (today)**" → "Choose a technique for the question (M6-R4A)" → "Apply analytics (later modules)".
  - Roadmap A–G as seven short labels.
- **VISUAL_STRUCTURE:** L-BRIDGE; horizontal chevrons; the "today" step enlarged and outlined.
- **DATA_USED:** none.
- **LABELS:** RECALL tags on the M6-R3 and M6-R4A steps.
- **PC2:** size, a thick outline, and the word "today".
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "This is the order of the analysis workflow, not the order of our seminars. You chose techniques in Seminar 4; today asks what must be true of the data first."
- **BUILD_METADATA:** the "Workflow order" caption is M-12, a production clarification only.
- **SOURCE:** source slide 4.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** roadmap crowding.
- **QA_CHECK:** roadmap on one line; question ≥ 24 pt; "Workflow order" caption present.

### Slide 3 — Data for a business question
- **TEACHING_JOB:** identify which data could answer a business question.
- **VISIBLE_CONTENT:**
  - Six tiles, each "source → example question":
    - transactions → "What sells together?"
    - card records → "Which charges look unusual?"
    - web logs → "Where do visitors leave?"
    - surveys → "How satisfied are customers?"
    - service calls → "What do customers complain about?"
    - documents → "What do reviews mention?"
  - RECALL line: "Recall (M6-R1): data come in many forms, structured and unstructured."
- **VISUAL_STRUCTURE:** L-CONCEPT; 3 × 2 tiles with native icons.
- **DATA_USED:** none.
- **LABELS:** RECALL · M6-R1.
- **PC2:** text and icon per tile.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Start from the business question, then ask which data could answer it."
- **BUILD_METADATA:** generic examples only; no company names or claims; zero images from the source deck.
- **SOURCE:** source slides 6 + 40.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** reusing the old web images; tile overflow.
- **QA_CHECK:** zero images; each tile ≤ 2 lines.

### Slide 4 — Primary vs. secondary data
- **TEACHING_JOB:** distinguish primary from secondary data.
- **VISIBLE_CONTENT:**
  - Two columns (Primary | Secondary) × rows (Definition / Typical methods / Example).
  - Primary example: "A store surveys its own customers."
  - Secondary example: "A store reuses published industry statistics or a partner's sales data."
  - Takeaway: "Secondary data were collected for someone else's purpose. Check their fit."
- **VISUAL_STRUCTURE:** L-COMPARE; two-column table.
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** headers in text.
- **NOTES_REQUIRED:** NO.
- **SPEAKER_NOTES:** none.
- **BUILD_METADATA:** no visible historical-dataset label; no "App Store" or "2013" text. The July 2013 lineage exists only in governance records and is not used in this deck.
- **SOURCE:** source slide 7.
- **DENSITY:** LOW.
- **BUILD_RISK:** App Store wording returning.
- **QA_CHECK:** text scan finds no "App Store" or "2013".

### Slide 5 — Records, transactions, and one analysis table
- **TEACHING_JOB:** distinguish record data from transaction data; one row per entity.
- **VISIBLE_CONTENT:**
  - Left: products excerpt P01–P04 (`product_id`, `category`, `price`, `units_sold`), captioned "Record data: one row per product, one column per attribute".
  - Right: orders view (O-101 {P01, P05}; O-102 {P02}; O-103 {P04, P06, P07}), captioned "Transaction data: each order is a set of items".
  - RECALL line: "Recall (M6-R3): rows = observations, columns = variables."
  - RECALL clause: "Transaction data feed association (M6-R4A)."
- **VISUAL_STRUCTURE:** L-DATA; two tables.
- **DATA_USED:** canonical P01–P04; orders view.
- **LABELS:** ILLUSTRATIVE EXAMPLE; RECALL · M6-R3; RECALL · M6-R4A.
- **PC2:** captions in text; grid vs. list shape.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "The orders view is another view of the same store."
- **BUILD_METADATA:** the orders view references only P01–P07; all values come from §4.
- **SOURCE:** source slides 8 + 9.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** overflow.
- **QA_CHECK:** ≤ 4 rows each; table text ≥ 16 pt; values match §4.

### Slide 6 — Types of variables
- **TEACHING_JOB:** map dataset columns to variable types.
- **VISIBLE_CONTENT:** one table, with every cell filled (M-01):

| Column | Type | Example values (from the table) | What values are possible |
|---|---|---|---|
| `product_id` | identifier | P01, P10 | Labels only; not a quantity |
| `category` | categorical, unordered | Books, Home, Electronics | One of the listed categories |
| `price` | numeric, continuous | 8, 120 | Any non-negative amount of money |
| `units_sold` | numeric, discrete count | 40, 940 | Whole numbers 0, 1, 2, … |
| `rating` | ordered | 3, 5 | Only 1, 2, 3, 4 or 5 |
| `featured` | binary | 0, 1 | Only 0 or 1 |

  Footer: "Numeric-looking codes can be categorical (e.g., a product code or zip code). A variable's type limits which values are possible."
- **VISUAL_STRUCTURE:** L-CONCEPT; one 4-column table.
- **DATA_USED:** canonical columns; the examples are actual table values.
- **LABELS:** ILLUSTRATIVE EXAMPLE; EXTEND · M6-R4A.
- **PC2:** text type labels.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Recall from Seminar 4 that category codes need interpretation; today we name the types."
- **BUILD_METADATA:** every cell filled; no example value absent from §4; the 1–5 rating scale is visible here, ahead of slide 22.
- **SOURCE:** source slide 10.
- **DENSITY:** **HIGH.** It is a reference table read row by row; reveal rows 1 → 6, then the footer. Printed static: all rows visible.
- **BUILD_RISK:** table overflow.
- **QA_CHECK:** 6 rows fit at ≥ 16 pt; no empty cell; examples ∈ §4.

### Slide 7 — Samples and representativeness
- **TEACHING_JOB:** a sample should reflect the population on what matters; bigger samples capture shape better but cost more.
- **VISIBLE_CONTENT:**
  - Definition line.
  - "Random sampling helps avoid systematic bias."
  - A course-owned dot-histogram population of 200 customer ages, plus samples of 100, 30 and 8 (§6.6).
  - Captions: "larger sample → shape captured better" · "but more cost and effort" · on the 8-dot panel: "one possible small sample".
- **VISUAL_STRUCTURE:** L-DATA; four stacked dot-histograms on a shared age axis (20–65), in one-dimensional bins. This is not the old two-dimensional shape-sampling figure.
- **DATA_USED:** §6.6 counts.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** sample size written above each panel; dots in one shade; shared axis.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Representativeness is about the attributes that matter for the question. Small samples can hide the shape."
- **BUILD_METADATA:** use §6.6 counts exactly; dots stacked in bins centered at ages 20, 25, …, 65.
- **SOURCE:** source slides 11 (part) + 12.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** similarity to the copied figure; panel crowding.
- **QA_CHECK:** totals 200 / 100 / 30 / 8; one-dimensional dot bins; bimodal at 200/100/30; flat at 8.

### Slide 8 — How much data?
- **TEACHING_JOB:** more data is not automatically better.
- **VISIBLE_CONTENT:**
  - Key statement: "More relevant, representative, high-quality data can help, but more observations are not automatically better."
  - Reasons: "A biased sample stays biased." · "Poor measurement stays poor." · "Collecting and managing data costs time and money."
  - RULE OF THUMB tag: "Keep more observations than variables."
  - Forward pointer: "→ slide 28".
- **VISUAL_STRUCTURE:** L-CONCEPT; key statement plus three cards.
- **DATA_USED:** none.
- **LABELS:** RULE OF THUMB.
- **PC2:** text tags.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "A tall table (many rows, few columns) is usually easier to learn from than a wide one; we revisit this on slide 28."
- **BUILD_METADATA:** the rule of thumb must not be rendered as a hard rule.
- **SOURCE:** source slide 11 (part).
- **DENSITY:** LOW.
- **BUILD_RISK:** none notable.
- **QA_CHECK:** no "always" wording; RULE OF THUMB tag present.

### Slide 9 — Two questions about data
- **TEACHING_JOB:** set the quality vs. preparation boundary.
- **VISIBLE_CONTENT:**
  - **DATA QUALITY: "Is the value right?"** Duplicates · missing values · impossible values · unusual values.
  - **DATA PREPARATION / REPRESENTATION: "Is the representation suitable for the analytical task?"** Scaling · log transformation · binning · indicator coding · fewer categories.
  - Banner: "First we summarize the data so we can see both."
- **VISUAL_STRUCTURE:** L-CONCEPT; two columns with question headers.
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** question headers in text; check icon vs. reshape icon.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "We return to these two questions on slides 17 and 29."
- **BUILD_METADATA:** questions verbatim.
- **SOURCE:** source slide 14.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** reading as a rigid taxonomy.
- **QA_CHECK:** ≤ 5 items per column.

### Slide 10 — Center: mean and median
- **TEACHING_JOB:** mean and median as measures of center; why they can differ.
- **VISIBLE_CONTENT:**
  - "Mean: the average (balance point)."
  - "Median: the middle value when sorted."
  - "Extreme values pull the mean more than the median, so the two can differ."
  - Dot strip of the 10 prices with labeled markers **median $16.5** and **mean $28.0**.
  - Business reading: "typical price ≈ median; average price is pulled up by one expensive product."
- **VISUAL_STRUCTURE:** L-DATA; text left, dot strip right (axis $0–$130).
- **DATA_USED:** canonical `price`.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** median = solid line and mean = dashed line, each text-labeled (the same convention as slide 13).
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "A mean describes the group as a whole, not any particular product."
- **BUILD_METADATA:** **M-10 stacking rule:** equal values are stacked vertically (P03 and P04 at $12 = two dots stacked); no jitter. No equation. The word "skew" must not appear (it is introduced on slide 13).
- **SOURCE:** source slides 15 + 16.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** an equation or "skew" creeping in.
- **QA_CHECK:** 10 dots, with the two at $12 stacked; markers at 16.5 and 28.0; no "skew".

### Slide 11 — Why center is not enough
- **TEACHING_JOB:** same center, different spread.
- **VISIBLE_CONTENT:**
  - Three dot strips: A = {7, 7, 7, 7, 7}; B = {5, 6, 7, 8, 9}; C = {1, 4, 7, 10, 13}.
  - Each labeled "mean 7 · median 7".
  - "Same center, very different spread."
- **VISUAL_STRUCTURE:** L-COMPARE; shared axis 0–14.
- **DATA_USED:** toy sets (§6.7).
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** set names; position.
- **NOTES_REQUIRED:** NO.
- **SPEAKER_NOTES:** none.
- **BUILD_METADATA:** equal values stacked (set A).
- **SOURCE:** source slide 17.
- **DENSITY:** LOW.
- **BUILD_RISK:** misaligned axes.
- **QA_CHECK:** shared axis; values as listed.

### Slide 12 — Spread: range and standard deviation [C]
- **TEACHING_JOB:** read spread, and recognize when a variable barely varies (TEACH).
- **VISIBLE_CONTENT:**
  - "Range: the distance from the smallest to the largest value. Sensitive to extremes."
  - "Standard deviation (SD): how far values typically sit from the mean, in the variable's own units."
  - Example 1: `units_sold`, range 900 (40 to 940), SD 289.9 units.
  - Example 2: shipping fee, $5 for nine products and $6 for one → range $1, SD $0.32.
  - Key statement, verbatim: "**A variable with almost no variation often provides little information for distinguishing observations. That does not make it automatically useless in every context.**"
- **VISUAL_STRUCTURE:** L-DATA; two mini dot strips (wide vs. nearly constant) with value labels; key statement in a caveat-style box.
- **DATA_USED:** canonical `units_sold`; separate shipping-fee example.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** strip names and numbers; the nearly constant strip is visibly flat.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Variance is the squared-unit quantity behind the SD; we do not compute it here."
- **BUILD_METADATA:** the shipping fee is deliberately non-binary; do **not** use `featured` here. Sample SD (n − 1). No variance formula. Range in words, not as a formula.
- **SOURCE:** source slide 18.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** formula creep; using `featured`.
- **QA_CHECK:** SDs match §6.2; qualifier present; no formula.

### Slide 13 — Distributions, histograms, and shape [A]
- **TEACHING_JOB:** see the shape of a numeric variable.
- **VISIBLE_CONTENT:**
  - "A histogram shows the distribution of a numeric variable by grouping values into bins."
  - Text line, verbatim: "**For categorical variables, show category counts with a bar-type display.**"
  - "Skew: asymmetry, a longer tail on one side."
  - Verbatim: "**In a strongly skewed distribution, the mean is often pulled toward the long tail more than the median.**"
  - NOT A RULE tag: "mean > median does not always mean skew."
  - One-line preview, verbatim: "**A transformation such as log can sometimes reduce strong right-skew.**"
- **VISUAL_STRUCTURE:** L-DATA. **ONE chart only:** a native `price` histogram.
  - Bars of heights 6, 2, 1, 0, 0, 0, 1.
  - x-axis "Price ($)" with ticks at 0, 20, 40, 60, 80, 100, 120, 140; y-axis "Number of products" with ticks 0–6.
  - A "long tail" text bracket over the right bars.
  - **Two required vertical markers:** **Median = 16.5 (solid line)** and **Mean = 28.0 (dashed line)**, each text-labeled.
- **DATA_USED:** canonical `price`.
- **LABELS:** ILLUSTRATIVE EXAMPLE; NOT A RULE; "Preview · preparation step (see slide 9)".
- **PC2:** line style plus labels for the markers; the "long tail" bracket in text.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Bin choice changes the look of a histogram." · "Log works only for positive values; details later."
- **BUILD_METADATA:** bin convention per §6.3 (left-closed / right-open; final bin [120, 140)). **Do not place interval notation on the slide.** No log formula. No second chart.
- **SOURCE:** source slides 22 + 23.
- **DENSITY:** **HIGH.** Reveal: (1) histogram + definition + categorical line; (2) skew rule + markers + NOT A RULE; (3) log preview. Printed static: all elements visible and coherent.
- **BUILD_RISK:** a second chart; wrong counts; interval notation leaking onto the slide.
- **QA_CHECK:** bars = 6, 2, 1, 0, 0, 0, 1 (total 10); markers at 16.5 and 28.0 with distinct line styles; "often" present; no interval notation visible.

### Slide 14 — Reading a summary table [B]
- **TEACHING_JOB:** read simple summaries as a synthesis.
- **VISIBLE_CONTENT:** three-column summary table:

| | price ($) | rating (1–5) | featured (0/1) |
|---|---:|---:|---:|
| Products with a value | 10 | 8 | 10 |
| Mean | 28.0 | 4.0 | 0.6 |
| SD | 33.6 | 0.8 | 0.5 |
| Min | 8 | 3 | 0 |
| Max | 120 | 5 | 1 |

  **Exactly two numbered callouts:**
  1. **Binary mean:** "For a 0/1 variable, the mean is the proportion coded 1: here 0.6 → 60% of products are featured. (First five products: 0, 1, 1, 0, 1 → 0.6.)"
  2. **Missing-value cue:** "`rating` has some missing observations (8 of 10). We return to this on slide 19."
- **VISUAL_STRUCTURE:** L-DATA; table plus two numbered callouts with leader lines (to the `featured` mean cell and the `rating` count cell).
- **DATA_USED:** canonical `price`, `rating`, `featured`.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** numbered callouts and leader lines.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Price's maximum sits far above its median, a reminder of the long tail on slide 13."
- **BUILD_METADATA:** exactly two visible callouts; no skew, correlation, scaling, outlier, or near-zero-variation callout; sample SD (n − 1); one decimal.
- **SOURCE:** source slide 19.
- **DENSITY:** **MEDIUM** (reclassified from HIGH). Reveal optional (callout 1 → 2); static print is complete.
- **BUILD_RISK:** callout creep; a fourth column.
- **QA_CHECK:** 3 columns; 2 callouts; the `featured` mean in the table (0.6) equals the callout (0.6); values match §6.2.

### Slide 15 — Correlation: direction and strength [D]
- **TEACHING_JOB:** interpret a correlation coefficient.
- **VISIBLE_CONTENT:**
  - "Pearson r ranges from −1 to +1."
  - "Sign = direction." · "|r| = strength of **linear** association."
  - "r near 0 = little linear association, but a nonlinear relationship may still exist."
  - "Perfect correlation: r = +1 or r = −1."
  - RECALL: "Correlation does not establish causation (M6-R4A)."
- **VISUAL_STRUCTURE:** L-DATA; static layout. Rule text in a left column (about 5.0 in). A **2 × 2 grid** of schematic panels on the right (about 6.8 × 4.8 in; each panel about 3.2 × 2.2 in; captions 16 pt).
  - Panel captions: "strong positive" · "near zero" · "strong negative" · "curved: r near 0, but clearly related".
  - Coordinates in §6.8. This is not the old seven-panel strip.
- **DATA_USED:** §6.8 schematic sets (not store data).
- **LABELS:** RECALL · M6-R4A.
- **PC2:** caption per panel; patterns visible in grayscale.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "The curved panel is the key caution: a near-zero r does not mean 'no relationship'."
- **BUILD_METADATA:** no formula; no reveal required; panel captions do not print exact r values.
- **SOURCE:** source slide 20.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** formula creep; strip layout.
- **QA_CHECK:** four panels; 2 × 2 grid; points per §6.8.

### Slide 16 — Correlation matrix and matrix plot
- **TEACHING_JOB:** read a correlation matrix as a screening aid.
- **VISIBLE_CONTENT:**
  - A 2 × 2 matrix with rows and columns `price` and `units_sold`: diagonal **1.00**, off-diagonal **−0.80** (both cells).
  - Beside it, a scatter of `units_sold` against `price` for P01–P10.
  - "Diagonal = 1 (a variable with itself). The matrix is symmetric."
  - "−0.80: strong negative linear association. Pricier products sold fewer units in this example."
  - Caveat: "A screening aid for redundant variables, not proof."
- **VISUAL_STRUCTURE:** L-DATA; matrix left, scatter right (x: Price ($) 0–130; y: Units sold 0–1,000).
- **DATA_USED:** canonical `price` and `units_sold` only (complete). **`rating` is not used.**
- **LABELS:** ILLUSTRATIVE EXAMPLE; caveat tag.
- **PC2:** numbers in every cell; axis titles.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Larger datasets give bigger matrices; the reading rules are the same."
- **BUILD_METADATA:** r recomputed from §4 = −0.7995 → **two decimals: −0.80**. No missing-data handling.
- **SOURCE:** source slides 21 + 24.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** adding `rating`; heat-only encoding.
- **QA_CHECK:** 2 variables; cells show 1.00 / −0.80; recomputation matches.

### Slide 17 — Data quality: four things to check
- **TEACHING_JOB:** organize the quality block.
- **VISIBLE_CONTENT:**
  - Header recall: "Is the value right?"
  - **Four things to check:** duplicates · missing values · impossible/invalid values · unusual/outlier values.
  - "An unusual value is something to check, not automatically a problem or an error (slide 22)."
  - Prompt: "What would you check, and why?"
- **VISUAL_STRUCTURE:** L-CONCEPT; four tiles with native icons (two overlapping rectangles; an empty dashed cell; a crossed box; a distant dot).
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** icon shape plus a text label.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Each of these four checks gets its own slide next."
- **BUILD_METADATA:** never use "four problems".
- **SOURCE:** source slide 25.
- **DENSITY:** LOW.
- **BUILD_RISK:** historical wording leaking in.
- **QA_CHECK:** "four things to check" present; "problems" absent as the frame.

### Slide 18 — Duplicates
- **TEACHING_JOB:** recognize duplicates and treat them by documented judgment.
- **VISIBLE_CONTENT:**
  - Merged listing (§6.5): P03 appears twice (store catalog vs. partner feed) next to one normal row (P02).
  - Options: "keep the most reliable record (needs a trustworthy timestamp)" · "merge" · "delete".
  - "Write down which rule you used."
- **VISUAL_STRUCTURE:** L-DATA; a three-row table with the two P03 rows bracketed "same product".
- **DATA_USED:** derived merged-listing view (§6.5).
- **LABELS:** ILLUSTRATIVE EXAMPLE; caption "Merged listing from two sources (derived view)".
- **PC2:** bracket plus text.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Duplicates are common after merging data from different sources."
- **BUILD_METADATA:** P03 field values identical to §4; only `source` and `last_updated` differ. No new canonical product.
- **SOURCE:** source slide 26.
- **DENSITY:** LOW.
- **BUILD_RISK:** inconsistent duplicate values.
- **QA_CHECK:** rows exactly as §6.5.

### Slide 19 — Missing values: what is missing?
- **TEACHING_JOB:** what counts as missing.
- **VISIBLE_CONTENT:**
  - "Missingness is not a value."
  - The `rating` column P01–P10 with P04 and P08 shown as "(missing)".
  - Why values go missing: not collected · not applicable · not yet recorded.
  - "0 vs. missing vs. not applicable": "a balance of 0 vs. no account at all".
  - "Many methods drop or cannot use incomplete records unless you handle them."
- **VISUAL_STRUCTURE:** L-DATA; rating column left, three reason cards right.
- **DATA_USED:** canonical `rating`.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** dashed empty cell plus "(missing)".
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "A rare value that is present is not the same as a missing value."
- **BUILD_METADATA:** blanks never rendered as 0.
- **SOURCE:** source slide 27.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** blanks shown as 0.
- **QA_CHECK:** P04 and P08 show "(missing)".

### Slide 20 — Handling missing values [E]
- **TEACHING_JOB:** choose a treatment that fits type, context and purpose.
- **VISIBLE_CONTENT:**
  - Options: substitute a value · omit the records · drop the variable.
  - Verbatim: "**Treatment depends on variable type, context, and purpose.**"
  - Numeric illustration: "For a numeric column, a simple option is to fill blanks with the mean of the observed values. For `rating`, that would be 4.0."
  - Caveat: "**Mean imputation is only a simple numeric example. It is not a default for categorical or binary variables**: `category` has no mean, and a 0/1 mean such as 0.6 is not a valid value."
  - RULE OF THUMB tag: "If a variable is mostly missing, dropping it may be reasonable." No numeric threshold.
- **VISUAL_STRUCTURE:** L-DATA; three option cards plus a caveat box. **No imputed table on the slide** (text only).
- **DATA_USED:** canonical `rating` (observed mean 4.0); `category` and `featured` cited by name and their 0.6 mean.
- **LABELS:** ILLUSTRATIVE EXAMPLE; CAUTION; RULE OF THUMB.
- **PC2:** dashed-border text tags.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Filling with the mean keeps rows but makes values look less varied." · "`rating` is an ordered scale; the mean fill is shown only as the simplest numeric illustration."
- **BUILD_METADATA:**
  - The canonical §4 table is **not altered**. Any imputed view, if ever shown, must be separate and labeled "ILLUSTRATIVE — DERIVED (imputed) VIEW".
  - The source deck's percentage example is **not carried** (historical source context only).
  - No percentage threshold is visible.
- **SOURCE:** source slide 28.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** a fixed % on the slide; 0.5 instead of 0.6.
- **QA_CHECK:** no % threshold; caveat uses 0.6; canonical table unchanged.

### Slide 21 — Detecting unusual values
- **TEACHING_JOB:** spot observations far from the rest; ±3 SD is a heuristic.
- **VISIBLE_CONTENT:**
  - "An outlier is an observation far from the rest. 'Far' is deliberately vague."
  - A **course-owned schematic** dot strip: 19 roughly symmetric values plus one distant value (§6.4).
  - Visual band marking mean ± 3 SD with the distant point outside it, labeled "beyond the ±3 SD heuristic".
  - RULE OF THUMB: "±3 SD from the mean is a common heuristic, most useful for roughly symmetric data."
  - "Unusual values can strongly influence results."
- **VISUAL_STRUCTURE:** L-DATA; dot strip (axis 25–85) with a shaded band and text-labeled band edges.
- **DATA_USED:** §6.4 schematic only. **P10 is not used here.**
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** band edges labeled "−3 SD" and "+3 SD"; the band is shown with dashed edge lines (not shading alone); the distant point is annotated in text.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "±3 SD is a heuristic, not a definition. Context matters, and the rule is easiest to interpret when data are roughly symmetric. Not every unusual value crosses this line."
- **BUILD_METADATA:**
  - Schematic values not added to §4.
  - QA-only fact (never in notes or on the slide): with n = 10, no value can exceed ±3 sample SD (maximum |z| = 9/√10 ≈ 2.85). That is why P10 cannot demonstrate the heuristic.
- **SOURCE:** source slide 29.
- **DENSITY:** LOW.
- **BUILD_RISK:** reusing P10; a wrong band.
- **QA_CHECK:** mean 51.2, SD 7.35, band 29.1–73.3, z(80) = 3.92; P10 absent.

### Slide 22 — Outlier ≠ error [F]
- **TEACHING_JOB:** judge a flagged value.
- **VISIBLE_CONTENT:**
  - Headline: **"OUTLIER ≠ ERROR"**.
  - Self-contained scale (shown at the top, before the examples): "`rating` allows only 1, 2, 3, 4 or 5."
  - **IMPOSSIBLE / INVALID** — "Breaks a coding or domain rule." Example: a new entry, **P11, with rating = 7**, outside 1–5.
  - **UNUSUAL / OUTLIER** — "Rare but possibly valid." Example: **P10 priced at $120**, a real expensive product.
  - "Domain knowledge decides. Do not remove unusual values automatically."
- **VISUAL_STRUCTURE:** L-COMPARE; two panels.
- **DATA_USED:** hypothetical P11 entry (§6.5); canonical P10.
- **LABELS:** ILLUSTRATIVE EXAMPLE; P11 captioned "incoming entry (not in the table)".
- **PC2:** headers in text; invalid panel = crossed-box icon + solid border; unusual panel = distant-dot icon + dashed border; no red/green.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "After checking, a few invalid entries may be treated as missing." · Optional: "50 °C is implausible in some climates and possible in others."
- **BUILD_METADATA:** P11 is never added to §4.
- **SOURCE:** source slide 30.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** red/green styling; P11 shown in the table.
- **QA_CHECK:** 1–5 scale visible before the examples; P11 captioned as incoming.

### Slide 23 — Why scale matters
- **TEACHING_JOB:** scale dominance with one concrete case.
- **VISIBLE_CONTENT:**
  - RECALL: "Recall (M6-R4A): representation changes comparisons."
  - "`price` spans $8–$120 (range 112). `units_sold` spans 40–940 (range 900)."
  - "Combine them unscaled, and the larger-range variable dominates the comparison."
- **VISUAL_STRUCTURE:** L-DATA; two range bars on a common numeric scale, with endpoint labels.
- **DATA_USED:** canonical ranges.
- **LABELS:** ILLUSTRATIVE EXAMPLE; RECALL · M6-R4A.
- **PC2:** length plus labels.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "This is why the next slide rescales variables."
- **BUILD_METADATA:** no distance formula; no re-teaching of M6-R4A.
- **SOURCE:** source slides 32 + 34.
- **DENSITY:** LOW.
- **BUILD_RISK:** re-teaching distance.
- **QA_CHECK:** one example; ranges match §6.2.

### Slide 24 — Two scaling choices [T]
- **TEACHING_JOB:** two different ways to put numeric variables on comparable scales.
- **VISIBLE_CONTENT:**
  - **STANDARDIZATION** card: "Z-standardization centers a variable at 0 and scales it to unit standard deviation." Formula 1: **z = (x − mean) / SD**. "It does not make the distribution normal."
  - **MIN-MAX NORMALIZATION** card: Formula 2: **x′ = (x − min) / (max − min)**. "Commonly maps the observed range to 0–1."
  - **MINI EXAMPLE** (standalone; three values only): 10, 20, 40, with min = 10 and max = 40 → **0, 0.33, 1**.
  - Footer: "Two different choices. Do not call both simply 'normalization'."
- **VISUAL_STRUCTURE:** L-COMPARE; two equal cards; the mini example as a 3-row table inside the min-max card, tagged "MINI EXAMPLE".
- **DATA_USED:** standalone mini example (§6.9), **not the canonical `price` column**.
- **LABELS:** MINI EXAMPLE.
- **PC2:** card headers in text.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Binary indicators may already be on a comparable 0–1 scale; handle them according to the modeling purpose."
- **BUILD_METADATA:**
  - No association with any product ID.
  - Do not show "price" or "$" on the mini example.
  - No log content; no sample-vs-population SD discussion.
  - The only two formulas in the deck.
- **SOURCE:** source slide 33.
- **DENSITY:** **HIGH.** Reveal: standardization card → min-max card → mini example. Printed static: both cards are complete and independent.
- **BUILD_RISK:** row association returning; formula readability; log reappearing.
- **QA_CHECK:** mini example labeled and standalone; 10 → 0, 20 → 0.33, 40 → 1; equations ≥ 24 pt; deck formula count = 2.

### Slide 25 — Binning and binary conversion
- **TEACHING_JOB:** turn numbers into categories, knowing the cost.
- **VISIBLE_CONTENT:**
  - Price tiers: Low (under $15): 4 products · Mid ($15 to under $30): 4 · High ($30 and over): 2.
  - "Binning loses detail: $40 and $120 both become 'High'."
  - "A score or probability → yes/no using a chosen cut-off", e.g., "likelihood to buy ≥ 0.5 → 'likely buyer'".
- **VISUAL_STRUCTURE:** L-DATA; a number line split into three labeled segments with boundary ticks at $15 and $30.
- **DATA_USED:** canonical `price`.
- **LABELS:** ILLUSTRATIVE EXAMPLE.
- **PC2:** segment labels and ticks.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Cut-offs are choices; different cut-offs give different categories."
- **BUILD_METADATA:** boundary rule: 15 → Mid; 30 → High (no price equals 30).
- **SOURCE:** source slide 35 (part).
- **DENSITY:** LOW.
- **BUILD_RISK:** boundary ambiguity.
- **QA_CHECK:** counts 4 / 4 / 2.

### Slide 26 — Indicator coding vs. category codes
- **TEACHING_JOB:** codes are labels; indicators represent categories for analysis.
- **VISIBLE_CONTENT:**
  - RECALL: "Recall (M6-R4A): codes like Low = 1, Mid = 2, High = 3 are labels, not distances."
  - EXTEND: a table for P01, P04 and P09 with `category` and three 0/1 indicators (is_Books, is_Home, is_Electronics).
  - "One 0/1 indicator per category."
- **VISUAL_STRUCTURE:** L-COMPARE.
- **DATA_USED:** canonical `category` (P01 Books; P04 Home; P09 Electronics).
- **LABELS:** ILLUSTRATIVE EXAMPLE; RECALL · M6-R4A.
- **PC2:** headers; 0/1 printed.
- **NOTES_REQUIRED:** NO.
- **SPEAKER_NOTES:** none.
- **BUILD_METADATA:** exactly one 1 per row.
- **SOURCE:** source slide 35 (part).
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** none notable.
- **QA_CHECK:** indicator rows (1,0,0), (0,1,0), (0,0,1).

### Slide 27 — Reducing categories
- **TEACHING_JOB:** combine categories when there are too many.
- **VISIBLE_CONTENT:**
  - "Too many categories create too many indicators."
  - "Combine sparse or similar categories into groups that make business sense."
  - Schematic: Fiction, Non-fiction, Comics → Books; Kitchen, Bedding, Lighting → Home; Phones, Audio → Electronics.
- **VISUAL_STRUCTURE:** L-CONCEPT; many-to-few grouping diagram.
- **DATA_USED:** schematic labels (consistent with the canonical categories).
- **LABELS:** none (no toy values; schematic).
- **PC2:** brackets and labels.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "Some models, such as regression, use one fewer indicator than the number of categories, with a reference category; details come later."
- **BUILD_METADATA:** no m − 1 text on the slide.
- **SOURCE:** source slide 36.
- **DENSITY:** LOW.
- **BUILD_RISK:** m − 1 detail leaking onto the slide.
- **QA_CHECK:** no m − 1 on the slide.

### Slide 28 — Rows, columns, missingness, dimensionality
- **TEACHING_JOB:** keep four terms distinct; see why many variables cost.
- **VISIBLE_CONTENT:**
  - The canonical table outline: column headers, row IDs P01–P10, and the two `rating` cells shown as "(missing)". Other cells are left as light placeholders, with no values.
  - Rows = **observations** (10 products); columns = **variables/features**.
  - "**Dimensionality = the number of variables/features used.** If an analysis uses price, units_sold, rating and featured, its dimensionality is 4."
  - The two "(missing)" cells labeled "missingness, a separate issue".
  - "More variables need more data, make distances less informative, and each variable should earn its place."
  - RECALL: "Recall: a variable with little variation may add little separation (slide 12)."
- **VISUAL_STRUCTURE:** L-CONCEPT; annotated grid.
- **DATA_USED:** canonical table structure (headers, IDs, missing markers).
- **LABELS:** ILLUSTRATIVE EXAMPLE (it shows the canonical row IDs and missing positions); RECALL · M6-R3; RECALL (slide 12).
- **PC2:** text annotations; brackets; dashed "(missing)" cells.
- **NOTES_REQUIRED:** YES.
- **SPEAKER_NOTES:** "The intuition is enough here: more columns ask more of the data."
- **BUILD_METADATA:** near-zero variation as RECALL only; no "sparsity" term; numeric cell values not displayed.
- **SOURCE:** source slide 37.
- **DENSITY:** MEDIUM.
- **BUILD_RISK:** becoming a miscellaneous cleanup slide.
- **QA_CHECK:** four terms each labeled once; label present; no "sparsity".

### Slide 29 — Close: understand → clean → represent → prepare
- **TEACHING_JOB:** consolidate, with no new content.
- **VISIBLE_CONTENT:**
  - Flow: **understand → clean → represent → prepare** (before modeling).
  - Two questions: "DATA QUALITY: Is the value right?" · "DATA PREPARATION / REPRESENTATION: Is the representation suitable for the analytical task?"
  - Prompt: "Does this summary, correlation, or cleaning choice make sense?"
- **VISUAL_STRUCTURE:** L-CLOSE; four chevrons above the two-question pair.
- **DATA_USED:** none.
- **LABELS:** none.
- **PC2:** position and arrows plus text.
- **NOTES_REQUIRED:** NO.
- **SPEAKER_NOTES:** none.
- **BUILD_METADATA:** nothing new beyond slides 1–28.
- **SOURCE:** source slides 31 + 14.
- **DENSITY:** LOW.
- **BUILD_RISK:** new content.
- **QA_CHECK:** every item appears earlier.

## 6. Deterministic data and QA metadata (build-only; verified by independent recomputation)

### 6.1 Conventions

| Convention | Rule |
|---|---|
| SD | **Sample standard deviation, denominator n − 1** (e.g., STDEV.S), for every displayed SD. Never shown or taught on slides. |
| Display | One decimal for means and SDs, except the shipping-fee SD (two decimals: 0.32) and correlations (two decimals). Integers stay integers. |
| Histogram | **Left-closed / right-open** bins; the final bin [120, 140) holds 120. Interval notation is build-only, never on the slide. |

### 6.2 Canonical summaries (from §4)

| Variable | n | Mean | Median | Min | Max | Range | Sample SD |
|---|---:|---:|---:|---:|---:|---:|---:|
| price | 10 | 28.0 | 16.5 | 8 | 120 | 112 | 33.6 (33.642) |
| units_sold | 10 | 562.0 | 565 | 40 | 940 | 900 | 289.9 (289.858) |
| rating (observed) | 8 (2 missing: P04, P08) | 4.0 | 4 | 3 | 5 | 2 | 0.8 (0.756) |
| featured | 10 (6 ones, 4 zeros) | 0.6 | — | 0 | 1 | 1 | 0.5 (0.516) |

- featured P01–P05 = 0, 1, 1, 0, 1 → 0.6.
- **r(price, units_sold) = −0.7995 → −0.80.**
- Price tiers: < 15 → 4 · 15 to < 30 → 4 · ≥ 30 → 2.
- Shipping fee: [5, 5, 5, 5, 5, 5, 5, 5, 5, 6] → mean 5.1, median 5, range 1, sample SD 0.316 → 0.32.

### 6.3 Histogram (slide 13)

| Bin | [0,20) | [20,40) | [40,60) | [60,80) | [80,100) | [100,120) | [120,140) | Total |
|---|---|---|---|---|---|---|---|---|
| Count | 6 | 2 | 1 | 0 | 0 | 0 | 1 | **10** |

Members:
- [0,20): 8, 10, 12, 12, 15, 18
- [20,40): 20, 25
- [40,60): 40
- [120,140): 120

### 6.4 Slide-21 schematic (not canonical)

- Values: 44, 45, 46, 47, 48, 48, 49, 49, 50, 50, 50, 50, 51, 51, 52, 52, 53, 54, 55, **80** (n = 20).
- Mean 51.2; sample SD 7.35; ±3 SD band 29.14 to 73.26.
- **z(80) = 3.92.** All other |z| ≤ 0.98.

### 6.5 Derived and hypothetical views

| View | Rows | Rule |
|---|---|---|
| Orders (slide 5) | O-101 {P01, P05}; O-102 {P02}; O-103 {P04, P06, P07} | — |
| Merged listing (slide 18); fields shown: source · product_id · category · price · last_updated | 1. store catalog · P03 · Books · 12 · 2026-03-02 <br>2. partner feed · P03 · Books · 12 · 2026-01-15 <br>3. store catalog · P02 · Books · 10 · 2026-03-02 | `source` and `last_updated` are listing metadata, not canonical columns |
| Hypothetical incoming entry (slide 22) | P11 · rating = 7 | **Never in §4.** No 11th canonical row. |

### 6.6 Slide-7 dot-histogram counts (ages; bin centers 20, 25, …, 65)

| Set | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Population | 20 | 40 | 26 | 10 | 4 | 10 | 26 | 40 | 20 | 4 | 200 |
| Sample 100 | 10 | 20 | 13 | 5 | 2 | 5 | 13 | 20 | 10 | 2 | 100 |
| Sample 30 | 3 | 6 | 4 | 1 | 1 | 1 | 4 | 6 | 3 | 1 | 30 |
| Sample 8 ("one possible small sample") | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 8 |

### 6.7 Slide-11 toy sets

- A = {7, 7, 7, 7, 7}; B = {5, 6, 7, 8, 9}; C = {1, 4, 7, 10, 13}.
- Mean = median = 7 for all; ranges 0 / 4 / 12.

### 6.8 Slide-15 schematic panels (x = 1 … 10)

| Panel | y values | r (QA only) |
|---|---|---:|
| Strong positive | 2, 1, 3.5, 3.5, 6.5, 4.5, 7.5, 7, 10, 9.5 | 0.94 |
| Near zero | 5, 2, 7, 4, 6, 3, 8, 5, 2, 6 | 0.07 |
| Strong negative | 9.5, 10, 7, 7.5, 4.5, 6.5, 3.5, 4, 1, 1.5 | −0.94 |
| Curved | 10.125, 6.125, 3.125, 1.125, 0.125, 0.125, 1.125, 3.125, 6.125, 10.125 | 0.00 |

The r values are never printed on the slide.

### 6.9 Slide-24 MINI EXAMPLE (standalone)

- Values 10, 20, 40; min 10; max 40.
- x′: 10 → 0, 20 → 0.333 → **0.33**, 40 → 1.
- Not linked to `price`. If the canonical `price` were rescaled, its min would be 8 and its max 120.

## 7. Density summary

| Density | Slides |
|---|---|
| LOW | 1, 4, 8, 11, 17, 18, 21, 23, 25, 27, 29 |
| MEDIUM | 2, 3, 5, 7, 9, 10, 12, **14**, 15, 16, 19, 20, 22, 26, 28 |
| HIGH | 6, 13, 24 |

Each HIGH slide has a reveal plan and a complete static (print) state. No frozen-content change is needed for 16:9.

## 8. Accessibility / PC-2 matrix

| Slide | Element | Non-color carrier (works in grayscale, for color-vision deficiency, and in print) |
|---|---|---|
| 2, 29 | Chevrons | Position, arrows, text |
| 5, 6, 14, 18, 19, 26 | Tables | Text headers with units; light banding only |
| 7, 10, 11, 12 | Dot plots | Labels; stacked dots; solid vs. dashed markers |
| 13 | Histogram | Axis titles; "long tail" text; median solid vs. mean dashed, both labeled |
| 15 | Scatter panels | Caption per panel |
| 16 | Matrix + scatter | Numbers in every cell; axis titles |
| 17, 22 | Tiles / panels | Icon shape + text; solid vs. dashed borders; no red/green |
| 21 | Dot strip + band | Dashed band edges labeled ±3 SD; text annotation |
| 23, 25, 27, 28 | Diagrams | Lengths, ticks, brackets, labels |

- Text contrast at least WCAG AA.
- Every reveal slide reads completely in print.

## 9. Speaker-note vs. build-metadata separation

- **SPEAKER_NOTES** hold only student-safe lecturer nuance. Assume students may see them.
- **BUILD_METADATA** holds builder-only instructions and validation facts, and is never placed in PowerPoint notes.
- Notes contain no assessment material, M6-R4B content, held filenames, App Store references, source-deck references, "four problems" wording, or validation derivations.
- **Slides with notes:** 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28.
- **Slides without notes:** 1, 4, 11, 26, 29.

## 10. Build-risk register (v1 items retained, plus the M-11 gates)

| # | RISK | LIKELIHOOD | IMPACT | MITIGATION | QA_GATE |
|---|---|---|---|---|---|
| 1 | Table overflow (5, 6, 14) | Medium | Medium | ≤ 6 rows; ≥ 16 pt; fixed widths | No clipping at 100% |
| 2 | Formula readability (24) | Medium | Medium | Native equation; ≥ 24 pt | Legible in grayscale PDF |
| 3 | Histogram axis or count error (13) | Medium | High | §6.3 | Bars 6, 2, 1, 0, 0, 0, 1; axis titles present |
| 4 | Summary-table crowding (14) | Medium | Medium | 3 columns; 2 callouts | Visual check |
| 5 | Correlation-matrix readability (16) | Low | Medium | Numbers printed | Cells 1.00 / −0.80 |
| 6 | Speaker-note leakage | Medium | Medium | §9 separation | Notes scan (see 21) |
| 7 | Similarity to copied figures (7, 15, 21) | Medium | High | §6 redesigned sets | No matching composition with the source deck |
| 8 | Inconsistent toy values | Medium | High | §4 + §6 single source | All displayed numbers recomputed |
| 9 | Historical App Store leakage | Low | High | Never open source-deck data slides during build | Scan: "App Store", "2013", "Rating_Volume" absent |
| 10 | PC-2 failure | Medium | High | §8 | Grayscale render review, all 29 slides |
| 11 | Font substitution | Low | Medium | Arial only | Font audit 100% Arial |
| 12 | 16:9 overflow | Low | Medium | §3 margins | No object outside the canvas |
| 13 | Formula-count drift | Low | Medium | Words elsewhere | Exactly 2 formulas, both on slide 24 |
| 14 | Slide-10 "skew" / equation creep | Medium | Medium | Metadata rule | Text review |
| **15** | **Histogram bin-edge convention** | Medium | High | §6.1 / §6.3 left-closed; final [120,140) | Recount from §4 = 6, 2, 1, 0, 0, 0, 1, total 10; no interval notation on the slide |
| **16** | **SD convention** | Medium | Medium | Sample SD, n − 1 | Independent recomputation of every displayed SD vs. §6.2 (33.6, 289.9, 0.8, 0.5, 0.32) |
| **17** | **Min-max mini example tied to the dataset** | Low | High | §6.9 standalone; MINI EXAMPLE tag | No product ID, "price" or "$" on the mini example; 10 → 0, 20 → 0.33, 40 → 1 |
| **18** | **±3 SD schematic arithmetic** | Low | High | §6.4 | Recompute mean 51.2, SD 7.35, z(80) = 3.92 > 3; P10 absent from slide 21 |
| **19** | **featured mean consistency** | Medium | Medium | §4 (6 ones) | Table 0.6 = callout 0.6 = slide-20 caveat 0.6 |
| **20** | **Slide-16 correlation recomputation** | Low | Medium | §6.2 | Recompute r from §4 = −0.7995 → −0.80 |
| **21** | **P03 / derived-view identity** | Low | Medium | §6.5 | P03 rows equal §4 values; only source and date differ |
| **22** | **P11 outside the canonical table** | Low | High | §6.5 | §4 has exactly 10 rows; P11 appears only on slide 22 as "incoming entry" |
| **23** | **Slide-14 exactly two callouts** | Medium | Medium | Metadata rule | Callout count = 2 |
| **24** | **Speaker-note vs. build-metadata separation** | Medium | Medium | §9 | No BUILD_METADATA text in PowerPoint notes; notes scan for builder phrases, validation math, source references |

## 11. Patch disposition (from the red-team)

| ID | Disposition |
|---|---|
| BP-R1 | **APPLIED.** MINI EXAMPLE, standalone; P02/P07/P09 association removed (slide 24; §6.9). |
| BP-R2 | **APPLIED.** P06 featured 0 → 1; 6 ones / 4 zeros; mean 0.6; slides 14 and 20 updated. |
| BP-R3 | **APPLIED** with the override: left-closed / right-open; final [120,140); build metadata and QA only; no interval notation on the slide. |
| BP-R4 | **APPLIED.** Sample SD (n − 1), build-only; QA gate 16. |
| BP-R5 | **APPLIED.** Slide 21 uses the §6.4 schematic; P10 only on slide 22; the n = 10 fact is QA metadata only. |
| M-01 | **APPLIED.** Slide 6: all cells filled with actual table values or generic descriptors; no 12.50. |
| M-02 | **APPLIED.** Slide 7: §6.6 deterministic counts. |
| M-03 | **APPLIED.** Slide 15: §6.8 coordinates; static 2 × 2 layout. |
| M-04 | **APPLIED** with the override: the markers are **required** (median 16.5 solid; mean 28.0 dashed). |
| M-05 | **APPLIED.** Slide 18: §6.5 exact rows and fields. |
| M-06 | **APPLIED.** Slide 20: canonical unchanged; text-only; "source's 90%" removed from notes (historical context in metadata only). |
| M-07 | **APPLIED.** Builder-only statements moved to BUILD_METADATA (slides 3, 4, 12, 20; also slides 10, 14, 24). Slide 4 notes → NO. |
| M-08 | **APPLIED.** Slide 21 notes: heuristic, context, symmetry; no derivation. |
| M-09 | **APPLIED.** Slide 28: dimensionality phrased conditionally; ILLUSTRATIVE EXAMPLE label (it shows the canonical IDs and missing positions). |
| M-10 | **APPLIED.** Production-only stacking rule (slides 10, 11). |
| M-11 | **APPLIED.** Gates 15–24 added; items 1–14 retained. |
| M-12 | **APPLIED.** Production-only "Workflow order" caption plus a student-safe note; the frozen claim is unchanged. |
| Slide-14 density | **Reclassified MEDIUM.** |

## 12. Frozen-content conformance (29 slides)

| Class | Slides |
|---|---|
| EXACT | 1, 8, 9, 11, 12, 13, 14, 15, 16, 17, 19, 22, 23, 24, 26, 29 |
| SAFE-PRODUCTION-INTERPRETATION | 2, 3, 4, 5, 6, 7, 10, 18, 20, 21, 25, 27, 28 |
| **CONTENT_DRIFT** | **0** |

No new teaching claim was added. The patches change toy values, labels, layout, and build rules only.

## 13. Boundaries and handoffs (unchanged)

- **M6-R4B = HOLD.** None of these appear: `admission.csv`, import/export instruction, user-defined functions, packages, exercise filenames, R code, solution, InClass, or exam/review material.
- **HANDOFF-ASSESS-01:** CLOSED only for M6-R5 content-freeze scope.
- **AF-R5-01:** OPEN — ASSESSMENT-FREEZE TRANCHE.
- **HANDOFF-M5-01:** OPEN.
- **HANDOFF-S3-01:** OPEN.

## 14. Integrity

- v1 preserved unchanged.
- Content spec v1.3 unchanged.
- Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
- No PPTX, PDF, PNG, SVG, chart, script, build spec, or render folder created.
- Git staged: 0. Commit: 0. Push: 0.
