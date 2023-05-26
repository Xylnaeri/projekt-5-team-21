function myFunction() {
    let copyText = document.getElementById("copyLink");
    let copyButton = document.querySelector(".copy-link-button");
  
    copyText.select();
    copyText.setSelectionRange(0, 2);
  
    navigator.clipboard.writeText(copyText.value);
  
    copyButton.textContent = "Kopieret!";
  }
  