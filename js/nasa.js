//create data api object
const apiKey = "TBPAWefnugRohG08ksGuLaquIuQiYOeEb7hAuY4M";


const image = document.getElementById("image");
const video = document.getElementById("video");
const reqObject = document.getElementById("reqObject");
const explanation = document.getElementById("explanation");
const title = document.getElementById("title");
const date = document.getElementById("date");

var data = {};
/* var d = new Date();
var startDate = d.toISOString().slice(0, 10);
var priorDate = d.setDate(d.toISOString().slice(0, 10) - 30);

console.log(startDate + priorDate); */

const arch_url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=20";

function arch_load() {
    const arch = new XMLHttpRequest();
    arch.open("GET", arch_url, true);
    //onload of window load status and parse data
    arch.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            data = JSON.parse(this.responseText);
            console.log(data);

            //stringify data
            var listArray = new Array();
            for (var i = 0; i < data.length; i++) {
                /* if (data[i].media_type == "image") { */
                listArray.push(data[i]);
            }
            localStorage.setItem("listArray", JSON.stringify(listArray));
            //console.log(listArray);

            var select = document.getElementById("dateSelect")
            for (var j = 0; j < data.length; j++) {
                //select.innerHTML = select.innerHTML + '<option value ="' + j + '">' + data[j].date + '</option>';
                var obj = document.createElement("option");
                obj.value = j;
                obj.innerHTML = data[j].date;
                select.appendChild(obj);
            }
        } else {
            document.getElementById('waiting').innerHTML = '<img src="img/solar.gif alt="rotating galaxy/>"';
        }
    };
    arch.send();
}
arch_load();

function addInfo() {
    var selection = document.getElementById("dateSelect").value;
    data[selection];
    document.getElementById("title").innerHTML = data[selection].title;
    document.getElementById("url").src = data[selection].url;
    document.getElementById("explanation").innerHTML = data[selection].explanation;
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