const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// imports for password reset request
const crypto = require('crypto');
require('dotenv').config();
const nodemailer = require('nodemailer');
const moment = require('moment');

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const email = req.body.email;

  const queryText = 'INSERT INTO "user" (username, password, email) VALUES ($1, $2, $3) RETURNING id';
  pool.query(queryText, [username, password, email])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.post('/forgotPassword', (req, res) => {
  const {email} = req.body

  if (email === '') {
    res.status(400).send('email required');
  }

  console.log("user's email:", email);

  const sqlSelect = `SELECT * FROM "user" WHERE "email" = $1;`;
  pool.query(sqlSelect, [email])
  .then((user) => {
    if (user === null) {
      console.error('email not in database');
      res.status(403).send('email not in db');
    } else {
      const token = crypto.randomBytes(20).toString('hex');
      const tokenExpiration = moment().add(1, 'hour');
      console.log("tokenExpiration:", tokenExpiration);
      const sqlUpdate = `UPDATE "user"
      SET "resetPasswordToken" = $1, 
      "resetPasswordExpires" = $2
      WHERE "email" = $3;`;
      pool.query(sqlUpdate, [token, tokenExpiration, email])
      .then((result) => {
        // sets account email as the sending address for the forgot pass email
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}`,
          },
        });
  
        const mailOptions = {
          from: 'SIIDAccountService@gmail.com',
          to: `${email}`,
          subject: 'Link To Reset Password',
          text:
            'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
            + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
            + `http://localhost:3000/reset/${token}\n\n`
            + 'If you did not request this, please ignore this email and your password will remain unchanged. Please do not respond to this email.\n',
        };
  
        console.log('sending mail');
  
        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            console.error('there was an error: ', err);
          } else {
            console.log('here is the res: ', response);
            res.status(200).json('recovery email sent');
          }
        });
      })
      .catch((err) => {
        console.log ('Error in updating token of user', err);
        res.sendStatus(500);
      })
    }
  })
  .catch(err => {
    console.log('error in selecting user by email in DB', err);
    res.sendStatus(500);
  })
});

module.exports = router;
