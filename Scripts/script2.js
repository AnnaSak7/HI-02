var stageNr = 0;
var changeNr = 1;
var today;
var time;

function toggleState() {
  document.getElementById('kroppen').classList = '';
  document.getElementById('kroppen').classList.toggle('stage_' + stageNr);
  stageNr += changeNr;
  if (stageNr == 5) changeNr = -1;
  if (stageNr == 0) changeNr = 1;
  console.log(time);
}

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
  switch (hr) {
    default:
      background.classList.toggle('stage_0');
      break;

    case 17:
      background.classList.toggle('stage_1');
      break;

    case 18:
      background.classList.toggle('stage_2');
      break;

    case 19:
      background.classList.toggle('stage_3');
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
      break;
    case 6:
      background.classList.toggle('stage_3');
      break;
    case 7:
      background.classList.toggle('stage_2');
      break;
    case 8:
      background.classList.toggle('stage_1');
      break;
  }
}

function backgroundColor(){
    let hr = new Date().getHours();
    let background = document.getElementById("kroppen");
    switch (hr) {
        default:
            background.classList.toggle('stage_0');
            break:
            case 17:
                background.classList.toggle('stage_1');
                break;
                case 18:
                    background.classList.toggle('stage_2');
                    break;
                    case 19:
                    background.classList.toggle('stage_3');
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
                                                        break;
                                                        case 6:
                                                            background.classList.toggle('stage_3');
                                                            break;
                                                            case 7:
                                                                background.classList.toggle('stage_2');
                                                                break;
                                                                case 8:
                                                                    background.classList.toggle('stage_1');
                                                                    break;


    }
}
