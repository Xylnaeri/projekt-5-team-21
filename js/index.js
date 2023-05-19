function submitForm(event) {
  event.preventDefault();

  let password = document.querySelector(".password");
  let email = document.querySelector(".email");


  let inputs = document.querySelectorAll(".formEntry");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.border = "";
  }

  let invalidInputs = [];
  if (password.value === "") {
    invalidInputs.push(password);
  }

  if (email.value === "") {
    invalidInputs.push(email);
  }

  if (invalidInputs.length > 0) {
    for (let i = 0; i < invalidInputs.length; i++) {
      invalidInputs[i].style.border = "1px solid #ED6C77";
    }
    return false;
  }

  window.location.href = "profil.html"; 
};