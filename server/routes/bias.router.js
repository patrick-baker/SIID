const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', async(req, res) => {
    
    try {
        const queryText=`SELECT * FROM project_bias JOIN bias ON bias.id=project_bias.bias_id WHERE project_id=$1;`;
        let biasData = await pool.query(queryText,[req.params.id]);

        let biasCounter = {
            'race': {
                count: 0
            },
            'lgbtq': {
                count: 0
            },
            'religion': {
                count: 0
            },
            'gender': {
                count: 0
            }
        }

        for (let bias of biasData.rows) {
            console.log(bias.type);
            biasCounter[bias.type] = bias.bias_count;
        }


        res.send(biasCounter);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;