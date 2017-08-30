var breakSet = document.querySelector('div.breakCtrl p');
var sessionSet = document.querySelector('div.sessionCtrl p');
var sessionTime = document.querySelector('.timer');

var breakSetInt = parseInt(document.querySelector('div.breakCtrl p').innerText);
var sessionSetInt = parseInt(document.querySelector('div.sessionCtrl p').innerText);
var sessionTimeInt = parseInt(document.querySelector('.timer').innerText);

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
});


// refresh the displays readouts with the current values.
function displayUpdate() {
    sessionSet.textContent = sessionSetInt;
    breakSet.textContent = breakSetInt;
    sessionTime.textContent = sessionSetInt;
}

function clock(sessionLength, breakLength) {

}