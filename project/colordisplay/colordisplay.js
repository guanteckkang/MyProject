function button1() {
  const redrandom = Math.floor(Math.random() * 255 + 1);
  const greenrandom = Math.floor(Math.random() * 255 + 1);
  const bluerandom = Math.floor(Math.random() * 255 + 1);
  const alpharandom = (Math.round(Math.random() * 100) / 100).toFixed(2);
  let color1 =
    "rgba(" +
    redrandom +
    "," +
    greenrandom +
    "," +
    bluerandom +
    "," +
    alpharandom +
    ")";
  document.getElementById("colordisplay").innerHTML = color1;
  document.getElementById("colorflipper").style.backgroundColor = color1;
  document.getElementById("redrange").value = redrandom;
  document.getElementById("redvalue").innerHTML = redrandom;
  document.getElementById("greenrange").value = greenrandom;
  document.getElementById("greenvalue").innerHTML = greenrandom;
  document.getElementById("bluerange").value = bluerandom;
  document.getElementById("bluevalue").innerHTML = bluerandom;
  document.getElementById("alpharange").value = alpharandom;
  document.getElementById("alphavalue").innerHTML = alpharandom;
}

function colorrange() {
  let red1 = document.getElementById("redrange").value;
  let green1 = document.getElementById("greenrange").value;
  let blue1 = document.getElementById("bluerange").value;
  let alpha1 = document.getElementById("alpharange").value;
  document.getElementById("redvalue").innerHTML = red1;
  document.getElementById("greenvalue").innerHTML = green1;
  document.getElementById("bluevalue").innerHTML = blue1;
  document.getElementById("alphavalue").innerHTML = alpha1;
  let colorrandom =
    "rgba(" + red1 + "," + green1 + "," + blue1 + "," + alpha1 + ")";
  document.getElementById("colordisplay").innerHTML = colorrandom;
  document.getElementById("colorflipper").style.backgroundColor = colorrandom;
}
