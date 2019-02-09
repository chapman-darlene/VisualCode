// JavaScript Document

/*(function(){
    "use strict";
})();*/

/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode*/


//variable name suggestions
function variableExample() {
  var example = document.getElementById("varExample").innerHTML = "Here are some examples of variables. <br>" +
    "<ul>" +
    "<li id='listTag'>This is a string or text variables.</li><br>" +
    "<li> var string = \"I can put text in here\"</li> <br>" +
    "<li id='listTag'>This is a number variable. It can include a decimal point, if so needed. </li><br>" +
    "<li>var number = 25.50 </li><br>" +
    "<li id='listTag'>This is an array variable. An array is a collection of of information stored in a variable. </li><br>" +
    "<li>var toys = ['bat', 'ball', 'doll', 'puzzle', 'kite'] </li><br>" +
    "</ul>";
}

//While Loop Code
//document.getElementById("whileLoop").innerHTML = function() { whileLoop() };

function whileLoop() {

  var text = "";
  var count = 0;
  while (count < 10) {
    text += "<br>The number is:  " + count;
    count++;
  }
  document.getElementById("whileLoop").innerHTML = text;
}


//Do-while Loop Code
function doWhileLoop() {
  var text = "";
  var count = 1;
  do {
    text += (count + " times 7 is " + count * 7 + "<br>")
  } while (++count <= 10);
  document.getElementById("doWhileLoop").innerHTML = text;
}

//For Loop Haystack Game

//get number from client
//validate that the number is between 1 and 20, and is not another type of character
function haystackValidator() {
  var input, numb;
  input = document.getElementById("haystack").value;
  numb = parseInt(input);
  if ((numb < 1) || (numb > 10)) {
    document.getElementById("haystackResponse").innerHTML = "This is an invalid entry. <br>" +
      "Please try again.";
  } else {
    haystackGame(numb);
  }
}

function haystackGame(number) {

  var needle = Math.floor(Math.random() * 10) + 1;
  if (number === needle) {
    document.getElementById("haystackResponse").innerHTML = "You found the needle";
  } else
    document.getElementById("haystackResponse").innerHTML = "Sorry, but you didn't find the needle. <br>" +
    "The number was: " + needle;
}

//switch statement example
function superHero() {
  var heroName = document.querySelector("input[name='hero']:checked").value;

  switch (heroName) {
    case "superman":
    case "batman":
    case "wonderWoman":

      document.getElementById("comics").innerHTML = "This Super Hero is a member of the Justice League!";
      break;

    case "ironMan":
    case "captain":
    case "spiderMan":

      document.getElementById("comics").innerHTML = "Say hello to one of the Avengers!";
      break;
  }
}

function dice() {
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled " + diceTotal + ".";

  if ((diceTotal == 2) || (diceTotal == 3) || (diceTotal == 12)) {
    status.innerHTML = "CRAPS! You lose!";
  } else if ((diceTotal == 7) || (diceTotal == 11)) {
    status.innerHTML = "You won!";
  } else {
    status.innerHTML = "You can roll again, if you want."
  }
}

//multi-dimensional array example
function map() {
  var input1 = document.getElementById("num1").value;
  var input2 = document.getElementById("num2").value;

  a = parseInt(input1);
  b = parseInt(input2);
  if ((a < 1 || a > 3) || (b < 1 || b > 3)) {
    document.getElementById("mapOutput").innerHTML = "You have entered incorrect numbers."
  } else {
    mapArray();
  }
}

function mapArray() {
  var input1 = document.getElementById("num1").value - 1;
  var input2 = document.getElementById("num2").value - 1;
  document.getElementById("mapOutput").innerHTML = "Welcome to our Resort & Spa. Continue to enter number combinations to tour our beautiful resort";

  var mapArray = new Array(3);
  for (i = 0; i < 3; i++) {
    mapArray[i] = new Array(3)
    for (j = 0; j < 3; j++) {}
  }

  mapArray[0][0] = "You are in the main lobby";
  mapArray[0][1] = "You have reached the front desk";
  mapArray[0][2] = "You have found the elevator";
  mapArray[1][0] = "You are on the second floor. This is where the spa is located";
  mapArray[1][1] = "Our indoor pool is located on the level. You should also tour our outdoor pools and beach";
  mapArray[1][2] = "The gym is located on the this floor";
  mapArray[2][0] = "This is guest room 300";
  mapArray[2][1] = "This is guest room 301";
  mapArray[2][2] = "You have reached your room, We hope you enjoy your stay";

  document.getElementById("mapResult").innerHTML = mapArray[input1][input2];
}


function assocArray() {
  var input = document.querySelector("input[name='sport']:checked").value;
  console.log(input);

  var sports = {
    golf: "You will need golf clubs, golf balls, and a course with 18-holes",
    tennis: "You will need a tennis racket, a tennis ball, and a court with net",
    basketball: "You will need a basketball hoop, a basketball, and a court",
    football: "You will need a helmet and pads, a football, and a field"
  };

  document.getElementById("assocArray").innerHTML = input + " = " + sports[input];

}


/* ************************************* */
//JSON HTML SCRIPT
var books = [{
    ISBN: "9781420922530",
    Title: "Hamlet",
    Author: "William Shakespeare",
    Description: "Considered one of Shakespeare's most rich and enduring plays, the depiction of its hero Hamlet as he vows to avenge the murder of his father by his brother Claudius is both powerful and complex. As Hamlet tries to find out the truth of the situation, his troubled relationship with his mother comes to the fore, as do the paradoxes in his personality. A play of carefully crafted conflict and tragedy, Shakespeare's intricate dialogue continues to fascinate audiences to this day.",
    Published: "1603",
    Rating: "4.5 stars"
  },

  {
    ISBN: "9780199535569",
    Title: "Pride and Prejudice",
    Author: "Jane Austen",
    Description: "Known to Jane Austin as \"her own darling child\", Pride and Prejudice is a brilliant work that compares to no other. It is a romantic clash between the opinionated Elizabeth Bennet, and her proud beau, Mr. Darcy. Austen's radiant wit sparkles as she weaves a story of the most superb comedy of Regency England manners.",
    Published: "1813",
    Rating: "5 stars"
  },

  {
    ISBN: "9780141321103",
    Title: "The Adventures of Tom Sawyer",
    Author: "Mark Twain",
    Description: "Tom Sawyer is sure to find trouble where the river leads him. On the banks of the Mississippi River, Tom and his friends seek out adventure at every turn.",
    Published: "1876",
    Rating: "4 stars"
  },

  {
    ISBN: "9781853260391",
    Title: "A Tale of Two Cities",
    Author: "Charles Dickens",
    Description: "'Liberty, equality, fraternity, or death; -- the last much the easiest to bestow, O Guilotine!' After eighteen years as a political prisoner in the Bastille, the ageing Doctor Manette is finally released and reunited with this daughter in England. From the tranquil roads of London, they are drawn against their will to the vengeful, bloodstained streets of Paris.",
    Published: "1859",
    Rating: "4 stars"
  },

  {
    ISBN: "9781853260193",
    Title: "Vanity Fair",
    Author: "William Makepeace Thackeray",
    Description: "A novel that chronicles the lives of two women who could not be more different: Becky Sharp, an orphan whose only resources are her vast ambitions, her native wit, and her loose morals; and her schoolmate, Amelia Sedley, a typically naive Victorian heroine, the pampered daughter of a wealthy family",
    Published: "1859",
    Rating: "4 stars"
  },

];


function selection() {
  var input = document.getElementById("bookSelection").value;
  var parsedFile = JSON.parse(input);
  for (var i = 0; i < books.length; i++) {
    var object = books[i];
    for (var property in object) {
      if (object.ISBN == input) {
        if ("ISBN" == String(property)) {
          document.getElementById("json_parse").innerHTML += "<hr>";
        }
        document.getElementById("json_parse").style.color = "#808080";
        document.getElementById("json_parse").innerHTML += property + ":  " + object[property] + "<br>";
      }
    }
  }
}

function autoStringify() {

  var autos = [{
      style: "hybrid",
      name: "Toyota Prius c",
      model: "LE",
      year: "2019",
      basePrice: "$22,955"
    },
    {
      style: "hybrid",
      name: "Honda Insight Touring",
      model: "E-CVT",
      year: "2019",
      basePrice: "$28,190"
    },
    {
      style: "hybrid",
      name: "Chevy Malibu",
      model: "FWD Hybrid",
      year: "2019",
      basePrice: "$28,590"
    },
    {
      style: "hybrid",
      name: "Subaru Crosstrek",
      model: "hybrid",
      year: "2019",
      basePrice: "$38,470"
    }
  ];

  document.getElementById("autoOutput").innerHTML = JSON.stringify(autos);

}


function json_stringify() {
  document.getElementById("json_stringify").innerHTML = JSON.stringify(books);
}