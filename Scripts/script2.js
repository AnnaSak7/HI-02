var stageNr = 0;
var changeNr = 1;
var today = new Date();
var changeTime = false;
var cHours;
var cMinutes;
var cSeconds;
var time;
var sunBox;
var moonBox;
var x_pos;
var y_pos;
var lineHours;

//WHEN THE PAGE IS LOADED WE RUN THIS
$(document).ready(function () {
  //DEFINE THE SUN AND MOON IN JAVASCRIPT (TEMPORARY)
  sunBox = document.getElementById('sunContainer');
  moonBox = document.getElementById('moonContainer');

  //RUN THE FUNCTIONS ONCE THE PAGE IS LOADED
  setTime();
  setInterval(setTime, 1000);
  backgroundColor();
  setSMPosition(today.getHours(), today.getMinutes());
});


function bytTime() {
  cHours = document.getElementById('cHours').value;
  cMinutes = document.getElementById('cMinutes').value;
  cSeconds = document.getElementById('cSeconds').value;
  changeTime = true;
}

//CHANGE THE TIMER TO CURRENT TIME
function setTime() {
  if (!changeTime) today = new Date();
  if (changeTime)
    (today = new Date(2021, 10, 19, cHours, cMinutes, cSeconds)),
      setSMPosition(today.getHours(), today.getMinutes());

  //IF A NEW MINUTE STARTS WE CHANGE THE SUN/MOON POSITION, SENDING THE CURRENT HOURS AND MINUTES TO THE FUNCTION
  if (today.getSeconds() == 0)
    setSMPosition(today.getHours(), today.getMinutes()), backgroundColor();

  //ADD A 0 TO THE CURRENT HOURS/MINUTES/SECONDS AND THEN KEEP THE LAST TWO DIGITS OF THE STRING
  let currentHours = ('0' + today.getHours()).slice(-2);
  let currentMinutes = ('0' + today.getMinutes()).slice(-2);
  let currentSeconds = ('0' + today.getSeconds()).slice(-2);

  time = currentHours + ':' + currentMinutes + ':' + currentSeconds;

  document.getElementById('date').innerHTML = time;
}

//CHANGE THE POSITION OF THE STARS AND MOON DEPENDING ON TIME OF DAY
function setSMPosition(hours, minutes) {
  if (hours >= 7 && hours < 19) lineHours = hours - 7;
  else if (hours < 7) lineHours = hours + 5;
  else lineHours = hours - 19;

  x_pos = (33 / 4) * lineHours + (33 / 4 / 60) * minutes;

  if (lineHours < 4) y_pos = 10 * lineHours + (10 / 60) * minutes;

  if (lineHours >= 4 && lineHours < 8) y_pos = 40;

  if (lineHours >= 8)
    (y_pos = 40), (y_pos -= (lineHours - 8) * 10 + (10 / 60) * minutes);

  if (hours >= 7 && hours < 19) {
    sunBox.style.bottom = y_pos + 20 + '%';
    sunBox.style.left = x_pos + '%';
    moonBox.style.bottom = '300%';
  }
  if ((hours >= 19 && hours < 24) || (hours >= 0 && hours < 7)) {
    moonBox.style.bottom = y_pos + 20 + '%';
    moonBox.style.left = x_pos + '%';
    sunBox.style.bottom = '300%';
    console.log('tjo');
  }
}

//CHANGE THE BACKGROUND COLOR DEPENDING ON TIME OF DAY
function backgroundColor() {
  let hr = today.getHours();
  let background = document.getElementById('kroppen');
  let stars = document.getElementById('particles-js');
  let filter = document.getElementById('filter');
  //CHANGE THE BACKGROUND STATE DEPENDING ON CURRENT HOUR (EACH CASE IS BASED ON HOURS)
  switch (hr) {
    default:
      background.className = '';
      background.classList.add('stage_0');
      stars.className = '';
      stars.classList.add('noStars');
      filter.classList = '';
      filter.classList.add('filter');

      break;

    case 17:
      background.className = '';
      background.classList.add('stage_1');
      stars.className = '';
      stars.classList.add('stars-inTheSky-halfopacity');
      filter.classList = '';
      filter.classList.add('filter-17');
      break;

    case 18:
      background.className = '';
      background.classList.add('stage_2');
      stars.className = '';
      stars.classList.add('stars-inTheSky-halfopacity');
      filter.classList = '';
      filter.classList.add('filter-18');
      break;

    case 19:
      background.className = '';
      background.classList.add('stage_3');
      stars.className = '';
      stars.classList.add('stars-inTheSky-halfopacity');
      filter.classList = '';
      filter.classList.add('filter-19');
      break;

    case 20:
      background.className = '';
      background.classList.add('stage_4');
      stars.className = '';
      stars.classList.add('stars-inTheSky-halfopacity');
      filter.classList = '';
      filter.classList.add('filter-20');
      break;

    case 21:
    case 22:
    case 23:
    case 24:
    case 1:
    case 2:
    case 3:
    case 4:
      background.className = '';
      background.classList.add('stage_5');
      stars.className = '';
      filter.classList = '';
      filter.classList.add('filter-21');
      break;
    case 5:
      background.className = '';
      background.classList.add('stage_4');
      stars.className = '';
      stars.classList.add('stars-inTheSky-halfopacity');
      filter.classList = '';
      filter.classList.add('filter-20');
      break;
    case 6:
      background.className = '';
      background.classList.add('stage_3');
      stars.className = '';
      stars.classList.add('noStars');
      filter.classList = '';
      filter.classList.add('filter-19');
      break;
    case 7:
      background.className = '';
      background.classList.add('stage_2');
      stars.className = '';
      stars.classList.add('noStars');
      filter.classList = '';
      filter.classList.add('filter-18');
      break;
    case 8:
      background.className = '';
      background.classList.add('stage_1');
      stars.className = '';
      stars.classList.add('noStars');
      filter.classList = '';
      filter.classList.add('filter-17');
      break;
  }
}

//STARS EFFECT
particlesJS('particles-js', {
  particles: {
    number: {
      value: 346,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 120,
      direction: 'none',
      random: true,
      straight: true,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});
