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

  // Event Listener for Navigations
  mapLocations.forEach((location) => {
    location.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all locations
      mapLocations.forEach((loc) => loc.classList.remove("is-active"));

      // Add active class to clicked location
      const clickedLocation = e.currentTarget;
      clickedLocation.classList.add("is-active");

      const section = clickedLocation.dataset.section;
      if (portfolioContent[section]) {
        contentTitle.textContent = portfolioContent[section].title;
        typewriter(portfolioContent[section].content, textContent);
      }
    });
  });
});
