var stableName = "Rosewood Stables";

var horse4 = {
    name: "Stacy",
    age: 9,
    favoriteTreat: "Lettuce",
    monthlyRent: 67,
    nickname: "stace",
    location: true,
    breed: "Arabian",
    isTrained: true,
};
var horses= [
    {
    name: "Bella",
    age: 67,
    favoriteTreat: "apples",
    monthlyRent: 500,
    nickname: "belle",
    location: true,
    breed: "Arabian",
    isTrained: true },
 {
    name: "Charlie",
    age: 6,
    favoriteTreat: "hotdogs",
    monthlyRent: 55,
    nickname: "carl",
    location: false,
    breed: "Thoroughbred",
    isTrained: false},
 {
    name: "Daisy",
    age: 7,
    favoriteTreat: "burgers",
    monthlyRent: 600,
    nickname: "days",
    location: true,
    breed: "Appaloosa",
    isTrained: false},
    horse4
];
horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;
horses[3].isHungry= false;

var totalStalls=10;
function checkAvailableStalls(){
    var availableStalls= totalStalls - horses.length;
    console.log(availableStalls);
}
checkAvailableStalls();

function calculateLatePayment(horse) {
    var amountOwing= horse.monthlyRent * 1.20;
     var lateMessage= horse.name + "'s payment is late. The amount owing is $"+ amountOwing;
     console.log(lateMessage);
}
calculateLatePayment(horses[1]);

function getHorseNickname(horse) {
    return horse.nickname;
}
console.log(getHorseNickname(horses[2]));


var visitorMessage = "Welcome to " + stableName + "!";
console.log(visitorMessage);




