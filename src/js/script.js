const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  sidepanel = document.querySelector('.sidepanel');

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  hamburger.style.display = 'none';
  sidepanel.style.display = 'none';
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
  hamburger.style.display = 'flex';
  sidepanel.style.display = 'flex';
});

const counters = document.querySelectorAll('.tools__ratings-counter'),
      lines = document.querySelectorAll('.tools__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});