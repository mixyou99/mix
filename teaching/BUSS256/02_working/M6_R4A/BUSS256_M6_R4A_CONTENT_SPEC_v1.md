# BUSS256 M6-R4A — Seminar 4 Overview of Data Analytics: Content Spec v1

## 1. Authority and scope

**M6-R4A is lecture-only.** Its primary student-facing authority is:

`/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Seminar 4_Data Analytics/Seminar 4_Lecture_Data Analytics_Updated.pdf`

The matching `_Updated.ppt` is the editable authority. Both are a 49-slide/49-page 4:3 sequence. This specification maps every canonical source slide and proposes a 2027 lecture structure; it does not build or modify a deck.

## 2. M6-R4A / M6-R4B boundary

| Active M6-R4A | Held M6-R4B |
|---|---|
| Canonical 49-slide Seminar 4 lecture | `admission.csv` and every Exercise-folder data asset |
| Business-question framing, six-technique spine, technique-selection logic, and analytics-process close | Import/export, functions, packages, exercise code, solutions, and task/question decks |
| Only examples already present in the canonical lecture | Any held exercise/data example or inferred schema |

M6-R4A does not create a functions/packages continuation. It neither uses nor interprets `admission.csv`, import/export material, ambiguous R files, or InClass variants.

## 3. Closed issue decisions

- **F-11 — CLOSED:** the `_Updated` PDF/PPT pair is the later, best-maintained lecture baseline.
- **F-12 — CLOSED:** source slide 12 is the governed six-technique anchor.
- **F-20 — CLOSED FOR THIS LECTURE:** the 49-slide lecture contains no RStudio/Posit or package-installation instruction. M6-R2 retains setup ownership.
- **F-6 — HOLD:** no Seminar-4-specific media claim is resolved, removed, or replaced here.

## 4. 2027 learning objectives

By the end of the lecture, students should be able to:

1. Translate a business question into a smaller analytical question and identify the information needed to answer it.
2. Match clustering, association, classification, prediction, visualization, and text mining to the kinds of questions they support.
3. Distinguish supervised from unsupervised tasks by whether a target outcome is available.
4. Explain the limits of an analytical result: a pattern or prediction can support a decision without proving cause or guaranteeing an outcome.
5. Place technique selection, data preparation, evaluation, and deployment in one business-analytics workflow.

## 5. Canonical 49-slide source mapping

Every source slide appears below. **Totals: KEEP 3; KEEP-BUT-CLARIFY 20; REVISE 10; MERGE 13; DELETE 2; DEFER 1 = 49.**

| Src. | Title/topic | Purpose and key concept | M6-R1 overlap | M6-R4B dependency | 2027 disposition |
|---:|---|---|---|---|---|
| 1 | Title | Identify Seminar 4 | none | no | KEEP |
| 2 | Review: BA terms/elements | Recall vocabulary and the business problem–data–analytics–insight relation | high | no | MERGE — one bridge only |
| 3 | Learning objectives | State current aims | medium | no | REVISE |
| 4 | Business problems from a data perspective | Section transition | high | no | MERGE with 2 |
| 5 | Customer churn | Introduce a business problem | medium | no | KEEP-BUT-CLARIFY |
| 6 | Korea Telecom churn case | Make churn concrete with a 2025 claim | medium | no | REVISE — NOT-VERIFIED; replace with a labeled generic churn illustration |
| 7 | Churn questions | Ask problem, intervention, and next-step questions | medium | no | KEEP |
| 8 | BA decomposition | Break an overall problem into analytical subtasks | high | no | REVISE as bridge |
| 9 | Churn subtasks | Separate churn-risk prediction from retention-offer evaluation | medium | no | KEEP-BUT-CLARIFY |
| 10 | Data-mining techniques title | Introduce taxonomy | none | no | MERGE with 11/12 |
| 11 | Data mining terminology | Relate data mining to adjacent labels | high | no | MERGE; avoid synonym list as a new definition |
| 12 | Six techniques | Governed six-technique spine | none | no | KEEP |
| 13 | Clustering definition | Similarity-based grouping without a target | none | no | KEEP-BUT-CLARIFY |
| 14 | Bag-grouping prompt | Make similarity judgment visible | none | no | KEEP-BUT-CLARIFY |
| 15 | Attribute table | Show variables used to describe items | low | no | KEEP-BUT-CLARIFY |
| 16 | Numeric coding table | Represent attributes numerically | low | no | REVISE — coding categories as numbers needs a caution |
| 17 | Distance example | Show a limited similarity calculation | low | no | REVISE — explain what the distance does and does not mean |
| 18 | k-means, K=2 | Show a clustering output | none | no | MERGE with 19 |
| 19 | k-means, K=3 | Compare alternative K values | none | no | MERGE with 18 |
| 20 | Segments/business use | Connect clusters to customer segmentation | low | no | KEEP-BUT-CLARIFY |
| 21 | Association rules | Co-occurrence/purchase-pattern purpose | none | no | KEEP-BUT-CLARIFY |
| 22 | Walmart case | Illustrate items bought together | none | no | KEEP-BUT-CLARIFY — NOT-VERIFIED; replace with a labeled generic retailer illustration |
| 23 | Target case | Illustrate behavioral prediction | low | no | REVISE — VERIFIED-WITH-QUALIFICATION; historical 2012 reporting only, with privacy/context limit |
| 24 | Classification | Predict a discrete response category | overlaps predictive analytics | no | KEEP-BUT-CLARIFY |
| 25 | Classification workflow | Show past labeled data and a new case | overlaps predictive analytics | no | MERGE with 24 |
| 26 | Prediction | Predict a numeric outcome | overlaps predictive analytics | no | KEEP-BUT-CLARIFY |
| 27 | Data visualization | Name plots and relationship examination | low | no | KEEP-BUT-CLARIFY — preview only before M-5 |
| 28 | Text mining | Name patterns in text | low | no | KEEP-BUT-CLARIFY — preview only before M-1 |
| 29 | Types of tasks title | Transition to task taxonomy | none | no | MERGE with 33 |
| 30 | Programming vs. data mining | Contrast explicit rules with learned patterns | low | no | REVISE — current wording overstates “no programming/rules” |
| 31 | Input/output rule question | Ask what a model learns | low | no | MERGE with 30/32 |
| 32 | Machine finds rule | Introduce model idea | low | no | MERGE with 30/31; avoid neural-network overclaim |
| 33 | Supervised/unsupervised map | Classify four techniques by target availability | none | no | KEEP-BUT-CLARIFY |
| 34 | Supervised tasks | Explain known target and outcome type | overlaps predictive analytics | no | KEEP-BUT-CLARIFY |
| 35 | Unsupervised tasks | Explain no target and discovered pattern | none | no | KEEP-BUT-CLARIFY |
| 36 | Other techniques | Introduce statistics and querying | high | no | MERGE with 37/38 |
| 37 | Statistics | Explain summary statistics and distributions | high | no | REVISE — retain descriptive scope, remove unsupported illustrative claim |
| 38 | Data querying | Contrast retrieval with pattern/model discovery | medium | no | MERGE with 36/37 |
| 39 | Group discussion | Apply task labels to business questions | low | no | KEEP-BUT-CLARIFY |
| 40 | Association narrative | Identify a technique from a retail-pattern description | none | no | REVISE — keep classification purpose, remove unsupported case detail if needed |
| 41 | Blank | No instructional content | none | no | DELETE |
| 42 | Supplementary title | Divider only | none | no | DELETE |
| 43 | Predictive-process title | Introduce process section | high | no | MERGE with 44 |
| 44 | CRISP-DM process | Name a predictive-analytics process | high | no | KEEP-BUT-CLARIFY — attribution corrected to Chapman et al. (2000) |
| 45 | Top-down/bottom-up | Connect user requirements and available data | high | no | KEEP-BUT-CLARIFY |
| 46 | Data preparation | Preview understanding, cleaning, and preprocessing | overlaps Wk 4–5 | no | DEFER to later data-management sequence |
| 47 | Modeling | Choose task and technique | low | no | KEEP-BUT-CLARIFY |
| 48 | Evaluation | Validate, compare, and assess stakeholder consequences | medium | no | KEEP-BUT-CLARIFY |
| 49 | Deployment | Put a model into a business process | medium | no | REVISE — distinguish support from automatic decision/outcome guarantee |

## 6. Six-technique spine mapping

| Technique | Source slides | Question/purpose taught | Clarity and example status | M6-R1 duplication / M6-R4B dependency | 2027 result |
|---|---|---|---|---|---|
| Clustering | 13–20, 33, 35 | Which customers or objects form useful similarity-based groups? | Definition is usable; numeric-encoding and distance examples need caution | no material dependency; no substantive M6-R1 duplication | Retain |
| Association | 21–23, 40 | What items or events tend to occur together? | Definition usable; named retailer cases need verification and association must not imply cause | no held-material dependency | Retain with clarification |
| Classification | 24–25, 33–34 | Which discrete class is likely for a new case? | Clear binary-response example | bridges prior predictive-analytics introduction | Retain with bridge |
| Prediction | 26, 33–34 | What numeric value is likely for a new case? | Clear numeric-outcome contrast | bridges prior predictive-analytics introduction | Retain with bridge |
| Data visualization | 27 | What do plots reveal about distributions or relationships? | Useful preview only | detailed treatment belongs to M-5 | Retain as preview |
| Text mining | 28 | What patterns appear in textual data? | Useful preview only | detailed treatment belongs to M-1 | Retain as preview |

Slides 33–35 classify clustering, association, classification, and prediction by target availability. The specification must explicitly describe that as a classification of those four data-mining tasks, not as a claim that visualization and text mining disappear from the six-technique spine.

## 7. M6-R1 overlap analysis

| Source material | Overlap | 2027 action |
|---|---|---|
| 2, 4, 8–9 | BA definitions; business problem/data/analytics/insight relationship | KEEP-BUT-BRIDGE: one concise recall, then move to “which technique answers which question.” |
| 11 | Analytics/data-mining terminology | MERGE with taxonomy introduction; do not repeat a synonym-heavy definition sequence. |
| 24–26, 34 | Descriptive/predictive and outcome framing | KEEP-BUT-BRIDGE: use the known vocabulary to distinguish discrete from numeric outcomes. |
| 36–38 | Descriptive analytics/statistics and querying | MERGE into a short boundary, not a second descriptive-analytics lesson. |
| 43–49 | Framework/process material | MERGE into a closing workflow that adds technique selection, evaluation, and deployment without restarting the M6-R1 framework. |

## 8. Technique-by-technique content contract

All six techniques retain the source taxonomy and business-question orientation. For every technique, the final lecture must state the question it supports and one limit.

| Technique | Contract |
|---|---|
| Clustering | Explain that the task finds similarity-based groups without a known target. Preserve the bag/attribute bridge, but state that numeric representation and a distance are modeling choices, not objective truth. Do not promise a uniquely correct K or segment label. |
| Association | Explain that the task identifies co-occurrence patterns. State that co-occurrence supports merchandising questions but does not establish that one purchase causes another. |
| Classification | Explain that the task uses labeled past cases to estimate a discrete class for a new case. Do not describe a predicted class as a causal explanation or a certain outcome. |
| Prediction | Explain that the task estimates a numeric outcome. Preserve the distinction from classification; do not imply a forecast is guaranteed. |
| Data visualization | Keep the concise plot-oriented preview. Do not teach chart design or ggplot here; M-5 owns the focused visualization/on-ramp session. |
| Text mining | Keep the concise textual-pattern preview. Do not add tools, packages, or corpus mechanics; M-1 owns the later text-mining work. |

## 9. Example disposition

| Source example | Disposition | Constraint |
|---|---|---|
| Churn problem and subtasks (5–9) | RETAIN-BUT-CLARIFY | Treat as a business-question scaffold. **ILLUSTRATIVE EXAMPLE:** a telecommunications provider wants to identify customers whose contracts are nearing renewal and whose observed behavior may warrant a retention conversation. Do not name Korea Telecom, state a churn percentage, or imply a real-world outcome. |
| Bag/product clustering (14–20) | RETAIN-BUT-CLARIFY | Keep as a conceptual activity; revise arbitrary numeric category coding and overconfident segment labels. |
| Walmart association case (22) | RETAIN-BUT-CLARIFY | **ILLUSTRATIVE EXAMPLE:** a retailer examines which items tend to occur together in transaction records. Do not use “Walmart’s MBA Center” or assert a real-company case. Make co-occurrence/non-causation explicit. |
| Target case (23) | REVISE | Present only as a historical 2012 news-reporting example: reporting described Target’s use of purchase-history analytics to estimate pregnancy likelihood. Do not present the widely repeated individual anecdote, any prediction score, or a specific business outcome as independently established fact; state the privacy/context limit. |
| Classification workflow (24–25) | RETAIN-BUT-CLARIFY | Preserve discrete outcome logic; bridge from M6-R1 predictive analytics. |
| Prediction example (26) | RETAIN-BUT-CLARIFY | Preserve numeric outcome contrast and limitation. |
| Visualization/text-mining previews (27–28) | RETAIN | Keep as forward pointers, not mini-lessons. |
| Programming/rule illustration (30–32) | REVISE | Explain learned patterns without claiming that data mining involves no programmed choices. |
| Statistics/querying (36–38) | REVISE | Keep a short distinction; keep statistics descriptive at this stage. |
| Retail-pattern prompt (40) | REVISE | Preserve technique identification, not unsupported retailer detail. |
| Predictive process (44–49) | RETAIN-BUT-CLARIFY | Attribute the named process as **CRISP-DM 1.0 (Chapman et al., 2000)** rather than “Shearer, 2023”; make evaluation and stakeholder judgment explicit. |

## 10. Data/exercise HOLD boundary

No M6-R4A slide may use, name, display, infer, or build an example from `admission.csv`; the import/export pair; the Exercise code; or any solution, task, or InClass source. There is no held-data dependency in the canonical 49-slide lecture mapping. Source slide 46 is deferred because it previews later data-management work, not because M6-R4A may replace it with held data.

## 11. Functions/packages HOLD boundary

The canonical lecture contains no usable functions/packages continuation. M6-R4A must not add a functions section, `library()`, `install.packages()`, package names, imports, or user-defined-function examples. The Wk-3 functions/packages exercise authority remains M6-R4B HOLD.

## 12. Proposed 2027 lecture progression

**Target: 36 slides.** The target follows source mapping, not new content: 49 source slides − 2 blank/divider deletions − 1 deferred data-preparation preview − 10 slides saved through explicit merges.

1. **Bridge from M6-R1** — a concise recall of business question, data, analytics, and insight; then frame the new question: which technique fits which business question? (1–9 compressed)
2. **Why different questions need different techniques** — introduce the governed six-technique spine (10–12).
3. **Technique families** — clustering, association, classification, and prediction with business-question-first examples and limits (13–26).
4. **Two forward previews** — visualization and text mining as later, distinct technique families (27–28).
5. **Compare techniques** — learned-pattern idea; supervised/unsupervised map; short statistics/querying boundary; task-label application (29–40).
6. **Selection, evaluation, and deployment** — compact workflow close: requirements plus available data, technique selection, evaluation, stakeholder consequences, and deployment (43–49; source 46 deferred).

## 13. External verification closure

| ID | Source | Original claim / evidence gap | Final status and build action |
|---|---|---|---|
| VX-R4A-01 | 6 | Korea Telecom / 2025 / 30% churn claim | **NOT-VERIFIED — REPLACE-WITH-GENERIC-CONCEPT.** Use the labeled telecommunications illustrative example in §9; no real-company statistic. |
| VX-R4A-02 | 22 | “Walmart’s MBA Center” named-case framing | **NOT-VERIFIED — REPLACE-WITH-GENERIC-CONCEPT.** Use the labeled retailer illustrative example in §9; no real-company claim. |
| VX-R4A-03 | 23 | Target behavioral-prediction case | **VERIFIED-WITH-QUALIFICATION — REWORD.** Retain only as historical 2012 reporting, with the limits stated in §9; do not use the individual anecdote or unsupported outcome details. |
| VX-R4A-04 | 44 | CRISP-DM attribution “Shearer, 2023” | **CONTRADICTED — REWORD.** Use CRISP-DM 1.0 (Chapman et al., 2000); Shearer’s relevant publication is 2000, not 2023. |

The detailed source trail and findings are recorded in `docs/rounds/BUSS256_M6_R4A_EXTERNAL_VERIFICATION_CLOSURE.md`.

## 14. Closed decisions

- **DECISION-R4A-01 — CLOSED.** The approved 2027 target is **36 slides**. Do not revert to 49 slides absent a genuine structural problem revealed by verification; none was found in this closure.
- **DECISION-R4A-02 — CLOSED.** If a historical company/example claim cannot be adequately verified, replace it with a clearly labeled course-owned **ILLUSTRATIVE EXAMPLE**. The generic example may not use a real-company claim, an unverified statistic, or a claimed real-world outcome. Deletion is secondary only when a generic example cannot preserve the instructional purpose cleanly.

## 15. Build handoffs

1. The two decisions and four-item external-verification queue are closed. Any later build still requires its own authorized build instruction.
2. Use the `_Updated.ppt` as the editable baseline and preserve the six-technique anchor.
3. Keep M6-R4B out of the build. Do not use Exercise, CSV, code, task, solution, or InClass material.
4. Apply the deck gate conventions plus a slide-source mapping check: 49 source slides must reconcile to every retained, merged, deleted, revised, or deferred 2027 disposition.
5. Add explicit limits at the technique level: co-occurrence is not causation; predictions/classifications are not guarantees; clustering depends on representation and distance choices.

## 16. Integrity/no-guessing attestation

- Canonical lecture authority unchanged: yes.
- InClass contents read in this pass: 0.
- `admission.csv` rows read in this pass: 0.
- Ambiguous exercise contents read in this pass: 0.
- Functions-exercise contents read in this pass: 0.
- Assessment reads in this pass: 0.
- Source mutations: 0.
- M6-R1 touched: no.
- M6-R2 touched: no.
- M6-R3 touched: no.
- Git staged: 0.
- Commit: 0.
- Push: 0.
