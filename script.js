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
      title: "HERO PROFILE",
      content: `
              <p>WELCOME! I'm Ngawang Tenzin, a passionate Android and Web Developer. I am overwhelmed with startup project ideas that prevents me from being a Founder/CEO.</p>
              <hr />
              <div class="nes-container with-title is-dark">
                <p class="title">Social Links</p>
                <div class="social-links-grid">
                  <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" class="nes-btn">
                    <i class="nes-icon linkedin"></i> LinkedIn
                  </a>
                  <a href="https://www.facebook.com/your-facebook" target="_blank" class="nes-btn">
                    <i class="nes-icon facebook"></i> Facebook
                  </a>
                  <a href="https://www.youtube.com/your-channel" target="_blank" class="nes-btn">
                    <i class="nes-icon youtube"></i> YouTube
                  </a>
                  <a href="https://www.instagram.com/your-instagram" target="_blank" class="nes-btn">
                    <i class="nes-icon instagram"></i> Instagram
                  </a>
                  <a href="https://www.tiktok.com/@your-tiktok" target="_blank" class="nes-btn">
                    <i class="nes-icon star"></i> TikTok
                  </a>
                  <a href="https://your-portfolio-website.com" target="_blank" class="nes-btn">
                    <i class="nes-icon star"></i> Portfolio
                  </a>
                </div>
              </div>
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
    projects: {
      title: "QUEST LOG",
      content: `
      <div class="nes-container with-title is-dark project-card">
        <p class="title">JCUB Student Board | Academic Project | WordPress | CMS</p>
        <a href="https://github.com/cbms26/my-child-theme" class="nes-btn" target="_blank" rel="noopener noreferrer">Know More</a>
      </div>
      <div class="nes-container with-title is-dark project-card">
        <p class="title">Utility App | Academic Project | Java | Mobile Dev</p>
        <a href="#" class="nes-btn">Know More</a>
      </div>
      <div class="nes-container with-title is-dark project-card">
        <p class="title">Barma Sorig Web App | Self Project | Full-Stack Dev</p>
        <a href="#" class="nes-btn">Know More</a>
      </div>
      <div class="nes-container with-title is-dark project-card">
        <a href="#" class="nes-btn"> Explore minor projects achieved by this Hero.</a>
      </div>
      `,
    },
    experience: {
      title: "THE JOURNEY",
      content: `
      <div class="nes-list is-disc">
        <p>I may not have years of experience yet, but I have the drive to learn and the courage to begin.</p> 
        <p>With every challenge, I grow! Not just in skill, but in mindset.
        This is just the start, and I'm here for the long run.</p>      
      </div>`,
    },
    contact: {
      title: "SUMMONING CIRCLE",
      content: `
      <h2>Get In Touch</h2>
      <p>
        Are you also overwhelmed with ideas, a curious coder or crazy towards
        MLBB? Reach out lets get lost in those ideas, be curious of everthing,
        and queue together on MLBB. Email to:
      </p>
      <a href="mailto:coder.cbms@gmail.com">coder.cbms@gmail.com</a>
      <div style="margin-top: 2rem;">
        <a href="#"><i class="nes-icon linkedin is-medium"></i></a>
        <a href="#"><i class="nes-icon github is-medium"></i></a>
        <a href="#"><i class="nes-icon twitter is-medium"></i></a>
      </div>
      `,
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
        console.log("Setting title to:", portfolioContent[section].title);
        contentTitle.textContent = portfolioContent[section].title;
        console.log("Content title element:", contentTitle);
        console.log(
          "Content title style:",
          window.getComputedStyle(contentTitle)
        );
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
