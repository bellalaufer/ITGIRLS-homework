// Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.

const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');



class Calculator {
    
    static getSum() {
        let a = prompt("Введите число");
        let b = prompt("Введите второе число");
        return +a + +b;        
    }
    static getDifference() {
        let a = prompt("Введите число");
        let b = prompt("Введите второе число");
        return a - b;
    };
    static getProduct() {
        let a = prompt("Введите число");
        let b = prompt("Введите второе число");
        return a * b;
    }
    static getQuotient () {
        let a = prompt("Введите число");
        let b = prompt("Введите второе число");
        return a / b;
    }
}

addBtn.addEventListener('click', function() {
    let result = Calculator.getSum();
    alert(result)
});
subtractBtn.addEventListener('click', function() {
    let result = Calculator.getDifference();
    alert(result)
});
multiplyBtn.addEventListener('click', function() {
    let result = Calculator.getProduct();
    alert(result)
});
divideBtn.addEventListener('click', function() {
    let result = Calculator.getQuotient();
    if (result = Infinity) {
                alert('Делить на ноль нельзя!');
            } else {
                alert(result)
            }
    
});





