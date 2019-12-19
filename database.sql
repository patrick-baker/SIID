-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

 ---CREATE DATABASE NAMED SIID;

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
    "email" VARCHAR (120) UNIQUE NOT NULL,
    "resetPasswordToken" VARCHAR,
    "resetPasswordExpires" TIMESTAMP
); 

-- Create table to store marketing strategy types
CREATE TABLE "strategy" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (120)
);

INSERT INTO "strategy" ("type") VALUES('Marketing Communications'), ('Website'), ('Social Media'), ('Content Marketing'), ('Email Marketing'), ('Advertising'), ('Event Marketing');

-- Create table to store main project data
CREATE TABLE "project" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "title" VARCHAR (120),
    "client" VARCHAR (120),
    "description" VARCHAR (300),
    "text" TEXT,
    "integration" VARCHAR (120),
    "campaign_goals" VARCHAR (120),
    "goals_ctr" VARCHAR (120),
    "goals_conversion" VARCHAR (120),
    "goals_sales_conversion" VARCHAR (120),
    "goals_sales_length" VARCHAR (120),
    "revenue_goals" VARCHAR (120),
    "goals_social_shares" VARCHAR (120),
    "goals_follow" VARCHAR (120),
    "goals_impressions" VARCHAR (120),
    "goals_views" VARCHAR (120),
    "goals_comments" VARCHAR (120),
    "target_audience_age" VARCHAR (120),
    "target_audience_race" VARCHAR (120),
    "target_audience_region" VARCHAR (120),
    "target_audience_ethnicity" VARCHAR (120),
    "target_audience_gender" VARCHAR (120),
    "target_audience_interests" VARCHAR (120),
    "target_audience_language" VARCHAR (120),
    "talent_demographic" VARCHAR (120),
    "formal" BOOLEAN,
    "project_strategy" INT REFERENCES "strategy",
    "date_created" DATE
);

-- Create table to store educator information
CREATE TABLE "educator" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80),
    "bio" VARCHAR (500),
    "contact_info" VARCHAR (140),
    "image_url" VARCHAR (120)
);

-- Create table to store types of biases (these are what our ML engine identifies)
CREATE TABLE "bias" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (150)
);

INSERT INTO "bias" ("type") VALUES ('gender'), ('race'), ('disability'), ('religion'), ('lgbtq');

-- Create table to store educator's bias expertise categories
CREATE TABLE "educator_bias" (
    "id" SERIAL PRIMARY KEY,
    "educator_id" INT REFERENCES "educator",
    "bias_id" INT REFERENCES "bias"
);

-- Create table to store number of sentences identified as biased by ML
CREATE TABLE "project_bias" (
	"id" SERIAL PRIMARY KEY,
	"project_id" INT REFERENCES "project",
	"bias_id" INT REFERENCES "bias",
	"bias_count" INT
);

-- Create table to store rules
-- Rules are stored in a JSON object
CREATE TABLE "rules"(
	"id" SERIAL PRIMARY KEY,
	"data" JSONB
);


-- Create table to store flags (spots where retext rules identify a word) for a given project
CREATE TABLE "flags"(
    "id" SERIAL PRIMARY KEY,
    "project_id" INT REFERENCES "project",
    "rule_id" INT REFERENCES "rules"
);

-- Create table to store types of tone utilized in marketing campaigns
CREATE TABLE "tone" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (100)
);

INSERT INTO "tone" ("type") VALUES ('humor'), ('empowering'), ('uplifting'), ('friendly');

-- Create table to link projects to specific tones
CREATE TABLE "project_tone" (
    "id" SERIAL PRIMARY KEY,
    "tone_id" INT REFERENCES "tone",
    "project_id" INT REFERENCES "project"
);

-- Create table to store literary techniques used in marketing campaigns
CREATE TABLE "literary_techniques" (

	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (150)
);

INSERT INTO "literary_techniques" ("type") VALUES ('alliteration'), ('personification'), ('simile'), ('foreshadowing'), ('satire'), ('symbolism'), ('onomatopoeia'), ('metaphor'), ('hyperbole'), ('oxymoron');

-- Create table to link projects to specific literary techniques
CREATE TABLE "project_literary" (
	"id" SERIAL PRIMARY KEY,
	"literary_id" INT REFERENCES "literary_techniques",
	"project_id" INT REFERENCES "project"
);

INSERT INTO rules("data") VALUES('{
    "id": "Test-1",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Thomas": "a"
    },
    "inconsiderate": {
      "tommy": "a"
    },
    "note": "Refer to the person, rather than the disability, first."
  }');
  
  INSERT INTO rules("data") VALUES('{
    "id": "Test-2",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Patrick": "a",
      "Mr. Baker": "a"
    },
    "inconsiderate": {
      "Patty": "a",
      "patty": "a"
    },
    "note": "Refer to the person, rather than the disability, first."
  }');
  
  SELECT array_agg("data") FROM rules;
