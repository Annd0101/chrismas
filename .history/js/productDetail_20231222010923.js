document.addEventListener("DOMContentLoaded", function () {
  // Get the input element and buttons
  const numberInput = document.getElementById("numberInput");
  const minusBtn = document.getElementById("minusBtn");
  const plusBtn = document.getElementById("plusBtn");

  // Add click event listeners
  minusBtn.addEventListener("click", function () {
    // Decrement the value if greater than 0
    numberInput.placeholder = Math.max(
      0,
      parseInt(numberInput.placeholder, 10) - 1
    );
  });

  plusBtn.addEventListener("click", function () {
    // Increment the value
    numberInput.placeholder = parseInt(numberInput.placeholder, 10) + 1;
  });
});

let mainThumb = document.querySelector(".thumb-main");
let firstThumb = document.querySelector(".thumb-1");
let secondThumb = document.querySelector(".thumb-2");
let thirdThumb = document.querySelector(".thumb-3");
let forthThumb = document.querySelector(".thumb-4");
firstThumb.addEventListener("click", () => {
  mainThumb.src = ".";
});
