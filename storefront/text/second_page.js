const tierMap = {
    "Base Logo": {
        image: "images/Base_tier.png",
        price: 49,
        tierS: "Base"
    },
    "Silver Logo": {
        image: "images/Silver_tier.png",
        price: 59,
        tierS: "Silver"
    },
    "Gold Logo": {
        image: "images/Gold_tier.png",
        price: 79,
        tierS: "Gold"
    }
};

const params = new URLSearchParams(window.location.search);
const tierName = params.get("tier");
const tier = tierMap[tierName];

const quantityButton = document.querySelector("#quantitySelect");
const payButton = document.querySelector(".payButton");
const card = document.querySelector("#cardType");
const hidden = document.querySelectorAll(".hide");

document.querySelector(".tierTitle").textContent = `Sniper Monkey: ${tier.tierS} Edition`;
document.querySelector("#tierImage").src = tier.image;
document.querySelector("#priceValue").textContent = tier.price;

function updateTotals() {
    let qty = Number(document.getElementById("quantitySelect").value);
    let price = tier.price * qty;
    let tax = price * 0.07;

    document.getElementById("priceValue").textContent = price.toFixed(2);
    document.getElementById("taxValue").textContent = tax.toFixed(2);
    document.getElementById("totalValue").textContent = (price + tax).toFixed(2);
}

function togglePaymentDetails(e) {
  let value = e.target.value;
  hidden.forEach(field => field.classList.add("hide"));

  if (value === "Visa" || value === "MasterCard") {
        hidden.forEach(field => field.classList.remove("hide"));
    }

}

payButton.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("checkoutForm");
    if (!form.checkValidity()) 
    {
        form.reportValidity();
        return;
    }
    else
        document.getElementById("thankYouBox").classList.remove("hidden");
        });

quantityButton.addEventListener("change", updateTotals);
card.addEventListener("change", togglePaymentDetails);

//default calls
updateTotals();