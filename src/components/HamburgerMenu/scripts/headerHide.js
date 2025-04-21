let lastScroll = 0;
const header = document.getElementById('header');
const hamburgerButton = document.getElementById("hamburger-button");
const sideMenu = document.querySelector("#side-menu");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("#body");

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.classList.add('-translate-y-full');
    sideMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  } else {
    header.classList.remove('-translate-y-full');
    hamburgerButton.classList.remove('-translate-y-[400%]');
    sideMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  }

  lastScroll = currentScroll;
});
