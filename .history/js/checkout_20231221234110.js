// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              alert("Check out successfully");
              window.location.href = "demo.html";
            }
            form.classList.add("was-validated");
          },

          false
        );
      });
    },
    false
  );
  // Select all elements nav-link
var navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach(function (element) {
  // Add an event listener for the 'mouseover' event
  if (!element.classList.contains("text-danger")) {
    element.addEventListener("mouseover", function () {
      element.classList.remove("text-secondary");
      element.classList.add("text-danger");
    });

    // Add an event listener for the 'mouseout' event
    element.addEventListener("mouseout", function () {
      // Revert the color to its original state on mouseout
      element.classList.remove("text-danger");
      element.classList.add("text-secondary");
    });
  }
});
let badge = document.querySelector(".badge");
let summaryProduct = document.querySelector(".summaryProduct")
let totalPrice = document.querySelector(".totalPrice")
let cart = JSON.parse(localStorage.getItem("cart"));
let products = JSON.parse(localStorage.getItem("products"))
let total = JSON.parse(localStorage.getItem('total'))
badge.innerHTML = cart.length
const addCartToHTML = () => {
  summaryProduct.innerHTML = "";
  totalPrice.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((item) => {
      let newItem = document.createElement("div");
      let positionProduct = products.findIndex(
        (value) => value.id == item.product_id
      );
      let info = products[positionProduct];
      summaryProduct.appendChild(newItem);
      let temp = 0;
      temp = temp + info.price * item.quantity;
      total = total + temp
      // cart
      newItem.innerHTML = `
      
      <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
              <h6 class="my-0 text-danger fw-bold">${info.name}</h6>
              <small class="text-muted">${info.category}</small>
          </div>
          <span class="text-success fw-bold">$${info.price * item.quantity}</span>
      </li>
            `;
    });
    let totalSummary = document.createElement('li')
    totalSummary.classList.add("list-group-item")
    totalSummary.classList.add("d-flex")
    totalSummary.classList.add("justify-content-between")
    totalSummary.innerHTML = `            
    <span>Total (USD)</span>
    <strong>$${total}</strong>`
    totalPrice.appendChild(totalSummary)
  }
};

addCartToHTML();

})();
