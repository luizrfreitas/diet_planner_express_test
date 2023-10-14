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

        fetch(rootPath + 'searchFood' + uriParams, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)});
    });

});

document.addEventListener('DOMContentLoaded', () => {

});
