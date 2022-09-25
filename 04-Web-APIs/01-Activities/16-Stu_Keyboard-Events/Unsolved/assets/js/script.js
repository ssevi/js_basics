







function keydownAction(event) {

  var keyPress= event.key;
  var keyCode = event.code;
  document.querySelector("#key").innerHTML = keyPress;
  document.querySelector("#code").innerHTML = keyCode;
  document.querySelector("#status").innerHTML = "KEY DOWN EVENT";
  // TODO: Complete keydown function
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}






document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
