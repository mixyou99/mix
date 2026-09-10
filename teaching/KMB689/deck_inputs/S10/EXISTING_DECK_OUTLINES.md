# Wk10 군집 — 기존 덱 슬라이드 목차 (실측)

출처: 2025 Teaching_2025 온전본에서 pptx slide XML 직접 추출.
각 줄 = 슬라이드 번호 + 그 슬라이드의 텍스트 프레임 내용(110자 절단).


## Spring/4_KBM_689_Big Data/Seminar 10 Clustering/Seminar 10_Lecture_Clustering.pptx  — 54장

```
1  Seminar 10 | Clustering | Instructor: Prof. Gun- | woong | Lee | Korea University Business School | KMB689: Bi
2  Today’s Outline | Overview of Clustering | Measures in Clustering | Similarity and Distance | Data Preparation
3  Overview of Clustering | 3
4  Clustering | Clusters: groups of | similar | items/objects | Clustering is an | unsupervised data-mining task
5  Clustering and Business Problems | Clustering is searching for | patterns | in complex data | Patterns can lea
6  Classify the following: | Take a piece of paper and classify the following bags into | x | number of clusters,
7  Numerical Values of Attributes | Product | Country | (Europe =1) | Price | (1,000USD) | Size | (L=3, | M=2, |
8  Measures in Clustering | 8
9  Similarity | Clustering groups the data so that the related elements are placed together (i.e., similarity) |
10  Similarity and Distance | Annual Incomes | A: 10K | B: 20K | C: 100K | 10K | 80K | 90K
11  Similarity and Distance | In Data Science | Similarity between objects = Distance (in numbers) between objects
12  Distance | How to compute the shortest distance between tow dots? | 12 | ( | X | 1, | Y | 1 | ) | (X | 2, | Y
13  Euclidean Distance | Euclidean distance gives the linear distance between any two points in | n | -dimensional
14  Pearson Correlation | Similar (+1) | . | . | . | . | . | . | . | . | . | . | . | . | . | Dissimilar (-1) | . |
15  The Problem with Correlation | The correlation between Person A and Person B | is + | 1.0 | which implies a pe
16  Preparation for Clustering | 16
17  Variable Standardization | Raw distance measures are highly influenced | by scale of measurements | . | A comm
18  Variable Standardization | 18 | Attribute / Variable | Person A | Person B | Age | 15 | 50 | Heights | 186 | 1
19  Example: Variable Standardization | Scale of a variable can influence the clustering outcomes ! | Before Stand
20  Z-score Standardization | Rescale the variables so that they have a | mean of zero | and a | standard deviatio
21  Standardization in R | The | scale () | function allows us to standardize the variables. | Example: Wine Data
22  Types of Clustering | 22
23  Clustering Algorithms | Popular Clustering Algorithms | Hierarchical | k-means | k- | medoids | Fuzzy c-means
24  Hierarchical Methods | Given the input set S, the goal is to produce a hierarchy in which nodes represent subs
25  A | Dendrogram | shows the cluster hierarchy | 22 Clusters | 1 | Cluster | Dissimilarity
26  Measuring Distance in Hierarchical Clustering | Between instances/records | Between clusters
27  Distance Between Two Instances | Euclidean Distance | is most popular: | , where | p | = number of attributes
28  Similarity and Distance | In Data Science | Similarity between objects = Distance between objects | The closer
29  Measuring Distance Between Clusters
30  Minimum Distance | (Cluster A to Cluster B) | Also called | single linkage (nearest neighbor) | Distance betwe
31  Maximum Distance | (Cluster A to Cluster B) | Also called | complete linkage (furthest neighbor) | Distance be
32  Average Distance | Also called | average linkage | Distance between two clusters is | the average of all possi
33  Centroid Distance | Distance between two clusters is the distance between the two cluster centroids. | Centroi
34  Ward’s Method | Concerns the | variance | in a cluster | after merging two clusters | Looks at cluster analysi
35  Ward’s Method | After | A | and | C | are merged, | A | C | ’s distance (variation) is smaller. | 35 | A | B |
36  The Hierarchical Clustering Steps | (Using Agglomerative Method) | Start with | n | clusters (each record is i
37  Reading the | Dendrogram | See process of clustering: | Lines connected lower down are merged earlier | 10 and
38  Reading the | Dendrogram | Determining number of clusters: | For a given “distance | within | clusters”, a hor
39  How to Determine the Number of Clusters | There is no rule or theory | determining the optimal number of clust
40  Pros and Cons | Pros: | Easy to understand (and well-accepted) | Not required to determine the number of clust
41  Summary
42  Partitive Clustering: | k-means Clustering | 42
43  K-Means Clustering | It requires us to specify the number of cluster (=K)beforehand. | K can be determined by
44  K-Means Clustering Algorithm | Determine the number of K (i.e., number of clusters) | Randomly select K centro
45  K-Means Clustering Example | https://www.youtube.com/watch?v=Np9VuEg_aqo
46  K-means Algorithm: | Choosing | k | and Initial Partitioning | Choose | k | based on the how results will be u
47  Distance Between Two Instances | Euclidean Distance
48  Within-clusters Sum of Squares | Minimize the within-groups/clusters sum of squares (WSS) | WSS(k) = | where,
49  Choosing the Number of Clusters | Elbow method | Gauge how the heterogeneity within clusters changes for vario
50  Pros and Cons | Pros: | Low complexity | Performs well enough under many real-world use cases | Cons: | Necess
51  Validating Clusters
52  Interpretation | Goal: | obtain meaningful and useful clusters | Caveats: | (1) Random chance can often produc
53  Desirable Cluster Features | Stability | – are clusters and cluster assignments sensitive to slight changes in
54  Summary | Cluster analysis is an exploratory tool. Useful only when it produces | meaningful | clusters | Hier
```

## Fall/BUSS256_BigData/Seminar 10-11 Clustering/Seminars 10-11_Clustering_Lecture_Inclass2_25F.pptx  — 64장

```
1  1 | BUSS256: Introduction to Big Data Analytics and Interpretation | Seminars 10-11 | Clustering | Instructor:
2  Today’s Outline | Overview of Clustering | Measures in Clustering | Similarity and Distance | Data Preparation
3  Overview of Clustering | 3
4  Clustering | Clusters: groups of | similar | items/objects | Clustering is an | unsupervised data-mining task
5  Clustering and Business Problems | Clustering is searching for | patterns | in complex data | Patterns can lea
6  6 | More Applications | Bank/Internet Security | : | fraud/spam pattern discovery | Biology | : taxonomy of li
7  Classify the following: | Take a piece of paper and classify the following bags into | x | number of clusters,
8  Measures in Clustering | 8
9  Similarity | Clustering groups the data so that the related elements are placed together (i.e., similarity) |
10  Similarity and Distance | Annual Incomes | A: 10K | B: 20K | C: 100K | 10K | 80K | 90K
11  Similarity and Distance | In Data Science | Similarity between objects = Distance (in numbers) between objects
12  Euclidean Distance | Euclidean distance gives the linear distance between any two points in | n | -dimensional
13  Distance | How to compute the shortest distance between tow dots? | 13 | ( | Y | 1 | , | X | 1 | ) | (Y | 2 |
14  Pearson Correlation | Similar (+1) | . | . | . | . | . | . | . | . | . | . | . | . | . | Dissimilar (-1) | . |
15  The Problem with Correlation | The correlation between Person A and Person B | is + | 1.0 | which implies a pe
16  Preparation for Clustering | 16
17  Variable Standardization | Raw distance measures are highly influenced | by scale of measurements | . | A comm
18  Variable Standardization | 18 | Attribute / Variable | Person A | Person B | Age | 15 | 50 | Heights | 186 | 1
19  Example: Variable Standardization | Scale of a variable can influence the clustering outcomes ! | Before Stand
20  Z-score Standardization | Rescale the variables so that they have a | mean of zero | and a | standard deviatio
21  Standardization in R | The | scale () | function allows us to standardize the variables. | Example: Wine Data
22  Types of Clustering | 22
23  Clustering Algorithms | Popular Clustering Algorithms | Hierarchical | k-means | k- | medoids | Fuzzy c-means
24  Hierarchical Methods | Given the input set S, the goal is to produce a hierarchy in which nodes represent subs
25  A | Dendrogram | shows the cluster hierarchy | 22 Clusters | 1 | Cluster | Dissimilarity
26  Measuring Distance in Hierarchical Clustering | Between instances/records | Between clusters
27  Distance Between Two Instances | Euclidean Distance | is most popular: | , where | p | = number of attributes
28  Similarity and Distance | In Data Science | Similarity between objects = Distance between objects | The closer
29  29
30  30
31  Review | : Clustering | 31
32  Similarity and Distance | In Data Science | Similarity between objects = Distance (in numbers) between objects
33  Variable Standardization | Raw distance measures are highly influenced | by scale of measurements | . | A comm
34  Variable Standardization | 34 | Attribute / Variable | Person A | Person B | Age | 15 | 50 | Heights | 186 | 1
35  Clustering Algorithms | Popular Clustering Algorithms | Hierarchical | k-means | k- | medoids | Fuzzy c-means
36  Hierarchical Clustering | Given the input set S, the goal is to produce a hierarchy in which nodes represent s
37  A | Dendrogram | shows the cluster hierarchy | 22 Clusters | 1 | Cluster | Dissimilarity | Merge | individual
38  Measuring Distance in Hierarchical Clustering | Between instances/records | Between clusters | The goal is to
39  Distance Between Two Instances | Euclidean Distance | is most popular: | , where | p | = number of attributes
40  Measuring Distance Between Clusters
41  Minimum Distance | (Cluster A to Cluster B) | Also called | single linkage (nearest neighbor) | Distance betwe
42  Maximum Distance | (Cluster A to Cluster B) | Also called | complete linkage (furthest neighbor) | Distance be
43  Average Distance | Also called | average linkage | Distance between two clusters is | the average of all possi
44  Centroid Distance | Distance between two clusters is the distance between the two cluster centroids. | Centroi
45  Ward’s Method | Concerns the | variance | (overall distances among objects) in a cluster | after merging two c
46  Ward’s Method | After | A | and | C | are merged, | A | C | ’s distance (variation) is smaller. | 46 | A | B |
47  The Hierarchical Clustering Steps | (Using Agglomerative Method) | Start with | n | clusters (each record is i
48  Reading the | Dendrogram | See process of clustering: | Lines connected lower down are merged earlier | 10 and
49  Reading the | Dendrogram | Determining number of clusters: | For a given “distance | within | clusters”, a hor
50  How to Determine the Number of Clusters | There is no rule or theory | determining the optimal number of clust
51  Pros and Cons | Pros: | Easy to understand (and well-accepted) | Not required to determine the number of clust
52  Partitive Clustering: | k-means Clustering | 52
53  K-Means Clustering | It requires us to specify the number of cluster (=K)beforehand. | K can be determined by
54  K-Means Clustering Algorithm | Determine the number of K (i.e., number of clusters) | Randomly select K centro
55  K-Means Clustering Example | https://www.youtube.com/watch?v=Np9VuEg_aqo
56  K-means Algorithm: | Choosing | k | and Initial Partitioning | Choose | k | based on the how results will be u
57  Distance Between Two Instances | Euclidean Distance
58  Within-clusters Sum of Squares | Minimize the within-groups/clusters sum of squares (WSS) | WSS(k) = | where,
59  Choosing the Number of Clusters | Elbow method | Gauge how the heterogeneity within clusters changes for vario
60  Pros and Cons | Pros: | Low complexity | Performs well enough under many real-world use cases | Cons: | Necess
61  Validating Clusters
62  Interpretation | Goal: | obtain meaningful and useful clusters | Caveats: | (1) Random chance can often produc
63  Desirable Cluster Features | Stability | – are clusters and cluster assignments sensitive to slight changes in
64  Summary | Cluster analysis is an exploratory tool. Useful only when it produces | meaningful | clusters | Hier
```
