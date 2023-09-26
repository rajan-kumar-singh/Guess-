"use strict";

/*
//* DOM
// Document Object Model

console.log(document.querySelector(".message"));
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Hello world";

document.querySelector(".number").textContent = 20;
document.querySelector(".guess").value = 3;
*/

//* variables
let randomNumber,
  chances,
  highscore = 0;

document.querySelector(".hScore").textContent = highscore;
//* initial condition
function init() {
  chances = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage("Game Status...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".chance").textContent = chances;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#111111";
}
init();

console.log(randomNumber);
function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

//* Check btn
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    //* no input
    displayMessage("No Number 🚫");
  } else if (guessNumber === randomNumber) {
    //* correct input
    displayMessage("Correct Number 🏆");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (chances > highscore) {
      highscore = chances;
      document.querySelector(".hScore").textContent = highscore;
    }
  } else if (guessNumber !== randomNumber) {
    if (chances > 1) {
      let msg = guessNumber > randomNumber ? "Too High 👆" : "Too Low 👇";
      displayMessage(msg);
      chances--;
      document.querySelector(".chance").textContent = chances;
    } else {
      displayMessage("Game Over 💥");
      document.querySelector(".chance").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff2c2c";
    }
  }
});

//* Restart btn
document.querySelector(".restart").addEventListener("click", init);
