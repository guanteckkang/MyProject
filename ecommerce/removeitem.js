// DOM main
const removeitem = document.getElementById("removeitem");
const emptylist = document.getElementById("emptylist");
// set empty array /  local storage
let cart = JSON.parse(localStorage.getItem("data")) || [];
let permdata = JSON.parse(localStorage.getItem("permdata")) || [];

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

function erase(id) {
  cart = cart.filter((x) => x.id !== id);
  permdata = permdata.filter((x) => x.id != id);
  localStorage.setItem("data", JSON.stringify(cart));
  localStorage.setItem("permdata", JSON.stringify(permdata));
  removelist();
}

// function removeitem
function removelist() {
  totalquantity();
  console.table(cart);
  console.table(permdata);
  if (permdata.length == 0 || permdata == null) {
    removeitem.style.display = "none";
    return (emptylist.innerHTML = `
    <h1>There is nothing is the product list</h1>
    <a href="additems.html"><button>Add product</button></a>
    `);
  } else {
    return (
      (emptylist.innerHTML = `
      <h3>Click the "X" to remove the item from database.</h3>
      `),
      (removeitem.innerHTML =
        `
    <tr>
      <th>Index.</th>
      <th colspan="3">Item</th>
    </tr>
    ` +
        permdata
          .map((i) => {
            const { name, id, img } = i;
            return `
        <tr >
        <td>${id}</td>
        <td><img src=${img} alt="product image" style="height: 150px; width:150px;"></td>
        <td>${name}</td>
        <td><button onclick="erase(${id})" type="button" class="btn btn-danger">X</button></td>
        </tr>
      `;
          })
          .join(""))
    );
  }
}
removelist();
