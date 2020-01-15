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

#AWS Management Console

We'll be using S3 and IAM
We'll setup the Group, Then the bucket, then the user. 

## At Find Services type IAM
Click IAM and then on the left select Groups

Step 1 : Group Name
Click "Create New Group"
Give it a group name

Step 2:
Policy Type: select   AmazonECS_FullAccess

Step 3:
Click "Create Group"

## At Find Services type S3
Click create bucket
Step 1:
Give the bucket a name
Note the region

Step 2: Configure
Press Next

Step 3: Permissions
Uncheck "block all public access"

Step 4: Review
Click Create Bucket

You've made a bucket!!
Now click on the bucket. Goto Permissions Tab. Go to CORS configuration tab.
Put in the default:
```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```

Press "Save"

## Add user

### Create User
Create a user name
AWS access type is "Programatic Access"

### Permissions
Add user to group you created earlier

### Tags
Click "next

### Review
Click "Create User"

Your Access Key is displayed we need our: Access key ID & Secret Access Key copy to your .env file. You cannot revisit this but if you need you can delete the file and "Create Access Key"  if you lose it or missed the chance.

## Update the code with the credentials
.env
AWS_ACCESS_KEY_ID= (the ID we just made)
AWS_SECRET_ACCESS_KEY= (the secret key we just made)

/server/server.js
At the bottom of the file you'll find
bucket:  (name of bucket)
region: (code of region. 'us-east-2' is Ohio but if you have a different one look at link in comments)

/src/components/UploadButton/UploadButton.js
set the const s3Url = (name of bucket).s3.amazonaws.com
If deploying to Heroku set the server variable to your heroku project's path.


## Create database and table

Create a new database called `SIID` and use the `database.sql` file to re-create the database.
You will also want to import the rules by running the SQL commands in the `/ruleset_sql_files` folder.

## Setting Up Your ENV File
1. Retrieve a randomly generated password of 16 or more characters and set your SERVER_SESSION_SECRET as such:
```SERVER_SESSION_SECRET=RandomStr1ng```
2. Create a gmail account and set email and password environment variables as such:
```EMAIL_ADDRESS=EmailAddress@gmail.com```
```EMAIL_PASSWORD=RandomStr1ng```
3. After creating your AWS account, make environment variables of your access key id and secret access key as such:
```AWS_ACCESS_KEY_ID=keyId```
```AWS_SECRET_ACCESS_KEY=key```

## Alter Settings of Gmail Account to Allow Nodemailer to Use it
1. Disable two-step verification by going [here](myaccount.google.com), then click security on the left, and disabling 2-step verification.
2. Allow less secure apps [here](https://myaccount.google.com/lesssecureapps?pli=1) 

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

