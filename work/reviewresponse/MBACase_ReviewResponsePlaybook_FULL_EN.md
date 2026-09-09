# The Person Who Writes Replies at Night: Harujae's Review-Response Decision

> *The people, firm, and properties in this case are educational composites. Yun Tae-kyung and Harujae do not exist and correspond to no actual operator or lodging business. The research figures, by contrast, are all actual measured values, transcribed without adaptation from Song, M., Seo, H., and Lee, G., "The Impact of Managerial Response to Negative Customer Reviews on the Success of Accommodation Services: Evidence from Online Accommodation Reservation Platforms," Information Systems Review (Korean Society of MIS) 24(3), 2022, pp.1–21, DOI: 10.14329/isr.2022.24.3.001. The underlying data are review-and-reply records **collected from the publicly visible review pages** of the accommodation booking platform **Yanolja**; individual properties are anonymous in the original paper as well. This class uses **only the published paper's facts and synthetic illustrations**, and company details not in the manuscript are "illustrative" only.*

---

## 1 · A Notification at One in the Morning

Yun Tae-kyung's phone buzzed at one in the morning: a review had been posted for Property 3. The content was what he expected — the room smelled, the front desk was unfriendly, the guest would not return.

He opened the reply box and closed it again. Across the three properties, roughly twenty reviews were backed up, some sitting for more than ten days. The people who actually wrote replies were himself and two night-shift staff.

The question was not whether to reply. It was that **replies cost human hours, and those hours were finite.**

---

## 2 · Harujae and Its Three Properties

Harujae is a small chain operating three motels in Seoul. (Firm size, revenue, and staffing details are illustrative and are not manuscript values.) The three differ in district, room count, and clientele.

Harujae's situation reduces to one sentence: **in this segment, a guest has almost no trustworthy signal to rely on in advance.** Hotels have star ratings and chain brands carry a parent company's standards; motels have neither. The signage says nothing about whether the room is clean, the location nothing about whether the front desk is courteous. So what a guest sees inside a booking app converges on one thing — **what people who stayed earlier wrote.**

Once reviews become close to the only signal, the operator's reply beneath a review becomes a signal too. A reply is not a private letter to the guest who wrote it; it is **a public document that the next guest, who has not yet booked, reads alongside the review.**

Timing was also a condition. In 2021, weekly COVID-19 case counts swung sharply. In weeks when guests thinned out, reviews thinned out too — and the capacity to write replies thinned faster. The research that follows covers the same period: **40 weeks, from January 11 to October 17, 2021.** What Yun wanted to know was simple. Does writing replies at night actually bring guests next month?

---

## 3 · Replies Are Not Free

Before the numbers, account for the cost. A single reply costs **time** and **emotional labor**. To write a courteous sentence in response to a complaint about smell, the writer must first absorb that complaint. Hand the task to night-shift staff and front-desk service slips; do it himself and Yun does not do something else.

So the decision here is not "what shall we declare?" but **"where do we spend a limited supply of people and hours?"**

One term needs pinning down. The study that follows examines "negative reviews," and its definition differs from ordinary usage.

> **Definition of a negative review**: not an absolute star threshold (say, 3 or below), but **a review posted in week t−1 that scores lower than that motel's average rating in week t−2.**

Why relative? Rating norms differ across properties. A 4.0 at a place that usually earns 4.6 is not the same event as a 4.0 at a place that usually earns 3.4, and an absolute threshold misses the former while over-counting the latter. **Lumping this together as "low-star reviews" leads to misreading every number in this case.**

---

## 4 · ▶ MBA Deep Dive — What Was Measured, and How

*(Executive sessions may skip this section.)*

There is research that can answer Yun's question — a study of Seoul motel reviews on the Korean accommodation booking platform Yanolja. Read how the sample was narrowed before reading any coefficient.

| Item | Value | Unit |
|---|---|---|
| Number of motels | **865 / 856** | Seoul motels (⚠ below) |
| Reviews collected | **461,516** | reviews |
| Observation window | **40 weeks** | Jan 11 – Oct 17, 2021 |
| Panel before filtering | **35,465** | motel–week observations |
| Final analysis sample | **26,734** | motel–week observations |

⚠ **The manuscript reports two different motel counts.** The abstracts (Korean and English) and the group counts in all three regression tables (4, 5, 6) say **856**; the introduction, the data-collection section, the variable-construction section, and the conclusion say **865**. Section 4.1 in particular uses 865 **both at collection and as the final count** for the 35,465 panel. So the body text uses 865 for collection and for the final sample alike, while 856 appears only in the abstracts and the regression tables.

**"865 is what was collected and 856 is what was analyzed" is not what the manuscript says.** It is a tempting reading, but the manuscript does not make it, so this case **leaves the discrepancy standing.** When reading the regression results, the group count is the 856 printed in the tables.

The unit of analysis is one motel in one week. Because the same motel is observed repeatedly across 40 weeks, the study uses a **panel fixed-effects** model, sweeping out everything constant across the window — location, building condition, the owner's disposition. What remains is **variation within the same motel from week to week.** Four things were measured.

- **Success (outcome)** = the number of reviews the motel received that week, in logs.
- **Response intensity** = the count of **replies to negative reviews in the prior week (t−1)**, in logs.
- **Response timeliness** = the inverse of elapsed time: **1 ÷ (average days to reply + 1)**.
- **Reputation decline** = whether the motel's guest rating fell in the prior week (yes/no).

This fourth variable cannot be transcribed as a single definition, because the manuscript states it two different ways.

> **Body, §4.1.1**: 1 if (cumulative average rating − that week's average rating) is **greater than 0**, otherwise 0
> **Table 1 note**: 1 if (cumulative average rating) − (average rating) is **negative**, otherwise 0

The same subtraction carries opposite sign conditions. **This case does not resolve the discrepancy.** Which side counts as a "decline" is worked out directly in §9.

Compute the inverse once by hand and it becomes intuitive: average one day gives 1÷(1+1)=0.5, average four days gives 1÷(4+1)=0.2 — **higher means faster.** Adding 1 to the denominator prevents division by zero when a reply comes the same day. In the actual sample this measure falls as low as 0.005 (replies that took close to 200 days).

Placing the explanatory variables at **t−1** is also deliberate. Put same-week replies next to same-week reviews and you cannot tell whether replies rose because reviews rose or the reverse. A lag fixes the temporal order but **does not establish causation.**

**[Exhibit A]** presents the variable definitions and sample stages on one page.

---

<!-- pagebreak -->

## 5 · Result 1 — Two Levers

Start with main effects. The values below are from Table 4 of the manuscript (standard errors in parentheses).

| Variable | Coefficient |
|---|---|
| Response intensity (replies to negative reviews, t−1) | **+0.139\*\*\*** (0.010) |
| Response timeliness (reply speed, t−1) | **+0.032\*\*** (0.011) |
| Reputation decline (t−1) | **−0.046\*\*\*** (0.006) |
| Cumulative reviews | +0.130\*\* (0.047) |
| COVID-19 confirmed cases | −0.665\*\*\* (0.020) |
| Constant | 7.143\*\*\* (0.346) |

Observations 26,734 · Groups 856 · Adj R² 0.479 · \*\*\* p<0.001, \*\* p<0.01, \* p<0.05

Yun's answer is in the first row. **Weeks that followed more replies drew more reviews.** Because both outcome and regressor are logged, the reading is an elasticity — **a 1% increase in replies is associated with roughly a 0.14% increase in reviews.** The second row runs the same direction (**weeks that followed faster replies also drew more reviews**), though the coefficient is much smaller. The third row runs the other way: motels whose rating fell in the prior week received fewer reviews the next. Why that row matters becomes clear in §7.

Two control rows are worth reading. Motels with more accumulated reviews received more the following week. And **weeks with rising case counts saw reviews fall sharply** — at −0.665 the largest coefficient in the table. A condition Harujae cannot control moved the outcome far more than the levers it can. That does not make the response strategy pointless; it calibrates **how much room the levers actually have.**

**[Exhibit B]** carries Table 4 in full.

---

## 6 · ▶ MBA Deep Dive — The Levers Amplify Each Other

*(Executive sessions may skip this section.)*

Taken separately, both levers are positive. The operational question is the next one: **which comes first, replying more or replying faster?** The manuscript addressed this with an interaction term. Below is Table 5 of the manuscript (standard errors in parentheses).

| Variable | Coefficient |
|---|---|
| Reply count | **+0.149\*\*\*** (0.011) |
| Reply speed | −0.027 (0.020) |
| **Reply count × Reply speed** | **+0.027\*\*\*** (0.007) |
| Reputation decline | −0.047\*\*\* (0.006) |
| Cumulative reviews | +0.131\*\* (0.047) |
| COVID-19 confirmed cases | −0.663\*\*\* (0.020) |
| Constant | 7.098\*\*\* (0.346) |

Observations 26,734 · Groups 856 · Adj R² 0.480 · \*\*\* p<0.001, \*\* p<0.01, \* p<0.05

Read in the right order. In the interaction model the **standalone coefficient on reply speed is −0.027 and not significant.** Concluding from that row alone that "speed does not matter" is a mistake: with an interaction present, a standalone coefficient describes the effect when the other variable is zero, and a week with zero replies has no defined reply speed.

The signal is the third row. **The interaction, +0.027, is significant.** In weeks with more replies, replying quickly matters more; the converse also holds.

> Note that two coefficients happen to share the same magnitude (−0.027 and +0.027). They are **separate estimates with different signs and different meanings.**

In management terms, a response capability **is worth more bought as a set than as separate parts.**

**[Exhibit C]** carries Table 5 and Figure 2.

---

## 7 · ▶ MBA Deep Dive — The Asymmetry of Reputation Decline

*(Executive sessions may skip this section.)*

This is the heart of the case. The moment Yun actually agonizes over is not an ordinary week but **a week when the rating has fallen.** If limited staff are to be pushed harder in such a week, **should they reply more, or reply faster?** The manuscript split the question into two models. Below is Table 6 of the manuscript. The two models each carry **only one** interaction term, so the opposite cell is left empty in the original.

| Variable | Model 3 (intensity interaction) | Model 4 (timeliness interaction) |
|---|---|---|
| Guest rating decline | **−0.081\*\*\*** (0.013) | **−0.049\*\*\*** (0.007) |
| Reply count | **+0.133\*\*\*** (0.010) | **+0.139\*\*\*** (0.010) |
| Reply speed | **+0.033\*\*** (0.011) | **+0.039\*\*** (0.012) |
| **Rating decline × Reply count** | **+0.020\*\*\*** (0.005) | not in this model |
| **Rating decline × Reply speed** | not in this model | **−0.013** (0.011), not significant |
| Cumulative reviews | +0.129\*\* (0.047) | +0.130\*\* (0.047) |
| COVID-19 confirmed cases | −0.663\*\*\* (0.020) | −0.665\*\*\* (0.020) |
| Constant | 7.142\*\*\* (0.346) | 7.142\*\*\* (0.346) |

Observations 26,734 · Groups 856 · Adj R² 0.480 / 0.479 · \*\*\* p<0.001, \*\* p<0.01, \* p<0.05

The two results must be read side by side.

**Model 3** — in weeks when the rating fell, **increasing reply count mattered more** (interaction +0.020, significant). A lever that was already positive in ordinary weeks grows stronger under stress.

**Model 4** — **no evidence emerged that replying faster matters more when the rating has fallen** (interaction −0.013, not significant). The sign is negative, but the standard error exceeds the coefficient, so even the direction cannot be asserted.

The result is an **asymmetry**. The lever that strengthens under stress is **volume**; for **speed** there is no basis to claim the same.

How to interpret this remains open. It may be that when ratings fall the count of individual replies becomes more visible; that speed's effect is already exhausted in ordinary weeks; or that variation in speed during stressed weeks was small enough to leave the test underpowered. **The manuscript settles none of these, and neither does this case.**

One thing is clear. **The prescription "reply faster when your rating falls" is not supported by this data.** That is not the same as saying it is wrong. It means **this evidence cannot speak to it.** The difference between those two sentences is the most important distinction in this case.

**[Exhibit D]** places Models 3 and 4 side by side, with Figure 3.

---

## 8 · The Shadows in the Data

Before putting numbers to work in a decision, look at what they stand on.

**First, success was measured as review count.** Not bookings, not revenue, not occupancy. Review count is observable and measured identically across motels, but it is **a proxy for revenue, not revenue itself.**

**Second, the sample fell from 35,465 to 26,734.** The manuscript gives one sentence of explanation — that in constructing the variables it "extracted, for each lodging property, only the weeks in which a reply was posted." So **only motel–weeks with a reply remain.** By what rule those 8,731 observations dropped out, and whether motels themselves dropped out, is **not stated in the manuscript.** Going further — saying that "motels which never reply were removed wholesale," or that "what remains is the well-managed set" — is **saying more than the manuscript does.** Equally, with the denominator unknown, the findings should not be read as applying to any motel whatsoever.

**Third, the observation window was unusual.** Table 1 shows weekly COVID-19 case counts averaging 6,791.309 with a standard deviation of 4,313.618, and in Table 4 this variable's coefficient (−0.665) exceeded every other. These 40 weeks were not ordinary times.

**Fourth, the two levers are entangled.** In Table 3, the correlation between review count and reply count is 0.603, the highest in the table. That said, the variance inflation factor peaks at 1.49, short of a level that would destabilize the estimates.

**Fifth, the sign on reply speed flips within the same paper.** This is not an error, and it is the passage in this case worth sitting with longest.

| Where | Value | Sign |
|---|---|---|
| Table 3 · simple correlation between reply speed and review count | **−0.150** | (−) |
| Table 4 · regression coefficient on reply speed | **+0.032** | (+) |

The same two variables, opposite directions. A correlation places them side by side **holding nothing else fixed**; the regression coefficient is what remains **after holding fixed the motel's own permanent characteristics, the week, cumulative reviews, case counts, and reply count.** **The first is variation between motels; the second is variation inside one. Different questions, different answers.**

One direction is visible elsewhere in Table 3 — reply speed correlates **−0.233 with reply count and −0.120 with cumulative reviews.** So the table records a tendency: **motels with more cumulative reviews and more replies tend to show lower reply speed.** The manuscript does not interpret why.

> **Discussion**: What mechanism might produce this pattern? The manuscript offers none; propose your own hypothesis, and judge whether it is testable with this data.

> **Discussion**: Suppose Harujae puts its three properties' reply speeds and review counts side by side in a spreadsheet and the correlation comes out negative. Should Yun conclude that replying faster hurts? If not, what exactly is the question that the spreadsheet cannot answer and this paper's model can?

"Correlation is not causation" does not stick as a slogan. **Watching two numbers in the same paper point opposite ways** is the one physical specimen this case offers.

The descriptive statistics are worth reading alongside. An average motel-week drew 16.806 reviews (SD 16.436), produced 9.118 replies (SD 13.544), and had mean reply speed 0.836. **Review and reply counts have standard deviations as large as, or larger than, their means** — there is scarcely such a thing as an average motel. Reputation decline was not rare either: of the 26,734 observations, Table 2 reports 12,046 (**45.06%**) weeks in which the rating fell and 14,688 (**54.94%**) in which it did not. The "stressed week" of §7 is not an exception but **half of ordinary life.**

**[Exhibit E]** collects Tables 1, 2, and 3.

---

## 9 · ▶ MBA Deep Dive — What If an AI Had Done This

*(Executive sessions may skip this section.)*

Yun fed the paper to an AI tool and asked for a summary. The answer came back clean.

> **The AI's prescription**: "Review response translates directly into performance. Reply to negative reviews **as fast as possible and as much as possible**. Immediate response is especially important when your rating has declined."

It reads well, it is hard to rebut in a meeting, and it is **partly true**. That is what makes it dangerous. Five points need pressing.

**① This is observational, not experimental.** An owner who replies well may be the same owner who already manages cleaning and service well. Fixed effects sweep out "what kind of place this motel inherently is," but not **what varies week to week within the same motel** — a week in which the owner started paying attention, so replies rose and cleaning improved together. The t−1 lag orders events; it does not prove causation.

**② The outcome is not "performance," it is review count.** The AI promoted a proxy into a result. What Yun needs is bookings and revenue.

**③ The sample consists of motels that reply.** "What happens if a place that never replies starts replying?" is a question this sample cannot answer. Harujae's Property 3 is close to exactly that state.

**④ "Negative review" is defined differently.** The AI means low-star reviews; the manuscript means **reviews below that motel's own average over the preceding two weeks.** To execute this prescription, Harujae would first have to **compute its own averages.**

**⑤ The last sentence went past the data.** "Immediate response is especially important when your rating has declined" — that is the −0.013 of §7, and **it was not significant.** The AI deleted a non-significant coefficient from its sentence and transplanted the conclusion of the significant one (+0.020) onto speed.

**⑥ When is this variable equal to 1?** As §4 showed, **the manuscript defines reputation decline in two ways.** The body says 1 when (cumulative − current week) > 0; Table 1 says 1 when that same quantity is negative. The same subtraction, opposite conditions — and until one is chosen, **you cannot say what −0.081 is the effect of.**

> **Try it**: feed this paper to an AI tool and ask, "how is the guest-rating-decline variable defined?" Then sort the answer into two cases — **(a) did it flag that the two definitions differ, or (b) did it smooth them into one?** If it smoothed, note which side it picked and what reason it gives. If it gives no reason, where did that choice come from?

This item differs from the first five. ①–⑤ are cases where the AI **mis-transcribed something the manuscript does contain**; ⑥ is one where **the manuscript itself runs two ways**, so whatever the AI picks is half right and half wrong. When a summary reads smoothly here, that smoothness is itself the signal.

**⑦ ▶ Deep dive — Does this control vary across motels?** The manuscript describes the COVID variable in two different places, and the two do not agree.

> **Table 1**: "the count of new COVID-19 confirmed cases in week t−1 **for motel *i***"
> **§4.1.1 body**: "we controlled for … the count of new **nationwide** COVID-19 confirmed cases in week t−1 (COVID_cases_it)"

The variable subscript is `it`, indexing both motel and week. **Whether this is a single nationwide value shared across all motels or a location- or property-specific value that varies with *i* runs two ways within the manuscript.** Until that is settled, the next question cannot be answered.

> **Question 1**: Does this variable take the same value for every motel, or does it vary across motels?
> **Question 2**: §4.2.1 states that *"panel fixed effects (μ) and time fixed effects (θ) are both included in the model."* Yet a COVID coefficient is reported in all three tables (−0.665, −0.663, −0.663). What does each of the two controls — **time fixed effects θₜ** and this COVID variable — absorb? How could the variation they sweep out overlap, and under what conditions is that overlap a problem or not a problem?

Question 1 is opened by **cross-reading the manuscript** (Table 1 against §4.1.1). Question 2 requires **panel identification knowledge.** No answer is written here — we have no raw data. The exercise is to observe **whether the AI flags the mismatch between the two descriptions, whether it flags the difference between the two controls, or smooths past both**, when asked to explain the model.

One question runs through all seven: **what did the AI delete?** A summary always deletes something, and what gets deleted is usually the non-significant result, the boundary of the sample, the discrepancy the source never resolved — and **the model's identifying conditions.**

---

## 10 · The Decision

Yun pulled up next week's staffing sheet with the backlog still open on screen. Headcount will not grow. Four things must be settled.

**(a) Whether to reply to negative reviews, and how many** — the largest and most consistent lever in the sample was volume. That lever is bought with human hours.

**(b) What reply speed to set as a target** — speed was positive on its own and grew more effective alongside volume. The moment a target in days is set, the staffing sheet changes.

**(c) Whether to commit extra resources in weeks when the rating falls, and what to increase** — under stress the data supported volume and said nothing about speed. Is what it did not say to be treated as absent, or as not yet known?

**(d) Where to place limited staff across the three properties** — the three differ in review volume, reply history, and recent rating trajectory. Should one rule apply identically to all three?

There is no single right answer. The quality of the decision rests not on the conclusion but on **the quality of the evidence** — which row of which table was signed off on, how the non-significant coefficient was handled, and how carefully performance measured by a proxy was carried over to actual revenue.

*(The case stops here.)*
