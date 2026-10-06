# M-5 — Data Visualization Module Blueprint (Week 7) · STAGE 1 (design — FROM SCRATCH)

*Change log: Jun 18, 2026 — created. Design blueprint for professor approval. **No lecture notes, scripts,
slides, or exercises authored here** — content is Stage 2, after approval. This module is **authored from
scratch** (no existing materials), so the blueprint designs more than the M-1…M-4 blueprints did, and it
**inverts** their pattern (see §3).*

**Inputs read:** roadmap **D-4** (author a new first-class viz module) + audit **V-1/A-5** (the gap); the
scattered viz touchpoints (ggplot2 + `ggcorrplot` in the airbnb exercise; `itemFrequencyPlot` in M-3; the
WSS elbow + dendrogram in M-4; `wordcloud` in M-1); the P-4 mid-term item **MT-7** ("visualization that
misleads," truncated y-axis); COURSE_PROFILE §3 (two literacies) + §4 (hand-first → AI-verify); the M-3
blueprint (on-ramp design, now inherited here); CURRENCY_LOG §B model policy.

**No web scan needed:** **ggplot2 / grammar of graphics** is the stable standard, and the AI tooling
(`ellmer` chat + code model `qwen2.5-coder`) is already established/validated.

**Calendar & pitch.** Week 7 is the **last first-half week, right before the midterm** — so M-5 is
chronologically **first** of all the AI-touching modules (**M-5 Wk 7 → midterm Wk 8 → M-3 Wk 9 → M-2 Wk
10–11 → M-4 Wk 12–13 → M-1 Wk 14–15**). Students are **pre-midterm**: they know R basics + data management
(Wks 1–6) but have **not** done any technique module. Pitch to that maturity; this is their **first**
AI-collaboration framing.

---

## The two things that make M-5 different
1. **It INTRODUCES the on-ramp (the term's first).** Because it's chronologically first, the
   "how we work with AI all term" framing lives **here**, viz-flavored, written reusably (to later seed a
   `_shared_library/` AI-collaboration intro). *(Ripple — FLAG, do NOT fix now: M-3's notes/scripts currently
   call the on-ramp "the term's first"; with M-5 now first, M-3 must be demoted to "as we did in
   visualization." Add to the **existing deferred cross-module reconciliation flag** spanning M-1/M-2/M-3/M-4
   — fixed in one pass once all modules incl. M-6 exist. **Do not edit M-3 now.**)*
2. **The verification pattern INVERTS.** M-1…M-4 had a **numeric yardstick** (hand-compute support/lift, fit
   `lm()`, read the elbow), then verified the AI against it. **Visualization has no single numeric right
   answer** — only better and worse charts. So the yardstick becomes **visualization principles** (§4), and
   the activity is a **two-way hybrid** (§3): the student **makes** a defensible plot *and* **critiques**
   AI/given plots against the principles.

> **Why this is a feature, not a problem.** Being first *and* principle-based, M-5 teaches the **most
> general form** of the habit — *"you hold the standard (a number you computed **or** a principle you know),
> then you direct the AI, then you verify against your standard."* The later numeric modules then
> *specialize* that habit to "the standard is a number you computed." So the on-ramp written here should use
> the **general** "hold the standard → direct → verify" framing.

---

## 1. Learning objectives (each ladders to a literacy)
By the end of this session a student can:
1. **Work with AI the course way** (the on-ramp): *you hold the standard, then direct the AI, then verify against it* — and say why visualization makes this vivid (the AI plots instantly; your job is choosing + judging). → the term's operating habit + **verification**.
2. **Choose the right chart for the data** — distribution → histogram; relationship → scatter; category comparison → bar; trend → line; correlation → heatmap. → **data literacy**.
3. **Make a clean plot in ggplot2** (grammar of graphics, lightly: data → aesthetics → geom). → **algorithm literacy**.
4. **Read the base-R plots** they'll meet in the second half — the WSS elbow, the dendrogram, the item-frequency bar, a histogram/boxplot. → **algorithm + data literacy**.
5. **Judge whether a plot misleads** using the rubric (§4), and verify an AI-made chart against it. → **data literacy** (the core; rehearses mid-term MT-7).

---

## 2. Session outline (ONE focused session, Week 7)
*Week 7 = ~1 viz session + a separate midterm-review session. **The review session is NOT M-5 content.** Keep
this tight: prioritize **chart choice + the misleading-chart critique** over exhaustive ggplot syntax.*

| Segment | Content | Hand-first → AI-verify role |
|---|---|---|
| **A — The on-ramp (opening)** | The term's first "how we work with AI": *hold the standard → direct the AI → verify.* Viz framing: the AI makes a plot in one second, so **your** job is choosing the right chart and catching the misleading one. | Sets the habit (general form). |
| **B — Chart choice** | Which chart for which data (the 5 workhorses); grammar of graphics *lightly* (data → aesthetic mapping → geom). | Hand-first: students pick the chart for a question. |
| **C — Make a clean ggplot** | Build one defensible plot from **known data** (airbnb) — a histogram and a scatter. | Hand-first: the student makes it. |
| **D — The "does this plot mislead?" rubric** | The module's core asset (§4) — the yardstick. Walk a deliberately-misleading example (truncated-axis bar = MT-7). | The standard students will judge against. |
| **E — Make + critique (the AI-verify activity)** | (i) Direct the AI to make a plot → **verify the encoding** against intent; (ii) critique an AI-made (and a pre-built misleading) chart against the rubric. | The two-way hybrid (§3). |
| **F — Read the base-R plots ahead** | Quick "you'll see these after the midterm": elbow, dendrogram, item-frequency, boxplot — how to read each. | Sets up the technique modules. |

---

## 3. The two-way hybrid lab design (the inverted pattern)

| Mode | What the student does | What the AI is directed to / shown | What the student verifies |
|---|---|---|---|
| **(i) Make** | Choose a chart for a question, then **build it in ggplot2** from known data (e.g., airbnb room price → histogram; price vs. number of reviews → scatter). | Direct the AI to write the ggplot code for the *same* intent. | **Encoding against intent:** did it map the variable you meant to x/y/color? right `geom`? sensible scale/labels? (checkable against *intent*, not a number.) |
| **(ii) Critique** | Read a chart and judge it. | (a) A **pre-built deliberately-misleading** chart (instructor asset — truncated-axis bar = MT-7); (b) an **AI-generated** chart (live, unpredictable). | The **misleading-chart rubric** (§4): does it mislead? is it the right chart type? is the encoding honest? |

**The yardstick is the rubric, not arithmetic.** In mode (i) the check is "does the encoding match what I
asked?"; in mode (ii) it's "does this chart honor the principles, or does it mislead?" Either way the student
holds the standard and the AI is the thing being checked.

---

## 4. The "does this plot mislead?" rubric — the module's CORE ASSET
*The yardstick that replaces the numeric check. Compact and reusable; it directly rehearses mid-term MT-7.
(Final wording/length is an open question — proposed ~8 principles.)*

1. **Baseline / truncated axis.** Bars must start at **0**; a non-zero or cut y-axis exaggerates small
   differences. *(This is MT-7.)*
2. **Wrong chart type for the data.** e.g., a pie for many categories; a bar where a **histogram** is needed
   (distribution); a line for unordered categories.
3. **Misleading scale.** Cherry-picked axis range; log vs. linear without saying; inconsistent scales across
   panels.
4. **Dual axes.** Two y-axes invite a spurious "they move together" story.
5. **Overplotting.** Thousands of points with no transparency/jitter hide the real density.
6. **Aspect ratio / distortion.** Stretching or squishing to exaggerate or flatten a trend; 3D or area
   distortion (bubble *area* vs. radius).
7. **Color misuse.** Rainbow for ordered data; red/green-only (colorblind-unsafe); color implying a meaning
   that isn't in the data.
8. **Missing context.** No axis labels, units, or source — you can't judge what you can't read.

*This list is the standard students judge against, the thing they "hold" in the on-ramp, and a reusable asset
(a candidate for `_shared_library/` later).*

---

## 5. ADDED (this whole module) + what it SETS UP elsewhere
*Inverted KEPT/ADDED: since **nothing exists**, M-5 is almost entirely **ADDED**. There is nothing to KEEP,
MIGRATE, or RETIRE.*

| Disposition | Item |
|---|---|
| **ADDED** | The entire module: the **on-ramp** (term's first); **chart-choice** teaching; a **light ggplot2** make-a-plot; the **base-R plot-reading** primer; the **misleading-chart rubric** (§4); the **make + critique** AI-verify activity. |
| **SETS UP (consolidation win)** | M-5 teaches **plot-reading once** so the technique modules don't have to: the **WSS elbow** + **dendrogram** (M-4), **`itemFrequencyPlot`** (M-3), **histograms/boxplots** (throughout), and the **`ggcorrplot`/histogram** already embedded in the airbnb exercise. Because Week 7 precedes all of them, M-5 is the natural foundation. |
| **NOT in scope** | Exhaustive ggplot syntax (kept light); the M-6 first-half foundations (Wks 1–5) stay a separate module (D-4). |

---

## 6. Volatile content → `_currency/`
The AI here **writes ggplot code** — still a **CODE** task → `qwen2.5-coder` per CURRENCY_LOG §B.
**Recommendation: a small pointer file `undergrad_bigdata/_currency/viz_llm.md`** that points to
`reg_llm_tools.md` for the shared **model + `ellmer` chat interface + system_prompt**, and holds only the
**M-5 prompt templates** ("write ggplot code to show … from this data"; "critique this chart — does it
mislead?"). Same per-module pattern as M-3/M-4. Registering it in `CURRENCY_LOG.md` is a Stage-2 governance
diff for approval. *(Alternative: direct reference to `reg_llm_tools.md`. Recommend the pointer file.)*

---

## 7. Dependency map
- **M-5 → mid-term MT-7 (direct, immediate).** MT-7 ("visualization that misleads," truncated y-axis) is a
  **first-half / mid-term** item — and M-5 is taught the week before the midterm. The rubric (§4) **is** the
  MT-7 preparation.
- **M-5 = foundational plot-literacy for the second half.** Every technique module produces plots (elbow,
  dendrogram, item-frequency, histograms). M-5 teaches reading/making them **once**, before students hit them.
- **On-ramp = the term's FIRST AI-collaboration intro.** *Ripple (deferred): M-3 currently claims that title;
  demote M-3 to "as we did in visualization" in the later cross-module reconciliation pass. Do not edit M-3
  now.*
- **No A2 dependency** (A2 is the regression assignment; it doesn't mandate a chart — viz helps presentation
  only).
- **Tool baseline:** **ggplot2** for making; base-R reading for the technique-module plots.
- **M-6 boundary:** M-5 is a standalone first-class module (D-4), distinct from the M-6 foundations (Wks 1–5).

---

## 8. AI-validation note (Stage 2-A)
The AI writes **ggplot code** — a CODE task → `qwen2.5-coder` (validated as a model from M-2/M-4). Per the
M-2/M-3/M-4 method, **Stage 2-A will run real qwen on the viz prompts** to see where it actually slips.
**Predicted (to validate):** like M-4, the *code* is likely fine (ggplot is fairly formulaic), and the catch
is **judgment** — **plausible-but-suboptimal chart choices** (a default that overplots; a chart type that
isn't the best for the question) or **encoding that runs but maps poorly**. The misleading-chart rubric is
how students catch it. We'll re-weight to whatever the real run shows.

---

## 9. Open questions — need your decision before Stage 2
1. **Rubric length** — is the ~8-principle rubric (§4) right for one session, or trim to a tighter core (~5–6)
   led by the truncated-axis/MT-7 item? *(Recommend ~6–8, MT-7 first.)*
2. **The "make" plots + dataset** — confirm **airbnb** (students cleaned it in Wk 5/6) with a **histogram +
   a scatter** as the two make-a-plot examples? (Alternative: App Store rank vs. ratings.)
3. **On-ramp reusability** — write it generic enough ("hold the standard → direct → verify") to later seed a
   `_shared_library/` AI-collaboration intro? *(Recommend yes — and note it's the most general form.)*
4. **One session enough?** — D-4 says "small standalone." Confirm one focused session, or expand (e.g., a
   take-home chart-critique) to claim more time? *(Recommend one session + an optional take-home critique.)*
5. **Critique targets** — use **both** a pre-built deliberately-misleading chart (controlled, hits MT-7)
   **and** a live AI-generated chart? *(Recommend both.)*
6. **Currency** — small pointer file `viz_llm.md` → `reg_llm_tools.md`, or direct reference? *(Recommend the
   pointer file.)*
7. **Graded vs formative** — confirm the M-5 lab is **ungraded formative**, with **mid-term MT-7** as the
   graded check?
8. **On-ramp framing across modules** — confirm the **general** "hold the standard → direct → verify" framing
   (so it covers both viz's principle-yardstick and the later numeric-yardstick modules), which the
   numeric modules then specialize?

---

## Stage-2 preview (NOT started)
On approval: **Stage 2-A** (run qwen on the viz prompts; build the make + critique lab + solution + the
misleading-chart rubric as a finished asset + `viz_llm.md`; the pre-built misleading-chart example); then
**Stage 2-B** (the single lecture note + spoken script, English, locked playful tone, with the on-ramp) —
each as `02_working/` drafts, B&W + cross-platform standards applied.
