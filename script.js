'use strict';

let screctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (showScore) {
  document.querySelector('.score').textContent = showScore;
};

const displayGuessNumber = function (showGuessNumber) {
  document.querySelector('.guess').value = showGuessNumber;
};

const displayHighScore = function (showHighScore) {
  document.querySelector('.highscore').textContent = showHighScore;
};

function guessNumber() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❌No Number');
  } else if (guess === screctNumber) {
    displayMessage('🎉🎉Correct Number!');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(guess);
    highScore = score;
    displayMessage(highScore);
  } else if (guess !== screctNumber) {
    if (score > 1) {
      displayMessage(guess > screctNumber ? '📈Too high!' : '📉Too low!');
      score -= 1;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(score);
    }
  }
}

function playAgain() {
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
  score = 20;
  displayScore(20);
  displayMessage('Start guessing...');
  displayGuessNumber('');
  displayHighScore(0);
  highScore = 0;
  screctNumber = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.check').addEventListener('click', guessNumber);
document.querySelector('.again').addEventListener('click', playAgain);
