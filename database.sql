-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

 ---CREATE DATABASE NAMED SIID;

-- need to look at timestamps for the forgot password query, need to use local timezones?
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" boolean DEFAULT FALSE,
    "email" VARCHAR UNIQUE NOT NULL,
    "resetPasswordToken" VARCHAR,
    "resetPasswordExpires" TIMESTAMP
); 

CREATE TABLE "strategy" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR
);

INSERT INTO "strategy" ("type") VALUES('Marketing Communications'), ('Website'), ('Social Media'), ('Content Marketing'), ('Email Marketing'), ('Advertising'), ('Event Marketing');

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
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
    "formal" BOOLEAN,
    "project_strategy" INT REFERENCES "strategy",
    "date_created" DATE,
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

CREATE TABLE "specialties" (
    "id" SERIAL PRIMARY KEY,
    "specialty" VARCHAR(20)
);

INSERT INTO "specialties" ("specialty") VALUES ('gender');
INSERT INTO "specialties" ("specialty") VALUES ('race');
INSERT INTO "specialties" ("specialty") VALUES ('disability');
INSERT INTO "specialties" ("specialty") VALUES ('religion');
INSERT INTO "specialties" ("specialty") VALUES ('lgbtq');

CREATE TABLE "educator_specialties" (
    "id" SERIAL PRIMARY KEY,
    "educator_id" INT REFERENCES "educator",
    "specialty_id" INT REFERENCES "specialties"
);

--create table to store rules
--rules are stored in a JSON object
CREATE TABLE "rules"(
	"id" SERIAL PRIMARY KEY,
	"data" JSONB
);


--create table to store flags for a given project
CREATE TABLE "flags"(
    "id" SERIAL PRIMARY KEY,
    "project_id" INT REFERENCES "projects",
    "rule_id" INT REFERENCES "rules"
);

CREATE TABLE "tone" (
    "id" SERIAL PRIMARY KEY,
    "humor" boolean DEFAULT FALSE,
    "empowering" boolean DEFAULT FALSE,
    "uplifting" boolean DEFAULT FALSE,
    "friendly" boolean DEFAULT FALSE,
    "project_id" INT REFERENCES "projects"
);

CREATE TABLE "literary_techniques" (
    "id" SERIAL PRIMARY KEY,
    "alliteration" boolean DEFAULT FALSE,
    "personification" boolean DEFAULT FALSE,
    "simile" boolean DEFAULT FALSE,
    "foreshadowing" boolean DEFAULT FALSE,
    "satire" boolean DEFAULT FALSE,
    "symbolism" boolean DEFAULT FALSE,
    "onomatopoeia" boolean DEFAULT FALSE,
    "metaphor" boolean DEFAULT FALSE,
    "hyperbole" boolean DEFAULT FALSE,
    "oxymoron" boolean DEFAULT FALSE,
    "project_id" INT REFERENCES "projects"
);