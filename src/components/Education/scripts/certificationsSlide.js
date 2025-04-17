const certificationSlides = document.querySelectorAll("#certification");
let current = 0;

function showSlide(index) {
  const slidesContainer = document.querySelector("#certificationSlides");
  if (index >= certificationSlides.length) current = 0;
  else if (index < 0) current = certificationSlides.length - 1;
  else current = index;

  slidesContainer.style.transform = `translateX(-${current * 100}%)`;
}

document.getElementById("nextCertification").addEventListener("click", () => {
  showSlide(current + 1);
});

document.getElementById("prevCertification").addEventListener("click", () => {
  showSlide(current - 1);
});
