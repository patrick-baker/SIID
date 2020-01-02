const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
let verbose = true;

/**
 * GET selected project meta data for report
 */
router.get('/project/:id', async (req, res) => {
    if (verbose) console.log('in report.router GET, req.params.id is: ', req.params.id);
    // CREATE VAR FOR PROJECT ID
    const projectId = req.params.id;
    // SETUP POOL CONNECT
    const client = await pool.connect();
    try {
        // BEGIN INCASE OF ERROR/ROLLBACK
        await client.query('BEGIN');
        // SELECT FROM PROJECTS TABLE
        const projectQueryText = `SELECT "title", "client", "description", "text", "integration", "campaign_goals", "goals_ctr", "goals_conversion", 
        "goals_sales_conversion", "goals_sales_length", "revenue_goals", "goals_social_shares", "goals_follow", "goals_impressions", "goals_views", "goals_comments", 
        "target_audience_age", "target_audience_race", "target_audience_region", "target_audience_ethnicity", "target_audience_gender", "target_audience_interests",
        "target_audience_language", "talent_demographic", "formal", "project_strategy", "date_created"
        FROM "project" WHERE "id"=$1;`;
        const projectTableData = await client.query(projectQueryText, [projectId]);
        if (verbose) console.log('In report.router /project get, projectTableData.rows[0] is: ', projectTableData.rows[0]);
        // SELECT FROM PROJECT_TONE TABLE
        const toneQueryText = `SELECT ARRAY_AGG("tone"."type") as "tones"
        FROM "project_tone"
        JOIN "tone"
        ON "project_tone"."tone_id" = "tone"."id"
        WHERE "project_tone"."project_id" = $1;`;
        const tone = await client.query(toneQueryText, [projectId]);
        if (verbose) console.log('In report.router /project get, tone.rows[0].tones is: ', tone.rows[0].tones);
        // SELECT FROM PROJECT_LITERARY TABLE
        const literaryQueryText = `SELECT ARRAY_AGG("literary_techniques"."type") as "techniques"
        FROM "project_literary"
        JOIN "literary_techniques"
        ON "project_literary"."literary_id" = "literary_techniques"."id"
        WHERE "project_literary"."project_id" = $1;`;
        const literaryTechniques = await client.query(literaryQueryText, [projectId]);
        if (verbose) console.log('In report.router /project get, literaryTechniques.rows[0].techniques is: ', literaryTechniques.rows[0].techniques);
        // SEND MAIN PROJECT DATA TOGETHER
        res.send({ ...projectTableData.rows[0], tone: tone.rows[0].tones, literaryTechniques: literaryTechniques.rows[0].techniques});
        // END SQL TRX
        await client.query('COMMIT');
        // res.sendStatus(201);
    }
    catch (error) {
        await client.query('ROLLBACK');
        res.sendStatus(500);
    }
    finally {
        client.release();
    }
});

/**
 * GET selected project bias count for report
 */
router.get('/bias/:id', (req, res) => {
    if (verbose) console.log('in report.router /bias GET, req.params.id is: ', req.params.id);
    // CREATE VAR FOR PROJECT ID
    const projectId = req.params.id;
    // SELECT BIAS TYPES AND COUNTS
    const queryText = `SELECT "bias"."type", "project_bias"."bias_count"
    FROM "project_bias"
    JOIN "bias"
    ON "project_bias"."bias_id" = "bias"."id"
    WHERE "project_bias"."project_id" = $1;`;
    pool.query(queryText, [projectId])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error in report.router /bias GET: ', error);
            res.sendStatus(500);
        })
});

module.exports = router;