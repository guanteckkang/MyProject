document.getElementById("showdate").innerHTML = new Date().toDateString();
function showTime() {
  document.getElementById("clock").innerText = new Date().toTimeString();
  // setTimeout is to delay the by 1 sec (1000 = 1 sec)
  setTimeout(showTime, 1000);
}
showTime();
