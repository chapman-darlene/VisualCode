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
        document.getElementById("score").innerHTML = "Your kick was good!"
    } else {
        document.getElementById("score").innerHTML = "Sorry, the ball didn't go through the uprights!"
    }
}