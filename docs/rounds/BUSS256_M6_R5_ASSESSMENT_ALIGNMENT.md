# BUSS256 M6-R5 — Assessment Alignment (HANDOFF-ASSESS-01, M6-R5 scope)

*Recorded 2026-10-09. A narrow, read-only alignment audit, explicitly authorized by the professor/project lead for M6-R5 before content-spec freeze.*

**Abstract skill-level findings only.** This record contains no question wording, answer options, answers, numerical values, stimuli, or item structure from any assessment.

## 1. Scope and method

- **Compared:** `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1.md` (DRAFT) against the protected BUSS256 assessment set, at concept level.
- **Assessment files consulted:** **2** of the 11 protected files.
  - They are the minimum midterm-relevant set: the midterm covers Weeks 1–7, and Data Management I is Wk 4.
  - Identity was confirmed by MD5 against the 0a register before reading.
  - The remaining 9 protected files were not opened. The final-exam material covers Weeks 9–16, and the lab solutions belong to technique modules.
- **Limitation:** the consulted materials are the course's **governed draft** assessment set, marked proposed or draft for professor decision. Historical 2025 exam documents in the teaching source tree are not part of the protected set and were not opened. Alignment therefore reflects the draft assessment direction, not a frozen exam.
- **Prohibited and observed:**
  - No assessment content was copied into any lecture file.
  - No assessment file was modified, moved, staged, or committed.
  - The content spec was not edited.
- **Stimulus separation:** the assessments use their own dataset, which is distinct from the lecture's examples. The lecture must not adopt assessment stimuli, values, or scenarios.

## 2. Concept alignment

**Assessment classification:**
- REQUIRED-BY-ASSESSMENT = directly assessed.
- SUPPORTED-BY-ASSESSMENT = needed to answer or appears as a misconception contrast.
- NOT-FOUND, TERMINOLOGY-MISMATCH, UNKNOWN.

**Spec classification:** COVERED, PARTIAL, MISSING, OVERBUILT.

| Concept / skill | Assessment | Spec v1 | Terminology issue | Implication for the spec |
|---|---|---|---|---|
| Rows / observations (including observation counts) | SUPPORTED-BY-ASSESSMENT | COVERED | — | Keep: reading the observation count per variable. |
| Columns / variables | SUPPORTED-BY-ASSESSMENT | COVERED | — | Keep. |
| Categorical vs. numeric; binary (0/1) and count (discrete) variables | REQUIRED-BY-ASSESSMENT | PARTIAL | — | Make explicit that a binary 0/1 variable's mean is the **share of 1s**, and that the variable type limits which values are possible. |
| Sampling / sample concepts | NOT-FOUND | COVERED | — | Retain (source-authorized foundation); not overbuilt. |
| Mean | REQUIRED-BY-ASSESSMENT | COVERED | — | Keep. Add that a mean summarizes the group and is **not a claim about each individual**. |
| Median | NOT-FOUND (in the current draft set) | COVERED | — | Retain as a foundational contrast with the mean. |
| Mode / most frequent value | SUPPORTED-BY-ASSESSMENT (as a misconception contrast) | MISSING | — | Optional one-line definition next to mean and median. |
| Range (min / max) | SUPPORTED-BY-ASSESSMENT | COVERED | — | Keep. |
| Variance / standard deviation | REQUIRED-BY-ASSESSMENT | PARTIAL | — | Add that a variable with almost no variation carries little information for explaining differences, and how to read SD relative to the mean. |
| Distribution shape / skew | REQUIRED-BY-ASSESSMENT | **MISSING** | — | Add an introductory **skew** idea: a long tail pulls the mean, and asymmetry can be read from a summary (min, mean, max, SD), not only from a histogram. |
| Histogram | NOT-FOUND as an assessed skill | COVERED (with correction A) | **TERMINOLOGY-MISMATCH (assessment side).** One draft assessment element uses "histogram" loosely for per-category counts. | Lecture keeps correction A. Recommend that assessment wording be reviewed at assessment freeze; no lecture change. |
| Correlation | REQUIRED-BY-ASSESSMENT | PARTIAL | — | Add: reading the strength of association from \|r\|; near-zero r does not prove no relationship (r measures **linear** association, and low variation limits it); correlation ≠ causation. |
| Duplicates | NOT-FOUND | COVERED | — | Retain. |
| Missing values | REQUIRED-BY-ASSESSMENT | PARTIAL | — | Keep reading missingness from observation counts; this survives genericizing the example numbers. Add that **mean imputation is inappropriate for categorical / binary variables** (the mean need not be a valid category). Distinguish low prevalence from missingness. |
| Outliers; impossible vs. unusual values | REQUIRED-BY-ASSESSMENT | COVERED | — | Keep the "error vs. truly extreme" judgment. Add a generic example of a **logically impossible** value as distinct from an unusual one. |
| Standardization / scaling (scale dominance) | REQUIRED-BY-ASSESSMENT | COVERED | — | Keep the scale-dominance motivation and correction B (standardizing does not change shape). |
| Min-max scaling | REQUIRED-BY-ASSESSMENT | PARTIAL | **TERMINOLOGY-MISMATCH.** The assessment set distinguishes "min-max normalization" from "standardization", while the source deck titles the z-score "Normalization (Standardization)". | State the min-max formula in words or symbols, add one tiny course-owned worked example, and define both terms explicitly. Note that "normalization" is used loosely in some sources. |
| Log transformation | SUPPORTED-BY-ASSESSMENT (as the remedy for right skew; deeper use is in later modules) | COVERED (preview) | — | Keep as a preview for right skew. Optionally note that a log needs positive values; M-2 owns the detail. |
| Binning | NOT-FOUND | COVERED | — | Retain. |
| Indicator / dummy variables | SUPPORTED-BY-ASSESSMENT | COVERED | — | Keep. Add that 0/1 indicators are not rescaled like continuous variables, which ties to the min-max/standardization slides. |
| Category reduction | NOT-FOUND | COVERED | — | Retain. |
| Dimensionality / number of variables | NOT-FOUND | COVERED (with correction C) | — | Retain. |

**OVERBUILT: none.** Concepts that are NOT-FOUND are source-authorized lecture foundations retained under the assessment-preservation rule. They are not additions.

## 3. Required content-spec changes (for v1.1; not applied here)

| ID | Change | Fits in (spec v1 §10) |
|---|---|---|
| AA-R5-01 | Introductory skew: tail pulls the mean; reading asymmetry from summary statistics | #10–#14 (center / summary table / distributions) |
| AA-R5-02 | Binary 0/1 variable: mean = share of 1s; variable type limits possible values | #6 types; #13 summary table |
| AA-R5-03 | Near-zero variation carries little information; reading SD relative to the mean | #12 spread |
| AA-R5-04 | Correlation: \|r\| strength; near-zero r ≠ no relationship (linear only; limited variation); ≠ causation | #15–#16 |
| AA-R5-05 | Missing values: mean imputation is unsuitable for categorical/binary variables; low prevalence ≠ missing; keep reading missingness from observation counts in any genericized example | #19–#20 |
| AA-R5-06 | Impossible vs. unusual value (generic, course-owned example) | #21–#22 |
| AA-R5-07 | Terminology: define **standardization (z-score)** and **min-max normalization** explicitly; state the min-max formula with one tiny course-owned example; note that 0/1 indicators are not rescaled | #24 |
| AA-R5-08 (optional) | One-line mode definition; "a mean describes the group, not each individual" | #10 |

These changes are additions inside existing proposed slides. The 29-slide target (freeze range 28–30) is unaffected.

## 4. Status

**HANDOFF-ASSESS-01 (M6-R5 scope): OPEN — CONTENT-SPEC CHANGE REQUIRED**

- The M6-R5 alignment is complete at evidence level.
- Closing it for M6-R5 content freeze requires spec v1.1 to incorporate AA-R5-01 to AA-R5-07.
- AA-R5-08 is optional.
- HANDOFF-ASSESS-01 is **not** closed globally. Other modules and assessment freeze remain governed by the original handoff.

## 5. Integrity

- Protected assessment files consulted: 2 (read-only). Assessment content copied: 0. Assessment files modified, moved, staged, or committed: 0.
- M6-R4B contents read: 0 (`admission.csv`, functions/import-export exercises, Code.r, solution files: none).
- Content spec modified: no.
- Git staged: 0. Commit: 0. Push: 0.
