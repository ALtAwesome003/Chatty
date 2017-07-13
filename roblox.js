var box = document.querySelector("div#messages-box")

box.insertAdjacentHTML('afterbegin','<p> welcome </p>');

//----------------------------------------------------------


var input = document.querySelector("input");
var button = document.querySelector("button");

button-addEventListener('click', function() {
    box.insertAdjacentHTML('beforeEnd', "<p>" + input.value + "</p>");
    masccotfeedback()
});

//----------------------------------------------------------------------


var mascot = {
    name: 'Clark the Chimchar'
}

function masccotfeedback(){
     box.insertAdjacentHTML('beforeEnd', `<p> what's up my name ${mascot.name} </p>`);
}

