const express = require('express');
const bodyParser = require('body-parser');
const NodeStl = require('node-stl');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/models/:id', async (req, res) => {
    const file = `${__dirname}/src/assets/stl/${req.params.id}.stl`;
    return res.status(200).download(file);
});

app.get('/api/models/:id/metrics', async (req, res) => {
    try {
        var stlMetrics = new NodeStl(`${__dirname}/src/assets/stl/${req.params.id}.stl`, { density: 1.04 });

        if (typeof req.params.id !== 'string') {
            return error;
        }
        return res.status(200).send({ ...stlMetrics });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
