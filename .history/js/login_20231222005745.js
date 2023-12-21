const submitLogin = document.querySelector(".login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.querySelector(".emailError");
const passError = document.querySelector(".passError");
submitLogin.addEventListener("click", () => {
  // validation
  let checkEmail = false;
  let checkPassword = false;
  if (!email.value) {
    console.log(email.value);
    emailError.classList.remove("d-none");
    emailError.innerHTML = "Invalid Email";
  } else {
    emailError.classList.add("d-none");
    checkEmail = true;
  }
  if (!password.value) {
    passError.classList.remove("d-none");
    passError.innerHTML = "Please fill in the information";
  } else {
    passError.classList.add("d-none");
    checkPassword = true;
  }
  if (password.value.length < 6 && password.value.length > 0) {
    passError.classList.remove("d-none");
    passError.innerHTML = "Password must be at least 6 characters long.";
  }
  //   Authentication
  let emailAfterRegister = localStorage.getItem("email");
  let password = localStorage.getItem("password");
  var users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
    { email: email, password: password }
    // Add more users as needed
  ];
  var authenticatedUser = users.find(function (user) {
    return user.email === email.value && user.password === password.value;
  });
  if (checkEmail && checkPassword) {
    if (authenticatedUser) {
      // Authentication successful
      alert("Login successful!");
      // Redirect to the homepage or perform other actions
      localStorage.setItem("user", true);
      window.location.href = "./index.html";
    } else {
      // Authentication failed
      alert("Invalid email or password. Please try again.");
    }
  }
});
