const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());

app.get('/food/:id', (req, res) => {
    res.send({name: 'json'});
});

app.post('addFood', (req, res) => {
    const jsonData = req.json();
    console.log(jsonData);
    const sqlString = `INSERT INTO foods (name, weight, kcal, car, pro, fat) VALUES ();`;
});

app.listen(5000);