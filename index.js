const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");
const elem = document.getElementById('dynamic');

openMenu.addEventListener("click", () => {
    navbar.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("open");
});


setInterval(() => {
  elem.value+=1;
  if (elem.value === 100) {
    elem.value = 0;
  }
}, 20);