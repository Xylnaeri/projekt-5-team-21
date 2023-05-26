document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.querySelector(".search-input");
    let searchBtn = document.querySelector(".search-btn");
  
    // Array med gyldige søgetermer
    let validSearchTerms = ["point", "kvitteringer", "profil",];
  
    function performSearch() {
      let searchTerm = searchInput.value.toLowerCase();
  
      for (let i = 0; i < validSearchTerms.length; i++) {
        if (validSearchTerms[i] === searchTerm) {
          // Åbn en side baseret på søgetermen
          window.location.href = searchTerm + ".html";
          return; // Exit the loop and the function
        }
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
  