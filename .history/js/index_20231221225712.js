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

// Select all elements button "Learn" and "Shop now"
var Elements = document.querySelectorAll(".hover");

Elements.forEach(function (element) {
  // Add an event listener for the 'mouseover' event
  element.addEventListener("mouseover", function () {
    console.log("red");
    element.classList.remove("text-white");
    element.classList.add("text-danger");
  });

  // Add an event listener for the 'mouseout' event
  element.addEventListener("mouseout", function () {
    // Revert the color to its original state on mouseout
    console.log("white");
    element.classList.remove("text-danger");
    element.classList.add("text-white");
  });
});

// Hover all heart elements
var hearts = document.querySelectorAll(".heart");

hearts.forEach(function (element) {
  // Add an event listener for the 'mouseover' event
  element.addEventListener("mouseover", function () {
    element.classList.remove("bg-secondary");
    element.style.backgroundColor = "#83a931";
  });

  // Add an event listener for the 'mouseout' event
  element.addEventListener("mouseout", function () {
    // Revert the color to its original state on mouseout
    element.classList.add("bg-secondary");
  });
});

// Hover all add to card buttons
var addToCartBtns = document.querySelectorAll(".add");

addToCartBtns.forEach(function (element) {
  // Add an event listener for the 'mouseover' event
  element.addEventListener("mouseover", function () {
    element.classList.remove("bg-secondary");
    element.style.backgroundColor = "#83a931";
  });

  // Add an event listener for the 'mouseout' event
  element.addEventListener("mouseout", function () {
    // Revert the color to its original state on mouseout
    element.classList.add("bg-secondary");
  });
});

// Hover all product titles
var productTitles = document.querySelectorAll(".title");

productTitles.forEach(function (element) {
  // Add an event listener for the 'mouseover' event
  element.addEventListener("mouseover", function () {
    element.classList.remove("text-danger");
    element.classList.add("text-success");
  });
  // Add an event listener for the 'mouseout' event
  element.addEventListener("mouseout", function () {
    // Revert the color to its original state on mouseout
    element.classList.add("text-danger");
  });
});

// Authentication
const user = document.querySelector(".user");
const bag = document.querySelector(".bag");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const logout = document.querySelector(".logout");
const check = localStorage.getItem("user");
if (check) {
  login.classList.add("d-none");
  register.classList.add("d-none");
  user.classList.remove("d-none");
  bag.classList.remove("d-none");
  logout.classList.remove("d-none");
}
logout.addEventListener("click", () => {
  localStorage.clear();
  login.classList.remove("d-none");
  register.classList.remove("d-none");
  user.classList.add("d-none");
  bag.classList.add("d-none");
  location.reload();
});
