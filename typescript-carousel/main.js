'use strict';
let slideIndex = 0;
const $slides = document.querySelectorAll('.carousel-images img');
const $dots = document.querySelectorAll('.dot');
let intervalID;
const showSlide = (index) => {
  if (index >= $slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = $slides.length - 1;
  } else {
    slideIndex = index;
  }
  $slides.forEach(($slides, i) => {
    $slides.classList.toggle('active', i === slideIndex);
    $dots[i].classList.toggle('active', i === slideIndex);
  });
};
const nextSlide = () => {
  showSlide(slideIndex + 1);
};
const prevSlide = () => {
  showSlide(slideIndex - 1);
};
const currentSlide = (index) => {
  showSlide(index);
};
const startCarousel = () => {
  intervalID = window.setInterval(nextSlide, 3000);
};
const stopCarousel = () => {
  clearInterval(intervalID);
};
document.addEventListener('DOMContentLoaded', () => {
  showSlide(slideIndex);
  startCarousel();
  const $prevButton = document.querySelector('.fa-chevron-left');
  const $nextButton = document.querySelector('.fa-chevron-right');
  if ($prevButton) {
    $prevButton.addEventListener('click', () => {
      stopCarousel();
      prevSlide();
      startCarousel();
    });
  }
  if ($nextButton) {
    $nextButton.addEventListener('click', () => {
      stopCarousel();
      nextSlide();
      startCarousel();
    });
  }
  $dots.forEach(($dots, index) => {
    $dots.addEventListener('click', () => {
      stopCarousel();
      currentSlide(index);
      startCarousel();
    });
  });
});
