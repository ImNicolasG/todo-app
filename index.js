

var list = document.querySelector("ul");
var listItems = document.querySelectorAll("li");




// Function that runs on each button click //
function newElement() {
    // variable that creates a new "li" element
    var node = document.createElement("li");
    // gets the '.value' from the form 'itemInput' and the textbox 'itemDesc'
    var itemName = document.forms["itemInput"]["itemDesc"].value;
    // if the textbox is blank, send an alert to the browser and do nothing
    if (itemName == ""){
        alert("Cannot Submit Blank Field");
        return false;
    };

    // Append child element to the node variable which is a list item using the itemName
    node.appendChild(document.createTextNode(itemName));
    // Get the "ul" element and append node
    document.querySelector("ul").appendChild(node);
    // Reset the form after submission
    document.getElementById("mainForm").reset();
};
