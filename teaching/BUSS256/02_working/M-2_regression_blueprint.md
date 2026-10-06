# M-2 — Regression Module Blueprint (Weeks 10–11 / Seminars 8–9) · STAGE 1 (design only)

*Change log: Jun 18, 2026 — created. Design blueprint for professor approval. **No lecture notes,
scripts, slides, or exercises authored here** — content is Stage 2, after approval. Mirrors the M-1
blueprint shape.*

**Inputs read:** existing `Seminar 8-9 LRM/` (Linear Regression Model lecture, Basics in Statistics,
LRM_R_Tutorials, exercise code + `cars.csv`/`07192013Apps.csv`); COURSE_PROFILE §3 (two literacies) + §4
(hand-first → AI-verify); audit **S-4/S-5/S-6**; benchmark **Themes 1 & 4**; M-1 blueprint (template); and
a fresh 2026 currency scan (7 dated notes → `_reference/ref_reg_*.md`).

**Locked direction (built to it):** classical regression taught faithfully; the student's **own hand-fit
`lm()` is the verification yardstick**; AI at **use-and-interpret / orchestrate** depth only (direct it to
build + diagnose + interpret, then verify against the hand-fit and hypotheses — no deep statistical
internals); spine = **hand-first → AI-verify**, rehearsing **final-exam Q3** ("find the errors in this R
code"); the **p-value misstatement is a teaching moment**, not a silent fix; the **teaching lab uses
non-A2 data**; M-2 stays **technically consistent with the locked A2 spec**.

**2026 currency grounding (cited; notes in `_reference/`):**
- AI-assisted regression with **human verification** is now mainstream intro-stats practice (JSDSE 33(3),
  Jun 2025; *Trends in Higher Education* 5(2), 2025) — "critical human oversight remains essential." The
  consensus move *is* hand-first → AI-verify.
- LLM-written regression code "mimics the form of correct code while fabricating the substance" — catalogued
  failure modes map onto regression: **hallucinated functions, plausible-but-wrong specification,
  fabricated/placeholder significance, unnecessary terms** (arXiv 2602.17671; 2511.04213). These are the
  things students hunt for.
- **Tooling (resolved):** `mall` is the **wrong** tool here — it labels a *text column* row-wise (M-1's
  job). Regression help is a **code-gen/diagnosis dialogue**, so the R-native fit is **`ellmer`'s chat
  interface** (`chat_ollama()` → `chat$chat(...)`). `mall` is built *on* `ellmer`, so this is the **same
  Ollama, same model, same laptops** — only the abstraction changes. Caveat: ellmer caps Ollama at ~2048
  input tokens; use a `system_prompt` to keep the small model concise and R-only.
- **Small-model adequacy:** a ~3B local model (the model M-1 already runs) is weak at code in general — but
  in *this* hand-first/verify design its occasional wrong specs / hallucinated functions / fabricated
  significance are **the teachable artifact**, caught by the student's own fit. No stronger model needed for
  this role (escalate to `qwen2.5-coder`/hosted only if the AI is ever treated as authoritative).
- **Correct p-value (ASA, 2016):** "*if there were really no effect, how often would we get a result at
  least as extreme as ours by chance alone?*" It is **not** the probability the result is a mistake, nor
  that H₀ is true, nor a measure of effect size (ASA Statement, Principles 2 & 5).

---

## 1. Learning objectives (each ladders to a literacy)
By the end of Weeks 10–11 a student can:
1. State what a **p-value is and is NOT** in plain language, and spot the common misinterpretation. → *data literacy* + *verification*.
2. Fit a simple and a multiple **`lm()`** by hand and read the output — coefficients, signs, **significance (stars)**, R²/adjusted R², the F-test. → *algorithm literacy* (how OLS produces its output) + *data literacy*.
3. Apply the course's standard transforms/encodings — `Sales = -log(Rank)`, log-normalized variables, **category dummies + a chosen baseline** — and explain why. → *algorithm literacy* (and A2 readiness).
4. **Direct an AI** to build, diagnose, and interpret the same regression, then **verify it** against the hand-fit and the hypotheses — catching wrong specs, fabricated significance, unnecessary terms, and bad code. → *verification* (the core) + *algorithm literacy*.
5. Turn a verified model into a **business interpretation/recommendation**, stating the limits. → *data literacy*.

---

## 2. Session-by-session outline (Weeks 10–11 ≈ 4 sessions)
*Design only — activities described, not authored. Lab/teaching dataset = **mtcars** (`cars.csv`); A2 pipeline rehearsed on the **separate** `07192013Apps.csv` (see §3/§6).*

| Session | Classical (hand-first) | AI orchestration layered on | Hand-first → AI-verify activity |
|---|---|---|---|
| **W10-1 — Stats foundation + the p-value moment** | Hypotheses (H₀/H₁), significance, **the corrected p-value** (ASA plain-language), α and the stars. | Introduce the AI as a *thing to check* (not yet code): ask it to "explain what a p-value means." | **The p-value teaching beat (locked):** show the deck's three wrong statements (below), teach the correct definition, then **have the AI explain a p-value and have students critique its answer** against the ASA definition — the small model may itself produce the "3% chance it's a mistake" error, a perfect catch. |
| **W10-2 — Simple OLS (build the yardstick)** | Students **hand-fit `lm(mpg ~ wt)` on mtcars** themselves; read intercept/slope, significance, R². | Direct the AI (ellmer chat) to write + run the *same* simple regression and interpret it. | **Verify #1:** compare the AI's code/output to your hand-fit — do the coefficient sign, magnitude, and significance match? Did it use the right variables? Catch any hallucinated function or wrong call. |
| **W11-1 — Multiple regression, transforms, dummies (A2 pipeline)** | Multiple `lm()` on mtcars (continuous + **factor/dummy** predictors like `cyl`/`am`, with a baseline); **log transforms**; correlation check. *Parallel A2-pipeline rehearsal on `07192013Apps.csv`: `Sales=-log(Rank)`, `log(x+1)`, category dummies + baseline.* | Direct the AI to build the multiple model + choose/encode dummies + interpret each coefficient. | **Verify #2:** check the AI's **specification** — did it include the right predictors, handle the **dummy baseline** correctly, avoid **unnecessary/spurious terms**, and interpret signs against your hypotheses? This is exactly the A2 skill. |
| **W11-2 — Diagnostics, error-hunt, recommend (rehearse exam Q3)** | Residuals at the *reading* level (residual summary, "residuals near zero," fit), interpretation, recommendation. *(No deep internals — locked.)* | Hand the AI a regression task and have it produce code+interpretation; **plant/encounter errors**. | **Verify #3 (capstone = exam-Q3 rehearsal):** find the **errors / unnecessary lines** in the AI's regression code and the fabricated/overstated significance, *using your hand-fit as ground truth*; then write the business recommendation. Wrap to the course thesis (machine executes; human verifies/decides). |

**The three p-value misstatements to use as the W10-1 lesson** (from `Basics in Statistics.pdf`, ~slides 34–45, quoted for the teaching contrast):
- "p-value: the probability that the result could have happened by random chance" *(incomplete/misleading)*
- "**The probability that H0 is TRUE by random chance**" *(wrong)*
- "**p-value = 0.03 → There is only a 3% chance the result is due to mistakes**" *(wrong — the locked beat)*
The lecture deck's own line ("p-value: the probability that the true coefficient is zero given the value of…") is also imperfect and gets tightened to the ASA framing.

---

## 3. Hand-fit → AI-verify lab design (A2-separated)

| Stage | Dataset | Student does (hand-first) | AI is directed to | Student verifies / catches |
|---|---|---|---|---|
| Simple OLS | **mtcars** (`cars.csv`, 1974 — historical) | `lm(mpg ~ wt)`; read slope/sig/R² | write + run the same; interpret | sign, magnitude, significance vs hand-fit; hallucinated functions / wrong call |
| Multiple + dummies | **mtcars** | `lm(mpg ~ wt + hp + factor(cyl))`; pick baseline | build multiple model; encode dummies; interpret | correct **baseline/dummy** handling; **unnecessary/spurious** predictors; sign vs hypothesis |
| A2-pipeline rehearsal | **`07192013Apps.csv`** (2013 — historical; **not** A2's slices) | `Sales=-log(Rank)`, `log(x+1)`, category dummies + baseline; fit | reproduce the pipeline + interpret | that the transforms/baseline match the **A2 spec** exactly; fabricated significance |
| Error-hunt capstone | **mtcars** (distinct from exam corpus) | hand-fit the "true" model | produce a regression with subtle errors | the planted **errors / unnecessary lines / overstated significance** — rehearses **exam Q3** |

**What the student verifies, concretely (the rubric to hand them, from StatLLM's five axes + a failure-mode hunt list):** correctness, executability, output accuracy, interpretation accuracy, readability — and a checklist: *hallucinated function? wrong specification? fabricated/placeholder significance? unnecessary term? dummy baseline wrong?*

---

## 4. KEPT / MIGRATED / RETIRED / ADDED (vs. existing Seminar 8–9)
*Note: unlike M-1, the existing R code is **already clean, standard `lm()`** — so there is **no brittle-code migration**. The work is the p-value fix and the AI layer.*

| Disposition | Item | Note |
|---|---|---|
| **KEPT** (faithfully) | OLS, slope/intercept, multiple regression, coefficient interpretation (stars ***/**/*), R²/adjusted, F-test, residuals-at-reading-level | The classical core and the yardstick. |
| **KEPT** | The clean `lm()` exercise code; the mtcars lecture example; the App-Store pipeline (`Sales=-log(Rank)`, dummies) | Already current; no migration needed. |
| **MIGRATED** | *(minimal — hygiene only)* old-numbered exercise variants (`Seminars 2-3_LRM_…`) → consolidate naming | Not code rot; just labeling. |
| **RETIRED** | The **three p-value misstatements** (Basics in Statistics ~sl. 34–45) and the deck's imperfect coefficient-p-value line | Replaced by the ASA definition — *but retained on-screen as the "what's wrong with this?" teaching contrast*, not deleted silently. |
| **ADDED** | **Corrected p-value** (ASA) + the misinterpretation-as-lesson + **AI-critique-the-p-value activity** | Locked teaching moment. |
| **ADDED** | The **AI-orchestration layer**: `ellmer` chat (`chat_ollama`) to direct/diagnose/interpret regression; the **hand-first → AI-verify** spine; the **verification rubric + failure-mode hunt list** | The redesign's point; rehearses exam Q3. |
| **ADDED** | **Date stamps** on mtcars (1974) and `07192013Apps.csv` (2013) as historical snapshots; a note where **refreshed App-Store data** (D-5) plugs into the rehearsal | Currency (S-4); re-collection is a separate data task. |

---

## 5. Volatile content → `_currency/` (placeholders, not hard-coded)
**Recommendation: a parallel file `undergrad_bigdata/_currency/reg_llm_tools.md`** that **points to
`tm_llm_tools.md` as the single source for the shared model + Ollama install** (so the volatile model name
lives in ONE place), and adds only the **M-2-specific interface**: the `ellmer` `chat_ollama()` snippet,
the **`system_prompt`** that keeps the small model concise/R-only, the 2048-token caveat, and the **lab
prompt templates** (e.g., "write an lm() for…", "critique this regression output"). Stable notes refer to
"a current local-LLM chat interface (see `_currency/reg_llm_tools.md`)" — no model/version names baked in.
Registering it in `CURRENCY_LOG.md` will be a governance diff for approval in Stage 2.

---

## 6. Dependency map + lab-data separation

- **M-2 → A2 (critical).** M-2 teaches the exact pipeline A2 assesses: `Sales=-log(Rank)`, log-normalized
  variables, **category dummies + baseline** — these are A2 gates **G2/G4** (P-2/P-3). A2 is the graded
  *application*; M-2 is the *instruction*.
- **Lab data ≠ A2 data — confirmed.** The teaching lab uses **`cars.csv` (mtcars)**; the A2-pipeline
  rehearsal uses **`07192013Apps.csv`**. **A2's actual data are the per-group `BUSS256_Group_Assignment_
  Datasets/Paid*.csv` slices** — *different files, different apps*. **Zero file overlap** with the M-2 lab.
  *(Nuance to confirm — Q2: `07192013Apps.csv` is the same App-Store **domain/pipeline** as A2, by design,
  for readiness; it is not A2's slices.)*
- **M-2 → final exam Q3.** Q3 = regression with "**identify errors/unnecessary lines in this R code**" +
  F-test + prediction. The Verify-#3 capstone rehearses it directly. Keep exam data distinct from the lab.
- **Drift risks to watch (flagging now):** (a) the **transform/encoding definitions** (`-log(Rank)`,
  `log(x+1)`, dummy baseline choice) must stay **identical** between the M-2 rehearsal and the A2 spec; (b)
  the **p-value definition** must be consistent across Basics-in-Statistics, the regression lecture, A2's
  "Common Mistakes," and exam Q3 — fix it everywhere, not just slide 45.

---

## 7. Open questions — need your decision before Stage 2
1. **Two-vehicle data design** — confirm: hand-first → AI-verify **teaching lab on mtcars**, and keep the
   **App-Store `07192013Apps.csv`** as the **A2-pipeline rehearsal** (dated 2013)? *(Recommended.)*
2. **Is `07192013Apps.csv` "separate enough" from A2?** It's a *different file/apps* but the *same
   App-Store domain + pipeline* (intentional, for A2 readiness). Acceptable, or do you want the A2-pipeline
   rehearsed on a non-App-Store dataset (then where do students meet the exact A2 constructs)?
3. **LLM interface** — confirm **reuse the M-1 local Ollama + model, driven via `ellmer` chat (not
   `mall`)**, and **accept the small 3B model's imperfections as the teachable artifact** (no stronger
   model)? Or budget a stronger local code model (`qwen2.5-coder`)?
4. **Currency** — parallel **`reg_llm_tools.md`** pointing to `tm_llm_tools.md` for the shared model —
   confirm?
5. **p-value depth** — is the ASA plain-language definition + "what it is NOT" enough, or add a worked
   intuition (a "surprising in a no-effect world" demo)? *(Recommend the intuition.)*
6. **Diagnostics depth** — confirm we stay at **reading-level residuals** ("residuals near zero," read the
   summary), not formal heteroskedasticity/normality tests (per the locked "no deep internals")?
7. **Graded vs formative** — confirm M-2's lab is **ungraded formative** (like M-1), with the **graded
   application being A2** (no separate M-2 graded deliverable)?

---

## Stage-2 preview (NOT started)
On approval, Stage 2 authors: the corrected Basics-in-Statistics p-value notes + the AI-critique activity;
the regression lecture notes (hand-first → AI-verify, mtcars) + the A2-pipeline rehearsal; the lab
(exercise + solution) with the verification rubric; `_currency/reg_llm_tools.md`; and the spoken scripts
(English, locked playful tone) — each as `02_working/` drafts, hand-first → AI-verify throughout, B&W and
cross-platform standards applied.
