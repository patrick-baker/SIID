const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', async (req, res) => {
    const queryText = `SELECT * FROM flags WHERE project_id=$1`;
    let flags = await pool.query(queryText,[req.params.id]);
    res.send(flags.rows)

})


module.exports = router;