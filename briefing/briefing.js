// example code for mouse event
document.getElementById("demo1").onclick = function () {
  alert('This is "onclick"');
};
document.getElementById("demo2").ondblclick = function () {
  alert('This is "ondblclick"');
};
document.getElementById("demo3").onmouseover = function () {
  alert('This is "onmouseover"');
};
document.getElementById("demo4").oncontextmenu = function () {
  alert('This is "oncontextmenu"');
};
// example for onblur & onfocus
function blur1(x) {
  x.style.background = "transparent";
}
function focus1(x) {
  x.style.background = "red";
}
// example for additional example of event
const input = document.getElementById("input");
const inputdisplay = document.getElementById("inputdisplay");
input.onchange = function () {
  inputdisplay.innerHTML = input.value;
};
// example of innerHTML
var z = 0;
const test1 = document.getElementById("testing");
const change1 = document.getElementById("change1");
const change2 = document.getElementById("change2");
const change3 = document.getElementById("change3");
change1.onclick = function () {
  if (z == 0) {
    test1.innerHTML = "Hello World!";
    z = 1;
  } else if (z == 1) {
    test1.innerHTML = "Hello Guys!";
    z = 0;
  }
};
change2.onclick = function () {
  if (z == 0) {
    change2.innerHTML = "Just changed";
    z = 1;
  } else if (z == 1) {
    change2.innerHTML = "Change again";
    z = 0;
  }
};
change3.onclick = function () {
  test1.innerHTML = "This is an example";
  change2.innerHTML = "Change button";
};
// example of css change
var x = 20;
const styletest = document.getElementById("styletest");
const stylecolor = document.getElementById("stylecolor");
const stylesize = document.getElementById("stylesize");
const stylebackground = document.getElementById("stylebackground");
const stylereset = document.getElementById("stylereset");
stylecolor.onclick = function () {
  if (z == 0) {
    styletest.style.color = "blue";
    z = 1;
  } else if (z == 1) {
    styletest.style.color = "red";
    z = 0;
  }
};
stylesize.onclick = function () {
  styletest.style.fontSize = x++ + "px";
};
stylebackground.onclick = function () {
  if (z == 0) {
    styletest.style.backgroundColor = "blue";
    z = 1;
  } else if (z == 1) {
    styletest.style.backgroundColor = "red";
    z = 0;
  }
};
stylereset.onclick = function () {
  styletest.style.color = "black";
  styletest.style.fontSize = "20px";
  styletest.style.backgroundColor = "transparent";
};
