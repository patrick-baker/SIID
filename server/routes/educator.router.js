const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', async (req, res) => {
    const query = `SELECT * FROM educator;`

    try {
        let educators = await pool.query(query);
        res.send(educators.rows)
    } catch(error ) {
        console.log(error);
        res.sendStatus(500)
    }
});

/**
 * POST route template
 */
router.post('/', async (req, res) => {
    const query = `INSERT INTO educator (name,bio,contact_info,image_url) VALUES ($1,$2,$3,$4)`;
    try {
        await pool.query(query,[req.body.name,req.body.bio,req.body.contact_info,req.body.image_url]);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

module.exports = router;