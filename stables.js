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

//----------- Day to day operations (Project) ----------//
var treatToFind= "apples";

for (var i=0; i < horses.length; i++){
    if (horses[i].favoriteTreat== treatToFind) {
        console.log(horses[i].name+ "likes"+ treatToFind + "!");
        break;

} else {
    console.log(horses[i].name + " doesn't like " + treatToFind + ".");

}
}
function checkHorseTraining(horse) {
    if (horse.isTrained) {
        console.log(horse.name + " is trained.");
    } else {
        console.log(horse.name + " is not trained yet.");
    }
}

function checkHorseTraining(horse) {
    if (horse.isTrained) {
        console.log(horse.name + " is trained.");
    } else {
        console.log(horse.name + " is not trained yet.");
    }
}

for (var i = 0; i < horses.length; i++) {
    checkHorseTraining(horses[i]);
}

function moveHorses(selectedHorses, isGettingDark) {
    for (var i = 0; i < selectedHorses.length; i++) {
        if (isGettingDark && !selectedHorses[i].isInside) {
            selectedHorses[i].isInside = true;
            console.log(selectedHorses[i].name + " has been brought inside for the night.");
        } 
        else if (!isGettingDark && selectedHorses[i].isInside) {
            selectedHorses[i].isInside = false;
            console.log(selectedHorses[i].name + " has been moved outside to enjoy the sun.");
        }
    }
}
moveHorses([horses[0], horses[1]], false);
function feedHorses() {
    for (var i = 0; i < horses.length; i++) {
        if (!horses[i].isInside) {
            horses[i].isInside = true;
            console.log(horses[i].name + " has been called inside.");
        }

        console.log(horses[i].name + " is eating " + horses[i].favoriteTreat + ".");
        horses[i].isHungry = false;
    }
}
feedHorses();

moveHorses([horses[0], horses[1]], true);
for (var i = 0; i < horses.length; i++) {
    horses[i].toggleLocation = function() {
        this.isInside = !this.isInside;

        if (this.isInside) {
            console.log(this.name + " moved inside.");
        }
         else {
            console.log(this.name + " moved outside.");
        }
    };
}

horses[0].toggleLocation();