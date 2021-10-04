var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function errorHandler(error){
    console.log("error occured ",error);
    alert("some error occured, please try again after sometimes")
}

function getTranslationURL(input){
    return serverURL+"?"+"text="+input
}

function clickHandler(){
    var inputText=txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(resonse => resonse.json())
    .then(json => 
        {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
