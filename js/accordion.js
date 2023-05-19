let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    // Rotate the arrow icon
    let arrowIcon = this.querySelector(".accordion-arrow");
    arrowIcon.classList.toggle("rotate");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrowIcon.classList.add("rotate-reverse");
    } else {
      panel.style.display = "block";
      arrowIcon.classList.remove("rotate-reverse");
    }
  });
}
