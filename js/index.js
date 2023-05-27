function submitForm(event) {
  event.preventDefault();
  /*Forhindrer standardhandling*/

  let password = document.querySelector(".password");
  let email = document.querySelector(".email");

  /*For loop, itereres over .formEntry elementer*/
  let inputs = document.querySelectorAll(".formEntry");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.border = "";
  }
  /*Tomt array til at holde ugyldige værdier
  Password og email values tjekkes og pushes til invalidInputs hvis de er tomme*/
  let invalidInputs = [];
  if (password.value === "") {
    invalidInputs.push(password);
  }

  if (email.value === "") {
    invalidInputs.push(email);
  }
  /*Looper over de elementer i invalidInputs og giver dem en rød border*/
  if (invalidInputs.length > 0) {
    for (let i = 0; i < invalidInputs.length; i++) {
      invalidInputs[i].style.border = "1px solid #ED6C77";
    }
  }
  /*Redirigerer til forsiden hvis invalidInputs er tom*/
  else {
    window.location.href = "forside.html";
  }
};