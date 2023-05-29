const menuIcon = document.getElementById("menu_icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

/*Eventlistener på click event på menu ikonet*/
menuIcon.addEventListener("click", function () {
  /*hvis CSS styling på dropdownmenu er sat til "block" vil den ændres til "none" og hvis den ikke er sat
  til "block" vil den så sættes til "block"*/
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});

//indlæser DOM
document.addEventListener("DOMContentLoaded", function() {
    const pointBoxes = document.querySelectorAll(".point-box");
    const previews = document.querySelectorAll(".preview");
 
//opretter for-løkke
    for (let i = 0; i < pointBoxes.length; i++) {
  
        const pointBox = pointBoxes[i];
        const preview = previews[i];
  
        pointBox.addEventListener("click", function(event) {
        event.stopPropagation();
  
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
  
        const previewClone = preview.cloneNode(true);
        previewClone.classList.add("preview-overlay");
  
        const closeBtn = previewClone.querySelector(".kvittering-close");
        closeBtn.addEventListener("click", function() {
          overlay.remove();
        });
  
        overlay.appendChild(previewClone);
        document.body.appendChild(overlay);
      });
    }
  
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
  

  
  
  
  