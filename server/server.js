const express = require('express');
const fs = require('fs').promises
const bodyParser = require('body-parser');
const NodeStl = require('node-stl');

const parseStlFile = require('./helper')

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/models/:id', async (req, res) => {
    const file = `${__dirname.slice(0, -6)}/src/assets/stl/${req.params.id}.stl`;
    return res.status(200).download(file);
});

app.get('/api/models/:id/metrics', async (req, res) => {
    try {
        let stlMetrics = new NodeStl(`${__dirname.slice(0, -6)}/src/assets/stl/${req.params.id}.stl`, { density: 1.04 });
            let modelAnalysis = await Promise.resolve(fs.readFile(`${__dirname.slice(0, -6)}/src/assets/stl/${req.params.id}.stl`, 'utf8', (err, data) => data))
            const parsedSTLFile = parseStlFile(modelAnalysis)

        if (typeof req.params.id !== 'string') {
            return error;
        }

        return res.status(200).send({ ...stlMetrics, minBoundingBox: parsedSTLFile.minBoundingBox.min, maxBoundingBox: parsedSTLFile.minBoundingBox.max, surfaceArea: parsedSTLFile.totalArea, numberOfFacets: parsedSTLFile.numberOfFacets });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

app.listen(port, async () => {
    console.log(`Listening on port ${port}`);
});


