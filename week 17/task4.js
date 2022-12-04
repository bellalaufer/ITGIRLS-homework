let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.round((Math.random() - 0.5) * 2 * 10));
    console.log(arr)
}




function randomiseNumbers() {
    for (let i = 0; i < 10; i++) {
        let max = 10;
        let min = -10;
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    result.innerHTML = numbers;
}