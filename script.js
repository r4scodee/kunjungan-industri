const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let currentIndex = 0;

const moveToSlide = (index) => {
  if (index < 0) index = slideCount - 1;
  if (index >= slideCount) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
};

document.querySelector(".prev").addEventListener("click", () => {
  moveToSlide(currentIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
  moveToSlide(currentIndex + 1);
});


