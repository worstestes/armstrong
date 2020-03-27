const express = require('express');
const bodyParser = require('body-parser');
const NodeStl = require('node-stl');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    var stl = new NodeStl(__dirname + '/src/assets/moon.stl', { density: 1.04 });
    console.log(stl.volume + 'cm^3'); // 21cm^3
    console.log(stl.weight + 'gm'); //  1gm
    console.log(stl.boundingBox, '(mm)'); // [60,45,50] (mm)
    console.log(stl.area, '(m)'); // 91.26 (m)
    console.log(stl.centerOfMass, '(mm)'); // [30,22.5,25] (mm)
});
