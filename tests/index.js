TweenMax.from("header", 1.5, {
  delay: 1,
  y: "-100%",
  ease: Expo.easeInOut
});

TweenMax.from(".product-info", 1.5, {
  delay: 1.5,
  opacity: 0,
  y: "32px",
  ease: Expo.easeInOut
});

TweenMax.from(".product-info h2", 1, {
  delay: 2.2,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".product-info p", 1, {
  delay: 2.2,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".arrow", 1.5, {
  delay: 1,
  opacity: 0,
  scale: 1.2,
  ease: Expo.easeInOut
});

TweenMax.from(".arrow img", 2, {
  delay: 1,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".scroll-down", 1, {
  delay: 1.5,
  opacity: 0,
  scale: .7,
  ease: Expo.easeInOut
});

TweenMax.from(".scroll-down span", 1, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInOut
});

document.querySelectorAll(".letter").forEach((item, index) => {
  TweenMax.from(item, 2, {
    scale: 2,
    delay: index / 10,
    y: "150%",
    ease: Expo.easeInOut
  });
})

document.querySelectorAll(".icon").forEach((item, index) => {
  TweenMax.from(item, 2, {
    opacity: 0,
    delay: index / 10,
    y: "150%",
    ease: Expo.easeInOut
  });
})

TweenMax.from(".content p", 1, {
  delay: 1,
  opacity: 0,
  y: 4,
  ease: Expo.easeInOut
});

TweenMax.from(".btn-primary", 1, {
  delay: 1.3,
  opacity: 0,
  y: 4,
  ease: Expo.easeInOut
});

TweenMax.from(".slider-content img", 2, {
  scale: 1.3,
  ease: Expo.easeInOut
});

const slider = document.querySelector(".slider");
const haderContent = document.querySelector(".header-content");
const header = document.querySelector("#header");
const scrollDown = document.querySelector(".scroll-down");
const arrows = document.querySelector(".arrows");
const productInfo = document.querySelector(".product-info");
const sliderContentImg = document.querySelector(".slider-content img");
const logo = document.querySelector(".logo img");
const titulo = document.querySelector(".titulo");

slider.addEventListener("click", () => {
  header.style.gridTemplateColumns = "auto"
  haderContent.innerHTML = ""
  sliderContentImg.classList.add("nohover")
  logo.style.filter = "invert(100%)"
  sliderContentImg.classList.add("slideimg")

  setTimeout(() => {
    titulo.classList.remove("d-none")
  }, 500);

  document.querySelectorAll(".letter").forEach((item, index) => {
    TweenMax.from(item, 2, {
      scale: 2,
      delay: index / 10,
      y: "150%",
    });
  })
  
  
  TweenMax.to(".lineright", 1, {
    delay: 1,
    height: 640,
    ease: Expo.easeInOut
  });

  TweenMax.to(".scroll-down", .5, {
    opacity: 0,
    scale: .7,
    display: "none",
    ease: Expo.easeInOut
  });

  TweenMax.to(".scroll-down span", .5, {
    opacity: 0,
    display: "none",
    ease: Expo.easeInOut
  });

  TweenMax.to(".product-info", .5, {
    opacity: 0,
    y: "32px",
    display: "none",
    ease: Expo.easeInOut
  });

  TweenMax.to(".arrow", .5, {
    opacity: 0,
    scale: 1.2,
    display: "none",
    ease: Expo.easeInOut
  });

  // TweenMax.to(header, 1, {
  //   gridTemplateColumns: "200px 100vh",
  //   ease: Expo.easeInOut
  // });

  TweenMax.to(".slider", .5, {
    width: "100vw",
    height: "100vh",
    ease: Expo.easeInOut
  });

  TweenMax.to(haderContent, 1, {
    width: 0,
    padding: 0,
    opacity: 0,
    ease: Expo.easeInOut
  });
})