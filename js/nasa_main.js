/* function bodyColor() {
    document.body.classList.toggle('bodyElement');
} */

function changeImg(value) {

    switch (value) {
        case "1":
            document.getElementById('changeImg').style.filter = "none";
            break;
        case "2":
            document.getElementById('changeImg').style.filter = "sepia(100%)";
            break;
        case "3":
            document.getElementById('changeImg').style.filter = "grayscale(100%)";
            break;
        case "4":
            document.getElementById('changeImg').style.filter = "hue-rotate(90deg)";
            break;
        case "5":
            document.getElementById('changeImg').style.filter = "saturate(200%)";
            break;
        case "6":
            document.getElementById('changeImg').style.filter = "invert(75%)";
            break;
        case "7":
            document.getElementById('changeImg').style.filter = "contrast(200%)";
            break;
        case "8":
            document.getElementById('changeImg').style.filter = "contrast(400%) brightness(100%)";
            break;

        case "9":
            document.getElementById('changeImg').style.filter = "invert(100%) hue-rotate(50deg)";
            break;
        default:

            document.getElementById('changeImg').style.filter = "saturate(200%) hue-rotate(60deg)";
            break;
    }

}

function openNav() {
    document.getElementById("sidebar").style.width = "200px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

function localFavorite() {
    //var favArray = localStorage.getItem("fav_key");
    console.log(localStorage.getItem("fav_key"));

    //load item from local storage
    //click on element to save to computer
    //use slider to experiment with image
}

