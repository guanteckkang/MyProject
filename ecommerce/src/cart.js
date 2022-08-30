// DOM main
const label = document.getElementById("label");
const shoppingcart = document.getElementById("shoppingcart");

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

// function increase
function increase(id) {
  let search = cart.find((e) => e.id === id);
  let price = permdata[id - 1].pricetag;
  search.item += 1;
  search.sum += price;
  cartlist();
  localStorage.setItem("data", JSON.stringify(cart));
}

// function decrease
function decrease(id) {
  let search = cart.find((e) => e.id === id);
  let price = permdata[id - 1].pricetag;
  if (search === undefined) return;
  if (search.item === 0) {
  } else {
    search.item -= 1;
    search.sum -= price;
  }
  cart = cart.filter((e) => e.item !== 0);
  localStorage.setItem("data", JSON.stringify(cart));
  cartlist();
}
// function quantity
function quantity(id) {
  let search = cart.find((e) => e.id === id);
  document.getElementById("quantity-" + id).innerHTML =
    search === undefined ? 0 : search.item;
}
// function total cart quantity
const cartamount = document.getElementById("cartamount");
function totalquantity() {
  cartamount.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
  console.table(cart);
}
// DOM item x price
function sum(id) {
  let ttlsum = document.getElementById("sum-" + id);
  let search = cart.find((e) => e.id === id) || {};
  if (!search) {
  }
  // if (search.sum === 0 || cart.length == 0)
  if ((search && search.sum === 0) || cart.length == 0) {
    ttlsum.innerHTML = 0;
  } else {
    if (search) {
      ttlsum.innerHTML = search.sum;
    }
  }
  localStorage.setItem("data", JSON.stringify(cart));
}
// function total amount
const totalsum = document.getElementById("totalsum");
function totalsum1() {
  let totalsum = cart.map((x) => x.sum).reduce((x, y) => x + y, 0);
  totalsum.innerHTML = totalsum + ".00";
}

// 3 button function
function checkout(totalsum) {
  alert("The total is: Rm " + totalsum + ".00\nThank you for your purchased");
}
function clearcart() {
  cart = [];
  localStorage.setItem("data", JSON.stringify(cart));
  cartlist();
}
function erase(id) {
  cart = cart.filter((x) => x.id !== id);
  localStorage.setItem("data", JSON.stringify(cart));
  cartlist();
}

// function generate cartlist
function cartlist() {
  let totalsum = cart.map((x) => x.sum).reduce((x, y) => x + y, 0);
  totalquantity();
  if (cart.length !== 0) {
    return (shoppingcart.innerHTML =
      `
        <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total (Rm)</th>
        </tr>
        ` +
      cart
        .map((i) => {
          const { id, item, sum } = i;
          let search = permdata.find((e) => e.id == id) || [];
          const { name, img, price } = search;
          return `
        <tr id=${id} title=${name} class="cardbox" style="width: 500px" >
          <td>
            <img src=${img} class="card-img-top" alt="no picture" style="width: 100px"/>
            <span> ${name}</span>
          </td>
          <td>
            <p>Rm ${price}</p>
          </td>
          <td>
            <button onclick="increase(${id})" type="button" class="btn btn-dark">+</button>
            <button id=${
              "quantity-" + id
            } type="button" class="btn btn-dark " disabled>${item}</button>
            <button onclick="decrease(${id})" type="button" class="btn btn-dark">-</button>
          </td>
          <td>
            <h5 id=${"sum-" + id}>${sum}</h5>
          </td>
          <td>
            <button onclick="erase(${id})"  type="button" class="btn btn-danger">X</button>
          </td>
        </tr>  
        `;
        })
        .join("") +
      `
        <tr>
          <td colspan="2">Total amount is (Rm)<td>
          <td id="totalsum"> ${totalsum}<td>
        </tr>
        <tr>
        <td colspan="3"></td>
        <td>
          <a href="index.html"><button>Go back</button></a>
          <button onclick="checkout(${totalsum})" >Checkout</button>
          <button onclick="clearcart()">Clearcart</button>
        </td>
        </tr>
        `);
  } else {
    label.innerHTML = `
    <tr id="emptycart">
      <td><h2>Cart is empty</h2></td>
    </tr>
    <tr>
      <td><a href="index.html"><Button id="homebutton">Back to page</Button></a></td>
    </tr>
    `;
    shoppingcart.style.display = "none";
  }
}
cartlist();
