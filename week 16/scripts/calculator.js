const brands = document.querySelector('#brands');
const models = document.querySelector('#models');
const result = document.querySelector('.result');
const age = document.querySelector('#age');
const fuel = document.querySelectorAll('.fuel');
const buyer = document.querySelector('.buyer');
const checkbox = document.querySelectorAll('.checkbox');
const button = document.querySelector('.button');

let fuelPrice = 0;
let addedPrice = 0;

let audiModels = ['A3', 'A4', 'A6', 'Q3'];
let bmwModels = ['X1', 'X3', 'X4', 'X5'];
let ladaModels = ['Vesta', 'Granta', 'Largus'];



const selectBrand = () => {
    if(brands.value == 0) {
        models.style.display = 'none'
    } else {
        models.style.display = 'block'
    }

    let options = '';
    
    if(brands.value == '300') {
        for(let model of audiModels) {
            options += `<option value='1000'>${model}</option>`
        }
    }
    if(brands.value == '400') {
        for(let model of bmwModels) {
            options += `<option value='2000'>${model}</option>`
        }
    }
    if(brands.value == '500') {
        for(let model of ladaModels) {
            options += `<option value='3000'>${model}</option>`
        }
    }
    models.innerHTML = options;

    //выбор топлива - fuelPrice

    for (let i = 0; i < fuel.length; i++ ) {
        if (fuel[i].checked) {
            fuelPrice = fuel[i].value;           
        }
    }
    
    //чекбоксы - addedPrice   
    
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            addedPrice = checkbox[i].value;
        }
    }
    
}

const getSum = () => {
    result.innerHTML = `Стоимость: ${+brands.value + +models.value + +age.value + +fuelPrice + +addedPrice}`
}

button.addEventListener('click', getSum);


