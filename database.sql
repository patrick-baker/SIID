-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

 CREATE TABLE SIID;

-- need to look at timestamps for the forgot password query, need to use local timezones?
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" boolean DEFAULT false,
    "email" VARCHAR UNIQUE NOT NULL,
    "resetPasswordToken" VARCHAR,
    "resetPasswordExpires" TIMESTAMP
); 

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "user_id" FOREIGN KEY REFERENCES "user" (id),
    "title" VARCHAR,
    "client" VARCHAR,
    "description" VARCHAR,
    "text" TEXT,
    "integration" VARCHAR,
    "campaign_goals" VARCHAR,
    "goals_ctr" VARCHAR,
    "goals_conversion" VARCHAR,
    "goals_sales_conversion" VARCHAR,
    "goals_sales_length" VARCHAR,
    "revenue_goals" VARCHAR,
    "goals_social_shares" VARCHAR,
    "goals_follow" VARCHAR,
    "goals_impressions" VARCHAR,
    "goals_views" VARCHAR,
    "goals_comments" VARCHAR,
    "target_audience_age" VARCHAR,
    "target_audience_race" VARCHAR,
    "target_audience_region" VARCHAR,
    "target_audience_ethnicity" VARCHAR,
    "target_audience_gender" VARCHAR,
    "target_audience_interests" VARCHAR,
    "target_audience_language" VARCHAR,
    "talent_demographic" VARCHAR,
    "tone" VARCHAR,
    "style" VARCHAR,
    "literary_technique" VARCHAR,
    "project_type" VARCHAR,
    "date_created" date,
    "gender_flags" int,
    "race_flags" int,
    "disability_flags" int,
    "religion_flags" int,
    "lgbtq_flags" int
);

CREATE TABLE "educator" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80),
    "bio" VARCHAR (500),
    "contact_info" VARCHAR (140),
    "image_url" VARCHAR 
);

CREATE TABLE "educator_specialties" (
    "id" SERIAL PRIMARY KEY,
    "educator_id" INT REFERENCES "educator",
    "specialty_id" INT REFERENCES "specialty"
);

CREATE TABLE "specialties" (
    "id" SERIAL PRIMARY KEY,
    "gender" VARCHAR (10),
    "race" VARCHAR (10),
    "disability" VARCHAR (10),
    "religion" VARCHAR (10),
    "lgbtq" VARCHAR (10)
);