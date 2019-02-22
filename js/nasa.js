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
 */
console.log(startDate + priorDate);
const arch_url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=10";

function arch_load() {
    const arch = new XMLHttpRequest();
    arch.open("GET", arch_url, true);
    //onload of window load status and parse data
    arch.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            data = JSON.parse(this.response);
            console.log(data);

            //stringify data
            var listArray = new Array();
            for (var i = 0; i < data.length; i++) {
                if (data[i].media_type == "image") {
                    listArray.push(data[i].url);
                }
                localStorage.setItem("listArray", JSON.stringify(listArray));
                //console.log(listArray);                
            }


            var select = document.getElementById('dateSelect')

            for (var j = 0; j < data.length; j++) {
                select.innerHTML = select.innerHTML + '<option value ="' + '">' + data[j].date + '</option>';
                //select.options[select.selectedIndex].value;
                console.log(select.options[select.selectedIndex].value);
                console.log(data[j].date);
            }
        }
    };
    arch.send();
}

arch_load();



/* 
function slideshow() {
    var imagePaths = [data.url];
    var showCanvas = null;
    var showCanvasCtx = null;
    var img = document.createElement("img");
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