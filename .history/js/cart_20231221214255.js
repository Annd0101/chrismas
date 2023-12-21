// display cart that has been added
let listCartHTML = document.querySelector(".listCart");
let summaryHTML = document.querySelector(".summary");
let totalSummary = document.querySelector(".totalSummary");
let cart = JSON.parse(localStorage.getItem("cart"));
let products = JSON.parse(localStorage.getItem("products"));
let badge = document.querySelector(".badge");
badge.innerHTML = cart.length;
const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  summaryHTML.innerHTML = "";
  totalSummary.innerHTML = "";
  let totalQuantity = 0;
  let total = 0;
  if (cart.length > 0) {
    cart.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;

      let newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.dataset.id = item.product_id;
      let positionProduct = products.findIndex(
        (value) => value.id == item.product_id
      );
      let info = products[positionProduct];
      let itemSummary = document.createElement("div");
      itemSummary.classList.add("item");
      itemSummary.dataset.id = item.product_id;
      listCartHTML.appendChild(newItem);
      summaryHTML.appendChild(itemSummary);
      let total1 = 0;
      total1 = total1 + info.price * item.quantity;
      total = total + total1;
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
      // summary product
      itemSummary.innerHTML = `<div class="w-100 d-flex justify-content-between mt-3"> <h5 class="text-uppercase">${
        info.name
      }</h5>
            <h5>$${info.price * item.quantity}</h5> </div>`;
    });
    // summary price
    let priceSummary = document.createElement("div");
    priceSummary.classList.add("d-flex");
    priceSummary.classList.add("justify-content-between");
    priceSummary.classList.add("w-100");
    totalSummary.appendChild(priceSummary);
    priceSummary.innerHTML = `   <h5 class="text-uppercase fw-bold">Total price</h5>
                  <h5 class="text-success fw-bold">$${total} </h5>`;
    // apply shipping 
    let shippingSelected = document.querySelector('.select')
    shippingSelected.addEventListener('change', )
  }
};
addCartToHTML();

listCartHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (
    positionClick.classList.contains("minus") ||
    positionClick.classList.contains("plus")
  ) {
    let product_id =
      positionClick.parentElement.parentElement.parentElement.parentElement
        .dataset.id;
    let type = "minus";
    if (positionClick.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantityCart(product_id, type);
  }
  if (positionClick.classList.contains("delete")) {
    let product_id =
      positionClick.parentElement.parentElement.parentElement.parentElement
        .dataset.id;
    deleteCart(product_id);
  }
});
const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (positionItemInCart >= 0) {
    let info = cart[positionItemInCart];
    switch (type) {
      case "plus":
        cart[positionItemInCart].quantity =
          cart[positionItemInCart].quantity + 1;
        break;

      default:
        let changeQuantity = cart[positionItemInCart].quantity - 1;
        if (changeQuantity > 0) {
          cart[positionItemInCart].quantity = changeQuantity;
        } else {
          cart.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
  localStorage.setItem("cart", JSON.stringify(cart));
};
const deleteCart = (product_id) => {
  var carts = JSON.parse(localStorage.getItem("cart")) || {};
  let positionItemInCart = carts.findIndex(
    (value) => value.product_id == product_id
  );
  // Xóa giỏ hàng theo cartId
  console.log(carts);
  carts.splice(positionItemInCart, 1);
  localStorage.setItem("cart", JSON.stringify(carts));
  addCartToHTML();
  alert("Delete successfully");
  location.reload();
};
