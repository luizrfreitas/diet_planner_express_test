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
    if (data['name'] == '') {
        res.json({ data: 'Search cannot be empty!' })
    } else {
        const result = table.getFood(data);
        result
        .then(response => {
            if (response.length > 0) {
                res.json({ data: response });
            } else {
                res.json({ data: 'No results found!'});
            }
        });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const port = 5000;
app.listen(port, () => {
    
});