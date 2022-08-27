const display = document.getElementById("display");
const addbutton = document.getElementById("addbutton");
const input = document.getElementById("inputvalue");

// delete function
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    this.parentNode.remove();
  };
}
// add function
addbutton.onclick = function () {
  if (input.value === "") {
    alert("You must input something");
  } else {
    display.innerHTML += `
      <li>
        <p className="list"> ${input.value}</p>
        <button class="close">X</button>
      </li>`;
    input.value = "";
    const close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
