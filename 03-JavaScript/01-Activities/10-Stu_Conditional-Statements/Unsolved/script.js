// Change the values and operators below to test your algorithm meets all conditions
var x = 100;
var expression1 = (x > 25); //false
var expression2 = (x > 50); 

// Write Your JavaScript Code Here

if(x == 50 && x >= 50){
    console.log("expression1 and expression2 are true.")
} else if(x=50 || x < 25){
    console.log("expression1 is true.")
} else if(x > 50 ||  x > 25){
    console.log("expression2 is true.")
} else {
    console.log("expression1 and expression2 are false.")
}