function selectShape() {
    var selection = document.getElementById("select1").value;
    var theCanvas = document.getElementById("canvas1");
    var shape = theCanvas.getContext("2d");

    switch (selection) {
        case "square":
            shape.strokeStyle = "black";
            shape.lineWidth = "2";
            shape.strokeRect(25, 25, 25, 25);
            break;

        case "circle":
            shape.beginPath();
            shape.arc(145, 75, 20, 0, 2 * Math.PI, true);
            shape.fillStyle = "#3a6b96";
            shape.strokeStyle = "black";
            shape.fill();
            shape.stroke();
            break;

        case "rectangle":
            shape.rect(20, 20, 50, 25);
            shape.strokeStyle = "black";
            shape.lineWidth = "1.5";
            shape.fillStyle = "#d88960"
            shape.stroke();

            break;
    }
}







/* window.addEventListener("load", function () {

    var theCanvas = document.getElementById("canvas1");

    if (theCanvas && theCanvas.getContext) {
        var shape = theCanvas.getContext("2d");
        var selection = document.getElementById("select1").value;
        switch (selection) {
            case square:
                var square = document.getElementById('square').values;
                shape.strokeStyle = "black";
                shape.lineWidth = "2";
                shape.strokeRect(25, 25, 25, 25);
                break;

            case circle:
                shape.beginPath();
                shape.arc(75, 75, 100, 0, 2 * Math.PI, true);
                shape.strokeStyle = "black";
                shape.stroke();
                break;

            case rectangle:
                shape.strokeStyle = "black";
                shape.lineWidth = "2";
                shape.strokeRect(25, 25, 100, 100);
                break;
        }
    }
}) */