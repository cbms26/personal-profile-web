document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const startScreen = document.getElementById("start-screen");
  const startButton = document.getElementById("start-button");
  const gameWorld = document.getElementById("game-world");
  const backButton = document.getElementById("back-button");

  //   Event Listener for start button
  startButton.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameWorld.classList.remove("hidden");
  });

  //   Event Listener for Back Button
  backButton.addEventListener("click", () => {
    gameWorld.classList.add("hidden");
    startScreen.classList.remove("hidden");
  });
});
