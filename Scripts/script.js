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

  //randomise position of clouds
  $('.cloud').each(function () {
    $holder = $(this).parent();
    $divWidth = $holder.width();
    $divHeight = $holder.height();

    $(this).css({
      left: Math.floor(Math.random() * Number($divWidth)),
      top: Math.floor(Math.random() * Number($divHeight)),
    });
  });
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
function createNewDivWebPage(itemNr, dom, shnm) {
  //DEFINING NEW DIV THROUGH JQUERY
  //(<div id='websiteBox(nr)' onClick="location.href'http://(domain name)'" class="websiteBoxClass" style="left:(100px*amount of boxes)">(shortname)</div>)
  var $newDiv = $('<div/>').attr('id', 'websiteBox');
  $newDiv.attr('onClick', `location.href='http://${dom}'`);
  //$newDiv.attr('class', 'websiteBoxClass');
  $newDiv.prepend(
    `<div class="iconShortNameBox"><p class="shortName">${shnm}</p><button class="deleteBtn">X</button></div>`
  );

  //APPEND IMG TAG TO THE DIV TAG
  $newDiv.prepend(
    `<img src="http://www.google.com/s2/favicons?domain=${dom}" alt="favicon"/>`
  );

  $newDiv
    // .css({
    //   left: 100 * itemNr + 'px',
    //   //ADD THE NEW DIV TO THE BODY
    // })
    .appendTo('.clouds')
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

const clouds = document.getElementsByClassName('cloud');
console.log(clouds);
[].forEach.call(clouds, (cloud) => {
  cloud.addEventListener('click', (event) => {
    console.log(event.target.id);
    const website = JSON.parse(
      localStorage.getItem('website' + event.target.id)
    );
    console.log(localStorage.getItem('website' + event.target.id));
    console.log(website.dom);
  });
});

//save webpage
// let nav = 0;
// let clicked = null;
// let icons = localStorage.getItem(`icons`)
//   ? JSON.parse(localStorage.getItem('icons'))
//   : [];

// const container = document.getElementById('clouds');
// const websiteInput = document.getElementById('websiteInput');
// const shortName = document.getElementById('websiteShortname');
// const newEventModal = document.getElementById('newEventModal');
// const deleteEventModal = document.getElementById('deleteEventModal');
// const backDrop = document.getElementById('modalBackDrop');

// function openModal(number) {
//   clicked = number;

//   const newWebpage = icons.find((e) => e.number === clicked);

//   if (eventForDay) {
//     document.getElementById('eventText').innerText = eventForDay.title;
//     deleteEventModal.style.display = 'block';
//   } else {
//     newEventModal.style.display = 'block';
//   }

//   backDrop.style.display = 'block';
// }

// function load() {

//   for (let i = 1; i <= 8; i++) {
//     const clouds = document.createElement('div');
//     clouds.classList.add('cloud');

//     const dayString = `${month + 1}/${i - paddingDays}/${year}`;

//     if (i > paddingDays) {
//       daySquare.innerText = i - paddingDays;

//       const eventForDay = events.find((e) => e.date === dayString);

//       if (i - paddingDays === day && nav === 0) {
//         daySquare.id = 'currentDay';
//       }

//       if (eventForDay) {
//         const eventDiv = document.createElement('div');
//         eventDiv.classList.add('event');
//         eventDiv.innerText = eventForDay.title;
//         daySquare.appendChild(eventDiv);
//       }

//       daySquare.addEventListener('click', () => openModal(dayString));
//     } else {
//       daySquare.classList.add('padding');
//     }
//     calendar.appendChild(daySquare);
//   }
// }

// // const clickClouds = document.querySelectorAll('cloud');
// // const newEventModal = document.querySelector('newEventModal');

// // clickClouds.addEventListener('click', () => {
// //   newEventModal.classList.toggle('change');
// // });

// function closeModal() {
//   websiteInput.classList.remove('error');
//   newEventModal.style.display = 'none';
//   deleteEventModal.style.display = 'none';
//   backDrop.style.display = 'none';
//   websiteInput.value = '';
//   clicked = null;
// }

// function saveWebPage() {
//   if (websiteInput.value) {
//     websiteInput.classList.remove('error');

//     icons.push({
//       number: clicked,
//       website: websiteInput.value,
//       shortName: shortName.value,
//     });

//     localStorage.setItem('events', JSON.stringify(icons));
//     closeModal();
//   } else {
//     websiteInput.classList.add('error');
//   }
// }

// // delete icons

// function deleteIcon() {
//   icons = icons.filter((i) => i.number !== clicked);
//   localStorage.setItem('events', JSON.stringify(events));
//   closeModal();
// }

// function initButton() {
//   document.getElementById('saveButton').addEventListener('click', saveEvent);

//   document.getElementById('cancelButton').addEventListener('click', closeModal);

//   document
//     .getElementsByClassName('deleteBtn')
//     .addEventListener('click', deleteIcon);

//   document.getElementById('closeButton').addEventListener('click', closeModal);
// }

// initButton();
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
