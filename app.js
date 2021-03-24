// document.querySelector(".guess").value = 24;

let score = 20;

let secNum = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === secNum) {
    document.querySelector(".message").textContent = "correct Number";
    document.querySelector("body").style.background = "lightgreen";
    document.querySelector(".number").textContent = secNum;
    document.querySelector("body").style.color = "darkblue";

    if (score > highscore) {
      highscore = score;
      document.querySelector(
        ".highscore"
      ).textContent = `High Score : ${highscore}`;
    }
  } else if (guess > secNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score = score - 1;
      document.querySelector(".sc").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
    }
  } else if (guess < secNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score = score - 1;
      document.querySelector(".sc").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
    }
  }
});

document.querySelector(".btn").addEventListener("click", function () {
  score = 20;
  secNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".sc").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing..";

  document.querySelector("body").style.background = "white";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.background = "black";
  document.querySelector("body").style.color = "lightgreen";
});
