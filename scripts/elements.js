"use strict"

let currentBody = document.getElementById("bodyId");

class ButtonElement {
    constructor(idNameForButElem, insideText) {
        this = document.createElement("button");
        this.innerHTML = `${insideText}`;
        this.setAttribute("id", `${idNameForButElem}`);

    }
}

function addButton(elementType, innerText, idNameForButton) {
    String(elementType);
    let elementCreated = document.createElement(elementType);
    String(innerText);
    elementCreated.innerHTML = innerText;

    String(idNameForButton)
    elementCreated.setAttribute("id", idNameForButton);

    currentBody.appendChild(elementCreated);

    // Id types for Button
    let currentButtonId = document.getElementById(idNameForButton);
    let calculateButtonId = document.getElementById("calculateButton");

    if (currentButtonId == calculateButtonId) {
        elementCreated.addEventListener("click", function() {
            // What a calculate button will do...
            alert("wew ima gay");
        })
    } else {
        alert("Error, please check 'script.js'.");
    }

}


let inputNumberBoxOne = document.createElement("input");
inputNumberBoxOne.setAttribute("type", "number");
inputNumberBoxOne.setAttribute("id", "number");
inputNumberBoxOne.setAttribute("class", "boxOne");
currentBody.appendChild(inputNumberBoxOne);

let inputNumberBoxTwo = document.createElement("input");
inputNumberBoxTwo.setAttribute("type", "number");
inputNumberBoxTwo.setAttribute("id", "number");
inputNumberBoxTwo.setAttribute("class", "boxTwo");
currentBody.appendChild(inputNumberBoxTwo);



function calculateNumbers() {
    let numberOne = inputNumberBoxOne.textContent;
    let numberTwo = inputNumberBoxTwo.textContent;
    Number(numberOne);
    Number(numberTwo);



}


// Carry out functions
addButton("button", "ha_lol", "calculateButton");