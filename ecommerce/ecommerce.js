// DOM main div
const items = document.getElementById("item");
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

// increase button
function increase(id) {
  let search = cart.find((e) => e.id === id);
  let price = permdata[id - 1].pricetag;
  if (search === undefined) {
    cart.push({
      id: id,
      item: 1,
      price: price,
      sum: price,
    });
  } else {
    search.item += 1;
    search.sum += price;
  }
  localStorage.setItem("data", JSON.stringify(cart));
  // quantity(id);
  // sum(id);
  // totalquantity();
  generateitem();
}
// decrease button
function decrease(id) {
  let search = cart.find((e) => e.id === id);
  let price = permdata[id - 1].pricetag;
  if (search === undefined) return;
  if (search.item === 0) {
  } else {
    search.item -= 1;
    search.sum -= price;
  }
  cart = cart.filter((e) => e.item !== 0) || [];
  localStorage.setItem("data", JSON.stringify(cart));
  // quantity(id);
  // sum(id);
  // totalquantity();
  generateitem();
}

// DOM item quantity
function quantity(id) {
  let search = cart.find((e) => e.id === id);
  document.getElementById("quantity-" + id).innerHTML =
    search === undefined ? 0 : search.item;
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

// DOM total item quantity
function totalquantity() {
  let amount = document.getElementById("cartamount");
  amount.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0) || 0;
  console.table(cart);
}

// generate item
function generateitem() {
  return (
    totalquantity(),
    (items.innerHTML = permdata
      .map((i) => {
        const { id, name, img, price, description } = i;
        let search = cart.find((x) => x.id == id) || [];
        return `
  <div id="id-${id}" title="${name}" class="card" style="width: 300px, height:300px" >
    <img src=${img} class="card-img-top" alt="no picture" />
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p>Rm  ${price}</p>
      <button onclick="increase(${id})" type="button" class="btn btn-dark">+</button>
      <button id=${
        "quantity-" + id
      } type="button" class="btn btn-dark quantity" disabled>
      ${search.item === undefined ? 0 : search.item}
      </button>
      <button id="minus" onclick="decrease(${id})" type="button" class="btn btn-dark">-</button><br/>
      <button type="button" class="btn btn-light" disabled>Total Rm</button>
      <button id=${"sum-" + id} type="button" class="btn btn-light" disabled>${
          search.sum === undefined ? 0 : search.sum
        }</button>
    </div>
  </div>  
    `;
      })
      .join(""))
  );
}
generateitem();
