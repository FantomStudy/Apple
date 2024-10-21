const burger = document.querySelector(".burger");
const list = document.querySelector(".header-list");
const shop = document.querySelector(".shop-and-learn");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  list.classList.toggle("active");
});
list.addEventListener("click", () => {
  burger.classList.toggle("active");
  list.classList.toggle("active");
});

const $ = (selector) => {
  return document.querySelector(selector);
};

const accordions = document.querySelectorAll(".footer-cat");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".footer-column-h");
  const items = accordion.querySelector(".footer-column-items");

  header.addEventListener("click", () => {
    accordion.classList.toggle("active");
    if (accordion.classList.contains("active")) {
      // Если аккордеон открывается, вычисляем высоту
      items.style.height = items.scrollHeight + "px";
    } else {
      // Если аккордеон закрывается, сбрасываем высоту
      items.style.height = "0px";
    }
  });
});