//create symbol_data search object
var symbol_data = {};
//create quote_data result object
var quote_data = {};
//create api key variable
//var apiKey = "QFPJWVPFU3XA9OBM";
//obtain search information from user
var name = document.getElementById("searchText").nodeValue;
//request JSON data from AlphaVantage
var url_name = "https://alphavantange.co/query?function=SYMBOL_SEARCH&keywords" + name + "&apikey=" + apiKey;

function nameRequest() {
    var request = new XMLHttpRequest();
    request.open("GET", url_name, true);
    request.send();
}
//parse request data
/* request.onload = function () {
    if (request.status == 200) {
        symbol_data = JSON.parse(response.text);
    } else {
        alert("There was a communication error.");
    }
} */

var symbol_name = document.getElementById("symbol").nodeValue;
var url_quote = "https://alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + symbol_name + "&apikey=" + apiKey;

//display search names
function globalData() {
    var request = new XMLHttpRequest();
    request.open("GET", url_quote, true);
}

//market object
var stock = [{
        symbol: "AMZN",
        name: "Amazon.com, Inc.",
        type: "equity",
        region: "United States",
        marketOpen: "09:30",
        marketClose: "16:00",
        timeZone: "UTC-5",
        currency: "USD",
        price: "1626.23",
        date: "01 February 2019"
    },
    {
        symbol: "AAPL",
        name: "Apple, Inc.",
        type: "equity",
        region: "United States",
        marketOpen: "09:30",
        marketClose: "16:00",
        timeZone: "UTC-5",
        currency: "USD",
        price: "166.52",
        date: "01 February 2019"
    },
    {
        symbol: "FB",
        name: "Facebook",
        type: "Equity",
        region: "United States",
        marketOpen: "09:30",
        marketClose: "16:00",
        timeZone: "UTC-5",
        currency: "USD",
        price: "165.71",
        date: "01 February 2019"
    },
    {
        symbol: "FB",
        name: "Facebook",
        type: "Equity",
        region: "United States",
        marketOpen: "09:30",
        marketClose: "16:00",
        timeZone: "UTC-5",
        currency: "USD",
        price: "165.71",
        date: "01 February 2019"
    }
];

function stock() {
    document.getElementById("amazon").nodeValue;
    document.getElementById("apple").nodeValue;
    document.getElementById("facebook").nodeValue;
    document.getElementById("ibm").nodeValue;
    document.getElementById("microsoft").nodeValue;


}