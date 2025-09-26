const themeSelector = document.querySelector("#theme-select");
const logoImage = document.querySelector("img");

themeSelector.addEventListener("change", changeTheme);

function changeTheme() {
    let currentTheme = themeSelector.value;
    if (currentTheme === "dark") {
        document.body.setAttribute("class", "dark");
        logoImage.setAttribute("src","logo-dark.png");
    }
    else if (currentTheme === "light") {
        logoImage.setAttribute("src", "logo.webp");
        document.body.removeAttribute("class");
    }
}