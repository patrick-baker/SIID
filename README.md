# SIID - Social Impact IDentification tool

## Description
_Duration: 3-Week Sprint_





## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [Postico](https://eggerapps.at/postico/) Or a similar PostgreSQL GUI


Next you'll need a Google account and Google Cloud Console running on your computer
1. The SIID model is the Google Cloud Platform project (named Rankchoice) if you are using this ML model get access from SIID. If you are using a different one you'll need to update the cloud console endpoint in the /server/routes/autoML.router.js 
2. Once your google account is associated with the SIID model, or another model, you'll need to setup the Cloud Console on your local machine. [Quick Start](https://cloud.google.com/sdk/docs/quickstart-macos)
3. Make sure you follow the instructions that include both the .json key in your PATH variable, and update your .bash_profile so Google can access the console.  If you are seeing a `gcloud auth ...` error double check these settings.



## Create database and table

Create a new database called `SIID` and use the `database.sql` file to re-create the database.
You will also want to import the rules by running the SQL commands in the `/ruleset_sql_files` folder.


## Usage

1. After logging in, users will be brought to their ```home``` page, which will list all of their projects.
2. Clicking on the ```create``` button will allow the user to enter the project form, where they will create all of the project metadata and analyze the text of their strategy document.
3. After analysis, a project report will generate, which shows project metadata, data visualization of the analysis findings and suggested experts which match the highest occurences of insensitivities, as well as an option for the user to reanalyze a reiteration of the strategy doc.
4. Back on the ```home``` page, a user can view a past report by clicking the report button on a given project.
5. The ```expert``` view shows all of the experts in the database, including information on their specialties, their contact info, and their bio.
6. Admins can edit and delete experts in the ```expert``` view.
7. Admins can also enter the ```rules``` view to add or delete rules which the rules-based system uses to flag potentially insensitive words or phrases for the report.


## Installation

1. Get to main project directory in command line, assuming node is installed, and type in `npm install` to install required dependencies.
2. Install postgreSQL at [this](https://www.postgresql.org/download/) link.
3. Install postgreSQL GUI like [Postico](https://eggerapps.at/postico/).
4. Run commands from database.sql file in Postico to create table, in `prime_feedback` database.


## Built With
- _node.js_
- _Express.js_
- _React_ 
- _Redux_
- _Redux-Sagas_
- _postgreSQL_
- _MaterialUI_
- _AWS-S3Buckets_

## Support

If you have any questions, feel free to email me at bakerpj1992@gmail.com

## Acknowledgments

* Shoutout to all of Prime staff for being so supportive and being such great teachers.
* Thanks to Yandex and Unsplash for having great documentation and APIs that are quick and easy to implement.

---

## Where I want to go from here

- [ ] Study mode, which allows a user to study words from either origin language, and keeps track of their success throughout (correct guesses, date since last correct[most likely using moment.js], amount of times guessed, a guess timer, and some algorigthm for deciding the order in which to show the words).
- [ ] A words information page that renders according to user, with their information in regards to study mode.
- [ ] Some sort of gamification to encorage users to study more often.
- [ ] A search feature which allows users to search all translations stored in the database.
- [ ] Improvements to the UI which make it more intuitive for new users.

