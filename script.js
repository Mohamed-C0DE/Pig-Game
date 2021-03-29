'use strict';

//Selecting Elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

//Beginning of Game Dice isn't shown
dice.style.display = 'none';

//Rolling Dice
const roll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const rollDice = function () {
  roll();
  dice.style.display = 'block';
  switch (roll()) {
    case 1:
      dice.src = 'dice-1.png';
      if (player1.classList.contains('player--active')) {
        currentScore1.textContent = 0;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
      } else if (player2.classList.contains('player--active')) {
        currentScore2.textContent = 0;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
      }
      break;
    case 2:
      dice.src = 'dice-2.png';
      if (player1.classList.contains('player--active')) {
        currentScore1.textContent = 2 + Number(currentScore1.textContent);
      } else if (player2.classList.contains('player--active')) {
        currentScore2.textContent = 2 + Number(currentScore2.textContent);
      }
      break;
    case 3:
      dice.src = 'dice-3.png';
      if (player1.classList.contains('player--active')) {
        currentScore1.textContent = 3 + Number(currentScore1.textContent);
      } else if (player2.classList.contains('player--active')) {
        currentScore2.textContent = 3 + Number(currentScore2.textContent);
      }
      break;
    case 4:
      dice.src = 'dice-4.png';
      if (player1.classList.contains('player--active')) {
        currentScore1.textContent = 4 + Number(currentScore1.textContent);
      } else if (player2.classList.contains('player--active')) {
        currentScore2.textContent = 4 + Number(currentScore2.textContent);
      }
      break;
    case 5:
      dice.src = 'dice-5.png';
      if (player1.classList.contains('player--active')) {
        currentScore1.textContent = 5 + Number(currentScore1.textContent);
      } else if (player2.classList.contains('player--active')) {
        currentScore2.textContent = 5 + Number(currentScore2.textContent);
      }
      break;
    case 6:
      dice.src = 'dice-6.png';
      if (player1.classList.contains('player--active')) {
        currentScore1.textContent = 6 + Number(currentScore1.textContent);
      } else if (player2.classList.contains('player--active')) {
        currentScore2.textContent = 6 + Number(currentScore2.textContent);
      }
      break;
  }
};

//Changing Score and Deciding Winner
const changeScore = function () {
  if (player1.classList.contains('player--active')) {
    if (Number(score1.textContent) + Number(currentScore1.textContent) >= 100) {
      player1.classList.add('player--winner');
      dice.style.display = 'none';
      rollBtn.removeEventListener('click', rollDice, false);
      btnHold.removeEventListener('click', changeScore, false);
    } else {
      score1.textContent =
        Number(score1.textContent) + Number(currentScore1.textContent);
      currentScore1.textContent = 0;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else if (player2.classList.contains('player--active')) {
    if (Number(score2.textContent) + Number(currentScore2.textContent) >= 100) {
      player2.classList.add('player--winner');
      dice.style.display = 'none';
      rollBtn.removeEventListener('click', rollDice, false);
      btnHold.removeEventListener('click', changeScore, false);
    } else {
      score2.textContent =
        Number(score2.textContent) + Number(currentScore2.textContent);
      currentScore2.textContent = 0;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
};

//Create new Game
const reset = function () {
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  dice.style.display = 'none';
  if (player1.classList.contains('player--winner')) {
    player1.classList.remove('player--winner');
  } else if (player2.classList.contains('player--winner')) {
    player2.classList.remove('player--winner');
  }
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
  rollBtn.addEventListener('click', rollDice);
  btnHold.addEventListener('click', changeScore);
};

//Event listeners
rollBtn.addEventListener('click', rollDice);
btnHold.addEventListener('click', changeScore);
btnNew.addEventListener('click', reset);
