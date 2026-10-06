# Lecture Note — W11-2: Diagnostics, the error-hunt, and the recommendation

*Change log: Jun 18, 2026 — created (Stage 2-B, note 4 of 4). Lecture-note DRAFT for professor review.
Doubles toward A2 + final-exam readiness. Markdown only (Production Policy).*

**Source-file map (production):** modernizes the residuals/interpretation portion of `Seminar 8-9
LRM/Seminars 8-9_Linear Regression Model.pdf`; **retires** the old regression-on-cluster-scores bridge.
Pairs with `M-2_regression_lab.md` Parts E–F. The error-hunt rehearses **final-exam Q3**. AI step →
`_currency/reg_llm_tools.md` (code model); OS cues → `M-1_ollama_setup_guide.md`. **Model note:** AI
behavior = a *pattern to verify*, not a fixed output.

---

## Learning objectives
By the end of this session you can:
1. Read **residuals** at a practical level to sanity-check a model's fit. → **algorithm + data literacy**.
2. Run an **error-hunt** on an AI-written regression — find the wrong code and overstated claims using your hand-fit. → **verification** (rehearses exam Q3).
3. Turn a **verified** model into a business recommendation, and state its limits. → **data literacy**.

## The big idea (study-from explanation)
A model is only as good as its misses. A **residual** is simply **actual − predicted** for one data point: how far the line was off for that car (or app). If a car *actually* gets 24 mpg and the model predicted 26, the residual is −2. We don't need deep tests here; we need two practical reads. First, **residuals should be small and roughly centered on zero** — a model that's systematically too high or too low is mis-specified. R prints a residual summary (min, 1Q, median, 3Q, max) right at the top of `summary()`; glance at it to confirm the misses are modest and balanced. (That's as far as we go — formal diagnostic tests are beyond this course.)

Then comes the session's main event: the **error-hunt**. You've fit these models by hand, so now you do what a real analyst does with AI-written code — you **audit it**. This is the exact skill the final exam tests ("find the errors and unnecessary lines in this R code"), and it's the skill that makes you valuable in a workplace full of people who paste AI output without checking.

## Worked example — the error-hunt
Here's a regression an AI assistant might hand you for the cars data. The AI is **probabilistic**, so a real one won't make *these specific* mistakes — but whatever it produces will fall into the same handful of **types**, and your hand-fit catches them. Audit this one:
```r
model <- lm(mpg ~ factor(wt) * factor(hp) * as.factor(cyl), data = cars)   # (A)
summary(model)
# "All three predictors are significant."                                  # (B)
```
Hunt by category:
- **(A) Encoding error.** `wt` and `hp` are **continuous** — turning them into `factor()` is wrong (it treats every weight as its own category), and the `*` adds **three-way interactions nobody asked for**. (It did get `cyl` as a factor — partial credit to the machine.) Your clean model was `mpg ~ wt + hp + factor(cyl)`.
- **(B) Significance misreading.** Your hand-fit showed **`hp` and `cyl8` are NOT significant** (p ≈ 0.06 and 0.15). "All three are significant" is false — a classic AI overstatement. Catch it against your own output.
- Other **types** to keep on the list: **unrequested terms**, a broken `predict()` call, or a **causation claim** ("proves weight *causes* lower mpg") from observational data.

The point isn't to memorize this snippet — it's to **verify every line against the truth you computed yourself.**

## From verified model to recommendation
A score isn't a deliverable; a decision is. Take the **verified** App-Store model from last session: the honest reading is that **the number of ratings and the app's category move its rank, while price does not.** So a recommendation an analyst could defend: *"Focus on accumulating reviews and choosing the right category — cutting price shows no rank effect in this data."* Notice it (1) names what actually drives the outcome, (2) **resists** the unsupported "just lower the price" instinct, and (3) admits a limit: R² ≈ 0.14, so rank has many drivers beyond what we measured. Stating that limit is a strength, not a weakness.

## When / how to use it
- Glance at **residuals** to confirm a model isn't systematically off before you trust its coefficients.
- Run the **error-hunt** on *any* AI-written analysis before you act on it — that's the job.
- Write recommendations from **verified** results only, name the limits, and never claim causation from a regression.

## Common mistakes / how to verify
- **Skipping the audit** because the AI's code "looks like R." Looking right and being right are different — run it, compare to your hand-fit.
- **Believing "all significant."** Check each p-value against your own output; non-results are real results.
- **Recommending the unsupported.** If `Price` is non-significant, don't recommend price cuts.
- **Causation creep.** Regression shows association; say "associated with," not "causes."

## Key takeaways
- Residuals = actual − predicted; they should be **small and centered near zero** (a practical sanity check, no deep tests).
- The **error-hunt** — audit AI code against your hand-fit, by error *type* — is the exam-Q3 skill and the workplace skill.
- A good recommendation rests on a **verified** model, names the real drivers, refuses unsupported claims, and states its limits.
- The module's lesson is the course's: **the machine executes; you direct, verify, and decide.**
