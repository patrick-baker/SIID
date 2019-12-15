
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

 CREATE TABLE SIID;


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" boolean DEFAULT false,
    "email" VARCHAR UNIQUE NOT NULL,
    "resetPasswordToken" VARCHAR,
    "resetPasswordExpires" DATE
);