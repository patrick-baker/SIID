fullset <- read.csv('./Public/train.csv')
extremes <- fullset %>% filter(target > 0.5 )
extremes_cleaned <- extremes %>% mutate(gender_bias = female+male+other_gender) %>% mutate(LGBTQ = homosexual_gay_or_lesbian + transgender + bisexual + heterosexual + other_sexual_orientation) %>% mutate(race = black + asian + latino + other_race_or_ethnicity + white ) %>% mutate(religion = other_gender + jewish + muslim + christian + hindu + buddhist + atheist) %>% mutate(disability = physical_disability + psychiatric_or_mental_illness + other_disability)
extremes_cleaned <- extremes_cleaned %>% filter(gender_bias + LGBTQ + race + religion + disability > 0)
extremes_cleaned <- extremes_cleaned %>% select(comment_text, gender_bias, LGBTQ, race, religion, disability)
extremes_cleaned <- extremes_cleaned %>% mutate(race = factor(ifelse(race > 0 , "race", NA))) %>% mutate(gender_bias = factor(ifelse(gender_bias > 0 , "gender", NA))) %>% mutate(LGBTQ = factor(ifelse( LGBTQ > 0 , "lgbtq", NA))) %>% mutate(religion = factor(ifelse( religion > 0 , "religion", NA))) %>% mutate(disability = factor(ifelse( disability > 0 , "disability", NA)))
extremes_cleaned <- extremes_cleaned %>% mutate(good = NA)


good <- fullset %>% filter(target == 0)  
good <- good %>% mutate(gender_bias = female+male+other_gender) %>% mutate(LGBTQ = homosexual_gay_or_lesbian + transgender + bisexual + heterosexual + other_sexual_orientation) %>% mutate(race = black + asian + latino + other_race_or_ethnicity + white ) %>% mutate(religion = other_gender + jewish + muslim + christian + hindu + buddhist + atheist) %>% mutate(disability = physical_disability + psychiatric_or_mental_illness + other_disability)
good <- good %>% filter(gender_bias + LGBTQ + race + religion + disability == 0) %>% sample_n(size=40000)
good <- good %>% select(comment_text, gender_bias, LGBTQ, race, religion, disability)
good <- good %>% mutate(race = factor(ifelse(race > 0 , "race", NA))) %>% mutate(gender_bias = factor(ifelse(gender_bias > 0 , "gender", NA))) %>% mutate(LGBTQ = factor(ifelse( LGBTQ > 0 , "lgbtq", NA))) %>% mutate(religion = factor(ifelse( religion > 0 , "religion", NA))) %>% mutate(disability = factor(ifelse( disability > 0 , "disability", NA)))
good <- good %>% mutate(good = "good")

fullset_two <-rbind(extremes_cleaned, good)
united_two <- fullset_two %>% unite("category", -comment_text, sep = "," , na.rm = TRUE, remove = TRUE)


write.csv(fullset_two, './siid_v11.csv', row.names=FALSE, col.names = FALSE, quote=c(1), sep=',')
