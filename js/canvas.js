window.addEventListener("load", function () {

    var theCanvas = document.getElementById("canvas1");

    if (theCanvas && theCanvas.getContext) {
        var shape = theCanvas.getContext("2d");
        if (shape) {
            //draw rectangle shape
            shape.strokeStyle = "blue";
            shape.lineWidth = "2";
            shape.strokeRect(25, 25, 25, 25);
            //build a shape, fillstyle, stroke, size
            //build animation, transition, transformation
        }
    }

})

switch (shape) {
    case square:
        shape.strokeStyle = "blue";
        shape.lineWidth = "2";
        shape.strokeRect(25, 25, 25, 25);
        break;

    case circle:
        break;

    case rectangle:
        shape.strokeStyle = "red";
        shape.lineWidth = "2";
        shape.strokeRect(25, 25, 100, 100);
        break;

    case triangle:
        break;

}

function clearShape() {

}