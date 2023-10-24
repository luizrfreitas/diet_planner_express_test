import * as utils from './utils.js';

function setFoodCards(data)
{
    try {
        const foodCardDiv = document.getElementById('fetchedFoods');
        foodCardDiv.innerHTML = '';

        data.forEach(element => {
            const foodCard = utils.foodCard(element);
            const addToMealButton = document.getElementsByClassName('addToMeal');
            for (const element of addToMealButton) {
                element.addEventListener('click', () => {
                    handlers.addMealPanel(element.parentElement.parentElement);
                });
            }
            foodCardDiv.innerHTML += foodCard;
        });

    } catch (err) {
        foodCardDiv.innerHTML += foodCard;
    }
}

function addMealPanel(element)
{
    const addpanel = utils.addPanel({});
    element.innerHTML += addpanel;
}

export { setFoodCards, addMealPanel };