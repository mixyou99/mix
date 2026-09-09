# The Person Who Writes Replies at Night — Exhibit Set (EN)

> *This set = Exhibits A–E. All figures are **actual measured values transcribed without adaptation** from Song, M., Seo, H., and Lee, G., "The Impact of Managerial Response to Negative Customer Reviews on the Success of Accommodation Services: Evidence from Online Accommodation Reservation Platforms," Information Systems Review (Korean Society of MIS) 24(3), 2022, pp.1–21, DOI: 10.14329/isr.2022.24.3.001. **The original plots (Figures 2 and 3) are not reproduced** — Exhibits C and D describe only what the plots show in the manuscript; consult the paper for the images themselves.*
>
> *Reading order: A, B, E are for executive and MBA sessions; C, D are for the MBA technical session. **Exhibit F is provided as a separate supplement (`EXHIBITS_F`)** — student exercise, problem only. **Exclude the F supplement when distributing to an executive seminar.***
>
> *This paper's significance thresholds differ from those used in other cases in the library. The legend is stated separately beneath each regression table (Exhibits B, C, D). Parentheses report standard errors.*

---

## Exhibit A · Variables and Sample Stages (shared)

**Data, window, unit of observation**

| Item | Value |
|---|---|
| Platform | Review data from Yanolja (`https://www.yanolja.com/`) |
| Target | Motels in Seoul (unrated lodgings without a star system) |
| Window | 2021-01-11 to 2021-10-17, **40 weeks** |
| Reviews collected | **461,516** |
| Panel constructed (§4.1) | **35,465** motel–week observations |
| Panel constructed (§4.1.1, after variable construction) | **26,734** motel–week observations |
| Number of motels | **865 / 856** (⚠ below) |
| Unit of observation | motel × week |
| Review-writing conditions | actual guests only, **within 14 days of stay**, 1–5 stars |

⚠ **The manuscript reports two different motel counts.** The abstracts (Korean and English) and the group counts in all three regression tables (4, 5, 6) say **856**; the introduction, the data-collection section, the variable-construction section, and the conclusion say **865**. Section 4.1 uses 865 both at collection and as the final count for the 35,465 panel. **The manuscript does not sort these two, and neither does this set.**
The paper describes both 35,465 and 26,734 as its "final" panel. The rule that removed 8,731
observations is not stated in the paper.

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
| Control | Control | COVID_cases (i, t−1) / it — see note above | (see ⚠ below) | — |

**Rating decline — the manuscript states this two ways**

> **§4.1.1 body**: for motel i, 1 if the value obtained by subtracting the average rating of the reviews posted in week t-1 from the cumulative average rating in week t-1 is greater than 0, and 0 otherwise
> **Table 1 note**: 1 if (cumulative average rating of motel i in week t-1) - (average rating of motel i in week t-1) is negative, and 0 otherwise

The same subtraction carries opposite sign conditions. **This Exhibit does not resolve the discrepancy.**

**COVID_cases — the manuscript also states this two ways**

> **Table 1**: "the count of new COVID-19 confirmed cases in week t−1 **for motel *i***"
> **§4.1.1 body**: "we controlled for … the count of new **nationwide** COVID-19 confirmed cases in week t−1 (COVID_cases_it)"

The paper's subscript notation also diverges — §4.1.1 writes COVID_cases(i, t), while §4.2.1 states that all controls and predictors are measured at week t−1. This exhibit does not resolve that discrepancy either.

**Operationalization of success (limitation acknowledged in §5.3)**

> Review count is a **proxy** for the number of bookings (Ye et al. 2009, 2011). Actual guest counts and revenue are not observed.

**Model** (panel fixed effects · OLS · robust standard errors)

```
ln(review_count [i,t]) = β0
                       + β1 · ln(reply_count [i, t−1])
                       + β2 · ln(reply_speed [i, t−1])
                       + β3 · rating_decline [i, t−1]
                       + δ  · controls       [i, t−1]
                       + θ(t) + μ(i) + ε(i,t)
```

`μ(i)` = property fixed effects. `θ(t)` = time fixed effects.

---

## Exhibit B · Table 4 — Main effects (MBA technical session)

*Manuscript Table 4, "고정효과패널분석 결과" (fixed-effects panel analysis). Reproduced as printed.*

| | Variable | Model 1 Coefficient (Standard error) |
|---|---|---|
| Intensity | reply_count | 0.139\*\*\* (0.010) |
| Timeliness | reply_speed | 0.032\*\* (0.011) |
| Rating decline | rating_decline | -0.046\*\*\* (0.006) |
| Controls | cumulative_reviews | 0.130\*\* (0.047) |
| | COVID_cases | -0.665\*\*\* (0.020) |
| | Constant | 7.143\*\*\* (0.346) |
| | Observations | 26,734 |
| | Groups | 856 |
| | Adjusted R2 | 0.479 |

*Significance: \*\*\*p <0.001, \*\*p < 0.01, \*p < 0.05. Parentheses report standard errors.*

---

## Exhibit C · Table 5 — Timeliness as a moderator (MBA technical session)

*Manuscript Table 5, "적시성의 조절효과 분석 결과". Reproduced as printed.*

| | Variable | Model 2 Coefficient (Standard error) |
|---|---|---|
| Intensity | reply_count | 0.149\*\*\* (0.011) |
| Timeliness | reply_speed | -0.027 (0.020) |
| | reply_count \*reply_speed | 0.027\*\*\* (0.007) |
| Rating decline | rating_decline | -0.047\*\*\* (0.006) |
| Controls | cumulative_reviews | 0.131\*\* (0.047) |
| | COVID_cases | -0.663\*\*\* (0.020) |
| | Constant | 7.098\*\*\* (0.346) |
| | Observations | 26,734 |
| | Groups | 856 |
| | Adjusted R2 | 0.480 |

*Significance: \*\*\*p <0.001, \*\*p < 0.01, \*p < 0.05. Parentheses report standard errors.*

**Manuscript Figure 2 — not reproduced**

> Its caption reads `<그림 2> 적시성 조절효과 그래프`, and its axis label `(모형 2) 적시성×적극성`.
> What the paper shows in that figure is this one sentence — *"as responsiveness to negative reviews increases, the host's intensive replying becomes more effective for the property's success."*
> Consult the original article for the plot itself.

---

## Exhibit D · Table 6 — Rating decline as a moderator (MBA technical session)

*Manuscript Table 6, "평판 하락의 조절효과 분석 결과". Reproduced as printed. Models 3 and 4 each carry one moderation term only; the paper leaves the other cell as `-`.*

| | Variable | Model 3 Coefficient (Standard error) | Model 4 Coefficient (Standard error) |
|---|---|---|---|
| Situational factor (rating decline) | rating_decline | -0.081\*\*\* (0.013) | -0.049\*\*\* (0.007) |
| Intensity | reply_count | 0.133\*\*\* (0.010) | 0.139\*\*\* (0.010) |
| | rating_decline \*reply_count | 0.020\*\*\* (0.005) | - |
| Timeliness | reply_speed | 0.033\*\* (0.011) | 0.039\*\* (0.012) |
| | rating_decline \*reply_speed | - | -0.013 (0.011) |
| Controls | cumulative_reviews | 0.129\*\* (0.047) | 0.130\*\* (0.047) |
| | COVID_cases | -0.663\*\*\* (0.020) | -0.665\*\*\* (0.020) |
| | Constant | 7.142\*\*\* (0.346) | 7.142\*\*\* (0.346) |
| | Observations | 26,734 | 26,734 |
| | Groups | 856 | 856 |
| | Adjusted R2 | 0.480 | 0.479 |

*Significance: \*\*\*p <0.001, \*\*p < 0.01, \*p < 0.05. Parentheses report standard errors.*

**Manuscript Figure 3 — not reproduced**

> Its caption reads `<그림 3> 평판 하락의 조절효과 그래프`, and its axis label `(모형 3) 평판 하락 × 적극성`.
> What the paper shows in that figure is this one sentence — *"as reputation declines, the host's intensive replying to negative reviews becomes more effective for success."*
> Consult the original article for the plot itself.

---

## Exhibit E · Tables 1, 2, 3 (shared)

*These three tables carry no significance stars — the legend belongs on the regression tables (Exhibits B, C, D).*

### Table 1 · Descriptive statistics

| | Variable | Description | N | Mean (SD) | Min (Max) |
|---|---|---|---|---|---|
| Success | review_count | Number of reviews received by motel i in week t | 26,734 | 16.806 (16.436) | 0 (149) |
| Intensity | reply_count | Count of host replies posted in week t-1 to negative reviews of motel i | 26,734 | 9.118 (13.544) | 0 (285) |
| Timeliness | reply_speed | 1/(average number of days from a negative review of motel i to the host's reply posted in week t-1 + 1) | 26,734 | 0.836 (0.257) | 0.005 (1) |
| Rating decline | rating_decline | 1 if (cumulative average rating of motel i in week t-1) - (average rating of motel i in week t-1) is negative, 0 otherwise | 26,734 | 0.451 (0.498) | 0 (1) |
| Controls | cumulative_reviews | Cumulative review count of motel i in week t-1 | 26,734 | 3,301.352 (3,092.939) | 2 (19,552) |
| | COVID_cases | Count of new COVID-19 confirmed cases in week t-1 for motel i | 26,734 | 6,791.309 (4313.618) | 2,630 (16,934) |

*Reproduced from Table 1 of the manuscript as printed.*

### Table 2 · Distribution of rating_decline

| No decline (=0) | Decline (=1) | Total |
|---|---|---|
| 14,688 (54.94%) | 12,046 (45.06%) | 26,734 (100%) |

### Table 3 · Correlations and VIF

| | review_count (1) | reply_count (3) | reply_speed (4) | rating_decline (5) | cumulative_reviews (6) | COVID_cases (7) | VIF |
|---|---|---|---|---|---|---|---|
| review_count (1) | 1.0 | | | | | | — |
| reply_count (3) | 0.603 | 1.0 | | | | | 1.49 |
| reply_speed (4) | −0.150 | −0.233 | 1.0 | | | | 1.31 |
| rating_decline (5) | 0.033 | 0.069 | −0.021 | 1 | | | 1.11 |
| cumulative_reviews (6) | 0.599 | 0.351 | −0.120 | 0.048 | 1.0 | | 1.08 |
| COVID_cases (7) | −0.305 | −0.190 | −0.031 | 0.002 | 0.066 | 1.0 | 1.03 |

*Row/column indices (1, 3, 4, 5, 6, 7) are shown as printed in the manuscript.*
