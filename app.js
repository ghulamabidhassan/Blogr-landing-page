const arrows = document.querySelectorAll(".menu");

console.log(arrows);

arrows.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const el = e.target;
    const overlay = el.querySelector(".overlay");
    const arrow = el.querySelector(".arrows");
    arrow.classList.toggle("rotate");
    overlay.classList.toggle("overlay-active");
  });
});
