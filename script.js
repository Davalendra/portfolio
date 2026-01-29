const heroText = document.querySelector(".hero h1");

heroText.style.opacity = 0;

window.addEventListener("load", () => {
  heroText.style.transition = "2s";
  heroText.style.opacity = 1;
});
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
