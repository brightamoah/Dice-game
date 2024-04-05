"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";


// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;


// document.querySelector(".guess").value ;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number";
    }
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!"
    }
    else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector(".message").textContent = "➡️ Too high";

            score -= 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "😭 You Loose!!";
        }

        const highScore = document.querySelector(".label.highscore").textContent = score;
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "⬅️ Too low";

            score -= 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "😭 You Loose!!";
        }
    }


});

// const highScore = document.querySelector(".label.highscore").textContent;


