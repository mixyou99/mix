# BUSS256 M6-R5 — External Verification (VX-R5-01 to VX-R5-04)

*Recorded 2026-10-09. Pre-freeze evidence gate. Evidence only: the content spec was not modified.*

**Sources used:**
- safe lecture slides (PPTX 3–37 and 40 of `Seminar 5_Lecture_Data_Management I_Updated`, read from a scratchpad copy whose SHA-256 matches the source);
- safe governed records;
- public web sources.

No assessment-linked dataset, script, InClass, exercise, or excluded slide was opened.

## VX-R5-01 — Correlation citation "http://www.mathisfun.com, Sep 5, 2023" (source slide 20)

| Field | Record |
|---|---|
| QUESTION | Which source was intended? Is the domain correct? Does it support the slide's claim or figure? Is it worth retaining? |
| EVIDENCE | **Domain:** the cited `mathisfun.com` 301-redirects to `mathsisfun.com` (Math Is Fun, © Rod Pierce). The cited spelling is a misspelling that happens to redirect. <br><br>**Intended page (most likely):** [Math Is Fun — Correlation](https://www.mathsisfun.com/data/correlation.html). It has a seven-panel correlation-examples graphic (`correlation-examples.svg`, r from +1 to −1) that matches the slide's embedded strip image. The citation was therefore most likely crediting that **figure**. <br><br>**Support for the slide text:** the page supports "correlation assumes a linear relationship", "r = 1 perfect positive, 0 none, −1 perfect negative", and "correlation does not prove causation". It does **not** state the slide's definition of Pearson's r as covariance divided by the product of standard deviations. <br><br>**Date:** "Sep 5, 2023" reads as an access date and cannot be verified. |
| VERDICT | **REMOVE** |
| SPEC_IMPLICATION | Remove the citation and the copied strip graphic (see VX-R5-02). Teach the Pearson definition and the −1…+1 interpretation as course-owned, textbook-level content that needs no web citation. A course-owned redraw of "strong positive / none / strong negative" scatter examples is acceptable. |

## VX-R5-02 — Embedded figure provenance (safe slides)

**Method:**
- Image-to-slide mapping and alt text came from the package metadata.
- These were viewed directly: the slide 9/10 image, slides 12, 16, 20, 21, 24 and 29, and the rendered safe PDF pages for slides 8, 18 and 23.
- The other images were assessed by metadata and alt text only.

Several images carry the alt text "Image result for …", which shows they were copied from web image search.

| Source slide(s) | Figure | Provenance evidence | Classification |
|---|---|---|---|
| 3 | Institutional logo images (alt text "Image result for korea university business school") | Web image search copy | **REMOVE** (use the course template's sanctioned branding) |
| 6 | Four illustrative icons/photos (one alt text "Image result for promotion coupon") | Web image search copies; owners unknown | **REMOVE** (decorative) or **REDRAW** as course-owned icons |
| 8 | Record-data table (tax-return "Refund / Marital Status / Taxable Income / Cheat") and transaction table | The record table is the well-known example from Tan, Steinbach & Kumar, *Introduction to Data Mining* lecture slides, widely reproduced (e.g., [Scribd copy, Ch. 4](https://www.scribd.com/presentation/326604459/Chap4-Basic-Classification); [Univ. of Debrecen PDF](https://arato.inf.unideb.hu/ispany.marton/DataMining/Lectures/english/Basic_classification_decision_trees.pdf)). The transaction table's exact source is not confirmed. | **REDRAW** as course-owned tables with original content |
| 8 | Shopping-cart photo ("Image result for shopping cart") | Web image search copy | **REMOVE** |
| 9, 10 | Spreadsheet screenshot of the historical App Store dataset (real app and seller names) | Course dataset view. Real third-party product names; exact values not needed (VX-R5-03). | **REMOVE**; replace with a course-owned schematic table (rows = entities, columns = attributes) |
| 11 | "15 observations × 1 variable vs. 1 observation × 15 variables" table image | Appears course-made; provenance not documented | **REDRAW** natively |
| 12 | Three sampled scatter plots of one shape (8,000 / 2,000 / 500 points) | The same figure appears across university data-mining lecture decks in the Tan/Steinbach/Kumar lineage (e.g., [Univ. of Ioannina slides](https://www.cs.uoi.gr/~tsap/teaching/2015-cse012/slides/datamining-lect3.pdf), [WMU slides](https://www.cs.wmich.edu/~alfuqaha/summer14/cs6530/lectures/Intro-Part2.pdf)). Original attribution not confirmed. | **REDRAW** as a course-owned "sample size vs. captured shape" diagram |
| 16 | Mean / median formula image (Tan-style notation) | Formula images copied from another deck; the mathematics itself is generic | **REDRAW** as native equations or plain-language definitions |
| 18 | Variance formula image + small course table (income / #cars) | Formula image copied; the table appears course-made (its arithmetic checks: mean 4.4, SD 3.44; mean 1.2, SD 0.45) | **REDRAW** natively (keeping the course-owned toy example is acceptable) |
| 20 | Seven-panel correlation strip | Matches Math Is Fun `correlation-examples.svg` (© Rod Pierce) | **REDRAW** course-owned (no reuse) |
| 21 | App-ranking chart screenshot (free / paid / grossing ranks with app icons) | A third-party ranking-site screenshot containing third-party logos. Its titles postdate 2013 (e.g., *NBA 2K19*), so it is **not** the 2013 course dataset. | **REMOVE** |
| 23 | Histogram of app rating scores | Course-generated statistical output. The vertical axis shows density while the slide text says "frequencies". | **REDRAW** with a correctly labeled course-owned histogram (VX-R5-03) |
| 24 | Correlation heatmap of four app variables | Course-generated output of the historical dataset | **REDRAW** genericized (VX-R5-03) |
| 26, 28, 33 | Small illustrative images (duplicates, missing values, transformation shapes) | Provenance not documented (metadata only) | **REDRAW** natively |
| 29 | Outlier scatter (circled points) | Same visual lineage as the data-mining lecture-deck figures; attribution not confirmed | **REDRAW** |
| 29 | Photo ("Image result for outlier example") | Web image search copy | **REMOVE** |
| 40 | Six web images (alt text includes a commercial film title, "cookie information", "survey", "customer service phone call", "customer review", "movie script") | Web image search copies, including commercial film imagery | **REMOVE**; use text or course-owned icons |

**Classification counts:**
- VERIFIED-REUSABLE: **0**
- VERIFY-CITATION: **0**, because the default policy applies: when provenance is unclear, redraw rather than chase permission.
- **REDRAW** and **REMOVE** account for the rest.

**SPEC_IMPLICATION:** the 2027 deck uses **course-owned native diagrams only**. No copied figure, photo, logo, or screenshot is reused. Any genuinely needed external figure would require a separate permission or citation decision.

## VX-R5-03 — App Store exact numbers

**Policy applied:** no protected or assessment-linked dataset was opened. Checks used safe slide text and public sources only. No replacement numbers are invented.

| Numerical claim (source slide) | Status | Recommendation |
|---|---|---|
| Summary table: observation count, means, SDs, minima and maxima for rank, price, screenshots, rating score, rating volume (19; repeated on 34) | **SUPPORTED-BY-SAFE-SOURCE** (internally consistent across slides 19, 21, 24 and 34) but not externally verifiable, and the exact values are **NONESSENTIAL** | **Genericize.** Replace with a clearly labeled course-owned illustrative summary table. It must keep the teaching features: an uneven observation count that signals missingness, and one variable whose scale and spread dwarf the others. Assessment-alignment items AA-R5-01 and AA-R5-05 depend on these features. |
| Correlation-matrix coefficients (21) and heatmap values (24) | SUPPORTED-BY-SAFE-SOURCE; **NONESSENTIAL** | Genericize to a course-owned illustrative matrix (diagonal = 1, symmetric, a mix of weak and moderate values) |
| Histogram bar heights for rating scores (23) | **UNVERIFIED** (no numbers shown; axis mislabeled) and **NONESSENTIAL** | Redraw a generic course-owned histogram |
| "Rating volume dominates the changes in rank" (34) | Qualitative lesson **essential**; the numbers are **NONESSENTIAL** | Keep the lesson with a genericized scale-dominance example |
| "Average price is about $3.0" in paid-app data (30) | SUPPORTED-BY-SAFE-SOURCE (consistent with the slide-19 mean price); **NONESSENTIAL** | Genericize ("most paid apps are cheap; a very expensive one stands out") |
| Real app names, prices and sellers in the dataset screenshot (9, 10) | **NONESSENTIAL** | Remove (VX-R5-02) |

**Course-owned toy arithmetic (not App Store data), verified by computation and safe to keep:**
- slide 17: means and medians all equal 7;
- slide 18: both ranges equal 12, and the income/#cars mean and SD;
- slide 33: "Mean 5.5, SD 3.03" is *consistent with* X = 1, …, 10 (sample SD = 3.03). The underlying values are not shown in text, so confirm them in the build. Keep the label clear about which variable (X or log X) the statistics describe.

**SPEC_IMPLICATION:** v1.1 should carry **no exact App Store figures**. Where the historical dataset is still named as context, use the date label from VX-R5-04.

## VX-R5-04 — "HISTORICAL DATA SNAPSHOT — JULY 2013"

| Field | Record |
|---|---|
| QUESTION | Is a July 2013 date supported for the App Store teaching data? |
| EVIDENCE | (1) **Governed record:** `teaching/BUSS256/02_working/01_audit_report.md` F-13 quotes the professor's own 2025 data-management script for this lecture: "I collected this data in **July 2013**." This tranche did not read the script; the quotation comes from the governed audit. <br>(2) **Governed record:** `teaching/BUSS256/02_working/PRODUCTION_PLAN.md` §5 names the flagship App Store file `07192013Apps.csv` (filename date 19 Jul 2013; filename-only evidence; file not opened). <br>(3) **Safe slide image** (slides 9/10): the visible app release dates run no later than early 2013. This is consistent with a mid-2013 collection but cannot prove the month. <br>(4) **No public external source exists:** this is a privately collected course dataset. |
| VERDICT | **VERIFIED-JULY-2013**, for the course's 2013 App Store dataset only. This rests on governed source lineage (the professor's own dated statement, corroborated by the dataset filename and the visible release dates). It is not externally verifiable. **Not applicable** to the slide-21 ranking screenshot, which is a later third-party snapshot and is removed under VX-R5-02. |
| SPEC_IMPLICATION | Where the historical dataset is referenced, "HISTORICAL DATA SNAPSHOT — JULY 2013" may be used. Because VX-R5-03 genericizes the exact figures, the label is needed only where the deck still names the dataset as context. If the project lead prefers not to rely on lineage-only evidence, use the neutral fallback **"HISTORICAL APP STORE DATA SNAPSHOT"**. |

## Factual-correction sanity check (spec v1 §7)

| Correction | Check | Result |
|---|---|---|
| Histogram → distribution of a quantitative variable; categorical counts → bar-type display | Standard statistical usage | **Correct** |
| z-standardization gives mean 0 and SD 1 but does not change distributional shape and does not make data normal | Linear transformation; shape is preserved | **Correct** |
| Dimensionality ≠ number of rows; missingness ≠ dimensionality | Dimensionality = number of variables/features; sparsity in high dimensions is distinct from missing values | **Correct** |
| "Perfect correlation (r = ±1)" instead of "exactly correlated" | Standard usage; consistent with the Math Is Fun page above | **Correct** |
| More data is not automatically better (relevance, representativeness, quality, cost) | Standard sampling principle (biased samples stay biased at any size) | **Correct** |

No advanced statistics were added.

## Integrity

- Web research: used for VX-R5-01 and VX-R5-02 (sources linked above).
- Assessment-linked dataset opened: no. Excluded slides 1, 2, 38, 39 viewed: no. Scripts, InClass, and `Exercise/` opened: no.
- M6-R4B contents read: 0.
- Content spec modified: no.
- Git staged: 0. Commit: 0. Push: 0.
