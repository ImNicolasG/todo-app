

var list = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var itemNum = 3



// Function that runs on each button click //
function newElement() {


    // variable that creates a new "li" element
    //'.setAttribute' gives each element a class and assigns it a number so that we can remove it
    var node = document.createElement("li");
    node.setAttribute("id", itemNum);
    node.setAttribute("onclick", "removeMe(this.id)")
    
    itemNum += 1;

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


function removeMe (id) {
    document.getElementById(id).remove();
};