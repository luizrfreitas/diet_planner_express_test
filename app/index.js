$(document).ready(function() {
    const rootPath = "http://localhost:5000/";

    $(document).on('click', '#btnAddFood', () => {

        const name = $('#name').val();
        const weight = $('#weight').val();
        const car = $('#car').val();
        const pro = $('#pro').val();
        const fat = $('#fat').val();

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

    $(document).on('click', '#searchFoodBtn', () => {
        const name = $('#searchFood').val();
        const uriParams = `?name=${name}`;

        fetch(rootPath + 'searchFood' + uriParams)
        .then(response => response.json())
        .then(data => setFoodCards(data['data']));
    });

});

function setFoodCards(data)
{
    data.forEach(element => {
        const foodCard = `
        <div class="border border-dark">
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
                <button>Add</button>
            </div>
        </div>
        `;

        $('#fetchedFoods').append(foodCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {

});
