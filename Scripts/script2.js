var stageNr = 0;
var changeNr = 1;
var today;
var time;

$(document).ready(function () {
  setTime();
  setInterval(setTime, 1000);
  backgroundColor();
});
function setTime() {
  today = new Date();
  let currentHours = ('0' + today.getHours()).slice(-2);
  let currentMinutes = ('0' + today.getMinutes()).slice(-2);
  let currentSeconds = ('0' + today.getSeconds()).slice(-2);

  time = currentHours + ':' + currentMinutes + ':' + currentSeconds;

  // //IF MINUTES AND SECONDS ARE DOUBLE DIGITS
  // if(today.getMinutes() > 9 && today.getSeconds() > 9)time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // //IF MINUTES IS NOT DOUBLE DIGITS
  // if(today.getMinutes() <= 9 && today.getSeconds() > 9)time = today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();

  // //IF SECONDS IS NOT DOUBLE DIGITS
  // if (today.getMinutes() > 9 && today.getSeconds() <= 9)time = today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds();

  // //IF SECONDS AND MINUTES ARE NOT DOUBLE DIGITS
  // if (today.getMinutes() <= 9 && today.getSeconds() <= 9) time =today.getHours() +":0" +today.getMinutes() +":0" + today.getSeconds();

  document.getElementById('date').innerHTML = time;
}

function backgroundColor() {
  let hr = new Date().getHours();
  let background = document.getElementById('kroppen');
  let stars = document.getElementById('particles-js');
  switch (21) {
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
