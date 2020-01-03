const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// import for project report link
const crypto = require('crypto');
let verbose = true;

/**
 * GET projects created by the user
 */
router.get('/', (req, res) => {
    const queryText =`SELECT "id","title","client", "description", "date_created" 
    FROM "project" WHERE "user_id"=$1 ORDER BY "date_created"`;
    const queryValues=[req.user.id];
    
    pool.query(queryText, queryValues)
        .then(results=>{
            res.send(results.rows);})
            .catch((error)=>{
            if(verbose)console.log('Error GET /project', error);
            res.sendStatus(500);
        })
});

/**
 * DELETE project from flag, tone, literary_techniques and projects 
 */
router.delete('/:id', async (req, res) => { 
    console.log("Test req.params is",req.params.id)
    const client = await pool.connect();
      
    try{ 
        await client.query('BEGIN');
        //check if the user  is the owner of the project
        const checkAuthority=`SELECT user_id FROM "project" WHERE id=$1`
        const checkAuthorityValues=[req.params.id];
        const user=await client.query(checkAuthority,checkAuthorityValues);
        console.log('userId in project delete route', user.rows[0].user_id);
        //check returned id against the user request
        if (req.user.id!==user.rows[0].user_id){
            let error = new Error("You are not authorized to delete this project ");
            throw error
        }
        
        //delete the row from project_bias
        const queryBiasText=`DELETE FROM "project_bias" WHERE project_id=$1`;
        const projectId=[req.params.id];
        await client.query(queryBiasText,projectId);

        //delete the row from flags
        const queryFlagText=`DELETE FROM "flags" WHERE project_id=$1`;
        await client.query(queryFlagText,projectId);

        //delete the values from tone
        const queryToneText=`DELETE FROM "project_tone" WHERE project_id=$1`;
        await client.query(queryToneText,projectId);

        //delete row from literary techniques
        const queryLiteraryText=`DELETE FROM "project_literary" WHERE project_id=$1`;
        await client.query(queryLiteraryText,projectId);

        //delete the row from projects
        const queryText=`DELETE FROM "project" WHERE id=$1`;
        await client.query(queryText,projectId);
        
        //commit the changes
        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        if(verbose)console.log('Error delete /project', error);
        res.sendStatus(500);
    } finally {
        client.release();
    }
});

/*
 * POST new project
 */
router.post('/', async (req, res) => {
    if(verbose)console.log('in project.router POST, req.user is: ', req.user);
    if(verbose)console.log('in project.router POST, req.body is: ', req.body);
    // SETUP POOL CONNECT
    const client = await pool.connect();
    try {
        // Create mappable literaryTechnique array for promise requests from iterating over req.body object, checking for true values of keys
        const literaryTechnique = [];
        Object.keys(req.body.literaryTechniques).forEach(function (key) {
            if(verbose)console.log('literaryTechniques key, value:', key, req.body.literaryTechniques[key])
            if (req.body.literaryTechniques[key]) {
                literaryTechnique.push(key);
            }
          });
        console.log('literaryTechnique:', literaryTechnique);

        // Create mappable tone array for promise requests from iterating over req.body object, checking for true values of keys
        const tone = [];
        for (key in req.body.tones) {
            if(verbose)console.log('tones key, value:', key, req.body.tones[key])
            if (req.body.tones[key]) {
                tone.push(key);
            }
        }
        console.log('tone:', tone);

        // creates token for shareable project report link
        const token = crypto.randomBytes(20).toString('hex');
        
        // BEGIN INCASE OF ERROR/ROLLBACK
        await client.query('BEGIN');
        // INSERT INTO PROJECT TABLE
        const projectQueryText = `INSERT INTO "project" 
        ("user_id", "title", "client", "description", "text", "integration", "campaign_goals", "goals_ctr", "goals_conversion", 
        "goals_sales_conversion", "goals_sales_length", "revenue_goals", "goals_social_shares", "goals_follow", "goals_impressions", "goals_views", "goals_comments", 
        "target_audience_age", "target_audience_race", "target_audience_region", "target_audience_ethnicity", "target_audience_gender", "target_audience_interests",
        "target_audience_language", "talent_demographic", "formal", "project_strategy", "project_token") VALUES ($1, $2, $3, $4, $5 , $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, 
        $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28 ) RETURNING "id";`
        const projectQueryValues = [req.user.id, req.body.title, req.body.client, req.body.description, req.body.text, req.body.integration, req.body.campaign_goals, req.body.goals_ctr, req.body.goals_conversion, 
        req.body.goals_sales_conversion, req.body.goals_sales_length, req.body.revenue_goals, req.body.goals_social_shares, req.body.goals_follow, req.body.goals_impressions, req.body.goals_views, 
        req.body.goals_comments, req.body.target_audience_age, req.body.target_audience_race, req.body.target_audience_region, req.body.target_audience_ethnicity, req.body.target_audience_gender, 
        req.body.target_audience_interests, req.body.target_audience_language, req.body.talent_demographic, req.body.formal, req.body.project_strategy, token];
        // STORE RETURNED PROJECT ID
        let projectId = await client.query(projectQueryText, projectQueryValues);
        projectId = projectId.rows[0].id;
        // INSERT INTO PROJECT_TONE TABLE
        await Promise.all(
            tone.map( async (type) => {
                const queryText = `INSERT INTO "project_tone" ("tone_id", "project_id") VALUES ($1, $2);`;
                const toneQuery = 'SELECT id FROM tone WHERE type=$1';

                let toneID = await client.query(toneQuery,[type]);
                let queryValues = [toneID.rows[0].id, projectId];
                return client.query(queryText, queryValues);
            })
        );
        // INSERT INTO PROJECT_LITERARY TABLE
        await Promise.all(
            literaryTechnique.map( async (type) => {
                const queryText = `INSERT INTO "project_literary" ("literary_id", "project_id") VALUES ($1, $2);`;
                const literaryTechniquesQuery = 'SELECT id FROM literary_techniques WHERE type=$1';

                let literaryId = await client.query(literaryTechniquesQuery,[type]);
                const queryValues = [literaryId.rows[0].id, projectId];
                return client.query(queryText, queryValues);
            })
        );
        // COMMIT CHANGED, END SQL TRX
        await client.query('COMMIT');
        res.send({project_id:projectId});
    }
    catch (error) {
        console.log('THIS IS THE ERROR',error);
        await client.query('ROLLBACK');
        res.sendStatus(500);
    }
    finally {
        client.release();
    }
});
// Get Request to retrieve all entries in Tone table	
router.get('/tone', (req, res) => {	
    const queryText=`SELECT "id","type"	
    FROM "tone";`;	

    pool.query(queryText)	
        .then(results=>{	
            res.send(results.rows);})	
        .catch((error)=>{	
            console.log('Error GET /project', error);	
            res.sendStatus(500);	
        })	
});	

// Get Request to retrieve all entries in literary-techniques table	
router.get('/literary-techniques', (req, res) => {	
    const queryText=`SELECT "id","type"	
    FROM "literary_techniques";`;	
    pool.query(queryText)	
        .then(results=>{	
            // console.log('literary-techniques results:', results)	
            res.send(results.rows);})	
        .catch((error)=>{	
            console.log('Error GET /project', error);	
            res.sendStatus(500);	
        })	
});
module.exports = router;