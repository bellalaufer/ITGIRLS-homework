function showSum() {
    function getSum() {
        let a = prompt("Введите число")
        let b = prompt("Введите второе число")
        return +a + +b;
    }
    let result = getSum();
    alert(result)
}

function showDifference() {
    function getDifference() {
        let a = prompt("Введите число")
        let b = prompt("Введите второе число")
        return a - b;
    }
    let result = getDifference();
    alert(result)
}

function showProduct() {
    function getProduct() {
        let a = prompt("Введите число")
        let b = prompt("Введите второе число")
        return a * b;
    }
    let result = getProduct();
    alert(result)
}

function showQuotient() {
    function getQuotient() {
        let a = prompt("Введите число")
        let b = prompt("Введите второе число")
        return a / b;
    }
    let result = getQuotient();

    if (result = Infinity) {
        alert('Делить на ноль нельзя!');
    } else {
        alert(result)
    }
}



