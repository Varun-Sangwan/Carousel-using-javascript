import { imagesArr } from "./data.js";

const images = imagesArr;
const slidesDiv = document.getElementById("carousel-container");
const carouselState = document.getElementById("carousel-state");
let pos = 0;
const totalSlides = images.length;

for (let i = 0; i < images.length; i++) {
  slidesDiv.innerHTML += `<div class="carousel-item">
                                <img src="images/${images[i]}.jpg" />
                          </div>`;
  carouselState.innerHTML += `<div class="carousel-status"></div>`;
}

const slides = document.querySelectorAll(".carousel-item");
const allCarouselState = document.querySelectorAll(".carousel-status");
slides[pos].classList.add("carousel-item-visible");
allCarouselState[pos].classList.add("current");

setInterval(moveToNextSlide, 10000);

function moveToNextSlide() {
  allCarouselState[pos].classList.remove("current");
  slides[pos].classList.remove("carousel-item-visible");
  if (pos === totalSlides - 1) {
    pos = 0;
  } else {
    pos++;
  }
  slides[pos].classList.add("carousel-item-visible");
  allCarouselState[pos].classList.add("current");
}

function moveToPrevSlide() {
  allCarouselState[pos].classList.remove("current");
  const slides = document.querySelectorAll(".carousel-item");
  slides[pos].classList.remove("carousel-item-visible");
  if (pos === 0) {
    pos = totalSlides - 1;
  } else {
    pos--;
  }
  slides[pos].classList.add("carousel-item-visible");
  allCarouselState[pos].classList.add("current");
}

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);
