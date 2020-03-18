const chronometer = new Chronometer();

let intervalIdDom = 0;

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');




function printTime() {
  
  intervalIdDom = setInterval(() => {
    
    printMinutes();
    printSeconds();
  },1000)



};

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];

  // minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  // minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];

}

function printSeconds() {
  let sec  = chronometer.twoDigitsNumber(chronometer.getSeconds());
  minDec.innerHTML = sec[0];
  minUni.innerHTML = sec[1];

  // minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  // minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement('li');
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);



}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.classList.contains('start')) {
    printTime();
    chronometer.startClick();
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerHTML = "STOP";

    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';

  } else {

    chronometer.stopClick();
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerHTML = "START";

    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerHTML = "RESET";

  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  printSplit();


});
