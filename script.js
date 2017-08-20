"use strict"

// Still trying to figure out this button thing. Probably making it more complicated
//than it needs to be...
let currentBody = document.getElementById("bodyId");

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

function addNumberInput(numberId) {
    let inputNumberBox = document.createElement("input");
    inputNumberBox.setAttribute("type", "number");

    inputNumberBox.setAttribute("id", numberId);



}


// Carry out functions
addButton("button", "ha_lol", "calculateButton");