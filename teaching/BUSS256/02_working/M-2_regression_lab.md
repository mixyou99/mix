# M-2 — Hand-Fit → AI-Verify Regression Lab (DRAFT)

*Change log: Jun 18, 2026 — created (Stage 2-A). In-class **ungraded formative** lab. Draft for professor
review. Spine: hand-first → AI-verify. Volatile values → `_currency/reg_llm_tools.md`.*

> **Ungraded, in-class.** No points — practice. You fit the regression **yourself first** (your
> yardstick), then direct a local AI to do the same, then **check the AI against your own result.**
>
> **Code status.** The **classical R (`lm`) code** is standard and its results were reproduced on the real
> data (mtcars; `07192013Apps.csv`) — run it to confirm exact numbers. The **AI-call code (`ellmer` chat)**
> uses the current interface but is marked **`# UNTESTED — run on a machine with Ollama`** — verifying it
> is part of the lab. The model (the **code** model `qwen2.5-coder` — see `_currency/reg_llm_tools.md`) is
> **validated to produce runnable code with catchable errors**; it is **not authoritative** — its slips are
> what you hunt for.

**Datasets.** Teaching data = **mtcars** (`cars.csv`, 32 cars, a 1974 snapshot). A2-pipeline rehearsal =
**`07192013Apps.csv`** (Apple App Store — a *historical snapshot collected July 2013*; a *different file* from your A2 group data, same method
by design). *(Load files with `_shared_library/snippets/setwd_load_data.md` — same on macOS/Windows. For
the AI step, Ollama must be running — see `M-1_ollama_setup_guide.md`.)*

---

## Part 0 — Setup
```r
library(tidyverse)
library(ellmer)                                  # chat interface (NOT mall — this is code help, not text labels)

cars <- read_csv("cars.csv")                     # mtcars: Model, mpg, cyl, disp, hp, wt, ...

# Connect to the local CODE model in CHAT mode, concise + R-only    # UNTESTED — run on a machine with Ollama
chat <- chat_ollama(model = MODEL,               # MODEL = the code model qwen2.5-coder → _currency/reg_llm_tools.md
  system_prompt = "You are an R tutor for beginners. Reply in English only. Reply with concise, runnable base-R code and a one-line explanation. No long essays.")
```

## Part A — HAND-FIRST: fit it yourself (your yardstick)

**A1. Simple regression — does weight predict fuel economy?**
```r
m1 <- lm(mpg ~ wt, data = cars)
summary(m1)
```
*Expected (real):* intercept ≈ **37.29**, slope on `wt` ≈ **−5.34** (highly significant, p ≈ 1e-10),
**R² ≈ 0.75**. Read it: each extra 1,000 lb costs ≈ 5.3 mpg. Write down the sign, the significance, and R²
— that's your yardstick.

**A2. Multiple regression — add horsepower and cylinders (a dummy set).**
```r
m2 <- lm(mpg ~ wt + hp + factor(cyl), data = cars)   # factor(cyl): 4 cyl is the baseline
summary(m2)
```
*Expected (real):* `wt` ≈ **−3.18** (sig), `cyl6` ≈ **−3.36** (sig at 5%), `cyl8` ≈ **−3.19** (NOT sig,
p ≈ 0.15), `hp` ≈ **−0.023** (NOT sig at 5%, p ≈ 0.06), **R² ≈ 0.86**. Note which predictors are *not*
significant — that matters in a minute. `factor(cyl)` makes **4-cylinder the baseline**; the `cyl6`/`cyl8`
coefficients are *relative to 4-cyl*.

**A3. The p-value — get the definition right.** [teaching beat]
- **Correct (plain language):** a p-value answers *"if there were really no effect, how often would I see a
  result at least this extreme just by chance?"* Small p → the data would be surprising in a no-effect
  world → evidence against "no effect."
- **What it is NOT:** it is **not** the probability the result is a mistake; **not** the probability the
  null is true; **not** the size of the effect.
- **Intuition (30-second demo):** imagine the predictor truly does nothing. We could still get *some* slope
  by luck. The p-value is "how often luck alone would beat what I got." p = 0.03 → only 3 times in 100
  *would chance alone produce a result this strong* — not "3% chance I made a mistake."
- **Verify the AI on this:**
  ```r
  chat$chat("In one sentence, explain what a p-value of 0.03 means.")   # UNTESTED — needs Ollama
  ```
  Read its answer and **critique it against the definition above.** Small models often say "there's a 3%
  chance the result is wrong/a mistake" — that's the classic error. Catch it.

## Part B — AI STEP: direct the model to build the same regression
```r
# Ask the AI to write + interpret the multiple regression you just fit by hand   # UNTESTED — needs Ollama
chat$chat("Using the data frame `cars` (the mtcars dataset), write R code to regress mpg on wt, hp, and
cylinders treated as categories, then interpret which predictors are significant.")
```

## Part C — VERIFY: check the AI against your hand-fit
Hold the AI's answer next to your `summary(m2)`. Work down this checklist:

| Check | What to look for |
|---|---|
| **Right specification?** | Did it use `wt`, `hp`, and `factor(cyl)` (not numeric `cyl`)? Did it quietly add or drop predictors? |
| **Coefficient signs/size** | Do the signs and rough magnitudes match yours? (`wt` negative, etc.) |
| **Significance** | Does it claim things are significant that your output says are **not** (e.g., `hp`, `cyl8`)? Watch for **fabricated/placeholder** p-values. |
| **Unnecessary terms** | Did it throw in extra predictors "to improve the model" that weren't asked for or justified? |
| **Hallucinated functions** | Any function that doesn't exist / wrong call (e.g., a made-up `regression()` or misused `predict()`)? |
| **Runs at all?** | Paste it in — does it actually execute, or just *look* like R? |

> *Validated tip:* the code model commonly slips on **(a) variable encoding** — factoring **continuous**
> variables, adding **unnecessary interactions**, or putting a numeric where a factor is needed — and
> **(b) overstating significance** (calling a non-significant predictor significant). Check those first —
> but the checklist above catches **whatever** it does, so verify every row.

Write one line: *where did the AI agree with your hand-fit, and where did it drift?*

## Part D — A2-pipeline rehearsal (the exact A2 method, different data)
*This is the pipeline your A2 uses — `Sales = -log(Rank)`, `log(x+1)`, category dummies + a baseline — on a
**separate** App-Store file. Master it here; apply it (on your own group data) in A2.*
```r
apps <- read_csv("07192013Apps.csv")
apps <- apps |>
  mutate(Sales = -log(Rank),
         Log_Rating_Num = log(Rating_Num + 1))           # +1 avoids log(0)  [A2 gate G2]

m3 <- lm(Sales ~ Price + Screenshots + Rating_Score + Log_Rating_Num +
                 Business + Finance + Health + Utilities, data = apps)   # Games = baseline  [A2 gate G4]
summary(m3)
```
*Expected (real, n = 1500):* `Log_Rating_Num` ≈ **+0.15** (very significant), `Screenshots` ≈ **+0.08**
(sig), the category dummies **Business/Finance/Health/Utilities** all **positive & significant** (so those
rank higher than the **Games** baseline), but **`Price` is NOT significant (p ≈ 0.17)** and `Rating_Score`
is NOT significant. **R² ≈ 0.14.** *(Then, optionally, have the AI reproduce this and verify the baseline
handling and which terms are significant.)*

## Part E — Verify #3: the error-hunt (rehearses the final-exam Q3)
Here's a regression an AI assistant might hand you for the cars data. **Find every problem**, using your
Part-A hand-fit as ground truth. *(Instructor-constructed to mimic common small-model slips — treat it as
"the AI's answer.")*
```r
model <- lm(mpg ~ wt + hp + cyl + disp + drat + qsec + gear + carb, data = cars)  # (1)
summary(model)
predict(model, mpg = 25)                                                          # (2)
# "wt has p < 0.001, which proves that heavier cars cause lower mpg."             # (3)
```
List what's wrong and why. *(Hints to look for: a kitchen-sink model vs. a hypothesis-driven one; `cyl`
numeric vs. `factor(cyl)`; a broken `predict()` call; and a causation claim from a regression.)*

## Part F — Business interpretation (turn it into a decision)
From your **verified** App-Store model: in 2–3 sentences, what should an app publisher act on? (Hint:
the data says the **number of ratings** and the **category** move rank, while **price** does not — so the
"just lower the price" instinct isn't supported here.) Back it with the coefficients you verified.

## Reflection (1–2 sentences)
Where did the AI get the regression wrong or overstate it, and how did your own hand-fit let you catch it?

---
*Companion: `M-2_regression_lab_SOLUTION.md`. Setup: `M-1_ollama_setup_guide.md`. Tools:
`_currency/reg_llm_tools.md`.*
