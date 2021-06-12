const hamburgerEl = document.getElementById("hamburger__icon");
const navEl = document.getElementById("side__menu");

hamburgerEl.addEventListener("click", function () {
  navEl.style.transform =
    navEl.style.transform === "translateY(-100%)"
      ? "translateY(0%)"
      : "translateY(-100%)";
});
