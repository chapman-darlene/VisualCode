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
            dataStorage(data)
            imgGallery(data);
            apod(data);
            //imgHover(data);


        }
    };

    arch.send();
}
arch_load();


function dataStorage(data) {
    //console.log(data);
    var dataArray = JSON.stringify(data);
    //console.log(dataArray);
    localStorage.setItem('data_key', dataArray);
}

function imgGallery(data) {
    //console.log(data);

    var images = document.getElementById("nasaImg");
    for (var x = 0; x < data.length; x++) {
        if (data[x].media_type == "image") {
            var nasaImg = document.createElement("img");
            nasaImg.id = "img" + x;
            nasaImg.src = data[x].url;
            nasaImg.alt = data[x].title;
            nasaImg.exp = data[x].explanation;
            var imgObject = { id: x, date: data[x].date, src: data[x].url, alt: data[x].title, exp: data[x].explanation }


            var imgContainer = document.createElement('div');
            imgContainer.className = "img-container";

            var imgTitle = document.createElement('p');
            imgTitle.appendChild(document.createTextNode(data[x].title));
            imgTitle.className = "fav-title";

            var caption = document.createElement('p');
            caption.appendChild(document.createTextNode("Image Title: "));
            caption.className = "fav-caption";

            var btn = document.createElement('button');
            btn.className = "fav-button";
            btn.innerHTML = "Add to Favorite Images";
            btn.setAttribute("data-imgObject", JSON.stringify(imgObject));


            btn.onclick = function (event) {
                let imageInfo = event.target.getAttribute("data-imgObject");
                var favArray = JSON.parse(localStorage.getItem('fav_key'));
                if (favArray) {
                    favArray.push(imageInfo);
                    localStorage.setItem("fav_key", JSON.stringify(favArray));
                } else {
                    var favArray = new Array();
                    favArray.push(imageInfo);
                    localStorage.setItem("fav_key", JSON.stringify(favArray));
                }
            }

            var exp = document.createElement('p');
            exp.appendChild(document.createTextNode(data[x].explanation));
            exp.className = "fav-exp";

            var textBox = document.createElement('div');
            textBox.className = "text-box";

            var lineBreak = document.createElement('br');

            imgContainer.appendChild(nasaImg);
            textBox.appendChild(caption);
            textBox.appendChild(imgTitle);
            textBox.appendChild(lineBreak);
            textBox.appendChild(btn);
            textBox.appendChild(exp);
            imgContainer.appendChild(textBox);
            images.appendChild(imgContainer);
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

/* 
document.querySelector('.grid').addEventListener('click', function (e) {
    console.log(e);
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
}, false); */


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