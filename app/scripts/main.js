import * as handlers from './handlers.js';
import * as config from './config.js';

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

    fetch(config.rootPath + 'addFood', {
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

    fetch(config.rootPath + 'searchFood' + uriParams)
        .then(response => response.json())
        .then(data => handlers.setFoodCards(data['data']))
        .finally(data => {
            const addToMealButton = document.getElementsByClassName('addToMeal');
            for (const element of addToMealButton) {
                element.addEventListener('click', () => {
                    handlers.addMealPanel(element.parentElement.parentElement);
                });
            }
        });
});

document.addEventListener('click', (event) => {
    if (event.target.matches('#closePanel')) {
        console.log(event.target.closest('#foodCard').remove());
    }

    // if (event.target.matches('#')) {
    
    // }

    // if (event.target.matches('#')) {
    
    // }

    // if (event.target.matches('#')) {
    
    // }

    // if (event.target.matches('#')) {
    
    // }
});

