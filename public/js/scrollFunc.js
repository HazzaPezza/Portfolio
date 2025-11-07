function handleScroll() {
  // Start with the shrunk status being false.
  let hasShrunk = false;

  // Listen for scroll events on the window and add trigger point at 10%.
  window.addEventListener("scroll", () => {
    const entry = document.querySelector(".entry-content");
    const triggerPoint = window.innerHeight * 0.1;

    // Only shrink once add CSS shrunk class to affected elements.
    if (!hasShrunk && window.scrollY > triggerPoint) {
      entry.classList.add("shrunk");
      hasShrunk = true;
    }
  });
}

handleScroll();

// Function to make items appear on scoll.
function appearOnScroll() {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    rootmargin: "0px 0px -100px 0px",
    scrollmargin: "0px 0px -100px 0px",
    threshold: 0.5,
  };

  function beginFadeIn(faders) {
    faders.forEach((fader) => {
      if (fader.isIntersecting) {
        fader.target.classList.add("appear");
      }
    });
  }

  const observer = new IntersectionObserver(beginFadeIn, appearOptions);
  faders.forEach((fader) => {
    observer.observe(fader);
  });
}

appearOnScroll();
