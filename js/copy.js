function myFunction() {
  let copyText = document.getElementById("copyLink");
  let copyButton = document.querySelector(".copy-link-button");
  /*Der anvendes select metoden til at highligth teksten og setSelectionRange til at dække hele teksten*/
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  /*teksten kopieres til clipboard*/
  navigator.clipboard.writeText(copyText.value);
  /*copyButton teksten ændres til kopieret!*/
  copyButton.textContent = "Kopieret!";
}
