const hamburgerButton = document.querySelector("#hamburger-button");
const sideMenu = document.querySelector("#side-menu");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("#body");

hamburgerButton.addEventListener("click", () =>  {
    sideMenu.classList.toggle("translate-x-full");
    overlay.classList.toggle("hidden");
    body.classList.toggle("overflow-hidden");
});

overlay.addEventListener("click", () => {
    sideMenu.classList.add('translate-x-full');
    overlay.classList.add("hidden");
    body.classList.remove("overflow-hidden");
})


