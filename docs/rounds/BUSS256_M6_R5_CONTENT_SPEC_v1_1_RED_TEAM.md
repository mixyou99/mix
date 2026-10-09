# BUSS256 M6-R5 — Content Spec v1.1 Red-Team

*Recorded 2026-10-09. Read-only red-team of `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_1.md` (SHA-256 `cb189e53…`). It applies project-lead decisions D-R5-01 to D-R5-04 in the analysis only; the spec is not patched, no v1.2 is created, and nothing is frozen.*

**Inputs:**
- the v1.1 spec;
- the three M6-R5 evidence records (authority, assessment alignment, external verification);
- the closed M6-R4A deck text (overlap check).

Assessment files were not re-read; only the abstract alignment record was used. M6-R4B content was not read.

## A. Overall verdict

**PASS-WITH-PATCHES**

The architecture is sound and 29 slides can work. However, v1.1 has four problems:
- **Block C density.** Slides 9–16 make up 8 of 29 slides, and they carry formulas.
- **A sequencing fault.** Skew is applied on the summary-table slide (13) before the distribution slide (14) teaches shape, and D-R5-01 now moves the log preview onto slide 14.
- **Overclaims.** These are the correlation "very little variation" example, the "0/1 indicators are not rescaled" rule, skew stated without "often", and "when computed from the same data".
- **One hidden assessment-shaped stimulus risk** on the summary-table slide.

All of these are fixable with bounded patches and one **local swap of slides 13 and 14**. No block-level restructure is needed.

## B. Top five risks

| # | Risk | Where | Why it matters | Fix (see §E) |
|---|---|---|---|---|
| 1 | **Statistics-course drift in block C** | 9–16 (+24) | Eight consecutive descriptive-statistics slides, each with a formula (mean/median, variance with m − 1, Pearson as covariance/(SD·SD), z, min-max). The lecture starts to read as a stats unit rather than "understand the data before modeling". | RT-01, RT-02, RT-03 |
| 2 | **Skew is used before it is taught, and slide 14 is overloaded by D-R5-01** | 10, 13, 14 | v1.1 teaches skew on 10, applies it on 13 ("max far above mean"), and only shows shape on 14. Moving the log preview to 14 adds a fifth idea there. | RT-04 (swap 13 and 14; teach skew with the histogram) |
| 3 | **Overclaims and ambiguous rules** | 15, 24, 10, 27 | Correlation "very little variation" example (r is unstable or undefined as variance → 0); "0/1 indicators are not rescaled" (not universally true); skew rule without "often"; "when computed from the same data" (invites sample-vs-population questions); the m − 1 regression detail is premature in Wk 4. | RT-05, RT-06, RT-07, RT-08 |
| 4 | **Assessment-shaped stimulus** | 13 (summary table) | Packing every assessed cue into one summary table makes it a structural near-clone of a test stimulus: a 0/1 variable, a variable with fewer observations, very different scales, and a long right tail. That is teaching to the test, even with different values. | RT-09 (distribute cues; recurring dataset; no near-zero-variance 0/1 field) |
| 5 | **Quality vs. preparation boundary and R4A repetition** | 9, 14, 23 | The log preview sits in the summary block. Slide 9 is a generic workflow map. Slide 23 risks re-teaching M6-R4A slide 12 ("different attributes or scales can change the comparison"). | RT-10, RT-11 |

## C. Slide-by-slide findings (all 29; v1.1 numbering)

| # | Title (v1.1) | One dominant teaching job? | Finding | Rec. |
|---:|---|---|---|---|
| 1 | Title | Yes | — | PASS |
| 2 | Bridge + roadmap | Yes (why prepare data) | Lecture-level map. Keep distinct from slide 9 (block-level map). | PASS |
| 3 | Where business data come from | Yes | Risks repeating M6-R1 "Variety". Frame it as "which data could answer a business question", in text or native icons, kept brief. | PATCH (RT-12) |
| 4 | Primary vs. secondary | Yes | D-R5-02: use a fully generic or course-owned example; remove the course-dataset label from student-facing content (speaker notes optional). | PATCH (RT-13) |
| 5 | Records, transactions, one table | Yes | Use the recurring store dataset (products table plus a small orders view, both explained). M6-R3 recall in one line. | PATCH (RT-09) |
| 6 | Types of variables | Borderline (taxonomy) | Six dimensions risk an "exhaustive taxonomy". Anchor each type to a column of the recurring dataset, and keep "type limits possible values" as one clause (seed for 22). | PATCH (RT-14) |
| 7 | Samples and representativeness | Yes | Native redraw only. | PASS |
| 8 | How much data? | Yes | Correction E plus one heuristic; forward pointer to 28. | PASS |
| 9 | Summarize → clean → prepare | Weak (generic) | Make this the **quality vs. preparation boundary map** ("Is the value right?" vs. "Is the representation suitable for the method?"). | PATCH (RT-10) |
| 10 | Center: mean and median | No (4 ideas) | Overloaded: definitions + outlier sensitivity + skew + "a mean describes the group". Skew moves to the distribution slide. The group-vs-individual line is assessment-driven; move it to notes. Plain language, no equation. | PATCH (RT-01, RT-04, RT-15) |
| 11 | Why center is not enough | Yes | Verified toy sets; strong. | PASS |
| 12 | Spread **[C]** | Yes, with patch | Drop the variance formula (m − 1). Near-zero variation is the natural TEACH point here, but use a **non-binary, nearly constant attribute** (e.g., almost every product ships from the same warehouse). Business reading of SD. | PATCH (RT-02, RT-16) |
| 13 | Reading a summary table **[B][A]** | No (5 hidden lessons) | Applies skew before it is taught and stacks all assessed cues. | **RESTRUCTURE (local): swap with 14** (RT-04, RT-09) |
| 14 | Distributions and histograms (+ log per D-R5-01) | At risk (5 ideas) | Becomes slide 13 after the swap: one job, "see the shape of a numeric variable". Histogram → shape → skew (taught here with the "often" wording) → log as a one-line preview. The categorical bar rule and bin-count note are one clause each. | **RESTRUCTURE (local)** (RT-04, RT-07) |
| 15 | Correlation **[D]** | Yes, with patch | Remove the "very little variation" example; use the preferred rule. No covariance formula. | PATCH (RT-03, RT-05) |
| 16 | Correlation matrix / matrix plot | Yes | Illustrative matrix from the recurring dataset; "screening aid, not proof". | PASS |
| 17 | Data quality problems | Yes | List exactly four problems: duplicates, missing, **invalid**, unusual/outlier. This mirrors the slide-9 boundary. | PATCH (RT-10) |
| 18 | Duplicates | Yes | — | PASS |
| 19 | Missing values: what is missing? | Yes | "Low prevalence ≠ missing" is assessment-driven; move it to speaker notes. Keep 0 vs. missing vs. not applicable. | PATCH (RT-15) |
| 20 | Handling missing values **[E]** | Yes, with patch | Keep the source options plus the type rule. Move the "understates variability" trade-off to notes; label the 90% figure as a rule of thumb. | PATCH (RT-17) |
| 21 | Detecting outliers | Yes | Heuristic framing. | PASS |
| 22 | Impossible vs. unusual **[F]** | Yes | Good, natural extension of source slide 30. Use dataset cues: a rating outside its allowed 1–5 range is invalid; one very expensive product is unusual but valid. Keep "outlier ≠ error" central. | PATCH (minor; RT-09) |
| 23 | Why scale matters | Yes, but repetitive | M6-R4A slide 12 already teaches that scale changes comparison. Open with a one-line recall, then only the concrete demonstration (price vs. units sold). Do not re-teach the principle. | PATCH (RT-11) |
| 24 | Standardization and min-max **[T]** | Yes after D-R5-01 | Remove log (D-R5-01). Use the preferred standardization wording. Replace "0/1 indicators are not rescaled" with the true, simpler fact (§7), or drop it. | PATCH (RT-06, RT-08, RT-18) |
| 25 | Binning and binary conversion | Yes | Keep the threshold example generic and business-framed; note information loss. | PASS |
| 26 | Indicator coding vs. category codes | Yes | M6-R4A slide 11 recall in one line, then extend to indicators. | PASS |
| 27 | Reducing categories | Yes, with patch | "Regression uses m − 1 with a reference category" is premature (Wk 10). Make it a forward pointer or speaker note. | PATCH (RT-19) |
| 28 | Dimensionality **[C]** | Yes, with patch | Near-zero variation becomes RECALL (one clause, no re-teach). Avoid "sparsity" jargon; keep the intuition (more variables need more data; distances become less informative; each variable should earn its place). | PATCH (RT-16, RT-20) |
| 29 | Close | Yes | Recall the slide-9 boundary map. | PASS |

**Tally:**
- PASS 11 (1, 2, 7, 8, 11, 16, 18, 21, 25, 26, 29)
- PATCH 16 (3, 4, 5, 6, 9, 10, 12, 15, 17, 19, 20, 22, 23, 24, 27, 28)
- RESTRUCTURE (local swap) 2 (13, 14)

## D. Priority-slide deep review

| Slide | TEACHING_JOB | NEW_CONCEPT_COUNT (v1.1 → patched) | OVERLOAD_RISK | DUPLICATION | RECOMMENDATION |
|---|---|---|---|---|---|
| **10** | Choose and read a measure of center | 4 → 2 (mean and median; sensitivity to extreme values) | High → Low | Skew is also on 13 and 14 | **PATCH:** skew moves to the distribution slide; group-vs-individual goes to notes; plain-language definitions; one forward line: "extreme values pull the mean — we will see this as skew" |
| **12** | Read spread, and recognize when a variable barely varies | 3 → 2 (range/SD; near-zero variation) | Medium → Low | Near-zero variation also on 28 | **PATCH:** no variance formula; TEACH near-zero variation here with a non-binary, nearly constant example, hedged ("often little information; not automatically useless") |
| **13** | Read a summary table | 5 → 2 after the swap (read the table; binary mean = proportion) | High → Low | Skew, missingness, and scale cues duplicate 14, 19 and 23 | **RESTRUCTURE (swap to 14):** after distributions, this is the synthesis slide. Teach the binary mean here with the tiny example (0, 1, 1, 0, 1 → 0.6). The missingness cue becomes a one-line hook ("one column has fewer rows — slide 19"). Skew is applied lightly ("max far above mean and median — a possible long tail"), not re-taught. |
| **14** | See the shape of a numeric variable | 5 → 3 after the swap (histogram; shape and skew; log preview) | High → Medium | — | **RESTRUCTURE (swap to 13):** histogram, symmetric vs. right-skewed shape, and skew taught with the "often" rule (§8). Log is a one-line preview, not a formula and not a universal fix. The categorical bar-type rule and bin-count effect are one clause each. |
| **15** | Interpret a correlation coefficient | 4 → 4, but one job | Medium | R4A causality recall | **PATCH:** remove the low-variation example; use the preferred rule (§6); no covariance/(SD·SD) formula |
| **20** | Choose a missing-value treatment | 4 → 3 | Medium → Low | — | **PATCH:** source options plus the type rule; the variability trade-off goes to notes; 90% labeled a rule of thumb |
| **22** | Judge a flagged value | 3 → 3, one job | Low | Seeded on 6 and listed on 17 (acceptable: seed, list, teach) | **PATCH (minor):** recurring dataset examples; "outlier ≠ error" as the headline |
| **24** | Put numeric variables on comparable scales | 5 → 3 (z; min-max; worked example) | High → Low | Scale motivation is on 23 (keep it there) | **PATCH:** log removed (D-R5-01); preferred wording (§7); fix or drop the 0/1 claim |
| **28** | Distinguish rows, columns, missingness, dimensionality; why many variables cost | 5 → 3 | Medium → Low | Near-zero variation duplicates 12 | **PATCH:** near-zero variation as RECALL only; plain intuition; no "sparsity" jargon |

## E. Exact minimal patch list (for v1.2; not applied)

| ID | Patch | Slides |
|---|---|---|
| RT-01 | Plain-language definitions of mean and median; no equations | 10 |
| RT-02 | Remove the variance formula; explain SD as typical distance from the mean, in the variable's units | 12 |
| RT-03 | Remove the Pearson covariance/(SD·SD) definition; keep r ranging from −1 to +1 and its interpretation | 15 |
| RT-04 | **Swap v1.1 slides 13 and 14.** New 13 = "Distributions, histograms, and shape" (teaches skew and holds the log preview per D-R5-01). New 14 = "Reading a summary table" (synthesis; binary mean). Move the skew TEACH from 10 to new 13. | 10, 13, 14 |
| RT-05 | Correlation rule: "r near 0 means little linear association; a nonlinear relationship may still exist." **Remove the "very little variation" example.** Near-zero variation stays a feature-quality concept on 12. | 15 |
| RT-06 | Standardization wording: "Z-standardization centers a variable at 0 and scales it to unit standard deviation. It does not make the distribution normal." Delete "when computed from the same data"; no n vs. n − 1 discussion. Conceptual formula z = (x − mean) / SD is permitted. | 24 |
| RT-07 | Skew wording: "In a strongly skewed distribution, the mean is often pulled toward the long tail more than the median." No skewness coefficient. Do not present mean > median as a universal diagnostic. | new 13 (and the light application on new 14) |
| RT-08 | Remove the log preview from 24 (D-R5-01). On new 13, one line only: "A transformation such as log can sometimes reduce strong right skew." No formula; not a universal fix. The "needs positive values" note goes to speaker notes or M-2. | 24, new 13 |
| RT-09 | **One recurring fictional online-store dataset** (§10), clearly labeled ILLUSTRATIVE EXAMPLE. Distribute cues across slides rather than stacking them on one summary table. No 0/1 field with near-zero variation. | 5, 6, 10–16, 18–27 |
| RT-10 | Slide 9 becomes the boundary map: DATA QUALITY ("Is the value right?": duplicates, missing, invalid, unusual) vs. DATA PREPARATION ("Is the representation suitable for the method?": scaling, log, binning, indicators, category reduction). Slide 17 lists the four quality problems; slide 29 recalls the map. Label the log preview on new 13 as a preparation step previewed early. | 9, 17, 29, new 13 |
| RT-11 | Slide 23: open with the M6-R4A recall ("scale can change a comparison"), then only the concrete price vs. units-sold demonstration. Do not re-teach "distance is a modeling choice". | 23 |
| RT-12 | Slide 3: brief, framed as "which data could answer a business question"; no re-teaching of M6-R1 "Variety". | 3 |
| RT-13 | Slide 4: fully generic secondary-data example (D-R5-02). The July 2013 lineage stays in governance records or speaker notes only. | 4 |
| RT-14 | Slide 6: map each variable type to a column of the recurring dataset (one compact table) instead of a free-standing taxonomy; "type limits possible values" as one clause. | 6 |
| RT-15 | Move assessment-driven side-notes to speaker notes: "a mean describes the group, not each individual" (10) and "low prevalence ≠ missing" (19). | 10, 19 |
| RT-16 | Near-zero variation: TEACH on 12 (non-binary, nearly constant example; hedged); RECALL on 28 (one clause). | 12, 28 |
| RT-17 | Slide 20: move "imputation can understate variability" to notes; label the 90% figure a rule of thumb. | 20 |
| RT-18 | Replace "0/1 indicators are not rescaled like continuous variables" with the true statement: "Min-max normalization leaves a 0/1 variable unchanged; scaling matters mainly for numeric variables with very different ranges." Or drop it. | 24 |
| RT-19 | Slide 27: "one indicator per category; combine sparse or similar categories". The m − 1 / reference-category detail becomes a forward pointer or speaker note (M-2). | 27 |
| RT-20 | Slide 28: plain-language dimensionality intuition; avoid "sparsity" as a term on the slide. | 28 |

Net slide count: **29**, unchanged. The patches remove more on-slide material than they add.

## F. Items explicitly NOT to change

- The 29-slide target and the A–G spine; v1 merges and header deletions.
- The five accuracy corrections (A–E) and typo fixes.
- All six required alignment concepts (skew, binary mean, near-zero variation, correlation strength, imputation by type, impossible vs. unusual). The patches only re-place or reword them.
- **Mode stays out.**
- Standardization vs. min-max terminology split, and the min-max worked example (10, 20, 40 → 0, 0.33, 1).
- Histogram correction (numeric distribution; categorical → bar-type counts).
- Copied figures = 0; no exact App Store numbers; the slide-21 screenshot stays removed; no Math Is Fun citation.
- The M6-R4B boundary (no `admission.csv`, import/export, user-defined functions, packages, code).
- Source-slide reconciliation (36/36). The patches change 2027 placement only, not source dispositions.

## Statistics-course drift test

| Concept | In service of "understand the data before modeling"? | Drift signal in v1.1 | Patched state |
|---|---|---|---|
| Mean / median | Yes | Equation images | Plain language (RT-01) |
| Variance / SD | Yes (spread, near-zero variation) | m − 1 formula | Concept only (RT-02) |
| Skew | Yes (center choice; log motivation) | Taught twice, before shape | Taught once with the histogram (RT-04, RT-07) |
| Histogram | Yes | Fine | One job on new 13 |
| Correlation | Yes (screening, relationships) | Covariance formula; low-variation tangent | Interpretation only (RT-03, RT-05) |

**Verdict:** drift is moderate in v1.1 and **acceptable after the patches**. Block C stays 8 slides, but each has a business reading on the recurring dataset and no derivations. No inference or distribution theory is present.

## Specific red-team questions

- **Correlation:** remove the low-variation example. Use the preferred rule. Near-zero variation remains its own feature-quality concept (12).
- **Standardization:** the preferred wording is cleanest. "When computed from the same data" and any formula variant that implies n vs. n − 1 invite sample/population questions that do not serve Wk 4; delete them.
- **Skew:** v1.1 lacks "often" or "strongly" and states the mean-vs-median relation as a rule. Patch to the preferred hedged wording. No coefficient is present; keep it that way.
- **Near-zero variation:** v1.1 teaches it twice (12 and 28). This is duplication. Make 12 TEACH and 28 RECALL.
- **Synthetic dataset coherence (D-R5-03):** one recurring fictional online-store dataset is recommended (§10).
- **Quality vs. preparation boundary:** blurry in v1.1 (generic slide 9; log in the summary block; outlier handling vs. transformation). The smallest correction is RT-10 (an explicit two-question boundary map on 9, recalled on 17 and 29).

## §10. Recommended recurring dataset (D-R5-03)

**ILLUSTRATIVE EXAMPLE — fictional online store** (course-owned; fictional; no real company; no student or applicant data; no assessment-derived values).

| Field | Type taught | Supports |
|---|---|---|
| `product_id` | identifier (one row = one product) | 5 (one entity per row) |
| `category` (e.g., Books / Home / Electronics) | categorical, unordered | 6, 14 (counts → bar-type display), 26 (indicators), 27 (reducing categories) |
| `price` | numeric, continuous; a few expensive items (right tail) | 10 (mean vs. median), new 13 (histogram / skew / log preview), 22 (unusual but valid), 23–25 (scale; min-max; price tiers) |
| `units_sold` | numeric, discrete count; larger range than price | 12 (spread), 15–16 (correlation with price), 23 (scale dominance) |
| `rating` (1–5) | ordered numeric; **a few missing** | new 14 (fewer observations), 19–20 (missing values), 22 (a value outside 1–5 is invalid) |
| `featured` (0/1) | binary; **not** near-constant | 6, new 14 (mean = share featured) |

- **Orders view (slide 5 only):** a tiny transactions table (order_id → set of products) derived from the same store, introduced as "a second view of the same business". It is not used elsewhere.
- **Near-zero-variation example (slide 12):** a separate one-line attribute (e.g., "ships from the main warehouse" for nearly all products). It is not added as a field of the core table.
- **Not every field on every slide:** each slide shows only the 2–4 columns it needs. The summary table on new 14 shows at most 4–5 variables.

## Prior-module overlap classification

| Repeated idea | Slide | Classification | Note |
|---|---|---|---|
| Data sources / variety (M6-R1) | 3 | NECESSARY-RECALL (brief) → USEFUL-EXTENSION if framed as "data for a business question" | RT-12 |
| Rows = observations, columns = variables (M6-R3) | 5, 28 | NECESSARY-RECALL | One line; no R syntax |
| Category codes need interpretation (M6-R4A slide 11) | 6, 26 | NECESSARY-RECALL → USEFUL-EXTENSION | Indicators extend it |
| Scale changes comparison; distance is a modeling choice (M6-R4A slide 12) | 23 | **UNNECESSARY-REPETITION risk** → USEFUL-EXTENSION if limited to the concrete demonstration | RT-11 |
| Correlation ≠ causation (M6-R4A) | 15 | NECESSARY-RECALL | One line |
| Visualization (M6-R4A slide 22) | new 13 | USEFUL-EXTENSION | Histogram only |
| Distance / grouping (M6-R4A clustering slides) | 28 | USEFUL-EXTENSION | Dimensionality intuition |

## Assessment-influence test (abstract alignment record only)

| Addition / side-note | Pedagogically natural in Data Management I? | Action |
|---|---|---|
| Skew | Yes. It extends source slide 16 (mean sensitive to extremes) and motivates log. | Keep (re-placed) |
| Binary mean = proportion | Yes. Follows from binary variables (source slide 10). | Keep |
| Near-zero variation | Yes, as a spread/feature-quality idea | Keep (single TEACH) |
| Correlation strength / linear only | Yes | Keep (reworded) |
| Imputation by variable type | Yes | Keep |
| Impossible vs. unusual | Yes. It strengthens source slide 30. | Keep |
| "A mean describes the group, not each individual" | **Assessment-driven**; adds load | Speaker notes (RT-15) |
| "Low prevalence ≠ missing" | **Assessment-driven**; borderline | Speaker notes (RT-15) |
| "0/1 indicators are not rescaled" | **Assessment-driven and overclaimed** | Fix or drop (RT-18) |
| Summary table packing all assessed cues | **Hidden assessment-shaped stimulus** | Distribute via the recurring dataset (RT-09) |

**Conclusion:** the six required concepts belong naturally in this lecture. Three side-notes and the table design are assessment-shaped and are corrected by RT-09, RT-15 and RT-18.

## Handoffs

- **HANDOFF-ASSESS-01 — M6-R5 content-freeze alignment:** **READY TO CLOSE once v1.2 applies RT-01 to RT-20.** All required alignment concepts remain integrated. The patches remove the pedagogical distortion (overclaims, assessment-shaped stimulus) without dropping any concept. Not closed globally.
- **AF-R5-01:** OPEN — ASSESSMENT-FREEZE TRANCHE (D-R5-04). It is not an M6-R5 lecture blocker, and no assessment material was modified.
- **HANDOFF-M5-01:** OPEN.
- **HANDOFF-S3-01:** OPEN.

## G. Freeze recommendation

- **CAN_29_WORK = YES-WITH-PATCHES.** A 30th slide is not pedagogically superior once the 13/14 swap and the side-note removals are applied.
- **Do not freeze v1.1 as-is.**
- Create v1.2 applying RT-01 to RT-20 and D-R5-01 to D-R5-03.
- After that, a **targeted verification** of the slides touched by RT-01 to RT-20 (3–6, 9, 10, 12–17, 19, 20, 22–29) is sufficient before freeze. A second full red-team is not needed unless v1.2 changes architecture beyond the 13/14 swap.

## Integrity

- Existing files modified: 0 (v1.1 SHA-256 `cb189e53…` unchanged; v1 unchanged).
- Assessment files re-read: 0. M6-R4B content read: 0. Web verification redone: no.
- Git staged: 0. Commit: 0. Push: 0.
