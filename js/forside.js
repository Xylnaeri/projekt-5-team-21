const button = document.getElementById("myBtn");
const fondInfo = document.querySelector(".neye_fond_info");

button.addEventListener("mouseenter", () => {
  fondInfo.classList.add("highlight");
});

button.addEventListener("mouseleave", () => {
  fondInfo.classList.remove("highlight");
});