const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const VERBOSE = false;

/**
 * GET selected project meta data for report
 */
router.get('/project/:id', async (req, res) => {
    if (process.env.VERBOSE) console.log('in report.router GET, req.params.id is: ', req.params.id);
    // CREATE VAR FOR PROJECT ID
    const projectId = req.params.id;
    // SETUP POOL CONNECT
    const client = await pool.connect();
    try {
        // BEGIN INCASE OF ERROR/ROLLBACK
        await client.query('BEGIN');
        // SELECT FROM PROJECTS TABLE
        const projectQueryText = `SELECT "user_id", "title", "client", "description", "text", "integration", "campaign_goals", "goals_ctr", "goals_conversion", 
        "goals_sales_conversion", "goals_sales_length", "revenue_goals", "goals_social_shares", "goals_follow", "goals_impressions", "goals_views", "goals_comments", 
        "target_audience_age", "target_audience_race", "target_audience_region", "target_audience_ethnicity", "target_audience_gender", "target_audience_interests",
        "target_audience_language", "talent_demographic", "formal", "project_strategy", "project_token", "date_created", "analyzed"
        FROM "project" WHERE "id"=$1;`;
        const projectTableData = await client.query(projectQueryText, [projectId]);
        if (process.env.VERBOSE) console.log('In report.router /project get, projectTableData.rows[0] is: ', projectTableData.rows[0]);
        // SELECT FROM PROJECT_TONE TABLE
        const toneQueryText = `SELECT ARRAY_AGG("tone"."type") as "tones"
        FROM "project_tone"
        JOIN "tone"
        ON "project_tone"."tone_id" = "tone"."id"
        WHERE "project_tone"."project_id" = $1;`;
        const tone = await client.query(toneQueryText, [projectId]);
        if (process.env.VERBOSE) console.log('In report.router /project get, tone.rows[0].tones is: ', tone.rows[0].tones);
        // SELECT FROM PROJECT_LITERARY TABLE
        const literaryQueryText = `SELECT ARRAY_AGG("literary_techniques"."type") as "techniques"
        FROM "project_literary"
        JOIN "literary_techniques"
        ON "project_literary"."literary_id" = "literary_techniques"."id"
        WHERE "project_literary"."project_id" = $1;`;
        const literaryTechniques = await client.query(literaryQueryText, [projectId]);
        if (process.env.VERBOSE) console.log('In report.router /project get, literaryTechniques.rows[0].techniques is: ', literaryTechniques.rows[0].techniques);
        // SEND MAIN PROJECT DATA TOGETHER
        res.send({ ...projectTableData.rows[0], tone: tone.rows[0].tones, literaryTechniques: literaryTechniques.rows[0].techniques });
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
router.get('/bias/:id', async (req, res) => {

    try {
        if (process.env.VERBOSE) console.log('in report.router /bias GET, req.params.id is: ', req.params.id);
        // CREATE VAR FOR PROJECT ID
        const projectId = req.params.id;
        // SELECT BIAS TYPES AND COUNTS
        const queryText = `SELECT "bias"."type", "project_bias"."bias_count"
        FROM "project_bias"
        JOIN "bias"
        ON "project_bias"."bias_id" = "bias"."id"
        WHERE "project_bias"."project_id" = $1;`;
        let results = await pool.query(queryText, [projectId])
        res.send(results.rows);

    } catch (error) {
        if (process.env.VERBOSE) console.log(error);
        res.sendStatus(500);
    }
});

/**
 * GET selected educators for report
 */
router.get('/educators/:id', async (req, res) => {

    try {
        if (process.env.VERBOSE) console.log('in report.router /educators GET, req.params.id is: ', req.params.id);
        // CREATE VAR FOR PROJECT ID
        const projectId = req.params.id;
        // SELECT BIAS TYPES AND COUNTS OF PROJECT

        
        const biasesQueryText = `SELECT "bias"."id", "project_bias"."bias_count", "bias"."type"
        FROM "bias"
        JOIN "project_bias"
        ON "bias"."id" = "project_bias"."bias_id"
        WHERE "project_bias"."project_id" = $1;`

        // returned bias objects that match the project
        let projectBiases = await pool.query(biasesQueryText, [projectId]);
        if (process.env.VERBOSE) console.log(`This project's biases:`, projectBiases);
        // removes total project bias count from bias array
        let biasArray = projectBiases.rows.filter(function(obj) {
            return obj.type !== "total"
        })
        if (process.env.VERBOSE) console.log('biasArray =', biasArray);
        // narrows down bias array if more than two bias values by sorting and cutting off end values
        if (biasArray.length > 2) {
            biasArray.sort((a, b) => (a.bias_count > b.bias_count) ? -1 : 1);
            biasArray.length = 2;
        }
        if (process.env.VERBOSE) console.log('biasArray before selecting educators:', biasArray);

        // SELECT BIAS TYPES AND COUNTS
        const queryText1 = `
        SELECT educator.id, name, bio, contact_info, image_url, ARRAY_AGG(ARRAY[bias.id::text,bias."type"]) AS specialties FROM educator 
        LEFT OUTER JOIN educator_bias eb ON eb.educator_id = educator.id
        LEFT OUTER JOIN bias ON eb.bias_id=bias.id
        WHERE educator.id IN (SELECT educator.id
            FROM "educator"
            JOIN "educator_bias"
            ON "educator_bias"."educator_id" = "educator"."id"
            WHERE "educator_bias"."bias_id" = $1)
        GROUP BY educator.id,name,bio,contact_info,image_url
        ;`;

        const queryText2 = `
        SELECT educator.id, name, bio, contact_info, image_url, ARRAY_AGG(ARRAY[bias.id::text,bias."type"]) AS specialties FROM educator 
        LEFT OUTER JOIN educator_bias eb ON eb.educator_id = educator.id
        LEFT OUTER JOIN bias ON eb.bias_id=bias.id
        WHERE educator.id IN (SELECT DISTINCT educator.id
            FROM "educator"
            JOIN "educator_bias"
            ON "educator_bias"."educator_id" = "educator"."id"
            WHERE "educator_bias"."bias_id" = $1 OR "educator_bias"."bias_id" = $2)
        GROUP BY educator.id,name,bio,contact_info,image_url
        ;`;

        let results;
        if (biasArray.length === 1) {
            results = await pool.query(queryText1, [biasArray[0].id]);
        }
        else if (biasArray.length === 2) {
            results = await pool.query(queryText2, [biasArray[0].id, biasArray[1].id]);
        }

        res.send(results.rows);

    } catch (error) {
        if (process.env.VERBOSE) console.log('error in GET educators for report:', error);
        res.sendStatus(500);
    }
});
module.exports = router;