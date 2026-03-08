// Optional: simple scroll animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) sec.style.opacity = 1;
    else sec.style.opacity = 0.3;
  });
});
