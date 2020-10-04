const slides = document.querySelectorAll(".carousel-item");
let pos = 0;
const totalSlides = slides.length;
console.log(totalSlides);

function moveToNextSlide() {
  slides[pos].classList.remove("carousel-item-visible");
  console.log(totalSlides);
  if (pos === totalSlides - 1) {
    pos = 0;
  } else {
    pos++;
  }
  slides[pos].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  slides[pos].classList.remove("carousel-item-visible");
  if (pos === 0) {
    pos = totalSlides - 1;
  } else {
    pos--;
  }
  slides[pos].classList.add("carousel-item-visible");
}

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);
