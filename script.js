'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '👏Correct Number !';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 15;

let screctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const showScore = document.querySelector('.score');
const showGuess = document.querySelector('.guess');
const showHighScore = document.querySelector('.highscore');

function guessNumber() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '❌No Number';
  } else if (guess === screctNumber) {
    message.textContent = '🎉🎉Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = guess;
    highScore = score;
    showHighScore.textContent = highScore;
  } else if (guess !== screctNumber) {
    if (score > 1) {
      message.textContent = guess > screctNumber ? '📈Too high!' : '📉Too low!';
      score -= 1;
      showScore.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      showScore.textContent = score;
    }
  }
}

function playAgain() {
  document.body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  score = 20;
  showScore.textContent = 20;
  message.textContent = 'Start guessing...';
  showGuess.value = '';
  showHighScore.textContent = 0;
  highScore = 0;
  screctNumber = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.check').addEventListener('click', guessNumber);
document.querySelector('.again').addEventListener('click', playAgain);
