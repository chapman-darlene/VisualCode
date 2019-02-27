//<button onclick='alert("It is not good practice to use this type of Event handler")'>Select</button>



//<button onclick ="bigChange()">Select</button>	

function bigChange() {
  console.log("This handler is not much better. As your program grows, it may not be very efficient.")
}


//<button onclick="bigChange()">Select</button>

function bigChange() {
  console.log("Your code goes here");
}
var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bigChange;
}


//ADD DOM LEVEL 2 EVENT HANDLER
var btn = document.querySelector('button');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);

btn.addEventListener('click', function () {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});

//inefficient way to clean up old unused handlers
btn.removeEventListener('click', bgChange);

//second handler would overwrite the first
myElement.onclick = functionA;
myElement.onclick = functionB;

//both functions work when clicked
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);