document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.querySelector(".search-input");
    let searchBtn = document.querySelector(".search-btn");
  
    // Array med gyldige søgetermer
    let validSearchTerms = ["point", "kvitteringer", "profil",];
  
    function performSearch() {
      let searchTerm = searchInput.value.toLowerCase();
  
      // Kontroller om søgetermen er gyldig ved at tjekke om den findes i arrayet
      if (validSearchTerms.includes(searchTerm)) {
        // Åbn en side baseret på søgetermen
        window.location.href = searchTerm + ".html";
      } else {
        // Vis en fejlmeddelelse eller tag ingen handling
        console.log("Ugyldig søgeterm");
      }
  
      // Nulstil søgefeltet
      searchInput.value = "";
    }
  
    searchBtn.addEventListener("click", function(event) {
      event.preventDefault();
      performSearch();
    });
  
    searchInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        performSearch();
      }
    });
  });
  