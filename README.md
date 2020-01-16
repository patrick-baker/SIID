# SIID - Social Impact IDentification tool

## Description
_Duration: 3-Week Sprint_

SIID is a web application that allows marketing teams to input their strategy documents or ad copy and generate a report about possible areas of sensitivity in their concepts and language. This app uses a rule based engine (ReText) to scan the text for words that may carry bias, and suggest replacements as well as a machine learning engine (AutoML) that evaluates sentences for sensitive sentiment. The final report contains data visualization (D3.js) to quickly give the marketing team the ability to assess the overall tone and re-consider how this aligns with the brand, campaign goals, and target demographic.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [Postico](https://eggerapps.at/postico/) Or a similar PostgreSQL GUI


## Steps
0. Git Clone
1. NPM Install
2. Google Cloud setup
3. AWS Bucket setup
4. Database setup
5. Setup .env file

# 0. GIT Clone
1. Clone this repository on to your local machine.

# 1. Installation

1. Get to main project directory in command line, assuming node is installed, and type in `npm install` to install required dependencies.

# 2. Google Cloud 

You'll need a Google account and Google Cloud Console running on your computer

1. The SIID model is on the Google Cloud Platform  (project named Rankchoice) if you are using this ML model get access from SIID. If you are using a different one you'll need to update the cloud console endpoint in the `/server/routes/autoML.router.js`. The SIID project uses two different models, the first returns "biased" "good", the second returns a category. You'll need to update these in the `autoML.router.js` file  or put in your own models.
    - You'll find the information you need to paste in in the "Test & Use" tab starts with `https://automl...` ends with `...predict`
2. Once your google account is associated with the SIID project, or a similar project, you'll need to setup the Cloud Console on your local machine. [Quick Start](https://cloud.google.com/sdk/docs/quickstart-macos)
    - Start at step 2 ( You already have a model! )
    - Be sure to follow the "optional" step 5 where you run install.sh
    - Continue on to initialize the sdk
3. Next edit your bash_profile to point to your key.json file.
    - put a line like this above the other Google cloud commands.
    - export GOOGLE_APPLICATION_CREDENTIALS="/Users/username/folderwithkey/key.json"
    - more info found [Google Authentication Setup](https://cloud.google.com/docs/authentication/getting-started)


## Common Errors with gcloud
1. If you are seeing a `gcloud auth ...` error double check the gcloud init settings, Cloud Console permissions, and your .bash_profile path to the key.json file.  
2. If you are getting an ASCII error, you likely copied and pasted the key.json path. Retype this by hand in .bash_profile and delete the old line.

# 3. AWS Management Console

We'll be using S3 and IAM
We'll setup the Group, Then the bucket, then the user. 

## At Find Services type IAM
Click IAM and then on the left select Groups

Step 1 : Group Name
Click "Create New Group"
Give it a group name

Step 2:
Policy Type: (select both)

AmazonECS_FullAccess

AMAZONS3_FullAccess

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

## Create User
Create a user name
AWS access type is "Programmatic Access"

## Permissions
Add user to group you created earlier

## Tags
Click "next

## Review
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
set the `const s3Url = 'https://(name of bucket).s3.amazonaws.com'`
If deploying to Heroku set the server variable to your Heroku project's path.

## Common issues with S3 setup
1. Be sure the user with the associated Amazon KEY_ID and ACCESS_KEY has S3 permissions
2. Do not put a forward slash at the end of your `server` or `s3url` paths


# 4. Create database and table

Create a new postgres database called `SIID` and use the `database.sql` file to re-create the database.
You will also want to import the rules by running the SQL commands in the `/ruleset_sql_files` folder.  If you are installing it on Heroku install the Heroku Postgres resource and set the database up here.  

## Make An Admin
Register an administrator and then change their admin status in the user table to TRUE using postico or another postgresql gui.

# 5. Setting Up Your .ENV File
0. Rename the .env-dist file to .env and you'll need to fill the values in. This is a file that is excluded from GitHub so it isn't pushed to the internet.

1. Retrieve a randomly generated password of 16 or more characters and set your SERVER_SESSION_SECRET as such:

```SERVER_SESSION_SECRET=RandomStr1ng```

2. Create a gmail account and set email and password environment variables as such (you'll need to alter gmail settings later, see below):

```EMAIL_ADDRESS=EmailAddress@gmail.com```

```EMAIL_PASSWORD=RandomStr1ng```

3. After creating your AWS account, make environment variables of your access key id and secret access key as such:

```AWS_ACCESS_KEY_ID=keyId```

```AWS_SECRET_ACCESS_KEY=key```

## Alter Settings of Gmail Account to Allow Nodemailer to Use it
1. Disable two-step verification by going [here](myaccount.google.com), then click security on the left, and disabling 2-step verification.
2. Allow less secure apps [here](https://myaccount.google.com/lesssecureapps?pli=1) 

# Usage

1. After logging in, users will be brought to their ```home``` page, which will list all of their projects.
2. Clicking on the ```create``` button will allow the user to enter the project form, where they will create all of the project metadata and analyze the text of their strategy document.
3. After analysis, a project report will generate, which shows project metadata, data visualization of the analysis findings and suggested experts which match the highest occurences of insensitivities, as well as an option for the user to reanalyze a reiteration of the strategy doc.
4. Back on the ```home``` page, a user can view a past report by clicking the report button on a given project.
5. The ```expert``` view shows all of the experts in the database, including information on their specialties, their contact info, and their bio.
6. Admins can edit and delete experts in the ```expert``` view.
7. Admins can also enter the ```rules``` view to add or delete rules which the rules-based system uses to flag potentially insensitive words or phrases for the report.


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


---

