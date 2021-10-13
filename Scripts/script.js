//ADDING VARIABLES
var websiteDOM;
var websiteShortName;
var itemNr = 0;

//JQUERY WHEN THE DOCUMENT LOADS WE CAN ADD ALL THE ELEMENTS WE WANT TO JAVASCRIPT
$(document).ready(function (){
    websiteDOM = document.getElementById("websiteDOM");
    websiteShortName = document.getElementById("websiteShortname");
})

function newWebPage() {
    localStorage.setItem("DOM" + itemNr, websiteDOM.value);
    localStorage.setItem("Shortname" + itemNr, websiteShortName.value);
    console.log(window.localStorage);
    itemNr++;
}