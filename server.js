const express = require('express');
const bodyParser = require('body-parser');
const NodeStl = require('node-stl');
var StlThumbnailer = require('node-stl-to-thumbnail');

const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/models', (req, res) => {

// });

app.get('/api/models/:id', async (req, res) => {
    const file = `${__dirname}/src/assets/stl/${req.params.id}.stl`;
    return res.download(file);
});

app.listen(port, async (req, res) => {
    console.log(`Listening on port ${port}`);
    // var stl = new NodeStl(__dirname + '/src/assets/moon.stl', { density: 1.04 });
    // console.log(stl.volume + 'cm^3'); // 21cm^3
    // console.log(stl.weight + 'gm'); //  1gm
    // console.log(stl.boundingBox, '(mm)'); // [60,45,50] (mm)
    // console.log(stl.area, '(m)'); // 91.26 (m)
    // console.log(stl.centerOfMass, '(mm)'); // [30,22.5,25] (mm)
    // var file = fs.createReadStream('./src/assets/moon.stl');
    // console.log(file);
});
