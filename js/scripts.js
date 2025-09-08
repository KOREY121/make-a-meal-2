// ==============================
// Simple Interactivity
// ==============================

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
              .scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fade-in effect on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
