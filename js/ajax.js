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

/* 
function arch_load() {
    const arch = new XMLHttpRequest();
    arch.onreadystatechange = function () {
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
            var dateObject = {
                "date": data.date,
            };
            for (i in dateObject) {
                var dateList = document.getElementById("arch_date") = dateObject[i];
            }

        }
    };
    arch.open("GET", arch_url, true);
    arch.send();

} */




/* var arch_data = {};
var arch = new XMLHttpRequest();
arch.open("GET", arch_url, true);
arch.send();

function arch_load() {
    if (arch.status == 200) {
        data = JSON.parse(arch.responseText);
        console.log(arch_data);
        console.log(arch_data[0].url);
        var image = document.createElement("img");
        image.src = arch_data[0].url;
        document.getElementById("result").appendChild(image);
        document.getElementById("explanation").innerHTML = arch_data.explanation;

    } else {
        alert("There was an error communicating with NASA")
    }
}; */