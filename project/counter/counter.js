// counter
var countvalue = 0;
const result1 = document.getElementById("countvalue");
const inc1 = document.getElementById("increase1");
const inc2 = document.getElementById("increase2");
const inc3 = document.getElementById("increase3");
const reset1 = document.getElementById("reset1");
const dec1 = document.getElementById("decrease1");
const dec2 = document.getElementById("decrease2");
const dec3 = document.getElementById("decrease3");
inc1.onclick = function () {
  countvalue += 1;
  result1.innerHTML = countvalue;
};
inc2.onclick = function () {
  countvalue += 2;
  result1.innerHTML = countvalue;
};
inc3.onclick = function () {
  countvalue += 3;
  result1.innerHTML = countvalue;
};
reset1.onclick = function () {
  countvalue = 0;
  result1.innerHTML = countvalue;
};
dec1.onclick = function () {
  countvalue -= 1;
  result1.innerHTML = countvalue;
};
dec2.onclick = function () {
  countvalue -= 2;
  result1.innerHTML = countvalue;
};
dec3.onclick = function () {
  countvalue -= 3;
  result1.innerHTML = countvalue;
};
