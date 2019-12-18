const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const ruleChecker = require("../ruleChecker");
// var patterns = require("../rules/lib/SIID.json");
var factory = require("../rules/lib/factory.js");
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var unified = require('unified')
var english = require('retext-english')
var stringify = require('retext-stringify')
module.exports = router;
/**
 * GET route template
 */
router.get("/", (req, res) => {
  let pattern = [];
  pool.query(`SELECT "data" FROM rules`).then(result => {
    for (let row of result.rows) {
      pattern.push(row.data);
    }
    console.log(result.rows);

    res.send(pattern);
  });
});


router.post("/", async (req, res) => {
  const textInput = req.body.text;

  let pattern_db = await pool.query(`SELECT array_agg("data") FROM rules`);
  console.log('pattern: ', pattern_db);
  
  patterns_bad = pattern_db.rows[0].array_agg;
  console.log('from db', patterns_bad)

  await ruleChecker(textInput);

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
