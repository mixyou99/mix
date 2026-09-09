# The Person Who Writes Replies at Night — Exhibit Set (EN)

> *This set = Exhibits A–E. All figures are **actual measured values transcribed without adaptation** from Song, M., Seo, H., and Lee, G., "The Impact of Managerial Response to Negative Customer Reviews on the Success of Accommodation Services: Evidence from Online Accommodation Reservation Platforms," Information Systems Review (Korean Society of MIS) 24(3), 2022, pp.1–21, DOI: 10.14329/isr.2022.24.3.001. **The original plots (Figures 2 and 3) are not reproduced** — Exhibits C and D describe only what the plots show in the manuscript; consult the paper for the images themselves.*
>
> *Reading order: A, B, E are for executive and MBA sessions; C, D are for the MBA technical session. **Exhibit F is provided as a separate supplement (`EXHIBITS_F`)** — student exercise, problem only. **Exclude the F supplement when distributing to an executive seminar.***
>
> *Significance: \*\*\* p<0.001 · \*\* p<0.01 · \* p<0.05 — the same across all five tables. This follows the manuscript's convention and differs from other cases in the library, so re-check on every table. Standard errors in parentheses.*

---

## Exhibit A · Variables and Sample Stages (shared)

**Data, window, unit of observation**

| Item | Value |
|---|---|
| Platform | Yanolja (`https://www.yanolja.com/`) — collected from publicly visible review pages |
| Target | Motels in Seoul (unrated lodgings without a star system) |
| Window | 2021-01-11 to 2021-10-17, **40 weeks** |
| Reviews collected | **461,516** |
| Panel before filtering | **35,465** motel–week observations |
| Final analysis sample | **26,734** motel–week observations |
| Number of motels | **865 / 856** (⚠ below) |
| Unit of observation | motel × week |
| Review-writing conditions | actual guests only, **within 14 days of stay**, 1–5 stars |

⚠ **The manuscript reports two different motel counts.** The abstracts (Korean and English) and the group counts in all three regression tables (4, 5, 6) say **856**; the introduction, the data-collection section, the variable-construction section, and the conclusion say **865**. Section 4.1 uses 865 both at collection and as the final count for the 35,465 panel. **The manuscript does not sort these two, and neither does this set.**

**Definition of a negative review**

> A review posted in week t−1 that scores **lower than that motel's average rating in week t−2**. Not an absolute star threshold — a **relative** benchmark against the property's own recent history.

**Six variables — four core + two controls (all at lag t−1 except the outcome)**

The body of §4 counts four measured quantities: success, intensity, timeliness, rating decline. The table below also carries the two controls (cumulative_reviews and COVID_cases).

| Class | Role | Variable (i = property, t = week) | Definition | Log |
|---|---|---|---|---|
| **Core** | Outcome (success) | review_count (i, t) | Number of reviews received by motel i in week t | log |
| **Core** | Independent (intensity) | reply_count (i, t−1) | Count of host replies to negative reviews in t−1 | log |
| **Core** | Independent (timeliness) | reply_speed (i, t−1) | 1 ÷ (average days to reply + 1) — **higher = faster** | — |
| **Core** | Situation | rating_decline (i, t−1) | Binary 0/1 (two definitions — below) | — |
| Control | Control | cumulative_reviews (i, t−1) | Cumulative review count at the start of t−1 | — |
| Control | Control | COVID_cases (i, t−1) | (see ⚠ below) | — |

**Rating decline — the manuscript states this two ways**

> **§4.1.1 body**: 1 if (cumulative average rating − that week's average rating) is **greater than 0**, otherwise 0
> **Table 1 note**: 1 if (cumulative average rating) − (average rating) is **negative**, otherwise 0

The same subtraction carries opposite sign conditions. **This Exhibit does not resolve the discrepancy.**

**COVID_cases — the manuscript also states this two ways**

> **Table 1**: "the count of new COVID-19 confirmed cases in week t−1 **for motel *i***"
> **§4.1.1 body**: "we controlled for … the count of new **nationwide** COVID-19 confirmed cases in week t−1 (COVID_cases_it)"

The variable subscript is `it`. **This Exhibit does not resolve this discrepancy either.**

**Operationalization of success (limitation acknowledged in §5.3)**

> Review count is a **proxy** for the number of bookings (Ye et al. 2009, 2011). Actual guest counts and revenue are not observed.

**Model** (panel fixed effects · OLS · robust standard errors)

```
ln(review_count [i,t]) = b0
                       + b1 · ln(reply_count [i, t−1])
                       + b2 · ln(reply_speed [i, t−1])
                       + b3 · rating_decline [i, t−1]
                       + d  · controls       [i, t−1]
                       + theta(t) + mu(i) + eps(i,t)
```

`mu(i)` = property fixed effects. `theta(t)` = time fixed effects.

---

## Exhibit E · Tables 1, 2, 3 (shared)

*These three tables carry no significance stars — the legend belongs on the regression tables (Exhibits B, C, D).*

### Table 1 · Descriptive statistics (N = 26,734)

| Variable | Mean | SD | Min | Max |
|---|---|---|---|---|
| review_count | 16.806 | 16.436 | 0 | 149 |
| reply_count | 9.118 | 13.544 | 0 | 285 |
| reply_speed | 0.836 | 0.257 | 0.005 | 1 |
| rating_decline | 0.451 | 0.498 | 0 | 1 |
| cumulative_reviews | 3,301.352 | 3,092.939 | 2 | 19,552 |
| COVID_cases | 6,791.309 | 4,313.618 | 2,630 | 16,934 |

*Reproduced from Table 1 of the manuscript as printed. See Exhibit A for variable definitions.*

### Table 2 · Distribution of rating_decline

| No decline (=0) | Decline (=1) | Total |
|---|---|---|
| 14,688 (54.94%) | 12,046 (45.06%) | 26,734 (100%) |

### Table 3 · Correlations and VIF

| | review_count (1) | reply_count (3) | reply_speed (4) | rating_decline (5) | cumulative_reviews (6) | COVID (7) | VIF |
|---|---|---|---|---|---|---|---|
| review_count | 1.0 | | | | | | — |
| reply_count | 0.603 | 1.0 | | | | | 1.49 |
| reply_speed | −0.150 | −0.233 | 1.0 | | | | 1.31 |
| rating_decline | 0.033 | 0.069 | −0.021 | 1 | | | 1.11 |
| cumulative_reviews | 0.599 | 0.351 | −0.120 | 0.048 | 1.0 | | 1.08 |
| COVID_cases | −0.305 | −0.190 | −0.031 | 0.002 | 0.066 | 1.0 | 1.03 |

*Row/column indices (1, 3, 4, 5, 6, 7) are shown as printed in the manuscript. Maximum VIF is 1.49.*
