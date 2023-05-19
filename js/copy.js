function myFunction() {
    var copyText = document.getElementById("copyLink");
    var copyButton = document.querySelector(".copy-link-button");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);
  
    copyButton.textContent = "Kopieret!";
  }
  