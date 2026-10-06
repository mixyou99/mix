# Lecture Note — W14-2: Meet the LLM (sentiment, and the first verification)

*Change log: Jun 18, 2026 — created (Stage 2-B, note 2 of 4). Lecture-note DRAFT for professor review.
Markdown only (Production Policy).*

**Source-file map (production):** new content (the existing Seminar 12 has no LLM); sits after the
foundations note and before the structure note. Pairs with `M-1_compare_verify_lab.md` Parts A3/B/C1–C2.
OS-dependent steps (starting Ollama) → `M-1_ollama_setup_guide.md`; file loading →
`_shared_library/snippets/setwd_load_data.md`. **Model note:** the local model is named in
`_currency/tm_llm_tools.md`; LLM behavior below is the *expected pattern*, not one model's fixed output.

---

## Learning objectives
By the end of this session you can:
1. Measure sentiment with a classical **lexicon** (a word list) and explain exactly how it decides. → **algorithm literacy**.
2. Run an LLM on the *same* reviews with `llm_sentiment` and describe how its judgment differs from counting words. → **algorithm literacy**.
3. **Verify** the LLM against the classical baseline: compute agreement, find the disagreements, and explain *why* they happen. → **verification** (the core skill).
4. Decide which result to trust for a specific business question. → **data literacy**.

## The big idea (study-from explanation)
Last session you built a yardstick. Today you meet the thing we'll measure with it.

First, the classical way to score sentiment: a **lexicon**. A lexicon is just a labeled word list — for example, the *bing* lexicon tags thousands of words as "positive" or "negative." To score a review, we count its positive words and its negative words and subtract. "Clean, comfortable, lovely" → positive; "small, dirty, broken" → negative. It is beautifully transparent: you can audit every point. But it has an obvious blind spot — **it reads words, not meaning.** "The room was *not* clean" contains the positive word "clean," so a naive counter leans positive. It can't see negation, sarcasm, or "clean *but* tired."

Now the LLM. A large language model has read enormous amounts of text and learned how words combine, so it reads a review more like a person does — it handles "not ready," "spotless despite," "comfortable if cramped." In R we don't talk to it through a chat box; we use the **`mall`** package, which adds the LLM as one more verb in your tidyverse pipe. `llm_sentiment(column)` sends each review to the local model on your laptop and returns a `positive` / `negative` / `neutral` label in a new column. Same data frame, same pipe — the model just does the labeling.

Crucial framing: the LLM is **not** a more-accurate calculator. It is a *probabilistic reader*. It is usually better than the lexicon on nuance, and occasionally confidently wrong. That's the whole reason we keep the yardstick.

## Worked example (our real corpus)
We work on a **small sample of 25 reviews** so the local model runs fast and we can read every case.

**Step 1 — classical sentiment (the yardstick):**
```r
library(tidyverse); library(tidytext)
reviews  <- read_csv("room_review.csv")
sample25 <- reviews |> slice_head(n = 25)
bing <- get_sentiments("bing")               # bundled with tidytext (no download)

classical_sent <- sample25 |>
  unnest_tokens(word, Comments) |>
  inner_join(bing, by = "word") |>
  count(ID, sentiment) |>
  pivot_wider(names_from = sentiment, values_from = n, values_fill = 0) |>
  mutate(net = positive - negative,
         classical = if_else(net >= 0, "positive", "negative"))
```
The lexicon labels each review purely by its words, so reviews whose sentiment lives in *phrasing* — negation, contrast, hedging — rather than in single dictionary words come out as **"ties"** (no sentiment word, or equal positives and negatives). Hold onto that blind spot; it's about to matter.

**Step 2 — the LLM on the same 25** *(make sure Ollama is running — see the setup guide; macOS shows a menu-bar icon, Windows a system-tray icon):*
```r
library(mall); library(ellmer)
chat <- chat_ollama(model = MODEL,                 # MODEL → _currency/tm_llm_tools.md
                    params = params(seed = 100, temperature = 0))
llm_use(chat)

llm_sent <- sample25 |> llm_sentiment(Comments)    # adds .sentiment
```
*Status: the `mall` + Ollama connection and `llm_sentiment` are confirmed working on the instructor's machine; exact labels vary by model — read the pattern, not fixed values.*

**Step 3 — Verify #1 (the point of the session):**
```r
compare <- llm_sent |>
  left_join(classical_sent |> select(ID, classical), by = "ID") |>
  mutate(agree = classical == .sentiment)

mean(compare$agree, na.rm = TRUE)                  # overall agreement
compare |> filter(!agree) |> select(ID, classical, .sentiment, Comments)
```
**The headline number.**

> **Classical–LLM sentiment agreement = 48% (12 of 25).** The two methods **disagree on 13 of 25 reviews** — and in those disagreements the LLM is *usually (not always)* the better read. In plain terms: **the transparent classical method, used alone, would be wrong about half the time on these reviews.** That is the case for verification, in one number.

Here is every disagreement, read by hand (excerpts verbatim from `room_review.csv`):

| ID | Review excerpt | Classical (bing) | LLM | Cause | Better read |
|----|----------------|:---:|:---:|----|:---:|
| 1 | "could **not** recommend a restaurant… very **limited** choices" | positive | negative | negation + complaint | LLM |
| 3 | "quiet, clean… service was **adequate**" | positive | neutral | hedge ("adequate") | borderline |
| 6 | "Concierge desk called… to ask if we needed assistance" | tie | positive | implicit positive (no sentiment word) | LLM |
| 10 | "Our rooms were **not ready**, promised… a later time" | positive | negative | negation | LLM |
| 14 | "smoking room, **but** entirely **acceptable**… faint smoke odor" | negative | positive | qualified ("but acceptable") | LLM |
| 15 | "Rooms… are **very small**, as is the double bed" | tie | negative | implicit negative | LLM |
| 17 | "this was **small** for a double… small rooms" | tie | negative | implicit negative | LLM |
| 18 | "fine **if** bland, comfortable **if** … cramped… **but** … distant" | positive | neutral | qualified / mixed | LLM |
| 19 | "tea kettle and the tea and cream is provided" | tie | positive | implicit positive (amenity) | borderline |
| 20 | "room was **clean but tired**" | positive | negative | qualified ("but tired") | LLM |
| 21 | "upgraded… **but** wall paper… **unstuck**… furniture worn" | positive | negative | mixed / complaint | LLM |
| 22 | "quiet apart from the **hum of the minibar**" | positive | neutral | mild qualifier | borderline |
| 23 | "**packed to capacity** with **queues** at the food buffets" | tie | negative | implicit negative (crowding) | LLM |

*Observed with the current local model (see `_currency/tm_llm_tools.md`) on reviews 1–25; the exact agreement and the borderline calls shift if the model changes — re-run and re-read, don't memorize the number.*

For each disagreement, name the cause — **negation, mixed, qualified ("but"/"if"), implicit (no sentiment word), or sarcasm** — and decide which label is actually right *by reading the text*. Notice the shape: the lexicon's "ties" (6, 15, 17, 19, 23) are reviews whose sentiment has no dictionary word, and its confident "positives" (1, 10, 20, 21) are often complaints in disguise. Trust neither tool blindly — that's the whole point.

## When / how to use it
- Use the **lexicon** when you need a transparent, reproducible, auditable score, or as the baseline to check the LLM.
- Use the **LLM** when sentiment depends on context the word list can't see — but only **after** you've verified it on a labeled sample.
- For a real decision ("are guests happy?"), report the LLM result *with* its agreement against the classical baseline, not on its own.

## Common mistakes / how to verify
- **Taking the LLM at face value.** Always run Verify #1; the disagreements are where the learning (and the risk) lives.
- **Reading the LLM the wrong way too.** Sometimes the LLM over-reads a neutral, logistics-only review ("room was ready") as positive. Verify against the text, not against the tool you like.
- **Forgetting Ollama is running.** A "connection refused" error means the app isn't open — see the setup guide (menu bar on macOS / system tray on Windows).
- **Expecting identical numbers to the instructor's.** The model is probabilistic; your job is to explain the *pattern* of divergence, not match a number.

## Key takeaways
- A lexicon counts sentiment words — transparent, but blind to negation, mixed, and context.
- **On these 25 reviews the two methods agreed only 48% of the time** — classical-only would be wrong about half the time. That low number *is* the reason verification isn't optional.
- `llm_sentiment` reads meaning — usually better on nuance, sometimes wrong, always probabilistic.
- **Verification = agreement + reading the disagreements + explaining why.** The classical yardstick is what makes the AI's answer trustworthy (or not).
