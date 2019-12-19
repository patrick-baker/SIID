const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET selected project meta data for report
 */
router.get('/:id', async (req, res) => {
    console.log('in report router GET, req.params.id is: ', req.params.id);
    console.log('in report router GET, req.body is: ', req.body);
    // CREATE VAR FOR PROJECT ID
    const projectId = req.params.id;
    // SETUP POOL CONNECT
    const client = await pool.connect();
    try{
        // BEGIN INCASE OF ERROR/ROLLBACK
        await client.query('BEGIN');
        // SELECT FROM PROJECTS TABLE
        const projectQueryText = `SELECT "user_id", "title", "client", "description", "text", "integration", "campaign_goals", "goals_ctr", "goals_conversion", 
        "goals_sales_conversion", "goals_sales_length", "revenue_goals", "goals_social_shares", "goals_follow", "goals_impressions", "goals_views", "goals_comments", 
        "target_audience_age", "target_audience_race", "target_audience_region", "target_audience_ethnicity", "target_audience_gender", "target_audience_interests",
        "target_audience_language", "talent_demographic", "formal", "project_strategy", "date_created"
        FROM "projects" WHERE "id"=$1;`;
        const projectTableData = await client.query(projectQueryText, projectId);
        // SELECT FROM LITERARY TECHNIQUES TABLE
        
        // SELECT FROM TONE TABLE

    }
    



})


module.exports = router;
