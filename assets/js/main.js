var breakSet = document.querySelector('div.breakCtrl p');
var sessionSet = document.querySelector('div.sessionCtrl p');
var sessionTime = document.querySelector('.timer');

var breakSetInt = parseInt(document.querySelector('div.breakCtrl p').innerText);
var sessionSetInt = parseInt(document.querySelector('div.sessionCtrl p').innerText);
var title = document.querySelector('.clock h2');
var pause = false;
var seconds = 0;
var minutes = 25;
var startTimer;

const breakMinus = document.querySelector('.breakMinus');
const breakPlus = document.querySelector('.breakPlus');
const sessionMinus = document.querySelector('.sessionMinus');
const sessionPlus = document.querySelector('.sessionPlus');
const clock = document.querySelector('.clock');
const audio = document.querySelector('audio');


breakMinus.addEventListener("click", function() {
    console.log('breakMinus was clicked!');
    breakSetInt--;
    breakSet.textContent = breakSetInt;
});

breakPlus.addEventListener("click", function() {
   console.log('breakPlus was clicked!');
   breakSetInt++;
   displayUpdate();
});

sessionMinus.addEventListener("click", function() {
   console.log('sessionMinus was clicked!');
    sessionSetInt--;
    displayUpdate();
});

sessionPlus.addEventListener("click", function() {
   console.log('sessionPlus was clicked!');
    sessionSetInt++;
    displayUpdate();
});

clock.addEventListener("click", function() {
   console.log('Clock was clicked!');
    if (pause === false) {
        startTimer = setInterval(timer, 1000);
        pause = true;
    } else if (pause === true) {
        clearInterval(startTimer);
        pause = false;
    }
});


// refresh the displays readouts with the current values.
function displayUpdate() {
    sessionSet.textContent = sessionSetInt;
    breakSet.textContent = breakSetInt;
    sessionTime.textContent = sessionSetInt;
    minutes = sessionSetInt;
}

// timer function, controls countdown and session-to-break switching
function timer(){
    if(minutes === 0 && seconds === 1){
        audio.play();
    }

    if(minutes === 0 && seconds === 0){
        if(title.textContent === 'Session'){
            title.textContent = 'Break';
            minutes = breakSetInt;
            sessionTime.textContent = minutes + ":0" + seconds;
        } else if (title.textContent === 'Break') {
            title.textContent = 'Session';
            minutes = sessionSetInt;
            sessionTime.textContent = minutes + ":0" + seconds;
        }
    } else {
        if(seconds === 0){seconds = 60; minutes--}
        seconds--;
        if(seconds < 10){sessionTime.textContent = minutes + ":0" + seconds;}
        else{
            sessionTime.textContent = minutes + ":" + seconds;
        }
    }
}