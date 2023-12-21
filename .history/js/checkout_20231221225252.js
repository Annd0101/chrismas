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
let badge = document.querySelector(".badge");
let cart = JSON.parse(localStorage.getItem("cart"));
badge.innerHTML = cart.length;