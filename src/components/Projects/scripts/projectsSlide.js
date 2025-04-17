const projectSlides = document.querySelectorAll("#project");
let current = 0;

function showSlide(index) {
  const slidesContainer = document.querySelector("#projectSlides");
  if (index >= projectSlides.length) current = 0;
  else if (index < 0) current = projectSlides.length - 1;
  else current = index;

  slidesContainer.style.transform = `translateX(-${current * 100}%)`;
}

document.getElementById("nextProject").addEventListener("click", () => {
  showSlide(current + 1);
});

document.getElementById("prevProject").addEventListener("click", () => {
  showSlide(current - 1);
});
