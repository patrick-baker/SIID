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
    let text = req.body.text.replace(/\r?\n|\r/g, '').split(/[.?!]/);
    try {
        let data = await getData(text);
        console.log(data)
        res.send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});



let getData = async (text) => {
    let biasCounter = {
        'race': {
            percentage: 0,
            count: 0
        },
        'lgbtq': {
            percentage: 0,
            count: 0
        },
        'religion': {
            percentage: 0,
            count: 0
        },
        'gender': {
            percentage: 0,
            count: 0
        },
        'total': 0
    }

    for (sentence of text) {
        try {
            if (sentence) {
                let sentenceData = await getBias(sentence);
                if (sentenceData != 'NO BIAS') {
                    biasCounter['total']++;
                    biasCounter[sentenceData].count++;
                    biasCounter[sentenceData].percentage = (biasCounter[sentenceData].count / biasCounter['total']) * 100;
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
        console.log('BIAS CATEGORY',biasCategory.data.payload[0].displayName)
        return biasCategory.data.payload[0].displayName;
    } else {
        return 'NO BIAS';
    }
}


module.exports = router;