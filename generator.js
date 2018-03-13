var resultField = document.getElementById("result-text");
var buttonMihir = document.getElementById("get-mihir");
var buttonMichael = document.getElementById("get-michael");
var buttonRoro = document.getElementById("get-roro");
var buttonBill = document.getElementById("get-bill");

var getResponse = function(personName) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://dankest-generator.herokuapp.com/chat?source=" + personName, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var httpGetAsync = function (personName, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.response["content"]);
    }
    xmlHttp.open( "GET", "https://dankest-generator.herokuapp.com/chat?source=" + personName, true );
    xmlHttp.responseType = "json";
    xmlHttp.send( null );
}

var updateField = function(newText) {
    resultField.innerText = newText;
}

var buttonPressMihir = function() {
    httpGetAsync("mihir", updateField);
}

var buttonPressMichael = function() {
    httpGetAsync("michael", updateField);
}

var buttonPressRoro = function() {
    httpGetAsync("roro", updateField);
}

var buttonPressBill = function() {
    httpGetAsync("bill", updateField);
}

buttonMihir.addEventListener("click", buttonPressMihir);
buttonMichael.addEventListener("click", buttonPressMichael);
buttonBill.addEventListener("click", buttonPressBill);
buttonRoro.addEventListener("click", buttonPressRoro);