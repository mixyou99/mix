# BUSS256 M6-R1 — Content Spec v1 (Pass 1)

*Change log: Oct 6, 2026 — created. Content-first adjudication of the N12 baseline (Seminar 2 / Data Science foundations deck) for the 2027 refresh. No visual redesign, no PPTX. Nothing here is committed.*

---

## 1. Authority / inputs

**Baseline (locked by professor decision): N12.**
- Path: `/Users/gunwoonglee/Downloads/Teaching_2025/Fall/BUSS256_BigData/Seminar 2_Data Science/Seminar 2_Lecture_Data Science_InClass_25F_2.ppt`
- Identity (0a `SOURCE_IDENTITY_PROPOSAL.md`, row N12, Gate 3 PASS): 4,674,560 bytes; Dropbox content_hash `4f572f1fe3619d7b38385c6fe5314cd8630c787a0510cd7e69691117af608026`; MD5 `992a2cf05bc63ed4419e9266055918f8`. Re-measured today: size, MD5 and Dropbox content_hash all equal the register. (A plain SHA-256 is `7ed94e12…09db`; the register does not use plain SHA-256, so it is not a comparison.)
- Non-baseline references (not used as content sources): N09, N10, N11.

**Governed 2027 inputs read:** `M-6_foundations_blueprint.md`, `M-6_currency_refresh_spec.md`, `M-6_governance_reconciliation.md`, `M-6_note_W1_three_literacies.md`, `M-6_script_W1_three_literacies.md`, `M-6_verification_seed_spec.md`; also `COURSE_PROFILE_BUSS256.md`, `STYLE_STANDARDS.md`, `03_modernization_roadmap.md`, `docs/rounds/BUSS256_2027_GATE_ANNEX.md`.

**Locked decisions honored:** N12 is baseline; N12 slides #18–#19 excluded; F-5 = Option B (date legacy figures, no invented replacement statistic); F-6 five YouTube IDs routed to the external-verification queue, not repaired; W1-X progression (hand foundation → verification habit → AI on-ramp → AI collaboration → verification), with AI collaboration not moved earlier; M6 is foundations.

## 2. N12 extraction summary

- Method: no LibreOffice or python-pptx is installed on this Mac. The 0a run had already converted N12 with its bundled LibreOffice (`…/20261003-1911/tmp/m6/Seminar 2_Lecture_Data Science_InClass_25F_2.pptx`, 53 slides, matching the 0a evidence's "53 slides"). That derivative was copied to `work/m6_r1_extract/N12_converted_by_0a.pptx` (SHA-256 `2d4ad1f1…5f9f`) and parsed with the Python standard library (slide order from `presentation.xml`; text from `<a:t>`; hyperlinks from slide rels).
- Independent cross-check: every extracted paragraph (314 with six or more characters) was searched in the original `.ppt` bytes (UTF-16LE at both alignments, and Latin-1). 309 matched directly. The other 5 (on slides 1, 16, 24 and 25) are paragraphs whose line breaks or field codes split the string; token-by-token, 14 of 16 of their longer words were found in the source (for example slide 25's title, 4/4). No slide was found whose text is absent from the original.
- Image-only content (slides 4, 6, 7, 15, 20, 28, 29, 31, 33, 34, 40, 42, 47, 53) was inspected by viewing the extracted media. Their visible text is described only as seen.
- **Limits, stated plainly:** (a) animations, builds and speaker notes were not reviewed; (b) layout/visual state is not assessed; (c) the extraction is a LibreOffice conversion, not a native PowerPoint parse. Slide count 53 and slide order agree with the 0a record. Nothing was reconstructed from memory, N09–N11, or the blueprint.
- Hyperlinks recovered (match 0a `M6_R1_BASELINE_EVIDENCE.md`): slide 15 displays `ly1RSNRWmEs`, targets `6jDjeNJrN14`; slide 33 displays `0PPktPn5qZk`, targets `awMXMXdton8`; slide 34 displays and targets `awMXMXdton8`; slide 51 displays and targets `HbHTvqZE3D8`.
- Slides #18 (Name Tag Sample) and #19 (Getting to Know Each Other) are 2025 logistics and are excluded. 51 slides adjudicated.

## 3. 2027 learning purpose

Seminar 2 is foundations: students leave able to use the core vocabulary in plain business language (data, information, data science, data mining, analytics, big data, business analytics), to name the four elements of business analytics (data, analytics, business problem, insights), and to say what BA can and cannot promise. The deck practises the hand foundation and plants the verification habit tool-free: *before you trust a number or a claim, ask how you would check it.* It makes no AI-tool claims and does not introduce AI collaboration (W1-X; blueprint §1, §5, §7). Business meaning comes before terminology; no technique depth beyond descriptive vs. predictive.

## 4. Slide-by-slide adjudication

**Tally (51 N12 slides, #18–#19 excluded): KEEP 18 · KEEP-BUT-DATE 5 · REVISE 14 · MERGE 12 · DELETE 2 · ADD 0.**

Source-basis key: N12 = the 2025 baseline slide; BP = M-6 blueprint; CS = currency spec; CP = COURSE_PROFILE; VS = verification seed spec.
"Copy-edit" = typo/wording fix that does not change the disposition (see §7 register).

### 4a. Slides with a change (KEEP-BUT-DATE, REVISE, MERGE, DELETE)

#### N12 #1 — Title — **KEEP-BUT-DATE**
- Reason: no date on the slide; the 2027 instance needs to be identifiable.
- Purpose: orient students.
- Proposed title: "Seminar 2 — Principles in Data Science"
- Proposed body: *BUSS256: Introduction to Big Data Analytics and Interpretation · Korea University Business School · Instructor: Prof. Gun-woong Lee · Spring 2027.*
- Source: N12 #1; CP (course title; "Spring 2027 redesign"). External verification: no.

#### N12 #2 — Data Literacy — **REVISE**
- Reason: the N12 definition ("ability to question if my data is useful") is looser than the governed definition and does not link to the two literacies.
- Purpose: restate the course's first literacy in testable terms.
- Proposed title: "Data literacy: can I trust this data for this question?"
- Proposed body:
  - Data literacy is the ability to judge whether data is useful for a problem, and to argue with evidence from data.
  - It means reading and understanding data, not only collecting it.
  - Three questions to ask of any dataset: Where did it come from? What does it measure? Is it good enough for this question?
  - Algorithm literacy (understanding how a method produces its result) comes later with the techniques; this seminar builds the vocabulary for both.
- Source: N12 #2; CP §3; BP §1 objectives 1 and 4. External verification: no.

#### N12 #3 — Learning Objectives — **REVISE**
- Reason: N12 objectives are terms-only; the governed foundations add a verification habit (tool-free).
- Purpose: set four checkable outcomes.
- Proposed title: "Learning objectives"
- Proposed body: By the end of today you can (1) use the core terms of data science and analytics in plain business language; (2) name the four key elements of business analytics — data, analytics, business problem, insights — and how they connect; (3) explain what business analytics is used for, and what it cannot promise; (4) practise one habit: before you trust a number or a claim, ask how you would check it.
- Source: N12 #3; BP §1 (objectives 4–5), §7. External verification: no.

#### N12 #4 — Analytics word cloud — **DELETE**
- Reason: decorative image with no instructional content; the vocabulary test (#5) is the real opener.
- Purpose: none lost. External verification: no.

#### N12 #6 — Data and Information — **REVISE**
- Reason: the cake analogy is strong and stays; "useless until organized" is an absolute, and the slide has no business example.
- Purpose: separate data from information in intuitive terms before any definition.
- Proposed title: "Data and information"
- Proposed body:
  - Data = raw facts (the flour and eggs).
  - Information = data organized so it can answer a question (the cake).
  - Business version: a list of every sale is data; sales by product by week is information; a decision (what to stock) comes after.
  - Good decisions need good information, and good information starts from good data.
  - Ask: is a spreadsheet of 10,000 transactions data or information? What would you do to turn it into information?
- Source: N12 #6 (image kept), #47. External verification: no. (The sales example is illustrative, with no statistic.)

#### N12 #10 — Analysis vs. Analytics — **REVISE**
- Reason: N12 marks both definitions "INCORRECT!!" without saying what is correct. The correct frame is already on N12 #8–#9 and #38.
- Purpose: stop the "backward vs. forward" myth.
- Proposed title: "Analysis vs. analytics: a common distinction we won't rely on"
- Proposed body:
  - You will hear: "analysis looks backward; analytics looks forward." Both statements are too simple.
  - Analytics, as defined on the earlier slides, is the whole process of turning data into insight for better decisions.
  - Analysis is one step inside that process ("Data Analysis" on the process slide).
  - Both kinds of question below are analytics when they feed a decision: *How many customers responded to a marketing campaign? How many new loyalty sign-ups did we get last year?* (descriptive) and *What will happen next? What will happen if a trend continues?* (predictive).
- Source: N12 #10, #8, #9, #38. External verification: no.

#### N12 #11 — Data Analytics — **REVISE** (absorbs #12 and #13)
- Reason: #11, #12 and #13 repeat the same definitions around an early 3Vs preview. One slide does the job; the full Big Data section follows.
- Purpose: define data analytics and show that "large" is more than size.
- Proposed title: "Data analytics — and what makes data 'big'"
- Proposed body:
  - Data analytics examines large amounts of data to uncover hidden patterns, correlations and other insights (SAS). It is the process of collecting, organizing and analyzing large sets of data to discover patterns and other useful information (Webopedia.com). *(attributions as in N12)*
  - "Large" has three plain meanings: **Volume** — how much data; **Velocity** — how fast it arrives; **Variety** — how many different types.
  - We unpack all three in the Big Data section.
- Source: N12 #11, #12, #13. External verification: yes — VX01 (attributed definitions).

#### N12 #12 — 3Vs of Big Data (early) — **MERGE → #11**
- Reason: duplicate of the 3Vs content that appears fully at #27; its job (preview) is done inside #11.

#### N12 #13 — (BIG) Data Analytics — **MERGE → #11**
- Reason: restates #11's definitions verbatim; folded into #11.

#### N12 #14 — Business Analytics (BA) — **REVISE**
- Reason: three dense paragraphs; the unsupported chain ("greater efficiencies, reduce costs, identify growth opportunities…") reads as a promise.
- Purpose: give undergraduates the three questions as the memorable core.
- Proposed title: "Business analytics (BA): three questions"
- Proposed body:
  - BA refers to the skills, technologies and practices for continuous, iterative exploration of past business performance to gain insight and drive business planning (Wikipedia, as in N12).
  - It helps decision makers answer three questions: **How are we doing? Why? What should we be doing?** (IBM, as in N12)
  - The aim is better-informed decisions. Whether results improve depends on the decision and on the data behind it.
- Source: N12 #14. External verification: yes — VX01.
- Note: diagnostic/prescriptive labels are not introduced; N12 teaches only descriptive and predictive (#38–#41).

#### N12 #16 — Business Analytics is… — **REVISE**
- Reason: "in EVERY sector, in EVERY economy, in EVERY organization" is hype.
- Proposed title: "Business analytics is…"
- Proposed body: the intersection of business, analytics and data, used to improve financial performance, operational efficiency and strategic advantage — in any organization that has data and decisions to make. *(Diagram kept: Data · Tools & Techniques · Business insight.)*
- Source: N12 #16. External verification: no.

#### N12 #17 — Summary — **KEEP** (absorbs #20; see §4b for the table row)

#### N12 #20 — Review (vocabulary re-check) — **MERGE → #17**
- Reason: #17 and #20 are the same nested-circles recap; with #18–#19 removed they would sit side by side. Carried into #17: the term list (data literacy, data, information, data science, data mining, analytics vs. analysis, data analytics, business analytics) and the vocabulary check-back: *"Go back to the vocabulary test at the start. Which terms can you now explain in your own words?"*

#### N12 #21 — Analytics (process, repeat) — **MERGE → #9**
- Reason: identical to #9 (INFORMS definition + eight-step process); the repeat existed to restart after the break.

#### N12 #22 — Key Elements of Business Analytics (title only) — **MERGE → #23**
- Reason: a title-only precursor to the framework slide.

#### N12 #24 — Big Data — **REVISE**
- Reason: the last bullet ("Lack of people or companies who can manage Big Data") is an unsupported, time-sensitive claim.
- Purpose: show where big data comes from, without hype.
- Proposed title: "Big data: data from everywhere"
- Proposed body: Data is collected from many sources and generated everywhere — web and e-commerce; purchases at department and grocery stores; bank and credit-card transactions; social networks. Collecting it is the easy part; turning it into something useful is the hard part (next slide).
- Source: N12 #24, #25. External verification: no (claim dropped; see §7).

#### N12 #25 — Drowning in Data & Starving for Information — **KEEP-BUT-DATE**
- Reason: locked F-5 Option B. Legacy circa-2012 figures stay, explicitly dated. No replacement statistic is invented.
- Proposed title: unchanged.
- Proposed body: the three N12 lines unchanged (Google 20 PB of user searches a day; Facebook 2.5 PB of user data + 15 TB/day; eBay 6.5 PB of user data + 50 TB/day), then the governed label: *(Figures circa 2012 — illustrative of scale at the time.)* Discussion prompt: *These are old numbers. Before quoting a big-data number today, what would you want to know — who measured it, when, and what exactly was counted?*
- Source: N12 #25; CS F-5 Option B (locked); VS (habit). External verification: optional — VX07 (original source of the 2012 figures; slide proceeds without it).

#### N12 #27 — 3Vs of Big Data (with Value and Veracity) — **REVISE** (absorbs #30, #32, #35)
- Reason: the title says "3Vs" but the slide lists five; and the slide is repeated four times as a section marker.
- Purpose: one master map of the Vs, with quality as the habit-building pair.
- Proposed title: "The Vs of big data: three core Vs, plus two questions about quality"
- Proposed body: **Volume** (data quantity — volumes are becoming unmanageable) · **Velocity** (data speed — some data arrives so fast it must be processed instantly or lost) · **Variety** (data type — more types of data are captured than before). Then two quality questions: **Value** — are the outcomes of big data valuable? **Veracity** — can the inputs be trusted? *Garbage In, Garbage Out (GIGO).* Teaching link: check your input before you trust your output.
- Navigation: the repeats are replaced by a one-line "You are here: Volume ✓ → Velocity → Variety" strip on the Velocity and Variety slides.
- Source: N12 #27, #30, #32, #35. External verification: no.

#### N12 #28 — WHY BIG-sized Data? — **KEEP-BUT-DATE**
- Reason: contains a dated product example ("2022: 2 TB microSD", "Source: Wikipedia (2022)") and a historical claim about Moore's Law ("Density of transistors on a chip would double approximately every 24 months", 1965) that cannot be confirmed from governed sources.
- Proposed body: slide content unchanged (1. We're generating data — people, smart home, connected car; 2. Moore's Law; storage getting cheaper — 2005 vs. 2014 vs. 2022 cards), plus the label: *Examples as shown in the 2025 deck (latest example: 2022). They illustrate a trend; they are not current product specifications.* The Moore's Law sentence stays only if VX08 confirms it. *[VERIFY-EXTERNAL: VX08]*
- Source: N12 #28. External verification: yes — VX08.

#### N12 #30, #32, #35 — 3Vs of Big Data (repeats) — **MERGE → #27**
- Reason: identical text to #27; replaced by the "You are here" strip (see #27).

#### N12 #31 — Velocity (60-seconds infographic) — **KEEP-BUT-DATE**
- Reason: the infographic's year is not stated on the slide (source line: go-gulf.com/blog/60-seconds). Its numbers are not current claims.
- Proposed title: "Velocity: what happens in 60 seconds?"
- Proposed body: infographic unchanged + label *Older infographic (source as cited on the 2025 slide: go-gulf.com; year to be confirmed). Use it to feel the pace, not to quote the numbers.* Prompt: *Pick one number on it. How would you check it?* *[VERIFY-EXTERNAL: VX09]*
- Source: N12 #31. External verification: yes — VX09.

#### N12 #33 — Variety: structured vs. unstructured — **REVISE**
- Reason: the slide displays one YouTube ID and links to another. Per the lock, the link is not silently repaired; the teaching point is rewritten so it stands without the video.
- Proposed title: "Variety: structured vs. unstructured data"
- Proposed body: **Structured data** — organized rows and columns, such as database tables or a spreadsheet. **Unstructured data** — documents (PDF), audio, video, social-media posts. Why it matters: most techniques in this course start with structured tables; text mining, later in the course, is how we work with unstructured text. *(Video reference held pending VX04/VX05; no ID is displayed.)*
- Source: N12 #33 (image kept); CP §6 (text mining in Weeks 14–15). External verification: yes — VX04, VX05.

#### N12 #35 — 3Vs of Big Data (repeat) — **MERGE → #27** (see #30)

#### N12 #36 — Data: why does BA rely on data? — **REVISE**
- Reason: five open questions with no pointer to where the course answers them.
- Proposed title: "Data: why does business analytics rely on it?"
- Proposed body: Important questions about data — What kinds of data? How do we get it (data collection)? How do we manage it? How do we analyze it? **Where this course answers them:** data types and data management — Weeks 4–5; analysis techniques — Weeks 9–15 (CP §6). Data-literacy habit: say when and how a dataset was collected (for example, the App Store dataset is a snapshot collected in July 2013 and is labeled as such, CS F-13).
- Source: N12 #36; CP §6; CS F-13. External verification: no.

#### N12 #37, #43, #46 — Key Elements of Business Analytics (repeats) — **MERGE → #23**
- Reason: identical text to #23 used as section markers. Replaced by a one-line "You are here: Data / Analytics / Business problem / Insights" strip at the start of each section.

#### N12 #40 — Descriptive Analytics: Google Analytics — **KEEP-BUT-DATE**
- Reason: undated product screenshot (the image shows an "automated marketing reports" dashboard with a Google Analytics selector). Interfaces and product names change over time.
- Proposed title: "Descriptive analytics in practice: a dashboard"
- Proposed body: screenshot unchanged + label *Example dashboard as used in the 2025 deck; interfaces and product names change over time.* Prompt: *Which numbers here say what happened? What question would you need predictive analytics for?* *[VERIFY-EXTERNAL: VX10]*
- Source: N12 #40. External verification: yes — VX10.

#### N12 #42 — Google Flu Trends — **REVISE**
- Reason: the image is a 2008-era newspaper graphic. It is a good predictive-analytics example and a good verification lesson, but later performance cannot be stated from governed sources.
- Proposed title: "Predictive analytics in the wild: Google Flu Trends — and a question to ask"
- Proposed body: What the graphic shows: estimates built from flu-related Google search terms, drawn beside the flu incidence reported by the US CDC for 2003–2008; the two lines track each other closely (as its caption says). Intended use: healthcare-system advisory, planning and optimisation. **Check-it prompt:** a model that fit past data can still fail later. How would you check it on new data before you rely on it? *[VERIFY-EXTERNAL: VX11 — add one sentence about what happened later only after verification.]*
- Source: N12 #42 (image text); VS (habit). External verification: yes — VX11.

#### N12 #50 — Benefits of Business Analytics (title only) — **MERGE → #51**
- Reason: a section title; folded into #51's new title.

#### N12 #51 — Values of Business Analytics — **REVISE**
- Reason: benefits are stated as certainties; the "no hype" principle needs the limit named. The video link (`HbHTvqZE3D8`) goes to the verification queue.
- Proposed title: "Values of business analytics — and their limits"
- Proposed body: **What BA can help with:** examining large amounts of data; identifying hidden patterns and unknown correlations; better business decisions, strategic and operational; improved financial performance, strategic management and operational efficiency; effective marketing, customer satisfaction, increased revenue. **Competitive advantage:** many businesses in an industry offer similar products, comparable technologies and business processes; BA lets a company modify its business processes to maximize their business value. **Limit:** BA supports decisions; it does not make results certain. The value depends on asking the right question, trustworthy data, and checking the answer.
- Source: N12 #50–#51; BP §7. External verification: yes — VX06 (video).

#### N12 #52 — What's Next… — **REVISE**
- Reason: the assignment names `Seminar 3_R.pdf`, which does not match the regenerated tutorial named in the currency spec (`Seminar 3_R Tutorial_DataFrame.pdf`); and the closing slide should carry the tool-free habit.
- Proposed title: "What's next…"
- Proposed body: **Course topic:** Seminar 3 — Data Structure and Basics in R. **Assignment:** read the Seminar 3 R tutorial and do its exercises *[exact file name/version fixed at build — see §7]*. **Habit from here:** we do things by hand first. Before you trust any output, check it yourself — predict it, work it out, compare.
- Source: N12 #52; CS F-9; BP §7; VS. External verification: no.

#### N12 #53 — Review (R basics, with code screenshots) — **DELETE**
- Reason: R content (values, vectors, indexing, functions; the code image shows a vector example) is the subject of Seminar 3 (Weeks 2–3), and it sits after the "What's Next" slide, out of sequence. No governed input places an R review in this foundations deck. Technical depth belongs in the later module.
- Note: candidate for a review slide in the Seminar 3 deck; that is a cross-deck decision deferred to ChatGPT (see §7). The code image also contains the typo "chatacter".

### 4b. Slides kept as they are

| N12 # | Topic | Disposition | Reason | 2027 teaching purpose | 2027 title / body | Source | Ext. verify |
|---:|---|---|---|---|---|---|---|
| 5 | Vocabulary Test | KEEP | Strong opener; sets the check-back used at #17 | Self-assess vocabulary | Unchanged (ten terms) | N12 | no |
| 7 | Data Science and Data Mining | KEEP | Plain definitions + icon banner work | Place data science vs. data mining | Unchanged (copy-edit: "extracts of information" → "extracts information") | N12 | no |
| 8 | Analytics definitions | KEEP | INFORMS/Wikipedia definitions give the frame #10 relies on | Define analytics | Unchanged | N12 | yes — VX01 |
| 9 | Analytics process (8 steps) | KEEP | Core process; absorbs #21 | Show the end-to-end process | Unchanged | N12 | no |
| 15 | "What is Business Analytics?" video | KEEP | Slide stands without the video | Optional motivating clip | Unchanged; video held (display `ly1RSNRWmEs`, link `6jDjeNJrN14`, not repaired) | N12; BP F-6 | yes — VX02, VX03 |
| 17 | Summary (absorbs #20) | KEEP | Nested-circles recap | Place the terms in one picture (data science ⊃ data analytics ⊃ business analytics ⊃ data mining) + vocabulary check-back | As N12 #17 + carried check-back from #20 | N12 | no |
| 23 | Key Elements of BA (master; absorbs #22, #37, #43, #46) | KEEP | Framework backbone | Data → Analytics → Business problem → Insights for decision making | Unchanged | N12 | no |
| 26 | Difficulties | KEEP | Bridges "big" to the Vs | Motivate the Vs | Unchanged | N12 | no |
| 29 | Challenges / Data Explosion | KEEP | Conceptual chart, no figures | Show the gap between data and our ability to use it | Unchanged (processing capabilities, storage, networking and architecture; Data Explosion chart: available data vs. your ability to do something with data) | N12 | no |
| 34 | What is Big Data? – Variety (video) | KEEP | Display ID and link agree; slide stands without video | Optional clip on Variety | Unchanged; video held | N12; BP F-6 | yes — VX05 |
| 38 | Analytics: methods and types | KEEP | Sets descriptive vs. predictive | Name the two types | Unchanged | N12 | no |
| 39 | Descriptive Analytics | KEEP | Clear, business-relevant | Descriptive = what has happened | Unchanged | N12 | no |
| 41 | Predictive Analytics | KEEP | Clear | Predictive = what could happen | Unchanged | N12 | no |
| 44 | Business Problems | KEEP | Strong, relatable examples | Define a business problem as a gap | Unchanged | N12 | no |
| 45 | Common BA Problems | KEEP | Concrete problems BA can answer | Which problems are predictable/measurable | Unchanged | N12 | no |
| 47 | Data, Information, Knowledge | KEEP | Bridges data → decision before #48 | Show the ladder to decision making | Unchanged (image: Data raw → Information processed → Knowledge actionable → Decision making, adaptive loop) | N12 | yes — VX12 |
| 48 | Insights | KEEP | Defines the fourth element | Insight closes the gap between current and desired state | Unchanged (copy-edit: "deired" → "desired") | N12 | no |
| 49 | Insights for these BA problems | KEEP | Links problems to recommendations | Practise turning a result into an action | Unchanged | N12 | no |

## 5. Proposed additions

**None (ADD = 0).** Every governed objective for this deck is met by revising existing slides: the verification habit is carried by #3, #25, #27, #31, #42, #51 and #52; the two-literacies link by #2. A "third literacy" slide is **not** added here: the governed note and script place it in Seminar 1 (right after the two-literacies slide), not in Seminar 2. An "AI-assisted analytics workflow" slide in Seminar 2 (roadmap row M-6, F-7) is also not added — the later approved blueprint makes M-6 AI-tool-free and W1-X keeps AI collaboration after the hand foundation; this conflict is flagged in §7.

## 6. Resulting 2027 sequence (37 slides)

New # ← N12 #: 1←1 · 2←2 · 3←3 · 4←5 · 5←6 · 6←7 · 7←8 · 8←9 (+21) · 9←10 · 10←11 (+12, 13) · 11←14 · 12←15 · 13←16 · 14←17 (+20) · 15←23 (+22, 37, 43, 46) · 16←24 · 17←25 · 18←26 · 19←27 (+30, 32, 35) · 20←28 · 21←29 · 22←31 · 23←33 · 24←34 · 25←36 · 26←38 · 27←39 · 28←40 · 29←41 · 30←42 · 31←44 · 32←45 · 33←47 · 34←48 · 35←49 · 36←51 (+50) · 37←52.

Removed: #4, #18, #19, #53 (deleted/excluded) and the merged duplicates listed above. Section strips replace repeated marker slides ("You are here" for Data / Analytics / Business problem / Insights, and Volume → Velocity → Variety).

## 7. Explicitly deferred items

1. **All visual/design work** (theme, fonts, colors, layout, redrawn charts) — November tranche. PC-2 (no color-only meaning) applies at that stage.
2. **External verification** — 12 items in `BUSS256_M6_R1_EXTERNAL_VERIFY_QUEUE_v1.md`. No link or claim was repaired here.
3. **R review slide (N12 #53)** — deleted from this deck; whether it moves to the Seminar 3 deck is for ChatGPT/professor.
4. **Seminar 3 reading filename** (#52): N12 says `Seminar 3_R.pdf`; the currency spec names `Seminar 3_R Tutorial_DataFrame.pdf` (and requires regeneration, F-9). Fix at build.
5. **Governed inconsistency to adjudicate (not resolved here):** the W1 note/script say no AI "until after the midterm" and call Week 7 "after the midterm", but the calendar puts M-5 (the first AI on-ramp) at Week 7 and the midterm at Week 8. The #52 text therefore says only "by hand first" and avoids a date.
6. **Roadmap F-7 vs. blueprint:** roadmap row M-6 asks for an "AI-assisted analytics workflow" slide at Seminar 2; the approved blueprint is AI-tool-free. Not added.
7. **Dropped claim:** N12 #24's "Lack of people or companies who can manage Big Data" is not carried (unsupported and time-sensitive). Reinstate only with a verified source.
8. **Copy-edit register (apply at build, no disposition change):** #7 "extracts of information" → "extracts information"; #48 "deired" → "desired"; #53 image typo "chatacter" (slide deleted).
9. **Not reviewed:** speaker notes, animations/builds, slide masters.
10. **Seminar-1 items** (third literacy, McKinsey F-3) and install-guide items (F-20) are outside this deck.

## 8. No-guessing attestation

Every proposed 2027 line is drawn from N12's extracted text or images, the governed M-6 inputs, or COURSE_PROFILE; illustrative examples are labeled and carry no statistics. No current factual claim, URL, product status or figure was supplied from model memory; each such item is marked `[VERIFY-EXTERNAL: VX##]` and queued. No content was reconstructed from N09, N10, N11, the blueprint or general knowledge where N12 was unreadable. No web research was performed. The 2025 source, assessment materials and the original KMB689 worktree were not modified.
