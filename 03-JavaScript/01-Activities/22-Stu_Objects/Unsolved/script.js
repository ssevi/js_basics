//WRITE YOUR CODE BELOW

var customerOrder = {
    name: "tea",
    sugar: 2,
    isReady: true,
}
console.log(customerOrder.name);
console.log(customerOrder.sugar);

if (customerOrder.isReady){
    console.log("Ready for pickup");
} else {
    console.log("Still in Order Queue");
}