const brand = document.querySelector(".brand");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight * 1.4;

  const progress = Math.min(scrollY / maxScroll, 1);

  const scale = 1 + progress * 11;
  const opacity = 1 - progress * 0.15;

  brand.style.setProperty("--scale", scale);
  brand.style.opacity = opacity;
});
