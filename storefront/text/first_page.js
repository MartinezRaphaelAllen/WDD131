const iconGallery = [
    {
        img: "images/Base_tier.png",
        alt: "Base Logo",
        items: ["Base Game"]
    },
    {
        img: "images/Silver_tier.png",
        alt: "Silver Logo",
        items: ["Base Game", "Custom Outfit Pack", "Extended Story DLC"]
    },
    {
        img: "images/Gold_tier.png",
        alt: "Gold Logo",
        items: ["Base Game", "Deluxe Edition DLCs", "Exclusive Weapon: Banana Cannon", "PVP Unlock"]
    }
];

const imgGallery = [
    "images/gameplay_1-sm.png",
    "images/gameplay_2-sm.png",
    "images/gameplay_3-sm.png"
];

const gallery = document.querySelector("#galleryContainer");
const galleryImage = document.querySelector("#galleryImage");
const tierContainer = document.querySelector("#tierCards");
const leftG = document.querySelector(".moveLeftG");
const rightG = document.querySelector(".moveRightG");
const left = document.querySelector(".moveLeft");
const right = document.querySelector(".moveRight");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".closeViewer");

let imgIndex = 0;
let tierIndex = 0;

function ChangeImageGallery(direction) {
    imgIndex += direction;

    if (imgIndex < 0) imgIndex = imgGallery.length - 1;
    if (imgIndex > imgGallery.length - 1) imgIndex = 0;

    galleryImage.src = imgGallery[imgIndex];
}

function ChangeTierList(direction) {
    tierIndex += direction;

    if (tierIndex < 0) 
        tierIndex = iconGallery.length - 1;
    if (tierIndex > iconGallery.length - 1) 
        tierIndex = 0;

    const tier = iconGallery[tierIndex];

    tierContainer.innerHTML = `
    <div class="tierSelector">
        <img src="${tier.img}" alt="${tier.alt}">
        <form action="Checkout.html">
        <button class="selectorButton" type="submit" name="tier" value="${tier.alt}">Select</button>
        </form>
        <ul>
            ${PerksTemplate(tier.items)}
        </ul>
    </div>
    `;
}

function PerksTemplate(items)
{
    let html = "";
    items.forEach((item) =>{
        html += `<li>${item}</li>`;
    });
    return html;
}

function TierTemplate(tier)
{
    return `
    <div class="tierSelector">
        <img src="${tier.img}" alt="${tier.alt}">
        <form action="Checkout.html">
        <button class="selectorButton" type="submit" name="tier" value="${tier.alt}">Select</button>
        </form>
        <ul>
            ${PerksTemplate(tier.items)}
        </ul>
    </div>
    `;
}

function RenderTier()
{
    if (window.innerWidth >= 1200)
    { 
        tierContainer.innerHTML = "";

        iconGallery.forEach(tier => {
            tierContainer.innerHTML += TierTemplate(tier);
        });
    }
    else
    {
        tierContainer.innerHTML = TierTemplate(iconGallery[tierIndex]);
    }

}

function JumpToTierList()
{
    tierContainer.scrollIntoView();
}

function OpenModal(e) {
    
    let changeimage = e.target.src;

    modal.showModal();
    modalImage.setAttribute("src", changeimage.replace("-sm", ""));
}

closeButton.addEventListener('click', () => {
    modal.close();
    modalImage.removeAttribute("src");
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

leftG.addEventListener("click", () => ChangeImageGallery(-1));
rightG.addEventListener("click", () => ChangeImageGallery(1));

left.addEventListener("click", () => ChangeTierList(-1));
right.addEventListener("click", () => ChangeTierList(1));

galleryImage.addEventListener("click", OpenModal);

window.addEventListener("resize", RenderTier);

//CALLING DEFAULTS
galleryImage.src = imgGallery[imgIndex];
ChangeTierList(0);
RenderTier();