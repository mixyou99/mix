# BUSS256 M6-R4A — Decision + Verification Packet

## Scope

This packet extracts the two open project-lead decisions and four external-verification items from `BUSS256_M6_R4A_CONTENT_SPEC_v1.md`. It makes no content decision, source change, or external lookup.

The content specification defines a 36-slide target by source groups, not a numbered 2027 slide-by-slide build map. Accordingly, “affected proposed 2027 slide(s)” below identifies the proposed progression block and states when a future numeric slide number has not yet been assigned.

## DECISION-R4A-01 — 36-slide target

| Field | Decision support |
|---|---|
| Decision ID | `DECISION-R4A-01` |
| Affected source slides | All 49; especially 2/4, 10/11, 18/19, 22/23, 24/25, 29/33, 30–32, 36–38, 43/44 (merge groups); 41–42 (delete); 46 (defer). |
| Affected proposed 2027 slides | Every proposed block; individual future slide numbers are not yet assigned. |
| Exact issue/question | Approve the 36-slide target, or preserve the 49-slide structure and limit work to wording/correction changes? |
| Option A | Approve the 36-slide target: retain the six-technique spine and process close; compress redundant M6-R1 review, duplicate titles, and repeated explanatory slides; delete 41–42; defer 46. |
| Option B | Preserve the 49-slide structure; apply only wording/correction changes. |
| Other explicit option | None in the content specification. |
| Consequence of A | A shorter lecture with a stronger progression from business questions to technique selection. It requires structural merging and creates a new source-to-output map. |
| Consequence of B | Lowest structural-change risk and maximum visual continuity, but it retains redundant review, duplicate transitions, and a less focused data-preparation preview. |
| Codex recommendation | **Option A.** The mapped merges remove repetition without removing a technique family or process close. |
| Confidence | High for preservation of source coverage; medium for the final pacing preference. |
| Project-lead judgment required | **Yes.** Slide-count/pace trade-off is a course-design decision. |

## DECISION-R4A-02 — named-company cases if verification does not close

| Field | Decision support |
|---|---|
| Decision ID | `DECISION-R4A-02` |
| Affected source slides | 6 (Korea Telecom churn), 22 (Walmart association case), 23 (Target case). |
| Affected proposed 2027 slides | The proposed Bridge/Churn block and Association block; individual future slide numbers are not yet assigned. |
| Exact issue/question | If VX-R4A-01 through 03 do not close, should the lecture use generic, clearly labeled illustrations or omit the named-company cases? |
| Option A | Replace the named claims with generic, clearly labeled illustrations that preserve the business-question teaching role. |
| Option B | Omit the named-company cases. |
| Other explicit option | Retain each named case only if its verification item closes. This is a conditional retention rule, not a substitute for choosing A or B after a failed verification. |
| Consequence of A | Preserves churn, association, and prediction teaching anchors while avoiding unsupported company-specific assertions. It can keep the proposed structure stable. |
| Consequence of B | Removes factual-risk exposure completely but may reduce the concreteness of the opening and association examples; a merge or pacing adjustment may follow. |
| Codex recommendation | **Option A, conditional on a clearly visible “illustrative example” label.** |
| Confidence | Medium-high. The examples support the teaching flow but are not required to preserve the six-technique spine. |
| Project-lead judgment required | **Yes.** The decision sets the desired balance between concrete cases and factual-risk minimization. |

## External verification queue

| ID | Affected source slide(s) | Affected proposed 2027 slide(s) | Exact factual claim / gap | Why verification is needed | Current source/citation | Essential? | Can slide survive removal? | If verification fails |
|---|---:|---|---|---|---|---|---|---|
| `VX-R4A-01` | 6 | Bridge/Churn block; not yet numbered | “In 2025, 30% of cell phone customers left when their contracts expire” for Korea Telecom. | Specific company, year, and percentage are factual claims without a source in the canonical slide. | Canonical lecture slide 6; no source cited. | No. The churn-question scaffold is essential; this statistic is not. | Yes. | REPLACE-WITH-GENERIC-CONCEPT or REWORD as a labeled hypothetical. |
| `VX-R4A-02` | 22 | Association block; not yet numbered | “Walmart’s MBA Center” as the named association-case framing. | Exact named-case identity/wording needs support before student-facing reuse. | Canonical lecture slide 22; no source cited. | No. Association/co-occurrence is essential; the named retailer is not. | Yes. | REPLACE-WITH-GENERIC-CONCEPT. |
| `VX-R4A-03` | 23 | Association block; not yet numbered | Target behavioral-prediction case and its implied provenance. | A named company plus behavioral inference needs reliable provenance and appropriate context. | Canonical lecture slide 23; no source cited. | No. The technique discussion survives without it. | Yes. | REPLACE-WITH-GENERIC-CONCEPT or REMOVE. |
| `VX-R4A-04` | 44 | Workflow-close block; not yet numbered | “Cross-Industry Standard Process for Data Mining (Shearer, 2023)” attribution. | Formal process attribution should be bibliographically correct before it is cited as a named standard. | Canonical lecture slide 44; parenthetical attribution only. | No. Technique-selection/evaluation workflow is essential; the named attribution is not. | Yes. | REWORD as an uncited generic workflow only if a formal attribution cannot be verified; otherwise REMOVE the named attribution. |

## Build blocker classification

| Open item | Classification | Reason |
|---|---|---|
| `DECISION-R4A-01` | **MUST-CLOSE-BEFORE-BUILD** | It fixes the target slide count and determines the structural merge plan. |
| `DECISION-R4A-02` | **CAN-BUILD-WITH-PLACEHOLDER** | A clearly marked generic-example placeholder can preserve structure pending the project-lead choice. |
| `VX-R4A-01` | **CAN-BUILD-WITH-PLACEHOLDER** | The numeric/company claim can become a labeled hypothetical or generic churn framing. |
| `VX-R4A-02` | **CAN-BUILD-WITH-PLACEHOLDER** | The association teaching point can use a generic retail example. |
| `VX-R4A-03` | **CAN-BUILD-WITH-PLACEHOLDER** | The case can be generic or removed without altering the technique taxonomy. |
| `VX-R4A-04` | **CAN-BUILD-WITH-PLACEHOLDER** | The closing workflow can remain structurally present while its named attribution is withheld. |

**Must-close-before-build count: 1.**

## Content-spec consistency check

| Check | Result |
|---|---|
| Does the 36-slide target depend on either decision? | **Yes.** It depends directly on `DECISION-R4A-01`. `DECISION-R4A-02` may affect whether named-case slides are merged, genericized, or omitted, but does not require a different 36-slide plan if Option A is used. |
| Does the six-technique spine depend on either decision? | **No.** Source slide 12 and all six technique families remain regardless of the two decisions. |
| Could a verification item change slide count? | **Yes, conditionally.** VX-R4A-01 through 03 could remove or merge example material if the lead selects omission; VX-R4A-04 can remain as an unnamed workflow and need not change count. |
| Could a verification item force structural redesign? | **No.** Each item has a generic/reword/remove path within the existing progression. |
| Is the M6-R4B HOLD boundary affected? | **No.** The decisions and verification queue concern the lecture only; no Exercise, CSV, code, functions, packages, or import/export material enters scope. |

## Integrity

- Content spec modified: no.
- M6-R4B touched: no.
- Assessment reads: 0.
- Source mutations: 0.
- Git staged: 0.
- Commit: 0.
- Push: 0.
