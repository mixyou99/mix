# Spoken Script — W13-1: Choosing K — and the AI that won't listen

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 3 of 4). Spoken companion to
`M-4_note_W13-1_elbow_hierarchical.md`. Drafts only. Spoken register §5; locked playful tone; English. Live
code = validated lab code. AI step = code model (`_currency/clustering_llm.md`); OS cues →
`M-1_ollama_setup_guide.md`. **Guard:** "let's see," then verify by type.*

---

**[1] Open — the hook**
- "k-means made us pick a number of groups — K. But... how many *should* there be? Today we answer that, and then I'm going to do something a little mean to the AI: I'll *explicitly tell it* not to guess a single number — and we'll watch it guess one anyway. It's the best lesson in this whole module about why *you* have to be the one checking."

**[2] The elbow — the idea [click]**
- "Here's the standard tool. We run the clustering for K = 1, 2, 3, and so on, and we measure how *tight* the clusters are — a number called within-cluster sum of squares, WSS. Smaller = tighter. As you add groups, WSS always drops — more groups, tighter fit. We're hunting for a **bend**: a point where adding more groups barely helps anymore. That bend's the 'elbow,' and it's your suggested K."

**[3] The honest twist — sometimes there's no elbow [run live]**
- "Except — and this is the real lesson — *the bend often isn't there.* Let's look at our actual data."
- [run live — the WSS loop and plot]
- [read the numbers off the plot] "Watch the drops. One to two falls about 51 thousand — okay, decent. Two to three: about 27 thousand. Three to four: about... 27 thousand. Four to five: 24. [pause] It's just a *smooth slide.* Every step helps about the same amount. **There's no elbow.** No corner. So what's the 'correct' K here?"
- [expect some confusion] "Trick question — **there isn't one.** When the curve's smooth, no formula picks K for you. You pick it for your *purpose.* Want five usable customer segments? Use five. That's not cheating — that's the lecture's own rule: no theory gives you the optimal K; it's a judgment. Hold that — it's about to matter a lot."

**[4] CENTERPIECE — the AI that won't listen [run live]**
- "Now watch this. I'm going to ask the AI to pick K from this exact smooth curve. And — important — I've *already* put an instruction in its settings: 'do not claim a single correct K.' I told it, up front, don't pick one number. Let's see what it does."
- [run live — feed it the WSS values, ask for a K]
- [read its answer] "...And? [point] In our testing it said — and I quote the spirit of it — *'you might choose k=3; the improvement is significant and then flattens out after that.'* [turn to the room] Flattens out after 3? Look at the curve. Does it? The two-to-three drop and the three-to-four drop are basically *identical.* It saw a bend that **is not there.**"
- "And here's the kicker, the part I want burned in: **I told it not to do this.** Right there in its instructions — 'do not claim a single correct K.' It did it anyway. [pause] So learn this: you can *instruct* an AI to be careful, politely ask it not to over-claim — and it'll nod, and then over-claim. The only real check is **your own eyes on the curve.**"
- [stochastic pivot] "[If this run actually hedges — 'there's no clear K, depends on purpose' — great: 'Nice, this run listened. But you only *trust* that because *you* read the curve and saw it's smooth. In testing it ignored the same instruction. The curve-read is yours, every time.']"

**[5] The other tool — hierarchical, on a tiny dataset [run live]**
- "Quick second method, because it's lovely on small data. **Hierarchical clustering** builds a *tree* — start with every item alone, keep merging the two closest, until everything's one big group. We'll use 25 countries and their diets."
- [run live — protein: scale, dist, hclust ward.D, plot dendrogram, cutree k=3]
- [point at the dendrogram] "Read it like a family tree. Cut it into three, and look — [trace the branches] a big **Western and Nordic** group, heavy on meat, eggs, milk. A little **Balkan** group — Albania, Bulgaria, Romania — heavy on cereals and nuts. And a **Mediterranean** group — Greece, Italy, Spain, Portugal — fish, fruit, veg. You can *see the diet regions* right on the tree. Twenty-five rows, all readable by eye. That's your clean yardstick."

**[6] Beginner reactions**
- [if "so the AI is just wrong about K?"] → "Not 'wrong' like broken — *over-confident.* It fills the uncertainty with a crisp answer because that sounds helpful. But a smooth curve has no crisp answer, and pretending otherwise is the mistake. You supply the judgment."
- [if "how do I pick K if there's no rule?"] → "By purpose. How many groups would actually be *useful* to act on? Five segments a marketing team can target beats a 'mathematically optimal' seventeen nobody can use. Useful beats optimal."
- [if "the dendrogram looks complicated"] → "On big data it is — that's why we use it on the 25 countries, where you can read the whole thing. It's a sanity-check tool: small data, eyeball the tree."

**[7] Close + hook**
- "Recap: the elbow *suggests* K — but real curves are often **smooth**, and then K is **your judgment**, by purpose. Hierarchical builds a readable tree. And the AI will hand you a confident K on a bend-less curve **even after you tell it not to** — so the curve-read is yours."
- "Next class, the last clustering piece and maybe the most human: *naming* the groups. And I'll show you the AI calling a marching band a sports team. With total confidence. See you then."
