const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET bias categories from the bias table
 * Used on the EducatorForm.js to display specialties for 
 * educator creation and editing
 * 
 */
router.get('/', (req, res) => {
    const queryText=`SELECT * FROM "bias"`;
    pool.query(queryText)
    .then(result=>{
        res.send(result.rows)})
    .catch(error =>{
        console.log('Error on select all categories from the bias table category router', error);
        res.sendStatus(500);
    })
});

module.exports = router;