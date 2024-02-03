
// detecting button press 
var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;   // variable to hold this value
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);       // button animation me detial pass ki 


    });

}

// detecting key press

document.addEventListener("keydown", function (event) {        //keydown ,,function pass kiya ho ki event
    var keyboardkey = event.key;                      // event me jo key press hua hai , uski info hoti hai
    makesound(keyboardkey);
    buttonAnimation(keyboardkey);
});


// function for button animation

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);        // class  input aayega usme . laga ke acess karte hai isliye . append kar diya string me 
    activeButton.classList.add("pressed");  // css file ki pressed class ko add kar dega 
    setTimeout(function () { activeButton.classList.remove("pressed"); }, 100); // 0.1 sec ke baad class remove method call ho jayegi

}


function makesound(key) {
    switch (key) {
        case "w":

            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":

            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/tom-1.mp3");         // creating a varibale tom1 to store tom1 sound 
            tom1.play();                                          // ussing object propertiy to play the sound 
            break;
        case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "l":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    }

}