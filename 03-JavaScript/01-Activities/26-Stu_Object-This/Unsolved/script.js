// TODO: What does 'this' refer to?
console.log(this); /// this is a global object 'this' - which referes to window.

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log?  this here is child's age.
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? this here is investor.
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
