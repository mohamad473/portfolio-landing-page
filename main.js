const texts = document.querySelectorAll(".rounded-text p");

for (let i = 0; i < texts.length; i++) {
  texts[i].innerHTML = texts[i].innerText
    .split(``)
    .map(
      (char, j) =>
        `<span style="transform:rotate(${
          i == 0
            ? j * 12
            : i == 1
            ? j * 17
            : i == 2
            ? j * 15
            : i == 3
            ? j * 14
            : i == 4
            ? j * 19
            : "nothing"
        }deg)">${char}</span>`
    )
    .join(``);
}

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const activeItems = document.querySelectorAll(".nav-list li a");
const logo = document.querySelector(".nav-wrapper > a");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

activeItems.forEach(function (item) {
  item.addEventListener("click", () => {
    for (let i = 0; i < activeItems.length; i++) {
      activeItems[i].classList.remove("active");
      if (i == 0) activeItems[i].classList.remove("init");
    }
    item.classList.add("active");
  });
});

logo.addEventListener("click", () => {
  for (let i = 0; i < activeItems.length; i++) {
    activeItems[i].classList.remove("active");
    if (i == 0 || i == activeItems.length - 1) {
      activeItems[i].classList.add("init");
    }
  }
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  dots: true,
  arrows: false,
  responsive: {
    767: {
      dots: false,
      arrows: true,
    },
  },
});

const slidePrev = document.querySelector(".a11y-slider-prev");

slidePrev.innerHTML = ` <i class="fa-regular fa-circle-left text-accent-300 fs-800"></i>`;

const slideNext = document.querySelector(".a11y-slider-next");

slideNext.innerHTML = `<i class="fa-solid fa-circle-right text-accent-300 fs-800"></i>`;
