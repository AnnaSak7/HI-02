//ADDING VARIABLES
var websiteDOM;
var websiteShortName;
var modal;
var itemNr = 0;

//JQUERY WHEN THE DOCUMENT LOADS WE CAN ADD ALL THE ELEMENTS WE WANT TO JAVASCRIPT
$(document).ready(function () {
  //ADDING THE INPUT BOXES TO JAVASCRIPT
  websiteDOM = document.getElementById('websiteDOM');
  websiteShortName = document.getElementById('websiteShortname');
  console.log(window.localStorage.getItem('DOM0'));

  //MODAL ELEMENT
  modal = document.getElementById('myModal');

  //RUN THE FUNCTION THAT LOADS PREVIOUSLY SAVED PAGES IN LOCAL STORAGE
  loadLocalWebpage();
});

//CREATING A NEW WEBPAGE BOX AND ADDING THE WEBPAGE TO LOCAL STORAGE
function newWebPage() {
  //CREATING AN OBJECT WITH THE WEBSITE DOMAIN NAME(dom, ex: youtube.com) AND WHAT WE WANT THE SHORT NAME TO BE(shortname, ex: youtube)
  var website = {
    dom: websiteDOM.value,
    shortname: websiteShortName.value,
  };

  if(website.dom.includes(".")) {
    //ADDING THE OBJECT TO LOCAL STORAGE, CHANING THE OBJECT TO A STRING THROUGH JSON.stringify
    localStorage.setItem('website' + itemNr, JSON.stringify(website));

    //CALLING THE CREATE NEW DIV FUNCTION AND SENDING THE VALUES WRITTEN IN THE INPUT BOXES
    createNewDivWebPage(itemNr, websiteDOM.value, websiteShortName.value);

    //MAKING SURE THAT THE LOCAL STORAGE ARRAY DOESNT OVERWRITE ANY PREVIOUS ITEMS IN THE ARRAY
    itemNr++;
  }
  else {alert("Please write a valid DOM")}
}

//CREATING NEW DIVS FOR WEBSITE LINKS, GRABBING THE SENT NUMBER ID, DOMAIN NAME AND SHORT NAME
function createNewDivWebPage(nr, dom, shnm) {
  //DEFINING NEW DIV THROUGH JQUERY
  //(<div id='websiteBox(nr)' onClick="location.href'http://(domain name)'" class="websiteBoxClass" style="left:(100px*amount of boxes)">(shortname)</div>)
  var $newDiv = $('<div/>');
  $newDiv.attr('id', 'websiteBox' + nr);

  //ERROR HANDLING
  if(dom.includes("http://") || dom.includes("https://"))$newDiv.attr('onClick', `location.href='${dom}'`);
  else $newDiv.attr('onClick', `location.href='http://${dom}'`);

  $newDiv.attr('class', 'websiteBoxClass');

  //APPEND IMG TAG TO THE DIV TAG
  $newDiv.prepend(
    `<button class="deleteBtn" onclick="deleteIcons(${nr})" style="background-color: transparent; border: none; font-weight: 900; font-size: 1rem;">X</button>
        <div class="faviBox">
            <img src="http://www.google.com/s2/favicons?domain=${dom}"
            alt="favicon" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:50%;width:50%;"/>
        </div>
        <div class="shortNameBox">${shnm}</div>`
  );

  $newDiv.appendTo('#favWebBox').html();
}

//LOAD ALL THE PAGES SAVED IN LOCAL STORAGE
function loadLocalWebpage() {
  //FOR LOOP TO GET ALL THE ITEMS INSIDE LOCAL STORAGE
  for (var i = 0; i < localStorage.length; i++) {
    //GETTING THE WEBSITE STRING AND CHANGING IT BACK INTO AN OBJECT THROUGH JSON.parse
    divAttr = JSON.parse(window.localStorage.getItem(Object.keys(localStorage).sort()[i]));

    //CREATING NEW DIVS FOR EACH LOCAL STORAGE ITEM
    createNewDivWebPage(Object.keys(localStorage).sort()[i].replace('website',''), divAttr.dom, divAttr.shortname);

    //MAKING SURE IF WE ADD NEW ITEMS TO LOCAL STORAGE WE DONT OVERWRITE PREVIOUS OBJECTS BY SETTING THE NUMBER ID TO THE LAST "i" VALUE OF THE FOR LOOP +1
    itemNr = parseInt(Object.keys(localStorage).sort()[i].replace('website','')) + 1;
  }
}

const deleteBtn = document.querySelectorAll('.deleteBtn');
console.log(deleteBtn);

//REMOVE ICONS ON PRESSING THE "X" BUTTON
function deleteIcons(nr) {
  window.localStorage.removeItem('website' + nr);
  document.getElementById('websiteBox' + nr).remove();
  event.stopPropagation();
}

// MODAL
// USER CLICKS ON BUTTON OPEN MODAL
function showModal() {
  modal.style.display = 'block';
}

// CLOSE THE MODAL WHEN USER CLICKS ON SPAN
function hideModal() {
  modal.style.display = 'none';
}

// CLOSES THE WINDOW WHEN USER CLICKS OUTSIDE THE MODAL
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
