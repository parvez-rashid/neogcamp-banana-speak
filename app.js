// Reference to button created in HTML
var btnTranslate = document.querySelector("#btn-translate");

// Reference to textarea created in HTML
var textInput = document.querySelector("#txt-input");

var textDiv = document.querySelector("#txt-div");


// Listening to "click" event (i.e. detecting click on the button), and executing a function when event occurs (callback). Here, clickEventHandler is the callback function as it is given to addEventListener as an input/argument.
function clickEventHandler() {
    // console.log("clicked!");
    // console.log("input", textInput.value);
    textDiv.innerText = "Translated to " + textInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);

