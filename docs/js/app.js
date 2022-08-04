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
