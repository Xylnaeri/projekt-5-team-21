let accordion = document.getElementsByClassName("accordion");
let i;
  /*Loop der iterere over elementerne i accordion variablen
  så længe i er mindre end længden af accordion variablen*/
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    /*Eventlistener på det aktuelle element der itereres over, hvor der skiftes mellem "active" class 
  på det klikkede element*/
    let panel = this.nextElementSibling;
  /*Den næste sibling af det klikkede element bliver tildelt til panel variablen*/
    let arrowIcon = this.querySelector(".accordion-arrow");
    arrowIcon.classList.toggle("rotate");
  /*arrowIcon finder det arrow icon i det element som har triggered eventet
  hvor den toggler rotate class på ikonet*/
    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrowIcon.classList.add("rotate-reverse");
    } else {
      panel.style.display = "block";
      arrowIcon.classList.remove("rotate-reverse");
    }
  });
   /*Der tjekkes CSS værdien af panel, hvis den er "block" sættes den til "none" og tilføjer rotate-reverse
   til arrowIcon. Hvis den ikke er sat til "block" vil den sættes til "block" og rotate-reverse fjernes fra arrowIcon*/
}
