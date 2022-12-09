const navItems = document.querySelectorAll(".nav-items");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const content = document.querySelectorAll("section");

function linkAction() {
  navItems.forEach((m) => m.classList.remove("active"));
  this.classList.add("active");
}

navItems.forEach((m) => m.addEventListener("click", linkAction));

const showMenu = () => {
  navMenu.classList.toggle("show-menu");
  content.forEach((section) => section.classList.toggle("main-blur"));
};

navToggle.addEventListener("click", showMenu);

const closeMenu = () => {
  navMenu.classList.remove("show-menu");
  content.forEach((section) => section.classList.remove("main-blur"));
};

content.forEach((section) => section.addEventListener("click", closeMenu));

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) => link.addEventListener("click", closeMenu));