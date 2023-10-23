import * as handlers from './handlers.js';
import * as utils from './utils.js';

const rootPath = "http://localhost:5000/";

const btnAddFood = document.getElementById('btnAddFood');
btnAddFood.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const car = document.getElementById('car').value;
    const pro = document.getElementById('pro').value;
    const fat = document.getElementById('fat').value;

    const dataToSend = {
        name: name,
        weight: weight,
        car: car,
        pro: pro,
        fat: fat,
    };

    fetch(rootPath + 'addFood', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    });
});

const searchFoodBtn = document.getElementById('searchFoodBtn');
searchFoodBtn.addEventListener('click', () => {
    const name = document.getElementById('searchFood').value;
    const uriParams = `?name=${name}`;

    fetch(rootPath + 'searchFood' + uriParams)
        .then(response => response.json())
        .then(data => handlers.setFoodCards(data['data']));
});
