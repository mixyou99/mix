#### Seminars 5-6: R Exercise_data_management ####
rm(list=ls())

## Data Import ##
host <- read.csv('airbnb_host.csv')
review <- read.csv('airbnb_review.csv')


## Merging Datasets ##
head(host)
head(review)

# Q1: Combine the two datasets by "id"
airbnb <- 

head(airbnb)
nrow(airbnb)

##Understand Data##
str(airbnb)
summary(airbnb[,c('num_bed','num_bath','num_language','response_rate', 'room_price', 'superhost', 'num_review', 'overall_rating')])

# Q2-1: Variable Conversion #


# Q2-2: Convert the value type of num_language into integer




## Missing Values ##
# Q3-1: Identify Missing Values in response_rate# 


# Q3-2: Replace the Missing Values with Mean value# 


summary(airbnb[,c('num_bed','num_bath','num_language','response_rate', 'room_price', 'superhost', 'num_review', 'overall_rating')])




## Handling Outliers ##
# Q4-1: Identify outliers in num_language  
# Hint: Compute the mean and SD of num_language   #


# Q4-2: Remove Outliers in Num_language#



# Q4-3 : Identify the number of Missing Values after handling outliers  #

summary(airbnb[,c('num_bed','num_bath','num_language','response_rate', 'room_price', 'superhost', 'num_review', 'overall_rating')])



## Normalization ##
# Q5: Create a function normalizing the values in room_price from 0.0 to 1.0 


summary(airbnb[,c('num_bed','num_bath','num_language','response_rate', 'room_price', 'superhost', 'num_review', 'overall_rating')])




## Variable Transformation ##
# Q6-1: Transform num_review to log(num_review) and name it as "ln_num_review"


# Q6-2: Add "ln_num_review " column into airbnb data 





## Data Summary ##
# Summary Statistices #

summary(airbnb[,c('num_bed','num_bath','num_language','response_rate', 'room_price', 'superhost', 'num_review', 'overall_rating', 'ln_num_review')])




# A Correlation Matrix with variables having missing values #
cor(airbnb[,c('num_bed','num_bath','num_language','response_rate', 'room_price', 'superhost', 'num_review', 'overall_rating', 'ln_num_review')], use="complete.obs")


######### Visialization ###############
install.packages('ggplot2')
library(ggplot2)


## Histogram ##
# Q7: Generate a histogram for Rating_Score using ggplot() 

ggplot(airbnb, aes(factor(overall_rating))) +
  geom_bar(stat = 'count', width =0.3) +
  ggtitle('User Review Socres')+
  xlab('Review Score')+ ylab('Num of hosts')


## Matrix Plot ##
install.packages('ggcorrplot')
library(ggcorrplot)

# Q8: Generate a matirx plot presenting the correlations between the variables using ggcorrplot()

corr <- cor(airbnb[,c('overall_rating','ln_num_review','superhost','room_price')], use="complete.obs")
ggcorrplot(corr, type="lower", lab=TRUE)


## Data Export ##
# Q9: Export the new airbnb data (named as "airbnb_new.csv")to the project folder 
          
             