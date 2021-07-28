let sliderIndex = 0;

const showSlide = index => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot-nav");
  const title = document.querySelectorAll(".slide h2");

  if(index >= slides.length) sliderIndex = 0;
  if(index < 0) sliderIndex = slides.length - 1;

  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].classList.remove("active-dot");
  });

  title[sliderIndex].classList.remove("content-slide");
  setTimeout(() => title[sliderIndex].classList.add("content-slide"), 200);
  slides[sliderIndex].style.display = "block";
  dots[sliderIndex].classList.add("active-dot");

};

showSlide(sliderIndex);

document.querySelector("#arrow-prev").onclick = () => showSlide(--sliderIndex);
document.querySelector("#arrow-next").onclick = () => showSlide(++sliderIndex);

document.querySelectorAll(".dot-nav").forEach((dot, index) => {
  dot.onclick = () => showSlide(sliderIndex = index);
});

setInterval(() => showSlide(++sliderIndex), 3000);