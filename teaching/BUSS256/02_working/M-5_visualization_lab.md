# M-5 — Make-and-Critique Visualization Lab (DRAFT)

*Change log: Jun 18, 2026 — created (Stage 2-A). In-class **ungraded formative** lab. Draft for professor
review. This module **inverts** the pattern: there's no numeric yardstick — the yardstick is the
**visualization principles** (Part E). Volatile values → `_currency/viz_llm.md`.*

> **Ungraded, in-class.** No points — practice. Visualization is the one place where there's **no single
> right answer** — just better and worse charts. So instead of computing a number and checking the AI
> against it, you (i) **make** a defensible chart, and (ii) **critique** charts against a set of principles.
>
> **Code status.** The **ggplot2 code (Parts C)** is standard and the airbnb data shapes are real (verified
> by computation). The **AI-call code (`ellmer` chat)** uses the validated interface but is marked
> **`# UNTESTED — run on a machine with Ollama`** (the code model `qwen2.5-coder` is validated from M-2/M-4;
> these viz prompts haven't been run). It is **not authoritative** — you verify its plots.
>
> **Black-and-white note.** Every chart here reads in **black-and-white** — meaning is carried by position,
> shape, and labels, **not by color alone** (that's the course B&W standard *and* rubric principle #7).

**Data.** **airbnb** — the listings you cleaned in Week 5/6 (`airbnb_host.csv`: `room_price`, `num_bed`, …;
`airbnb_review.csv`: `num_review`, `overall_rating`; joined by `id`). *(Load with
`_shared_library/snippets/setwd_load_data.md`; for the AI step, Ollama running with the code model — see
`M-1_ollama_setup_guide.md`.)*

---

## Part A — The on-ramp: how we work with AI all term
This is our first time bringing AI into the course, so here's the rule, and it never changes:

> **You hold the standard. Then you direct the AI. Then you verify the AI against your standard.**

The AI is fast and confident — and sometimes confidently wrong. The only way to catch that is to **already
hold the standard yourself.** Sometimes that standard is a **number you computed by hand** (you'll do that
after the midterm — for regression, clustering, and the rest). Today, in visualization, the standard is a
**principle you know** — "a good chart doesn't mislead." Same habit, two kinds of standard: *hold it, direct,
verify.* Visualization makes it vivid: the AI can draw any chart in one second, so **your** job isn't drawing
— it's **choosing the right chart and catching the misleading one.**

## Part B — Chart choice (pick the chart for the question)
Before any code: **the question decides the chart.** The five workhorses:

| Your question | Chart |
|---|---|
| How is one number spread out? | **Histogram** |
| Do two numbers move together? | **Scatter** |
| Compare a number across categories | **Bar** (baseline at 0!) |
| How does a number change over time? | **Line** |
| How do many variables correlate? | **Heatmap** |

*Grammar of graphics, lightly:* a ggplot is just **data → an aesthetic mapping (which variable goes on x, y,
color) → a geom (the shape).* That's the whole mental model.

## Part C — MAKE a clean plot (hand-first)
**C1 — A histogram: how are room prices spread?**
```r
library(tidyverse)
host <- read_csv("airbnb_host.csv")
ggplot(host, aes(x = room_price)) +
  geom_histogram(bins = 40) +
  labs(title = "Distribution of Airbnb room prices",
       x = "Room price (USD)", y = "Number of listings")
```
*What you'll see (real):* most listings cluster low (median ≈ $137) with a **long tail** of pricey ones (up
to ~$3,447) — a classic right skew. Because of that tail, a **log scale** often reads better:
`+ scale_x_log10()`. *Choosing the bin count and the scale is a judgment — that's the skill.*

**C2 — A scatter: do pricier listings get more reviews?**
```r
review <- read_csv("airbnb_review.csv")
abnb <- left_join(host, review, by = "id")          # merge by id (your Week 5/6 skill)
ggplot(abnb, aes(x = num_review, y = room_price)) +
  geom_point(alpha = 0.3) +                          # alpha = transparency, so points don't pile up
  labs(title = "Room price vs. number of reviews",
       x = "Number of reviews", y = "Room price (USD)")
```
*What you'll see (real):* basically **a cloud — no relationship** (the correlation is ≈ 0). That's an honest
result; don't force a trend that isn't there. Note the `alpha = 0.3` — with ~1,800 points they'd otherwise
pile into a black blob (that's **overplotting**, rubric #5).

## Part D — Direct the AI, then verify the ENCODING
```r
library(ellmer)
chat <- chat_ollama(model = MODEL,    # MODEL = code model → _currency/viz_llm.md   # UNTESTED — needs Ollama
  system_prompt = "You are an R tutor. Reply in English only. Use ggplot2. Concise runnable code + one line.")
chat$chat("Using the data frame host (airbnb), write ggplot2 code to show the distribution of room_price.")   # UNTESTED
```
There's no number to check here. In testing, the AI wrote **runnable, correct ggplot every time** — so the
catch isn't the code, it's the **judgment**: did it make *good* choices? Check those against your own plot:

| Check (judgment) | What to look for |
|---|---|
| **Sensible binwidth + scale?** | On the histogram, did it pick a readable bin count — or, like the real run, `binwidth = 10` (≈340 bars, the skew unreadable) with **no log scale**? |
| **`alpha` on the scatter?** | Did it use transparency — or, like the real run, a bare `geom_point()` that turns ~1,800 points into a **black blob** (overplotting)? Hold your `alpha = 0.3` next to it. |
| **Real column names?** | Did it use **`num_bed`** (our column) — or hallucinate one like `bedrooms`, so the code **errors**? |
| **Labels + right geom?** | Axis titles and units present? A **histogram** for a distribution (not a bar of values)? |

The AI draws *a* chart fine; whether it's a *good* chart is your call.

## Part E — The "does this plot mislead?" rubric + critique
This rubric is your **yardstick** — the standard you hold up against any chart (and it's exactly what the
mid-term asks). Keep it handy:

| # | Principle | What to look for |
|---|---|---|
| **1** | **Truncated / non-zero baseline** | Do the **bars start at 0**? A cut axis makes small gaps look huge. *(This is the mid-term item.)* |
| **2** | **Wrong chart type** | Pie for many slices; a **bar** where a **histogram** belongs; a line for unordered categories. |
| **3** | **Misleading scale** | Cherry-picked axis range; log vs. linear with no label; outliers hidden by a clipped axis. |
| **4** | **Dual axes** | Two y-axes invite a fake "they move together" story. |
| **5** | **Overplotting** | Thousands of points with no transparency → the real density is hidden. |
| **6** | **Distortion / aspect ratio** | Stretched/squished to exaggerate a trend; 3D or bubble-**area** tricks. |
| **7** | **Color misuse** | Rainbow on ordered data; red/green-only (colorblind-unsafe); decorative color implying meaning. *(Also: would it survive B&W?)* |

**Critique #1 — a chart I'll hand you.** [instructor shows a pre-built bar chart: average price by bedrooms,
y-axis starting at ~$170.] Which principle does it break? What's the honest version?

**Critique #2 — a chart the AI makes (live).**
```r
chat$chat("Make a bar chart comparing the average room_price for listings with 0, 1, 2, and 3 bedrooms.")   # UNTESTED
```
Run the rubric on whatever it produces: any color mischief? Labels? A real column name? *Don't predict its
mistake — check it against the principles.* (Note: ggplot's **default** bar baseline is **0**, so the live AI
bar usually *dodges* the truncated-axis trap automatically — which is why **Critique #1's pre-built chart**
carries that principle, and the live AI chart carries the others.)

## Part F — (Optional take-home) find one misleading chart in the wild
Find a real chart (news, an ad, a company report) that breaks one of the seven principles. Name the principle
and sketch the honest version. One paragraph.

## Reflection (1–2 sentences)
Which principle is easiest to miss at a glance — and how would you catch it on an AI-made chart?

---
*Companion: `M-5_visualization_lab_SOLUTION.md`. Setup: `M-1_ollama_setup_guide.md`. Tools:
`_currency/viz_llm.md`.*
