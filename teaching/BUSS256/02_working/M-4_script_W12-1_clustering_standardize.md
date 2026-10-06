# Spoken Script — W12-1: Clustering, and the silent trap of scale

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 1 of 4). Spoken companion to
`M-4_note_W12-1_clustering_standardize.md`. Drafts only (Production Policy). Spoken register §5; locked
playful tone; English. Live code uses the real snsdata spread. **No on-ramp** — light callback only.*

> Numbered beats match the slides. `[brackets]` = stage directions for you, not spoken.

---

**[1] Open — the hook**
- "New technique today, and it's a fun one — it's how companies find their customer 'types' without anyone telling them the types exist. But it's also got a trap so quiet it gives you *no error message* and a totally wrong answer. We're going to learn the technique and disarm the trap. Let's go."

**[2] What makes clustering different [click]**
- "Everything we've done so far had a *target* — predict sales, find items bought together. Clustering throws that out. There's no target. You hand the computer a pile of records and say: 'group the similar ones for me.' That's it. We call it **unsupervised** — nobody labels the answer; the algorithm *discovers* the groups."
- "Real example: a store doesn't know it has five kinds of shoppers. Clustering *finds* them. Then the marketing team builds a campaign per type. Discovery, not prediction."

**[3] How does it decide 'similar'? Distance. [click]**
- "Simple idea: picture every customer as a dot in space — one axis per thing you measure. Dots that sit close together get grouped; dots far apart go to different groups. Closeness = **distance**. Intuitive, right?"
- "And right there is the trap."

**[4] The trap — scale dominance [show the real numbers]**
- "Distance treats every variable by its raw numbers. So if one variable is huge and another is tiny, the huge one *silently runs the whole show.* Look at our real teen data. [put the table up]"
- "'Friends' swings by about **37**. 'Basketball' swings by about **0.8.** 'Shopping,' about **0.7.** [pause] So if we cluster as-is, the distance between two teens is basically **just how many friends they have.** Their actual *interests* — the thing we care about — barely register. We'd get 'popular kids vs. loners,' and learn nothing."
- [ask the room] "So how do we make it fair — so basketball counts as much as friends?"
- [expect: "make them the same scale"] "Exactly."

**[5] The fix — standardize [click, run live]**
- "We **standardize**: rescale every variable to the same footing — average zero, one standard deviation of spread. One function: `scale()`."
- [run live]:
  ```r
  teens <- read.csv("snsdata.csv")
  interests <- teens[5:40]
  interests_Stand <- scale(interests)
  ```
- "Now one 'step' of friends counts the same as one 'step' of basketball, and the clusters will actually be about *interests*. **This single line is the difference between real segments and garbage.**"
- "And here's the scary part, the reason it matters all term: if you forget it — [pause] — you get **no error.** The code runs. It hands you clusters. They're just *wrong.* No red text, no warning. Which means the only thing standing between you and a wrong answer is... you, checking."

**[6] Light callback — the habit [click]**
- "You know the drill by now — we've done it for association rules, for regression. Hand-first, then the AI, then verify. Same here. And spoiler: when we hand clustering to the AI in a bit, **the very first thing we'll check is whether it standardized.** Today you just learned why that check exists."

**[7] Beginner reactions**
- [if "why not just use the raw numbers, isn't that the 'real' data?"] → "Because 'real' on different scales is unfair — it's like ranking athletes by adding their height in centimeters to their batting average. The big number drowns the small one. Standardizing makes the comparison honest."
- [if "this seems like a tiny prep step"] → "It's a tiny step with a giant consequence — skip it and every cluster is junk, silently. The small steps that fail quietly are exactly the ones pros double-check."

**[8] Close + hook**
- "Recap: clustering is **unsupervised discovery** — group by **distance** — and distance is unfair across scales, so we **standardize** first, every time, or we get silent junk."
- "Next class we actually run it — k-means — on this standardized data, and we hand it to the AI. And there's a plot twist about where the AI's good and where it falls apart. Bring your standardize habit. See you then."
