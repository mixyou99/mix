# Spoken Script — W10-1: The p-value (and catching even the AI getting it wrong)

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 1 of 4). Spoken companion to
`M-2_note_W10-1_stats_pvalue.md`. Drafts only (Production Policy). Spoken register §5; locked playful tone;
English delivery. Live AI demo uses the **code model** (see `_currency/reg_llm_tools.md`); OS/setup →
`M-1_ollama_setup_guide.md`. **Model-dependence guard:** never promise what the AI will say — "let's see,"
then check it.*

> Numbered beats match the slides. `[brackets]` = stage directions for you, not spoken.

---

**[1] Open — the hook**
- "Today's whole class is about one number. One. And it's the number that more smart, educated, well-paid people get *wrong* than any other in all of statistics. By the end of the hour you'll get it right — and you'll watch an AI get it wrong. Let's go."

**[2] The boring default [click]**
- "First, the setup. Whenever we test an idea, we start from the most boring possible assumption: **nothing is going on.** No effect, no difference, nada. We call that the **null hypothesis.** The opposite — 'actually, something *is* going on' — is the **alternative.**"
- "And here's the mindset: we *assume* nothing's going on, and then we ask the data, 'okay, give me a reason to stop believing that.' Like a courtroom — innocent until the evidence is strong enough."

**[3] Spot the error [click — show the three statements]**
- "Now, the p-value. Here are three definitions of it. They're pulled from actual slides. Read them. [pause — let them read] They all sound... reasonable, right? Sciencey. Fine."
- [read them aloud]: "'The probability the result happened by random chance.' 'The probability the null hypothesis is true.' 'p of 0.03 means a 3% chance the result is a mistake.'"
- [pause — let it sit] "Here's the thing. **All three are wrong.** Every one. Including ones your textbook and your favorite chatbot will happily tell you. So let's fix it for good."

**[4] The reveal — the correct definition [click]**
- "Here's what a p-value actually is. Say it in your head as a question: **'If there were truly no effect, how often would I get a result this extreme, just by luck?'** That's it."
- "Small p-value? Your result would be *weird* in a world where nothing's going on. Weird-in-a-no-effect-world = evidence that something *is* going on."
- "And here's what it is **NOT** — write these down: it's **not** the chance you made a mistake. It's **not** the chance the null is true. It's **not** how *big* the effect is."
- "Quick gut-check. Imagine weight had truly *zero* effect on a car's gas mileage. Could you still see some slope just by luck of which cars you sampled? Sure. The p-value is: how often would luck *alone* fake a result this strong? If that's 3 in 100, p is 0.03. That is NOT '3% chance I goofed.' It's '3% chance *luck did this*.'"

**[5] The threshold and the stars [click]**
- "We draw a line in advance — usually 5% — called **alpha.** If the p-value is under it, we call it 'statistically significant,' and R prints little stars. One star, 5%. Three stars, point-one percent — basically rock solid."

**[6] Make it real [click — two real numbers]**
- "Next class we'll fit a real model, and you'll see weight predicting mileage with a p-value of like... 0.0000000001. [let them react] Yeah. In a no-effect world we'd basically *never* see that by luck — so weight matters. Three stars."
- "But you'll also see an 8-cylinder indicator come in at p = 0.15. Bigger than 0.05. So — significant or not?" [expect: "not!"] "Not significant. A result like that happens 15 times in 100 by luck — not surprising enough. Same output, opposite call. Reading that difference *is* the skill."

**[7] CENTERPIECE — let's catch the AI [run live]**
- "Okay. We just said this is the most-botched number in stats. Let's test that on the little coding AI on your laptop. [make sure Ollama's running — setup guide] I'm going to ask it the simplest possible question."
- [run live]: `chat$chat("In one sentence, explain what a p-value of 0.03 means.")`
- [let the answer appear] "Let's read what it gave us. [read it aloud] Now — hold it up against our definition. Did it say something like 'a 3% chance the result is wrong / a mistake / due to error'?"
- [if YES — the common case] "There it is. The AI just handed us the *exact* misconception we spent twenty minutes killing. Confident. Fluent. Wrong. **Even the AI botches the most misunderstood number in statistics — and that's the whole reason you have to be able to check it.**"
- [stochastic pivot — if it happens to get it right] "Huh — this time it actually nailed it. Good for it. But notice *how you know that*: you only know it's right because **you** hold the correct definition. Run it again, it might blow it. You're the judge either way."

**[8] Beginner reactions**
- [if "this seems like a tiny technicality"] → "It's not. Companies make million-dollar calls off 'is this significant?' Mix up 'significant' with 'a big deal,' or 'p' with 'chance I'm wrong,' and you green-light the wrong decision. This is the technicality that pays your salary."
- [if "so I can't trust p-values at all?"] → "You can — when you read them right. Distrust the *misreadings*, not the number."
- [if "why were our own slides wrong?"] → "Because *everyone* gets this wrong — that's the point. We're fixing ours, and now you can fix everyone else's."

**[9] Close + hook**
- "Recap: a p-value is 'how often would luck alone fake a result this strong.' Not a mistake-chance, not a null-is-true chance, not an effect size. Under alpha, we call it significant. And you just watched even an AI fumble it — so you check, always."
- "Next class we stop talking about single numbers and fit our first real model — by hand, ourselves. Because to catch the AI, first you've got to be able to do it yourself. See you then."
