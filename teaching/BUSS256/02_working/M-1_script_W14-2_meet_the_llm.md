# Spoken Script — W14-2: Meet the LLM (the 48% moment)

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 2 of 4). Spoken companion to
`M-1_note_W14-2_meet_the_llm.md`. Drafts only. Spoken register §5; beginner-casual. This is the
centerpiece session — the live "aha." Live-demo code = validated code from the note/lab. Real run:
classical–LLM agreement was **48% (12 of 25)** — but treat it as "our test run's number," not eternal
(see `_currency/tm_llm_tools.md`); use your own run's figure if you re-run.*

---

**[1] Open — call back yesterday**
- "Last class you built a ruler and you wrote one sentence: what these reviews are about. Hold onto that. Today the AI finally shows up — and we put it on trial."
- "Here's where we're headed: by the end of today you'll have seen, with your own eyes, that trusting the AI blindly would get you wrong answers about half the time. That's not me being dramatic. That's our actual result. Let's earn it."

**[2] First, the simple way to measure feelings [click]**
- "We want sentiment — is a review happy or unhappy? The old, transparent way is a *word list*. Somebody sat down and labeled thousands of words: 'clean' positive, 'comfortable' positive, 'dirty' negative, 'broken' negative. To score a review, we just count: more positive words than negative? Positive."
- "It's beautifully honest — you can audit every point. [run the classical sentiment code from the note on the 25 reviews] But it has one big, obvious weakness. Anyone guess what a word-counter can't understand?"
- [pause; expect: "sarcasm", "context"]
- "Exactly. Watch: 'The room was *not* clean.' What word does the counter see?"
- [expect: "clean!"] → "Clean! It counts that as positive. The word 'not' flips the whole meaning and the counter walks right past it. Hold that thought."

**[3] Meet the model [click]**
- "Now the AI. It's a small language model running on *your* laptop — no internet, no account, private. We don't type into a chat box; we add it to our code as one more command. `llm_sentiment` — it reads each review and labels it positive, negative, or neutral. Same table, one new column. [point to setup guide for 'is Ollama running' — Mac menu bar, Windows tray; don't re-teach install]"
- "One thing I need you to believe: this AI is **not** a better calculator. It's a *reader*. Usually a smart one. Sometimes confidently wrong. That's the whole reason we kept the ruler."

**[4] PREDICT first — lock it in [pause — make everyone write]**
- "Before we run it, everybody writes a number. The word-counter and the AI both label these 25 reviews. **Out of 25, how many times do you think they'll agree?** Write your guess down. No phones, just a number."
- [give them 20 seconds; ask 3–4 people out loud]
- [expect high guesses: "20", "22", "they're both reading the same words"] → "Most of you said high — like 20-plus. Makes sense. Same reviews, two tools, should mostly agree, right? Remember your number."

**[5] The reveal [run the comparison code live] [let it land]**
- [run the agree/compare step; bring up the agreement number]
- "Here it is. In our test run... they agreed on **12 of the 25.** That's **48 percent.**"
- [pause — let the groan happen]
- "Less than half. The transparent method and the AI *disagree* on 13 out of 25 reviews. So if you'd just trusted either one alone, you'd be wrong about half the time on these. *That* is why this module exists. Not because AI is bad — because un-checked AI is a guess with a confident voice."
- [stage note: if you re-ran and got a different number, use yours — the lesson is 'low and surprising,' not the exact figure.]

**[6] So who's right? Let's read the fights [click to the disagreement reviews]**
- "A disagreement doesn't tell us who's right — it tells us where to *look*. Let's read a few real ones and you decide."
- **ID 1:** "'They could **not** recommend a restaurant... very **limited** choices.' The word-counter saw 'nice' somewhere and said positive. The AI said negative. [ask the room: which is right?]"
  - [expect: "negative"] → "Negative. It's a complaint. The counter got fooled by one nice word; the AI read the 'not' and the 'limited'. Point to the AI."
- **ID 20:** "'The room was **clean but tired**.' Counter sees 'clean' — positive. AI says negative. Who's right?"
  - [let them argue] → "This one's genuinely mixed, but 'clean *but* tired' — the 'but' is doing the work. The guest is unhappy. The counter literally cannot see the word 'but' change the meaning."
- **ID 10:** "'Our rooms were **not ready**, promised at a later time.' Counter found no feeling words at all — called it a tie. AI said negative. Right?"
  - [expect: "negative, obviously"] → "Obviously negative. But there's no dictionary 'bad word' in it — the unhappiness is in the *situation*, not the vocabulary. The AI gets it; the word-list is blind."

**[7] The honest twist — the AI isn't always the hero [click]**
- "Now, don't fall in love with the AI either. Look here — [point to a borderline case, e.g. ID 3 'quiet, clean... service was adequate']. The counter said positive; the AI said neutral. Honestly? That one's a coin flip. 'Adequate' is lukewarm. Reasonable people disagree."
- "So the rule isn't 'the AI wins.' The rule is: **when they disagree, you go read the review and decide.** You trust neither tool blindly. You're the judge; they're just two opinions."

**[8] Name the reason [quick group activity]**
- "For each disagreement there's a *reason* the counter failed. I'll give you the four: negation ('not'), a 'but'/'if' that flips it, a feeling with no dictionary word, or sarcasm. [put 3 reviews on the board] In pairs, label which reason each one is. Two minutes."
- [circulate; then take answers — tie each back to negation / qualifier / implicit / sarcasm]

**[9] Beginner reactions — handle them**
- [if someone says "so the AI is unreliable, why use it?"] → "Good pushback. It's not unreliable — it's *better* on exactly the hard cases the counter fails. But only once you've checked it. Unverified, it's a confident guess. Verified, it's a powerful tool."
- [if someone says "my agreement number is different from yours"] → "Perfect — it's a probabilistic model, your number will wobble. The lesson isn't '48'. The lesson is 'low and surprising,' and 'go read the disagreements.'"
- [if someone says "this is depressing, nothing works"] → "Opposite! You just learned to catch an AI's mistakes with a tool you fully understand. That skill is the whole point — and it's exactly what makes you employable in a room full of people who just trust the chatbot."

**[10] Close + recap**
- "So: the word-counter is honest but blind to context. The AI reads meaning but is sometimes wrong. They agreed less than half the time on our reviews. And the move that matters — the one I want burned in — is: **check the AI against the ruler, then go read where they disagree.**"
- "Next class we go one level up: not just happy-or-sad, but *what* are they complaining about — and we'll catch the AI making some genuinely funny mistakes. Bring your skepticism. Well done today."
