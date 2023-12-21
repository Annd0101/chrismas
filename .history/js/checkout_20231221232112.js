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

let summaryProduct = document.querySelector(".summaryProduct")
let cart = JSON.parse(localStorage.getItem("cart"));
let products = JSON.parse(localStorage.getItem("products"))
let total = JSON.parse(localStorage.getItem('total'))
const addCartToHTML = () => {
  summaryProduct.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((item) => {
      let newItem = document.createElement("div");
      newItem.dataset.id = item.product_id;
      let positionProduct = products.findIndex(
        (value) => value.id == item.product_id
      );
      let info = products[positionProduct];
      summaryProduct.appendChild(newItem);
      // cart
      newItem.innerHTML = `

      <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-success">Your cart</span>
      <span class="badge bg-success rounded-circle">3</span>
  </h4>
  <ul class="list-group mb-3 sticky-top">
      <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
              <h6 class="my-0">${info.name}</h6>
              <small class="text-muted">${info.category}</small>
          </div>
          <span class="text-muted">${info.price * info.quantity}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
              <h6 class="my-0">Second product</h6>
              <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$8</span>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
              <h6 class="my-0">Third item</h6>
              <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$5</span>
      </li>
      <li class="list-group-item d-flex justify-content-between bg-light">
          <div class="text-success">
              <h6 class="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
          </div>
          <span class="text-success">-$5</span>
      </li>
      <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
      </li>
  </ul>
            `;
    });
  }
};

addCartToHTML();

})();
