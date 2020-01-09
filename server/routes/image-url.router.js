const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST route template
 */
router.post('/', (req, res) => {

    console.log(req.body)
    // const imageUrl = req.body.imageUrl
    // const educatorID = req.body.id
    // const queryString = `INSERT INTO educators ("image_url") VALUES($1) WHERE "id"=$2`
    // pool.query(queryString, [imageUrl, educatorID])
    // .then(()=>{})
    // res.sendStatus(200);



});

module.exports = router;