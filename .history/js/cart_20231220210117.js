// display cart that has been added
let listCartHTML = document.querySelector(".listCart");
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
      listCartHTML.appendChild(newItem);
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
                          <h6 class="text-success">${info.name}</h6>
                          <h6 class="text-black mb-0">${info.category}</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            class="btn btn-link px-1 me-1"
                            
                          >
                            <i class="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="${item.quantity}"
                            class="form-control form-control-sm text-center"
                          />

                          <button
                            class="btn btn-link px-1 ms-1"
                           
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">€ 44.00</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-muted">
                            <i class="fas fa-times"></i>
                          </a>
                        </div>
                      </div>


            `;
    });
  }
};
addCartToHTML();
