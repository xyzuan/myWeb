var navtop = document.getElementById("navtop-items");
var navtopPos = navtop.getBoundingClientRect().top;
var navtopLinks = document.querySelectorAll("nav li");

window.addEventListener("scroll", e => {
    scrollPos = window.scrollY;
    navtopLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (scrollPos + 150 > section.offsetTop && scrollPos + 150 < section.offsetTop + section.offsetHeight ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
  });