const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();
// imports for password reset request
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const verbose = false;

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

// Route for sending email with link to reset password
router.post('/forgotPassword', (req, res) => {
  const { email } = req.body
  // message sent if email field left blank
  if (email === '') {
    res.status(400).send('email required');
  }
  // checks for users email from email field
  const sqlSelect = `SELECT * FROM "user" WHERE "email" = $1;`;
  pool.query(sqlSelect, [email])
    .then((user) => {
      // if environment variable VERBOSE, shows console logs
      if (process.env.VERBOSE) console.log("user result from server:", user);
      // runs if email does not match any in DB
      if (user.rowCount === 0) {
        if (process.env.VERBOSE) console.log('email not in database');
        res.status(403).json('email not in db');
      } else {
        // creates token for email link for found user, expires after 10 minutes
        const token = crypto.randomBytes(20).toString('hex');
        const sqlUpdate = `UPDATE "user"
      SET "resetPasswordToken" = $1, 
      "resetPasswordExpires" = CURRENT_TIMESTAMP + (10 * interval '1 minute')
      WHERE "email" = $2;`;
        pool.query(sqlUpdate, [token, email])
          .then((result) => {

            // sets account email as the sending address for the forgot pass email
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: `${process.env.EMAIL_ADDRESS}`,
                pass: `${process.env.EMAIL_PASSWORD}`,
              },
            });

            // email information for sending update password link to user
            const mailOptions = {
              from: 'SIIDAccountService@gmail.com',
              to: `${email}`,
              subject: 'Link To Reset Password',
              text:
                'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
                + 'Please click on the following link, or paste this into your browser to complete the process within ten minutes of receiving it:\n\n'
                + `http://localhost:3000/#/reset/${token}\n\n`
                + 'If you did not request this, please ignore this email and your password will remain unchanged.\n\n' 
                + 'Please do not respond to this email.\n',
            };
            if (process.env.VERBOSE) console.log('sending mail');

            // nodemailer options
            transporter.sendMail(mailOptions, (err, response) => {
              if (err) {
                console.error('there was an error: ', err);
              } else {
                if (process.env.VERBOSE) console.log('here is the res: ', response);
                res.status(200).json('recovery email sent');
              }
            });
          })
          .catch((err) => {
            console.log('Error in updating token of user', err);
            res.sendStatus(500);
          })
      }
    })
    .catch(err => {
      console.log('error in selecting user by email in DB', err);
      res.sendStatus(500);
    })
});

// matches token to username and retrieves information for reset link
router.get('/reset/:token', (req, res) => {
  const { token } = req.params;
  // checks timestamp for expiration, how it compares to current time
  sqlText = `SELECT * from "user" WHERE "resetPasswordToken" = $1 AND "resetPasswordExpires" > CURRENT_TIMESTAMP;`; 
  pool.query(sqlText, [token])
    .then((user) => {
      if (process.env.VERBOSE) console.log("user result from server in reset query:", user);
        // if token is expired or error with the get request
      if (user.rowCount === 0) {
        console.error('password reset link is invalid or has expired');
        res.status(403).send('password reset link is invalid or has expired');
      } else {
        // sends username to front end to allow user to change password
        res.status(200).send({
          username: user.rows[0].username,
          message: 'password reset link a-ok',
        });
      }
    });
});

// updates the database with the user's new password
router.put('/updatePasswordViaEmail', (req, res) => {
  const { username, resetPasswordToken } = req.body;
  if (process.env.VERBOSE) console.log('req.body in updatePasswordViaEmail query:', req.body);
  // last check that we have correct user, correct token, and unexpired timestamp
  sqlText = `SELECT * FROM "user" 
    WHERE "username" = $1
    AND "resetPasswordToken" = $2
    AND "resetPasswordExpires" > CURRENT_TIMESTAMP;`; 
  pool.query(sqlText, [username, resetPasswordToken])
    .then(user => {
      if (process.env.VERBOSE) console.log("user result from server in update query:", user);
      if (user.rowCount === 0) {
          // runs if the query finds no match
        console.error('password reset link is invalid or has expired');
        res.status(403).send('password reset link is invalid or has expired');
      } else if (user.rowCount !== 0) {
          // sets the DB password to the correct encrypted password
        if (process.env.VERBOSE) console.log('user exists in db');
        const password = encryptLib.encryptPassword(req.body.password);
        sqlUpdate = `UPDATE "user"
        SET "password" = $1,
        "resetPasswordToken" = null,
        "resetPasswordExpires" = null
        WHERE "username" = $2;`;
        pool.query(sqlUpdate, [password, username])
          .then(() => {
            if (process.env.VERBOSE) console.log('password updated');
            res.status(200).send({ message: 'password updated' });
          });
      } else {
        console.error('no user exists in db to update');
        res.status(401).json('no user exists in db to update');
      }
    });
});

module.exports = router;
