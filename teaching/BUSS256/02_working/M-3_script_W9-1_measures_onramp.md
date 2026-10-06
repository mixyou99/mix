# Spoken Script — W9-1: How we work with AI + the three measures

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 1 of 2). Spoken companion to
`M-3_note_W9-1_measures_onramp.md`. Drafts only (Production Policy). Spoken register §5; locked playful tone;
English delivery. Board-compute uses the real basket; AI part set up for next session (setup guide).
**Guard:** never promise what the AI will say.*

> Numbered beats match the slides. `[brackets]` = stage directions for you, not spoken.

---

**[1] Open — the hook**
- "Welcome back from the midterm. Today we start the fun half — actual techniques. And we're starting with the one behind every 'customers who bought this also bought…' you've ever seen online. But first, thirty seconds: remember the rule we set back in the visualization week for how you and AI work together. It hasn't changed — but today it grows up, because now we've got real numbers to check."

**[2] CENTERPIECE — the callback, delivered warm [click — slide: How we work with AI]**
- "You already know this one — we met it with the charts in Week 7: **hold your standard, direct the AI, verify it against your standard.** Here's the only new wrinkle: back then your standard was *a good chart* — a principle. Now that we're doing techniques with real numbers, your standard becomes *a number you work out by hand first.* So for every technique from here on: **hand-first**, then the AI, then check. Same rule, sharper teeth."
- [let it land — they've heard the rule before; this is recognition, not a reveal]
- "Never the other way around. Never 'ask the AI and hope.' And here's *why*, and I want you to really hear this: the AI is fast, it's confident, and it is **sometimes just... wrong.** Confidently wrong. It'll hand you a beautiful, professional-looking answer in two seconds — and if you don't already know the right answer, **you have no way to tell.** Your own work is your yardstick. No yardstick, no checking — you're just trusting a stranger who's occasionally lying with a straight face."
- "That's not me being anti-AI. I *want* you using it — it's a fantastic assistant. But an assistant you can't check is a liability, not a tool. So we learn to check. And association rules is the perfect place to put it to work, because — lucky us — the whole thing is just three fractions you can do on a napkin. You'll genuinely hold the truth in your hand. Let's go get it."

**[3] What's an association rule? [click — chips & salsa]**
- "Why does the store put salsa right next to the chips? Because somebody noticed they sell together. That's it. That's association rules — finding items that show up in the same baskets more than you'd expect. We write a rule like this: `{chips} → {salsa}`, read as 'baskets with chips tend to also have salsa.'"

**[4] The three measures — and which one matters [click]**
- "To judge a rule, we've got three numbers, and they're all just counting:"
- "**Support** — how *common* is this combo? How many baskets have both, out of all baskets."
- "**Confidence** — *when* people buy A, how often do they also grab B?"
- "**Lift** — and this is the boss — does A and B together happen **more than just by chance**? [click] Lift above 1: they attract, real pattern. Lift equals 1: total coincidence, nothing there. Lift **below** 1: they *repel* — people buy them together *less* than random. Hold that — lift below 1 is going to be the star of the show."
- [if someone asks 'why not just use confidence?'] → "Great question — because confidence can lie to you. If salsa is in basically every basket anyway, then 'chips → salsa' looks super confident but means nothing. Lift catches that. Always read the lift."

**[5] Quick motivation — this is how Netflix thinks [click, light]**
- "One second of 'why you care.' This measure is the seed of recommendation systems. 'People who bought this also bought…' — that's **collaborative filtering**, recommending based on what similar shoppers did. 'More movies like this one' — that's **content-based**, recommending by the item's features. Netflix and Spotify run fancy versions of this all day. We're not building Netflix — we're learning the little number underneath it. Okay, back to the napkin."

**[6] Live board-compute — build the yardstick [compute on the board with the room]**
- "Six shopping trips. [put the basket on the board] Let's compute three rules together. N is 6 — six trips total."
- "**Diapers to beer.** Count the trips with *both* diapers and beer. [count with them: T3, T4, T6] Three. So support is 3 over 6 — **0.5.** Now, of the trips with diapers, how many also had beer? All three of them. Confidence — 3 over 3 — **1.0**, a perfect 100%. And lift? Confidence over beer's own support. Beer's in 3 of 6, that's 0.5. So 1.0 divided by 0.5 — **lift of 2.** [pause] Two. They sell together *twice* as often as chance. That's a real, money-making pattern."
- "**Bread to milk.** [compute live] Support 0.5, confidence 0.75, lift... 0.75 over milk's 0.667 — about **1.125.** Just over 1. A *weak* positive. Fine, but nothing to write home about."
- "**Milk to beer.** [compute live] Together only once — T6. Support 1 over 6, about 0.167. Confidence, 1 over milk's 4 trips — **0.25.** And the lift: 0.25 over beer's 0.5 — **0.5.** [stop] Look at that. **Below one.** Milk and beer go together *less* than random. They **repel.** Putting them side by side would be a *bad* idea."
- "Write these three down: **2.0, 1.125, 0.5.** That's your yardstick for this whole module. And that **0.5** — circle it. That's the trap. Next class, we hand the same problem to an AI, and I want you to watch what it does with that 0.5."

**[7] Beginner reactions**
- [if "this seems too easy to be 'analytics'"] → "It's simple arithmetic — on purpose. Simple means *you can check it.* And being the person who can check the fancy tool? That's the whole job. The simplicity is the superpower."
- [if "I mixed up support and confidence"] → "Everybody does at first. One-liner: support is 'how often, out of everything'; confidence is 'how often, given A.' Different denominators. We'll drill it."
- [if "why does lift below 1 matter so much?"] → "Because it's the difference between 'shelve these together' and 'whatever you do, keep these apart.' Get that backwards and you give a store the exact wrong advice. Next class you'll see even an AI get it backwards."

**[8] Close + hook**
- "Recap: the course rule, forever — **hand-first, direct, verify, never trust-first.** A rule is `{A} → {B}`, judged by support, confidence, and **lift** — and lift below 1 means they *repel*. You built a yardstick: 2.0, 1.125, 0.5."
- "Next class: we run this on a thousand real baskets, we let an AI take a crack at it — and there's a plot twist about where the AI is good and where it falls flat. Bring your 0.5. See you then."
