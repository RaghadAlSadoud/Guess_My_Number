'use strict';

const message = document.querySelector('.message');

const number = document.querySelector('.number');

const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const again = document.querySelector('.again');

const button = document.querySelector('.check');

let score1 = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * (6 - 1 + 1) + 1);
console.log(secretNumber);

button.addEventListener('click', function () {
  const guessvalue = guess.value;

  if (!guessvalue) {
    message.textContent = 'No Number';
    score1--;
    score.textContent = score1;
  } else if (Number(guessvalue) === secretNumber) {
    message.textContent = 'Correct Number';

    number.textContent = secretNumber;
    document.querySelector('body').style.background = 'red';
    number.style.width = '30rem';

    if (score1 > highscore) {
      highscore = score1;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (Number(guessvalue) > secretNumber) {
    if (score1 > 0) {
      message.textContent = 'Two high!';
      score1--;
      score.textContent = score1;
    } else {
      message.textContent = 'Lost all your chance';
    }
  } else if (Number(guessvalue) < secretNumber) {
    if (score1 > 0) {
      message.textContent = 'Two low!';
      score1--;
      score.textContent = score1;
    }
  } else {
    message.textContent = 'Lost all your chance';
  }
});

again.addEventListener('click', function () {
  score1 = 20;
  secretNumber = Math.trunc(Math.random() * (6 - 1 + 1) + 1);
  message.textContent = 'Start guessing ..';
  score.textContent = score1;
  number.textContent = '?';
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
