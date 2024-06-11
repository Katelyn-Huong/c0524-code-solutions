let slideIndex: number = 0;
const $slides = document.querySelectorAll('.carousel-images img');
const $dots = document.querySelectorAll('.dot');
let intervalID: number;

const showSlide = (index: number): void => {
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

const nextSlide = (): void => {
  showSlide(slideIndex + 1);
};

const prevSlide = (): void => {
  showSlide(slideIndex - 1);
};

const currentSlide = (index: number): void => {
  showSlide(index);
};

const startCarousel = (): void => {
  intervalID = window.setInterval(nextSlide, 3000);
};

const stopCarousel = (): void => {
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
