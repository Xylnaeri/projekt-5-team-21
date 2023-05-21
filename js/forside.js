document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.querySelector(".search-input");
    let searchBtn = document.querySelector(".search-btn");
  
    searchBtn.addEventListener("click", function(event) {
      event.preventDefault();
      let searchTerm = searchInput.value;
  
      // Udfør søgningen (du kan tilpasse dette efter dine behov)
      if (searchTerm.toLowerCase() === "point") {
        // Åbn "kvitteringer.html" siden
        window.location.href = "point.html";
      } else {
        // Vis en fejlmeddelelse eller tag ingen handling
        console.log("Ugyldig søgeterm");
      }
    });
  });