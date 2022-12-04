"use strict"

const button = document.querySelector("button");
let body = document.querySelector("#body");
let input = document.querySelector("#textarea");


button.addEventListener("click", addComment);
button.addEventListener("click", clearText);

function addComment() {
    let str = input.value;
    let comment = str.replace(/xxx|viagra/ig, "***");
    const node = document.createElement("div");
    const textnode = document.createTextNode(`${comment}`);
    node.appendChild(textnode);
    document.querySelector("#body").appendChild(node);
}

function clearText() {
    input.value = "";
}


