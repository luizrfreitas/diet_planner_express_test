const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const DietPlannerController = require('./controllers/DietPlannerController.js');
const DietPlannerTable = require('./models/DietPlannerModel.js');

const FoodController = require('./controllers/FoodController.js');
const food = new FoodController();

const table = new DietPlannerTable();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;
app.listen(port, () => {
    
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

app.post('/food/create', (req, res) => {
    const body = req.body;
    const message = food.createFood(body);
    message
        .then(response => {res.json(response)});
});

app.delete('/food/delete', (req, res) => {
    const data = {id: req.query.id};
    const message = food.deleteFood(data);    
    message
        .then(response => {res.json(response)});
});

app.put('/food/edit', (req, res) => {
    const data = {
        name: req.query.name,
        base_weight: req.query.base_weight,
        kcal: req.query.kcal,
        car: req.query.car,
        pro: req.query.pro,
        fat: req.query.fat
    };

    const message = food.editFood(data);    
    message
        .then(response => {res.json(response)});
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

