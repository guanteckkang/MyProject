// stopwatch variable
var seconds = 0;
var minutes = 0;
var interval;
// numbers DOM
const second1 = document.getElementById("seconds");
const minute1 = document.getElementById("minutes");
// button DOM
const buttonstart = document.getElementById("starttime");
const buttonstop = document.getElementById("stoptime");
const buttonreset = document.getElementById("resettime");
// store time value
var interval;

// function to start time count
function starttime() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  seconds < 10
    ? (second1.innerHTML = "0" + seconds)
    : (second1.innerHTML = seconds);
  minutes < 10
    ? (minute1.innerHTML = "0" + minutes)
    : (minute1.innerHTML = minutes);
}

buttonstart.onclick = function () {
  interval = setInterval(starttime, 1000);
  buttonstart.disabled = true;
  buttonstop.disabled = false;
  buttonreset.disabled = false;
};
buttonstop.onclick = function () {
  clearInterval(interval);
  buttonstart.disabled = false;
  buttonstop.disabled = true;
};
buttonreset.onclick = function () {
  buttonstart.disabled = true;
  buttonstop.disabled = false;
  seconds = 0;
  minutes = 0;
  second1.innerHTML = "00";
  minute1.innerHTML = "00";
};
