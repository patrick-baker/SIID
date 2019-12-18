const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/*
 * POST TO ADD A NEW PROJECT
 */
router.post('/', async (req, res) => {
    console.log('in project.router POST, req.user is: ', req.user);
    console.log('in project.router POST, req.body is: ', req.body);
    // Setup pool connect
    const client = await pool.connect();
    try {
        // Create vars for both arrays in req.body
        const literaryTechniques = req.body.literaryTechniques;
        const tone = req.body.tone;
        // Set start incase of error/rollback
        await client.query('BEGIN');
        // PROJECTS TABLE
        // Query Arguments:
        const projectQueryText = `INSERT INTO "projects" 
        ("user_id", "title", "client", "description", "text", "integration", "campaign_goals", "goals_ctr", "goals_conversion", 
        "goals_sales_conversion", "goals_sales_length", "revenue_goals", "goals_social_shares", "goals_follow", "goals_impressions", "goals_views", "goals_comments", 
        "target_audience_age", "target_audience_race", "target_audience_region", "target_audience_ethnicity", "target_audience_gender", "target_audience_interests",
        "target_audience_language", "talent_demographic", "formal", "project_strategy", "date_created", "gender_flags", "race_flags", "disability_flags", 
        "religion_flags", "lgbtq_flags") VALUES ($1, $2, $3, $4, $5 , $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, 
        $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33 ) RETURNING "id";`
        const projectQueryValues = [req.user.id, req.body.title, req.body.client, req.body.description, req.body.text, req.body.integration, req.body.campaignGoals, req.body.goalsCtr, req.body.goalsConversion, 
        req.body.goalsSalesConversion, req.body.goalsSalesLength, req.body.revenueGoals, req.body.goalsSocialShares, req.body.goalsFollow, req.body.goalsImpressions, req.body.goalsViews, 
        req.body.goalsComments, req.body.targetAudienceAge, req.body.targetAudienceRace, req.body.targetAudienceRegion, req.body.targetAudienceEthnicity, req.body.targetAudienceGender, 
        req.body.targetAudienceInterests, req.body.targetAudienceLanguage, req.body.talentDemographic, req.body.formal, req.body.projectStrategy, req.body.dateCreated, req.body.genderFlags, 
        req.body.raceFlags, req.body.disabilityFlags, req.body.religionFlags, req.body.lgbtqFlags];
        // Query & store returned project id for use in next 2 queries:
        const projectId = await client.query(projectQueryText, projectQueryValues);
        // TONES TABLE
        // Query Arguments:
        const toneQueryText = `INSERT INTO "tone"
        ("humor", "empowering", "uplifting", "friendly", "project_id") 
        VALUES ($1, $2, $3, $4, $5);`
        const toneQueryValues = [tone.humor, tone.empowering, tone.uplifting, tone.friendly, projectId];
        // Query:
        await client.query(toneQueryText, toneQueryValues);
        // LITERARY TECHNIQUES TABLE
        // Query Arguments:
        const literaryQueryText = `INSERT INTO "literary_techniques"
        ("alliteration", "personification", "simile", "foreshadowing", "satire", 
        "symbolism", "onomatopoeia", "metaphor", "hyperbole", "oxymoron", "project_id")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`
        const literaryQueryValues = [literaryTechniques.alliteration, literaryTechniques.personification, 
        literaryTechniques.simile, literaryTechniques.foreshadowing, literaryTechniques.satire, 
        literaryTechniques.symbolism, literaryTechniques.onomatopoeia, literaryTechniques.metaphor,
        literaryTechniques.hyperbole, literaryTechniques.oxymoron, projectId];
        // Query:
        await client.query(literaryQueryText, literaryQueryValues);
        // End sql trx
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

module.exports = router;