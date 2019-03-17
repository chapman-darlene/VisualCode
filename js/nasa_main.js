//create data api object
/* const apiKey = "TBPAWefnugRohG08ksGuLaquIuQiYOeEb7hAuY4M";


var data = {}; */
/* 
function textOnload() {
    document.getElementById("loading-text").style.display = "block";
    document.getElementById("loading-text").style.fontSize = "4vmax";
}

function loadComplete() {
    document.getElementById("loading-text").style.display = "none";
} */

/* const tech_url = "https://api.nasa.gov/EPIC/api/enhanced/images?api_key=" + apiKey;

function tech_load() {
    //textOnload();
    const tech = new XMLHttpRequest();
    tech.open("GET", tech_url, true);

    //onload of window load status and parse data
    tech.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //loadComplete();
            data = JSON.parse(this.responseText);
            console.log(data);

            function dataStorage() {

                var techArray = JSON.stringify(data);
                //console.log(techArray);            
                localStorage.setItem('tech', techArray);
                var jsObject = localStorage.getItem('techArray');
            }
            dataStorage();
            epicGallery(data);

        }
    };

    tech.send();
}
tech_load(); */


/* function epicGallery(data) {
    //console.log(data);
    var images = document.getElementById("epicImage");
    for (var x = 0; x < data.length; x++) {
        if (data[x].image) {
            var epicImage = document.createElement("img");
            epicImage.src = data[x].image + ".jpg";
            //epicImage.alt = data[x].caption;
            images.appendChild(epicImage);
        }
    }
} */


function bodyColor() {
    document.body.classList.toggle('bodyElement');
}

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
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

function localFavorite() {
    var fav = document.getElementById("favImg").src;

    var favImg = localStorage.getItem('fav');
    JSON.parse(favImg);
    console.log(favImg);
    //save local storage with different key as push into array
    //load item from local storage
    //click on it to save it back into storage
    //read local storage
    //create element to put images in favorite section on page

}

