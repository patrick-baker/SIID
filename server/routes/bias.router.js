const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', async(req, res) => {
    
    try {
        const queryText=`SELECT * FROM project_bias JOIN bias ON bias.id=project_bias.bias_id WHERE project_id=$1;`;
        let biasData = await pool.query(queryText,[req.params.id]);
        res.send(biasData.rows);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;