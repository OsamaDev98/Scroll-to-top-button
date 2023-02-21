const arrowup = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
  window.scrollY >= 100
    ? arrowup.classList.add("active")
    : arrowup.classList.remove("active");
});
