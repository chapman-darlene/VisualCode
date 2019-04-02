
function changeImg(value) {

    switch (value) {
        case "1":
            document.getElementById('changeImg').style.filter = "none";
            break;
        case "2":
            document.getElementById('changeImg').style.filter = "sepia(100%)";
            break;
        case "3":
            document.getElementById('changeImg').style.filter = "grayscale(100%)";
            break;
        case "4":
            document.getElementById('changeImg').style.filter = "hue-rotate(90deg)";
            break;
        case "5":
            document.getElementById('changeImg').style.filter = "saturate(200%)";
            break;
        case "6":
            document.getElementById('changeImg').style.filter = "invert(75%)";
            break;
        case "7":
            document.getElementById('changeImg').style.filter = "contrast(200%)";
            break;
        case "8":
            document.getElementById('changeImg').style.filter = "contrast(400%) brightness(100%)";
            break;

        case "9":
            document.getElementById('changeImg').style.filter = "invert(100%) hue-rotate(50deg)";
            break;
        default:

            document.getElementById('changeImg').style.filter = "saturate(200%) hue-rotate(60deg)";
            break;
    }

}

function openNav() {
    document.getElementById("sidebar").style.width = "200px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

var i = 0; 
function getArray(index){
    var imgArray = JSON.parse(localStorage.getItem('fav_key'));
    console.log(imgArray);
        i += index;    
        var imgObject = { id: index, src: imgArray[i].src, alt: imgArray[i].alt, exp: imgArray[i].exp };  
        slideImages(imgObject);

}

function slideImages(imgObject){
    
        if (imgObject) {
            var slideImage = document.getElementById('slideImage');
            var currentImage = document.getElementById('currentImage');
            currentImage.src = imgObject.src;
            currentLink.href = "";
            document.getElementById("link").download = currentImage.src;
            slideImage.appendChild(currentImage);
            
            document.getElementById("title").innerHTML= imgObject.alt;
            document.getElementById('description').innerHTML = imgObject.exp;
        } else{           
           document.getElementById('currentLink').href = "nasa_archive.html";
        }
}

getArray(0);

function plusSlides(n) {
    getArray(n);
}



        //make sure it is not the last image
        /*if (currentImage == slideImage.length -1){               
            get slide image. set source to image array at 0
            change rest of data
            set CurrentImage = 0
        }
    //get slide image and set source to image array current image +1
    change currentImage value to currentImage plus 1
}else{
    //check to see if first image
    if (currentImage ==0){               
            get slide image. set source to array length -1
            change rest of data
            set CurrentImage = array.length -1
        }
    //get slide image and set source to image array current image - 1
    change currentImage value to currentImage - 1
    
}*/

    /* Change image on arrow click
    
    1.	Check if a favorite has been set
        a.	If not remove arrows or do nothing
    2.	Check direction (next or back)
    3.	If next get currentimage attribute
    4.	Check if currentimage attribute is last image
        a.	If it is then set source to first element in images array
    5.	Set source to currentimage + 1 in imagesarray
    6.	If back get currentimage attribute
    7.	Check if currentimage is first image
        a.	If it is then set source to last image in imagesarray
    8.	Set source to currentimage – 1 in imagesarray
    
     */



    /* 
    function favoriteImage() {
        //create variable and get favorites from local storage
        var imgArray = JSON.parse(localStorage.getItem('fav_key'));
    
        var slideIndex = 0;
        showslides(slideIndex);
        imgObject = [];
        for (var x = 0; x < imgArray.length; x++) {
            imgObject[slideIndex] = new objectConstructor(imgArray[x].id, imgArray[x].date, imgArray[x].alt, imgArray[x].src, imgArray[x].exp);
            slideIndex++;
            console.log(imgObject[x]);
        }
    
        //check to make sure there are items in the array
    
        if (imgObject) {
            document.getElementById("slides").src = imgObject[0].src;
        } else {
          
            document.getElementById("slideshow").innerHTML = "You do not currently have any favorite images saved to your local storage."
        }
    }
    
    favoriteImage(); */




 

/* function bodyColor() {
    document.body.classList.toggle('bodyElement');
}*/



        //create variable and get favorites from local storage
       /*  var imgArray = JSON.parse(localStorage.getItem('fav_key'));
        var imgObject = {};
        var id = 0;
        console.log(imgArray)
        for(var i = 0; i < imgArray.length; i++){
            imgObject = { id: id, src: imgArray[i].src, alt: imgArray[i].alt, exp: imgArray[i].exp }            
            id++;
            console.log(imgObject);
        var slideIndex = imgObject[0].id;
     */