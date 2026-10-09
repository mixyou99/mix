# BUSS256 M6-R4A — Seminar 4 Overview of Data Analytics: Production Blueprint v1

## Production constraints

- Target: exactly 36 slides.
- Scope: lecture only. M6-R4B remains HOLD.
- No R code, package, import/export, exercise, `admission.csv`, or InClass content.
- The six-technique spine remains clustering, association, classification, prediction, data visualization, and text mining.
- Generic examples carry the visible label **ILLUSTRATIVE EXAMPLE**.
- The Target item carries the visible label **HISTORICAL EXAMPLE — 2012 REPORTING**.
- The named process citation is **CRISP-DM 1.0 (Chapman et al., 2000)**.

## Slide-by-slide production blueprint

### Slide 1

- **WORKING TITLE:** Overview of Data Analytics
- **ROLE:** OPEN
- **LEARNING PURPOSE:** Identify the seminar’s focus on matching analytical techniques to business questions.
- **CORE MESSAGE:** Analytics begins with a business question and continues with a technique that fits that question.
- **ON-SLIDE CONTENT:** `Seminar 4` / `Overview of Data Analytics` / `Which analytical technique fits which business question?`
- **SOURCE LINEAGE:** Canonical source 1 — KEEP.
- **EXAMPLE STATUS:** NONE
- **VISUAL PLAN:** Minimal title composition with six small labeled technique marks arranged around the question; use shapes and labels so color carries no meaning alone.
- **LECTURER NOTE:** Position this seminar after the prior analytics framing and R preparation. State that today focuses on selecting and interpreting techniques.
- **TRANSITION:** A short recall establishes the starting point for choosing among techniques.

### Slide 2

- **WORKING TITLE:** Business Question, Data, Analytics, Insight
- **ROLE:** BRIDGE
- **LEARNING PURPOSE:** Recall the prior seminar’s basic chain without reteaching it.
- **CORE MESSAGE:** A useful analysis links a decision question to relevant data and an interpretable result.
- **ON-SLIDE CONTENT:** `Business question` / `Relevant data` / `Analytical method` / `Insight for a decision` / `Today: choosing the method`
- **SOURCE LINEAGE:** Canonical sources 2 and 4 — MERGE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Four-step horizontal flow with numbered nodes and short labels; use node numbers and connector lines in addition to color.
- **LECTURER NOTE:** Keep this recall brief. Do not redefine analytics or repeat M6-R1 examples.
- **TRANSITION:** The next slide states what students will be able to do with this chain.

### Slide 3

- **WORKING TITLE:** Seminar 4 Learning Objectives
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** State the intended capabilities for the lecture.
- **CORE MESSAGE:** Students will connect business questions, technique families, outputs, and limits.
- **ON-SLIDE CONTENT:** `Match six techniques to business questions` / `Distinguish target-based and pattern-discovery tasks` / `Interpret outputs without claiming causality or certainty` / `Place technique choice in an analytics workflow`
- **SOURCE LINEAGE:** Canonical source 3 — REVISE.
- **EXAMPLE STATUS:** NONE
- **VISUAL PLAN:** Four concise objective lines with a small question-to-technique diagram; no dense bullet block.
- **LECTURER NOTE:** Read the objectives as a map, not as a checklist. Emphasize interpretation as well as technique names.
- **TRANSITION:** A familiar churn problem shows why one broad business problem contains several analytical questions.

### Slide 4

- **WORKING TITLE:** Customer Churn as a Business Problem
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** Introduce churn as a decision context that requires smaller analytical questions.
- **CORE MESSAGE:** Retention decisions need a clear definition of the customer problem before a technique is chosen.
- **ON-SLIDE CONTENT:** `Business concern: customers may leave` / `Decision: where should retention attention go?` / `Analytical work begins by narrowing the question`
- **SOURCE LINEAGE:** Canonical source 5 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A customer journey strip ending at a renewal decision; use text labels and directional connectors.
- **LECTURER NOTE:** Treat churn as a framing case, not as evidence for a particular company.
- **TRANSITION:** The next slide makes the retention question concrete without relying on an unsupported company claim.

### Slide 5

- **WORKING TITLE:** A Retention Question
- **ROLE:** EXAMPLE
- **LEARNING PURPOSE:** Show a simple course-owned churn question that supports later decomposition.
- **CORE MESSAGE:** A business can look for customers whose renewal point and observed behavior suggest a retention conversation.
- **ON-SLIDE CONTENT:** `ILLUSTRATIVE EXAMPLE` / `A telecommunications provider wants to identify customers nearing renewal whose observed behavior may warrant a retention conversation.` / `This is a teaching example, not a company result.`
- **SOURCE LINEAGE:** Canonical source 6 — REVISE; VX-R4A-01 NOT-VERIFIED.
- **EXAMPLE STATUS:** ILLUSTRATIVE
- **VISUAL PLAN:** A neutral renewal timeline with an unlabeled provider icon and a decision prompt. Use the written disclosure directly below the example.
- **LECTURER NOTE:** Do not name a company, cite a percentage, or imply that a real provider achieved an outcome.
- **TRANSITION:** A good business question becomes several smaller questions before anyone selects a model.

### Slide 6

- **WORKING TITLE:** Questions Behind Retention
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** Separate the decisions involved in a churn problem.
- **CORE MESSAGE:** Identifying likely churn and deciding what action to take are different questions.
- **ON-SLIDE CONTENT:** `Who may leave?` / `What information supports that assessment?` / `Which retention action deserves evaluation?`
- **SOURCE LINEAGE:** Canonical source 7 — KEEP.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Three labeled question nodes leading to separate output placeholders: risk estimate, evidence, and intervention evaluation.
- **LECTURER NOTE:** Avoid presenting an intervention as automatically effective. The third question requires evaluation, not a guess.
- **TRANSITION:** The next slide formalizes the move from one broad problem to manageable analytical tasks.

### Slide 7

- **WORKING TITLE:** Business-Question Decomposition
- **ROLE:** BRIDGE
- **LEARNING PURPOSE:** Explain how a broad business issue becomes focused analytical tasks.
- **CORE MESSAGE:** One business problem can contain descriptive, predictive, and evaluative questions.
- **ON-SLIDE CONTENT:** `Business problem` / `Define a decision` / `Break it into analytical questions` / `Identify needed information` / `Choose a fitting technique`
- **SOURCE LINEAGE:** Canonical source 8 — REVISE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A stepped decomposition diagram with one broad prompt branching into smaller labeled questions; branch labels remain readable without color.
- **LECTURER NOTE:** Explain that decomposition prevents a technique from being selected before the question is clear.
- **TRANSITION:** The churn case now shows how separate questions can call for separate methods.

### Slide 8

- **WORKING TITLE:** Churn Subtasks
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** Contrast predicting churn risk with evaluating a retention offer.
- **CORE MESSAGE:** A risk estimate and an intervention decision serve different purposes.
- **ON-SLIDE CONTENT:** `Risk question: which customers may leave?` / `Action question: which offer should we evaluate?` / `A prediction alone does not show that an offer caused retention.`
- **SOURCE LINEAGE:** Canonical source 9 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Two side-by-side pathways with distinct headings, outputs, and a shared caution band at the bottom.
- **LECTURER NOTE:** Use this distinction to introduce the need for a vocabulary of technique families.
- **TRANSITION:** The next slide introduces the vocabulary that organizes those choices.

### Slide 9

- **WORKING TITLE:** Data Mining Techniques
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** Introduce the technique taxonomy without repeating a synonym-heavy definition lesson.
- **CORE MESSAGE:** Different techniques answer different kinds of questions from data.
- **ON-SLIDE CONTENT:** `Data mining: using data to discover patterns or estimate outcomes` / `Technique choice follows the question and available information`
- **SOURCE LINEAGE:** Canonical sources 10 and 11 — MERGE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** One centered question with six restrained technique labels around it; use labels rather than decorative icons alone.
- **LECTURER NOTE:** Avoid treating data mining as a synonym list. It is a family of methods selected for a purpose.
- **TRANSITION:** The next slide names the six technique families used throughout the course.

### Slide 10

- **WORKING TITLE:** Six Technique Families
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** Establish the governed technique spine for the seminar.
- **CORE MESSAGE:** Clustering, association, classification, prediction, visualization, and text mining support different business questions.
- **ON-SLIDE CONTENT:** `Clustering: useful groups` / `Association: co-occurrence` / `Classification: likely class` / `Prediction: likely number` / `Visualization: patterns in plots` / `Text mining: patterns in text`
- **SOURCE LINEAGE:** Canonical source 12 — KEEP.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Six labeled, numbered spokes from a central business-question prompt. Add a short output phrase beneath every technique name.
- **LECTURER NOTE:** Tell students this map will return near the end when they compare techniques.
- **TRANSITION:** Clustering begins with a question about useful similarity-based groups.

### Slide 11

- **WORKING TITLE:** Clustering
- **ROLE:** TECHNIQUE
- **LEARNING PURPOSE:** Define clustering as grouping similar cases when no target outcome is known.
- **CORE MESSAGE:** Clustering finds useful similarity-based groups without a known answer label.
- **ON-SLIDE CONTENT:** `Business question: which customers or objects form useful groups?` / `Conceptual output: group labels based on similarity` / `Support: segmentation and exploration` / `Caution: a group is not automatically a business category`
- **SOURCE LINEAGE:** Canonical source 13 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A simple labeled scatter of distinct shape-marked groups, with a legend using shapes and labels as well as color.
- **LECTURER NOTE:** State that no known target variable tells the method which grouping is correct.
- **TRANSITION:** A familiar sorting activity makes similarity visible before any calculation appears.

### Slide 12

- **WORKING TITLE:** Similarity as a Sorting Question
- **ROLE:** EXAMPLE
- **LEARNING PURPOSE:** Invite students to articulate which attributes matter for a grouping task.
- **CORE MESSAGE:** Clustering depends on what characteristics count as similar for the decision at hand.
- **ON-SLIDE CONTENT:** `ILLUSTRATIVE ACTIVITY` / `How would you group these products?` / `State the attribute you used.`
- **SOURCE LINEAGE:** Canonical source 14 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** ILLUSTRATIVE
- **VISUAL PLAN:** Four or five simple product objects with printed attribute tags. Use a blank grouping area rather than a preassigned answer.
- **LECTURER NOTE:** Ask for more than one reasonable grouping. Do not reveal a single correct segmentation.
- **TRANSITION:** The next slide makes the attributes explicit.

### Slide 13

- **WORKING TITLE:** Attributes for Grouping
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** Show that a clustering input represents cases through selected attributes.
- **CORE MESSAGE:** The selected attributes determine the similarity question the analysis can answer.
- **ON-SLIDE CONTENT:** `Example attributes` / `Price range` / `Purchase frequency` / `Product category` / `Selected attributes shape the groups.`
- **SOURCE LINEAGE:** Canonical sources 15 and 16 — KEEP-BUT-CLARIFY and REVISE.
- **EXAMPLE STATUS:** ILLUSTRATIVE
- **VISUAL PLAN:** A compact three-column attribute table with short labels. Add a callout: `Category codes need interpretation; numbers do not make categories naturally close.`
- **LECTURER NOTE:** Clarify that coding a category with numbers can create a misleading distance if the coding has no ordered meaning.
- **TRANSITION:** Once attributes are chosen, an analysis needs a rule for comparing cases.

### Slide 14

- **WORKING TITLE:** Distance Depends on Representation
- **ROLE:** LIMIT
- **LEARNING PURPOSE:** Explain the role and limit of a simple distance comparison.
- **CORE MESSAGE:** A distance summarizes a chosen representation; it does not prove that two cases are meaningfully alike.
- **ON-SLIDE CONTENT:** `A distance compares selected attribute values` / `Different attributes or scales can change the result` / `Use distance as a modeling choice, not objective truth`
- **SOURCE LINEAGE:** Canonical source 17 — REVISE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Two paired cases with a short attribute list and one measured connector. Use a caption that identifies the comparison rule.
- **LECTURER NOTE:** Keep this conceptual. Do not introduce a formula or a methods lecture.
- **TRANSITION:** The next slide shows that different group counts can produce different useful views.

### Slide 15

- **WORKING TITLE:** More Than One Grouping Can Be Useful
- **ROLE:** TECHNIQUE
- **LEARNING PURPOSE:** Compare alternative cluster counts without claiming a uniquely correct result.
- **CORE MESSAGE:** A grouping can support a decision only when its distinctions are useful and interpretable.
- **ON-SLIDE CONTENT:** `Same cases` / `Two broad groups` / `Three more specific groups` / `Question: which grouping helps the business decision?`
- **SOURCE LINEAGE:** Canonical sources 18 and 19 — MERGE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Two adjacent, shape-labeled cluster sketches with a shared set of points and concise captions.
- **LECTURER NOTE:** Ask what additional action the third group would permit. Avoid stating that a particular group count is objectively best.
- **TRANSITION:** Grouping becomes useful when it informs a concrete business use.

### Slide 16

- **WORKING TITLE:** Customer Segments as Decision Inputs
- **ROLE:** EXAMPLE
- **LEARNING PURPOSE:** Connect clustering outputs to segmentation decisions while preserving uncertainty.
- **CORE MESSAGE:** A segment label can guide questions and actions, but the label still requires interpretation.
- **ON-SLIDE CONTENT:** `Possible use: tailor a retention message by observed segment` / `Check whether the segment is stable, understandable, and useful` / `A segment does not explain why customers behave that way`
- **SOURCE LINEAGE:** Canonical source 20 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A segment-to-decision pathway with an explicit human-review step between the cluster and action.
- **LECTURER NOTE:** Separate a descriptive group from a causal explanation.
- **TRANSITION:** Association asks a different question: what tends to occur together?

### Slide 17

- **WORKING TITLE:** Association
- **ROLE:** TECHNIQUE
- **LEARNING PURPOSE:** Define association as finding co-occurrence patterns.
- **CORE MESSAGE:** Association identifies items or events that tend to appear together.
- **ON-SLIDE CONTENT:** `Business question: what tends to occur together?` / `Conceptual output: an association rule or co-occurrence pattern` / `Support: merchandising and recommendation questions` / `Caution: co-occurrence does not establish cause`
- **SOURCE LINEAGE:** Canonical source 21 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Two labeled item sets connected by an “often together” label. Use a separate caution marker with text rather than color only.
- **LECTURER NOTE:** Repeat the causal caution in plain language.
- **TRANSITION:** A generic retailer example gives the association question a concrete setting.

### Slide 18

- **WORKING TITLE:** Items Purchased Together
- **ROLE:** EXAMPLE
- **LEARNING PURPOSE:** Show an association question without asserting an unverified retailer case.
- **CORE MESSAGE:** Transaction records can reveal recurring item combinations worth examining.
- **ON-SLIDE CONTENT:** `ILLUSTRATIVE EXAMPLE` / `A retailer examines which items tend to occur together in transaction records.` / `Use the pattern to ask a merchandising question, not to claim causality.`
- **SOURCE LINEAGE:** Canonical source 22 — KEEP-BUT-CLARIFY; VX-R4A-02 NOT-VERIFIED.
- **EXAMPLE STATUS:** ILLUSTRATIVE
- **VISUAL PLAN:** A small generic basket diagram with item tags and a written disclosure below it. Do not use any company mark or performance metric.
- **LECTURER NOTE:** Ask students to name a possible next question, such as shelf placement or a recommendation test.
- **TRANSITION:** A historical example shows why behavioral inference requires careful context.

### Slide 19

- **WORKING TITLE:** Historical Example: Behavioral Inference
- **ROLE:** EXAMPLE
- **LEARNING PURPOSE:** Discuss a limited historical report about predictive retail analytics and its privacy implications.
- **CORE MESSAGE:** Purchase-history analytics can support sensitive inferences, which require context and judgment.
- **ON-SLIDE CONTENT:** `HISTORICAL EXAMPLE — 2012 REPORTING` / `Reporting described Target’s use of purchase-history analytics to estimate pregnancy likelihood.` / `Use: discuss prediction, privacy, and limits of inference.` / `Do not treat a prediction as a fact about a person.`
- **SOURCE LINEAGE:** Canonical source 23 — REVISE; VX-R4A-03 VERIFIED-WITH-QUALIFICATION.
- **EXAMPLE STATUS:** VERIFIED-WITH-QUALIFICATION
- **VISUAL PLAN:** A restrained “data signals to sensitive inference” diagram with an explicit privacy-context label. Put the 2012 reporting citation in speaker notes and a short citation line on slide.
- **LECTURER NOTE:** Keep the wording historical. Do not tell the widely repeated individual anecdote, give a prediction score, or claim a business result.
- **TRANSITION:** Classification uses known labels to estimate a discrete class for a new case.

### Slide 20

- **WORKING TITLE:** Classification
- **ROLE:** TECHNIQUE
- **LEARNING PURPOSE:** Distinguish classification from other techniques through a discrete outcome.
- **CORE MESSAGE:** Classification uses labeled past cases to estimate a class for a new case.
- **ON-SLIDE CONTENT:** `Business question: which discrete class is likely?` / `Conceptual output: a class label` / `Past labeled cases inform a new-case estimate` / `Caution: a predicted class is not a causal explanation or certainty`
- **SOURCE LINEAGE:** Canonical sources 24 and 25 — KEEP-BUT-CLARIFY and MERGE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A compact left-to-right labeled-case to new-case diagram, using text labels such as `class A` and `class B`.
- **LECTURER NOTE:** Make the role of a known target explicit. Keep the method conceptual rather than algorithmic.
- **TRANSITION:** Prediction uses a similar target-based logic, but the output is a number rather than a class.

### Slide 21

- **WORKING TITLE:** Prediction
- **ROLE:** TECHNIQUE
- **LEARNING PURPOSE:** Define prediction as estimating a numeric outcome.
- **CORE MESSAGE:** Prediction estimates a numeric value for a new case from patterns in past data.
- **ON-SLIDE CONTENT:** `Business question: what numeric value is likely?` / `Conceptual output: an estimated number` / `Example: expected next-month demand` / `Caution: a forecast does not guarantee an outcome`
- **SOURCE LINEAGE:** Canonical source 26 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A simple input-to-estimated-value flow, with a visually separate uncertainty note.
- **LECTURER NOTE:** Contrast “which class?” with “what number?” directly.
- **TRANSITION:** The next two techniques give students compact previews of later course topics.

### Slide 22

- **WORKING TITLE:** Data Visualization
- **ROLE:** TECHNIQUE
- **LEARNING PURPOSE:** Introduce visualization as a way to examine distributions and relationships.
- **CORE MESSAGE:** Plots help people inspect patterns, variation, and relationships in data.
- **ON-SLIDE CONTENT:** `Business question: what do plots reveal about the data?` / `Conceptual output: visible patterns and comparisons` / `This seminar gives a preview; detailed chart design comes later.`
- **SOURCE LINEAGE:** Canonical source 27 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** One simple labeled dot plot or bar comparison, with annotation labels. No chart-design rules or software steps.
- **LECTURER NOTE:** Keep this a forward pointer. Do not reteach visualization methods here.
- **TRANSITION:** Text mining gives a parallel preview for unstructured textual material.

### Slide 23

- **WORKING TITLE:** Text Mining
- **ROLE:** TECHNIQUE
- **LEARNING PURPOSE:** Introduce text mining as finding patterns in textual material.
- **CORE MESSAGE:** Text mining helps identify recurring themes, terms, and relationships in text.
- **ON-SLIDE CONTENT:** `Business question: what patterns appear in text?` / `Conceptual output: themes, terms, or relationships` / `This seminar gives a preview; tools and corpus mechanics come later.`
- **SOURCE LINEAGE:** Canonical source 28 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A small text excerpt with a few explicitly labeled recurring terms; do not use a decorative word cloud.
- **LECTURER NOTE:** Emphasize that the technique concerns patterns in text, not a particular software package.
- **TRANSITION:** The next slide contrasts an explicit rule with a pattern learned from examples.

### Slide 24

- **WORKING TITLE:** Explicit Rules and Learned Patterns
- **ROLE:** COMPARE
- **LEARNING PURPOSE:** Clarify the difference between a rule written in advance and a pattern learned from examples.
- **CORE MESSAGE:** Analytical models can learn a pattern from data, but people still choose the question, data, representation, and evaluation criteria.
- **ON-SLIDE CONTENT:** `Explicit rule: people specify the condition` / `Learned pattern: data informs a rule for a stated task` / `Human choices remain throughout the process`
- **SOURCE LINEAGE:** Canonical sources 30, 31, and 32 — REVISE and MERGE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Two clearly headed columns with a common decision context below them. Use headers and line structure so the distinction does not depend on color.
- **LECTURER NOTE:** Do not claim that data mining requires no programming or no human rules.
- **TRANSITION:** Target availability provides another practical way to compare several techniques.

### Slide 25

- **WORKING TITLE:** Supervised and Unsupervised Tasks
- **ROLE:** COMPARE
- **LEARNING PURPOSE:** Classify the four data-mining task families by whether a target outcome is available.
- **CORE MESSAGE:** Classification and prediction use known targets; clustering and association discover patterns without that target structure.
- **ON-SLIDE CONTENT:** `Known target available` / `Classification: discrete class` / `Prediction: numeric value` / `No known target` / `Clustering: groups` / `Association: co-occurrence`
- **SOURCE LINEAGE:** Canonical sources 29 and 33 — MERGE and KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A two-column matrix headed by target availability. Include a footnote: `Visualization and text mining remain part of the six-technique spine; this comparison classifies four data-mining tasks.`
- **LECTURER NOTE:** Read the footnote aloud if needed to prevent students from treating visualization and text mining as absent.
- **TRANSITION:** The next slides expand the two sides of this comparison.

### Slide 26

- **WORKING TITLE:** Supervised Tasks
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** Reinforce the meaning of a known outcome in classification and prediction.
- **CORE MESSAGE:** Supervised tasks learn from cases that include the outcome of interest.
- **ON-SLIDE CONTENT:** `Past cases include an outcome label or value` / `Classification estimates a class` / `Prediction estimates a number` / `New cases receive an estimate, not a guarantee`
- **SOURCE LINEAGE:** Canonical source 34 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A small labeled training-case table leading to a new case, with separate class and numeric-output symbols.
- **LECTURER NOTE:** Keep target language consistent with slides 20 and 21.
- **TRANSITION:** Unsupervised tasks begin from patterns in cases without that known outcome.

### Slide 27

- **WORKING TITLE:** Unsupervised Tasks
- **ROLE:** CONCEPT
- **LEARNING PURPOSE:** Reinforce the meaning of pattern discovery without a known target.
- **CORE MESSAGE:** Unsupervised tasks explore structure such as groups and co-occurrence when no outcome label guides the analysis.
- **ON-SLIDE CONTENT:** `No target outcome directs the task` / `Clustering finds groups` / `Association finds co-occurrence` / `Interpretation determines whether a discovered pattern is useful`
- **SOURCE LINEAGE:** Canonical source 35 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A left panel with unlabeled cases and a right panel with two output types: group regions and item links.
- **LECTURER NOTE:** State that unsupervised does not mean automatic business meaning.
- **TRANSITION:** Other analytical activities have different roles and should not be confused with the six technique families.

### Slide 28

- **WORKING TITLE:** Statistics and Querying
- **ROLE:** COMPARE
- **LEARNING PURPOSE:** Set a concise boundary between descriptive statistics, data retrieval, and pattern/model discovery.
- **CORE MESSAGE:** Statistics summarize data, querying retrieves information, and analytical techniques seek patterns or estimates for a question.
- **ON-SLIDE CONTENT:** `Statistics: summarize distributions and variation` / `Querying: retrieve relevant records` / `Analytics techniques: discover patterns or estimate outcomes` / `These activities often work together.`
- **SOURCE LINEAGE:** Canonical sources 36, 37, and 38 — MERGE and REVISE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Three plain columns with a distinct question and output for each activity. Do not introduce unsupported applied claims.
- **LECTURER NOTE:** Use this as a boundary, not a second descriptive-analytics lesson.
- **TRANSITION:** Students now apply technique labels to a short business prompt.

### Slide 29

- **WORKING TITLE:** Choosing a Technique for a Question
- **ROLE:** COMPARE
- **LEARNING PURPOSE:** Let students match a business question to a likely technique family.
- **CORE MESSAGE:** Technique selection follows the question and desired output.
- **ON-SLIDE CONTENT:** `Prompt: “Which customers form useful groups?”` / `Prompt: “Which items tend to occur together?”` / `Prompt: “Which class is likely?”` / `Discuss the likely technique and the output.`
- **SOURCE LINEAGE:** Canonical source 39 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** ILLUSTRATIVE
- **VISUAL PLAN:** Three short question cards with an empty response field for classroom discussion. Keep cards sparse and flat rather than UI-like.
- **LECTURER NOTE:** Invite answers, then ask what evidence would make each technique choice reasonable.
- **TRANSITION:** One retail-pattern prompt highlights the difference between association and causal explanation.

### Slide 30

- **WORKING TITLE:** Reading an Association Prompt
- **ROLE:** LIMIT
- **LEARNING PURPOSE:** Apply association logic and explicitly separate co-occurrence from causation.
- **CORE MESSAGE:** A retail pattern can suggest a question for further testing, but it does not show that one item caused another purchase.
- **ON-SLIDE CONTENT:** `ILLUSTRATIVE EXAMPLE` / `A retailer observes that two products often appear in the same basket.` / `Association question: what pattern appears?` / `Caution: the pattern does not establish why it appears.`
- **SOURCE LINEAGE:** Canonical source 40 — REVISE.
- **EXAMPLE STATUS:** ILLUSTRATIVE
- **VISUAL PLAN:** Two generic product icons in linked baskets with a large written “co-occurrence” label and a separate “not a causal claim” annotation.
- **LECTURER NOTE:** Do not attach a retailer name or a business performance claim.
- **TRANSITION:** The next slide returns to all six techniques as a practical selection reference.

### Slide 31

- **WORKING TITLE:** Six Techniques and Typical Questions
- **ROLE:** COMPARE
- **LEARNING PURPOSE:** Provide a late-deck comparison reference for technique selection.
- **CORE MESSAGE:** Techniques can complement one another; the business question and output guide the first choice.
- **ON-SLIDE CONTENT:** `Clustering — useful groups` / `Association — co-occurrence` / `Classification — likely class` / `Prediction — likely number` / `Visualization — visible patterns` / `Text mining — textual patterns` / `Techniques can work together.`
- **SOURCE LINEAGE:** Canonical source 12 and sources 21–28 and 33 — synthesis of retained six-technique content; no additional technique family.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Compact three-column matrix: technique, typical question, conceptual output. Use row labels, borders, and text so color is supplementary only.
- **LECTURER NOTE:** Point out that a project can use more than one technique. Do not present the matrix as a rigid decision rule.
- **TRANSITION:** Technique choice belongs inside a broader process that connects business needs to deployment.

### Slide 32

- **WORKING TITLE:** CRISP-DM 1.0
- **ROLE:** PROCESS
- **LEARNING PURPOSE:** Introduce a beginner-level analytics process framework.
- **CORE MESSAGE:** A project moves repeatedly between understanding the business and data, preparing data, modeling, evaluation, and deployment.
- **ON-SLIDE CONTENT:** `CRISP-DM 1.0` / `Business understanding` / `Data understanding` / `Data preparation` / `Modeling` / `Evaluation` / `Deployment` / `Chapman et al., 2000`
- **SOURCE LINEAGE:** Canonical sources 43 and 44 — MERGE and KEEP-BUT-CLARIFY; VX-R4A-04 CONTRADICTED and corrected.
- **EXAMPLE STATUS:** VERIFIED
- **VISUAL PLAN:** A simple circular six-phase process with numbered labels and a visible iterative-loop cue. Cite Chapman et al., 2000 in a readable source line.
- **LECTURER NOTE:** Explain that the framework organizes work; it does not guarantee a successful or causal decision.
- **TRANSITION:** The next slide begins the process with the relationship between requirements and available data.

### Slide 33

- **WORKING TITLE:** Requirements and Available Data
- **ROLE:** PROCESS
- **LEARNING PURPOSE:** Connect business requirements with the data that can support them.
- **CORE MESSAGE:** A useful analytics project aligns what decision-makers need with what available data can support.
- **ON-SLIDE CONTENT:** `User requirements` / `Available data` / `Feasible analytical question` / `Revisit the question when data cannot support it`
- **SOURCE LINEAGE:** Canonical source 45 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** Two converging inputs, requirements and available data, meeting at a feasible-question box. Use direct labels and connector lines.
- **LECTURER NOTE:** Explain that top-down and bottom-up views meet through discussion, not through a one-way handoff.
- **TRANSITION:** After a question is feasible, the team selects and fits an appropriate model or technique.

### Slide 34

- **WORKING TITLE:** Modeling and Technique Selection
- **ROLE:** PROCESS
- **LEARNING PURPOSE:** Connect the six-technique map to the modeling stage of an analytics workflow.
- **CORE MESSAGE:** Modeling selects and applies a technique that matches the question, data, and intended output.
- **ON-SLIDE CONTENT:** `Choose a technique that fits the question` / `Fit and compare plausible approaches` / `Keep the intended decision in view` / `A model output still requires evaluation`
- **SOURCE LINEAGE:** Canonical source 47 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A question-to-technique-to-output path using the six technique labels as an anchored reference, not an algorithm diagram.
- **LECTURER NOTE:** Avoid presenting a model as a final answer. Modeling is one stage in a larger workflow.
- **TRANSITION:** Evaluation asks whether the output is reliable and useful for the decision context.

### Slide 35

- **WORKING TITLE:** Evaluation and Stakeholder Judgment
- **ROLE:** LIMIT
- **LEARNING PURPOSE:** Explain that evaluation includes technical comparison and decision consequences.
- **CORE MESSAGE:** Teams evaluate whether an output is dependable enough and appropriate enough for its intended use.
- **ON-SLIDE CONTENT:** `Check performance against the task` / `Compare alternatives` / `Consider errors and stakeholder consequences` / `Prediction and association do not establish causality`
- **SOURCE LINEAGE:** Canonical source 48 — KEEP-BUT-CLARIFY.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** An evaluation checkpoint with two labeled lenses: `technical evidence` and `decision consequences`. Use text labels rather than a traffic-light signal.
- **LECTURER NOTE:** Link back to retention offers: a risk model cannot alone demonstrate that an action caused retention.
- **TRANSITION:** Deployment places a reviewed output into a business process with continued judgment.

### Slide 36

- **WORKING TITLE:** Deployment and Next Steps
- **ROLE:** CLOSE
- **LEARNING PURPOSE:** Close the seminar by connecting deployment to ongoing interpretation and later course work.
- **CORE MESSAGE:** Deployment puts an analytical output into a business process, where people monitor results and reconsider decisions.
- **ON-SLIDE CONTENT:** `Deploy an output within a business process` / `Monitor use and consequences` / `Revisit the question when conditions change` / `Next: deeper work with later technique-focused sessions`
- **SOURCE LINEAGE:** Canonical source 49 — REVISE.
- **EXAMPLE STATUS:** SOURCE-SUPPORTED
- **VISUAL PLAN:** A deployment loop from decision use to monitoring to revised question. Keep a forward-bridge note in the footer.
- **LECTURER NOTE:** End on judgment: analytical outputs support decisions without guaranteeing outcomes.
- **TRANSITION:** End of Seminar 4.

## Source reconciliation

### Canonical source accounting

| Disposition in frozen content spec | Canonical source slides | Count | Blueprint treatment |
|---|---|---:|---|
| KEEP | 1, 7, 12 | 3 | Slides 1, 6, 10 |
| KEEP-BUT-CLARIFY | 5, 9, 13, 14, 15, 20, 21, 22, 24, 26, 27, 28, 33, 34, 35, 39, 44, 45, 47, 48 | 20 | Retained with stated limits, citations, or generic-example treatment where required |
| REVISE | 3, 6, 8, 16, 17, 23, 30, 37, 40, 49 | 10 | Slides 3, 5, 7, 13, 14, 19, 24, 28, 30, 36 |
| MERGE | 2, 4, 10, 11, 18, 19, 25, 29, 31, 32, 36, 38, 43 | 13 | Merged on slides 2, 9, 15, 20, 25, 24, 28, and 32 |
| DELETE | 41, 42 | 2 | No 2027 slide; blank/divider material removed |
| DEFER | 46 | 1 | No M6-R4A slide; later data-management sequence owns the topic |
| **Total** | **1–49** | **49** | **36-slide blueprint reconciled** |

### 36-slide reconciliation

`49 canonical slides − 2 deleted − 1 deferred − 10 saved through explicit merges = 36 proposed slides.`

The late comparison on slide 31 reuses the retained technique taxonomy from sources 12, 21–28, and 33 as a synthesis reference. It adds no technique family and changes no source disposition.

## Build handoff

### Exact sequence

1. Overview of Data Analytics
2. Business Question, Data, Analytics, Insight
3. Seminar 4 Learning Objectives
4. Customer Churn as a Business Problem
5. A Retention Question
6. Questions Behind Retention
7. Business-Question Decomposition
8. Churn Subtasks
9. Data Mining Techniques
10. Six Technique Families
11. Clustering
12. Similarity as a Sorting Question
13. Attributes for Grouping
14. Distance Depends on Representation
15. More Than One Grouping Can Be Useful
16. Customer Segments as Decision Inputs
17. Association
18. Items Purchased Together
19. Historical Example: Behavioral Inference
20. Classification
21. Prediction
22. Data Visualization
23. Text Mining
24. Explicit Rules and Learned Patterns
25. Supervised and Unsupervised Tasks
26. Supervised Tasks
27. Unsupervised Tasks
28. Statistics and Querying
29. Choosing a Technique for a Question
30. Reading an Association Prompt
31. Six Techniques and Typical Questions
32. CRISP-DM 1.0
33. Requirements and Available Data
34. Modeling and Technique Selection
35. Evaluation and Stakeholder Judgment
36. Deployment and Next Steps

### Visual and citation requirements

| Build consideration | Slides |
|---|---|
| Custom editable diagrams | 2, 7, 10, 14, 15, 17, 20, 24, 25, 27, 31, 32, 33, 34, 35, 36 |
| Simple text, cards, or labeled conceptual layouts | 1, 3, 4, 6, 8, 9, 11, 13, 16, 21, 22, 23, 26, 28, 29 |
| Citation required | 19 for the historical 2012 reporting; 32 for Chapman et al., 2000 |
| Generic illustrative examples | 5, 12, 13, 18, 29, 30 |
| Historical Target example | 19 only |
| CRISP-DM | 32 only |
| Project-lead visual review | 10, 15, 25, 31, 32; these anchor the technique map, comparison, and process sequence |

### Open build decisions

No open content decision remains. The eventual builder may select a contemporary visual system and precise layouts, provided the slide count, source lineage, visible example labels, citation requirements, and non-color-only semantics remain intact.

## QA and integrity attestation

| Check | Result |
|---|---|
| Slide entries | Exactly 36 |
| Six-technique spine | Preserved |
| M6-R4B leakage | None |
| Unverified Korea Telecom factual claim | Absent; generic illustrative example only |
| Unverified Walmart factual claim | Absent; generic illustrative example only |
| Target | Historical 2012 reporting and qualification required on slide 19 |
| CRISP-DM authority | Chapman et al., 2000 on slide 32 |
| Legacy incorrect process citation | Absent from blueprint |
| Code, package, or import material | Absent |
| M6-R1 repetition | Restricted to slides 2 and 3 as a concise bridge |
| Source mapping | Reconciled to frozen 49-slide disposition totals |
| Frozen content spec modified | No |
| Assessment reads | 0 |
| M6-R4B contents read | 0 |
| `admission.csv` rows read | 0 |
| Source mutations | 0 |
| Git staged | 0 |
| Commit | 0 |
| Push | 0 |

## Stop condition

This blueprint ends before PPTX production. A separate authorized build instruction is required to create a deck.
