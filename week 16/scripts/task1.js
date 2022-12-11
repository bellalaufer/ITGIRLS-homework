const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const sumtBtn = document.querySelector('.sumBtn');
const error = document.querySelector('.error');
const result = document.querySelector('.result');
const sum = document.querySelector('.sum');
const sorted = document.querySelector('.sorted');


const arr = []

const addNum = () => {
    let number = Number(input.value);
    if (number) {
        arr.push(number);                
                
    } else {        
        error.innerHTML = 'Ошибка'
    }

    result.innerHTML = arr;
    input.value = '';
    
}

const getSum = () => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];        
    }
    const sortedArr = arr.sort( (a, b) => a - b );
    sorted.innerHTML = "По порядку: " + sortedArr;
    sum.innerHTML = "Сумма: " + result;
}

addBtn.addEventListener('click', addNum);
sumtBtn.addEventListener('click', getSum)




