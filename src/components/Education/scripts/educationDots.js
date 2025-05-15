const certificationSlides = document.querySelectorAll("#certificationSlides > article");
const slidesContainer = document.getElementById("certificationSlides");
const dotsContainer = document.getElementById("certificationsDots");
let current = 0;

certificationSlides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className =
    "w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors";
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function showSlide(index) {
  if (index >= certificationSlides.length) current = 0;
  else if (index < 0) current = certificationSlides.length - 1;
  else current = index;

  slidesContainer.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-primaryHover", i === current);
    dot.classList.toggle("bg-gray-400", i !== current);
  });
}

document.getElementById("nextCertification").addEventListener("click", () => {
  showSlide(current + 1);
});

document.getElementById("prevCertification").addEventListener("click", () => {
  showSlide(current - 1);
});

showSlide(0);
