//create data api object
const apiKey = "TBPAWefnugRohG08ksGuLaquIuQiYOeEb7hAuY4M";


const image = document.getElementById("image");
const video = document.getElementById("video");
const reqObject = document.getElementById("reqObject");
const explanation = document.getElementById("explanation");
const title = document.getElementById("title");
const date = document.getElementById("date");

var data = {};

function textOnload() {
    document.getElementById("loading-text").style.display = "block";
}

function loadComplete() {
    document.getElementById("loading-text").style.display = "none";
}

const arch_url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=10";

function arch_load() {
    textOnload();
    const arch = new XMLHttpRequest();
    arch.open("GET", arch_url, true);

    //onload of window load status and parse data
    arch.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            loadComplete();
            data = JSON.parse(this.responseText);
            //console.log(data);

            var select = document.getElementById("dateSelect")
            for (var j = 0; j < data.length; j++) {
                if (data[j].media_type == "image") {
                    //select.innerHTML = select.innerHTML + '<option value ="' + j + '">' + data[j].date + '</option>';
                    var obj = document.createElement("option");
                    obj.value = j;
                    obj.innerHTML = data[j].date;
                    select.appendChild(obj);
                }
            }

            imgGallery(data);
            apod(data);

            function dataStorage() {
                console.log(data);
                var dataArray = JSON.stringify(data);
                //console.log(dataArray);            
                localStorage.setItem('data_key', dataArray);
                var jsObject = localStorage.getItem('dataArray');
            }
            dataStorage();

        }
    };

    arch.send();
}
arch_load();

function imgGallery(data) {
    //console.log(data);
    var images = document.getElementById("nasaImg");
    for (var x = 0; x < data.length; x++) {
        if (data[x].media_type == "image") {
            var nasaImg = document.createElement("img");
            nasaImg.src = data[x].url;
            nasaImg.alt = data[x].title;
            //nasaImg.addEventListener('mouseover', imgMouseOver(this), false);
            images.appendChild(nasaImg);
        }
    }
}

function addInfo() {
    var selection = document.getElementById("dateSelect").value;
    data[selection];
    document.getElementById("title").innerHTML = data[selection].title;
    document.getElementById("url").src = data[selection].url;
    document.getElementById("explanation").innerHTML = data[selection].explanation;
}

document.querySelector('#nasaImg').addEventListener('mouseover', function (e) {
    //console.log(e);
    if (e.target.tagName === "IMG") {
        var images = this.querySelectorAll('IMG');
        images = e.target
    }
}, false);


document.querySelector('.grid').addEventListener('click', function (e) {

    if (e.target.tagName === "IMG") {

        var howMany = this.querySelectorAll('IMG').length;
        //console.log(howMany);
        if (howMany > 1) {

            var li = e.target;
            var listItems = document.querySelector("li");
            var ul = document.getElementById("ul");
            li.parentNode.removeChild(li);
            var alt = document.getElementById('nasaImg').firstChild.alt;
            document.getElementById('imgResult').innerHTML = "You chose " + alt + " as your favorite image.";
        }
    }
}, false);


function apod(data) {
    var imgObject = [];
    var counter = 0;
    for (var x = 0; x < data.length; x++) {
        if (data[x].media_type === "image") {
            imgObject[counter] = new objectConstructor(data[x].title, data[x].url, data[x].explanation);
            counter++;
        }
    }

    var random = Math.floor(Math.random() * imgObject.length);

    document.getElementById("randomTitle").innerHTML = imgObject[random].title;
    document.getElementById("randomUrl").src = imgObject[random].url;
    document.getElementById("randomExplanation").innerHTML = imgObject[random].explanation;
}


function objectConstructor(title, url, explanation) {
    this.date = date;
    this.title = title;
    this.url = url;
    this.explanation = explanation;
    //console.log(url);
}



/* function slideshow() {

var listArray = localStorage.getItem("listArray");
var imagePaths = JSON.parse(listArray);
//var images = document.getElementById("images");
for (var i = 0; i < imagePaths.length; i++) {
    var image = document.createElement("img");
    image.src = imagePaths[i].url;

}
var showCanvas = null;
var showCanvasCtx = null;
var currentImage = 0;
var revealTimer;

window.onload = function () {
    showCanvas = document.getElementById('showCanvas');
    showCanvasCtx = showCanvas.getContext('2d');

    img.setAttribute('width', '600');
    img.setAttribute('height', '400');
    switchImage();

    // start the animation
    setInterval(switchImage, 3000);
}

function switchImage() {
    img.setAttribute('src', imagePaths[currentImage++]);
    if (currentImage >= imagePaths.length)
        currentImage = 0;

    showCanvasCtx.globalAlpha = 0.1;
    revealTimer = setInterval(revealImage, 100);
}

function revealImage() {
    showCanvasCtx.save();
    showCanvasCtx.drawImage(img, 0, 0, 600, 400);
    showCanvasCtx.globalAlpha += 0.1;
    if (showCanvasCtx.globalAlpha >= 1.0)
        clearInterval(revealTimer);
    showCanvasCtx.restore();
}

}
slideshow(); */