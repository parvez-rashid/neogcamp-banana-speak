// Reference to button created in HTML
var btnTranslate = document.querySelector("#btn-translate");

// Reference to textarea created in HTML
var textInput = document.querySelector("#txt-input");

console.log(textInput);

// Listening to "click" event (i.e. detecting click on the button), and executing a function when event occurs (callback)
function clickEventHandler() {
    console.log("clicked!");
    console.log("input", textInput.value);
}

btnTranslate.addEventListener("click", clickEventHandler)

