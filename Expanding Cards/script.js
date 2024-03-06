const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("mouseover", () => {
    removeActiveClasses();
    slide.classList.add("active");
  });
});

function removeActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
