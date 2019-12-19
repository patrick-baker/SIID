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
 * DELETE project from flag, tone, literary_techniques and projects 
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

/*
 * POST for new project
 */
router.post('/', async (req, res) => {
    console.log('in project.router POST, req.user is: ', req.user);
    console.log('in project.router POST, req.body is: ', req.body);
    // SETUP POOL CONNECT
    const client = await pool.connect();
    try {
        // CREATE VARS FOR ARRAYS
        const literaryTechnique = req.body.literaryTechnique;
        const tone = req.body.tone;
        // BEGIN INCASE OF ERROR/ROLLBACK
        await client.query('BEGIN');
        // INSERT INTO PROJECTS TABLE
        const projectQueryText = `INSERT INTO "project" 
        ("user_id", "title", "client", "description", "text", "integration", "campaign_goals", "goals_ctr", "goals_conversion", 
        "goals_sales_conversion", "goals_sales_length", "revenue_goals", "goals_social_shares", "goals_follow", "goals_impressions", "goals_views", "goals_comments", 
        "target_audience_age", "target_audience_race", "target_audience_region", "target_audience_ethnicity", "target_audience_gender", "target_audience_interests",
        "target_audience_language", "talent_demographic", "formal", "project_strategy", "date_created") VALUES ($1, $2, $3, $4, $5 , $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, 
        $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28 ) RETURNING "id";`
        const projectQueryValues = [req.user.id, req.body.title, req.body.client, req.body.description, req.body.text, req.body.integration, req.body.campaignGoals, req.body.goalsCtr, req.body.goalsConversion, 
        req.body.goalsSalesConversion, req.body.goalsSalesLength, req.body.revenueGoals, req.body.goalsSocialShares, req.body.goalsFollow, req.body.goalsImpressions, req.body.goalsViews, 
        req.body.goalsComments, req.body.targetAudienceAge, req.body.targetAudienceRace, req.body.targetAudienceRegion, req.body.targetAudienceEthnicity, req.body.targetAudienceGender, 
        req.body.targetAudienceInterests, req.body.targetAudienceLanguage, req.body.talentDemographic, req.body.formal, req.body.projectStrategy, req.body.dateCreated];
        // STORE RETURNED PROJECT ID
        const projectId = await client.query(projectQueryText, projectQueryValues);
        // INSERT INTO PROJECT_TONE TABLE
        await Promise.all(
            tone.map(type => {
                const queryText = `INSERT INTO "project_tone" ("tone_id", "project_id") VALUES ($1, $2);`;
                let queryValues = [type, projectId];
                return client.query(queryText, queryValues);
            })
        );
        // INSERT INTO PROJECT_LITERARY TABLE
        await Promise.all(
            literaryTechnique.map(type => {
                const queryText = `INSERT INTO "project_literary" ("literary_id", "project_id") VALUES ($1, $2);`;
                const queryValues = [type, projectId];
                return client.query(queryText, queryValues);
            })
        );
        // END SQL TRX
        await client.query('COMMIT');
        res.sendStatus(201);
    }
    catch (error) {
        await client.query('ROLLBACK');
        res.sendStatus(500);
    }
    finally {
        connection.release();
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