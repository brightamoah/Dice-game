"use strict"

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const newGame = function () {

    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;


    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");


    console.log(scores);
    console.log(`activeplayer:${activePlayer} currentScore: ${currentScore}`);
}
newGame();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    console.log(`activeplayer:${activePlayer} currentScore: ${currentScore}`);

    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

//rolling dicefunctionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        //generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //display the dice roll
        diceEl.classList.remove("hidden");
        diceEl.src = `images/dice-${dice}.png`;
        console.log(`dice: ${dice}`);

        //check for rolled 1: if true, switch to the next player

        if (dice !== 1) {
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

            console.log(`activeplayer:${activePlayer} currentScore: ${currentScore}`);

        } else {

            switchPlayer();
        }
    }


});

//hold button functionality
btnHold.addEventListener('click', function () {
    //add the current score to the scores array

    if (playing) {
        scores[activePlayer] += currentScore;
        console.log(currentScore);
        console.log(scores);

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {

            playing = false;
            diceEl.classList.add("hidden");

            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");

            document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
        } else {
            switchPlayer();
        }
    }

});

//new game button functionality
btnNew.addEventListener("click", newGame);
