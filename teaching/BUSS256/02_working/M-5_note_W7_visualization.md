# Lecture Note — W7: Data Visualization (choosing good charts, catching bad ones)

*Change log: Jun 18, 2026 — created (Stage 2-B). Lecture-note DRAFT for professor review. One focused
session (Week 7). Spoken script is the companion file. Markdown only (Production Policy).*

**Source-file map (production):** **NEW module — authored from scratch** (no existing viz lecture/exercise;
audit V-1/A-5). It **consolidates** the visualization that was scattered and untaught across the course:
the `ggplot2` histogram + `ggcorrplot` in the Week 5/6 airbnb exercise, and the base-R plots students meet
after the midterm — the WSS **elbow** (clustering), the **dendrogram** (clustering), `itemFrequencyPlot`
(association rules), and `hist`/`boxplot`. Pairs with `M-5_visualization_lab.md`. The AI step uses the local
**code** model via `ellmer` chat (`_currency/viz_llm.md` → `reg_llm_tools.md`); OS steps →
`M-1_ollama_setup_guide.md`. Load data with `_shared_library/snippets/setwd_load_data.md`. **Model note:** AI
behavior is a *pattern to verify*, not a fixed output. **B&W:** every example chart reads in black-and-white
(meaning by position/shape/labels, not color) — the course standard *and* rubric principle #7.

*(Note format follows STYLE_STANDARDS §6. Plain language, one idea per sentence; terms defined on first use.
Pitched to pre-midterm students: you know R basics and data management from Weeks 1–6.)*

---

## Learning objectives
By the end of this session you can:
1. **Work with AI the course way** — *hold the standard → direct the AI → verify against it* — and say why visualization makes that habit vivid. → the term's operating habit + **verification**.
2. **Choose the right chart for the question** (distribution, relationship, comparison, trend, correlation). → **data literacy**.
3. **Make a clean plot in ggplot2** (data → aesthetic → geom, lightly). → **algorithm literacy**.
4. **Read the base-R plots** you'll meet after the midterm (elbow, dendrogram, item-frequency, boxplot). → **algorithm + data literacy**.
5. **Judge whether a chart misleads** using the rubric, and verify an AI-made chart against it. → **data literacy** (the core; rehearses mid-term MT-7).

## The on-ramp — how we work with AI, all term (starts today)
This is the first time we bring AI into the course, so here's the rule, and it holds for every week from now on:

> **You hold the standard. Then you direct the AI. Then you verify the AI against your standard.**

Why this order? Because the AI is fast and confident and *sometimes confidently wrong* — and the only way to catch that is to **already hold the right answer yourself.** Your own work is the yardstick.

Here's the part worth remembering: **"the standard" comes in two forms.** Sometimes it's a **number you computed by hand** — after the midterm you'll do exactly that for regression, clustering, and the rest: work out the answer, then check the AI against it. And sometimes it's a **principle you know** — which is today's case. Visualization has no single "correct" chart, so your standard isn't a number; it's *"a good chart doesn't mislead."* Same habit either way: **hold the standard, direct, verify.** Visualization makes it vivid because the AI can draw any chart in a second — so your real job was never *drawing*. It's **choosing the right chart and catching the misleading one.**

## Chart choice — the question decides the chart
Before any code, ask what you want to *show*. That picks the chart:

| Your question | Chart |
|---|---|
| How is one number spread out? | **Histogram** |
| Do two numbers move together? | **Scatter** |
| Compare a number across a few categories | **Bar** (baseline at 0) |
| How does a number change over time? | **Line** |
| How do many variables correlate? | **Heatmap** |

**Grammar of graphics, lightly:** a ggplot is just **data → an aesthetic mapping** (which variable goes on x, y, or color) **→ a geom** (the shape that draws it). That's the whole mental model; you don't need more today.

## Worked example (real airbnb data)
**A histogram — how are room prices spread?** On the airbnb listings, most prices cluster low (**median ≈ $137**) with a **long tail** up to about **$3,447** — a strong right skew. So a histogram is the right chart, *and* the bin count and scale are real choices: too-fine bins or a raw linear axis bury the shape, so a **log scale** (`scale_x_log10()`) often reads better. *Choosing the bins and scale is the skill — there's no single right answer, but there are bad ones.*

**A scatter — do pricier listings get more reviews?** Plot price against number of reviews and you get... **a cloud.** The correlation is ≈ 0 — there's **no relationship.** That's an honest result; a good analyst *reports the non-result* instead of forcing a trend. One catch: with ~1,800 points, plain dots pile into a black smudge — **overplotting** — so we add **transparency** (`alpha`) to reveal the real density.

## Reading the base-R plots you'll meet later
After the midterm, the technique modules will hand you plots made with base R, not ggplot. You don't make these today — you just learn to *read* them, so they're not a surprise:
- **The "elbow" (line) plot** — clustering. A curve of "tightness" vs. number of groups; you'll look for a bend (and learn it's often *not* there).
- **The dendrogram (tree)** — clustering. A branching tree; cut it at a height to get that many groups.
- **The item-frequency bar** — association rules. Just a bar chart of the most common items.
- **Boxplots / histograms** — everywhere, for distributions.
Same reading skills as today; different drawing tool. Knowing the chart's *job* is what carries over.

## The "does this plot mislead?" rubric — your yardstick
This is the standard you hold up against any chart — yours, a colleague's, or an AI's — and it's exactly what the mid-term tests. Keep it handy:

| # | Principle | What to look for |
|---|---|---|
| **1** | **Truncated / non-zero baseline** | Do the **bars start at 0**? A cut axis makes tiny gaps look huge. *(This is the mid-term item.)* |
| **2** | **Wrong chart type** | A **bar** where a **histogram** belongs; a pie for many slices; a line for unordered categories. |
| **3** | **Misleading scale** | Cherry-picked range; unlabeled log; outliers clipped off. |
| **4** | **Dual axes** | Two y-axes fake a "they move together" story. |
| **5** | **Overplotting** | Thousands of points, no transparency → density hidden. |
| **6** | **Distortion / aspect ratio** | Stretched/squished to exaggerate; 3D or bubble-area tricks. |
| **7** | **Color misuse** | Rainbow on ordered data; red/green-only (colorblind); decorative color — *and would it survive B&W?* |

## When / how to use it
- **Pick the chart from the question first**, then write the code — never the reverse.
- **Make with ggplot2; read base-R** when the technique modules hand you a plot.
- **Run the rubric** on any chart before you trust or share it — especially an AI-made one.

## Common mistakes / how to verify
This is where the AI actually trips. We tested it: it writes **runnable, correct ggplot code every time** — so the code is *not* the catch. The catch is whether the chart is **good.** Verify the **judgment**:
- **Binwidth/scale.** The AI made a histogram with a tiny binwidth and no log on the skewed prices — hundreds of bars, shape unreadable. *Check:* are the bins sensible? is a log scale needed?
- **Overplotting.** It wrote a scatter with **no `alpha`** — the black blob. *Check:* did it use transparency? (Hold your `alpha = 0.3` next to its bare dots — the difference is obvious.)
- **Hallucinated columns.** It asked for a column we don't have (`bedrooms` instead of `num_bed`) — so the code **errored.** *Check:* real column names?
- **Missing labels** (principle #8): titles and units present?
- *One nuance:* ggplot **defaults a bar's baseline to 0**, so an AI-made bar usually *dodges* the truncated-axis trap automatically — which is why we practice that principle (#1) on a **pre-built** misleading chart, and use the live AI chart for the bin/alpha/label/column slips.

## Key takeaways
- The course rule, starting now: **hold the standard → direct the AI → verify.** The standard is a **number** (later) or a **principle** (today).
- **The question picks the chart**; ggplot is **data → aesthetic → geom.**
- The AI writes ggplot **code fine** — so you verify the **judgment**: sensible bins/scale, `alpha` for overplotting, real column names, labels.
- The **misleading-chart rubric** is your yardstick (and the mid-term); **#1 truncated baseline** is the one to never miss.
