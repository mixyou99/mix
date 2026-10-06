# M-1 — Text-Mining Module Blueprint (Weeks 14–15) · STAGE 1 (design only)

*Change log: Jun 18, 2026 — created. Design blueprint for professor approval. **No lecture notes,
scripts, slides, or exercises are authored here** — content authoring is Stage 2, after approval.*

**Inputs read:** existing `Seminar 12_Text Mining/` (lecture, `..._R_Code.r`, exercise, corpora);
COURSE_PROFILE §3 (two literacies) + §4 (hand-first → AI-verify); audit S-10…S-14
(`02_working/01_audit_report.md`); benchmark Theme 5 (`02_working/02_benchmark_scan.md`); and a fresh
2026 currency scan (7 dated notes added to `_reference/ref_tm_*.md`).

**Locked direction (this blueprint is built to it):** classical NLP kept faithfully and **reframed as the
verification yardstick** for LLM output; `tm`/`gsub` → **tidytext**; LLM added at **use-and-interpret
depth only** (classify / summarize / extract — no embeddings, fine-tuning, or transformer internals);
spine = **hand-first → AI-verify**; reuse existing corpora as **dated historical snapshots**.

**2026 currency grounding (cited; full notes in `_reference/`):** the current intro-level standard is
row-wise LLM application over a text column via pre-built verbs — in R the **`mall`** package
(`llm_classify/summarize/extract/verify`) on top of **`ellmer`**, optionally with a local **Ollama**
model (Posit cheatsheet "NLP using LLMs in R & Python," current 2026; `mall` docs, CRAN 2026). Classical
methods are **kept as the transparent baseline**, not retired (Ornstein, *Text As Data*, R course, upd.
2025-06-13). The canonical workflow is **validate LLM output against gold/hand labels per task**
(Pangakis et al., arXiv 2306.00176, 2023 → now standard). Teach **zero-shot only**, bracket
fine-tuning (Chae & Davidson, *Sociological Methods & Research*, 2025), and treat LLM **stochasticity**
as a reliability lesson (repeat-run agreement; Semantic Stability Protocol, *Quality & Quantity*, 2026).

---

## 1. Learning objectives (each ladders to a literacy)

By the end of Weeks 14–15 a student can:

1. **Turn raw text into structured data** with a transparent classical pipeline (tokenize → clean →
   term frequency / **TF-IDF**), and explain what each step does and why. → *algorithm literacy* (how the
   method produces its output) + *data literacy* (is the resulting term set meaningful?).
2. **Apply classical analyses** — sentiment (lexicon) and topic/structure discovery (**LDA topic model** /
   term clustering) — to a business text corpus and read the results. → *algorithm + data literacy*.
3. **Use an LLM at use-and-interpret depth** to classify, summarize, and extract from the *same* text
   (zero-shot, student-defined categories), understanding it is probabilistic, not a counted result. →
   *algorithm literacy* (how an LLM's output differs from counting words).
4. **Verify the LLM against the classical baseline** — measure agreement on a hand/classically-labeled
   sample, locate where the two diverge, and explain *why* (sarcasm, negation, context, ambiguity). →
   *verification* (the redesign's core) + *algorithm literacy*.
5. **Judge which result to trust and turn it into a business recommendation**, and state the
   reliability/validity caveats (run-to-run variation; agreement with gold labels). → *data literacy*
   (does the analysis answer the business question?) + *verification*.

---

## 2. Session-by-session outline (Weeks 14–15 ≈ 4 class sessions)

*Syllabus: Wk 14 = Text-mining I (two sessions); Wk 15 = Text-mining II + Review (two sessions). Design
only — activities described, not authored.*

| Session | Classical (hand-first) | LLM layered on | Hand-first → AI-verify activity |
|---|---|---|---|
| **W14-1 — Foundations (yardstick build)** | Bag-of-words concept; **tokenization → stop-word removal → term frequency → TF-IDF** in tidytext, on the hotel-review corpus. Re-do the old pipeline the clean way (migration shown). | *None yet* — this session builds the transparent baseline students will check the LLM against. | No LLM yet. Closes by *predicting*: "from your top TF-IDF terms, what are these reviews mostly about?" — written down as the human hypothesis to test next session. |
| **W14-2 — Meet the LLM (use + first verify)** | Classical **sentiment** via a tidytext lexicon on the same reviews. | Introduce the LLM tool conceptually (zero-shot; you define the labels; it's probabilistic). **`llm_summarize`** + **`llm_sentiment`/`llm_classify`** on the same reviews. | **Verify #1:** classical lexicon sentiment vs LLM sentiment on the same N reviews → compute agreement, pull the disagreements, explain *why* they differ (negation, sarcasm, mixed reviews). Compare LLM summary themes to W14-1's top TF-IDF terms. |
| **W15-1 — Structure + capstone verify** | **Topic/structure discovery**: LDA topic model (and/or term clustering) on the corpus; classical keyword **extraction**. | **`llm_classify`** into *student-defined* complaint/compliment categories; **`llm_extract`** the specific aspect. | **Verify #2 (capstone lab):** hand-code (or classically label) ~20 reviews → run the LLM on the same 20 → accuracy/agreement → interpret disagreements → decide which to trust. **Reliability mini-check:** run the LLM 3–5× (set seed/temperature) → agreement across runs; log model + version + date. |
| **W15-2 — Decide, recommend, review** | Synthesize: when is the transparent classical method enough, when does the LLM add value? | Use the verified result. | Turn the verified analysis into a **business recommendation** (the "so-what" for the hotel/app publisher); state validity + reliability caveats. Wrap to the course thesis (automation → human moves to judgment/verification). Doubles as the Week-15 review. |

---

## 3. Classical → LLM "compare-and-verify" lab design

Each pairing: a classical method (the yardstick) ↔ an LLM use ↔ on a corpus ↔ what the student verifies.

| Classical method (hand-first) | LLM task (use-and-interpret) | Corpus | What the student verifies / decides |
|---|---|---|---|
| Term frequency / **TF-IDF** top terms | **`llm_summarize`** ("what are these about?") | Hotel reviews (575, dated) | Do the LLM's summary themes match the high-TF-IDF terms? Where does the LLM add nuance the term counts miss — and where does it hallucinate a theme not in the text? |
| **Sentiment lexicon** (tidytext bing/afinn) | **`llm_classify`** / `llm_sentiment` (pos/neg/mixed) | Hotel reviews | Agreement on a labeled sample; classify the disagreements by *cause* (negation, sarcasm, mixed). Which is more defensible for a "are guests happy?" decision? |
| **LDA topic model** / term clustering | **`llm_classify`** into student-defined categories (e.g., cleanliness / staff / location / value) | Hotel reviews | Do the data-driven topics line up with the human-meaningful categories? Which is more interpretable and more useful for the business question? |
| Keyword/regex **extraction** | **`llm_extract`** (pull the specific complaint/aspect) | App descriptions (250) or reviews | Did the LLM extract correctly and completely? Spot the misses/over-extractions against the text. |
| (none — reliability) | Repeat **`llm_classify`** 3–5× | small labeled sample | Run-to-run agreement; the meaning of setting seed/temperature; why a probabilistic tool needs a reliability report. |

The "gold standard" in every row is the **student's own classical/hand result** — literally the yardstick.
Verification (Verify #2) is the graded-style capstone activity (Stage 2 will decide if it's assessed).

---

## 4. KEPT / MIGRATED / RETIRED / ADDED (vs. existing Seminar 12)

| Disposition | Item (from existing module) | Note |
|---|---|---|
| **KEPT** (as yardstick) | Bag-of-words/DTM concept; tokenization; stop-word removal; term frequency; term clustering concept; the **review-analysis business framing** | The transparent baseline the LLM is checked against. |
| **KEPT** | Word cloud (light, as a quick visual) | Optional; not load-bearing. |
| **MIGRATED** (`tm`/`gsub` → tidytext) | `Corpus(VectorSource())` + **dozens of hardcoded `gsub("u2019"…)` unicode scrubs** + manual stop-word/device-name loops → `unnest_tokens()` + `anti_join(stop_words)` + `str_remove`/`textclean`; `DocumentTermMatrix` → tidy counts / `cast_dtm`; SnowballC stemming retained but via tidy flow | Removes the brittle, ~40-line `gsub` block (audit S-14). |
| **RETIRED** | The **"Text-mining Tools" slide** (SAS Text Miner, IBM Intelligent Miner, ClearForest, Teragram, Autonomy…) | ~2005–2010 commercial roster, several defunct (audit S-10). |
| **RETIRED** | The **"use only the first 2 sentences"** hack | Artifact of the old cleaning approach; tidytext handles full text. |
| **RETIRED (proposed — see Q3)** | **Regression-on-cluster-scores** (Task 3) | A forced bridge from text-mining to regression; not standard, conflates modules. *Open question — keep a light "does text relate to sales?" tie-in, or drop?* |
| **ADDED (classical)** | **TF-IDF** (`bind_tf_idf`), **sentiment** (tidytext lexicons), **LDA topic modeling** (`topicmodels`) | Locked-direction classical set; currently absent. |
| **ADDED (LLM)** | LLM use layer: **`mall`** verbs (`llm_classify/summarize/extract/verify`) via **`ellmer`** (+ optional Ollama local) | Use-and-interpret depth only. |
| **ADDED (verification)** | The **compare-and-verify lab**, **agreement/accuracy** vs hand labels, **reliability** repeat-run check, **model+version logging** | The module's spine and the redesign's point. |

---

## 5. Volatile content → `_currency/` (placeholders, not hard-coded)

Stage-2 notes will refer to volatile items by placeholder; live values live in
`undergrad_bigdata/_currency/tm_llm_tools.md` (to be created in Stage 2) and be registered in
`CURRENCY_LOG.md` (which already carries a "text-mining: classical vs LLM" row).

- **LLM tool + model names/versions** (the `mall`/`ellmer` packages; the chosen chat model, e.g. a cloud
  model or a local Ollama model) — *very high* volatility; stable notes say "a current LLM text-analysis
  package (see `_currency/tm_llm_tools.md`)."
- **Exact lab prompts** and the `mall` setup snippet / argument names (`labels=`, `additional_prompt=`,
  caching, `llm_use()`) — API still evolving (currency flag from the scan).
- **Reliability defaults** (seed/temperature settings; the repeat-run protocol) — emerging practice (2026),
  re-verify each term.
- **Corpus date stamps** (app descriptions = 2012; hotel reviews = undated/legacy) — labeled as historical
  snapshots; refresh handled separately (decision D-5), not in this module.

---

## 6. Open questions — need your decision before Stage 2 authoring

1. **LLM access mode for ~40 beginners (biggest one).** Cloud API (`ellmer` + a hosted model — needs API
   keys/billing and means text leaves the room) **vs.** local **Ollama** (free, private, weaker model).
   This gates the entire lab's feasibility and the privacy story. *Recommendation: local Ollama for labs
   if the small-model quality is adequate on these corpora; confirm.*
2. **LLM step stays in R (`mall`)?** Tool policy is R-primary / Python allowed. `mall` keeps the LLM step
   inside the tidytext pipe. Confirm R-only for the LLM step (no required no-code ChatGPT-web step).
3. **Retire the regression-on-cluster-scores bridge** (Q from §4)? Recommend dropping it from the core;
   confirm, or specify a light text→outcome tie-in to keep.
4. **LDA depth.** Topic modeling is the heaviest classical method for beginners. Keep LDA full, or keep it
   *light/conceptual + optional* and lead with sentiment + classification (more intuitive)? *Recommend
   light LDA.*
5. **Corpus reuse flag (A2 + exam).** Per the locked P-2, **A2 does NOT use the hotel reviews** — it uses
   the App Store *category regression* slices — so **there is no A2 conflict**. (The audit S-13 had merely
   *floated* hotel-review slicing as an A2 option, which P-2 did not adopt.) **However**, the **final exam
   Q4 (P-4) reuses the hotel-review corpus.** If the M-1 lab uses the same 575-review set, students could
   memorize it. *Decision: use a different review subset/corpus for the exam than for the lab, or accept
   the overlap?*
6. **Is there a graded text-mining deliverable** (a short AI-Collaboration micro-assignment built from the
   `_shared_library/templates/`), or lecture + in-class exercise only this module? Affects Stage-2 scope.
7. **Corpora as historical snapshots — confirm** keep-and-date (no re-collection now), as locked.

---

## Stage-2 preview (NOT started)
On approval, Stage 2 authors: the migrated tidytext lecture notes + script; the LLM-use notes; the
compare-and-verify lab (exercise + solution); the `_currency/tm_llm_tools.md` volatile file; and any
graded micro-deliverable (Q6) — each as drafts in `02_working/`, following the hand-first → AI-verify
spine and the B&W production standard.
