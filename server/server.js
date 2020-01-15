const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const projectRouter = require('./routes/project.router');
const educatorRouter = require('./routes/educator.router');
const biasRouter = require('./routes/bias.router');
const ruleRouter = require('./routes/rule.router');
const flagRouter = require('./routes/flag.router');
const reportRouter = require('./routes/report.router');
const autoMLRouter = require('./routes/autoML.router');
const categoryRouter =require('./routes/category.router');

// Needed for S3 uploader
const uploadS3Router = require('react-dropzone-s3-uploader/s3router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/project', projectRouter);
app.use('/educator', educatorRouter);
app.use('/bias', biasRouter);
app.use('/rule', ruleRouter);
app.use('/flag', flagRouter);
app.use('/report', reportRouter);
app.use('/automl',autoMLRouter);
app.use('/category', categoryRouter);

// S3 Buckets and react-dropzone-s3 need this setup
// These variables will need to match your AWS setup.
// bucket: and region: are the most likely to change.
// To lookup what your region variable is goto:
// https://amzn.to/2NtySt0
app.use('/s3', uploadS3Router({
    bucket: 'siid',                           // Name of bucket
    region: 'us-east-2',                            // Lookup variable that matches your region. This is Ohio
    headers: {'Access-Control-Allow-Origin': '*'},  
    ACL: 'public-read',                                 // this is the default - set to `public-read` to let anyone view uploads
  }));

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
