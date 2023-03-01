'use strict';

let myNumber = Math.floor(Math.random() * 20);

function again() {
  myNumber = Math.floor(Math.random() * 20);
  score = 20;
  document.getElementById('score').innerHTML = 20;
  let getValue = document.getElementById('guessnumber');
  if (getValue.value != '') {
    getValue.value = '';
  }
  document.getElementById('message').innerHTML = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  document.getElementById('quote').innerText = '?';
}

let highScore = 0;
let score = 20;
document.getElementById('score').innerText = score;
function check() {
  const secret = myNumber;
  const guess = document.getElementById('guessnumber').value;
  if (guess > secret) {
    document.getElementById('message').innerHTML = 'Too high!!';
    score--;
    document.getElementById('score').innerText = score;
  } else if (guess < secret) {
    document.getElementById('message').innerHTML = 'Too low!!';
    score--;
    document.getElementById('score').innerText = score;
  } else {
    document.getElementById('message').innerHTML = myNumber;
    document.getElementById('quote').innerHTML = myNumber;
    document.body.style.backgroundColor = 'green';
    checkscore();
  }
}

function checkscore() {
  if (score > highScore) {
    highScore = score;
    document.getElementById('highscore').innerHTML = highScore;
  }
  return highScore;
}
