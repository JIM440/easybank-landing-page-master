let menu = document.querySelector("#menu");
let navbar = document.querySelector(".nav-visible");
let nav_ul = document.querySelector(".none");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav_ul.classList.toggle("nav");
  nav_ul.classList.toggle("nav-vis2");
  navbar.classList.toggle("nav-vis");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("nav-vis");
    nav_ul.classList.remove("nav");
    nav_ul.classList.remove("nav-vis2");
  };
