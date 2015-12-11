document.getElementById('stopButton').onclick = turnRed;

function turnRed () {
 document.getElementById('stopLight').style.backgroundColor = 'deeppink';
 document.getElementById('slowLight').style.backgroundColor = 'black';
 document.getElementById('goLight').style.backgroundColor = 'black';
 /*turn yellow one black*/
 /*turn green one black*/
}

document.getElementById('slowButton').onclick = turnYellow;

function turnYellow () {
 document.getElementById('slowLight').style.backgroundColor = 'goldenrod';
 document.getElementById('stopLight').style.backgroundColor = 'black';
 document.getElementById('goLight').style.backgroundColor = 'black';
}

document.getElementById('goButton').onclick = turnGreen;

function turnGreen () {
  document.getElementById('goLight').style.backgroundColor = 'teal';
  document.getElementById('stopLight').style.backgroundColor = 'black';
  document.getElementById('slowLight').style.backgroundColor = 'black';
}