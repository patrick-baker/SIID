const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText=`SELECT "title","client", "description", "date_created" 
    FROM "projects" WHERE "user_id"=$1`;
    const queryValues=[req.user.id];
    
    pool.query(queryText,queryValues)
        .then(results=>{
            res.send(results.rows);})
            .catch((error)=>{
            console.log('Error GET /project', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;