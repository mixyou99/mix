# Lecture Note — W10-2: Simple regression (your hand-fit is the yardstick)

*Change log: Jun 18, 2026 — created (Stage 2-B, note 2 of 4). Lecture-note DRAFT for professor review.
Markdown only (Production Policy).*

**Source-file map (production):** modernizes `Seminar 8-9 LRM/Seminars 8-9_Linear Regression Model.pdf`
(simple OLS) + `LRM_R_Tutorials`; adds the AI-verify layer. Teaching data = **mtcars** (`cars.csv`). Pairs
with `M-2_regression_lab.md` Parts A1–C. Load files with `_shared_library/snippets/setwd_load_data.md`
(same on macOS/Windows). The AI step uses the **code** model via `ellmer` chat (`_currency/reg_llm_tools.md`);
Ollama-running cues → `M-1_ollama_setup_guide.md`. **Model note:** AI behavior is a *pattern to verify*, not
a fixed output.

---

## Learning objectives
By the end of this session you can:
1. Explain what **Ordinary Least Squares (OLS)** does — fit the line that best matches the data. → **algorithm literacy**.
2. **Hand-fit** `lm(mpg ~ wt)` and read the intercept, slope, significance, and R². → **algorithm + data literacy**.
3. Direct an AI to build the *same* model, then **verify** it against your hand-fit. → **verification**.

## The big idea (study-from explanation)
Regression fits a straight line through a cloud of points: **y = intercept + slope · x**. The **intercept** is the predicted y when x is 0; the **slope** is how much y changes for each one-unit increase in x. "Ordinary Least Squares" just means we pick the line that makes the **total squared distance** from the points to the line as small as possible — the line that's closest to everything at once. You don't need the calculus; you need to read the result.

R does the fitting in one line: `lm(y ~ x, data = ...)`. The `summary()` of that gives you four things to read: the **slope** (the effect), its **p-value/stars** (is it distinguishable from chance? — last session), and **R²** (what fraction of the variation in y the model explains, from 0 to 1).

Here's the move that defines this whole module: **you fit it yourself first.** That hand-fit is your **yardstick**. In a minute we'll ask an AI to build the same model — and the only way to know whether to trust the AI is to already hold the correct answer in your hand.

## Worked example (real — mtcars)
Question: does a car's **weight** predict its **fuel economy (mpg)**?
```r
library(tidyverse)
cars <- read_csv("cars.csv")          # mtcars: Model, mpg, cyl, hp, wt, ...
m1 <- lm(mpg ~ wt, data = cars)
summary(m1)
```
What you get (real): **intercept ≈ 37.3**, **slope on `wt` ≈ −5.34**, highly significant (`***`), **R² ≈ 0.75**. Read it like a sentence: a car of "zero weight" would notionally get 37 mpg (not meaningful on its own), and **each additional 1,000 lb costs about 5.3 mpg.** The model explains about **75%** of the variation in fuel economy across these cars — a strong fit. Write those three numbers down; they are your yardstick.

## The AI step, then verify
Now direct the AI to do the same job and check it:
```r
library(ellmer)
chat <- chat_ollama(model = MODEL,    # MODEL = code model → _currency/reg_llm_tools.md   # UNTESTED — needs Ollama
  system_prompt = "You are an R tutor. Reply in English only. Concise runnable base-R + one line. No causation claims.")
chat$chat("Using the data frame cars (mtcars), write R to regress mpg on wt and say whether wt is significant.")
```
Hold its answer next to your `summary(m1)`. Don't assume it's right — **grade it**. The AI's mistakes are *unpredictable* (it's a probabilistic tool, so each run differs), so you don't memorize "the AI does X." You watch for **error types**:
- **Encoding/spec errors** — did it use the right variable, or quietly add/transform something?
- **Significance misreading** — does it call something significant that your output says isn't?
- **Unrequested terms** — did it add predictors you didn't ask for?
- **Runs at all?** — paste it in; does it execute, or just *look* like R?

If your hand-fit says `wt` is a strong, significant negative effect with R² ≈ 0.75 and the AI says something different, **your hand-fit wins** until you can see exactly why.

## When / how to use it
- Use simple regression to measure **one** predictor's relationship with an outcome, and to get a baseline R² before adding more variables.
- Use the **hand-first → AI-verify** habit on *every* model: fit it yourself, then let the AI assist, then reconcile. Never the other way around.

## Common mistakes / how to verify
- **Over-reading the intercept.** "37 mpg at zero weight" isn't a real car; the intercept is just where the line starts.
- **Confusing R² with significance.** A high R² doesn't make every coefficient significant, and a significant slope doesn't guarantee a high R². Read both.
- **Trusting the AI's summary over your output.** Re-run `summary()` yourself; the numbers in *your* console are the truth.

## Key takeaways
- `lm(y ~ x)` fits the best straight line; read **slope, significance, R²**.
- mtcars: heavier → lower mpg, ≈ −5.3 mpg per 1,000 lb, R² ≈ 0.75 — **your yardstick.**
- The AI's errors are unpredictable, so verify by **type** against your hand-fit — never trust it blind.
