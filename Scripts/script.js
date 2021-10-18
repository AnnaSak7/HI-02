//ADDING VARIABLES
var websiteDOM;
var websiteShortName;
var itemNr = 0;

//JQUERY WHEN THE DOCUMENT LOADS WE CAN ADD ALL THE ELEMENTS WE WANT TO JAVASCRIPT
$(document).ready(function () {
  // //ADDING THE INPUT BOXES TO JAVASCRIPT
  // websiteDOM = document.getElementById('websiteDOM');
  // websiteShortName = document.getElementById('websiteShortname');
  // console.log(window.localStorage.getItem('DOM0'));

  // // RUN THE FUNCTION THAT LOADS PREVIOUSLY SAVED PAGES IN LOCAL STORAGE
  // loadLocalWebpage();

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
// function newWebPage() {
//   //CREATING AN OBJECT WITH THE WEBSITE DOMAIN NAME(dom, ex: youtube.com) AND WHAT WE WANT THE SHORT NAME TO BE(shortname, ex: youtube)
//   let website = {
//     dom: websiteDOM.value,
//     shortname: websiteShortName.value,
//   };
//   //ADDING THE OBJECT TO LOCAL STORAGE, CHANING THE OBJECT TO A STRING THROUGH JSON.stringify
//   localStorage.setItem('website' + itemNr, JSON.stringify(website));

//   //CALLING THE CREATE NEW DIV FUNCTION AND SENDING THE VALUES WRITTEN IN THE INPUT BOXES
//   createNewDivWebPage(itemNr, websiteDOM.value, websiteShortName.value);

//   //MAKING SURE THAT THE LOCAL STORAGE ARRAY DOESNT OVERWRITE ANY PREVIOUS ITEMS IN THE ARRAY
//   itemNr++;
// }

// //CREATING NEW DIVS FOR WEBSITE LINKS, GRABBING THE SENT NUMBER ID, DOMAIN NAME AND SHORT NAME
// function createNewDivWebPage(itemNr, dom, shnm) {
//   //DEFINING NEW DIV THROUGH JQUERY
//   //(<div id='websiteBox(nr)' onClick="location.href'http://(domain name)'" class="websiteBoxClass" style="left:(100px*amount of boxes)">(shortname)</div>)
//   let $newDiv = $('<div/>').attr('id', 'websiteBox');
//   $newDiv.attr('onClick', `location.href='http://${dom}'`);
//   //$newDiv.attr('class', 'websiteBoxClass');
//   $newDiv.prepend(
//     `<div class="iconShortNameBox"><p class="shortName">${shnm}</p><button class="deleteBtn">X</button></div>`
//   );

//   //APPEND IMG TAG TO THE DIV TAG
//   $newDiv.prepend(
//     `<img src="http://www.google.com/s2/favicons?domain=${dom}" alt="favicon"/>`
//   );

//   $newDiv
//     // .css({
//     //   left: 100 * itemNr + 'px',
//     //   //ADD THE NEW DIV TO THE BODY
//     // })
//     .appendTo('.clouds')
//     .html();
// }

let clicked = null;
const newEventModal = document.getElementById('newEventModal');
const backDrop = document.getElementById('modalBackDrop');
const cloudsContainer = document.getElementById('clouds');
const cloud = document.getElementById('cloud');

// [].forEach.call(clouds, (cloud) => {
//   cloud.addEventListener('click', openModal);
// });

let website = localStorage.getItem(`website`)
  ? JSON.parse(localStorage.getItem('website'))
  : [];

const websiteInput = document.getElementById('websiteInput');
const websiteShortname = document.getElementById('websiteShortname');
///console.log('websiteShortname', websiteShortname);
const cloudClasses = document.getElementsByClassName('cloud');
///console.log('cloudClasses', cloudClasses);

function getID(e) {
  let element = e.target || e,
    srcElement;
  console.log(element.id);
}

function openModal(event) {
  //clicked = element.id;
  newEventModal.style.display = 'block';
  backDrop.style.display = 'block';
}

function clickedElementID(id) {
  document.getElementById(id);
  console.log(id.id);
}

function load() {
  cloudsContainer.innerHTML = '';

  //create clouds
  for (let i = 0; i <= 7; i++) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.id = i;
    cloud.setAttribute('onClick', '');

    const idNumber = cloud.addEventListener('click', () => openModal(cloud));
    // const clickedCloud = website.find((e)
    // // const iconNumber = website.find(e => e. === )

    if (website) {
      const favicon = document.createElement('img');
      favicon.src = `http://www.google.com/s2/favicons?domain=${website.dom}`;
      cloud.appendChild(favicon);
      const shortN = document.createElement('p');
      if (website.shortname === undefined) {
        shortN.innerHTML = '';
      } else {
        shortN.innerText = website.shortname;
      }
      cloud.appendChild(shortN);
    }
    cloudsContainer.appendChild(cloud);
    // if (!website) {
    //   //todo: create popup to insert new website
    //   /////console.log('undefined!!!!!');
    //   //todo: show modal

    //   newEventModal.style.display = 'block';
    //   backDrop.style.display = 'block';
    //   saveWebPage();
    // } else {
    //   //to show the website that's already exist
    //   let img = document.createElement('img');
    //   img.src = `http://www.google.com/s2/favicons?domain=${website.dom}`;
    //   event.target.appendChild(img);
    // }
  }
}

// // //LOAD ALL THE PAGES SAVED IN LOCAL STORAGE
// function loadLocalWebpage() {
//   //FOR LOOP TO GET ALL THE ITEMS INSIDE LOCAL STORAGE
//   for (var i = 0; i < classes.length; i++) {
//     //GETTING THE WEBSITE STRING AND CHANGING IT BACK INTO AN OBJECT THROUGH JSON.parse
//     var divAttr = JSON.parse(window.localStorage.getItem('website' + i));

//     //CREATING NEW DIVS FOR EACH LOCAL STORAGE ITEM
//     createNewDivWebPage(i, divAttr.dom, divAttr.shortname);

//     //MAKING SURE IF WE ADD NEW ITEMS TO LOCAL STORAGE WE DONT OVERWRITE PREVIOUS OBJECTS BY SETTING THE NUMBER ID TO THE LAST "i" VALUE OF THE FOR LOOP +1
//     itemNr = i + 1;
//   }
// }

// function openModal(cloud) {
//   clicked = cloud;

//   const iconForCloud = website.find(w => w.)
// }

//when clicked a cloud
function createPopup(event) {
  //console.log(event.target.id);
  const website = JSON.parse(localStorage.getItem('website' + event.target.id));
  console.log(localStorage.getItem('website' + event.target.id));
  //console.log(website.dom);
  if (!website) {
    //todo: create popup to insert new website
    /////console.log('undefined!!!!!');
    //todo: show modal

    newEventModal.style.display = 'block';
    backDrop.style.display = 'block';
    saveWebPage();
  } else {
    //to show the website that's already exist
    let img = document.createElement('img');
    img.src = `http://www.google.com/s2/favicons?domain=${website.dom}`;
    event.target.appendChild(img);
  }
}

function closeModal() {
  websiteInput.classList.remove('error');
  websiteShortname.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  websiteInput.value = '';
  websiteShortname.value = '';
  //clicked = null;
}

function saveWebPage() {
  // console.log('websiteInput.value', websiteInput.value);
  // console.log('websiteShortname', websiteShortname);
  // console.log('websiteShortname.value', websiteShortname.value);
  // let clickedCloud = document.addEventListener('click', (e) => {
  //   alert(e.target.id);
  // });
  // console.log('clicked', itemNr);
  //CREATING AN OBJECT WITH THE WEBSITE DOMAIN NAME(dom, ex: youtube.com) AND WHAT WE WANT THE SHORT NAME TO BE(shortname, ex: youtube)
  if (websiteInput.value !== '' && websiteShortname.value !== '') {
    //console.log('hehey');
    websiteInput.classList.remove('error');
    website.push({
      // id: ,
      dom: websiteInput.value,
      shortname: websiteShortname.value,
    });
    //ADDING THE OBJECT TO LOCAL STORAGE, CHANING THE OBJECT TO A STRING THROUGH JSON.stringify
    localStorage.setItem('website', JSON.stringify(website));

    // createNewDivWebPage(itemNr, websiteInput.value, websiteShortname.value);
    // itemNr++;
    closeModal();
  } else {
    websiteInput.classList.add('error');
  }
}

function deleteIcon() {
  icons = icons.filter((i) => i.number !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}
function initBtn() {
  document.getElementById('saveButton').addEventListener('click', saveWebPage);

  document.getElementById('cancelButton').addEventListener('click', closeModal);

  // document
  //   .getElementsByClassName('deleteBtn')
  //   .addEventListener('click', deleteIcon);

  document.getElementById('closeButton').addEventListener('click', closeModal);
}

initBtn();
load();

// function deleteIcon() {
//   icons = icons.filter((i) => i.number !== clicked);
//   localStorage.setItem('events', JSON.stringify(events));
//   closeModal();
// }

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
