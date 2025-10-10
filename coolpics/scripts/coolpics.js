const menuButton = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const gallery = document.querySelector(".gallery");
const closeButton = document.querySelector(".close-viewer");

HandleResize();
menuButton.addEventListener("click", OpenMenu);
window.addEventListener("resize", HandleResize);
gallery.addEventListener("click", OpenModal);
closeButton.addEventListener("click", CloseWindow);

function OpenMenu()
{
    if (navMenu.classList.contains("hide"))
    {
        navMenu.classList.remove("hide");
    }
    else
    {
        navMenu.classList.add("hide");
    }
}

function HandleResize()
{
    if (window.innerWidth >= 1000)
    {
        navMenu.classList.remove("hide");
    }
}

function OpenModal(e)
{
    let changeimage = e.target.src;
    let biggerPhoto = changeimage.split("-")[0] + "-full.jpeg";
    modal.showModal();
    modalImage.setAttribute("src", biggerPhoto);
}

function CloseWindow()
{
    modal.close();
    modalImage.removeAttribute("src");
}

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
        modalImage.removeAttribute("src");
    }
});