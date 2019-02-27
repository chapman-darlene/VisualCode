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
//const arch_url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=20";


function loadingScreenActivate() {

    document.getElementById("loading").style.display = "block";
}

function loadingScreenDeactivate() {

    document.getElementById("loading").style.display = "none";
}


function apod_load() {
    loadingScreenActivate();
    const apod = new XMLHttpRequest();
    apod.onload = function () {

        if (this.readyState === 4 && this.status === 200) {
            loadingScreenDeactivate();
            data = JSON.parse(this.response);
            console.log(data);
            if (data.media_type == "image") {
                image.src = data.url;
                video.style.display = 'none';
            } else {
                video.src = data.url;
                image.style.display = 'none';
            }
            explanation.innerText = data.explanation;
            title.innerText = data.title;
        } else {
            loadingScreenActivate();
        }
    };

    apod.open("GET", apod_url, true);
    apod.send();
}

apod_load();


document.getElementById('image').addEventListener('mouseover', function (e) {
    console.log(e);
    e.target.style.width = "100%";
}, false);
