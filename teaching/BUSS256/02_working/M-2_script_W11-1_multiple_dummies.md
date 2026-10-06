# Spoken Script — W11-1: Many predictors, dummies, and the honest "no"

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 3 of 4). Spoken companion to
`M-2_note_W11-1_multiple_dummies.md`. Drafts only. Spoken register §5; locked playful tone; English. Live
code = validated lab code. AI step = code model (`_currency/reg_llm_tools.md`); OS cues →
`M-1_ollama_setup_guide.md`. Guard: don't predict the AI's output — verify by type.*

---

**[1] Open — the hook**
- "Real life doesn't have one cause. Your grades aren't just sleep — they're sleep *and* effort *and* the class being at 9am. Today we put several predictors in one model at once. And we hit the exact machinery your group assignment runs on — so this one's worth your full attention. Also: the data's going to tell us 'no' about something, and learning to *report* that 'no' is half of being a real analyst."

**[2] Holding the others constant [click]**
- "Here's the magic phrase of multiple regression: **'holding the others constant.'** When I throw weight, horsepower, and cylinders into one model, the weight coefficient now means 'the effect of weight *after* accounting for horsepower and cylinders.' It's a fairer, sharper number than weight alone."

**[3] Categories need a translator — dummies and a baseline [click]**
- "Quick puzzle: cylinders are 4, 6, or 8. Can I just toss `cyl` in as a number? [pause] No — because that pretends '8 is twice as much cylinder-ness as 4,' which is nonsense. It's a *category*, not a quantity."
- "So we make **dummies**: we pick one level as the **baseline** — say, 4-cylinder — and every other coefficient reads *relative to that baseline*. In R, `factor(cyl)` does it automatically. This little move — dummies and a baseline — is the **exact thing your group assignment is graded on.** So nail it here."

**[4] Fit it by hand [run live]**
- [run live]: `m2 <- lm(mpg ~ wt + hp + factor(cyl), data = cars); summary(m2)`
- "Read it. Weight, still strongly negative and significant. `cyl6` is about −3.4 and significant — meaning a 6-cylinder gets ~3.4 fewer mpg **than a 4-cylinder**, our baseline. But look here — **`cyl8` and `hp` are NOT significant.** [point] cyl8's p-value is 0.15, horsepower's is 0.06. Above 0.05. Not significant."
- "And that's a real lesson: **not every variable you add earns its keep.** A good analyst says 'horsepower didn't pull its weight here,' instead of pretending it did. Keep those two non-significant ones in your back pocket — we're going to need them next class."

**[5] The A2 pipeline — and a transform trick [click, run live]**
- "Now the assignment's actual setup, on a separate app dataset so you practice without doing your A2 for you. Two transform tricks first. One: when a variable is super skewed — like number of ratings, where a few apps have millions — we take a **log** to tame it, and we write `log(x + 1)` so a zero doesn't explode. Two: we turn sales **rank** into a score with `−log(Rank)`, so that a *bigger* number means *better* (rank 1 is the best, remember)."
- [run live the apps pipeline: Sales = -log(Rank), Log_Rating_Num = log(Rating_Num+1), the lm with category dummies, Games = baseline]
- "Categories here use **Games as the baseline**, and the others read relative to it."

**[6] The honest "no" [let it land]**
- "Now look at **Price.** The intuition screams 'lower price, more sales,' right? Everybody believes that. What does the data say? [point at Price's p-value ≈ 0.17] **Not significant.** In this data, price does *not* move an app's rank."
- [pause] "This is one of the most important moments in the course. The data contradicted the obvious story. A weak analyst fudges it — 'price *tends* to maybe sort of matter.' A real one writes: **'We hypothesized price drives sales; the data does not support it.'** That honesty? That's the whole job. And your A2 rubric rewards it."

**[7] Let the AI build it — verify by type [run live]**
- "Let's have the coding AI build a multiple model with the dummies. I don't know what it'll do — so we check by **type**, not by guessing its mistake. [run live — 'let's see what it does']"
- [read its answer] "Audit it: Did it **encode** right — `factor()` on the *category*, but did it accidentally factor a *continuous* variable like price, or bolt on interactions nobody asked for? Is it reading the **baseline** right? Does it call something **significant** that your output says isn't — like Price? Whatever it did, your hand-fit catches it."

**[8] Beginner reactions**
- [if "this dummy/baseline stuff is confusing"] → "Totally normal. One sentence to hold onto: every dummy coefficient means 'compared to the baseline.' cyl6 = −3.4 means '3.4 worse *than a 4-cylinder*.' That's the whole idea."
- [if "isn't reporting a non-result like... failing?"] → "Opposite. Finding that a popular belief is false *is* a finding. Half of good analytics is telling people the thing they didn't want to hear, with the evidence to back it."

**[9] Close + A2 tie**
- "Recap: multiple regression = effects 'holding the others constant'; categories become **dummies vs. a baseline**; logs tame skew; and **price didn't move sales — and we say so.** This exact pipeline — `−log(Rank)`, `log(x+1)`, dummies with a baseline — *is* your group assignment. You just rehearsed it."
- "Next class: we check the model's misses, and then the big one — we put the AI's regression code on trial and hunt its errors, live. Bring the two non-significant predictors from today. They're the trap."
