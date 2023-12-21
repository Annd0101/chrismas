// display cart that has been added
let listCartHTML = document.querySelector(".listCart");
let summaryHTML = document.querySelector('.summary')
let cart = JSON.parse(localStorage.getItem("cart"));
let products = JSON.parse(localStorage.getItem("products"));
console.log(products);
console.log(cart);
const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = 0;
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
      let newItem2 = document.createElement("div");
      newItem2.classList.add("item");
      newItem2.dataset.id = item.product_id;
      listCartHTML.appendChild(newItem);
      summaryHTML.appendChild(newItem2)
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
                          <h6 class="mb-0 totalPrice">$${info.price * item.quantity}</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-muted">
                            <i class="fas fa-times"></i>
                          </a>
                        </div>
                      </div>


            `;
            newItem2.innerHTML = ` <h5 class="text-uppercase">${info.name}</h5>
            <h5>$${info.price * item.quantity}</h5>`
    });
  }
};
addCartToHTML();

listCartHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
      let product_id = positionClick.parentElement.parentElement.parentElement.parentElement.dataset.id;
      console.log(product_id);
      let type = 'minus';
      if(positionClick.classList.contains('plus')){
          type = 'plus';
      }
      changeQuantityCart(product_id, type);
  }
})
const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
  if(positionItemInCart >= 0){
      let info = cart[positionItemInCart];
      switch (type) {
          case 'plus':
              cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
              break;
      
          default:
              let changeQuantity = cart[positionItemInCart].quantity - 1;
              if (changeQuantity > 0) {
                  cart[positionItemInCart].quantity = changeQuantity;
              }else{
                  cart.splice(positionItemInCart, 1);
              }
              break;
      }
  }
  addCartToHTML();
  localStorage.setItem("cart", JSON.stringify(cart));
}