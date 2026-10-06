# Spoken Script — W7: Data Visualization (and our first time with AI)

*Change log: Jun 18, 2026 — created (Stage 2-B). Spoken companion to `M-5_note_W7_visualization.md`. Drafts
only (Production Policy). Spoken register §5; locked playful tone; English. Live code = the validated lab
code. AI step = code model (`_currency/viz_llm.md`); OS cues → `M-1_ollama_setup_guide.md`. **Guard:** don't
script the AI's exact output — "let's see," then verify by type. Pitched to pre-midterm students.*

> Numbered beats match the slides. `[brackets]` = stage directions for you, not spoken.

---

**[1] Open — the hook**
- "Today's a two-for-one. We learn to make charts that tell the truth — and catch charts that lie. And it's also a milestone: this is the **first time** in this course we bring AI into the room. So before we touch a single chart, I'm going to give you the rule for how you and AI work together for the rest of the semester. It never changes. Listen up."

**[2] CENTERPIECE #1 — the on-ramp, delivered warm [click — slide: How we work with AI]**
- "Here's the rule. Three steps: **you hold the standard. You direct the AI. You verify the AI against your standard.** Hold, direct, verify. Say it with me — hold, direct, verify."
- [pause — let them say it]
- "Never 'ask the AI and hope.' And here's *why*, and really hear this: the AI is fast, it's fluent, and it is **sometimes confidently wrong.** It'll hand you a gorgeous, professional-looking answer in two seconds — and if you don't already know the right answer, **you can't tell.** Your own work is the yardstick."
- "Now — one subtle thing that makes this rule work all term. 'The standard' shows up in two flavors. Sometimes it's a **number you worked out by hand** — after the midterm, you'll compute the answer to a regression or a clustering yourself, *then* check the AI against your number. And sometimes it's a **principle you know** — which is today. There's no single 'correct' chart, so your standard isn't a number — it's *'a good chart doesn't mislead.'* Same habit, two kinds of standard: hold it, direct, verify."
- "And visualization makes it *obvious* why this matters: the AI can draw any chart in one second. So your job was never the *drawing.* It's **choosing the right chart and catching the lying one.** That's the human part. Let's learn it."

**[3] Chart choice — the question picks the chart [click]**
- "Rule one of charts: **the question decides the chart.** Don't open the code and start fiddling — ask what you want to *show.*"
- "How's one number spread out? **Histogram.** Do two numbers move together? **Scatter.** Comparing across a few categories? **Bar** — and bars start at zero, hold that thought. Over time? **Line.** Many things correlating? **Heatmap.** That's basically the whole menu."
- "And in ggplot, a chart is just three things: **data → what goes on x and y → the shape.** Data, mapping, geom. That's it. Don't overthink it."

**[4] Make a clean one — by hand [run live]**
- "Let's make two, with the airbnb data you already cleaned. First: how are room prices spread?"
- [run live — the histogram]
- [point at it] "Look — most listings down here cheap, median around 137 bucks, and then this long tail dragging out to... three thousand four hundred. A few fancy places stretch the whole axis. So a histogram's right, but the *shape's* hard to read — which is why we often flip to a **log scale.** Picking the bins and the scale? That's a judgment. There's no single right answer — but there are wrong ones."
- "Second: do pricier places get more reviews? Let's see."
- [run live — the scatter, with alpha]
- [point] "And the answer is... a cloud. No real relationship — the correlation's basically zero. And that's a *fine* answer! Honest analysts report the 'nope, no pattern' instead of inventing one. Notice I used this `alpha = 0.3` — transparency — because with eighteen hundred dots, solid points just smear into a blob. Remember that word: **overplotting.**"

**[5] CENTERPIECE #2 — the AI's blob [run live]**
- "Now hand it to the AI. Same scatter. Let's see what it gives us."
- [run live — ask the AI for the price-vs-reviews scatter]
- [read its code] "Okay — the code? Runs fine. Correct ggplot. [pause] But look at what it drew. [put its plot next to yours] See the difference? Mine — with the transparency — you can see *where the points are dense.* The AI's? [point] **A solid black blob.** It used plain `geom_point()`, no `alpha`. The code is perfect and the chart is **useless** — you can't see anything in there."
- "That's the whole lesson of this module in one picture. The AI **draws fine** — it's the *judgment* it's missing. It didn't think 'eighteen hundred points will smear, I should add transparency.' You did. So you caught it. **The code ran; the chart's just bad** — and only you knew the difference."
- [stochastic pivot] "[If this run *did* add alpha — 'Oh nice, this time it added transparency. Good. But you only *know* that's good because *you* knew to look for it. In testing it forgot — gave us the blob. You're the one holding the standard, every time.']"
- [aside, also surface] "And by the way — it'll also happily make up a column name that doesn't exist, like asking for `bedrooms` when our data says `num_bed`, and then the code just errors. Same habit catches that: does it use a *real* column?"

**[6] CENTERPIECE #3 — the chart that lies [show the pre-built misleading chart]**
- "Last piece — the rubric, the 'does this chart lie?' checklist. Top of the list, and the one I want burned in: **does the bar start at zero?** Watch. [show the pre-built bar: average price by bedrooms, y-axis starting at 170]"
- "Quick — eyeball it. The three-bedroom bar looks, what, three, four times taller than the studio? Huge difference, right?"
- [expect: "yeah, big difference"] "Now **read the y-axis.** [point] It starts at... 170. Not zero. The real prices are like 185 to 208 — a *twelve percent* difference, dressed up to look like *triple.* The axis lied to you. Cut the baseline, and a molehill becomes a mountain. **That's the number-one chart trick, and now you'll never miss it.**"
- [teaching note for you] "[Why a *pre-built* chart for this one and not the AI? Because ggplot **defaults** bars to a zero baseline — so when the AI makes a bar, it usually *avoids* this trap by accident. The tool protects it. So I control this example myself to make sure you see the trick. The AI charts show you the *other* slips — the blob, the bins, the labels.]"

**[7] A peek ahead [click]**
- "One quick thing for after the midterm. The later modules — clustering, association rules — will throw plots at you made with plain R, not ggplot: an 'elbow' curve, a branching 'tree,' a bar of popular items. You don't make those today; you just need to *read* them, and you already can — same skills, different drawing tool. Knowing what a chart's *for* is what carries over."

**[8] Beginner reactions**
- [if "if the AI draws charts fine, why learn ggplot?"] → "Because you just watched the code be the *easy* part and the *judgment* be where it fell apart — the blob, the unreadable bins. The AI draws; *you* decide if it's any good. That's the part worth your salary."
- [if "isn't 'good chart' kind of subjective?"] → "There's taste, sure — but 'don't chop the axis to fake a difference' isn't taste, it's honesty. The rubric is the line between 'a choice' and 'a lie.'"
- [if "my chart looks worse than the AI's polished one"] → "Polished isn't the same as honest. A pretty chart with a chopped axis is *worse* than a plain one that tells the truth. Run the rubric, not your eyeballs."

**[9] Close + recap**
- "Recap. The rule, forever: **hold the standard, direct the AI, verify** — a number later, a principle today. The **question picks the chart.** The AI draws **fine** but judges **badly** — so you check the bins, the transparency, the labels, the real column names. And the **rubric** is your lie-detector — starting with *does the bar start at zero.*"
- "You can now make an honest chart, read the ones coming after the midterm, and catch an AI handing you a beautiful, useless blob. And you just learned how we'll work with AI for the rest of the term. Not bad for one class. Go make honest charts. Nicely done, all of you."
