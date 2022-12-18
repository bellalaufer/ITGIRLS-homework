"use strict"

const button = document.querySelector("button");
let body = document.querySelector("#body");
let input = document.querySelector("#textarea");
let personInput = document.querySelector('.person');




button.addEventListener("click", checkMessage);
button.addEventListener("click", clearText);

document.addEventListener('DOMContentLoaded', function() {
    let name = localStorage.getItem('name');
    if(name != '') {
        personInput.value = name;
    }
});

function addComment(person,comment) {
    body.innerHTML += `${person}:${comment}<br>`
     
}

function checkMessage() {
    let person = personInput.value;
    let comment = input.value;
    if(localStorage.getItem('name') == '') {
        localStorage.setItem('name', person);
    }

    addComment(person,comment);
}


function clearText() {
    input.value = "";
}



