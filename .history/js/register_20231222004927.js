function validateRegistration() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  //   user validation
  var userError = document.querySelector(".userError");
  if (!username) {
    userError.classList.remove("d-none");
  } else {
    userError.classList.add("d-none");
  }
  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailError = document.querySelector(".emailError");
  let checkEmail = false;
  let check;
  if (!emailRegex.test(email)) {
    emailError.classList.remove("d-none");
  } else {
    emailError.classList.add("d-none");
    check;
  }

  // Password validation
  var passwordError = document.querySelector(".passError");
  if (password.length < 6) {
    passwordError.classList.remove("d-none");
  } else {
    passwordError.classList.add("d-none");
  }

  // Confirm password validation
  var confirmPasswordError = document.querySelector(".confirmPassError");
  if (password !== confirmPassword) {
    confirmPasswordError.classList.remove("d-none");
  } else {
    confirmPasswordError.classList.add("d-none");
  }

  // Additional validations can be added for the username or other fields
}
