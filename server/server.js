const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const DietPlannerController = require('./src/controller/DietPlannerController.js');
const DietPlannerTable = require('./src/model/DietPlannerTable.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(5000);