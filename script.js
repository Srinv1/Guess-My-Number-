/*'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
*/

let seretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // no number
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number⛔️';
    displayMessage('No Number⛔️');
  }
  //   changing bc if win
  else if (guess === seretNumber) {
    // document.querySelector('.message').textContent = 'correct Number!🎉';
    displayMessage('correct Number!🎉');

    document.querySelector('.number').textContent = seretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== seretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > seretNumber ? 'too high🔼' : 'too low🔻';
      displayMessage(guess > seretNumber ? 'too high🔼' : 'too low🔻');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      // document.querySelector('.message').textContent = 'GAME OVER🔪';
      displayMessage('GAME OVER🔪');
      document.querySelector('.number').textContent = seretNumber;

      document.querySelector('.score').textContent = 0;
    }
  }
  //   number too high
  // else if (guess > seretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high🔼';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.message').textContent = 'GAME OVER🔪';
  //     document.querySelector('.number').textContent = seretNumber;

  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //   too low
  // else if (guess < seretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low🔻';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.message').textContent = 'GAME OVER🔪';
  //     document.querySelector('.number').textContent = seretNumber;

  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  seretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
