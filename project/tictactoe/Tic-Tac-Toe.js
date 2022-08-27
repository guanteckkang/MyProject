// tic-tac-toe code
var count = 1;
function boxs1() {
  if (count == 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    document.getElementById("b1").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b1").value = "O";
    document.getElementById("b1").disabled = true;
    document.getElementById("b1").style.color = "red";
    count = 1;
  }
}
function boxs2() {
  if (count == 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    document.getElementById("b2").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b2").value = "O";
    document.getElementById("b2").disabled = true;
    document.getElementById("b2").style.color = "red";
    count = 1;
  }
}
function boxs3() {
  if (count == 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    document.getElementById("b3").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b3").value = "O";
    document.getElementById("b3").disabled = true;
    document.getElementById("b3").style.color = "red";
    count = 1;
  }
}
function boxs4() {
  if (count == 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    document.getElementById("b4").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b4").value = "O";
    document.getElementById("b4").disabled = true;
    document.getElementById("b4").style.color = "red";
    count = 1;
  }
}
function boxs5() {
  if (count == 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    document.getElementById("b5").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b5").value = "O";
    document.getElementById("b5").disabled = true;
    document.getElementById("b5").style.color = "red";
    count = 1;
  }
}
function boxs6() {
  if (count == 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    document.getElementById("b6").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b6").value = "O";
    document.getElementById("b6").disabled = true;
    document.getElementById("b6").style.color = "red";
    count = 1;
  }
}
function boxs7() {
  if (count == 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    document.getElementById("b7").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b7").value = "O";
    document.getElementById("b7").disabled = true;
    document.getElementById("b7").style.color = "red";
    count = 1;
  }
}
function boxs8() {
  if (count == 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    document.getElementById("b8").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b8").value = "O";
    document.getElementById("b8").disabled = true;
    document.getElementById("b8").style.color = "red";
    count = 1;
  }
}
function boxs9() {
  if (count == 1) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    document.getElementById("b9").style.color = "blue";
    count = 0;
  } else {
    document.getElementById("b9").value = "O";
    document.getElementById("b9").disabled = true;
    document.getElementById("b9").style.color = "red";
    count = 1;
  }
}
// check results
function checkwin() {
  var box1 = document.getElementById("b1").value;
  var box2 = document.getElementById("b2").value;
  var box3 = document.getElementById("b3").value;
  var box4 = document.getElementById("b4").value;
  var box5 = document.getElementById("b5").value;
  var box6 = document.getElementById("b6").value;
  var box7 = document.getElementById("b7").value;
  var box8 = document.getElementById("b8").value;
  var box9 = document.getElementById("b9").value;
  if (
    (box1 == "X" && box2 == "X" && box3 == "X") ||
    (box4 == "X" && box5 == "X" && box6 == "X") ||
    (box7 == "X" && box8 == "X" && box9 == "X") ||
    (box1 == "X" && box4 == "X" && box7 == "X") ||
    (box2 == "X" && box5 == "X" && box8 == "X") ||
    (box3 == "X" && box6 == "X" && box9 == "X") ||
    (box1 == "X" && box5 == "X" && box9 == "X") ||
    (box3 == "X" && box5 == "X" && box7 == "X")
  ) {
    document.getElementById("turns").innerHTML = "Player X WIN";
    alert("Player X WIN");
  } else if (
    (box1 == "O" && box2 == "O" && box3 == "O") ||
    (box4 == "O" && box5 == "O" && box6 == "O") ||
    (box7 == "O" && box8 == "O" && box9 == "O") ||
    (box1 == "O" && box4 == "O" && box7 == "O") ||
    (box2 == "O" && box5 == "O" && box8 == "O") ||
    (box3 == "O" && box6 == "O" && box9 == "O") ||
    (box1 == "O" && box5 == "O" && box9 == "O") ||
    (box3 == "O" && box5 == "O" && box7 == "O")
  ) {
    document.getElementById("turns").innerHTML = "Player 0 WIN";
    alert("Player O WIN");
  } else {
    if (count == 1) {
      document.getElementById("turns").innerHTML = "Player X turns";
    } else {
      document.getElementById("turns").innerHTML = "Player O turns";
    }
  }
}
// reset game function
function reset() {
  document.getElementById("b1").value = "";
  document.getElementById("b1").disabled = false;
  document.getElementById("b2").value = "";
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").value = "";
  document.getElementById("b3").disabled = false;
  document.getElementById("b4").value = "";
  document.getElementById("b4").disabled = false;
  document.getElementById("b5").value = "";
  document.getElementById("b5").disabled = false;
  document.getElementById("b6").value = "";
  document.getElementById("b6").disabled = false;
  document.getElementById("b7").value = "";
  document.getElementById("b7").disabled = false;
  document.getElementById("b8").value = "";
  document.getElementById("b8").disabled = false;
  document.getElementById("b9").value = "";
  document.getElementById("b9").disabled = false;
  document.getElementById("turns").innerHTML = "Player X TURNS";
}
