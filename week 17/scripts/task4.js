const input = document.querySelector('.input')
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const mean = document.querySelector('.mean');
const sum = document.querySelector('.sum');
const product = document.querySelector('.product');

const numbers = [];




function generateNumbers() {
    for (let i = 0; i < 10; i++) {
        let max = 10;
        let min = -10;
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    input.innerHTML += numbers;

    let minNumber = Math.min.apply(null, numbers);
    min.innerHTML += minNumber;

    let maxNumber = Math.max.apply(null, numbers);
    max.innerHTML += maxNumber;

    let sumNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumNumber = sumNumber + numbers[i];
    }

    sum.innerHTML += sumNumber;
    mean.innerHTML += sumNumber / 10;

    let multiplyNumber = 1;
    for (let i = 0; i < numbers.length; i++) {
        multiplyNumber = multiplyNumber * numbers[i];
    }

    product.innerHTML += multiplyNumber;
}
