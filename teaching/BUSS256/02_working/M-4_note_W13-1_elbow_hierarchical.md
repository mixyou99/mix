# Lecture Note — W13-1: Choosing K (the elbow) & hierarchical clustering

*Change log: Jun 18, 2026 — created (Stage 2-B, note 3 of 4). Lecture-note DRAFT for professor review.
Markdown only (Production Policy).*

**Source-file map (production):** modernizes the "Assessing results / Hierarchical" portion of `Seminar
10-11 Clustering`. Data = **snsdata** (elbow) + **protein** (`protein.csv`, hierarchical/hand-work). Pairs
with `M-4_clustering_lab.md` Parts B/C/E. Load via `_shared_library/snippets/setwd_load_data.md`. AI step →
`_currency/clustering_llm.md` (code model); Ollama cues → `M-1_ollama_setup_guide.md`. **Model note:** AI
behavior is a *pattern to verify*, not a fixed output.

---

## Learning objectives
By the end of this session you can:
1. Read the **WSS "elbow"** to choose K — and defend the choice as a **judgment**, not a formula. → **data literacy**.
2. Run **hierarchical / Ward** clustering and read a **dendrogram**. → **algorithm literacy**.
3. **Verify the AI's K choice** against your own elbow read — and recognize when it over-claims. → **verification**.

## The big idea (study-from explanation)
k-means made us *pick K* — but how many groups should there be? The standard tool is the **elbow**. We run the clustering for K = 1, 2, 3, … and plot the **within-cluster sum of squares (WSS)** — basically, how tight the clusters are (smaller = tighter). WSS always drops as K grows (more groups = tighter fit). The hope is a **"bend"**: a K after which adding more groups barely helps. That bend — the "elbow" — is your suggested K.

Here's the honest part, and it's the heart of this session: **the elbow often isn't there.** On real data the curve is frequently *smooth* — it just glides down with no clear corner. When that happens, **there is no mathematically "correct" K.** The lecture says it plainly: *no rule or theory determines the optimal K; it depends on your purpose and domain knowledge.* Choosing K is a **judgment call** — you pick the number of groups that's *useful* for your decision (want 5 customer segments? use 5), not the number a formula hands you.

The second method, **hierarchical clustering**, builds a tree. Start with every record alone, then repeatedly merge the two closest groups until everything's in one. **Ward's method** is a common way to decide "closest." The result is a **dendrogram** — a tree you read top-down: cut it at a height, and you get that many clusters. For a small dataset, you can read the whole structure by eye.

## Worked example A (real — the smooth snsdata elbow)
```r
wss <- numeric(8)
for (i in 1:8) wss[i] <- sum(kmeans(interests_Stand, i)$withinss)
plot(1:8, wss, type = "b", xlab = "K", ylab = "Within-cluster SS")
```
The real WSS values, K = 1 → 8: **982k → 931k → 905k → 878k → 854k → 835k → 815k → 794k.** Look at the *drops*: 1→2 falls ~51k, 2→3 falls ~27k, 3→4 falls ~27k, 4→5 falls ~24k… **It's basically a straight, smooth slide. There is no elbow.** So the data does *not* tell us K — *we* do, based on what we need (we'll use 5 for a handful of usable segments). That's the lesson: an honest read of this curve is "no clear K — it's a judgment."

## Worked example B (real — protein, hierarchical by hand)
25 countries is small enough to read the whole tree:
```r
prot <- read.csv("protein.csv")
feat <- scale(prot[, 3:11])                 # standardize the 9 protein sources
hc <- hclust(dist(feat), method = "ward.D") # Ward's hierarchical clustering
plot(hc, labels = prot$Country)             # dendrogram
cutree(hc, k = 3)                           # cut into 3 groups
```
Cut at K = 3, the real groups read straight off the tree as **diet regions**: a big **Western/Central + Nordic** group (high white meat, eggs, milk), a small **Balkan/Eastern** group — Albania, Bulgaria, Romania, Yugoslavia — (high cereals, nuts), and a **Mediterranean** group — Greece, Italy, Portugal, Spain — (high fruit/veg, fish). You can *see and name* these regions by eye — the cleanest yardstick in the module.

## The AI step, then verify — the K catch
Direct the AI to recommend K, then check it against your own elbow read:
```r
chat$chat("Here are within-cluster sum-of-squares for K = 1..8: <paste the values>. How many clusters would you use, and why? Note there may be no single correct answer.")   # run on a machine with Ollama
```
**What we found when we ran this — and it's the key teaching beat.** On that *smooth* curve, the model confidently said something like *"choose k = 3; the improvement is significant and starts to flatten after that."* But it doesn't flatten at 3 — the 2→3 and 3→4 drops are nearly identical. **The AI saw an elbow that isn't there.** And here's the kicker: **we had explicitly told it, in its instructions, "do not claim a single correct K" — and it claimed one anyway.** You can *instruct* the AI to be careful and it *still* over-claims. So the only real check is **your own read of the curve.** When the AI hands you a confident K, ask: *does my plot actually bend there?*

## When / how to use it
- Use the **elbow** to *suggest* K — but if the curve is smooth, treat K as a **judgment** tied to your purpose, not a formula.
- Use **hierarchical / Ward + a dendrogram** when the dataset is small enough to read the tree (or to sanity-check k-means).
- **Always re-read the curve yourself** before accepting any K — especially the AI's.

## Common mistakes / how to verify
- **Forcing an elbow onto a smooth curve.** If the drops are all similar, there's no bend — say so, and choose K by purpose.
- **Taking the AI's K on faith.** In testing it asserted a crisp K on a bend-less curve *even when told not to.* Verify against your own plot.
- **Confusing "smaller WSS" with "better."** WSS always shrinks as K grows; that's not a reason to pick a big K.

## Key takeaways
- The **elbow** suggests K — but real curves are often **smooth**, and then **K is a judgment** (purpose + domain), not a formula.
- **Hierarchical/Ward** builds a readable **dendrogram**; cut it to get K clusters (protein → 3 diet regions, by eye).
- The AI **over-claims a K on a smooth curve — even when told not to.** Your own elbow read is the only real check.
