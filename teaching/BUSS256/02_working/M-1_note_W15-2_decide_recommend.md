# Lecture Note — W15-2: Decide, recommend, and what this taught you

*Change log: Jun 18, 2026 — created (Stage 2-B, note 4 of 4). Lecture-note DRAFT for professor review.
Doubles as the Week-15 review. Markdown only (Production Policy).*

**Source-file map (production):** new synthesis/review content; replaces the old
regression-on-cluster-scores wrap-up in `Seminar 12_Text_Mining_Lecture.pdf`. Pairs with
`M-1_compare_verify_lab.md` Part D. **Model note:** model in `_currency/tm_llm_tools.md`; claims below are
the expected pattern, not one model's fixed output.

---

## Learning objectives
By the end of this session you can:
1. Decide **when the classical method is enough and when the LLM earns its keep**, and justify it. → **data + algorithm literacy**.
2. Turn a verified text analysis into a **business recommendation** for a real audience. → **data literacy**.
3. State the **limits** of an AI text analysis (validity, reliability) and how you'd guard against them. → **verification**.
4. Connect this module to the course's central idea: as machines do the execution, your value moves to **judgment and verification**. → the course thesis.

## The big idea (study-from explanation)
We've now done the full loop three times: count words, score sentiment, sort into categories — each time **classical first, LLM second, then verify.** This session steps back and asks the questions a manager actually cares about: *which tool should I use, what do I do about it, and how much should I trust it?*

**When is classical enough?** When you need transparency, reproducibility, and auditability — a number your boss (or a regulator) can trace. "What are guests talking about?" is answered perfectly well by frequency and TF-IDF, no AI required. Reaching for an LLM there adds cost and uncertainty for nothing.

**When does the LLM earn its keep?** When meaning depends on context the word list can't see — negation, sarcasm, mixed reviews, or sorting free text into business categories at scale. On our reviews, the LLM's value showed up exactly in the cases the lexicon fumbled ("rooms were not ready," "clean but tired"). But that value is only *realized* after verification — an unverified LLM answer is a guess with a confident voice.

**The decision rule you should leave with:** use the cheapest tool that answers the question; escalate to the LLM only when nuance demands it; and never ship an LLM result you haven't checked against a transparent baseline or a hand-labeled gold set.

**From analysis to recommendation.** The job isn't a sentiment score; it's a decision. The robust signal across the module is that guests **praise cleanliness** and **complain about room size** (and bathroom size/condition) — and that signal comes from the **transparent classical evidence** (top terms, TF-IDF). The LLM's per-review *classification* turned out **too noisy to lean on** (you saw that in Verify #2 — it mislabeled reviews like ID 25). So the frequency evidence, which we can audit, carries the decision. That's the lesson in miniature: **act on the tool you verified, not the one that sounded confident.** A good recommendation names the real problem (space, not cleanliness), proposes something concrete (storage/layout, honest size expectations in booking copy), and *cites the verified evidence* for it.

**Knowing the limits.** Two honest caveats belong in any such report. *Validity* — does the measure capture what we mean? We checked this with the gold-standard comparison (Verify #2). *Reliability* — is the result stable? We checked this with the repeat-run test, caching off. A confident analyst reports both, and flags the borderline cases that need a human.

## The thesis this module proves
Recall Seminar 1: automation moved the essential human skill from *doing the task* to *judging and verifying* it — that's why data and algorithm literacy matter now. This module is that thesis made concrete. The LLM can read 575 reviews in the time it takes you to read three. It did the **execution**. But every decision that mattered — what to ask, which categories, whether to believe the answer, what to recommend — was **yours**, and you could only make those decisions because you held a yardstick you understood. That is the whole course in one module: the machine executes; you direct, verify, and decide.

## When / how to use it (the keep-card)
- **Frequency / TF-IDF** → "what is this about / what's distinctive?" (transparent, no AI).
- **Lexicon sentiment** → an auditable baseline and the yardstick for the LLM.
- **LLM (`llm_sentiment` / `llm_classify` / `llm_extract`)** → context-sensitive reading and business-category sorting — *after* verification.
- **LDA** → exploratory structure discovery when you don't know the categories yet.
- **Always**: hand-first → AI-verify; report validity (gold standard) and reliability (repeat run).

## Common mistakes / how to verify
- **Reaching for the LLM by default.** If frequency answers it, you're done — don't add AI risk for free.
- **Reporting a score instead of a decision.** The deliverable is a recommendation with evidence, not a number.
- **Confusing "the model sounds sure" with "the answer is right."** Confidence is not accuracy; your verification is.
- **Misreading the sign.** Cleanliness is *praised* here; the complaint is *size*. Read sentiment, not just frequency.

## Key takeaways
- Use the cheapest tool that answers the question; escalate to the LLM only for genuine nuance — and only after verifying.
- A verified analysis becomes a recommendation when you name the real problem, propose a concrete action, and cite the evidence.
- Always report **validity** (vs. a gold standard) and **reliability** (repeat-run, caching off).
- The module's real lesson is the course's: machines execute; **humans direct, verify, and decide.**
