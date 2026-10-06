# Lecture Note — W12-1: What clustering is, and why we standardize

*Change log: Jun 18, 2026 — created (Stage 2-B, note 1 of 4). Lecture-note DRAFT for professor review.
Spoken script comes in part 2. Markdown only (Production Policy).*

**Source-file map (production):** modernizes the "Overview / Standardization" portion of `Seminar 10-11
Clustering/Seminars 10-11_Clustering_Lecture.pdf`. Pairs with `M-4_clustering_lab.md` Part A. Teaching data =
**snsdata** (`snsdata.csv`). Load files with `_shared_library/snippets/setwd_load_data.md` (same on
macOS/Windows). The AI verify habit is the one **we've already been using** — no new setup here.

*(Note format follows STYLE_STANDARDS §6. Plain language, one idea per sentence; terms defined on first use.)*

---

## Learning objectives
By the end of this session you can:
1. Explain **clustering** as unsupervised grouping by **similarity/distance**, and when it's useful. → **algorithm literacy**.
2. **Standardize** variables and explain *why* — what scale-dominance is and what goes wrong without it. → **algorithm + data literacy** + **verification**.

## The big idea (study-from explanation)
So far our techniques had a target — sales to predict, items that go together. Clustering is different: **there's no target.** We just hand the computer a pile of records and say "group the similar ones." That's **unsupervised learning** — finding structure for *discovery*, not prediction. The store doesn't tell us "these are the five customer types"; clustering *finds* them.

How does it decide who's "similar"? **Distance.** Picture each record as a point in space — one axis per variable. Records that sit close together get grouped; far-apart records go to different clusters. Simple, intuitive — and it has one big trap.

**The trap is scale.** Distance treats every variable equally *by its raw numbers*. So if one variable runs in the hundreds and another in single digits, the big one **silently dominates** every distance. Look at the real numbers in our teen social-network data:

| Variable | mean | std. dev. |
|---|---|---|
| `friends` | 30.6 | **36.7** |
| `basketball` | 0.28 | 0.82 |
| `shopping` | 0.36 | 0.73 |

`friends` swings by ~37; the interest counts swing by ~1. So if we cluster as-is, **the distance between two teens is almost entirely about how many friends they have** — their actual *interests* barely move the needle. Our clusters would just be "few friends / many friends," which tells us nothing interesting.

The fix is **standardization**: rescale every variable to the same footing — mean 0, standard deviation 1 — with `scale()`. Now "1 standard deviation of friends" counts the same as "1 standard deviation of basketball," and the clustering actually reflects *interests*. **This one step is the difference between meaningful clusters and junk** — and, importantly, skipping it throws **no error**. The code runs; the answer is just wrong. (That makes it something to *verify*, which we'll come back to.)

## Worked example (the real spread)
On `snsdata`, the 36 interest columns (basketball, band, church, shopping, …) are all small counts (mostly 0–5), but `friends` ranges into the hundreds. Standardizing:
```r
library(tidyverse)
teens <- read.csv("snsdata.csv")
interests <- teens[5:40]                 # the 36 interest keywords
interests_Stand <- scale(interests)      # mean 0, sd 1 for every column
```
Before: distances dominated by `friends`. After: every interest contributes fairly. That's the whole point of this session — *set the variables on equal footing before you measure distance.*

## When / how to use it
- Reach for **clustering** when you want to *discover* natural groups (customer segments, product families) with no predefined label.
- **Always standardize first** when variables are on different scales (which is almost always). Skip it only if everything is already comparable.

## Common mistakes / how to verify
- **Clustering raw, unstandardized data.** The biggest variable hijacks the result — and there's no error to warn you. *Verify* by checking that `scale()` (or equivalent) ran before the clustering.
- **Assuming "it ran, so it's right."** Clustering always returns *something*. Whether it's meaningful depends on the prep — which is exactly why we check.
- *(And yes — same habit as always: we'll soon have the AI do this, and the first thing we'll check is whether it standardized.)*

## Key takeaways
- Clustering = **unsupervised** grouping by **distance**; it's for discovery, not prediction.
- Distance is unfair across different scales, so we **standardize** (`scale()`) first — mean 0, sd 1.
- Skipping standardization gives **silent junk** (no error) — so it's a thing to **verify**, every time.
