// Display products
let listProduct = [];
let products = [];
let listProductHTML = document.querySelector(".listProduct");
const addDataToHTML = () => {
  // remove datas default from HTML
  listProductHTML.innerHTML = "";
  // add new datas
  if (products.length > 0) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `            <div class="col animate__animated animate__fadeInLeft">
              <div class="card h-100">
                <a href="./productDetail.html">
                  <img
                    src="${product.image}"
                    class="card-img-top position-relative"
                    alt="product 1"
                  />
                </a>
                <div
                  class="position-absolute d-flex justify-content-between align-items-center w-100 "
                >
                  <a href="./wishlist.html" class="ms-3 mt-4">
                    <!-- hover via class heart -->
                    <i
                      class="far fa-heart bg-danger p-3 rounded-circle text-white heart hvr-grow"
                    ></i>
                  </a>
                  <span class="me-3 mt-4 text-success hvr-grow fs-5" onmouseover="hoverEffect(this)" onmouseout="hoverEffect(this)">New</span>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <a href="./productDetail.html" class="text-decoration-none">
                      <!-- hover via class title -->
                      <h4 class="card-title text-danger fw-bold title hvr-grow">
                        ${product.name}
                      </h4>
                    </a>
                    <span class="fw-bold fs-4">$${product.price}</span>
                  </div>
                  <p class="card-text text-start">${product.category}</p>
                  <!-- hover via class add -->
                  <button
                    class="btn btn-outline-secondary text-white bg-success d-flex add hvr-grow addCart"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>`;
      listProductHTML.appendChild(newProduct);
    });
    localStorage.setItem("products", JSON.stringify(products));
  }
};
let badge = document.querySelector(".badge");
listProductHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    // get product id
    let id_product =
      positionClick.parentElement.parentElement.parentElement.parentElement
        .dataset.id;
    addToCart(id_product);
    alert("Add to cart successfully");
    badge.innerHTML = cart.length;
  }
});
const checked = JSON.parse(localStorage.getItem("cart"));
console.log(checked);
if (!checked) {
  localStorage.setItem("cart", JSON.stringify([]));
}
let cart = JSON.parse(localStorage.getItem("cart"));
badge.innerHTML = cart.length;
const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (cart.length <= 0) {
    cart = [
      {
        product_id: product_id,
        quantity: 1
      }
    ];
  } else if (positionThisProductInCart < 0) {
    cart.push({
      product_id: product_id,
      quantity: 1
    });
  } else {
    cart[positionThisProductInCart].quantity =
      cart[positionThisProductInCart].quantity + 1;
  }
  addCartToMemory();
};
const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// click subscribe
const subscribeBtn = document.querySelector(".subscribe");
const subscribeEmail = document.querySelector(".subscribeEmail");
console.log(subscribeEmail.value);
subscribeBtn.addEventListener("click", () => {
  if ((subscribeEmail.value = "")) {
    alert("Please fill in the email for subscribe");
  } else {
    alert("Subscribe successfull");
  }
});

const initApp = () => {
  // get data product
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      addDataToHTML();
    });
};
initApp();
