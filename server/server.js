const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const DietPlannerController = require('./src/controller/DietPlannerController.js');
const DietPlannerTable = require('./src/model/DietPlannerTable.js');

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
    const queryReturn = table.getFood(data);
    queryReturn
        .then((data) => {console.log(data)});

    res.send({teste: 'teste'});
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const port = 5000;
app.listen(port, () => {
    
});