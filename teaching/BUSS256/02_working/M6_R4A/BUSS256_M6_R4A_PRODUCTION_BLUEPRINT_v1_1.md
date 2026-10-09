# BUSS256 M6-R4A — Production Blueprint v1.1

## Production constraints

- Exactly 36 lecture slides; M6-R4B remains HOLD.
- Six-technique spine: clustering, association, classification, prediction, data visualization, text mining.
- Generic slides visibly use **ILLUSTRATIVE EXAMPLE**; Target uses **HISTORICAL EXAMPLE — 2012 REPORTING**.
- No code, exercise assets, assessment material, or held-data content. CRISP-DM is **Chapman et al. (2000)**.

## Slide-by-slide blueprint

### 1. Overview of Data Analytics
**Role:** OPEN. **Message:** Match an analytical technique to a business question. **Lineage:** 1 KEEP.

### 2. Business Question, Data, Analytics, Insight
**Role:** BRIDGE. Brief recall: a decision question, relevant data, method, and interpretable insight. **Lineage:** 2 + 4 MERGE.

### 3. Seminar 4 Learning Objectives
**Role:** CONCEPT. Match questions to six techniques; distinguish targets and patterns; interpret limits. **Lineage:** 3 REVISE.

### 4. Churn: Business Concern and Retention Question
**Role:** EXAMPLE. **ILLUSTRATIVE EXAMPLE:** a telecommunications provider asks where a retention conversation may be warranted near renewal. No company claim or statistic. **Lineage:** 5 KEEP-BUT-CLARIFY + 6 REVISE.

### 5. Decomposing the Retention Problem
**Role:** BRIDGE. Keep distinct: `Who may leave?` (risk), `What information supports it?` (evidence), `Which action deserves evaluation?` (action/evaluation). Select a technique only after decomposition. **Lineage:** 7 KEEP + 8 REVISE.

### 6. Risk Prediction Is Not Intervention Evaluation
**Role:** LIMIT. A risk estimate does not establish that an offer caused retention. **Lineage:** 9 KEEP-BUT-CLARIFY.

### 7. Data-Mining Techniques
**Role:** CONCEPT. Different questions need different methods. **Lineage:** 10 + 11 MERGE.

### 8. Six Technique Families
**Role:** CONCEPT. Clustering—groups; association—co-occurrence; classification—class; prediction—number; visualization—plots; text mining—textual patterns. **Lineage:** 12 KEEP.

### 9. Clustering
**Role:** TECHNIQUE. Find useful similarity-based groups without a known target; groups are not automatically business categories. **Lineage:** 13.

### 10. Similarity as a Sorting Question
**Role:** ILLUSTRATIVE ACTIVITY. Group products and state the attribute used; multiple groupings can be reasonable. **Lineage:** 14.

### 11. Attributes for Grouping
**Role:** CONCEPT. Selected attributes define the similarity question; category codes are not naturally close because they are numbers. **Lineage:** 15 + 16.

### 12. Distance Depends on Representation
**Role:** LIMIT. Distance is a modeling choice, not objective similarity. **Lineage:** 17.

### 13. More Than One Grouping Can Be Useful
**Role:** TECHNIQUE. Compare two broad versus three specific groups; choose distinctions useful to a decision. **Lineage:** 18 + 19 MERGE.

### 14. Customer Segments as Decision Inputs
**Role:** LIMIT. Segments can guide questions, but do not explain why behavior occurs. **Lineage:** 20.

### 15. Association
**Role:** TECHNIQUE. What tends to occur together? Co-occurrence is not causation. **Lineage:** 21.

### 16. Items Purchased Together
**Role:** EXAMPLE. **ILLUSTRATIVE EXAMPLE:** a retailer examines transaction combinations to ask a merchandising question, not assert causality. **Lineage:** 22 REVISE.

### 17. Classification
**Role:** TECHNIQUE. Labeled past cases estimate a discrete class for a new case; it is neither causal explanation nor certainty. **Lineage:** 24 + 25 MERGE.

### 18. Classification: A Discrete Target
**Role:** EXAMPLE. **ILLUSTRATIVE EXAMPLE:** `Which customers are likely to renew / not renew?` **Output:** class label. **Lineage:** pedagogical carrier derived from approved classification concept.

### 19. Prediction
**Role:** TECHNIQUE. Estimate a numeric value for a new case; a forecast is not guaranteed. **Lineage:** 26.

### 20. Prediction: A Numeric Target
**Role:** EXAMPLE. **ILLUSTRATIVE EXAMPLE:** `What is next month's expected demand?` **Output:** numeric estimate; uncertainty remains. **Lineage:** pedagogical carrier derived from approved prediction concept.

### 21. Historical Example: Behavioral Inference
**Role:** EXAMPLE. **HISTORICAL EXAMPLE — 2012 REPORTING:** reporting described Target's purchase-history analytics to estimate pregnancy likelihood. Teaching use: prediction/inference, privacy, limits. **Lecturer note:** This is not an association-rule case; omit anecdote, scores, performance claims, and causal claims. **Lineage:** 23 REVISE.

### 22. Data Visualization
**Role:** PREVIEW. What do plots reveal about distributions or relationships? Detailed visualization remains M-5. **Lineage:** 27.

### 23. Text Mining
**Role:** PREVIEW. What patterns appear in text? No tools, packages, or corpus mechanics. **Lineage:** 28.

### 24. Learned Patterns and Explicit Rules
**Role:** CONCEPT. Models learn patterns from examples; programmed choices and human judgment remain. **Lineage:** 29 + 30 + 31 + 32 MERGE.

### 25. Target Availability: Four Task Types
**Role:** CONCEPT. Classification/prediction use known targets; clustering/association discover patterns. This classifies four tasks only; visualization and text mining remain in the spine. **Lineage:** 33.

### 26. Supervised Tasks
**Role:** CONCEPT. Known target; distinguish class from numeric outcome. **Lineage:** 34.

### 27. Unsupervised Tasks
**Role:** CONCEPT. No known target; seek useful patterns. **Lineage:** 35.

### 28. Statistics, Querying, and Analytics
**Role:** BOUNDARY. **Statistics: summarize data and help quantify patterns and uncertainty.** Querying retrieves specified information; analytics/data mining may discover or estimate patterns. These activities can overlap. **Lineage:** 36 + 37 + 38 MERGE.

### 29. Technique Identification Discussion
**Role:** ACTIVITY. Identify the question, output, and fitting technique. **Lineage:** 39 + 40 REVISE.

### 30. Six-Technique Comparison
**Role:** SYNTHESIS. Matrix of technique, typical question, conceptual output; techniques can complement each other. **Lineage:** 12, 21–28, 33 synthesis.

### 31. CRISP-DM 1.0
**Role:** PROCESS. Business understanding through deployment; **Chapman et al. (2000)**. **Lineage:** 43 + 44 MERGE.

### 32. Requirements and Available Data
**Role:** PROCESS. Top-down business needs and bottom-up available data inform each other. **Lineage:** 45.

### 33. Technique Selection and Modeling
**Role:** PROCESS. Choose a task and technique fitting the question and information. **Lineage:** 47.

### 34. Evaluation
**Role:** PROCESS. Validate, compare, and consider stakeholder consequences. **Lineage:** 48.

### 35. Deployment Supports Decisions
**Role:** LIMIT. Deployment supports a business process; it does not automatically make or guarantee a decision. **Lineage:** 49 REVISE.

### 36. Close: Ask, Match, Interpret
**Role:** CLOSE. Ask a clear question, match a technique, interpret limits, and keep human judgment in the decision. **Lineage:** retained synthesis.

## Reconciliation and QA

All 49 canonical slides remain accounted for under the frozen dispositions: KEEP 3; KEEP-BUT-CLARIFY 20; REVISE 10; MERGE 13; DELETE 2; DEFER 1. The opening merges retain sources 5–8; slides 18 and 20 are labeled pedagogical carrier slides, not new source claims.

- Slides: 36 exactly; taxonomy begins at slide 7 (six-family map slide 8).
- Churn opening: three slides (4–6), not five consecutive slides.
- Classification and prediction have distinct illustrative example slides (18, 20).
- Target follows classification and prediction (slide 21), is prediction/inference—not association—and preserves its historical boundary.
- Clustering slides 9–14 have distinct roles (definition, activity, attributes, representation limit, alternatives, decision use); no repetitive slide removed.
- Six-technique spine preserved; M6-R4B leakage 0; content spec modified no; assessment reads 0; source mutations 0; git staged 0; commit 0; push 0.
