// set empty array /  local storage
let cart = JSON.parse(localStorage.getItem("data")) || [];
let permdata = JSON.parse(localStorage.getItem("permdata"));

// set online data
function datas() {
  if (permdata.length == 0) {
    localStorage.setItem("permdata", JSON.stringify(itemlist));
  } else {
    localStorage.setItem("permdata", JSON.stringify(permdata));
  }
}
datas();

// function total cart quantity
const cartamount = document.getElementById("cartamount");
function totalquantity() {
  cartamount.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
}
totalquantity();

//DOM input
const inputname = document.getElementById("input-name");
const inputdesc = document.getElementById("input-description");
const inputprice = document.getElementById("input-price");
const inputimgsrc = document.getElementById("input-imgsrc");

// function add items
function additems() {
  permdata.push({
    id: JSON.stringify(permdata.length + 1),
    name: inputname.value,
    description: inputdesc.value,
    price: inputprice.value,
    pricetag: JSON.parse(inputprice.value),
    img: inputimgsrc.value,
  });
  saveme();
}
// function save data local storage
function saveme() {
  localStorage.setItem("permdata", JSON.stringify(permdata));
}
// function view date
function viewdata() {
  console.table(permdata);
}
