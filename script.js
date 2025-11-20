// Fade sections on scroll
const fades = document.querySelectorAll(".fade");
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
});

fades.forEach((f) => fadeObserver.observe(f));

// Timeline animation
const items = document.querySelectorAll(".item");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const year = e.target.querySelector(".year-tag");
        if (year) {
          year.style.opacity = "1";
          year.style.transform = "translateX(0)";
        }
      }
    });
  },
  { threshold: 0.3 }
);

items.forEach((i) => io.observe(i));
