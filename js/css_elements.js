function kick() {
    var kick = document.getElementById("kick1");
    var lift = document.getElementById("lift1");
    var football = document.getElementById("football1");
    kick.id = "kick";
    lift.id = "lift";
    football.id = "football2";
}

function reset() {
    var kick = document.getElementById("kick");
    var lift = document.getElementById("lift");
    var football = document.getElementById("football2");
    kick.id = "kick1";
    lift.id = "lift1";
    football.id = "football1";

}