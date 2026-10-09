# BUSS256 M6-R4A — PPTX Build Spec v1

## Frozen authority and geometry

Build only the frozen 36-slide v1.1 sequence. Use 16:9 widescreen (13.333 × 7.5 in), with a 0.45 in left/right safe margin, 0.35 in top margin, 0.40 in footer/citation reserve, and no meaningful object outside that canvas. M6-R4B remains HOLD.

## Visual system

Use Arial throughout: title 30–34 pt, major concept 24–28 pt, body 20–22 pt, captions 15–16 pt, citations 12–13 pt; never below 12 pt. Use a restrained navy/charcoal course base with one muted accent per technique, always paired with text label, position, numbering, or shape. Native editable PowerPoint shapes, lines, and tables only; no stock-photo dependency.

Layouts: **L-TITLE**, **L-BRIDGE**, **L-CONCEPT**, **L-TECHNIQUE**, **L-EXAMPLE**, **L-COMPARE**, **L-PROCESS**, **L-LIMIT**, **L-CLOSE**. Use a clear title band, a single primary composition, consistent footer/citation alignment, and generous projector-readable whitespace; do not make a dashboard of cards.

## Technique grammar

Stable order: 1 Clustering (circle), 2 Association (linked nodes), 3 Classification (split label), 4 Prediction (number marker), 5 Visualization (axes), 6 Text Mining (document). Slides 8 and 30 use the same order, labels, conceptual outputs, and symbols. Core technique slides use: question → conceptual output → support → caution where that role applies.

## Example and citation treatment

Place **ILLUSTRATIVE EXAMPLE** or **ILLUSTRATIVE ACTIVITY** in a small outlined upper-right label; examples must look course-owned, not like external evidence. Slide 21 alone uses a contrasting outlined label: **HISTORICAL EXAMPLE — 2012 REPORTING**, a readable short on-slide citation, and a note that it is prediction/inference rather than association. Slide 31 uses a short readable on-slide citation: *CRISP-DM 1.0 (Chapman et al., 2000)*; fuller approved citation detail belongs in notes. Notes contain only delivery cautions, short transitions, and required citation detail.

## Slide layout map

| # | Frozen title | Role/layout | Main visual | Density | Diagram | Label/citation | QA focus |
|---:|---|---|---|---|---|---|---|
| 1 | Overview of Data Analytics | OPEN / L-TITLE | six-technique marks | low | no | none | minimal title |
| 2 | Business Question, Data, Analytics, Insight | BRIDGE / L-BRIDGE | four-step flow | low | yes | none | reading order |
| 3 | Seminar 4 Learning Objectives | CONCEPT / L-CONCEPT | objective map | medium | yes | none | no dense list |
| 4 | Churn: Business Concern and Retention Question | EXAMPLE / L-EXAMPLE | renewal timeline | medium | yes | illustrative | no real-company cues |
| 5 | Decomposing the Retention Problem | BRIDGE / L-BRIDGE | three-question branch | medium | yes | none | risk/evidence/action distinct |
| 6 | Risk Prediction Is Not Intervention Evaluation | LIMIT / L-LIMIT | two-path contrast | low | yes | none | causality caution |
| 7 | Data-Mining Techniques | CONCEPT / L-CONCEPT | question-centered map | low | yes | none | early taxonomy |
| 8 | Six Technique Families | CONCEPT / L-COMPARE | six-spoke map | medium | yes | none | priority review; labels+icons |
| 9 | Clustering | TECHNIQUE / L-TECHNIQUE | group schematic | medium | yes | none | no target clarity |
| 10 | Similarity as a Sorting Question | EXAMPLE / L-EXAMPLE | product grouping | low | yes | activity | no single answer |
| 11 | Attributes for Grouping | CONCEPT / L-CONCEPT | compact attribute table | medium | no | none | category-code caution |
| 12 | Distance Depends on Representation | LIMIT / L-LIMIT | paired-case connector | low | yes | none | conceptual only |
| 13 | More Than One Grouping Can Be Useful | COMPARE / L-COMPARE | 2 vs 3 groups | medium | yes | none | priority review; shape labels |
| 14 | Customer Segments as Decision Inputs | LIMIT / L-LIMIT | segment-to-review path | medium | yes | none | no causal inference |
| 15 | Association | TECHNIQUE / L-TECHNIQUE | linked baskets | medium | yes | none | non-causation |
| 16 | Items Purchased Together | EXAMPLE / L-EXAMPLE | generic basket | low | yes | illustrative | no retailer claim |
| 17 | Classification | TECHNIQUE / L-TECHNIQUE | labeled cases to class | medium | yes | none | discrete target |
| 18 | Classification: A Discrete Target | EXAMPLE / L-EXAMPLE | renew/not-renew split | low | yes | illustrative | class visible |
| 19 | Prediction | TECHNIQUE / L-TECHNIQUE | inputs to estimate | medium | yes | none | numeric target |
| 20 | Prediction: A Numeric Target | EXAMPLE / L-EXAMPLE | demand estimate | low | yes | illustrative | uncertainty visible |
| 21 | Historical Example: Behavioral Inference | EXAMPLE / L-EXAMPLE | signals-to-inference | medium | yes | historical + citation | priority review; not association |
| 22 | Data Visualization | CONCEPT / L-CONCEPT | conceptual axes | low | yes | none | no fake data |
| 23 | Text Mining | CONCEPT / L-CONCEPT | document-to-themes | low | yes | none | preview only |
| 24 | Learned Patterns and Explicit Rules | COMPARE / L-COMPARE | rule vs learned pattern | medium | yes | none | no overclaim |
| 25 | Target Availability: Four Task Types | COMPARE / L-COMPARE | supervised/unsupervised matrix | medium | yes | none | priority review; no color-only meaning |
| 26 | Supervised Tasks | CONCEPT / L-CONCEPT | labeled target flow | low | yes | none | class/number distinction |
| 27 | Unsupervised Tasks | CONCEPT / L-CONCEPT | discovery flow | low | yes | none | no target |
| 28 | Statistics, Querying, and Analytics | COMPARE / L-COMPARE | three-way boundary | medium | yes | none | overlap not exclusion |
| 29 | Technique Identification Discussion | EXAMPLE / L-EXAMPLE | question-output prompts | medium | no | activity | no answer reveal |
| 30 | Six-Technique Comparison | COMPARE / L-COMPARE | technique matrix | medium | no | none | priority review; same grammar as 8 |
| 31 | CRISP-DM 1.0 | PROCESS / L-PROCESS | six-phase loop | medium | yes | citation | priority review; native editable loop |
| 32 | Requirements and Available Data | PROCESS / L-PROCESS | bidirectional arrows | low | yes | none | two directions visible |
| 33 | Technique Selection and Modeling | PROCESS / L-PROCESS | question-to-method flow | low | yes | none | no extra content |
| 34 | Evaluation | PROCESS / L-PROCESS | validation/review loop | medium | yes | none | stakeholder consequence |
| 35 | Deployment Supports Decisions | LIMIT / L-LIMIT | decision-support loop | low | yes | none | no automatic-action implication |
| 36 | Close: Ask, Match, Interpret | CLOSE / L-CLOSE | three-step close | low | yes | none | concise close |

## Major diagram implementation

Six-technique maps use six numbered, labeled native shapes around a center question. Distance uses two cases, selected attributes, and one labeled connector. Grouping comparison uses identical point positions with different outlined group boundaries. Classification uses labeled historical cases flowing to a discrete output; prediction uses the same grammar ending in a numeric estimate. Slide 25 uses two titled columns with target/no-target labels and four numbered technique rows. Slide 31 uses six editable rounded rectangles in a clockwise loop with return connector from Deployment to Business Understanding. Slides 32–35 use aligned native process nodes and labeled directional connectors.

## Accessibility and QA

PC-2: grayscale review; no color-only cluster, technique, supervised/unsupervised, or comparison meaning; use labels, shape, numbering, position, and line style. Build QA: 36 slides; correct 16:9 order/titles; frozen content complete; example and historical labels present; Target and Chapman citations readable; no M6-R4B; no clipping, overlap, tiny citations, broken connectors, off-slide objects, empty placeholders, or excess whitespace. Open in PowerPoint, export PDF, and inspect every rendered slide.

## Build method

Reuse the established local BUSS256 production pipeline if compatible; otherwise use deterministic local generation with editable native PowerPoint objects. Do not rasterize diagrams or use hosted external visual dependencies.

## Freeze validation

Blueprint v1.1 is treated as frozen: 36 slides, slide-order changes 0, content changes 0, six-technique spine preserved, M6-R4B leakage 0, Target/CRISP-DM/PC-2 specified, layout map and build QA complete. PPTX created: no. Assessment reads: 0. Source mutations: 0. Staged: 0. Commit: 0. Push: 0.
