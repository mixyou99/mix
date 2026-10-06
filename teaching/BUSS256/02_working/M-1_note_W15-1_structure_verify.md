# Lecture Note — W15-1: Finding structure, and the capstone verification

*Change log: Jun 18, 2026 — created (Stage 2-B, note 3 of 4). Lecture-note DRAFT for professor review.
Markdown only (Production Policy).*

**Source-file map (production):** modernizes the clustering/structure portion of
`Seminar 12_Text_Mining_Lecture.pdf` (term clustering → LDA + LLM classification); the
regression-on-cluster-scores step is retired (blueprint §4 / open Q3). Pairs with
`M-1_compare_verify_lab.md` Parts A4/B2–B3/C2–C4. OS steps → `M-1_ollama_setup_guide.md`; loading →
`_shared_library/snippets/setwd_load_data.md`. **Model note:** model named in `_currency/tm_llm_tools.md`;
behavior below is the expected pattern.

---

## Learning objectives
By the end of this session you can:
1. Discover themes in a corpus two ways — a classical **topic model (LDA)** and the LLM's **classification** into categories you define — and explain how each decides. → **algorithm literacy**.
2. **Extract** specific information from text classically (keywords) and with `llm_extract`. → **algorithm literacy**.
3. Run the **capstone verification**: hand-label ~20 reviews, compare the LLM to your labels, and measure accuracy. → **verification** + **data literacy**.
4. Check **reliability**: run the LLM more than once and report whether it's stable. → **verification**.

## The big idea (study-from explanation)
So far we've counted words and scored sentiment. Now we ask a richer question: *what categories of things are guests talking about, and can we sort each review into them?*

The classical route is a **topic model**, and the standard one is **LDA** (Latent Dirichlet Allocation). The intuition — and intuition is all you need here — is that LDA looks at which words tend to co-occur across documents and proposes a small number of "topics," each being a cluster of words that travel together. You tell it how many topics to look for; it hands back word-bundles you then interpret. It's powerful but fuzzy on short texts, and *you* must name the topics. We'll keep LDA **light**: enough to see what data-driven structure looks like, not a deep dive.

The LLM route is **classification**: you define the categories that matter to *your* business question — say cleanliness, room size, staff, location, value — and `llm_classify` reads each review and assigns one. The contrast is the lesson: LDA finds whatever structure is *in the data* (and you interpret it afterward); the LLM sorts text into *your* human-meaningful boxes (no interpretation step, but you must trust its reading). Neither is automatically right.

There's also **extraction** — pulling a specific thing out of text. Classically you'd grep for keywords; with `llm_extract` you ask the model to pull, say, "the specific complaint." Same hand-first → AI-verify logic applies.

Two new habits this session. First, the **capstone verification**: instead of trusting agreement loosely, you create a small **gold standard** — you hand-label ~20 reviews yourself — and measure how often the LLM matches it. That's how real practitioners validate an LLM before trusting it at scale. Second, **reliability**: an LLM is probabilistic, so the same input can give different answers on different runs. You must *check* that, not assume it.

## Worked example (our real corpus)

**Classical structure (light LDA):**
```r
library(tidyverse); library(tidytext); library(topicmodels)
reviews <- read_csv("room_review.csv")
tidy <- reviews |> unnest_tokens(word, Comments) |> anti_join(stop_words, by = "word")

dtm <- tidy |> count(ID, word) |> cast_dtm(ID, word, n)
lda <- LDA(dtm, k = 3, control = list(seed = 100))
tidy(lda, matrix = "beta") |>
  group_by(topic) |> slice_max(beta, n = 6) |> arrange(topic, -beta)
```
On our corpus, three topics land loosely on **(1) room size/space, (2) cleanliness/condition, (3) location, breakfast & service.** Notice you had to *read* the word-bundles to name them — that's the interpretation step LDA always demands.

**LLM classification into business categories** *(Ollama running — see setup guide):*
```r
library(mall); library(ellmer)
llm_use(chat_ollama(model = MODEL, params = params(seed = 100, temperature = 0)))  # MODEL → _currency

sample25 <- reviews |> slice_head(n = 25)
sample25 |> llm_classify(Comments,
  labels = c("cleanliness", "room size", "staff", "location", "value"))   # adds .classify
sample25 |> llm_extract(Comments, labels = "the main complaint")          # adds .extract
```
*Status: `llm_classify`/`llm_extract` use the confirmed `mall` interface; outputs vary by model — read the pattern.* In the real run the classification was **noticeably noisy** — it did **not** cleanly sort reviews into room-size/cleanliness, and several were miscategorized. That noise is not something to hide; it is exactly why you build a hand-labeled gold standard before trusting the LLM at scale. Real misclassifications from the run:

| ID | Review (excerpt) | LLM said | Should be | Why it slipped |
|----|------------------|:---:|:---:|----|
| 1 | "could not recommend a **restaurant**… limited choices" | cleanliness | food / location | no cleanliness content — the model guessed |
| 10 | "rooms were **not ready**, promised… a later time" | value | staff / service | a service failure, not a price point |
| 25 | "comfortable… well maintained by housekeeping **staff**" | staff | room | latched onto the word "staff"; the review is about the room |

The lesson: the model can **anchor on a surface word** ("staff," "restaurant") and miss the review's actual subject. Frequency and TF-IDF (last session) are a more reliable guide to *what the corpus is about*; per-review LLM classification needs checking. Only the gold standard below catches errors like these.

**Verify #2 — the capstone:**
```r
# 1) YOU hand-label ~20 reviews first (your gold standard), e.g. a column `gold`
# 2) compare the LLM to your labels
capstone <- sample25 |>
  llm_classify(Comments, labels = c("cleanliness","room size","staff","location","value")) |>
  left_join(my_gold_labels, by = "ID") |>
  mutate(correct = .classify == gold)
mean(capstone$correct, na.rm = TRUE)            # accuracy vs YOUR labels
capstone |> filter(!correct) |> select(ID, gold, .classify, Comments)
```
Read the misses: did the LLM pick a defensible second category, or get it wrong? You decide, because you made the gold standard.

**Reliability — does it give the same answer twice?**
```r
llm_use(chat, .cache = "")                       # IMPORTANT: turn caching off or re-runs are fake
run1 <- sample25 |> llm_sentiment(Comments) |> pull(.sentiment)
run2 <- sample25 |> llm_sentiment(Comments) |> pull(.sentiment)
mean(run1 == run2)                               # run-to-run agreement
```
With `temperature = 0` and a fixed seed, agreement should be high — but not always perfect. Note which reviews flip; they'll be the borderline/mixed ones.

## When / how to use it
- **LDA** when you want to *discover* structure you didn't pre-specify (exploratory).
- **`llm_classify`** when you already know the categories that matter and want each item sorted into them (decision-ready).
- **Always** validate classification against a small hand-labeled gold set before trusting it on the full corpus — and report reliability for any LLM step.

## Common mistakes / how to verify
- **Over-reading LDA.** On short reviews topics are fuzzy; don't claim more precision than the word-bundles support.
- **Skipping the gold standard.** "It looks right" is not verification; hand-label ~20 and measure.
- **Fake reliability (the classic trap).** `mall` **caches** by default, so re-running identical calls returns the cached answer and shows a false 100% stability. Turn caching off (`llm_use(chat, .cache = "")`) for the reliability check.
- **Letting the LLM invent a category** outside your label set — check that every `.classify` value is one you defined.
- **Surface-word anchoring.** The model can pick a category from a word merely *present* in the text (e.g., ID25 → "staff" because "housekeeping staff" appears, though the review is about the room). In the real run, classification was noisy for exactly this reason — always check `.classify` against the review's actual subject.

## Key takeaways
- LDA finds structure in the data (you name it); `llm_classify` sorts text into the categories you define (you trust it).
- The capstone verification is **build a small gold standard → measure the LLM against it → read the misses.**
- LLM output is probabilistic — **check reliability with caching off**, and report it.
