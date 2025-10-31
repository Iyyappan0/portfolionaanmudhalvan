document.addEventListener("DOMContentLoaded", () => {
  // Typewriter for the main name
  const text = "Iyyappan V";
  const speed = 120;
  let i = 0;
  const element = document.querySelector(".glow");

  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // ensure it starts blank then types
  if (element) {
    element.textContent = "";
    typeWriter();
  }

  // Reveal on scroll animation (matches class names used in HTML/CSS)
  const revealElements = document.querySelectorAll(
    ".section-title, .skill-btn, .project-card, .contact-btn"
  );

  function revealOnScroll() {
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  // initial reveal check
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});

