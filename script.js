const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const close = document.getElementById("close-menu");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

menuBtn.addEventListener("click", () => {
  if (menuIcon.classList.contains("hidden")) {
    menuIcon.classList.remove("hidden");
    close.classList.add("hidden");
    menu.classList.add("hidden");
    header.classList.add("absolute");
  } else {
    menuIcon.classList.add("hidden");
    close.classList.remove("hidden");
    menu.classList.remove("hidden");
    header.classList.remove("absolute");
  }
});
