import { authService, productService } from "../../server/main.js";

import { templateManagerProduct } from "./templates/manager-product-template.js";

const logoutForm = document.querySelector("#logout-form");

const renderProducts = () => {
  const productListEl = document.querySelector(".h-product__list");
  const sellerId = new URLSearchParams(window.location.search).get("seller");

  const productsHTML = productService
    .findAll()
    .filter((product) => product.sellerId === sellerId)
    .map((product) => templateManagerProduct(product))
    .join("");

  productListEl.innerHTML = productsHTML;
};

if (!localStorage.getItem("DRKTECK_SESSION")) {
  window.location.href = "/login.html";
} else {
  renderProducts();
}

logoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  authService.signOut();
  window.location.href = "/login.html";
});
