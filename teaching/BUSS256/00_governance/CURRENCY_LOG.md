# CURRENCY_LOG

*Change log: Jun 18, 2026 — registered undergrad_bigdata/_currency/reg_llm_tools.md (M-2 regression LLM interface).*
*Change log: Jun 18, 2026 — §B: added the local-Ollama LLM model policy (match model to task: text vs code).*
*Change log: Jun 18, 2026 — registered undergrad_bigdata/_currency/assocrules_llm.md (M-3 association-rules prompts; model shared from reg_llm_tools.md).*
*Change log: Jun 18, 2026 — registered undergrad_bigdata/_currency/clustering_llm.md (M-4 clustering prompts; model shared from reg_llm_tools.md).*
*Change log: Jun 18, 2026 — registered undergrad_bigdata/_currency/viz_llm.md (M-5 visualization prompts; model shared from reg_llm_tools.md).*
*Change log: Jun 18, 2026 — Production Phase A currency fixes (per M-6_currency_refresh_spec.md). APPLIED: F-13 App Store data relabeled as a historical snapshot (July 2013) in authored markdown (M-2_note_W11-1; P-2 already dated). LOCKED (text final; applies at artifact build): F-9 (Seminar-3 R tutorial — broken `<-` glyph + smart quotes corrected to ASCII; R paste-test gate at build), F-20 (RStudio→Posit, posit.co/download/rstudio-desktop/; CRAN unchanged — VERIFIED by direct fetch 2026-06-18), F-5 Option B (date the 2012 "Drowning in Data" figures as "circa 2012"; no new external number). HELD — NOT applied (await professor): F-3 (McKinsey "52% of C-level" — unverifiable), F-6 (dead Seminar-2 YouTube links — verify/replace). See _reference/ref_m6_*.md.*

Register of fast-moving content so it can be refreshed in one pre-semester pass
instead of re-touching the whole course. Anything model-, tool-, or
example-specific belongs here and should be authored into a course's
`_currency/` folder, not baked into the stable notes.

**Refresh rhythm:** run the pre-semester checklist (§C) ~2–3 weeks before the
term starts, and a lighter mid-semester check before the text-mining module.

*Change log: Jun 18, 2026 — added specific dated items found in the kickoff
content audit (§A rows below the seed line). See `undergrad_bigdata/02_working/01_audit_report.md`.*

---

## A. Register (BUSS256 pilot — seed)

| Item | Where it appears | Volatility | Last updated | Next review |
|------|------------------|-----------|--------------|-------------|
| Data-literacy stat (McKinsey "52% of C-level…") | Seminar 1 slides/script | Medium — verify figure & year | Fall 2025 | Before Spring 2027 |
| AI framing of literacy (ChatGPT/translation example) | Seminar 1 | High | Fall 2025 | Before Spring 2027 |
| Named AI tools & model versions | New AI modules | **Very high** | — | Each term |
| AI-assisted analytics workflow (prompts, screenshots) | Wk 9+ techniques | **Very high** | — | Each term |
| Text-mining: classical NLP vs. LLM approaches | Wk 14–15 | **Very high** | — | Each term |
| Company/case figures (Airbnb, Netflix, App Store, etc.) | Throughout | Medium | Fall 2025 | Before Spring 2027 |
| R packages / install instructions / online R resources | Wk 2–3, resources slide | Medium | Fall 2025 | Before Spring 2027 |
| External links (textbook viewer, tutorials) | Materials slides | Medium — link rot | Fall 2025 | Before Spring 2027 |
| **Found Jun 18, 2026 ↓ (specific instances from the audit)** | | | | |
| App Store flagship dataset — collected **Jul 2013** | S5 script; A1 admission ex.; recurs to exams | High — 12 yrs old | Fall 2025 | Re-collect or date as historical |
| Big-data scale stats (Google 20 PB/day, FB 2.5 PB, eBay 6.5 PB) — ~2012, undated | Seminar 2 "Drowning in Data" slide | High — off by orders of magnitude | Fall 2025 | Before Spring 2027 |
| `cars.csv` = mtcars (1973–74); `snsdata.csv` (2006); `protein.csv` (1970s) | Seminars 8-9 / 10-11 exercises | Medium — works, but dated vs. real-data style | Fall 2025 | Before Spring 2027 |
| Text-mining corpus (250 app descriptions **Apr–Aug 2012**) + 575 hotel reviews | Seminar 12 lecture + exercise | High — framing claims 2024/25 currency | Fall 2025 | Re-collect or date |
| Text-mining **tool roster** (SAS Text Miner, ClearForest, Teragram, Autonomy…) | Seminar 12 "Text-mining Tools" slide | **Very high** — ~2005–10, several defunct | Fall 2025 | Replace with current + LLM |
| A2 data "**1 Jan 2013**" (vs. "20 Jan 2013" in Common Mistakes); Statista **Nov 2019** evidence | A2 assignment / Tips deck | Medium | Fall 2025 | Before Spring 2027 |
| RStudio → **Posit** rebrand; `rstudio.com` URLs | R-install guides (Wk 2–3) | Medium — link rot | Fall 2025 | Before Spring 2027 |
| Dead embedded media (YouTube clip already gone) | Seminar 2 deck/script | Medium — link rot | Fall 2025 | Before Spring 2027 |
| Benchmark citations (small-N / link-volatile) — ⚠ re-verify | `02_working/02_benchmark_scan.md` + `_reference/` | High — confirm before student-facing use | Jun 18, 2026 | Before Spring 2027 |
| M-2 regression LLM interface (ellmer chat_ollama, system_prompt, lab prompts) | `undergrad_bigdata/_currency/reg_llm_tools.md` (model shared from `tm_llm_tools.md`) | **Very high** | Jun 18, 2026 | Each term + before Wk 10–11 |
| M-3 association-rules LLM prompts (apriori code-gen + interpret) | `undergrad_bigdata/_currency/assocrules_llm.md` (model/interface shared from `reg_llm_tools.md`) | **Very high** | Jun 18, 2026 | Each term + before Wk 9 |
| M-4 clustering LLM prompts (k-means/hclust code-gen + K + labels) | `undergrad_bigdata/_currency/clustering_llm.md` (model/interface shared from `reg_llm_tools.md`) | **Very high** | Jun 18, 2026 | Each term + before Wk 12–13 |
| M-5 visualization LLM prompts (ggplot code-gen + chart critique) | `undergrad_bigdata/_currency/viz_llm.md` (model/interface shared from `reg_llm_tools.md`) | **Very high** | Jun 18, 2026 | Each term + before Wk 7 |

## B. Authoring rule

In stable notes, refer to volatile items by a placeholder and keep the live
value in `_currency/`. Example: write "we use a current general-purpose AI
assistant (see `_currency/ai_tools.md`)" rather than hard-coding a model name in
the lecture note. This lets a single file swap update every reference.

**LLM model policy (local Ollama).** Match the model to the task; both run on the
same local Ollama. **TEXT** tasks (row-wise labeling / sentiment / classification
via `mall`) use the **text model** (`llama3.2` — see `tm_llm_tools.md`). **CODE**
tasks (generating / diagnosing R code via `ellmer` chat) use a **code model**
(`qwen2.5-coder` — see `reg_llm_tools.md`). Applies to all future modules.

## C. Pre-semester refresh checklist

1. Re-verify every statistic and its source year.
2. Update AI tool/model names and any screenshots to current versions.
3. Re-run AI-assisted workflow examples; confirm prompts still behave as
   described and outputs are still representative.
4. Refresh the text-mining module for the current NLP/LLM landscape.
5. Check all external links; replace dead ones.
6. Confirm case figures (company stats) are still current or clearly dated.
7. Update "Last updated" and "Next review" in the register above.
