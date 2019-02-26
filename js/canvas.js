function selectShape() {
    var selection = document.getElementById("select1").value;
    var theCanvas = document.getElementById("canvas1");
    var shape = theCanvas.getContext("2d");

    switch (selection) {
        case "square":
            shape.strokeStyle = "black";
            shape.lineWidth = "2";
            shape.fillStyle = "#fbbc3c";
            shape.fill();
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
            //shape.rect(225, 20, 50, 85);           
            shape.strokeStyle = "black";
            shape.lineWidth = "1.5";
            shape.fillStyle = "#d88960";
            shape.fill();
            shape.strokeRect(225, 20, 50, 85);
            break;
    }
}

