// Imports for all of this project
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectNonAdmin } = require('../modules/admin-middleware');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// Export
module.exports = router;

// Imports needed for Retext
var factory = require("../modules/factory.js");
var unified = require('unified')
var english = require('retext-english')
var stringify = require('retext-stringify')


// GET route -returns all the rules for the rule table
router.get("/", rejectUnauthenticated, (req, res) => {
  pool.query(`SELECT "id", "data" FROM rules`).then(result => {
    res.send(result.rows);
  })
  .catch((error)=>{
      console.log("Error in rule.router getting rules from database",error)
      res.sendStatus(500)
  });
});

// POST route to test text against rules in database.
// Requires being authenticated
router.post("/", rejectUnauthenticated, async (req, res) => {
  try {
    const textInput = req.body.text;
    const project_id = req.body.project_id;
    let pattern_db = await pool.query(`SELECT array_agg("data") FROM rules`);
    // console.log('pattern: ', pattern_db);

    patterns_bad = pattern_db.rows[0].array_agg;
    // console.log('from db', patterns_bad)

    let response = "";

    const runMe = async function (textIn) {
      // console.log('runMe running');

      try {
        response = await unified()
          .use(await english)
          .use(await factory(patterns_bad, "SSID"))
          .use(await stringify)
          .process(textIn);
      } catch (error) {
        console.log(error);
      }
      // console.log('runMe response', response);
    };
    await runMe(textInput);
    console.log("Rule based system returns:", response);
    await pool.query(`INSERT INTO flags(project_id,messages) VALUES($1,$2)`, [project_id, { messages: response.messages }]);

    res.send(response.messages);
  } catch (error) {
    console.log('Error testing the text:',req.body.text,'\nError message is:',error)
    res.sendStatus(500);
  }
});

// Logged in users can add rules. Admins can delete (see below)

router.post("/add", rejectUnauthenticated, (req, res) => {
  const queryText = `INSERT INTO "rules"("data")VALUES($1)`
  const queryArgs = [req.body]
  pool.query(queryText, queryArgs)
    .then((response) => {
      console.log("Rule Add Success", response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Rule Add Error", error);
      res.sendStatus(500);
    })
})

// Delete route uses the rejectNonAdmin middeware

router.delete('/:id', rejectNonAdmin, (req, res) => {
  const rule_id = req.params.id
  const queryText = 'DELETE FROM rules WHERE id=$1'
  pool.query(queryText, [rule_id])
    .then((response) => {
      console.log("DELETE SUCCESS for rule", rule_id)
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in DELETE route:", error)
      res.sendStatus(500)
    })
})

// Example of the JSON stored in the database:
// [
//     {
//       "id": "Test-1",
//       "type": "simple",
//       "categories": [
//         "a"
//       ],
//       "considerate": {
//         "Thomas": "a"
//       },
//       "inconsiderate": {
//         "tommy": "a"
//       },
//       "note": "Refer to the person, rather than the disability, first."
//     },
//     {
//       "id": "Test-2",
//       "type": "simple",
//       "categories": [
//         "a"
//       ],
//       "considerate": {
//         "Patrick": "a",
//         "Mr. Baker": "a"
//       },
//       "inconsiderate": {
//         "Patty": "a",
//         "patty": "a"
//       },
//       "note": "Refer to the person, rather than the disability, first."
//     }
//   ]


// Example response is of the format:
// {
//     "data": {},
//     "messages": [
//         {
//             "message": "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead",
//             "name": "1:2-1:7",
//             "reason": "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead",
//             "line": 1,
//             "column": 2,
//             "location": {
//                 "start": {
//                     "line": 1,
//                     "column": 2,
//                     "offset": 1
//                 },
//                 "end": {
//                     "line": 1,
//                     "column": 7,
//                     "offset": 6
//                 }
//             },
//             "source": "retext-SIID-SSID",
//             "ruleId": "Test-2",
//             "fatal": false,
//             "actual": "Patty",
//             "expected": [
//                 "Patrick",
//                 "Mr. Baker"
//             ],
//             "note": "Refer to the person, rather than the disability, first."
//         },
//         {
//             "message": "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead",
//             "name": "1:2-1:7",
//             "reason": "`Patty` may be insensitive, use `Patrick`, `Mr. Baker` instead",
//             "line": 1,
//             "column": 2,
//             "location": {
//                 "start": {
//                     "line": 1,
//                     "column": 2,
//                     "offset": 1
//                 },
//                 "end": {
//                     "line": 1,
//                     "column": 7,
//                     "offset": 6
//                 }
//             },
//             "source": "retext-SIID-SSID",
//             "ruleId": "Test-2",
//             "fatal": false,
//             "actual": "Patty",
//             "expected": [
//                 "Patrick",
//                 "Mr. Baker"
//             ],
//             "note": "Refer to the person, rather than the disability, first."
//         }
//     ],
//     "history": [],
//     "cwd": "/Users/davidsearl/prime/tier3/SIID",
//     "contents": "\"Patty went for a beer\""
// }