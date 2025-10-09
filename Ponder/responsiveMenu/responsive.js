const menuButton = document.querySelector(".menu-btn");
const navBar = document.querySelector("nav");

menuButton.addEventListener("click", OpenMenu);

function OpenMenu() {
    if (navBar.classList.contains("hide")) {
        navBar.classList.remove("hide");
    }
    else {
        navBar.classList.add("hide");
    }   
    if (menuButton.classList.contains("menu-btn")) {
        menuButton.classList.remove("menu-btn");
        menuButton.classList.add("change");
    }
    else {
        menuButton.classList.remove("change");
        menuButton.classList.add("menu-btn");
    }
}