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
  if (!element.classList.contains("text-danger"))
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
});

let badge = document.querySelector(".badge");
let cart = JSON.parse(localStorage.getItem("cart"));
badge.innerHTML = cart.length;