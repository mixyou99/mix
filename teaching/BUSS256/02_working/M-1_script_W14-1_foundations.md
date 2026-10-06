# Spoken Script — W14-1: Text Mining Foundations

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 1 of 4). Spoken companion to
`M-1_note_W14-1_foundations.md`. Drafts only (Production Policy). Spoken register per STYLE_STANDARDS §5;
beginner-casual per professor. Live-demo code = the validated code in the note/lab (not rewritten).
OS/setup steps → `M-1_ollama_setup_guide.md` + `_shared_library/snippets/setwd_load_data.md`. No LLM today.*

> **How to read this:** numbered beats match the slide flow. `[brackets]` are stage directions for you —
> not spoken. Bullet lines are roughly what you say. Pause and check-in cues are built in.

---

**[1] Open — the hook**
- "Quick question before we start. Imagine you buy a fancy smart thermostat. It says the room is 22 degrees. Do you just believe it? Or, the first few times, do you glance at a normal thermometer to check it's telling the truth?"
- [pause — a few will say "check it"]
- "Right. You check it against something simple you already trust. For the next two weeks that's exactly what we're doing — but with text. Soon we'll let an AI read thousands of customer reviews for us. Today we build the simple, honest tool we'll use to check whether the AI is telling the truth."

**[2] The big picture [click to overview slide]**
- "Here's the plan. We've got hundreds of real hotel reviews. By next class, an AI on your own laptop will read them and tell us how guests feel. But — and this is the whole course in one sentence — you can only trust a tool whose answer you can check. So today, no AI. Today we learn to read the reviews ourselves, the simple way. That simple way is our ruler."
- "And good news if you've never coded: this is counting words. That's it. If you can count, you can do this."

**[3] Computers can't read a paragraph [click] [run this code live]**
- "A computer can't just 'read' a sentence the way you do. We have to hand it the words one at a time. That's called *tokenization* — fancy word, simple idea: chop the text into individual words."
- [run the `unnest_tokens` step from the note; show the before/after]
- "See that? On the left, full reviews. On the right, one word per row. We just turned writing into a table we can count. To load the file, we use the same little 'where is my file' snippet from your setup — same on Mac and Windows. [point to setup guide / load snippet; don't re-teach install]"

**[4] Throw out the boring words [click]**
- "Now, some words are everywhere and tell us nothing — 'the', 'and', 'was'. We call those *stop words*, and we just remove them. [run the `anti_join(stop_words)` line]"
- [expect a student to ask "why remove them?" → respond:] "Because if we don't, the top of every list is just 'the, and, was' — true, but useless. We want the words that actually mean something."

**[5] What are these reviews about? [run the frequency code live] [pause — let them predict]**
- "Okay. Before I press enter — guess. These are hotel-room reviews. What words do you think show up most? Shout a few out."
- [expect: "clean", "comfortable", "bed", "small" — write them on the board]
- "Let's see." [run `count(word, sort=TRUE)`]
- "Top of the list: *room, clean, small, bathroom, bed, comfortable.* So just by counting, with no AI at all, we already know what guests talk about: the room itself — how clean it is, and how big it is. You called some of these. Nice."

**[6] The catch: popular isn't the same as useful [click]**
- "But there's a trap. Look — 'room' is number one. Of course it is; it's a hotel-room review, every single one says 'room'. That's popular, but it's not telling us anything *special*. It's like noticing every pizza review mentions 'pizza'. Thanks, very helpful."
- "So we want a smarter measure — one that rewards a word for being important *in a review* but not just common *everywhere*. That measure has an ugly name, TF-IDF, but the idea is simple: **'a word that's frequent here, but not everywhere.'** Say it with me — frequent here, not everywhere. You don't need the formula. You need that phrase."

**[7] Show it [run the TF-IDF code live]**
- [run `bind_tf_idf`, show the top terms]
- "Watch what moves. The plain word 'room' gets pushed *down* — because it's everywhere. And the words that describe an *opinion* float up: clean, small, comfortable, large. That's the shift we want — from 'what got mentioned' to 'what actually distinguishes one review from another.'"

**[8] You make the call [pause — give them a minute]**
- "Your turn. Look at your top terms and finish this sentence in your notes: 'These reviews are mostly about ____.' One sentence. Write it down — because next class we'll see if the AI agrees with you, and I want your answer locked in first."
- [walk the room; nudge anyone stuck toward "room size and cleanliness"]

**[9] Beginner worries — head them off**
- [if someone says "my top words look weird / full of 'the'"] → "That means the stop-word line didn't run — re-run it, then count again. Always eyeball your top 15; if it's full of glue words, something's off."
- [if someone says "this seems too simple to be real analysis"] → "It is simple — on purpose. Simple means *you can check it by hand*. That's its superpower, and it's why it's our ruler for the AI."

**[10] Close + hook for next time**
- "So today, no AI, and we already learned something real: count words to see what's there, use TF-IDF to see what stands out. Totally transparent — you could redo every number by hand."
- "Next class, the AI shows up. It'll read these same reviews and tell us the sentiment. And we'll do the most important thing in this whole module: we'll check it against the ruler you built today. Bring your one-sentence answer. See you then."
