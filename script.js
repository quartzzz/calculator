"use strict"

// Still trying to figure out this button thing. Probably making it more complicated
//than it needs to be...

// Add Element to body
function addButton(elementType, innerText, idName) {
    // Create Node
    String(elementType);
    let elementCreated = document.createElement(elementType);

    // Attributes
    String(innerText);
    elementCreated.innerHTML = innerText;
    String(idName)
    elementCreated.setAttribute("id", idName);

    // Add to page
    let currentBody = document.getElementById("bodyId");
    currentBody.appendChild(elementCreated);


    elementCreated.addEventListener("click", function() {
        alert("wew ima gay")
    });

};

addButton("button", "ha_lol", "calculateButton");