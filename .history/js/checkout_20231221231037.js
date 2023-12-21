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
})();
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
let summaryProduct = document.querySelector(".listProduct")
let cart = JSON.parse(localStorage.getItem("cart"));

badge.innerHTML = cart.length;
const addCartToHTML = () => {
  summaryProduct.innerHTML = "";
  let total = 0;
  if (cart.length > 0) {
    cart.forEach((item) => {
      let newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.dataset.id = item.product_id;
      let positionProduct = products.findIndex(
        (value) => value.id == item.product_id
      );
      let info = products[positionProduct];
      listCartHTML.appendChild(newItem);
      summaryHTML.appendChild(itemSummary);
      // cart
      newItem.innerHTML = `


                      <div
                        class="row mb-4 d-flex justify-content-between align-items-center"
                      >
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="${info.image}"
                            class="img-fluid rounded-3 w-100"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-success fw-bold">${info.name}</h6>
                          <h6 class="text-black mb-0">${info.category}</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            class="btn btn-link px-1 me-1 minus"
                          >
                            <i class="fas fa-minus minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="${item.quantity}"
                            class="form-control form-control-sm text-center"
                          />

                          <button
                            class="btn btn-link px-1 ms-1 plus"
                           
                          >
                            <i class="fas fa-plus plus"></i>
                          </button>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0 totalPrice">$${
                            info.price * item.quantity
                          }</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-muted">
                            <i class="fas fa-times delete"></i>
                          </a>
                        </div>
                      </div>


            `;
    });
  }
};

addCartToHTML();
