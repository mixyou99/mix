##### Seminar#7: Association Rules ####### 
rm(list=ls()) 

## Step#1: Understand Business Problem(s): Identify items freqeuntly purchased together  

# Install the "arules" package for association rules 
install.packages('arules') # Install a package 
library(arules) # Activate the installed package

## Step 2: Prepapre the data 

# Load transaction data 
groceries <- read.transactions("groceries.csv", sep = ",")
summary(groceries)  

# Inspect the first 5 transactions 
inspect(groceries[1:5])

# Support for the first 3 items (#transactions including A / #total Transactions)
# The propostion of transactions that contains the item. 
itemFrequency(groceries[, 1:3])

# Visualizing item support - item frequency plots
itemFrequencyPlot(groceries, support = 0.1) # present items with at least 10% support

itemFrequencyPlot(groceries, topN = 20) # Present the most-selling 20 items 


## Step 4: Train a Model on the Data 

# apriori function to run a association analysis 
apriori(groceries)

# Specify the minimum support an confidence 
# Support = 0.006, Confidence = 0.25, Minimum number of items in transactions = 2
groceryrules <- apriori(groceries, parameter = list(support = 0.006, confidence = 0.25, minlen = 2))

groceryrules # number of ruled created

## Step 5: Evaluate Model Performance

# Summary about the Rules 
summary(groceryrules)

# Inspect the first three rules 
inspect(groceryrules[1:3])

## Step 6: Address the Business Problem
# Problem#1: Find the combinations of items that are often purchase together
# Sort the rules based on the lift scores 
inspect(sort(groceryrules, by = "lift")[1:5])

# Problem#2: Develop a recommendation system for shoppers 
# Recommend another item(s) to shoppers purchased "Berry"
berryrules <- subset(groceryrules, items %in% "berries")
inspect(berryrules)

# Save all the rules to a CSV format
write(groceryrules, file = "groceryrules.csv", sep = ",", quote = TRUE, row.names = FALSE)
