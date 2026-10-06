# Spoken Script — W10-2: Your first regression is your yardstick

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 2 of 4). Spoken companion to
`M-2_note_W10-2_simple_ols.md`. Drafts only. Spoken register §5; locked playful tone; English. Live code =
the validated lab code. AI step = code model (`_currency/reg_llm_tools.md`); OS cues →
`M-1_ollama_setup_guide.md`. Guard: don't predict the AI's answer — "let's see," then verify by type.*

---

**[1] Open — call back**
- "Last class: the p-value, and we caught the AI fumbling it. Today we fit our first actual model — and here's the rule for the whole module, so tattoo it on your brain: **you do it by hand first. Then you let the AI try. Then you check the AI against yourself.** Not the other way around. Your hand-fit is the ruler. Let's build the ruler."

**[2] What regression even is [click]**
- "Regression sounds scary. It's a line through a cloud of dots. That's it. You remember `y = a + b·x` from school? The **intercept** is where the line starts; the **slope** is how steep it is — how much `y` moves when `x` goes up by one."
- "'Least squares' just means: of all the lines we *could* draw, pick the one that's closest to all the dots at once. R finds it for you. Your job isn't the math — it's *reading the answer*."

**[3] Fit it — by hand [run live]**
- "Real question: does a heavier car burn more gas? Let's ask the data. We load the cars file — same 'where's my file' trick from setup, works the same on Mac and Windows — and we fit one line."
- [run live]:
  ```r
  cars <- read_csv("cars.csv")
  m1 <- lm(mpg ~ wt, data = cars)
  summary(m1)
  ```
- [point at the output] "Three things to read. The **slope on weight: about −5.3.** Negative — heavier means fewer miles per gallon. Specifically, every extra 1,000 pounds costs you about 5.3 mpg. The **stars** — three of them, so rock-solid significant. And **R-squared, 0.75** — this one line explains about 75% of why these cars differ in mileage. That's a *lot* for one variable."
- "Write those down — minus 5.3, significant, R-squared 0.75. **That's your yardstick.** Everything we do next, you measure against this."

**[4] Now let the AI try [run live]**
- "Here's the fun part. I'll ask the little coding AI to do the exact same job. And I genuinely don't know what it'll give us — it's a bit random — so we're not going to *trust* it. We're going to *grade* it. [Ollama running — setup guide]"
- [run live]:
  ```r
  chat$chat("Using the data frame cars (mtcars), write R to regress mpg on wt and say whether wt is significant.")  # let's see what it does
  ```
- [read its answer] "Okay, whatever it just handed us — we run the same four checks every time:"
  - "Did it use the **right variable** — just `wt`, or did it sneak in extras?"
  - "Does its **slope** match yours — around −5.3?"
  - "Does it call the **significance** the same way you saw?"
  - "And the dumbest, most important one: **does it actually run**, or does it just *look* like R?"
- "If your ruler says −5.3, significant, R² 0.75, and the AI says something else — **you win.** Until it can show you why."

**[5] Beginner reactions**
- [if "why fit it myself if the AI can?"] → "Because how would you *know* the AI's right? You'd be trusting a confident stranger with your analysis. The hand-fit is what turns 'I hope this is right' into 'I know it is.'"
- [if "the intercept says 37 mpg at zero weight — that's impossible"] → "Totally — there's no zero-weight car. The intercept is just where the line starts on the page, not a real prediction. Don't over-read it."
- [if "my R² is high but something's not significant / vice versa"] → "Those are two different questions — 'how much does the model explain' versus 'is this one predictor real.' Read both; don't let one answer the other."

**[6] Close + hook**
- "Recap: regression is the best line through the dots; read the **slope, the stars, the R-squared.** Heavier cars, worse mileage, −5.3, rock solid. And you built a yardstick the AI now has to measure up to."
- "Next class: real life has more than one cause. We add several predictors at once — and we meet the exact setup your group assignment runs on. Bring today's numbers; they're about to get company."
