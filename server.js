const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const DietPlannerController = require('./server/src/controller/DietPlannerController.js');
const DietPlannerTable = require('./server/src/model/DietPlannerTable.js');

const table = new DietPlannerTable();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('addFood', (req, res) => {
    res.send('teste');
});

app.get('/searchFood', (req, res) => {
    const data = {name: req.query.name};
    const result = table.getFood(data);

    result
    .then(response => res.json({ data: response }));
});

app.get('/', (req, res) => {
    res.send('aaaaaaaa World!')
});

const port = 5000;
app.listen(port, () => {
    
});