const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
let axios = require('axios');

let exec = require('child_process')

// this is the function to run something in the command line
async function sh(cmd) {
    return new Promise(function (resolve, reject) {
        exec.exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

router.post("/", async (req, res) => {
    console.log(req.body)
    try {
        let text = req.body.text.replace(/\r?\n|\r/g, '').split(/[.?!]/);
        let data = await getData(text);

        for (biasKey of Object.keys(data)) {
            if (data[biasKey].count > 0) {
                let biasId = await pool.query(`SELECT id FROM bias WHERE type=$1;`,[biasKey])
                await pool.query(`INSERT INTO project_bias(project_id,bias_id,bias_count) VALUES($1,$2,$3)`,[req.body.project_id,biasId.rows[0].id,data[biasKey].count])
            }
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});



let getData = async (text) => {
    let biasCounter = {
        'race': {
            count: 0
        },
        'lgbtq': {
            count: 0
        },
        'religion': {
            count: 0
        },
        'gender': {
            count: 0
        }
    }

    for (sentence of text) {
        try {
            if (sentence) {
                let sentenceData = await getBias(sentence);
                if (sentenceData != 'NO BIAS') {
                    biasCounter[sentenceData].count++;
                }
            }

        } catch (error) {
            console.log(error);
        }
    }
    return biasCounter
}


const getBias = async (sentence) => {
    let token = await sh('gcloud auth application-default print-access-token');
    authToken = 'Bearer ' + token.stdout.replace(/\s/g, '');
    let bias = await axios.post('https://automl.googleapis.com/v1beta1/projects/742916648841/locations/us-central1/models/TCN2299637365586526208:predict',
        {
            "payload": {
                "textSnippet": {
                    "content": sentence,
                    "mime_type": "text/plain"
                }
            }
        },
        {
            "headers": {
                "Authorization": authToken
            }
        }
    );

    if (bias.data.payload[0].displayName == 'biased') {
        let biasCategory = await axios.post('https://automl.googleapis.com/v1beta1/projects/742916648841/locations/us-central1/models/TCN2279960505495846912:predict',
            {
                "payload": {
                    "textSnippet": {
                        "content": sentence,
                        "mime_type": "text/plain"
                    }
                }
            },
            {
                "headers": {
                    "Authorization": authToken
                }
            });
        if (biasCategory.data.payload[0].displayName == 'good') {
            biasCategory.data.payload[0].displayName = biasCategory.data.payload[1].displayName
        }
        console.log('BIAS CATEGORY', biasCategory.data.payload[0].displayName)
        return biasCategory.data.payload[0].displayName;
    } else {
        return 'NO BIAS';
    }
}


module.exports = router;