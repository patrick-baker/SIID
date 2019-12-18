const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', async (req, res) => {
    const query = 
    `
        SELECT educator.id,name,bio,contact_info,image_url,ARRAY_AGG(specialty) AS specialties FROM educator 
        JOIN educator_specialties ON educator_id = educator.id
        JOIN specialties ON specialty_id=specialties.id
        GROUP BY educator.id,name,bio,contact_info,image_url
    ;`

    try {
        let educators = await pool.query(query);
        res.send(educators.rows)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

/**
 * POST route template
 */
router.post('/', async (req, res) => {


    const client = await pool.connect();
    try {
        const queryEducator = `INSERT INTO educator (name,bio,contact_info,image_url) VALUES ($1,$2,$3,$4) RETURNING id;`;
       
        await client.query(`BEGIN`);
        let educatorId =  await client.query(queryEducator, [req.body.name, req.body.bio, req.body.contact_info, req.body.image_url]);

        for(specialty of req.body.specialties) {
            let specialtyId = await client.query(`SELECT id FROM specialties WHERE specialty=$1`,[specialty]);
            await client.query(`INSERT INTO educator_specialties(educator_id,specialty_id) VALUES ($1,$2)`,[educatorId.rows[0].id,specialtyId.rows[0].id]);
        }
        

        await client.query(`COMMIT`);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    } finally {
        client.release();
    }
});



router.delete('/:id', async (req,res) => {
    const client = await pool.connect();
    try {

        await client.query(`BEGIN`);

        const deleteSpecialites = `DELETE FROM educator_specialties WHERE educator_id=$1`
        await client.query(deleteSpecialites,[req.params.id]);

        const deleteEducator = `DELETE FROM educator WHERE id=$1;`;
        await client.query(deleteEducator,[req.params.id]);
    
        await client.query(`COMMIT`);
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    } finally {
        client.release();
    }
})

module.exports = router;