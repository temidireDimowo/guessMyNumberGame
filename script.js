'use strict';

/*/ First ever DOM manipulation
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Congratulations 🍕🍕';
console.log(document.querySelector('.message').textContent);

document.querySelector().addEventListener{"click",}

*/
//Logic for reducing the score

let score = 20;

// Logic for the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// logic for highScore
let highScore = 0;

// using the check button to
let gameLogic = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // Game logic

    //When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number';
    }
    // when the user wins the game
    else if (guess === secretNumber && guess > 0) {
      document.querySelector('.message').textContent = '🎉🎉 Correct Number';
      // changing the backgroundColor of the entire page

      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '24rem';
      document.querySelector('.number').textContent = secretNumber;

      // setting the highscore is
      // if score is greater than highscore, then highscore will be the new score
      if (score > highScore) {
        document.querySelector(
          '.label-highscore'
        ).textContent = `🥇 Highscore: ${score}`;
        highScore = score;
      }
    }

    //when the guess is too high
    else if (guess > secretNumber && guess > 0) {
      document.querySelector('.message').textContent =
        'Your guess is too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //when the guess is too low
    else if (guess < secretNumber && guess > 0) {
      document.querySelector('.message').textContent =
        'Your guess is too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Enter a valid Number';
    }
  } else {
    document.querySelector('.score').textContent = '0';
    document.querySelector('.message').textContent = 'You lost the game';
  }
};

document.querySelector(`.check`).addEventListener(`click`, gameLogic);

// using the enter key to check the game logic

document.addEventListener(`keypress`, function (e) {
  if (e.key == `Enter`) {
    gameLogic();
  }
});
/* Resetting the game and the values */

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;

  // logic for resetting the score
  document.querySelector('.score').textContent = '20';
  score = 20;
});
