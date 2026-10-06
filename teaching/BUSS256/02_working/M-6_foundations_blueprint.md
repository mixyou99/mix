# M-6 — First-Half Foundations Blueprint (Weeks 1–5 / Seminars 1–5) · STAGE 1 (design only)

*Change log: Jun 18, 2026 — created. Design blueprint for professor approval. **No lecture notes, scripts,
slides, or exercises authored here** — content is Stage 2, after approval. **M-6 uses its OWN template**
(currency refresh + light conceptual framing + a verification-mindset seed), **not** the technique-module
pipeline.*

**Inputs read:** roadmap M-6 row; audit findings **F-2, F-3, F-5, F-6, F-9, F-13, F-20** + the assets
**F-8/F-10/F-14/F-15/F-17**; the first-half source (Seminars 1–5 decks + R exercises + the A1 fluency test);
the P-series (P-0a's Seminar-1 grading fixes; D-3's A1 redefinition — see §4); COURSE_PROFILE §3 (two
literacies) + §4 (hand-first → AI-verify); the M-5 on-ramp (**M-6 seeds it; M-5 operationalizes it**);
CURRENCY_LOG.

**What makes M-6 different (build to this):**
- **AI-TOOL-FREE.** Weeks 1–5 precede the Week-7 on-ramp. **No Ollama, no `ellmer`, no `qwen`, no `_currency`
  LLM file, no validation run, no "where the model slips" section** (see §5 — the absence is *intentional*).
  M-6 builds the **"hand"** half of hand-first → AI-verify: the skills students must own before they can
  verify any AI later.
- **Refresh, not redesign or build.** The first half is the **most-developed, cleanest** part of the course.
  The work is **currency fixes + hygiene + a light conceptual seed** — protect the assets, don't rewrite.
- **Biggest module:** 5 weeks / ~9 sessions → **5 sub-units**, not a monolith.
- **Statistics scope = DESCRIPTIVE only** (summary, correlation, basic-stats functions). **Inferential stats
  (p-values, hypotheses) is NOT in M-6** — it lives in M-2. *(Do not add p-values here.)*

---

## 1. Learning objectives (tool-free; ladder to the two literacies + the seeded third)
By the end of the first half a student can:
1. Explain **data literacy** and **algorithm literacy**, and recognize that **working with AI is a third
   literacy** they'll build after the midterm (conceptual seed — no tools). → the two literacies + framing.
2. Write and read **basic R** — values, variables, vectors, **data frames**, functions; install and load
   **packages**. → *algorithm literacy*.
3. **Import, manage, clean, and filter** data in R; compute **summary statistics and correlation**; handle
   **missing values, outliers, normalization, and log transforms**. → *algorithm + data literacy*.
4. Judge whether **data is fit for a question** (sources, types, quality) — the data-literacy core. → *data literacy*.
5. **Check their own work by hand** — "how would I know this output is right?" — the **verification mindset**
   that the Week-7 AI on-ramp will turn into hand-first → AI-verify. → *verification* (seeded, tool-free).

---

## 2. Sub-unit outline (Weeks 1–5)
*Five sub-units. For each: the content, what's kept/refreshed, and where the two seeds land.*

| Sub-unit | Content (existing) | Kept / Refreshed | Seed placement |
|---|---|---|---|
| **A — Wk 1: Literacy & course framing** | Course overview; **data + algorithm literacy**; data-analytic thinking; concepts of data science. | **Keep** the two-literacies opening (F-2); **refresh** the McKinsey "52%" stat (F-3) and the "Drowning in Data" scale stats (F-5); P-0a already fixed the Seminar-1 grading script. | **Conceptual-AI seed here:** extend two literacies → **"the third literacy: working with AI"** (conceptual only; §7). |
| **B — Wk 2: R basics & data structures** | Basics in R; values & variables; vectors; **data structures / data frames**. | **Keep** the solid syntax-first exercise (F-8); **refresh** the broken `<-` glyph in the Seminar-3 tutorial PDF (F-9 — *critical for beginners*). | **Verification-mindset seed:** add "how would you check this result is right?" prompts to the hand exercises (§7). |
| **C — Wk 3: Analytics overview + functions/packages** | Data for business problems; data-mining applications; **functions in R; package install/library**. | **Keep** the `_Updated` deck (best-maintained, F-11) + the six-techniques map (F-12); **refresh** the **R-install URLs** (rstudio.com → **Posit**, F-20) and any dead media (F-6). | Verification-mindset prompts in the functions exercise. |
| **D — Wk 4: Data Management I** | Data types; **import/export**; **data summary & correlation**; descriptive-stats functions; missing values, outliers, normalization. | **Keep** the strongest data-literacy content in the course (F-14); **refresh** dataset framing (F-13 — see below). | Verification-mindset on the summary/correlation reads ("does this correlation make sense?"). |
| **E — Wk 5: Data Management II + A1** | Data cleansing & filtering; the **airbnb** merge→clean→normalize→correlate exercise; **A1** in-class R-fluency test. | **Keep** the airbnb exercise (F-15) + the A1 fluency test (F-17); **relabel** the App Store data as a dated historical snapshot (F-13); **resolve** A1's status (§4). | A1 **is** the verification/hand-skills checkpoint (no AI — §4). |

*(Wk 6 = holiday; Wk 7 = M-5 visualization, which operationalizes the on-ramp; Wk 8 = midterm.)*

---

## 3. KEPT / REFRESHED / ADDED — *mostly KEPT + REFRESHED* (unlike the technique modules)
*M-6 has **no MIGRATE** (clean code) and almost no from-scratch ADD — it's a refresh.*

| Disposition | Item | Action |
|---|---|---|
| **REFRESHED** (currency/hygiene — the real work) | **F-9** Seminar-3 tutorial PDF renders `<-` as a broken glyph (`< ̶`) | **Regenerate the PDF** so the assignment operator is correct — *highest priority* (beginners copy-paste and error). |
| | **F-5** big-data scale stats ("Google 20 PB/day…") aged + undated | Replace with **current, dated** figures (or clearly date as "as of 20XX"). |
| | **F-3** McKinsey "52% of C-level" stat | **Verify figure + year**, cite, or update. |
| | **F-13** App Store flagship dataset (July 2013) | **Relabel as a dated historical snapshot** (per D-5; re-collection is a separate task). |
| | **F-20** R-install guides link `rstudio.com` | Update to **Posit** (`posit.co`); "RStudio (by Posit)." |
| | **F-6** dead embedded YouTube clip | Replace or remove. |
| **KEPT** (assets — protect, don't rewrite) | **F-2** two-literacies opening; **F-8** R-basics exercise; **F-10** data-frame/functions exercise; **F-14** data-management content; **F-15** airbnb exercise; **F-17** A1 fluency test | Keep as-is (the airbnb exercise is a named M-5 dependency). |
| **ADDED** (light, conceptual) | **The "third literacy" framing** (Wk 1, conceptual, tool-free); **verification-mindset prompts** woven into the hand exercises; a **forward-pointer** to Week-7 viz + the on-ramp | §7. |
| **ALREADY DONE** (P-series) | **F-1** Seminar-1 script grading errors | Fixed in **P-0a** (no action). |

---

## 4. The A1 reconciliation — revert to a NO-AI hand-skills check (governance DIFF for approval)
**The conflict:** **A1 is a Week-5 in-class assignment**, but AI isn't introduced until **Week 7**. D-3
redefined A1 as an "AI Collaboration mini-capstone" — **chronologically impossible** (Week-5 students haven't
met AI, haven't installed the tools). **Decision (settled): revert A1 to its original purpose — a no-AI,
in-class R hand-fluency checkpoint** (the pure "hand" skill, which fits Week 5 perfectly). Clean split: **A1 =
hand-skills (no AI, Wk 5); A2 = AI-collaboration capstone (later, post-on-ramp).** *(This also answers the
earlier "can't enforce no-AI in a laptop class" worry: A1 is in-class and precedes the tools entirely, so
enforcement is far simpler than for a take-home.)*

**This PARTIALLY REVISES the locked D-3.** Below is the governance **DIFF for your explicit approval — NOT
applied.** I have **not** edited any policy file.

```diff
--- 00_governance/GRADING_POLICY.md  (§A.1)
 | Assessment | AI level |
-| Individual assignment (A1) | **AI Collaboration** — individual AI-verification mini-capstone |
+| Individual assignment (A1) | **No AI** — in-class R hand-fluency check (Week 5, before the AI on-ramp) |
 | Group assignment (A2) | **AI Collaboration** — open group capstone |
 | Second-half in-class exercises | **AI Collaboration** |
 | Mid-term exam · Final exam | **No AI (secure)** |
@@
-- **The only secure, no-AI assessments are the proctored mid-term and final exams.** A1 is **no longer** a
-  no-AI check; it is an AI-Collaboration task in which the assessed skill is the student's hand-verification…
+- **The secure, no-AI assessments are the in-class A1 hand-fluency check (Week 5) and the proctored mid-term
+  and final exams.** A1 is a pure **hand-skills** checkpoint — it **precedes** the Week-7 AI on-ramp, so it
+  cannot be an AI task; A2 is the AI-collaboration capstone.
@@
-- **Ungraded formative checkpoints (design element).** In Weeks 2–3, one or two in-class **hand-first →
-  AI-verify** activities …
+- **Ungraded formative checkpoints (design element).** In Weeks 2–3, one or two in-class **AI-free
+  verification-mindset** activities ("check your own work by hand"); the **hand-first → AI-verify** version
+  *with tools* begins at the Week-7 on-ramp (M-5).
```

**Related governance item I'm surfacing (same calendar conflict — your call to include):** COURSE_PROFILE §4's
"Hand-first → AI-verify" subsection says the checkpoints "appear first … in **Weeks 2–3**." Weeks 2–3 are
**pre-Week-7**, so that should be reconciled the same way — **the Weeks 2–3 checkpoints are the AI-FREE
verification-mindset seed; the AI-tool version starts Week 7.** I recommend folding this into the same DIFF.
**Add all of this to the existing deferred cross-module reconciliation flag** (which already holds the "as we
did last module" calendar mismatch, the **M-3 on-ramp demotion**, and **M-5-is-now-first**) — to be applied
in one pass after approval. *(P-series ripple to note: P-0b/`03_final/` and the produced A2 docx describe A1
as "AI Collaboration"; those need the same A1 wording revert when applied — flagged, not edited.)*

---

## 5. NO `_currency` LLM file, NO validation run — *intentional*
M-6 is **AI-tool-free**, so — unlike M-1…M-5 — there is **deliberately**: **no `_currency/*_llm.md` file**, **no
`ellmer`/`qwen` code**, **no Stage-2-A qwen validation**, and **no "where the model slips" section.** The
*absence is the design*, not an omission. The only currency items M-6 touches are the **dated content** in §3
(stats, dataset label, URLs) — these go in the existing `CURRENCY_LOG.md` register, **not** a model file.

---

## 6. Dependency map — M-6 is the base everything stands on
- **Every later module** assumes M-6's **R basics** (values, vectors, **data frames**, functions,
  install/library) + **data import** (the `setwd`/load snippet).
- **M-4 clustering** → its `scale()` builds on **Wk 4–5 standardization/normalization**.
- **M-2 regression** → builds on **Wk 4 correlation** + **log transforms** (Wk 4–5).
- **M-5 viz** → **directly depends on the airbnb data cleaned in Wk 5** (named dependency).
- **A2** → depends on **Wk 5 data-management + the App Store data**.
- **M-6 ↔ MIDTERM (Wk 8) — the tightest dependency in the course.** The mid-term items I built in P-4
  (**MT-1…MT-6** on the medical-expenses data: variable quality, missing values, outliers, **correlation
  interpretation**, normalization reasoning) are **all first-half/M-6 content**, plus MT-7 (viz, from M-5).
  **M-6 must deliver exactly what the midterm tests** — confirm the Wk 4–5 data-management content covers the
  MT-1…MT-6 skills.

---

## 7. The conceptual-AI-seed design (light, tool-free, primes M-5)
Two seeds, both **without any AI tool**:
1. **Wk 1 — "the third literacy."** Extend the existing two-literacies opening (F-2): *"data literacy and
   algorithm literacy are the new reading and writing — and there's a third skill we'll build after the
   midterm: **working with AI**, which means directing it and **verifying** it."* One framing slide/section —
   **conceptual only, no tools.** It plants the *why* that M-5's Week-7 on-ramp then turns into the
   operational *how* ("hold the standard → direct → verify").
2. **Verification-mindset, woven into the hand exercises.** Add a light prompt to the existing R exercises:
   *"How would you check this output is right — by hand, without trusting the screen?"* (e.g., re-compute a
   summary stat, eyeball a correlation's sign, sanity-check a filtered row count). **No AI** — it builds the
   habit of holding your own standard, which is the exact muscle the later modules use to verify AI.
*Keep both light — M-6 plants the seed; M-5 (Week 7) operationalizes it.*

---

## 8. Open questions — need your decision before Stage 2
1. **The Weeks 2–3 checkpoint reconciliation (§4 "related item")** — fold the AI-free-verification-mindset
   reframe into the same governance DIFF as A1? *(Recommend yes — it's the same calendar conflict.)*
2. **Stage-2 scope (the big one — see the Stage-2 note below)** — do the lighter **targeted refresh**
   (currency-fix specs + the new Wk 1 framing + verification prompts + A1 reconciliation), leaving the
   well-developed existing decks/exercises otherwise intact? Or author **full new notes + scripts** for all
   five weeks like M-1…M-5? *(Recommend the targeted refresh — M-6 is the cleanest part of the course; don't
   rewrite what works.)*
3. **"Third literacy" framing depth** — one Wk 1 framing + a forward-pointer (light), or woven through? *(Recommend light.)*
4. **App Store data (F-13)** — relabel as a historical snapshot now, and coordinate the **D-5 re-collection**
   (which also affects M-2/A2) as a separate data task? *(Recommend relabel now.)*
5. **A1 reconciliation (§4 DIFF)** — approve the revert (A1 = no-AI hand-fluency check)?
6. **Scripts?** — the first half has existing scripts (e.g., the Seminar-1 script). Only the **new Wk 1
   third-literacy framing** clearly needs new spoken content; the rest are refreshes. Confirm M-6 doesn't
   re-author full scripts for all 9 sessions.
7. **Verification-mindset prompts** — confirm these are **added to** existing exercises (a light prompt each),
   not a rewrite of the exercises?

---

## Stage-2 shape (flagged — differs from M-1…M-5)
**There is no "Stage 2-A technical core + qwen validation"** (M-6 is AI-tool-free). Instead, **Stage 2 is a
refresh + reconciliation**, which I'd structure as:
- **2-A — Currency-refresh specs + verification seed:** a markdown doc giving the **exact before/after** for
  each dated item (F-9 glyph, F-5/F-3 stats, F-13 dataset label, F-20 Posit URLs, F-6 media), plus the
  **verification-mindset prompts** to insert into named exercises. *(The actual deck/PDF edits happen in the
  single production phase — Production Policy; here we draft the changes in markdown.)*
- **2-B — The new Wk 1 "third literacy" framing:** the one new piece of *authored* content (a short note +,
  if you want, a spoken segment in the locked tone), tool-free, priming M-5.
- **Plus the A1 governance reconciliation** (apply the approved §4 DIFF).
This is **lighter** than the technique modules' Stage 2 — by design, because M-6 is the part that already works.

---

*Cross-platform/B&W standards still apply to any produced student-facing material. The deferred cross-module
reconciliation flag now spans: the "as we did last module" calendar mismatch, the M-3 on-ramp demotion,
M-5-is-now-first, **the A1 revert, and the Weeks 2–3 checkpoint reframe** — one pass after all modules exist.*
