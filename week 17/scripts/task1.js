"use strict"

let button = document.querySelector("button");
button.addEventListener("click", sortName);

function sortName() {
    let text = document.querySelector("input").value;
    let cleantext = text.trim();
    let arr = cleantext.split(" ");
    let lastname = arr[0];
    let name = arr[1];
    let patr = arr[2];
    let lastnameOK = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
    let nameOK = name[0].toUpperCase() + name.slice(1).toLowerCase();


    document.querySelector("#lastname").innerHTML = "Фамилия: " + lastnameOK;
    document.querySelector("#name").innerHTML = "Имя: " + nameOK;

    if (arr.length == 2) {
        document.querySelector("#patr").innerHTML = "Отчество: нет";
    } else {
        let patrOK = patr[0].toUpperCase() + patr.slice(1).toLowerCase();
        document.querySelector("#patr").innerHTML = "Отчество: " + patrOK;
    };

};






