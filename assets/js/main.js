var breakSet = document.querySelector('div.breakCtrl p');
var sessionSet = document.querySelector('div.sessionCtrl p');
var sessionTime = document.querySelector('.timer');

var breakSetInt = parseInt(document.querySelector('div.breakCtrl p').innerText);
var sessionSetInt = parseInt(document.querySelector('div.sessionCtrl p').innerText);
var displayHeader = document.querySelector('.clock h2');
var pause = false;

const breakMinus = document.querySelector('.breakMinus');
const breakPlus = document.querySelector('.breakPlus');
const sessionMinus = document.querySelector('.sessionMinus');
const sessionPlus = document.querySelector('.sessionPlus');
const clock = document.querySelector('.clock');


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
       clockSet((60 * sessionSetInt), breakSetInt);
       pause = true;
   } else if (pause === true) {
       pause = false;
   }

   clockSet((60 * sessionSetInt), breakSetInt);
});


// refresh the displays readouts with the current values.
function displayUpdate() {
    sessionSet.textContent = sessionSetInt;
    breakSet.textContent = breakSetInt;
    sessionTime.textContent = sessionSetInt;
}

// start clock
function clockSet(duration, breakDur) {
    var breakCheck = false;
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        sessionTime.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            if (!breakCheck) {
                timer = 60 * breakDur;
                breakCheck = true;
                displayHeader.textContent = "Break";
            } else if (breakCheck) {
                timer = duration;
                breakCheck = false;
                displayHeader.textContent = "Session";
            }
        }
    }, 1000);
}