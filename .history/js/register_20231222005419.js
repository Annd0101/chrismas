function validateRegistration() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailError = document.querySelector(".emailError");
  let checkUsername = false;
  let checkEmail = false;
  let checkPassword = false;
  let checkConfirmPass = false;
  //   user validation
  var userError = document.querySelector(".userError");
  if (!username) {
    userError.classList.remove("d-none");
  } else {
    userError.classList.add("d-none");
    checkUsername = true;
  }

  // Email validation
  if (!emailRegex.test(email)) {
    emailError.classList.remove("d-none");
  } else {
    emailError.classList.add("d-none");
    checkEmail = true;
  }

  // Password validation
  var passwordError = document.querySelector(".passError");
  if (password.length < 6) {
    passwordError.classList.remove("d-none");
  } else {
    passwordError.classList.add("d-none");
    checkPassword = true;
  }

  // Confirm password validation
  var confirmPasswordError = document.querySelector(".confirmPassError");
  if (password !== confirmPassword) {
    confirmPasswordError.classList.remove("d-none");
  } else {
    confirmPasswordError.classList.add("d-none");
    checkConfirmPass = true;
  }

  // Additional validations can be added for the username or other fields
  if (checkUsername && checkEmail && checkConfirmPass && checkPassword) {
    alert("Register successfully");
    // not recommend
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "./login.html";
  }
}
