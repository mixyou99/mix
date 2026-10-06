# Spoken Script — W11-2: Putting the AI's code on trial

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 4 of 4). Spoken companion to
`M-2_note_W11-2_diagnostics_recommend.md`. Drafts only. Spoken register §5; locked playful tone; English.
Live code = validated lab code. AI step = code model (`_currency/reg_llm_tools.md`); OS cues →
`M-1_ollama_setup_guide.md`. Guard: don't script the AI's exact error — "let's see," then audit by type.*

---

**[1] Open — the hook**
- "Today you become the person every workplace is desperate for: the one who can take an AI's beautiful, confident analysis and say, 'hold on — this is wrong, and here's where.' We're putting AI regression code on trial. You're the judge. Your hand-fit is the evidence."

**[2] First, a quick sanity check — residuals [click]**
- "Before the trial, one quick tool. A **residual** is just *actual minus predicted* — how far the line missed one car. If a car really gets 24 mpg and we predicted 26, the residual is −2."
- "You don't need fancy tests in this course. You need one glance: are the misses **small and balanced around zero**? R prints a little residual summary right at the top of `summary()`. If the model's always too high or always too low, something's off. Glance, nod, move on."

**[3] The trial begins — you already hold the truth [click]**
- "Here's the setup that makes this work. You spent last class fitting the cars model by hand. So you *know* something the AI doesn't know you know: **horsepower and the 8-cylinder term are NOT significant.** Hold that. It's your trap."

**[4] CENTERPIECE — direct the AI, then audit live [run live]**
- "I'll ask the coding AI to write the regression. I have no idea what it'll produce — it's stochastic — and that's fine, because we audit *whatever* it gives us the same way. [run live — Ollama running, setup guide]"
- [run the prompt; the model produces runnable-but-flawed code — narrate what's actually on screen]
- "Okay, let's read what it did. First check — **the encoding.** [point] Look at this — did it wrap *continuous* variables in `factor()`? Weight, horsepower — those are real numbers, not categories. Factoring them is just wrong. And did it staple on a bunch of interactions with these little stars (`*`) that nobody asked for? [expect students to spot it] Yep. Over-complicated and mis-encoded."
- "Second check — **the claims.** [point at its interpretation] It says here... 'all the predictors are significant.' [pause — turn to the room] Everybody look at YOUR hand-fit from last class. What did *your* output say about horsepower? And cyl8?"
- [expect: "not significant!"] "**Not significant.** Two of them. So the AI just told us a flat-out false thing, in a confident voice, in clean-looking code. And you caught it — not because you're suspicious, but because **you did it yourself first.** That right there is the exam. That's the job."
- [stochastic note for you] "[If this run's errors differ — maybe it nails significance but over-factors, or invents an extra term — don't force it. Walk whatever it actually did through the same three checks: encoding, significance, unrequested terms. The lesson is the method, not a specific gotcha.]"

**[5] From a checked model to a real decision [click]**
- "Auditing's half the job. The other half: turn a *verified* model into something a boss can act on. Take our apps model — the one we actually trust. What did it really say? **Number of ratings and category drive an app's rank. Price doesn't.**"
- "So the recommendation writes itself: 'Pour effort into getting reviews and picking the right category. Cutting price shows no effect on rank in this data.' Notice three things: it names the *real* driver, it *refuses* the popular-but-unsupported 'just cut the price,' and it admits a limit — our R-squared was only 0.14, so there's plenty we didn't capture. Saying that limit out loud? That's a pro move, not a weakness."

**[6] The whole course, in one line [click — thesis slide]**
- "Step back. The AI wrote that regression in two seconds. It did the *labor*. But every decision that mattered — was the code right, were the claims true, what do we actually recommend — that was **you.** And you could only make those calls because you held a yardstick you built yourself."
- "That's been the whole course, every module: **the machine executes; you direct, you verify, you decide.** Association rules, regression, doesn't matter — that's the skill. And it's the one that'll still be worth something no matter what model is hot next year."

**[7] Beginner reactions**
- [if "the AI's code looked totally fine to me"] → "Exactly the danger. It *always* looks fine — that's what it's good at. 'Looks like R' and 'is correct R' are different things, and only your own fit tells them apart."
- [if "what if I can't tell whether it's wrong?"] → "Then you fit the simple version by hand and compare. You don't need to out-smart the AI in your head — you need a yardstick on paper. Always have the yardstick."
- [if "this feels like a lot of checking"] → "It's a checklist you'll run in 60 seconds once it's a habit. Sixty seconds to not ship a wrong analysis to your boss? Cheapest insurance there is."

**[8] Close + recap**
- "Recap: glance at residuals; then **put AI code on trial** — encoding, significance, unrequested terms, all against your own fit. Build recommendations only on what you *verified*, name the limits, and never say 'causes.'"
- "That's regression. You can fit a model, read it honestly, catch an AI lying to you with a straight face, and turn it into a decision. That's not bad for a few weeks. Go be the person in the room who actually checks. Nicely done — all of you."
