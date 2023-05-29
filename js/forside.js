// indlæser DOM
document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.querySelector(".search-input");
    let searchBtn = document.querySelector(".search-btn");

// opretter et array
    let validSearchTerms = ["point", "kvitteringer", "profil",];
  
    function performSearch() {
      let searchTerm = searchInput.value.toLowerCase();

// opretter en for-løkke 
      for (let i = 0; i < validSearchTerms.length; i++) {
        if (validSearchTerms[i] === searchTerm) {
          window.location.href = searchTerm + ".html";
          return;
        }
      }

// nulstiller søgefelt
      searchInput.value = "";
    }

// lytter efter click
    searchBtn.addEventListener("click", function(event) {
      event.preventDefault();
      performSearch();
    });

// lytter efter enter tasten
    searchInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        performSearch();
      }
    });
  });
 