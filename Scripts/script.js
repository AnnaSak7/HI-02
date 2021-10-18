//ADDING VARIABLES
var websiteDOM;
var websiteShortName;
var itemNr = 0;

//JQUERY WHEN THE DOCUMENT LOADS WE CAN ADD ALL THE ELEMENTS WE WANT TO JAVASCRIPT
$(document).ready(function () {
  //ADDING THE INPUT BOXES TO JAVASCRIPT
  websiteDOM = document.getElementById('websiteDOM');
  websiteShortName = document.getElementById('websiteShortname');
  console.log(window.localStorage.getItem('DOM0'));

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
  //ADDING THE OBJECT TO LOCAL STORAGE, CHANING THE OBJECT TO A STRING THROUGH JSON.stringify
  localStorage.setItem('website' + itemNr, JSON.stringify(website));

  //CALLING THE CREATE NEW DIV FUNCTION AND SENDING THE VALUES WRITTEN IN THE INPUT BOXES
  createNewDivWebPage(itemNr, websiteDOM.value, websiteShortName.value);

  //MAKING SURE THAT THE LOCAL STORAGE ARRAY DOESNT OVERWRITE ANY PREVIOUS ITEMS IN THE ARRAY
  itemNr++;
}

//CREATING NEW DIVS FOR WEBSITE LINKS, GRABBING THE SENT NUMBER ID, DOMAIN NAME AND SHORT NAME
function createNewDivWebPage(nr, dom, shnm) {
  //DEFINING NEW DIV THROUGH JQUERY
  //(<div id='websiteBox(nr)' onClick="location.href'http://(domain name)'" class="websiteBoxClass" style="left:(100px*amount of boxes)">(shortname)</div>)
  var $newDiv = $('<div/>').attr('id', 'websiteBox' + nr);
  $newDiv.attr('onClick', `location.href='http://${dom}'`);
  $newDiv.attr('class', 'websiteBoxClass');
  //$newDiv.text(shnm);

  // $newDiv.prepend(
  //       `<div class="iconShortNameBox"><p class="shortName">${shnm}</p><button class="deleteBtn">X</button></div>`

  //   //APPEND IMG TAG TO THE DIV TAG
  $newDiv.prepend(
    `<img src="http://www.google.com/s2/favicons?domain=${dom}" alt="favicon"/><div class="iconShortNameBox"><p class="shortName">${shnm}</p><button class="deleteBtn">X</button></div>`
  );

  $newDiv
    .css({
      left: 100 * itemNr + 'px',
      //ADD THE NEW DIV TO THE BODY
    })
    .appendTo('#kroppen')
    .html();
}

//LOAD ALL THE PAGES SAVED IN LOCAL STORAGE
function loadLocalWebpage() {
  //FOR LOOP TO GET ALL THE ITEMS INSIDE LOCAL STORAGE
  for (var i = 0; i < localStorage.length; i++) {
    //GETTING THE WEBSITE STRING AND CHANGING IT BACK INTO AN OBJECT THROUGH JSON.parse
    var divAttr = JSON.parse(window.localStorage.getItem('website' + i));

    //CREATING NEW DIVS FOR EACH LOCAL STORAGE ITEM
    createNewDivWebPage(i, divAttr.dom, divAttr.shortname);

    //MAKING SURE IF WE ADD NEW ITEMS TO LOCAL STORAGE WE DONT OVERWRITE PREVIOUS OBJECTS BY SETTING THE NUMBER ID TO THE LAST "i" VALUE OF THE FOR LOOP +1
    itemNr = i + 1;
  }
}



function deleteIcon() {
  localStorage.removeItem(“website”+);
}

/* DROPDOWN MENU WHEN THE USER CLICKS ON THE BUTTON */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

///* CLOSES THE DROPDOWN WHEN THE USER CLICKS OUTSIDE OF IT */
/*window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }*/
