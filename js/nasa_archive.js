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
    document.getElementById("loading-text").style.fontSize = "4vmax";
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
            nasaImg.id = "img" + x;
            nasaImg.src = data[x].url;
            nasaImg.alt = data[x].title;
            nasaImg.addEventListener('mouseover', myHover("img" + x));
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

function myHover(ele) {
    var e = document.getElementById(ele);
    //document.getElementById('nasaImg');
}



document.querySelector('.grid').addEventListener('click', function (e) {

    if (e.target.tagName === "IMG") {

        var howMany = this.querySelectorAll('IMG').length;
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
}

/* 
window.attachEvent('onresize', function () {
    if (window.width <= 820) {
        //hide old nav
        //show new nav dropdown
    }
});
 */

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

function localFavorite() {
    var fav = document.getElementById("favImg").src;
    //save local storage with different key as push into array
    //load item from local storage
    //click on it to save it back into storage
    //read local storage
    //create element to put images in favorite section on page

}

