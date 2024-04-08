let slides = document.querySelectorAll(".slide");
let buttons = document.querySelectorAll(".button");
let currentSlide = 1;

// image slider manual navigation
let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// image slider auto play
let repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  let reapeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;

      if (i >= slides.length) {
        i = 0;
      }

      reapeater();
    }, 10000);
  };

  reapeater();
};

repeat();

``;
