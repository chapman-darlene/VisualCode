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


function arch_load(number) {
    textOnload();

    const arch = new XMLHttpRequest();
    arch.open("GET", arch_url, true);

    //onload of window load status and parse data
    arch.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            loadComplete();
            data = JSON.parse(this.responseText);

            if (number == 0) {
                imgGallery(data);
            } else {
                moreImagesTwo(data);
            }

        }
    };

    arch.send();
}
arch_load(0);

function imgGallery(data) {

    var counter = 0;
    var images = document.getElementById("nasaImg");
    for (var x = 0; x < data.length; x++ , counter++) {
        if (data[x].media_type == "image") {

            var nasaImg = document.createElement("img");
            nasaImg.id = 'img' + x;
            nasaImg.src = data[x].url;
            nasaImg.alt = data[x].title;
            nasaImg.exp = data[x].explanation;
            var imgObject = { id: x, date: data[x].date, src: data[x].url, alt: data[x].title, exp: data[x].explanation }
            // console.log(imgObject)

            var imgContainer = document.createElement('div');
            imgContainer.className = "img-container";

            var textBox = document.createElement('div');
            textBox.className = "text-box";

            var imgTitle = document.createElement('h4');
            imgTitle.appendChild(document.createTextNode("Image Title:  " + data[x].title));
            imgTitle.className = "fav-title" + x;

            var imgDate = document.createElement('h4');
            imgDate.appendChild(document.createTextNode("Date Image Captured:  " + data[x].date));
            imgDate.className = "fav-date" + x;

            var exp = document.createElement('p');
            exp.appendChild(document.createTextNode(data[x].explanation));
            exp.className = "fav-exp" + x;

            var divButton = document.createElement('div');
            divButton.className = 'divButton';

            var btn = document.createElement('button');
            btn.className = "fav-button" + x;
            btn.innerHTML = "Add to Favorite Images";
            btn.setAttribute("data-imgObject", JSON.stringify(imgObject));
            btn.setAttribute("id", nasaImg.id);
            btn.addEventListener("click", addFavorite);

            var btnTwo = document.createElement('button');
            btnTwo.ClassName = 'fav-button' + x;
            btnTwo.innerHTML = "Remove from Favorites";
            btnTwo.setAttribute("data-imgObject", JSON.stringify(imgObject));
            btnTwo.setAttribute("id", nasaImg.id);
            btnTwo.addEventListener("click", removeFavorite);

            var eMessage = document.createElement('p');
            eMessage.appendChild(document.createTextNode(""));
            eMessage.className = "eMessage";
            eMessage.id = 'p' + nasaImg.id;

            imgContainer.appendChild(nasaImg);
            textBox.appendChild(imgTitle);
            textBox.appendChild(imgDate);
            textBox.appendChild(exp);
            textBox.appendChild(divButton);
            divButton.appendChild(btn);
            divButton.appendChild(btnTwo);
            textBox.appendChild(eMessage);
            imgContainer.appendChild(textBox);
            images.appendChild(imgContainer);
        }
    }

}

function moreImages() {
    arch_load(1);
}

function moreImagesTwo(data) {

    for (var i = 0; i <= 9; i++) {
        var element = document.getElementsByClassName('eMessage')[i];
        element.classList.remove("show-eMessage");
        //console.log(i);
        if (data[i].media_type == "image") {
            document.getElementById('img' + i).src = data[i].url;
            document.getElementById('img' + i).alt = data[i].title;
            document.getElementsByClassName('fav-title' + i)[0].innerHTML = data[i].title;
            document.getElementsByClassName('fav-date' + i)[0].innerHTML = data[i].date;
            document.getElementsByClassName('fav-exp' + i)[0].innerHTML = data[i].explanation;
            document.getElementsByClassName('fav-button' + i)[0].getAttribute("data-imgObject");
            var imgObject = { id: i, date: data[i].date, src: data[i].url, alt: data[i].title, exp: data[i].explanation }
            document.getElementsByClassName('fav-button' + i)[0].setAttribute("data-imgObject", JSON.stringify(imgObject));

        }
    }
}



function addFavorite(event) {
    let imageInfo = event.target.getAttribute("data-imgObject");
    var imgId = event.target.getAttribute("id");

    imageInfo = JSON.parse(imageInfo);
    let date = imageInfo.date;
    console.log(date);

    var favArray = JSON.parse(localStorage.getItem("fav_key"));

    if (favArray) {
        //check if image is already there by date
        //if image is already saved return message else push onto array and 
        var duplicate = false;
        for (var i = 0; i < favArray.length; i++) {
            if (date == favArray[i]["date"]) {
                duplicate = true;

                document.getElementById('p' + imgId).classList.add("show-eMessage");
                document.getElementById('p' + imgId).innerHTML = "You've already saved this image in your favorites.";
            }
        }
        if (duplicate != true) {
            favArray.push(imageInfo);
            localStorage.setItem("fav_key", JSON.stringify(favArray));
            //document.getElementsByClassName('eMessage')[imgId].classList.add("show-eMessage");
            //  var eMessage = document.getElementById("imgId");
            document.getElementById('p' + imgId).classList.add("show-eMessage");
            document.getElementById('p' + imgId).innerHTML = "This image is now saved in your favorites.";

        }
    } else {
        var favArray = new Array();
        favArray.push(imageInfo);
        localStorage.setItem("fav_key", JSON.stringify(favArray));
        document.getElementById('p' + imgId).classList.add("show-eMessage");
        document.getElementById('p' + imgId).innerHTML = "This image is now saved in your favorites.";

    }
}

function removeFavorite(event) {
    let imageInfo = event.target.getAttribute("data-imgObject");
    let imgId = event.target.getAttribute("id");
    imageInfo = JSON.parse(imageInfo);
    let date = imageInfo.date;
    var removeArray = JSON.parse(localStorage.getItem("fav_key"));

    if (removeArray) {
        //check if image is already there by date
        //if image is already saved return message else push onto array and 
        var remove = false;
        for (var i = removeArray.length - 1; i >= 0 && remove == false; i--) {
            var dateId = removeArray[i].date;

            if (date == dateId) {
                remove = true;
                removeArray.splice(i, 1);
                localStorage.setItem("fav_key", JSON.stringify(removeArray));
                /* document.getElementsByClassName('eMessage')[imgId].classList.add("show-eMessage");
                eMessage.innerHTML = "This image has been removed from your favorite"; */

                document.getElementById('p' + imgId).classList.add("show-eMessage");
                document.getElementById('p' + imgId).innerHTML = "This image has been removed from your favorite.";
            }
        }
    } else {
        /*  document.getElementsByClassName('eMessage')[imgId].classList.add("show-eMessage");
         eMessage.innerHTML = "This image is now saved in your favorites."; */
        //document.getElementById(imgId).parentElement.childNodes[0].appendChild(eMessage);
    }
}

/* function addInfo() {
    var selection = document.getElementById("dateSelect").value;
    data[selection];
    document.getElementById("title").innerHTML = data[selection].title;
    document.getElementById("url").src = data[selection].url;
    document.getElementById("explanation").innerHTML = data[selection].explanation;
} */

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

/*
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
 */
/* function objectConstructor(title, url, explanation) {
    this.title = title;
    this.url = url;
    this.explanation = explanation;
} */