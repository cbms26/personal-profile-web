document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const startScreen = document.getElementById("start-screen");
  const startButton = document.getElementById("start-button");
  const gameWorld = document.getElementById("game-world");
  const backButton = document.getElementById("back-button");

  const contentTitle = document.getElementById("content-title");
  const textContent = document.getElementById("text-content");
  const mapLocations = document.querySelectorAll(".map-location");

  // Content for each section to display
  // Utilizing HTML strings to leverage NES.css components inside of the content
  const portfolioContent = {
    about: {
      title: "HERO's PRofile",
      content: `
              <p>WELCOME! I'm Ngawang Tenzin, a passionate Android and Web Developer. I am overwhelmed with startup project ideas that prevents me from being a Founder/CEO.</p>
              <p>Powered by <i class="nes-icon heart"></i> coffee and curiosity, I chase inspiration one line of code at a time.</p>
              
      `,
    },
    skills: {
      title: "SKILL TREE",
      content: `
      <div class="skill-item">
        <img src="https://media.tenor.com/PbeG0TZYTSEAAAAM/typing-on-a-computer-courage.gif" alt="Courage The Cowardly Dog Typing" />
        <p>Designing & Development</p>
        <p>I started learning to code when I was studying my Bachelor's degree in 2016. However, I lost track of myself until recently I started to take my coding career seroiusly. So, the curiosity on how things work behind the scene helps me keep push forward, and I will continue to keep on Learning.</p>
      </div>
        <div class="skill-item">
          <img src="https://media.tenor.com/sSyknxvD2xEAAAAM/ml101-moba101.gif" alt="Hero Layla Laughing MLBB Sticker" />
          <h3>Mobile Legends: Bang Bang</h3>
          <p>If you have no idea what that is, it's a mobile game. I'm completely in love with that game....hehe!
          </p>
        </div>`,
    },
  };

  // Typing Effect
  let isTyping = false;
  let typingTimeout;

  function typewriter(text, element) {
    if (isTyping) {
      clearTimeout(typingTimeout);
      isTyping = false;
    }

    element.innerHTML = "";
    let i = 0;
    isTyping = true;

    function type() {
      if (i < text.length) {
        // check for HTML tags
        if (text.charAt(i) === "<") {
          const endIndex = text.indexOf(">", i);
          element.innerHTML += text.substring(i, endIndex + 1);
          i = endIndex;
        } else {
          element.innerHTML += text.charAt(i);
        }
        i++;
        element.scrollTop = element.scrollHeight; //autoscroll
        typingTimeout = setTimeout(type, 20); //typing speed
      } else {
        isTyping = false;
      }
    }
    type();
  }

  // -----------EVENT LISTENERS!!!!! ----------------- //

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

  // Hamburger Menu Functionality - Only open/close
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const heroStatsNav = document.getElementById("hero-stats-nav");

  if (mobileMenuToggle && heroStatsNav) {
    // Toggle hamburger menu on click
    mobileMenuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      mobileMenuToggle.classList.toggle("active");
      heroStatsNav.classList.toggle("mobile-menu-open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        if (!heroStatsNav.contains(e.target)) {
          mobileMenuToggle.classList.remove("active");
          heroStatsNav.classList.remove("mobile-menu-open");
        }
      }
    });
  }
});
