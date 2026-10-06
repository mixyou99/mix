# M-1 — Compare-and-Verify Lab: Classical vs. LLM on Hotel Reviews (DRAFT)

*Change log: Jun 18, 2026 — created (Stage 2-A). In-class **ungraded formative** lab. Draft for
professor review. Spine: hand-first → AI-verify. Volatile values → `_currency/tm_llm_tools.md`.*

> **Ungraded, in-class.** No points — this is practice, the first full run of the **hand-first →
> AI-verify** pattern. You'll do the classical analysis **yourself first**, then run a local AI model on
> the **same** reviews, then compare, verify, and decide which to trust.
>
> **Code status.** The **classical (tidytext)** code is standard and its expected results were checked
> against the real corpus; run it to confirm exact numbers. The **AI (mall + Ollama)** code uses the
> current package interface (Jun 2026) but is marked **`# UNTESTED — run on your laptop with Ollama`** —
> verifying it *is* part of the lab.

**Corpus.** `room_review.csv` — 575 real hotel-room reviews (Holiday Inn, London), a **historical
snapshot** (treat dates as illustrative). For the AI step we use a **small verification sample of 25
reviews** so it runs fast on a laptop and keeps the focus on verification, not bulk processing.
*(Reserved: reviews 551–575 are held out for the exam — do not use them here.)*

---

## Part 0 — Setup (1 min)
```r
library(tidyverse)
library(tidytext)
library(mall)
library(ellmer)

reviews <- read_csv("room_review.csv")     # columns: ID, Comments
sample25 <- reviews |> slice_head(n = 25)   # the verification sample
```

## Part A — HAND-FIRST: the classical analysis (you do this first)

**A1. What are these reviews about? (term frequency)**
```r
tidy <- reviews |>
  unnest_tokens(word, Comments) |>
  anti_join(stop_words, by = "word")

tidy |> count(word, sort = TRUE) |> slice_head(n = 15)
```
*Expected (top terms, from the real corpus):* **room, clean, small, rooms, hotel, bathroom, bed, good,
comfortable, london, great, floor, breakfast, service, staff.* Write down your own one-sentence read:
"these reviews are mostly about ____."

**A2. Which words are distinctive? (TF-IDF)**
```r
tidy |>
  count(ID, word) |>
  bind_tf_idf(word, ID, n) |>
  arrange(desc(tf_idf)) |>
  slice_head(n = 15)
```
*(TF-IDF pulls out review-specific words; common words like "room" get down-weighted.)*

**A3. Classical sentiment (the bing word-list) on the 25-review sample**
```r
bing <- get_sentiments("bing")

classical_sent <- sample25 |>
  unnest_tokens(word, Comments) |>
  inner_join(bing, by = "word") |>
  count(ID, sentiment) |>
  pivot_wider(names_from = sentiment, values_from = n, values_fill = 0) |>
  mutate(net = positive - negative,
         classical = if_else(net >= 0, "positive", "negative"))

classical_sent |> select(ID, positive, negative, net, classical)
```
This is your **yardstick**: a transparent, word-counting label for each review. Notice it has no idea
about *context* — it just adds up positive and negative words.

**A4. (Light, optional) Topic structure — LDA.** *Conceptual only; skim if time is short.*
```r
# install.packages("topicmodels")   # if not already
library(topicmodels)
dtm <- tidy |> count(ID, word) |> cast_dtm(ID, word, n)
lda <- LDA(dtm, k = 3, control = list(seed = 100))
tidy(lda, matrix = "beta") |> group_by(topic) |>
  slice_max(beta, n = 6) |> arrange(topic, -beta)
```

## Part B — AI STEP: run the local model on the SAME 25 reviews
```r
# Connect R to the model running on your laptop (Ollama must be open)
chat <- chat_ollama(model = "llama3.2",
                    params = params(seed = 100, temperature = 0))  # reproducible
llm_use(chat)

# B1 — LLM sentiment on the same 25                # UNTESTED — run on your laptop with Ollama
llm_sent <- sample25 |> llm_sentiment(Comments)    # adds a .sentiment column
llm_sent |> select(ID, .sentiment)

# B2 — LLM classification into YOUR categories     # UNTESTED — run on your laptop with Ollama
sample25 |> llm_classify(Comments,
  labels = c("cleanliness", "room size", "staff", "location", "value"))   # adds .classify

# B3 — LLM one-line summary of each review          # UNTESTED — run on your laptop with Ollama
sample25 |> llm_summarize(Comments, max_words = 8)  # adds .summary
```

## Part C — COMPARE & VERIFY (the point of the lab)

**C1. Agreement: classical vs. LLM sentiment**
```r
compare <- sample25 |>
  llm_sentiment(Comments) |>                              # UNTESTED — needs Ollama
  left_join(classical_sent |> select(ID, classical), by = "ID") |>
  mutate(agree = classical == .sentiment)

mean(compare$agree, na.rm = TRUE)                          # overall agreement
compare |> filter(!agree) |> select(ID, classical, .sentiment, Comments)  # the disagreements
```

**C2. Read the disagreements — *why* do they differ?** For each mismatch, label the cause:
*negation* ("rooms were **not** ready"), *mixed* ("clean **but** tired"), *qualified* ("comfortable **if**
slightly cramped"), or *sarcasm*. The classical word-counter can't see these; the LLM usually can — but
sometimes the LLM over-reads. Decide, review by review, **which label is actually right** by reading the
text.

**C3. Which do you trust — and for what decision?** For "are guests happy, and what should the hotel
fix?", state which method you'd rely on and why. (Hint: the classical method is transparent and
reproducible but brittle on context; the LLM reads context but is probabilistic and can drift.)

**C4. Reliability check (LLM output isn't fixed).**
```r
llm_use(chat, .cache = "")                          # turn OFF caching so re-runs really re-run
run1 <- sample25 |> llm_sentiment(Comments) |> pull(.sentiment)   # UNTESTED — needs Ollama
run2 <- sample25 |> llm_sentiment(Comments) |> pull(.sentiment)   # UNTESTED — needs Ollama
mean(run1 == run2)                                  # run-to-run agreement
```
With `temperature = 0` and a fixed `seed`, agreement should be high — but check it, and note any reviews
that flip. *A probabilistic tool needs a reliability report.*

## Part D — Business recommendation (turn it into a decision)
In 3–4 sentences, using your **verified** result: what is the single most common complaint in these
reviews, and what concrete action should the hotel take? Back it with both the classical evidence (top
terms / sentiment) and the LLM's category breakdown.

## Reflection (1–2 sentences)
Where was the AI **wrong or limited** on these reviews, and how did your classical yardstick help you
catch it?

---

*Companion: `M-1_compare_verify_lab_SOLUTION.md` (instructor). Setup: `M-1_ollama_setup_guide.md`.*
