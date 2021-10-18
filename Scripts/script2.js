var stageNr = 0;
var changeNr = 1;
var today = new Date();
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
  toggleState();
});

//TEMPORARY BACKGROUND TOGGLE-BUTTON
function toggleState() {
  document.getElementById('kroppen').classList = '';
  document.getElementById('kroppen').classList.toggle('stage_' + stageNr);
  stageNr += changeNr;
  if (stageNr == 5) changeNr = -1;
  if (stageNr == 0) changeNr = 1;
  console.log(time);
}

//CHANGE THE TIMER TO CURRENT TIME
function setTime() {
  today = new Date();

  //IF A NEW MINUTE STARTS WE CHANGE THE SUN/MOON POSITION, SENDING THE CURRENT HOURS AND MINUTES TO THE FUNCTION
  if (today.getSeconds() == 0)
    setSMPosition(today.getHours(), today.getMinutes());

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
  if (hours >= 19 && hours < 7) {
    moonBox.style.bottom = y_pos + 20 + '%';
    moonBox.style.left = x_pos + '%';
    sunBox.style.bottom = '300%';
  }
}

//TEMPORARY BACKGROUND TOGGLE-BTN
function toggleState() {
  document.getElementById('kroppen').classList = '';
  document.getElementById('kroppen').classList.toggle('stage_' + stageNr);
  stageNr += changeNr;
  if (stageNr == 5) changeNr = -1;
  if (stageNr == 0) changeNr = 1;
  console.log(time);
}

//CHANGE THE BACKGROUND COLOR DEPENDING ON TIME OF DAY
function backgroundColor() {
  let hr = new Date().getHours();
  let background = document.getElementById('kroppen');
  let stars = document.getElementById('particles-js');

  //CHANGE THE BACKGROUND STATE DEPENDING ON CURRENT HOUR (EACH CASE IS BASED ON HOURS)
  switch (hr) {
    default:
      background.classList.toggle('stage_0');
      stars.classList.toggle('noStars');
      break;

    case 17:
      background.classList.toggle('stage_1');
      stars.classList.toggle('noStars');
      break;

    case 18:
      background.classList.toggle('stage_2');
      stars.classList.toggle('stars-inTheSky-halfopacity');
      break;

    case 19:
      background.classList.toggle('stage_3');
      stars.classList.toggle('stars-inTheSky-halfopacity');
      break;

    case 20:
      background.classList.toggle('stage_4');
      break;

    case 21:
    case 22:
    case 23:
    case 24:
    case 1:
    case 2:
    case 3:
    case 4:
      background.classList.toggle('stage_5');
      break;
    case 5:
      background.classList.toggle('stage_4');
      stars.classList.toggle('stars-inTheSky-halfopacity');
      break;
    case 6:
      background.classList.toggle('stage_3');
      stars.classList.toggle('noStars');
      break;
    case 7:
      background.classList.toggle('stage_2');
      stars.classList.toggle('noStars');
      break;
    case 8:
      background.classList.toggle('stage_1');
      stars.classList.toggle('noStars');
      break;
  }
}

//STARS EFFECT
particlesJS('particles-js', {
  particles: {
    number: {
      value: 346, //この数値を変更すると星の数が増減できる
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle', //形状はcircleを指定
      stroke: {
        width: 0,
      },
    },
    opacity: {
      value: 1, //シェイプの透明度
      random: true, //シェイプの透明度をランダムにする
      anim: {
        enable: true, //シェイプの透明度をアニメーションさせる
        speed: 3, //シェイプの透明度をアニメーションさせる
        opacity_min: 0, //透明度の最小値０
        sync: false, //全てを同時にアニメーションさせない
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
      speed: 120, //この数値を小さくするとゆっくりな動きになる
      direction: 'none', //方向指定なし
      random: true, //動きはランダムに
      straight: true, //動きをとどめる
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
