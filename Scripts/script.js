//ADDING VARIABLES
var websiteDOM;
var websiteShortName;

//JQUERY WHEN THE DOCUMENT LOADS WE CAN ADD ALL THE ELEMENTS WE WANT TO JAVASCRIPT
$(document).ready(function (){
    websiteDOM = document.getElementById("websiteDOM");
    websiteShortName = document.getElementById("websiteShortname");
})

function newWebPage() {
    localStorage.setItem("DOM", websiteDOM.value);
    localStorage.setItem("Shortname", websiteShortName.value);
    console.log(window.localStorage);

}