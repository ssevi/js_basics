var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2); //to fixed decimal to 2 numbers
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount); //parse float converets strings to number
}

function addTip(event) {
  // event.preventDefault(); ---> we can add this but i change button type in html.
  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}

submitEl.addEventListener("click", addTip);
