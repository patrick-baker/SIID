const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Used to update biasSaga.js
// Counter creates counts of the biases that return from google cloud http request.

router.get('/:id', async(req, res) => {
    
    try {
        const queryText=`SELECT type, bias_count FROM project_bias JOIN bias ON bias.id=project_bias.bias_id WHERE project_id=$1;`;
        let biasData = await pool.query(queryText,[req.params.id]);

        let biasCounter = {
            'race': 0,
            'lgbtq': 0,
            'religion': 0,
            'gender': 0,
            'disability':0,
            'total':0
        }


        for (let bias of biasData.rows) {
            biasCounter[bias.type] = bias.bias_count;
            biasCounter['total'] += bias.bias_count;
        }


        res.send(biasCounter);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;