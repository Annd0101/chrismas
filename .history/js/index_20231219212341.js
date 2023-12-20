// hover c1
function hoverEffect(element) {
  console.log(element);
  element.classList.toggle("text-danger");
}

// hover c2
// Select all elements button learn and shop now
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

// Select all elements heart
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

// Select all elements add to cart
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

// Select all elements cart title
var productTitles = document.querySelectorAll(".title");

productTitles.forEach(function (element) {
  // Add an event listener for the 'mouseover' event
  element.addEventListener("mouseover", function () {
    element.classList.remove("text-danger");
    element.style.color = "#83a931";
  });
  // Add an event listener for the 'mouseout' event
  element.addEventListener("mouseout", function () {
    // Revert the color to its original state on mouseout
    element.classList.add("text-danger");
  });
});

// check login
const user = document.querySelector(".user");
const bag = document.querySelector(".bag");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const check = localStorage.getItem("user");
if (check) {
  login.classList.add("d-none");
  register.classList.add("d-none");
  user.classList.remove("d-none");
  bag.classList.remove("d-none");
}
