# Spoken Script — W12-2: k-means, and the "code's fine" plot twist

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 2 of 4). Spoken companion to
`M-4_note_W12-2_kmeans.md`. Drafts only. Spoken register §5; locked playful tone; English. Live code = the
validated lab code. AI step = code model (`_currency/clustering_llm.md`); OS cues → `M-1_ollama_setup_guide.md`.
**Guard:** don't script the AI's exact output — "let's see," then verify by type.*

---

**[1] Open — call back**
- "Last class: clustering groups by distance, and we standardize first or we get silent junk. Today we run the actual algorithm — k-means — and then we hand it to the AI. And I promise you a plot twist you've seen once before, back in association rules."

**[2] k-means, in plain words [click]**
- "k-means sounds scary; it's not. You pick a number of groups — call it **K** — and the algorithm does four steps on repeat: drop K 'centers' into the data, send every record to its nearest center, slide each center to the middle of its group, repeat until nothing moves. Out pops K groups, each with a **center** — the *average profile* of that group."
- "Reading those centers is how you figure out what each group *is*. That's the whole skill — and it's where this gets interesting in a couple of classes."

**[3] Run it live [run live]**
- "One housekeeping thing: k-means starts from random spots, so we set a **seed** to make it reproducible — so your run matches mine. Then we cluster the standardized interests into 5 groups."
- [run live]:
  ```r
  interests_Stand <- scale(teens[5:40])
  set.seed(1234)
  teen_KM <- kmeans(interests_Stand, 5)
  teen_KM$size
  teen_KM$centers
  ```
- [point at sizes] "Look — five groups, very different sizes. One big 'baseline' bunch of teens who don't strongly love anything in particular, and a few smaller, *distinctive* groups — one's all band and marching, one's all shopping and fashion brands. We'll *name* them next week. Today: k-means hands you groups and their center profiles. [aside] Heads-up — a weird outlier or two can make a tiny junk cluster; cleaning extreme values first helps."

**[4] CENTERPIECE — the plot twist [run live]**
- "Now hand it to the AI. We've done this every module — and watch the code it writes."
- [run live — direct the AI to write the k-means pipeline]
- [read what it produced] "Did it standardize? [point] ...Yep — `scale()`, right there. Did it set a seed? [point] ...Yep, `set.seed`. Huh. [pause] **Plot twist: the code is actually good.** Just like back in association rules, remember? When the job is *formulaic* — one standard function, a couple of settings — the AI handles it fine. There just isn't much room to mess up."
- "So if the code's fine... where's the catch? [let them sit with it] Because we *never* just trust it — so what do we check? [pause] Here's the thing: the catch isn't in the code. It's in the two **judgment** calls coming up — *how many groups should there be,* and *what do we name them.* That's where it falls apart. That's the next two classes."
- [stochastic note for you] "[If this run's code has a slip — a made-up `library(snsdata)`, a double-scale — catch it, but don't oversell it; the real lesson is 'code fine, judgment shaky.' If the code's clean, lean into the plot twist.]"

**[5] The quick code check (the habit) [click]**
- "It's still our habit, so do the fast check: did it `scale()` before `kmeans`? Did it seed? Any made-up function — like importing a package that doesn't exist? Sixty seconds. Usually passes. Then we move to the part that actually matters."

**[6] Beginner reactions**
- [if "if the AI writes the code, why am I learning to?"] → "Because you just watched the code be the *easy* part. The hard part — picking K, naming clusters — is judgment, and that's exactly where you'll out-think it. The code was never the job."
- [if "what's a seed again?"] → "Random starting points mean two runs can differ. A seed pins the randomness so we all get the same clusters. Small thing, but it's part of doing it right — and a thing to check."

**[7] Close + hook**
- "Recap: k-means — pick K, nearest center, recenter, repeat — gives you groups and their **center profiles**; standardize and seed first. The AI writes that code **well**... which just means the real catches are next: **how many clusters, and what to call them.**"
- "Next class: choosing K — and I'm going to *instruct* the AI to be careful, and show you it ignores me anyway. Bring your skepticism."
