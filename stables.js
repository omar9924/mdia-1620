var stableName = "Rosewood Stables";

var horse1 = {
    name: "Bella",
    age: 67,
    snack: "apples",
    monthlyBoard: 500
};

var horse2 = {
    name: "Charlie",
    age: 6,
    snack: "hotdogs",
    monthlyBoard: 55
};

var horse3 = {
    name: "Daisy",
    age: 7,
    snack: "burgers",
    monthlyBoard: 600
};

var horse1LatePayment = horse1.monthlyBoard * 1.20;
var horse2LatePayment = horse2.monthlyBoard * 1.20;
var horse3LatePayment = horse3.monthlyBoard * 1.20;

var visitorMessage = "Welcome to " + stableName + "!";
var lateMessage = horse3.name + "'s payment is late. The amount owing is $" + horse3LatePayment;
console.log(visitorMessage);
console.log(lateMessage);



