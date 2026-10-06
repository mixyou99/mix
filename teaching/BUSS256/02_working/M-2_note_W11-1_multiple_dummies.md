# Lecture Note — W11-1: Multiple regression, transforms & dummies (the A2 pipeline)

*Change log: Jun 18, 2026 — created (Stage 2-B, note 3 of 4). Lecture-note DRAFT for professor review.
Markdown only (Production Policy).*

**Source-file map (production):** modernizes the multiple-regression portion of `Seminar 8-9 LRM/Seminars
8-9_Linear Regression Model.pdf` + the exercise `…_LRM_R_Exercise Code.r`. Teaching data = **mtcars**
(`cars.csv`); the A2-pipeline rehearsal uses **`07192013Apps.csv`** (a **historical snapshot of Apple App
Store data, collected July 2013** — used to teach the technique, not as a current read on the app market; a
*different file* from A2's per-group slices). Pairs with `M-2_regression_lab.md` Part D. Load via
`_shared_library/snippets/setwd_load_data.md`. AI step → `_currency/reg_llm_tools.md` (code model).
**Model note:** AI behavior = a *pattern to verify*, not a fixed output.

---

## Learning objectives
By the end of this session you can:
1. Fit a **multiple** regression and read each coefficient as an effect *holding the others constant*. → **algorithm + data literacy**.
2. Encode a categorical predictor as a **dummy set with a baseline**, and read the coefficients relative to it. → **algorithm literacy** (and A2 readiness).
3. Apply the course's standard **transforms** — `Sales = -log(Rank)`, `log(x+1)` — and say why. → **algorithm literacy**.
4. Direct the AI to build the multiple model, then **verify the specification** against your hand-fit. → **verification**.

## The big idea (study-from explanation)
Real outcomes have many causes at once. **Multiple regression** lets us include several predictors together: `lm(y ~ x1 + x2 + x3)`. The payoff is the phrase **"holding the others constant"** — each coefficient is that predictor's effect *after accounting for* the rest. So "weight lowers mpg, holding horsepower and cylinders fixed" is a sharper, fairer statement than the simple model gave us.

**Categories need encoding.** A predictor like cylinders (4, 6, 8) isn't really a number you do arithmetic on — it's a category. We turn it into a **dummy set**: pick one level as the **baseline**, and each coefficient is the difference *from that baseline*. In R, `factor(cyl)` does this automatically and makes 4-cylinder the baseline; the `cyl6` and `cyl8` coefficients then read as "compared to a 4-cylinder car." **Getting this right is the heart of A2** — choosing and stating a baseline, and reading dummies relative to it.

**Transforms** reshape a variable so the linear model fits better. Two you'll use all term: taking a **log** compresses a long-tailed variable (a few huge values) into a sensible range — and we write `log(x + 1)` so that a zero doesn't blow up (log of 0 is undefined). And the course's signature move turns a sales **rank** into a sales **score** with `Sales = -log(Rank)`: rank 1 is best, so negating the log makes a *higher* number mean *better*.

## Worked example A (real — mtcars, dummies)
```r
m2 <- lm(mpg ~ wt + hp + factor(cyl), data = cars)   # 4-cyl = baseline
summary(m2)
```
Real results: `wt ≈ −3.18` (significant), **`cyl6 ≈ −3.36`** (significant at 5% — a 6-cyl car gets ~3.4 fewer mpg *than a 4-cyl*), but **`cyl8 ≈ −3.19` is NOT significant (p ≈ 0.15)** and **`hp ≈ −0.023` is NOT significant (p ≈ 0.06)**. R² ≈ 0.86. Two honest lessons: the `cyl` coefficients are *relative to the 4-cylinder baseline* (not absolute), and **not every predictor earns its place** — `hp` and `cyl8` don't clear the bar here, and a good analyst says so.

## Worked example B (real — the A2 pipeline on `07192013Apps.csv`)
This is **exactly the pipeline your A2 uses** — practice it here on separate data:
```r
apps <- read_csv("07192013Apps.csv")
apps <- apps |>
  mutate(Sales = -log(Rank),                       # rank → sales score
         Log_Rating_Num = log(Rating_Num + 1))     # +1 so zero ratings don't break log
m3 <- lm(Sales ~ Price + Screenshots + Rating_Score + Log_Rating_Num +
                 Business + Finance + Health + Utilities, data = apps)   # Games = baseline
summary(m3)
```
Real results (n = 1,500): **`Log_Rating_Num` is strongly positive and significant** (more ratings → better rank), `Screenshots` is positive and significant, and the four named categories all rank **above the `Games` baseline**. But **`Price` is NOT significant (p ≈ 0.17)** and the star rating isn't either. R² ≈ 0.14.

That `Price` result is the teaching gold: the obvious hypothesis "lower price → higher sales" is **not supported in this data.** Reporting an honest non-result — and resisting the urge to pretend the data said what you expected — is exactly what good analysis (and the A2 rubric) rewards.

> **A2-consistency note (critical).** The transforms/encodings above — `Sales = -log(Rank)`, `log(x + 1)`,
> category dummies with **`Games` as the omitted baseline** — are **technically identical** to the locked A2
> spec (gates **G2/G4**). **Drift risk:** if A2 ever changes the baseline category or the `+1`, this note (and
> the lab) must change in lockstep, or students will learn one pipeline and be graded on another.

## The AI step, then verify
Direct the AI to build the multiple model and encode the dummies, then **check the specification** against your hand-fit. The AI is probabilistic, so don't predict its mistake — verify by **type**:
- **Encoding errors** — did it `factor()` the *categorical* variable (good) but accidentally **factor a continuous one** like price or weight, or leave a category numeric? Did it add **interactions you didn't ask for**?
- **Wrong baseline** — is it reading dummy coefficients as absolute instead of *relative to the baseline*?
- **Significance misreading** — does it call `Price`/`hp`/`cyl8` significant when your output says they're not?
- **Unrequested terms** — extra predictors padding the model.

Whatever it does, your hand-fit + this checklist catches it.

## When / how to use it
- Use multiple regression when several factors plausibly drive the outcome and you want each effect *net of* the others.
- Use **dummies + a stated baseline** for any categorical predictor; always tell the reader which level is the baseline.
- Use **logs** for skewed variables and `-log(Rank)` to turn rank into a "higher = better" score.

## Common mistakes / how to verify
- **Treating a category as a number** (e.g., `+ cyl` instead of `factor(cyl)`) — silently changes the meaning. Verify the model used a factor.
- **Forgetting the baseline** — reading `cyl6 = −3.4` as "6-cyl gets −3.4 mpg" instead of "−3.4 *vs. 4-cyl*."
- **Claiming an unsupported effect** — e.g., "price drives sales" when `Price` is non-significant. Report the non-result.
- **`log(x)` on zeros** — use `log(x + 1)`.

## Key takeaways
- Multiple regression = each effect **holding the others constant**.
- Categories → **dummies relative to a baseline** (`Games` for apps, 4-cyl for cars); state the baseline.
- The A2 pipeline (`-log(Rank)`, `log(x+1)`, dummies + `Games` baseline) is taught here **identically** to the A2 spec.
- Honest non-results matter: in this data, **price doesn't move sales** — say so, and verify the AI didn't pretend otherwise.
