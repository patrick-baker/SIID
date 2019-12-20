const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET selected project flags
 */
router.get('/:id', async (req, res) => {
    try {
      const queryText = `SELECT * FROM flags WHERE project_id=$1`;
      let flags = await pool.query(queryText,[req.params.id]);
      res.send(flags.rows)
    }catch(error) {
      console.log(error);
      res.sendStatus(500);
    }

})


module.exports = router;