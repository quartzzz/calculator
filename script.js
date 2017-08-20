"use strict"

// Add Element to body
function addElementToBody(elementType, innerText) {
    // Create Node
    let elementCreated = document.createElement(`${elementType}`);

    // New type depending
    String(innerText);
    switch (elementCreated.getElementsByTagName) {
        case "button":
            elementCreated.innerHTML = innerText;
            break;
        case "label":
            elementCreated.innerHTML = innerText;
            break;
    };

    // Add to page
    let newDiv = document.createElement("div");
    newDiv.appendChild(elementCreated);

    let placeAboveDiv = document.getElementById("currentDiv");
    document.body.insertBefore(newDiv, placeAboveDiv);

};

addElementToBody("button", "ha_lol");

function buttonLabel() {
    let buttonProperty = document.getElementsByTagName("button");

    if (buttonProperty == document.getElementsByTagName("button")) {
        get.addEventListener("click", function() {
            alert("wew ima gay");
        });
    };
};