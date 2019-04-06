
var i = 0;
function getArray(index) {
    var imgArray = JSON.parse(localStorage.getItem('fav_key'));
    //console.log(imgArray);
    i += index;
    var imgObject = { id: index, src: imgArray[i].src, alt: imgArray[i].alt, exp: imgArray[i].exp };
    //console.log(imgObject);

    slideImages(imgObject);

}

function slideImages(imgObject) {

    document.getElementById('currentImage').style.transform = "rotateX(0)";
    if (imgObject) {
        var slideImage = document.getElementById('slideImage');
        var currentImage = document.getElementById('currentImage');
        currentImage.src = imgObject.src;
        currentLink.href = "";
        document.getElementById("link").download = currentImage.src;
        slideImage.appendChild(currentImage);


        document.getElementById("title").innerHTML = imgObject.alt;
        document.getElementById('description').innerHTML = imgObject.exp;
    } else {
        document.getElementById('currentLink').href = "nasa_archive.html";
    }
}

getArray(0);

function plusSlides(n) {
    document.getElementById('currentImage').style.transition = "all 2s ease-in-out";
    document.getElementById('currentImage').style.transform = "rotateX(90deg)";
    getArray(n);
}


