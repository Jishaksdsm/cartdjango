document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const productItems = document.querySelectorAll(".product-item");
  
    let total = 0;
    const cart = {};
  
    productItems.forEach((productItem) => {
      const addToCartButton = productItem.querySelector(".add-to-cart-button");
      const productId = productItem.dataset.productId;
      const productName = productItem.querySelector(".product-name").innerText;
      const productPrice = parseFloat(productItem.querySelector(".product-price").innerText.slice(1));
  
      addToCartButton.addEventListener("click", () => {
        if (cart[productId]) {
          cart[productId].quantity += 1;
        } else {
          cart[productId] = {
            name: productName,
            price: productPrice,
            quantity: 1,
          };
        }
  
        updateCartDisplay();
      });
    });
  
    function updateCartDisplay() {
      cartItems.innerHTML = "";
      total = 0;
  
      for (const productId in cart) {
        const product = cart[productId];
        total += product.price * product.quantity;
  
        const cartItem = document.createElement("li");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
          <span>${product.name}</span>
          <span>$${(product.price * product.quantity).toFixed(2)}</span>
        `;
  
        cartItems.appendChild(cartItem);
      }
  
      cartTotal.innerText = `Total: $${total.toFixed(2)}`;
    }
  
    checkoutButton.addEventListener("click", () => {
      // Handle checkout and reset cart
      alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}.`);
      cartItems.innerHTML = "";
      cartTotal.innerText = "Total: $0.00";
      total = 0;
      cart = {};
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            alert("Product added to cart!");
        });
    });
});