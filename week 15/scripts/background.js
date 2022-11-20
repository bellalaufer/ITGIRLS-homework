function changeColor() {

    if (document.querySelector('#color').value == "light") {
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.color = '#000000';
    }

    if (document.querySelector('#color').value == "dark") {
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#FFFFFF';
    }

    if (document.querySelector('#color').value == "green") {
        document.body.style.backgroundColor = "#17E447";
        document.body.style.color = '#000000';
    }
}