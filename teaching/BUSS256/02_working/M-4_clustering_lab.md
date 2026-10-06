# M-4 — Hand-First → AI-Verify Clustering Lab (DRAFT)

*Change log: Jun 18, 2026 — created (Stage 2-A). In-class **ungraded formative** lab. Draft for professor
review. Spine: hand-first → AI-verify across **three layers**. Volatile values → `_currency/clustering_llm.md`.*

> **Ungraded, in-class.** No points — practice (you know the drill by now: hand-first, direct, verify).
> Clustering gives the AI *three* ways to slip, so you check three things: **did it standardize? is its K
> defensible? do its labels match the actual clusters?**
>
> **Code status.** **Part A standardization, Part B snsdata clusters + elbow, and Part C protein Ward** are
> real — verified by an equivalent computation on the actual data. The **AI-call code (`ellmer` chat)** was
> **validated on the instructor's machine** (`qwen2.5-coder`, 3 runs) — run it on yours with Ollama.
> **Finding:** the model writes the clustering code **well** (it standardized and set a seed), so the real
> catches are its **two judgment calls** — **asserting a K the elbow doesn't support** (it did this even when
> told not to) and **labels that don't match the centers**. Those are what you hunt for.

**Data.** **snsdata.csv** (27,276 teen social-network profiles, 36 interest keywords — a ~2006 historical
snapshot) for k-means at scale + labeling; **protein.csv** (25 countries × 9 protein sources — a 1970s
historical snapshot) for small, hand-doable hierarchical work. *(Load with
`_shared_library/snippets/setwd_load_data.md`; for the AI step, Ollama must be running with the code model —
see `M-1_ollama_setup_guide.md`.)*

---

## Part A — HAND-FIRST: why we standardize (the trap)
Clustering groups rows by **distance**. But distance is unfair if variables are on wildly different scales.
Look at the real spread in snsdata:

| Variable | mean | std. dev. |
|---|---|---|
| `friends` | 30.6 | **36.7** |
| `basketball` | 0.28 | 0.82 |
| `shopping` | 0.36 | 0.73 |

`friends` has a standard deviation of ~37; the interest counts have ~1. **Unscaled, the distance between
two teens is almost entirely about how many *friends* they have** — the interests barely register. So we
**standardize** first (`scale()`), putting every variable on the same footing (mean 0, std 1). **Skip this
and your clusters are silently wrong — with no error message.** Remember that; it's exactly where the AI
trips.

## Part B — k-means at scale on snsdata + the elbow
```r
teens <- read.csv("snsdata.csv")
interests <- teens[5:40]                       # the 36 interest keywords
interests_Stand <- scale(interests)            # STANDARDIZE — do not skip
set.seed(1234)                                 # reproducible
teen_KM <- kmeans(interests_Stand, 5)          # K = 5 (a choice — see the elbow)
teen_KM$size                                   # cluster sizes
teen_KM$centers                                # the average profile of each cluster

# Choose K? Within-cluster Sum of Squares (the "elbow"):
wss <- numeric(8); for (i in 1:8) wss[i] <- sum(kmeans(interests_Stand, i)$withinss)
plot(1:8, wss, type = "b", xlab = "K", ylab = "Within-cluster SS")
```
*Expected (real) elbow:* WSS falls **smoothly** — about 982k → 931k → 905k → 878k → 854k → 835k (K = 1…6).
**There is no sharp bend.** That's the key lesson: the elbow here doesn't *hand you* a K — choosing K is a
**judgment** based on your purpose, not a formula. (We use K = 5 because we want a handful of usable teen
segments.) *Note:* a few extreme outlier profiles can spawn tiny junk clusters — light cleaning/capping of
extreme values first gives cleaner segments.

## Part C — hierarchical / Ward on protein (small, do it by hand)
25 countries is small enough to read the whole tree:
```r
prot <- read.csv("protein.csv")
feat <- scale(prot[, 3:11])                     # standardize the 9 protein sources
d <- dist(feat, method = "euclidean")           # distances between countries
hc <- hclust(d, method = "ward.D")              # Ward's hierarchical clustering
plot(hc, labels = prot$Country)                 # the dendrogram
groups <- cutree(hc, k = 3); table(groups)      # cut into 3 groups
```
*Expected (real), cut at K = 3:* a big **Western/Central + Nordic** group (high white meat, eggs, milk), a
small **Balkan/Eastern** group — Albania, Bulgaria, Romania, Yugoslavia — (high cereals, nuts), and a
**Mediterranean** group — Greece, Italy, Portugal, Spain — (high fruit/veg, fish, nuts). You can *read the
diet regions straight off the dendrogram* — that's your hand-labeling yardstick.

## Part D — AI STEP: direct the model to cluster, choose K, and label
```r
library(ellmer)
chat <- chat_ollama(model = MODEL,    # MODEL = code model qwen2.5-coder → _currency/clustering_llm.md   # UNTESTED — needs Ollama
  system_prompt = "You are an R tutor for beginners. Reply in English only. Concise runnable base-R + one line. Standardize before clustering. Do not claim a single correct K.")

# Ask for the pipeline, a K recommendation, AND cluster labels       # UNTESTED — needs Ollama
chat$chat("Using the data frame teens (snsdata), write R to cluster the 36 interest columns with k-means,
recommend how many clusters to use, and give each cluster a short descriptive label from its centers.")
```

## Part E — VERIFY: the two judgment calls first
In testing, the model wrote the clustering **code** correctly — it standardized and set a seed — so the real
catches are its **judgment**. The AI is probabilistic; check by **type**, leading with the two judgment layers:

| Check (judgment — **primary**) | What to look for |
|---|---|
| **K asserted on a smooth elbow?** | The real elbow has **no bend** — so there's no "correct" K. In testing the AI said *"choose k=3, the improvement flattens after that"* — a bend that isn't there. **And it said this even though it was told "do not claim a single correct K."** So don't take its K on faith; does *your* curve actually support it? **#1 catch.** |
| **Labels match the centers?** | For each AI label, read the cluster's actual high interests. In testing it called a **marching-band** cluster "Sports Enthusiast" and, in another run, invented a whole label set ("Reading Fanatic," etc.) with **no link to the data.** Check every label against the real centers. |

| Check (code — **secondary**, usually fine) | What to look for |
|---|---|
| **standardized + seed?** | Did it `scale()` before `kmeans` and `set.seed`? (qwen usually does — but verify it; un-standardized clusters are silent junk.) Watch minor slips like a stray `library(snsdata)`. |

Pick one cluster, read its real centers, and check the AI's label against them. Write one line per check:
*is its K honest? do the labels fit? did it standardize?*

## Part F — DECIDE: a segmentation from verified clusters
Using only the clusters/labels you **verified** (neutral, descriptive names), write 2–3 sentences: pick one
segment and a concrete action a marketer could take for it (which message, which channel). Justify the
segment from its **center values**, not from the AI's say-so.

## Reflection (1–2 sentences)
Which of the three layers did the AI slip on (if any), and how did your own standardize/elbow/centers work
catch it?

---
*Companion: `M-4_clustering_lab_SOLUTION.md`. Setup: `M-1_ollama_setup_guide.md`. Tools:
`_currency/clustering_llm.md`.*
