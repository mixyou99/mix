# 02 — External Benchmark Scan (BUSS256)

*Change log: Jun 18, 2026 — created. Synthesizes a web scan of how reputable programs teach
intro/undergraduate business analytics & data science in the AI era, to inform (not dictate)
the BUSS256 redesign. All sources accessed Jun 18, 2026; per-source notes in
`undergrad_bigdata/_reference/`.*

---

## Scope, method, and a caution before you rely on this

I searched authoritative sources — university course pages and teaching-centre guidance,
the Australian regulator (TEQSA), and peer-reviewed/edu venues — across the five themes the
kickoff specified, and wrote one dated note per source to `_reference/`. Forums and SEO
listicles were excluded.

**Evidence caveat (read first).** Two of the most directly useful sources are *small-N case
studies*, not causal evidence: the "Vibe Coding" NLP course (N=19) and the UCI software-design
report (no learning-outcome measurement). Cite them as **design precedents**, not proof of
effect. A few tool-specific references (Copilot/GPT-3.5-era screenshots) will date even though
the pedagogy transfers. **Recommendation:** before any of these citations goes into
student-facing material, re-verify the link and publication date in the pre-semester refresh
pass (this is registered in `CURRENCY_LOG.md`). Items flagged ⚠ below are the ones to
re-confirm.

**The single clearest signal across every theme:** *teach the fundamentals without AI first,
then layer AI on top, and grade the process (verification + interpretation), not the output.*
That is exactly BUSS256's confirmed Decision B. The external literature does not ask us to
change direction; it gives us **concrete mechanisms** to implement it and **named failure modes**
to avoid.

---

## Theme 1 — Verification-first / scaffolding (detecting plausible-but-wrong AI output)

**Adopt:**
- **Fundamentals before AI.** The strongest, most consistent finding. UCI: "teach some basic
  design first so students become sensitive to the topic before introducing GenAI." The
  "Vibe Coding" NLP paper names the risk as a *bootstrapping problem* — students need
  foundational knowledge to evaluate LLM output. → Validates BUSS256's first-half no-AI build.
- **Concrete verification moves to teach** (CHI 2024 study of how analysts verify AI analyses):
  re-perform the AI's data operations directly and compare; reconcile explanation ↔ code ↔
  output ↔ data table. Verification draws on *data-operation literacy* (transferable from
  spreadsheets/SQL), not deep language fluency — good news for an R beginner course.
- **"Compare AI to a hand-solved answer"** (UCI): students solve a problem by hand, then watch
  the AI on the same problem, building a yardstick for its failure modes
  (runnable-but-semantically-wrong code, dropped context, fabricated complexity). → Direct fit
  for S-1/S-6/S-7/S-19.

**Avoid:** the "skip syntax, let AI do the low-level work" headline (Porter/Zingaro popular
framing) — fine for project velocity, but if taken literally it erodes the verification skill
that is BUSS256's whole point. Keep verification as the deliberate learning target.

*Sources:* CHI 2024, "How Do Analysts Understand and Verify AI-Assisted Data Analyses?"
(dl.acm.org/doi/10.1145/3613904.3642497); UCI experience report (arxiv.org/abs/2506.21703,
2025); ⚠ "Vibe Coding" NLP (arxiv.org/abs/2602.01919, 2026); UVA Teaching Hub, "Generative AI
in Statistics" (teaching.virginia.edu, upd. Dec 2024).

---

## Theme 2 — Grading process, verification, interpretation (prompt logs, reflection)

**Adopt:**
- **A concrete, reusable grading split.** "Vibe Coding" (King Saud, Fall 2025, N=19) graded
  **Code Output 20% (functionality only) / Prompt Log 30% (clarity, iteration, completeness) /
  Critical Reflection 50% (conceptual understanding)**; students rated it fair (M=4.2/5). A
  ready skeleton for BUSS256's AI-assisted rubrics — and it aligns with GRADING_POLICY §B
  (framing / direction / verification / interpretation / reflection).
- **Three-part submission** (output + graded conversation log + written reflection) — UCI,
  deployed at 179 students.
- **Incentive lesson (important):** at UCI, when prompt logs were **graded**, 36/36 teams
  submitted; when optional, participation collapsed to ~15. **Attach points to process
  artifacts or they won't happen.** → Directly informs the A2 redesign (S-17).
- **Off-the-shelf scaffolds** (FIU teaching centre): "Critical AI Analysis" (generate, then
  critique accuracy/bias/sources), "Portfolio + AI Reflection," and an "AI usage statement" as
  the disclosure instrument — maps onto GRADING_POLICY §D authenticity artifacts.

**Avoid:** rewarding *breadth over depth* — UCI found only ~30% of AI conversations had 4+
prompts when a "do 10 conversations" rule was used; prefer fewer, deeper, targeted dialogues.
Also: students may use AI to **write the reflection itself** — pair reflection with a secure
in-class check (Theme 3).

*Sources:* ⚠ "Vibe Coding" NLP; UCI report; FIU CAT, "Design Strategies for Assessing Learning
with AI" (cat.fiu.edu) ⚠ (no explicit revision date — confirm before deployment).

---

## Theme 3 — Authenticity / integrity models for MANDATED (not forbidden) AI

**Adopt:**
- **The two-lane approach (University of Sydney, upd. Apr 2026)** — the most authoritative
  institutional architecture. *Lane 1* = secure/supervised "assessment **of** learning"
  (proctored; may exclude AI). *Lane 2* = open, AI-scaffolded "assessment **for/as** learning,"
  graded on process alongside product. Genuine understanding is assured by **pairing a Lane-2
  AI-assisted task with a Lane-1 secure check** — *not* by AI detection. This is a precise fit
  for BUSS256: the in-class A1 fluency test and the proctored midterm/final are Lane 1; A2 and
  the AI-assisted second-half exercises are Lane 2. It also gives a principled home for
  GRADING_POLICY §D's "in-class verification checkpoints."
- **AIAS v2 (Perkins/Furze et al., JUTLP; mod. Mar 2026)** as a per-assignment disclosure
  vocabulary: five levels (No AI → AI Planning → AI Collaboration → Full AI → AI Exploration).
  Principle: "security is only possible at Level 1, but **validity is possible throughout** —
  design for validity, not policing." Use the levels to label each BUSS256 assessment
  explicitly (A1 = No AI; A2 = AI Collaboration; etc.).
- **TEQSA Gen-AI Knowledge Hub** as a source-of-sources (the Australian regulator), indexing
  vetted institutional frameworks — lets the redesign cite sector consensus rather than one
  opinion.

**Avoid:** detection-/"AI-proofing"-based strategies. Sydney is explicit: humans can't reliably
detect good AI use, and "any unenforceable restriction damages assessment validity." This
directly supports inverting BUSS256's current AI bans (X-2) rather than trying to police them.

*Minor tension to reconcile:* AIAS labels *per-task* AI levels (useful for clarity), while
Sydney treats within-task tool restrictions as *guidance, not enforcement*. For BUSS256, use
AIAS labels to set expectations and Sydney's Lane-1 checks to assure learning — don't promise
to police *which* tool a student used inside an open task.

*Sources:* Sydney two-lane FAQ (educational-innovation.sydney.edu.au, upd. 21 Apr 2026); AIAS v2
(leonfurze.com / aiassessmentscale.com, mod. Mar 2026); TEQSA hub (teqsa.gov.au, resources
through Jan 2026).

---

## Theme 4 — R, Python, and AI assistants coexisting in a beginner course

**Adopt:**
- **CS1-LLM (Porter & Zingaro, UC San Diego; ITiCSE 2024)** — the leading reference design for
  a *beginner* course that **mandates** an AI assistant. Reframes the course around skills
  students still need *with* AI: **code reading over code writing, prompting, testing,
  debugging, decomposition, using AI to explain code.** Crucially uses a **split-assessment
  model** — foundational skills in proctored no-AI exams; large authentic projects (incl. a
  data-science unit on CSVs and testing) done with AI. A concrete two-lane implementation in a
  coding course; materials are CC BY-NC-SA (reusable).
- **UVA's R + GenAI lab pattern** (grounded in Ellis & Slade, *J. Statistics & Data Science
  Education*, 2023): AI generates starter R code (e.g., a `ggplot` histogram) → students
  **verify it, adapt it to a dataset the AI doesn't know, and extend it.** A ready template for
  the BUSS256 second-half exercises (S-1/S-6/S-7) and for the missing Week-7 viz module (V-1).

**Avoid:** importing the Python/CS-major "skip syntax" emphasis wholesale into an R/business
verification-first course. CS1-LLM's own honest finding — students value AI but worry about
**overreliance** — is the argument for keeping BUSS256's secure no-AI skill checks (A1, exams).

*Sources:* CS1-LLM (teachcswithai.org; paper dl.acm.org/doi/10.1145/3649217.3653584, 2024);
UVA collection + Ellis & Slade (tandfonline.com/doi/full/10.1080/26939169.2023.2223609, 2023).

---

## Theme 5 — Text mining / NLP with classical methods + LLMs at intro level

This theme maps onto the audit's highest-priority module (S-10…S-14).

**Adopt:**
- **A vetted classical+LLM lab sequence** (⚠ "Vibe Coding" NLP, King Saud): tokenization &
  vocabulary → POS/NER → text classification (NB/LogReg/SVM/XGBoost) → n-gram LMs → word
  embeddings → fine-tuning transformers → in-context learning, plus a bank of **reflection
  questions AI can't shortcut** ("which model performed best and why?", "what trade-offs if you
  change `min_count`?"). The same paper supplies the 20/30/50 grading split (Theme 2).
- **tidytext (Silge & Robinson, *Text Mining with R*, 2017; pkg maintained through 2025)** as
  the R/tidyverse foundation for the classical layer BUSS256 already teaches — tokenization,
  **TF-IDF**, n-grams, sentiment, **LDA topic modeling** — and a modern replacement for the
  brittle `tm`/`gsub` idiom flagged in S-14. The key pedagogical move: classical methods become
  the **verification yardstick** for LLM text output (verify-first applied to NLP, exactly S-12).

**Avoid:** treating tidytext as the *whole* unit (it predates LLMs — pair it with an LLM layer);
and conversely jumping straight to LLM-only text analysis with no classical base, which leaves
students unable to verify the LLM.

*Sources:* ⚠ "Vibe Coding" NLP (arxiv.org/abs/2602.01919); Text Mining with R / tidytext
(tidytextmining.com, 2017, maintained 2025).

---

## What this means for BUSS256 (one-paragraph synthesis)

The sector has converged on BUSS256's own design: build skill without AI, then mandate AI and
grade the *process*. Concretely, the redesign should (a) **invert the AI bans** and adopt a
two-lane structure — A1 + proctored exams as secure Lane-1 checks, A2 + second-half exercises as
open Lane-2 AI work; (b) **grade process artifacts with real points** (prompt log + verification
step + reflection), using the 20/30/50 split as a starting rubric and the existing A2 "Common
Mistakes" rubric as the interpretation/critique criteria; (c) **label each assessment's AI level**
(AIAS) so students know the rules; and (d) **rebuild the text-mining module as a classical→LLM
"compare-and-verify" lab** on the same corpora, with tidytext as the modern classical base. None
of this requires abandoning R or the existing exercises — it layers on top of them.

---

## Reference notes created (`undergrad_bigdata/_reference/`)
`ref_sydney_two_lane.md` · `ref_aias_v2_furze.md` · `ref_teqsa_assessment_reform_hub.md` ·
`ref_cs1_llm_porter_zingaro.md` · `ref_uva_genai_statistics.md` · `ref_vibe_coding_nlp.md` ·
`ref_genai_software_design_uci.md` · `ref_analysts_verify_ai_chi2024.md` ·
`ref_fiu_assessing_learning_with_ai.md` · `ref_tidytext_mining_r.md`

## Sources
- University of Sydney — Two-lane approach FAQ (upd. Apr 21, 2026): https://educational-innovation.sydney.edu.au/teaching@sydney/frequently-asked-questions-about-the-two-lane-approach-to-assessment-in-the-age-of-ai/
- Furze et al. — AI Assessment Scale v2 (mod. Mar 2026): https://leonfurze.com/2024/08/28/updating-the-ai-assessment-scale/ · https://aiassessmentscale.com/
- TEQSA — Gen-AI Knowledge Hub: https://www.teqsa.gov.au/guides-resources/higher-education-good-practice-hub/gen-ai-knowledge-hub
- Porter & Zingaro — CS1-LLM (ITiCSE 2024): https://www.teachcswithai.org/ · https://dl.acm.org/doi/abs/10.1145/3649217.3653584
- UVA Teaching Hub — Generative AI in Statistics (Dec 2024): https://teaching.virginia.edu/collections/generative-ai-in-statistics
- Ellis & Slade — *J. Statistics & Data Science Education* (2023): https://www.tandfonline.com/doi/full/10.1080/26939169.2023.2223609
- ⚠ "From Code-Centric to Concept-Centric: Teaching NLP with LLM-Assisted Vibe Coding" (2026): https://arxiv.org/abs/2602.01919
- UCI — GenAI in software-design teaching (2025): https://arxiv.org/abs/2506.21703
- CHI 2024 — Verifying AI-assisted data analyses: https://dl.acm.org/doi/10.1145/3613904.3642497
- FIU CAT — Assessing Learning with AI ⚠ (confirm date): https://cat.fiu.edu/resources/teaching-with-ai/design-strategies-for-assessing-learning-with-ai/
- Silge & Robinson — *Text Mining with R* / tidytext (2017, maint. 2025): https://www.tidytextmining.com/
