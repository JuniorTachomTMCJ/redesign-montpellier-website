let btnScrollToTop = document.querySelector("#scrollToTop");
document.addEventListener("scroll", () => {
  let doc = document.documentElement;
  let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  if (scrollTop > 100) {
    btnScrollToTop.style.display = "flex";
  } else {
    btnScrollToTop.style.display = "none";
  }
});

// Hero slider
let slideIndex = 1;
let heroProgressBar = document.querySelector(".hero .progress > div");

showHeroSlides(slideIndex);

function plusSlides(n) {
  showHeroSlides((slideIndex += n));
}

function showHeroSlides(n) {
  let i;
  let heroSlides = document.getElementsByClassName("hero-slide");

  if (n > heroSlides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = heroSlides.length;
  }

  for (i = 0; i < heroSlides.length; i++) {
    heroSlides[i].classList.remove("heroSlideIn");
    heroSlides[i].classList.add("heroSlideOut");
  }

  heroSlides[slideIndex - 1].classList.remove("heroSlideOut");
  heroSlides[slideIndex - 1].classList.add("heroSlideIn");
  heroProgressBar.style.height = `${(slideIndex / heroSlides.length) * 100}%`;
}

setInterval(() => {
  plusSlides(1);
}, 5000);
