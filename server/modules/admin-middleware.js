const pool = require("../modules/pool");

const rejectNonAdmin = async (req, res, next) => {
    // check if logged in
    console.log("Middlewhere sees req.user as: ", req.user);
    const queryText = `SELECT "admin" FROM "user" WHERE "id"=$1`
    const queryArgs = [req.user.id]
    await pool.query(queryText, queryArgs)
        .then((result) => {
            console.log("Result.rows is", result.rows)
            if (result.rows[0].admin) {
                console.log("Let 'em in!")
                // They were authenticated! User may do the next thing
                // Note! They may not be Authorized to do all things
                next();
            } else {
                // failure best handled on the server. do redirect here.
                res.sendStatus(403);
            }
        })
}


    module.exports = { rejectNonAdmin };