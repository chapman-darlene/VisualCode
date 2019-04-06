//create data api object
const apiKey = "TBPAWefnugRohG08ksGuLaquIuQiYOeEb7hAuY4M";



const image = document.getElementById("image");
const video = document.getElementById("video");
const reqObject = document.getElementById("reqObject");
const explanation = document.getElementById("explanation");
const title = document.getElementById("title");
const date = document.getElementById("date");

var data = {};
const apod_url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;


function textOnload() {
    document.getElementById("loading-text").style.display = "block";
    document.getElementById("loading-text").style.fontSize = "4vmax";
}

function loadComplete() {
    document.getElementById("loading-text").style.display = "none";
}


function apod_load() {
    textOnload();
    const apod = new XMLHttpRequest();
    apod.onload = function () {

        if (this.readyState === 4 && this.status === 200) {
            loadComplete();
            data = JSON.parse(this.response);
            console.log(data);
            if (data.media_type == "image") {
                image.src = data.url;
                video.style.display = 'none';
            } else {
                video.src = data.url;
                image.style.display = 'none';
            }
            title.innerText = data.title;
            var exp = data.explanation;
            learnMore(exp);
        }
    };

    apod.open("GET", apod_url, true);
    apod.send();
}

apod_load();


function learnMore(exp) {
    //console.log(data.explanation);
    //console.log(exp);
    document.getElementById('learnMore').addEventListener('click', function (e) {
        //console.log(e);
        document.getElementById("learnResult").innerHTML = exp;
    }, false);
}

document.getElementById('image').addEventListener('mouseover', function (e) {
    //console.log(e);
    e.target.style.width = "100%";
}, false);


function changeImg(value) {

    switch (value) {
        case "1":
            document.getElementById('image').style.filter = "none";
            break;
        case "2":
            document.getElementById('image').style.filter = "sepia(100%)";
            document.getElementById('styleResult').innerHTML = "This is sepia at 100%"
            break;
        case "3":
            document.getElementById('image').style.filter = "grayscale(100%)";
            document.getElementById('styleResult').innerHTML = "This is grayscale at 100%"
            break;
        case "4":
            document.getElementById('image').style.filter = "hue-rotate(90deg)";
            document.getElementById('styleResult').innerHTML = "This is hue-rotation at 90 degrees"
            break;
        case "5":
            document.getElementById('image').style.filter = "saturate(200%)";
            document.getElementById('styleResult').innerHTML = "This is saturate at 200%"
            break;
        case "6":
            document.getElementById('image').style.filter = "invert(75%)";
            document.getElementById('styleResult').innerHTML = "This is invert at 75%"
            break;
        case "7":
            document.getElementById('image').style.filter = "contrast(200%)";
            document.getElementById('styleResult').innerHTML = "This is contrast at 200%"
            break;
        case "8":
            document.getElementById('image').style.filter = "contrast(400%) brightness(100%)";
            document.getElementById('styleResult').innerHTML = "This is contrast at 400% and brightness at 100%"
            break;

        case "9":
            document.getElementById('image').style.filter = "invert(100%) hue-rotate(50deg)";
            document.getElementById('styleResult').innerHTML = "This is invert at 100% and hue-rotate at 50%"
            break;
        default:

            document.getElementById('image').style.filter = "saturate(200%) hue-rotate(60deg)";
            document.getElementById('styleResult').innerHTML = "This is saturate at 200% and hue-rotate at 60 degrees"
            break;
    }
}