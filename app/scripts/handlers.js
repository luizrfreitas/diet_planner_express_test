function setFoodCards(data)
{
    try {
        const foodCardDiv = document.getElementById('fetchedFoods');
        foodCardDiv.innerHTML = '';

        data.forEach(element => {
            const foodCard = `
            <div class="border border-dark position-relative">
                <div>${element.name}</div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Kcal</th>
                                <th>CAR</th>
                                <th>PRO</th>
                                <th>FAT</th>
                                <th>WEIGHT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><p>${element.kcal}</p></th>
                                <th><p>${element.car}</p></th>
                                <th><p>${element.pro}</p></th>
                                <th><p>${element.far}</p></th>
                                <th><input type="number"></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button class="addToMeal">Add</button>
                </div>
            </div>
            `;
            
            foodCardDiv.innerHTML += foodCard;
        });

        const addToMealButton = document.getElementsByClassName('addToMeal');
        for (const element of addToMealButton) {
            element.addEventListener('click', () => {
                addMealPanel(element.parentElement.parentElement);
            });
        }
    } catch (err) {
        foodCardDiv.innerHTML += foodCard;
    }
}

function addMealPanel(element)
{
    const addpanel =
    `<div class='container position-absolute top-0 start-0 bg-white'>
        <div class='row'> 
            <p>Add to meal:</p>
        </div>
        <div class='row'>
            <div class='col'>
                <button class='btn btn-success' id='breakfast'>breakfast</button>
            </div>
            <div class='col'>
                <button class='btn btn-success' id='lunch'>lunch</button>
            </div>
            <div class='col'>
                <button class='btn btn-success' id='snack'>snack</button>
            </div>
            <div class='col'>
                <button class='btn btn-success' id='dinner'>dinner</button>
            </div>
        </div>
        <div class='row'>
            <button class='btn btn-warning' id='closePanel'>close</button>
        </div>
    </div>`;
    element.innerHTML += addpanel;
}

export { setFoodCards, addMealPanel };