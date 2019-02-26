//create data api object
const apiKey = "TBPAWefnugRohG08ksGuLaquIuQiYOeEb7hAuY4M";



const image = document.getElementById("image");
const video = document.getElementById("video");
const reqObject = document.getElementById("reqObject");
const explanation = document.getElementById("explanation");
const title = document.getElementById("title");
const date = document.getElementById("date");

var data = {};
const sound_url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
const arch_url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=20";


function apod_load() {
    const apod = new XMLHttpRequest();
    apod.onload = function () {

        if (this.readyState === 4 && this.status === 200) {
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

        }
    };
    apod.open("GET", apod_url, true);
    apod.send();
}

apod_load();