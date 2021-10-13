var stageNr = 0;

function toggleState() {
  document.querySelector("#kroppen").classList.toggle("stage_" + stageNr);
  stageNr++;
}
