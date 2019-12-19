const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
// const ruleChecker = require("../ruleChecker");
// var patterns = require("../rules/lib/SIID.json");
var factory = require("../modules/factory.js");
// var vfile = require('to-vfile')
// var report = require('vfile-reporter')
var unified = require('unified')
var english = require('retext-english')
var stringify = require('retext-stringify')
module.exports = router;
/**
 * GET route template
 */
router.get("/", (req, res) => {
  pool.query(`SELECT "id", "data" FROM rules`).then(result => {
      console.log(result)
    res.send(result.rows);
  });
});


router.post("/", async (req, res) => {
  const textInput = req.body.text;

  let pattern_db = await pool.query(`SELECT array_agg("data") FROM rules`);
  console.log('pattern: ', pattern_db);
  
  patterns_bad = pattern_db.rows[0].array_agg;
  console.log('from db', patterns_bad)

//   await ruleChecker(textInput);

  let response = "";

  const runMe = async function(textIn) {
      console.log('runMe running');
      
      try {
        response = await unified()
        .use(await english)
        .use(await factory(patterns_bad, "SSID"))
        .use(await stringify)
        .process(textIn);
      } catch(error) {
          console.log(error);
      }
      console.log('runMe response', response);
  };

  await runMe(textInput);
  await console.log("rule router sees", response);
  await res.send(response);
});

router.post("/add", (req, res) => {
    const queryText = `INSERT INTO "rules"("data")VALUES($1)`
    const queryArgs = [req.body.jsonObject]
    pool.query(queryText,queryArgs)
    .then((resonse)=>{
        console.log("Rule Add Success",response);
        res.sendStatus(200);
    })
    .catch((error)=>{
        console.log("Rule Add Error", error);
        res.sendStatus(500);        
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