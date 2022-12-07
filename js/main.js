var navlink = document.querySelectorAll(".navlink");

function linkAction() {
  navlink.forEach((m) => m.classList.remove("active"));
  this.classList.add("active");
}

navlink.forEach((m) => m.addEventListener("click", linkAction));
