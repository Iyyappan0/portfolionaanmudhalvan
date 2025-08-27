
document.addEventListener("DOMContentLoaded", () => {
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

  element.textContent = ""; 
  typeWriter();
});


const revealElements = document.querySelectorAll(
  ".section-title, .skill, .project-card, .contact-btn"
);

window.addEventListener("scroll", () => {
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});
