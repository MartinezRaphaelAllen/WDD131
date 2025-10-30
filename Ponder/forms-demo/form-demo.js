function validateForm(event) {
  // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
  const theForm = event.target;
  const name = theForm.name.value;
  const creditCardInfo = theForm.CreditCard.value;
  const creditCardContainer = theForm.payment.value;
  // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
  // To keep it from happening we can can call e.preventDefault()
  // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
  const errors = [];
  // start by assuming the form is valid.
  let isValid = true;
  // add our validations here

  if (creditCardContainer === "credit")
  {
    if (creditCardInfo !== "1234123412341234")
    {
      isValid = false;
      errors.push("Error: Invalid Credit Card Number");
    }
  }

  if (!name.includes("Bob"))
  {
    isValid = false;
    errors.push("Error: only those that have Bob in their names can submit a form.");
  }

  // if we ran into any problems above valid will be false.
  if (!isValid) {
    //stop the form from being submitted
    event.preventDefault();
    // show the errors
    showErrors(errors);
    // return false to let the browser know the form was not submitted.
    return false;
    }
}

function togglePaymentDetails(e) {
  // get a reference to the form. We can access all the named form inputs through the form element.
  const theForm = document.querySelector("#checkoutForm");
  // we will also need the creditCardContainer and paypalUsernameContainer
  const creditCardContainer = document.querySelector("#creditCardInfo");
  const paypalContainer = document.querySelector("#paypalInfo");
  let target = e.target.value;

  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  if (target === "credit")
  {
    creditCardContainer.classList.toggle("hide");
    document.querySelector("#paypal").removeAttribute("required");
  }
  else if (target === "paypal")
  {
    paypalContainer.classList.toggle("hide");
    document.querySelector("#CreditCard").removeAttribute("required");
  }

}

// helper function to display our errors.
function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
}
// attach a change event handler to the paymentMethod input
document.querySelector("#payment").addEventListener("change", togglePaymentDetails);

// attach a submit event handler to the form
document.querySelector("#checkoutForm").addEventListener("submit", validateForm);