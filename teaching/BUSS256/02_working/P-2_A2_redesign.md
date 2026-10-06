# P-2 — A2 Redesign: AI-Collaboration Group Capstone (DRAFT)

*Change log: Jun 18, 2026 — created. Builds the A2 assignment STRUCTURE (unique slices, lightweight
AI-process artifacts, gate-vs-judgment deliverable split) per the locked design decisions. Markdown
draft for professor review; no source file modified. **Does NOT build the grading rubric (P-3).***
*Rev Jun 18, 2026 — D-A2 confirmed: **Scheme 1 (partition by category) locked** as THE allocation;
Scheme 2 demoted to a rejected-alternative note; gate items G1 & G4 finalized to their Scheme-1 forms;
added a production-phase slice-viability check (§5).*

**Authority:** GRADING_POLICY §A.1, §B, §D; COURSE_PROFILE §4 (hand-first → AI-verify); P-0b (A1/A2
division); P-1 (deferred structural issues #1–#3; reusable interpretation/critique criteria).

---

## Source-file map (for the production phase — do NOT edit now)

| Item | Editable original | Notes |
|------|-------------------|-------|
| A2 task / deliverables / requirements | `A2/BUSS256_Group Assignment.docx` | **Dependency:** P-1 *also* edits this file (permission language). Production must apply P-1 + P-2 together so the file is touched once (Production Policy, TA_CHARTER §6). |
| Interpretation/critique criteria | `A2/Sample/BUSS256_Common Mistakes in Assignment#2.pptx` | Reused into P-3 (see §4). |
| Hypothesis-development guidance | `A2/Sample/Tips for Group Assignment2.pptx` | Reused into task framing (see §1). |
| Peer evaluation | `BUSS256_Group_Member_Evaluation.docx` (course root) | A/B/C/D form already exists; continues to apply, unchanged. |
| Per-group data slices (NEW) | derived from `A2/BUSS256_Group_Assignment_Datasets/Paid*.csv` | Production/data step to generate the slice files (§2). |

Dataset facts grounding this design: 8 category files (`Paid{Books,Business,Education,Finance,Games,
Medical,Music,Productivity}.csv`), **each exactly 299 rows** (Rank 1–299), 17 columns; ReleaseDate
spans 2008-07 → 2012-12 (collection date 1 Jan 2013). Uniform size ⇒ both partition schemes in §2 are
feasible and roughly balanced.

---

## 0. Allocation decision — RESOLVED: Scheme 1 (partition by category)

**D-A2 confirmed (Jun 18, 2026): partition by category.** Each group is assigned one distinct app
category and works only on that slice.

*Rationale (recorded):* strongest anti-convergence and the richest per-market business framing
(decisions A + D) — answers are genuinely non-transferable across teams. The conflict this resolves:
the locked GATE list (decision C) named "category dummies + baseline" and "8-way aggregation," but a
single-category slice has no cross-category variation to dummy-code and nothing to aggregate across
categories. Under Scheme 1 those two gate items are adapted to **within-slice** equivalents
(G1: assemble/clean the one-category slice; G4: a justified-baseline dummy set from a within-slice
variable). This is *pedagogically better*, not merely a workaround: **choosing and justifying the
dummy/baseline is itself a judgment act**, partially shifting a former gate item toward the scored
ceiling (consistent with decision C-1). The full gate list otherwise stands.

*Alternative considered & rejected — see §2.*

---

## 1. Revised A2 task description (open framing on a unique slice)

> **BUSS256 Group Assignment — Mobile App Market Analysis (AI Collaboration)**
>
> Your team is a group of data analysts assigned to **one specific app category in the U.S. Apple App
> Store paid-app market** (your assigned category — see allocation below). Unlike a
> textbook exercise, **no two teams have the same data**, so there is no single "right" answer to copy
> — yours must come from *your* slice.
>
> **Your job:** frame your own business problem for your assigned market, build and estimate a linear
> regression model that speaks to it, **use AI to help you do the analysis**, **verify** the AI's work,
> and turn your results into a recommendation a real publisher in that market could act on.
>
> This is an **AI Collaboration** assignment: you are expected to use AI assistants, you must disclose
> and verify that use (deliverables B-1…B-4 below), and you are graded on your **judgment** — framing,
> verification, interpretation, and reflection — not on hitting a target model fit. Different slices
> have different difficulty; that is fine, because we are grading the quality of your analysis and
> reasoning, not your R².

**Analytical spine (reused from the current spec, lightly reframed).** Keep the existing eight-step
flow as the backbone — (1) frame the business problem + justify hypotheses; (2) understand the data;
(3) prepare data; (4) build the model; (5) estimate; (6) evaluate; (7) interpret coefficients; (8)
evaluate findings + recommend. The redesign changes *what is gated vs. scored* (§3), *whose data it is*
(§2), and *adds the AI-process artifacts* (§3·B) — not the analytical steps themselves. Hypothesis
development continues to draw on the existing **Tips** guidance ("investigate what factors matter, then
support hypotheses with evidence").

---

## 2. Unique-slice allocation (reuses existing data; ~8–9 groups)

**Goal:** each group's dataset differs, so an AI cannot generate one shared generic answer; selecting
and defending an analysis *for your specific slice* is part of the work.

### Allocation (LOCKED): partition by category

| Groups | Allocation |
|--------|------------|
| **8 groups** | One category each: Books, Business, Education, Finance, Games, Medical, Music, Productivity (299 rows each). |
| **9 groups** | As above for 7 categories; **split one category** (recommend the most heterogeneous, e.g., Games) by its **median ReleaseDate** into an *early-release* and a *late-release* cohort (~150 rows each) → that category serves 2 groups. All 8 categories remain in use. *(See the §5 slice-viability check for the thin-slice fallback.)* |

*Within-slice dummy variable (gate G4):* each group builds a baseline-coded dummy set from a
categorical/binned column in their slice — recommended options: release-year bins (2008–10 / 2011 /
2012), price tier (low/mid/high by quantile), or `TopInAppPurchases`>0. The group **chooses and
justifies** the baseline (this is where G4 shades into scored judgment — §0).

*Slice generation:* the per-group category files are generated once in the production/data phase from
the existing `Paid*.csv`; difficulty unevenness across categories is accepted (decisions A + C).

> **Alternative considered & rejected — partition by release cohort.** Pool all 8 categories (2,392
> rows), sort by `ReleaseDate`, cut into 8–9 equal-frequency cohorts (~265–300 rows each); each group =
> one cohort across all categories. *Pro:* keeps the original gate items (8-way aggregation + category
> dummies) unchanged. *Con (why rejected):* every group still sees all categories, so anti-convergence
> is weaker and the per-market business framing (decision D) is far less vivid — teams would all be
> answering "what drives app sales" on overlapping data rather than analyzing a distinct market.
> Reasoning preserved here in case a future variant prefers to keep cross-category dummies.

---

## 3. Revised deliverable list — GATE vs JUDGMENT + 4 AI artifacts

### (i) GATE items — pass/fail, must be correct to qualify, **earn no differentiating points**
*(AI auto-does these; they are the floor. Submit them in a clearly separated "Technical Checklist"
section so they are visibly distinct from the judgment items.)*

| ID | Gate item | Source |
|----|-----------|--------|
| G1 | Assemble and clean your assigned **category** slice into a single analysis-ready dataset | reuses "aggregation" req, adapted to one category |
| G2 | Required transforms present: Sales = −log(Rank); ≥1 log-normalized variable | reuse |
| G3 | ≥5 predictors in the regression | reuse |
| G4 | A **within-slice** dummy set with an explicit, justified **baseline** (release-year bins, price tier, or `TopInAppPurchases`>0) | reuse, adapted; choosing/justifying the baseline partly shifts this toward the scored ceiling (decision C-1) |
| G5 | ≥1 newly-created variable (e.g., App Age = collection date − ReleaseDate) | reuse |
| G6 | Outlier handling on ≥1 variable | reuse |
| G7 | Summary-stats table + correlation table present | reuse (current p45–p52) |
| G8 | File naming + submission format (`BUSS256_A2_GXX.docx/.r/.csv`) | reuse (current p88–p93; now **gate**, not a −5 penalty) |

### (ii) JUDGMENT items — the **scored ceiling**
*(These are what differentiate grades; mapped to GRADING_POLICY §B.)*

| ID | Judgment item | §B object |
|----|---------------|-----------|
| J1 | **Problem framing** — a specific, defensible business question + target audience for *your* market, with hypotheses justified by credible evidence | framing |
| J2 | **Verification quality** — fed by artifact B-3: was the check correct, and did the team reconcile/identify any discrepancy with the AI output? | verification |
| J3 | **Interpretation & business insight** — technical + plain-language reading of coefficients & significance, and a "so-what" recommendation for the audience | interpretation |
| J4 | **Reflection** — fed by B-4: where the AI was wrong/limited and what the team would do differently | reflection |

### (iii) Four lightweight AI-process artifacts (exactly four — no full logs)

| ID | Artifact | Note |
|----|----------|------|
| B-1 | **AI-usage statement** (short) — which tools, where used, by whom | disclosure (§D) |
| B-2 | **One representative AI conversation / prompt log** — the single dialogue where the most important judgment/verification happened, **student-selected** | selecting it is itself a metacognitive act; **not** a full archive of all prompts |
| B-3 | **One concrete verification of an AI output** — e.g., re-derive one coefficient/metric by hand or with independent code, and compare | **one team-level check** — a representative verification, not a full hand-recompute of everything |
| B-4 | **Short reflection** on where the AI was wrong/limited | feeds J4 |

**Separation guarantee:** the deliverable template will place GATE items in a "Technical Checklist"
section and JUDGMENT items + B-1…B-4 in the main "Analysis & Decision" section, so a P-3 rubric can
score the latter without wading through the former. B-3 feeds J2; B-4 feeds J4; B-1/B-2 support the
disclosure check and inform the J1/J2 evaluation.

---

## 4. Reuse map (these criteria feed P-3 — rubric NOT built here)

| Existing material | Carries into | As |
|-------------------|--------------|----|
| Common Mistakes: "Support/justify the hypotheses" (H1 example) | J1 | framing/justification criterion |
| Common Mistakes: technical interpretation ("one-unit ↑ in Price ↓ Sales by 30.2%, sig. at 0.1%") | J3 | technical-interpretation criterion |
| Common Mistakes: "summarize the results in a plain manner" | J3 | plain-language-interpretation criterion |
| Common Mistakes: hypothesis-evaluation ("if not supported, explain why"; "H1: Price (No)…") | J3/J4 | findings-evaluation criterion |
| Common Mistakes: "complete sentences, in-depth discussion" + cite external sources | J1/J3 | quality + disclosure criterion |
| Tips: hypothesis-development + model specification (Y = f(Key IVs, Controls)) | J1 | framing scaffold (currency-refresh the 2019 evidence separately) |

These become the **observable descriptors** in the P-3 rubric; P-2 only points to them.

---

## 5. Boundary notes

**Left to P-3 (grading):** all rubric weights and level descriptors — including whether to adopt the
benchmark's 20/30/50 output/prompt-log/reflection split or a gate-pass + judgment-weighted scheme;
point allocations across J1–J4 and B-1…B-4; how the peer-evaluation form modulates individual marks.
**No weights or scoring are set in P-2.**

**Left to the production phase:** writing changes into the real `.docx`/`.pptx` (combined with P-1 on
`BUSS256_Group Assignment.docx`); **generating the per-group category slice CSVs**; reconciling the due
date (spec says "Nov 23"; the canonical Updated syllabus places Assignment 2 in Week 13); and the
dataset currency refresh (2013 data → re-collect once per decision D-5; the *structure* here is
dataset-vintage agnostic).

**Slice-viability check (production/data phase — a data check, not a structure change).** When
generating the per-group category CSVs, verify that **each slice supports the modeling requirements on
its available rows**: enough usable rows and variable variation to fit **≥5 predictors (G3)**, build a
**within-slice baseline dummy set (G4)**, and perform **outlier handling (G6)** without the estimation
becoming unstable (e.g., near-collinear dummies, empty bins, or too-small n). **Flag the 9-group case
specifically:** splitting one category by median ReleaseDate leaves ~150 rows per half, which may make
estimation unstable. **If any slice is too thin, fall back to the 8-group one-category-each
allocation** (each group keeps a full 299-row category). This is resolved with the data at production
time; it does not change the assignment structure above.

**Unchanged by design:** the eight-step analytical spine, the peer-evaluation form, and the core
regression requirements (now reorganized as gate vs judgment, not removed).

**Allocation:** **D-A2 resolved — Scheme 1 (partition by category), locked** (§0). No open design
decisions remain in P-2; the next step is P-3 (the process-and-judgment rubric).
