import { authService, productService } from "../../server/main.js";

import { templateManagerProduct } from "./templates/manager-product-template.js";

const logoutForm = document.querySelector("#logout-form");
const productListEl = document.querySelector(".h-product__list");
const sellerId = new URLSearchParams(window.location.search).get("seller");

const renderProducts = () => {
  const productsHTML = productService
    .findAll()
    .filter((product) => product.seller === sellerId)
    .map((product) => templateManagerProduct(product))
    .join("");

  productListEl.innerHTML = productsHTML;
};

renderProducts();

logoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  authService.signOut();
  window.location.href = "/login.html";

  return;
});

const productItems = document.querySelectorAll(".product__item");

productItems.forEach((item) => {
  const form = item.querySelector(".product__form-delete");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    item.classList.add("remove");

    item.addEventListener("transitionend", () => {
      item.remove();
      productService.destroy(form.dataset.id);
    });
  });
});
