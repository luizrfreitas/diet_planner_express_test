const rootPath = "http://localhost:5000/";

document.addEventListener('DOMContentLoaded', () => {
    fetch(rootPath + 'food/1').then(response => {
        console.log(response.json());
    });
});

$(document).on('click', '#btnSubmit', () => {
    fetch(rootPath + 'addFood').then(response => {
        
    });
});

