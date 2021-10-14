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

`0`;
