window.addEventListener('load', init);

let time=2;
let score=0;
let isPlaying;
let count = 0;
let current;

const wordInput = document.querySelector('#word-input');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const IntArray = ['1','4','1','5','9','2','6' ,'5' ,'3' ,'5' ,'8' ,'9' ,'7' ,'9' ,'3' ,'2' ,'3' ,'8' ,'4' ,'6' ,'2' ,'6' ,'4' ,'3' ,'3' ,'8' ,'3' ,'2' ,'7' ,'9' ,'5' ,'0' ,'2' ,'8' ,'8' ,'4' ,'1' ,'9' ,'7' ,'1 ','6' ,'9' ,'3' ,'9' ,'9' ,'3' ,'7' ,'5' ,'1' ,'0' ,'5' ,'8' ,'2' ,'0' ,'9' ,'7' ,'4' ,'9' ,'4' ,'4' ,'5' ,'9' ,'2' ,'3' ,'0' ,'7' ,'8' ,'1' ,'6' ,'4' ,'0' ,'6' ,'2' ,'8' ,'6' ,'2' ,'0' ,'8' ,'9' ,'9' ,'8' ,'6' ,'2' ,'8' ,'0' ,'3' ,'4' ,'8' ,'2' ,'5' ,'3' ,'4' ,'2' ,'1' ,'1' ,'7' ,'0' ,'6' ,'7' ,'9' ,'8' ,'2' ,'1' ,'4' ,'8' ,'0' ,'8' ,'6' ,'5' ,'1' ,'3' ,'2' ,'8' ,'2' ,'3' ,'0' ,'6' ,'6' ,'4' ,'7' ,'0' ,'9' ,'3' ,'8' ,'4' ,'4' ,'6' ,'0' ,'9' ,'5' ,'5' ,'0' ,'5' ,'8' ,'2' ,'2' ,'3' ,'1' ,'7' ,'2' ,'5' ,'3' ,'5' ,'9' ,'4' ,'0' ,'8 ','1' ,'2' ,'8' ,'4' ,'8' ,'1' ,'1' ,'1' ,'7' ,'4' ,'5' ,'0 ','2' ,'8' ,'4' ,'1' ,'0' ,'2' ,'7' ,'0' ,'1' ,'9' ,'3' ,'8' ,'5' ,'2' ,'1' ,'1' ,'0' ,'5' ,'5' ,'5' ,'9' ,'6' ,'4' ,'4' ,'6' ,'2' ,'2' ,'9' ,'4' ,'8' ,'9' ];

function init() {

  seconds.innerHTML = time;
  wordInput.addEventListener('input', start);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 20);
  
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function start() {
  if (match()) {
    isPlaying = true;
    time = 2;
	wordInput.value = '';
    score++;
	
  }
  
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }



 
}


function match() {
  if ( wordInput.value === IntArray[count]) {
    message.innerHTML = 'You are good!';
	count++;
    return true;
  } else {
    message.innerHTML = '';
	count = 0;
    return false;
  }
}




function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}


function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'It is time! Try again!';
    score = -1;
  }
}