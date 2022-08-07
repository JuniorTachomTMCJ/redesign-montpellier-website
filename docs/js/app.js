let btnScrollToTop = document.querySelector("#scrollToTop");
let actualitiesCards = document.querySelectorAll(".actuality-card");
let eventsCards = document.querySelectorAll(".event-card");
let eventHome = document.querySelector(".event-home");

document.addEventListener("scroll", () => {
  let doc = document.documentElement;
  let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  if (scrollTop > 100) {
    btnScrollToTop.style.display = "flex";
  } else {
    btnScrollToTop.style.display = "none";
  }

  actualitiesCards.forEach((item) => {
    let topDistance = item.offsetTop;

    if (topDistance - 500 < scrollTop) {
      item.classList.add("scaleInFwd");
    }
  });

  eventsCards.forEach((item) => {
    let topDistance = item.offsetTop;

    if (topDistance - 500 < scrollTop) {
      item.classList.add("scaleInFwd");
    }
  });

  let topDistanceEventHome = eventHome.offsetTop;

  if (topDistanceEventHome - 500 < scrollTop) {
    eventHome.classList.add("fadeInLeft");
  }
});

// Start Hero slider
let slideIndex = 1;
let heroProgressBar = document.querySelector(".hero .progress > div");

showHeroSlides(slideIndex);

function plusHeroSlides(n) {
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
  plusHeroSlides(1);
}, 5000);

// End Hero Slider

// Start Events slider

let slideEventIndex = 1;

showEventSlides(slideEventIndex);

function plusEventSlides(n) {
  if (n === 1) {
    showEventSlides((slideEventIndex += n));
  } else {
    showEventSlides((slideEventIndex += n), false);
  }
}

function showEventSlides(n, rlt = true) {
  let next = document.querySelector(".next-btn");
  let prev = document.querySelector(".prev-btn");

  let i;
  let eventSlides = document.getElementsByClassName("event-card");

  if (n > eventSlides.length) {
    slideEventIndex = 1;
  }

  if (n < 1) {
    slideEventIndex = eventSlides.length;
  }

  if (rlt) {
    for (i = 0; i < eventSlides.length; i++) {
      eventSlides[i].classList.remove("eventLeftSlideIn");
      eventSlides[i].classList.remove("heroSlideIn");
      eventSlides[i].classList.add("heroSlideOut");
    }

    eventSlides[slideEventIndex - 1].classList.remove("heroSlideOut");
    eventSlides[slideEventIndex - 1].classList.remove("eventLeftSlideOut");
    eventSlides[slideEventIndex - 1].classList.add("heroSlideIn");
  } else {
    for (i = 0; i < eventSlides.length; i++) {
      eventSlides[i].classList.remove("heroSlideIn");
      eventSlides[i].classList.remove("eventLeftSlideIn");
      eventSlides[i].classList.add("eventLeftSlideOut");
    }

    eventSlides[slideEventIndex - 1].classList.remove("eventLeftSlideOut");
    eventSlides[slideEventIndex - 1].classList.remove("heroSlideOut");
    eventSlides[slideEventIndex - 1].classList.add("eventLeftSlideIn");
  }

  if (slideEventIndex - 1 == 0) {
    prev.classList.add("desactived");
  } else {
    prev.classList.remove("desactived");
  }
  if (slideEventIndex - 1 == eventSlides.length - 1) {
    next.classList.add("desactived");
  } else {
    next.classList.remove("desactived");
  }
}

// End Events Slider
