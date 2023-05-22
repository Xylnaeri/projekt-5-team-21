const menuIcon = document.getElementById("menu_icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuIcon.addEventListener("click", function () {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});

