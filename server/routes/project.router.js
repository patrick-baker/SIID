const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET projects created by the user
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
 * DELETE project from flag, tone, literary_techniques and  projects 
 */
router.delete('/:id', async (req, res) => { 
    const client = await pool.connect();
      
    try{ 
        await client.query('BEGIN');
        //check if the user  is the owner of the project
        const checkAuthority=`SELECT user_id FROM "projects" WHERE id=$1`
        const checkAuthorityValues=[req.params.id];
        const user=await client.query(checkAuthority,checkAuthorityValues);
        //check returned id against the user request
        if (req.user.id!==user){
            let error = new Error("You are not authorized to delete this project ");
            throw error
        }
        
        //delete the row from flags
        const queryFlagText=`DELETE * FROM "flags" WHERE project_id=$1`;
        const projectId=[req.params.id];
        await client.query(queryFlagText,projectId);


        //delete the values from tone
        const queryToneText=`DELETE * FROM "tone" WHERE project_id=$1`;
        await client.query(queryToneText,projectId);

        //delete row from literary techniques
        const queryLiteraryText=`DELETE * FROM "literary_techniques" WHERE project_id=$1`;
        await client.query(queryLiteraryText,projectId);

        //delete the row from projects
        const queryText=`DELETE * FROM "projects" WHERE id=$1`;
        await client.query(queryText,projectId);
        
        //commit the changes
        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error delete /project', error);
        res.sendStatus(500);
    } finally {
        client.release();
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;