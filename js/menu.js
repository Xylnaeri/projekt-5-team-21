const menuIcon = document.getElementById("menu_icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuIcon.addEventListener("click", function () {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const pointBoxes = document.querySelectorAll(".point-box");
  
    pointBoxes.forEach(function(pointBox, index) {
      pointBox.addEventListener("click", function(event) {
        event.stopPropagation();
  
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
  
        const preview = document.querySelector(`#preview${index + 1}`).cloneNode(true);
        preview.classList.add("preview-overlay");
  
        const closeBtn = preview.querySelector(".kvittering-close");
        closeBtn.addEventListener("click", function() {
          overlay.remove();
        });
  
        overlay.appendChild(preview);
        document.body.appendChild(overlay);
      });
    });
  
    // Lyt efter klik uden for overlayet
    document.addEventListener("click", function(event) {
      const overlays = document.querySelectorAll(".overlay");
      overlays.forEach(function(overlay) {
        if (!overlay.contains(event.target) || event.target === overlay) {
          overlay.remove();
        }
      });
    });
  });
  
  

  
  
  
  