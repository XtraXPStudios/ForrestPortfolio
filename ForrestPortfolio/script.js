// navbar code

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("transparentNav");
    navbar.classList.add("solidNav");
  } else {
    navbar.classList.remove("solidNav");
    navbar.classList.add("transparentNav");
  }
});
