# Lecture Note — W10-1: Statistics foundation & the p-value

*Change log: Jun 18, 2026 — created (Stage 2-B, note 1 of 4). Lecture-note DRAFT for professor review.
Spoken script comes in part 2. Markdown only (Production Policy).*

**Source-file map (production):** corrects + modernizes `Seminar 8-9 LRM/Seminars 8-9_Basics in
Statistics.pdf/.pptx` (the p-value slides ~34–45). Pairs with `M-2_regression_lab.md` Part A3. The
AI-critique activity uses the local **code** model via `ellmer` chat (see `_currency/reg_llm_tools.md`);
OS steps → `M-1_ollama_setup_guide.md`. **Model note:** AI behavior is described as a *pattern to verify*,
never a fixed output.

*(Note format follows STYLE_STANDARDS §6. Plain language, one idea per sentence; terms defined on first use.)*

---

## Learning objectives
By the end of this session you can:
1. State a null and alternative hypothesis for a real question. → **data literacy**.
2. Say in plain words **what a p-value is — and the three things it is NOT**. → **data literacy** + **verification**.
3. Read a p-value and the significance stars in regression output. → **algorithm literacy**.
4. Catch the most common p-value misinterpretation — even when an AI makes it. → **verification**.

## The big idea (study-from explanation)
Before we fit any model, we need one idea straight, because everything later leans on it: the **p-value**. It's the single most misunderstood number in statistics — so if you get it right today, you're already ahead of most people who use it.

Start with the setup. We test a **hypothesis** — a prediction we check with data. We always start from the boring default, the **null hypothesis (H₀): there is no effect, no difference, nothing going on.** The **alternative (H₁)** says there *is* something. We assume "nothing going on" is true, then ask: does the data give us enough reason to abandon that assumption?

The p-value answers that question. Here is the correct, plain-language definition — learn this wording:

> **A p-value answers: "if there were truly no effect, how often would I get a result at least as extreme as mine, just by chance?"**

A small p-value means your result would be **surprising in a world where nothing is going on** — so it's evidence *against* "nothing is going on." That's it.

Now the part that trips everyone up — **what a p-value is NOT:**
- It is **not** the probability that your result is a mistake.
- It is **not** the probability that the null hypothesis is true.
- It is **not** the size or importance of the effect.

A 30-second intuition: imagine weight truly had *no* relationship with fuel economy. Even then, by pure luck, a sample could show some slope. The p-value is "how often luck *alone* would produce a result this strong." If p = 0.03, then only about 3 times in 100 *would chance alone beat what we saw* — **not** "a 3% chance we made a mistake."

Finally, the **significance level (α)** is the line you draw *before* testing — the risk you'll accept of rejecting H₀ when it was actually true. Common values: 0.05 (5%), 0.01 (1%), 0.001 (0.1%). If p < α, we say the result is "statistically significant," and software marks it with stars: `*` (5%), `**` (1%), `***` (0.1%).

## Worked example (real numbers you'll see next session)
When we fit fuel economy on car weight in mtcars, the slope on weight has a p-value of about **0.00000000013** — astronomically small. Translation: in a no-effect world we'd essentially *never* see a relationship this strong by luck, so weight clearly matters. Stars: `***`.

Contrast that with a predictor we'll meet soon — the 8-cylinder indicator — which comes out at **p = 0.15**. That's *bigger* than 0.05, so it is **not** statistically significant: in a no-effect world, a result like this would happen about 15 times in 100 by chance, which isn't surprising enough to act on. Same output, opposite conclusion — and reading that difference correctly is the whole skill.

## When / how to use it
- Use the p-value to decide whether a relationship is **distinguishable from chance**, after you've set α.
- Pair it with the **effect size** (the coefficient): a tiny p-value tells you an effect is *real*, not that it's *big*. Always report both.

## Common mistakes / how to verify
Our own course slides (the version we're fixing) contained the three classic errors — use them as a "spot the mistake" drill:
- ❌ "the probability that the result could have happened by random chance" — *incomplete and misleading.*
- ❌ "the probability that H₀ is TRUE" — *wrong; the p-value says nothing about the probability the null is true.*
- ❌ "p = 0.03 → only a 3% chance the result is due to mistakes" — *wrong; this is the famous misinterpretation.*

**Verify the AI on this (in-class activity):** ask the local model — *"In one sentence, explain what a p-value of 0.03 means."* Then judge its answer against the correct definition above. AI assistants frequently give the "3% chance it's a mistake" answer. Your job isn't to trust it — it's to **grade it**. (Set-up: `M-1_ollama_setup_guide.md`; the code model is in `_currency/reg_llm_tools.md`.)

## Key takeaways
- p-value = *"in a no-effect world, how often would chance alone give a result this extreme?"*
- It is **not** the chance you're wrong, **not** the chance the null is true, **not** the effect size.
- p < α → "statistically significant" (stars); p above α → not significant (e.g., our p = 0.15 case).
- The definition is so often botched that **even an AI gets it wrong** — which is exactly why you learn to check it.
