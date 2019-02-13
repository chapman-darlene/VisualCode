/* function carMove() {
    var car1 = document.getElementById("car1").style;
    var car2 = document.getElementById("car2").style;
    var car3 = document.getElementById("car3").style;
    var car4 = document.getElementById("car4").style;
    var car5 = document.getElementById("car5");
    car1.id = "car-move";
    car2.id = "car-move";
    car3.id = "car-move";
    car4.id = "car-move";
    car5.id = "car-move";
    resetCars();
}

function resetCars() {
    var car1 = document.getElementById("car1")
    var car2 = document.getElementById("car2");
    var car3 = document.getElementById("car3");
    var car4 = document.getElementById("car4");
    var car5 = document.getElementById("car5");
    car1.id = "car-start";
    car2.id = "car-start";
    car3.id = "car-start";
    car4.id = "car-start";
    car5.id = "car-start";
} */

function launch() {
    var rocket1 = document.getElementById("rocket1");
    var rocket2 = document.getElementById("rocket2");
    var rocket3 = document.getElementById("rocket3");
    var rocket4 = document.getElementById("rocket4");
    rocket1.id = "lift";
    rocket2.id = "lift";
    rocket3.id = "lift";
    rocket4.id = "lift";
}


function kick() {
    var kick = document.getElementById("kick1");
    var lift = document.getElementById("lift1");
    var football = document.getElementById("football1");
    kick.id = "kick";
    lift.id = "lift";
    football.id = "football2";

    scoreResult();
}

function reset() {
    var kick = document.getElementById("kick");
    var lift = document.getElementById("lift");
    var football = document.getElementById("football2");
    kick.id = "kick1";
    lift.id = "lift1";
    football.id = "football1";

    clear();
}

function clear() {
    var score = document.getElementById("score").innerHTML = "";
}

function scoreResult() {
    var score = Math.floor(Math.random() * 2) + 1
    console.log(score);

    if (score === 1) {
        document.getElementById("score").innerHTML = "Your kick was good! You scored 3 points";
    } else {
        document.getElementById("score").innerHTML = "Sorry, the ball didn't go through the uprights!";
    }
}