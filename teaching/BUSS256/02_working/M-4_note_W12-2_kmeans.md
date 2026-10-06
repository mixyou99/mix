# Lecture Note — W12-2: k-means at scale

*Change log: Jun 18, 2026 — created (Stage 2-B, note 2 of 4). Lecture-note DRAFT for professor review.
Markdown only (Production Policy).*

**Source-file map (production):** modernizes the k-means portion of `Seminar 10-11 Clustering` (lecture +
`Exercise/…_Clustering_R_Exercise_Code.r`); adds the AI-verify layer. Data = **snsdata** (`snsdata.csv`).
Pairs with `M-4_clustering_lab.md` Parts B + E. Load via `_shared_library/snippets/setwd_load_data.md`. AI
step → `_currency/clustering_llm.md` (code model); Ollama cues → `M-1_ollama_setup_guide.md`. **Model note:**
AI behavior is a *pattern to verify*, not a fixed output.

---

## Learning objectives
By the end of this session you can:
1. Run **k-means** on standardized data and read the output — cluster **sizes** and **centers**. → **algorithm + data literacy**.
2. Direct the AI to write the clustering pipeline, then **verify** it (starting with: did it standardize?). → **verification**.

## The big idea (study-from explanation)
**k-means** is the workhorse clustering method, and the idea is friendlier than the name. You pick a number of groups — call it **K** — and the algorithm:
1. drops K "centers" into the data,
2. assigns every record to its nearest center,
3. moves each center to the middle of its assigned records,
4. repeats 2–3 until things stop moving.

The result is K groups, each with a **center** — the *average profile* of that group. Reading those centers is how you understand what each cluster *is* (we'll do that properly next sessions). For now, two outputs matter: the **sizes** (how many records per cluster — are they balanced, or is one giant and one tiny?) and the **centers** (which variables are high or low in each group).

One thing to set: a **seed**. k-means starts from random center positions, so two runs can differ slightly. `set.seed(...)` makes your run reproducible — so you and I get the same clusters. (It's small, but it's part of doing it right — and, you'll see, a thing to check.)

## Worked example (real — snsdata)
We cluster the 36 standardized interests into K = 5 groups:
```r
teens <- read.csv("snsdata.csv")
interests <- teens[5:40]
interests_Stand <- scale(interests)        # standardize first (W12-1)
set.seed(1234)                             # reproducible
teen_KM <- kmeans(interests_Stand, 5)
teen_KM$size                               # how big is each cluster?
teen_KM$centers                            # the average profile of each
```
On the real data this gives five groups of very different sizes — one large "baseline" group of teens who don't strongly express any interest, plus several smaller, *distinctive* groups (one high on band/marching, one high on shopping/fashion brands, and so on). We'll name them in W13-2; today the point is just: **k-means hands you K groups and their center profiles.** (Heads-up from the real run: a couple of extreme outlier profiles can spawn a tiny junk cluster — light cleaning of extreme values first gives cleaner groups.)

## The AI step, then verify
Now direct the AI to do the same — and check it. We've done this every module: hand-first, then the AI, then verify.
```r
library(ellmer)
chat <- chat_ollama(model = MODEL,    # MODEL = code model → _currency/clustering_llm.md   # validated; run on a machine with Ollama
  system_prompt = "You are an R tutor. Reply in English only. Standardize before clustering. Concise runnable base-R + one line.")
chat$chat("Using the data frame teens (snsdata), write R to cluster the 36 interest columns with k-means.")
```
**What we found when we actually ran this:** the model writes the k-means **code well** — it *did* standardize and it *did* set a seed. So the pipeline itself is usually fine. That means your first check is quick:
- **Did it `scale()` before `kmeans`?** (It usually does — but confirm, because un-standardized clusters are silent junk.) Watch for small slips like a stray, made-up `library(snsdata)` (there's no such package) or scaling the centers a second time.

The *code* is the easy part here. The hard part — where the AI actually trips — is coming up in W13-1 and W13-2: **choosing K and naming the clusters.** Hold that thought.

## When / how to use it
- Use **k-means** when you want a fixed number of groups and you'll read the **centers** to understand them.
- Always **standardize + set a seed** first; read **sizes** (balance?) and **centers** (what defines each group?).

## Common mistakes / how to verify
- **Skipping standardization** (yours or the AI's) — silent junk. First check, every time.
- **Reading sizes without centers.** A cluster's size tells you *how many*; its center tells you *who*. You need both.
- **Forgetting the seed** — your clusters won't reproduce. Quick check.

## Key takeaways
- **k-means** = pick K, assign to nearest center, recenter, repeat → K groups, each with a **center profile**.
- Read **sizes + centers**; **standardize + `set.seed`** first.
- The AI writes this **code well** (it standardizes and seeds), so verifying the code is quick — the real catches are **choosing K** and **labeling**, next sessions.
