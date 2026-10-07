# BUSS256 M6-R1 — Content Spec v2 (Pass 2, focused delta)

*Change log: Oct 6, 2026 — created. Implements the project lead's closed R2 delta list against `BUSS256_M6_R1_CONTENT_SPEC_v1.md` (unchanged). Content only: no PPTX, no visual design. Nothing staged or committed.*

---

## 1. Authority and scope

- Baseline: N12 (Seminar 2 deck), locked; slides #18–#19 excluded. Extraction as in v1 (`work/m6_r1_extract/`).
- Governed inputs: as in v1 (M-6 blueprint, currency spec, W1 note/script, verification seed spec, COURSE_PROFILE, annex); PC-3 / W1-X progression; no AI-collaboration content in this deck.
- Decisions: the project lead's R2 list (this task). Where R2 is silent, v1 stands.
- **Evidence status:** the external evidence below was *supplied by the project lead*. This pass did no web browsing and did not independently re-verify it; each use is marked `[Evidence: …]` and mapped in `BUSS256_M6_R1_EXTERNAL_VERIFY_QUEUE_v2.md`.

Supplied evidence records used on slides:

| Tag | Record (as supplied) |
|---|---|
| E-INFORMS | INFORMS current definition: analytics = "the scientific process of transforming data into insight for making better decisions" (informs.org Explore/Operations-Research-Analytics; FAQs-About-O.R.-Analytics) |
| E-MOORE | Intel Moore's Law page: 1965 ≈ annual doubling; 1975 revision ≈ every two years; empirical observation/projection, not a natural law |
| E-KIOXIA | Kioxia announcement dated Sept 28, 2022: working prototype of a 2 TB microSDXC card; mass production planned for 2023 |
| E-G20PB | TechCrunch, Jan 9, 2008: Google processing roughly 20 PB/day as of the prior September; large-scale data processing across MapReduce workloads, **not** user searches |
| E-GFT09 | Ginsberg et al., Nature, 2009: Google Flu Trends built from search-query data; held-out validation period |
| E-GFT14 | Lazer et al., Science, 2014: GFT substantially overestimated flu activity; early 2013 it predicted more than twice the CDC-reported proportion of influenza-like-illness doctor visits; discussed algorithm dynamics and "big data hubris" |
| E-GFT15 | Google Research, "The Next Chapter for Flu Trends," Aug 20, 2015: stop maintaining its own Flu Trends website; provide signal data to specialist research partners |

## 2. Delta from v1 (summary)

| N12 # | v1 | v2 |
|---:|---|---|
| 7 | KEEP | REVISE — no "just a set of tools"; no strict subset |
| 8 | KEEP | REVISE — one INFORMS working definition + convention note |
| 9 | KEEP | REVISE — carries the sentence from #10 |
| 10 | REVISE | DELETE as standalone (one sentence carried to #9) |
| 11 (+12, 13) | REVISE | REVISE — plain course definition; no SAS/Webopedia quotes |
| 14 (+16) | REVISE; #16 REVISE | #14 REVISE; **#16 MERGE→#14** (one BA slide) |
| 15 | KEEP | **DELETE** (video removed) |
| 17 (+20) | KEEP | REVISE completely — relationship map, "Part 1 recap" |
| 25 (+26) | KEEP-BUT-DATE | REVISE — #25+#26 merged ("More data ≠ more information") |
| 28 | KEEP-BUT-DATE | REVISE strongly — two separate trends |
| 29 | KEEP | **OPTIONAL-DEFER** |
| 31 | KEEP-BUT-DATE | REVISE — infographic removed; hypothetical example |
| 33 (+34) | #33 REVISE, #34 KEEP | #33+#34 **merged**, no video |
| 36 | REVISE | REVISE — week numbers removed |
| 40 | KEEP-BUT-DATE | REVISE — old screenshot removed; Nov. dashboard requirement |
| 42 | REVISE | REVISE — precise GFT lesson |
| 44, 45 | KEEP | REVISE |
| 47+48 | KEEP, KEEP | **MERGED** into one loop slide (carrier #48) |
| 49 | KEEP | REVISE |
| 51 | REVISE | REVISE — new two-part structure, no video |
| 52 | REVISE | REVISE — no filename, no week |
| 53 | DELETE | DELETE — handoff recorded |

Unchanged from v1: #1 (KEEP-BUT-DATE), #2, #3, #6, #24 (REVISE as in v1), #5, #23, #38, #39, #41 (KEEP), merges #12/#13→#11, #20→#17, #21→#9, #22/#37/#43/#46→#23, #30/#32/#35→#27, #50→#51, and #4 DELETE.

## 3. Disposition tally (51 N12 slides, #18–#19 excluded)

**KEEP 5 · KEEP-BUT-DATE 1 · REVISE 24 · MERGE 16 · DELETE 4 · OPTIONAL-DEFER 1 · ADD 0** (= 51).

- KEEP: #5, #23, #38, #39, #41.
- KEEP-BUT-DATE: #1.
- REVISE (carrier slides): #2, #3, #6, #7, #8, #9, #11, #14, #17, #24, #25, #27, #28, #31, #33, #36, #40, #42, #44, #45, #48, #49, #51, #52.
- MERGE: #12, #13→#11 · #16→#14 · #20→#17 · #21→#9 · #22, #37, #43, #46→#23 · #26→#25 · #30, #32, #35→#27 · #34→#33 · #47→#48 · #50→#51.
- DELETE: #4, #10, #15, #53.
- OPTIONAL-DEFER: #29.

**Resulting deck: 30 slides** (31 if optional #29 is reinstated) — inside the 29–33 range.

## 4. Resulting 2027 sequence

| New # | N12 source | Title (v2) |
|---:|---|---|
| 1 | #1 | Seminar 2 — Principles in Data Science |
| 2 | #2 | Data literacy: can I trust this data for this question? |
| 3 | #3 | Learning objectives |
| 4 | #5 | Vocabulary test |
| 5 | #6 | Data and information |
| 6 | #7 | Data science and data mining |
| 7 | #8 | Analytics: our working definition |
| 8 | #9 (+#21) | The analytics process |
| 9 | #11 (+#12, #13) | Data analytics |
| 10 | #14 (+#16) | Business analytics: from a business problem to a better-informed decision |
| 11 | #17 (+#20) | Part 1 recap: vocabulary and relationships |
| 12 | #23 (+#22, #37, #43, #46) | Key elements of business analytics |
| 13 | #24 | Big data: data from everywhere |
| 14 | #25 (+#26) | More data ≠ more information |
| 15 | #27 (+#30, #32, #35) | The Vs of big data |
| 16 | #28 | Why can we collect so much data? Two separate trends |
| — | #29 | *(OPTIONAL-DEFER)* Data explosion vs. our ability to use data |
| 17 | #31 | Velocity: when timing matters |
| 18 | #33 (+#34) | Variety: structured vs. unstructured data |
| 19 | #36 | Data: why does business analytics rely on it? |
| 20 | #38 | Analytics: methods and types |
| 21 | #39 | Descriptive analytics |
| 22 | #40 | Descriptive analytics in practice: a dashboard (illustrative) |
| 23 | #41 | Predictive analytics |
| 24 | #42 | Google Flu Trends: a good model that stopped being reliable |
| 25 | #44 | Business problems |
| 26 | #45 | Common business-analytics questions — and their limits |
| 27 | #48 (+#47) | From problem to outcome: the insight loop |
| 28 | #49 | From finding to action: candidate actions to test |
| 29 | #51 (+#50) | What business analytics can support — and what it cannot guarantee |
| 30 | #52 | What's next… |

Section strips (replacing repeated marker slides): "You are here: Data / Analytics / Business problem / Insights" at the start of each section; "Volume → Velocity → Variety" on the Velocity and Variety slides.

## 5. Slide content (changed slides in full; carried slides summarized)

### Part 1 — vocabulary

**#1 (new 1) — KEEP-BUT-DATE.** As v1: "Seminar 2 — Principles in Data Science"; BUSS256: Introduction to Big Data Analytics and Interpretation · Korea University Business School · Prof. Gun-woong Lee · Spring 2027. *Basis: N12 #1; COURSE_PROFILE.*

**#2 (new 2) — REVISE (as v1).** Title: "Data literacy: can I trust this data for this question?" Body: data literacy = judging whether data is useful for a problem and arguing with evidence from data; it means reading and understanding data; three questions for any dataset — Where did it come from? What does it measure? Is it good enough for this question?; algorithm literacy comes later with the techniques. *Basis: N12 #2; COURSE_PROFILE §3; blueprint §1.*

**#3 (new 3) — REVISE (as v1).** Four outcomes: use the core terms in plain business language; name the four key elements of business analytics and how they connect; explain what BA is used for and what it cannot promise; practise one habit — before you trust a number or claim, ask how you would check it. *Basis: N12 #3; blueprint §1, §7.*

**#5 (new 4) — KEEP.** Vocabulary test, ten terms, unchanged.

**#6 (new 5) — REVISE (as v1).** Title "Data and information". Data = raw facts (flour, eggs); information = data organized so it can answer a question (the cake). Business version: a list of every sale → sales by product by week → a decision (what to stock). Prompt: is a spreadsheet of 10,000 transactions data or information; what turns it into information? *Basis: N12 #6; illustrative, no statistic.*

**#7 (new 6) — REVISE.**
- Reason: R2 — do not define data mining merely as "a set of tools"; keep the useful contrast; no strict subset hierarchy.
- Title: "Data science and data mining"
- Body:
  - **Data science** = a set of principles for extracting useful information and knowledge from data. It draws on computer science, mathematics, statistics and business/strategy knowledge.
  - **Data mining** = the technologies and methods that apply such principles to discover useful patterns and information in data.
  - They overlap; one is not simply "inside" the other.
- Basis: N12 #7 (contrast preserved; icon banner kept); R2-A. External evidence: none required.

**#8 (new 7) — REVISE.**
- Title: "Analytics: our working definition"
- Body: **Analytics is the scientific process of transforming data into insight for making better decisions.** *(INFORMS)* — *Different sources draw the boundaries differently; this is the convention used in BUSS256.*
- Basis: N12 #8; R2-A. `[Evidence: E-INFORMS]`. The Wikipedia definition is dropped.

**#9 (new 8) — REVISE (absorbs #21; carries one sentence from #10).**
- Title: "The analytics process"
- Body: Problem identification → data collection → data storing → data management (pre-processing, cleansing…) → data analysis → results and interpretation → answering the business problem → offering insights. *Analysis is one step within the broader analytics process; analytics may include descriptive, predictive and decision-oriented work.*
- Basis: N12 #9, #21; carried sentence from #10 (R2-A).

**#10 — DELETE as standalone.** The "analysis vs. analytics (INCORRECT!!)" slide is removed; its one surviving sentence is on new 8.

**#11 (new 9) — REVISE (absorbs #12, #13).**
- Title: "Data analytics"
- Body: **Data analytics is analytics focused on analyzing data** — collecting, organizing and examining data to find patterns and useful information. When the data are very large, new challenges appear; the Big Data section takes them up (volume, velocity, variety).
- Basis: N12 #11–#13; R2-A (plain course definition; the SAS and Webopedia quotations are not retained). External evidence: none.

**#14 (new 10) — REVISE (absorbs #16).**
- Title: "Business analytics: from a business problem to a better-informed decision"
- Body: **Business analytics applies data and analytics to a business problem to generate insight for decisions.** It helps answer three questions: **How are we doing? Why? What should we do next?** *(Optional diagram: business · analytics · data.)*
- Basis: N12 #14, #16; R2-A. The "every sector / every economy / every organization" wording is removed. Quoted Wikipedia/IBM text is not retained.

**#16 — MERGE → #14.**

**#15 — DELETE.** "What is Business Analytics?" video removed from the core deck.

**#17 (new 11) — REVISE completely (absorbs #20).**
- Title: "Part 1 recap: vocabulary and relationships"
- Body: a **relationship map with five terms and labeled relations (no containment circles, no nested hierarchy):**
  - **Analytics** — the broad process for turning data into insight for decisions.
  - **Data analytics** — analytics focused on analyzing data.
  - **Data mining** — methods for discovering useful patterns in data.
  - **Business analytics** — the application of analytics to business problems and decisions.
  - **Data science** — broader interdisciplinary principles and practice around learning from data.
  - Suggested relation labels: *Data science → provides principles to → Analytics*; *Analytics → focused on data → Data analytics*; *Analytics → applied to business problems → Business analytics*; *Data mining → supplies methods to → Data analytics and Business analytics*.
  - *Boundaries vary across sources; BUSS256 uses these working distinctions.*
- Check-back: **"Which terms from the opening vocabulary test can you now explain in your own words?"**
- Basis: R2-A; N12 #17, #20. This is an intentional mid-deck recap (Part 1), not the final summary.

**#20, #21, #22 — MERGE** (#20→#17; #21→#9; #22→#23). **#23 (new 12) — KEEP**: framework Data → Analytics → Business problem → Insights for decision making; #37, #43, #46 become section strips.

### Part 2 — big data

**#24 (new 13) — REVISE (as v1).** Title: "Big data: data from everywhere". Data comes from web and e-commerce, purchases at stores, bank and card transactions, social networks. Collecting is easy; making it useful is the hard part. The unsupported "lack of people or companies who can manage Big Data" line stays dropped.

**#25 (new 14) — REVISE (absorbs #26).**
- Reason: R2 evidence correction within F-5 Option B. N12's "20 PB of user searches a day" is wrong; the Facebook and eBay figures are unverified for this build.
- Title: **"More data ≠ more information"**
- Body:
  - A January 2008 TechCrunch report, citing Google engineering work, described Google as processing roughly **20 PB of data per day as of September 2007** — large-scale data processing across Google's MapReduce workloads, **not** "20 PB of user searches per day."
  - *Historical example — not a current figure.*
  - Large volume alone does not create information or insight. Ask: **what was measured, when, and for what purpose?**
  - Hinge: **"Big data also creates special challenges in volume, velocity and variety."**
- Basis: N12 #25, #26; R2-3. `[Evidence: E-G20PB]`. **Not carried:** Facebook 2.5 PB + 15 TB/day and eBay 6.5 PB + 50 TB/day (unverified). No modern replacement statistic is invented.

**#26 — MERGE → #25.**

**#27 (new 15) — REVISE (absorbs #30, #32, #35).**
- Title: "The Vs of big data"
- Body:
  - **Volume** — the amount of data.
  - **Velocity** — the rate at which data are generated, arrive or need processing.
  - **Variety** — different forms and sources of data.
  - **Value** — whether using the data can create useful value relative to its cost.
  - **Veracity** — whether the data can be trusted, considering accuracy, bias and provenance.
  - *Different frameworks use 3V, 4V or 5V labels; BUSS256 starts from the classic 3Vs and uses Value and Veracity as two additional questions.* Teaching link: check your input before you trust your output (GIGO).
- Basis: N12 #27, #30, #32, #35; R2-3.

**#28 (new 16) — REVISE strongly.**
- Reason: R2 — N12 implies Moore's Law explains microSD capacity growth; the slide's microSD image is 2022-era and unsourced.
- Title: "Why can we collect so much data? Two separate technology trends"
- Body:
  - Context: data are generated by people, homes and vehicles (N12 images).
  - **Computing.** Gordon Moore's 1965 observation projected roughly annual doubling of components (transistors) on integrated circuits; in 1975 he revised the pace to roughly every two years. Treat it as an empirical observation/projection, not a natural law. `[Evidence: E-MOORE]`
  - **Storage.** Kioxia announced a *working prototype* of a 2 TB microSDXC card in September 2022; mass production was planned for 2023. `[Evidence: E-KIOXIA]`
  - **Teaching point:** "Advances in computing and storage made it increasingly feasible to collect and process much larger datasets. These are related technology trends, not evidence that one caused the other."
  - *Label: historical examples, not current product specifications.*
- Basis: N12 #28; R2-3. The 2005 vs. 2014 SD-card comparison and "Source: Wikipedia (2022)" are not carried.

**#29 — OPTIONAL-DEFER.** "Data explosion" chart (available data vs. "your ability to do something with data", with a "gap") plus "Challenges: processing capabilities, storage, networking and architecture." Reason: after the merged #25 and the new #28 it no longer has a distinct teaching function — #25 carries "more data ≠ more information", #28 carries "feasibility", and the chart asserts relative growth rates (exponential vs. linear) with no data behind them, in tension with #28. Reinstate (as a "challenges of volume" slide, with a source or an "illustrative" label) only if the professor wants it; it would become new slide 17. Not deleted.

**#31 (new 17) — REVISE (infographic removed).**
- Title: "Velocity: when timing matters"
- Body:
  - **Definition:** velocity is how quickly data are generated, arrive, or need processing.
  - **Implication:** some decisions lose value when the data arrive too late.
  - **Illustrative example — not measured data:** a card-payment system sees a suspicious payment. If it is flagged within seconds, the payment can be blocked; if it is flagged the next day, it cannot. Same data, different value, because of timing.
  - **Verification prompt:** "If this were a real statistic, what source and timestamp would you need before quoting it?"
- Basis: N12 #31 (concept only); R2-3. The old "Internet in 60 seconds" infographic and its go-gulf.com source are removed. External evidence: none required (toy example, labeled).

**#30, #32, #35 — MERGE → #27.**

**#33 (new 18) — REVISE (absorbs #34; no video).**
- Title: "Variety: structured vs. unstructured data"
- Body:
  - **Structured data** — organized in a predefined structure such as rows and columns (database tables, spreadsheets).
  - **Unstructured data** — text documents, audio, images, video, social-media posts.
  - *Some data are semi-structured (for example JSON or log records); we do not go deeper here.*
- Basis: N12 #33, #34 (image concept); R2-3. No "80% of data are unstructured" claim. Both videos are removed.

**#34 — MERGE → #33.**

**#36 (new 19) — REVISE (week numbers removed).**
- Title: "Data: why does business analytics rely on it?"
- Body: questions about data — What kinds of data? How do we get it (data collection)? How do we manage it? How do we analyze it? **Where the course goes:** data types and data management are covered later; analytical methods follow; text analysis later handles unstructured text. Data-literacy habit: say when and how a dataset was collected (for example, the App Store dataset is a historical snapshot collected in July 2013 and is labeled that way).
- Basis: N12 #36; R2-4; currency spec F-13.

### Part 3 — analytics, problems and insight

**#38, #39, #41 (new 20, 21, 23) — KEEP.** Analytics methods and the two types; descriptive; predictive (unchanged N12 text).

**#40 (new 22) — REVISE (old screenshot removed).**
- Title: "Descriptive analytics in practice: a dashboard (illustrative)"
- Body (content requirement for the November visual pass): an **illustrative** descriptive dashboard showing about three simple metrics, clearly labeled **"Illustrative example."** *(The final dashboard is not created in this pass.)* Question kept: **"Which numbers tell us what happened? What question would require prediction?"**
- Basis: N12 #40 (question); R2-4. The Google Analytics screenshot is not 2027 content.

**#42 (new 24) — REVISE (strengthened).**
- Title: "Google Flu Trends: a good model that stopped being reliable"
- Body:
  - **The model.** Ginsberg et al. (Nature, 2009) built Google Flu Trends from search-query data and tested it on a held-out validation period. `[Evidence: E-GFT09]` The 2003–2008 graphic shows its estimates tracking the flu incidence reported by the US CDC.
  - **The problem.** Lazer et al. (Science, 2014) reported that GFT substantially overestimated flu activity — in early 2013 it predicted more than twice the CDC-reported proportion of influenza-like-illness doctor visits — and discussed algorithm dynamics and "big data hubris" among the problems. `[Evidence: E-GFT14]`
  - **The outcome.** In August 2015 Google Research announced that it would stop maintaining its own Flu Trends website and instead provide signal data to specialist research partners. `[Evidence: E-GFT15]`
  - **The lesson (verification):** *"A model can fit historical data and still become unreliable when the data-generating environment changes. Keep checking performance on new data."*
- Basis: N12 #42; R2-4. The slide does **not** say GFT failed for lack of out-of-sample validation.

**#44 (new 25) — REVISE.**
- Title: "Business problems"
- Body: **A business problem is a perceived gap between the current state and a desired state that requires deciding how to close the gap.** Examples: *current customer churn is above the desired level; inventory availability is below the desired service level; sales growth is below a target.* For each: what is the current state, the desired state, and the decision needed to close the gap? BA helps when the gap can be measured and the decision can be informed by data.
- Basis: N12 #44; R2-5. N12's examples that are decisions with no stated gap (a 10-year plan, an ERP purchase, a promotion, a bonus) are replaced. No external statistic.

**#45 (new 26) — REVISE.**
- Title: "Common business-analytics questions — and their limits"
- Body: practical questions — *How likely is client X to buy product Y?* (look at the client's purchase behaviour and patterns); *Which clients are at risk of going to competitors?* (look at similarities with clients who left); *What promotions should we offer to retain customers?* (look at relationships between offers and retention). **Limits:** prediction can identify who may be at risk; association can suggest patterns; **neither alone proves that an intervention caused an outcome.** One way to test an intervention is an A/B test.
- Basis: N12 #45; R2-5. A/B testing is named once and not developed.

**#47 + #48 (new 27) — MERGE into one loop slide (carrier #48; REVISE).**
- Title: "From problem to outcome: the insight loop"
- Body: a **loop, not a hierarchy:** Business problem → Data → Information → Insight → Decision → Outcome / feedback → back to the business problem. Business problem is the anchor. **Insight** = an understanding of the business situation that can inform a decision; a good decision is judged by a measurable outcome consistent with the organization's goals, and it should help close the gap between the current and desired state. *Data vs. information is on the earlier slide; this slide is about what comes after information.*
- Basis: N12 #47, #48; R2-5. The third-party figure is not reused; the course redraws its own loop in November. (Copy-edit carried: "deired" → "desired".)

**#49 (new 28) — REVISE.**
- Title: "From finding to action: candidate actions to test"
- Body: predictions and patterns do not automatically determine the action. Treat outputs as **candidate actions to evaluate:** *Prediction / finding → candidate action → test or compare → measure outcome → revise the decision.* Apply it to the three questions on the earlier slide.
- Basis: N12 #49; R2-5. Avoids causal certainty.

**#51 (new 29) — REVISE (absorbs #50; no video).**
- Title: **"What business analytics can support — and what it cannot guarantee"**
- Body:
  - **Can support:** describe what happened · identify patterns · estimate likely outcomes · compare options · inform operational and strategic decisions · contribute to competitive advantage when used well.
  - **Cannot guarantee:** that the data are trustworthy · that correlation is causation · that a model that worked before will keep working · that a recommendation will improve the outcome.
  - Close: **"The value of analytics depends on the question, the data, the method, and verification."**
- Basis: N12 #50, #51; R2-5. The YouTube video is removed from core content.

**#52 (new 30) — REVISE.**
- Title: "What's next…"
- Body: **Next: Data structures and basics in R.** Our habit from here: **Predict it → work it out → run it → compare.** *(No tutorial filename, no week number.)*
- Basis: N12 #52; R2-5; v1 habit line.

**#53 — DELETE.** Handoff record only: *"Candidate input for Seminar 3 review; reconsider when Seminar 3 is built."* Nothing copied or moved.

## 6. Remaining deferred visual work (November tranche)

Everything visual: theme, fonts, colors, layout; the relationship map (new 11); the insight loop (new 27); the illustrative dashboard (new 22, about three simple metrics); the redrawn data–information graphics; the section "You are here" strips; any Velocity visual. PC-2 applies: no color-only meaning (labels, markers, line types).

## 7. Open and handoff items

- **OPEN-M5-01** — AI-timing inconsistency: some governed notes say AI begins "after the midterm", while M-5 is Week 7 and the midterm is Week 8. OWNER: ChatGPT / project lead. DEADLINE: before M5 production begins. *(Not resolved here; Seminar 2 text names no AI timing.)*
- **HANDOFF-S3-01** — N12 #53 (R review) is removed from M6-R1; reconsider when Seminar 3 is built.
- **HANDOFF-S3-02** — the exact Seminar 3 tutorial filename/version is resolved during the Seminar 3 build, not hard-coded in M6-R1.
- **SUPERSEDE-M6-01** — roadmap F-7 ("AI-assisted analytics workflow in Seminar 2") is superseded for M6-R1 by the later approved blueprint and PC-3 progression; do not reintroduce it in later M6-R1 rounds.
- **OPTIONAL-DEFER:** N12 #29.
- Assessment-sensitive files were not opened. 2027 assessments will be aligned to the finalized content later.

## 8. No-guessing attestation

Every v2 line comes from N12 text/images (extracted in Pass 1), the governed M-6 inputs, or the project lead's R2 decisions and supplied evidence records. Current factual statements (INFORMS definition; Moore's Law; Kioxia prototype; Google 20 PB report; Google Flu Trends papers and 2015 announcement) appear only as supplied by the project lead and are tagged; this executor did no web browsing and did not independently re-verify them. Illustrative examples (sales list, card-payment case, dashboard metrics, churn/inventory/sales-gap examples) are labeled and contain no statistics. No figure, URL or claim was supplied from model memory. The 2025 source, N12, v1 files, assessment materials and the original KMB689 worktree were not modified.
