"use strict";


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

console.log(highScore, typeof highScore);

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number";
    }
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";


        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too high";
            score -= 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "😭 You Loose!!";

            document.querySelector("body").style.backgroundColor = "#880808";
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too low";

            score -= 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "😭 You Loose!!";
            document.querySelector("body").style.backgroundColor = "#880808";
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log("secret Number:", secretNumber);

    score = 20;

    document.querySelector(".message").textContent = "Start guessing ....";

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";

    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = "?";

    document.querySelector(".guess").value = '';

    console.log("high Score:", document.querySelector(".highscore").textContent = highScore,);

});


