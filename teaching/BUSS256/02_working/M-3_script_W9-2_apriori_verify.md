# Spoken Script — W9-2: The AI nails the code and fumbles the one number that matters

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 2 of 2). Spoken companion to
`M-3_note_W9-2_apriori_verify.md`. Drafts only. Spoken register §5; locked playful tone; English. Live code =
validated lab code. AI step = code model (`_currency/assocrules_llm.md`); OS cues → `M-1_ollama_setup_guide.md`.
**Guard:** don't script the AI's exact words — "let's see," then verify by type.*

---

**[1] Open — call back the yardstick**
- "Last class you built a yardstick on six baskets: 2.0, 1.125, and that sneaky 0.5. Hold onto the 0.5. Today we go big — a thousand real shopping baskets — and we put an AI to work. And I promise you a plot twist: the AI is going to be *better* than you expect at one thing and *worse* than you expect at another. Let's find out which."

**[2] apriori at scale [click, run live]**
- "Six baskets you can count by hand. A thousand, you can't. So we let the **apriori** algorithm do the counting — same three measures, just at scale. You don't need its guts; you need three moves: **set your thresholds, sort by lift, read the top rules.**"
- [run live]:
  ```r
  library(arules)
  mba <- read.transactions("mba.csv", sep = ",")
  itemFrequencyPlot(mba, topN = 15)
  rules <- apriori(mba, parameter = list(support = 0.05, confidence = 0.25, minlen = 2))
  inspect(sort(rules, by = "lift")[1:8])
  ```
- "Quick note on that 0.05 — these baskets are *dense*, about 14 items each, so we set a higher support floor than a tiny dataset would need. Set it too high, you get **zero** rules; too low, you drown. [point at output] And look — the strongest rules are **bundles**, not single items. Top of the list: **paper towels and pasta, with eggs and ice cream — lift about 2.0.** Those four ride together about twice as often as chance. That's an actionable pattern."

**[3] CENTERPIECE — the plot twist [run live]**
- "Now the fun part. I'll ask the coding AI to do this whole thing. And honestly? Watch the code it writes."
- [run live — direct the AI to write the apriori pipeline]
- [read what it produced] "Huh. Look at that. The `apriori` call — correct. The sort by lift — correct. The inspect — correct. [pause] **Plot twist: the code is actually good.** And there's a reason — this is a *formulaic* job. One standard function, a couple of settings. Not a lot of room to mess up. Totally different from regression, where the AI had a hundred ways to go wrong. Fewer choices, fewer mistakes. So — does that mean we can trust it? [let them hesitate] ...We never just trust it. We *check.* But where? If the code's fine, where's the catch?"
- "The catch is in the **interpretation.** So let's make it interpret. [run live — ask it to interpret the top rules, *including* any rule with lift below 1; it skipped interpreting unless asked, so we ask]"
- [read its interpretation aloud — narrate whatever it actually says]
- "Now find the rule with lift below 1, and read what the AI said about it. [point] In our testing, it called a lift-below-1 rule something like *'low confidence — possible but less likely than the others.'* [turn to the room] Is that right? You computed a lift of 0.5 by hand last class. Does 0.5 mean 'weak but still kinda positive'?"
- [expect: "No — negative! They repel!"] "**Exactly.** Below 1 means they **repel** — the *opposite* of a recommendation. The AI nailed the code, and then fumbled the one number that actually drives the decision. And you caught it — not because you're a genius, but because **you computed that 0.5 yourself.** That's the whole course in one moment."
- [stochastic pivot — if the AI happens to read it right] "Oh — this run it actually got it. Nice. But notice: you only *know* it got it right because **you** hold the 0.5. Run it again, it might blow it. Either way, you're the judge. The yardstick is what makes you the judge."

**[4] Verify by type — not by memorizing the gotcha [click]**
- "So here's how we check *any* AI interpretation, because it's random and won't always trip the same way. Lead with the interpretation:"
  - "Did it read **lift below 1 as negative** — or call it 'weak'? Number one catch."
  - "Did it judge strength by **lift**, or lean on **confidence**? Confidence alone lies."
  - "Did it swap **support and confidence**?"
- "Then the easy code checks — right thresholds, no made-up functions — but honestly, the code's usually fine. **It's the meaning you're guarding.** Pick one rule, recompute its three numbers by hand, and hold the AI's *words* to your *numbers.*"

**[5] From verified rules to a decision [click]**
- "Checking's half the job. The other half: turn it into something a manager can do. From the rules we *verified* — paper towels, pasta, eggs, ice cream, lift 2.0 — the move is obvious: shelve them together, bundle them, throw up a 'customers also bought.' Name the bundle, **cite the lift**, done."
- "And the flip side — that's the discipline — a **lift-below-1** rule means *keep them apart.* If you'd trusted the AI's 'eh, weak but possible,' you might've put repelling items side by side. Reading lift correctly is the difference between good advice and embarrassing advice."

**[6] The course thesis [click]**
- "Step back. The AI wrote that code in two seconds — did the *labor*, did it well. But the decision that mattered — is this rule real, should the store act on it — that was **you**, holding a number you computed yourself. Every module, same lesson: **the machine executes; you direct, you verify, you decide.** That's the skill that outlasts whatever AI is trendy next year."

**[7] Beginner reactions**
- [if "if the AI writes the code fine, why learn it?"] → "Because the code was never the hard part — *reading the result* is. The AI proved it: perfect code, wrong conclusion. The judgment is the job, and that's exactly what they can't automate away from you."
- [if "what if the AI's interpretation sounds totally reasonable?"] → "It always sounds reasonable — that's the trap. 'Sounds reasonable' and 'is correct' are different. Your hand-computed lift is the tiebreaker. Always have the lift."
- [if "this felt easier than regression"] → "It is — fewer moving parts. But notice the lesson got *sharper*, not softer: the tool can be flawless on the mechanics and still hand you the wrong decision. That's the scariest kind of wrong, and now you can catch it."

**[8] Close + recap**
- "Recap: apriori at scale — **set thresholds, sort by lift, read the bundles.** The AI writes the code great and **fumbles the interpretation** — especially reading a **lift below 1** as 'weak' instead of *negative*. You catch it with the 0.5 you computed by hand. Recommend high-lift, sensible rules; keep the repellers apart."
- "That's association rules. You can find what sells together, read the one number that matters, and catch an AI getting it wrong with a confident smile. Not bad for two classes. Go be the person who checks. Nicely done, all of you."
