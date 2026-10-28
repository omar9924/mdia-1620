var stableName = "Rosewood Stables";

var horse4 = {
    name: "Stacy",
    age: 9,
    favoriteTreat: "Lettuce",
    monthlyRent: 67,
    nickname: "stace",
    isInside: true,
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
    isInside: true,
    breed: "Arabian",
    isTrained: true },
 {
    name: "Charlie",
    age: 6,
    favoriteTreat: "hotdogs",
    monthlyRent: 55,
    nickname: "carl",
    isInside: false,
    breed: "Thoroughbred",
    isTrained: false},
 {
    name: "Daisy",
    age: 7,
    favoriteTreat: "burgers",
    monthlyRent: 600,
    nickname: "days",
    isInside: true,
    breed: "Appaloosa",
    isTrained: false},
    horse4
];
horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;
horses[3].isHungry= false;

var totalStalls=10;
function checkAvailableStalls(totalStalls, occupiedStalls){ // Checks how many stalls are still available
    var availableStalls= totalStalls - occupiedStalls;
    console.log("room for "+ availableStalls + " horses");
}
checkAvailableStalls(totalStalls, horses.length);


function calculateLatePayment(horse, lateFeeMultiplier) {
    var amountOwing= horse.monthlyRent * lateFeeMultiplier;
     var lateMessage= horse.name + "'s payment is late. The amount owing is $"+ amountOwing;
     console.log(lateMessage);
}
calculateLatePayment(horses[1], 1.20);

function getHorseNickname(horse) {
    return horse.nickname;
}
console.log(getHorseNickname(horses[2]));


var visitorMessage = "Welcome to " + stableName + "!";
console.log(visitorMessage);




