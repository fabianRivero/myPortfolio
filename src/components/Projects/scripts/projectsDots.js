const projectSlides = document.querySelectorAll("#projectSlides > article");
const slidesContainer = document.getElementById("projectSlides");
const dotsContainer = document.getElementById("projectsDots");
let current = 0;

projectSlides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className =
    "w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors";
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function showSlide(index) {
  if (index >= projectSlides.length) current = 0;
  else if (index < 0) current = projectSlides.length - 1;
  else current = index;

  slidesContainer.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-primaryHover", i === current);
    dot.classList.toggle("bg-gray-400", i !== current);
  });
}

document.getElementById("nextProject").addEventListener("click", () => {
  showSlide(current + 1);
});

document.getElementById("prevProject").addEventListener("click", () => {
  showSlide(current - 1);
});

showSlide(0);
