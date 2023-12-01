const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-menu");
const vignette = document.querySelector(".vignette");

hamburger.onclick = () => {
  if (!mobileMenu.classList.contains("show-mobile-menu")) {
    mobileMenu.classList.add("show-mobile-menu");
    mobileMenu.classList.remove("hide-mobile-menu");
    vignette.style.display = "block";
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
  }
};

closeBtn.onclick = () => {
  if (!mobileMenu.classList.contains("hide-mobile-menu")) {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
    vignette.style.display = "none";
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
  }
};

function windowResize() {
  if (document.documentElement.clientWidth > 570) {
    hamburger.style.display = "none";
    vignette.style.display = "none";
    closeBtn.style.display = "none";
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  } else if (document.documentElement.clientWidth <= 570) {
    hamburger.style.display = "block";
    vignette.style.display = "none";
    closeBtn.style.display = "none";
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  }
}

window.addEventListener("resize", windowResize);
