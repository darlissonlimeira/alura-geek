import { authService, productService } from "../../server/main.js";

import { templateManagerProduct } from "./templates/manager-product-template.js";

const logoutForm = document.querySelector("#logout-form");
const productListEl = document.querySelector(".h-product__list");
const { id: sellerId } = JSON.parse(localStorage.getItem("DRKTECK_SESSION"));

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

const renderProducts = (searchFilter) => {
  if (searchFilter) {
    const products = productService
      .findAll()
      .filter((product) => product.seller === sellerId)
      .filter((product) =>
        product.name.toLowerCase().includes(searchFilter.toLowerCase())
      )
      .map((product) => templateManagerProduct(product));

    const productsHTML = products.join("");
    productListEl.innerHTML = productsHTML;

    document.querySelector(
      "#results"
    ).textContent = `${products.length} resultados para "${searchFilter}."`;

    return;
  }

  const productsHTML = productService
    .findAll()
    .filter((product) => product.seller === sellerId)
    .map((product) => templateManagerProduct(product))
    .join("");

  productListEl.innerHTML = productsHTML;
};

logoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  authService.signOut();
  window.location.href = "/alura-geek/login.html";

  return;
});

renderProducts();

const productItems = document.querySelectorAll(".product__item");

productItems.forEach((item) => {
  const form = item.querySelector(".product__form-delete");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    item.classList.add("remove");

    const id = form.elements[0].value;

    item.addEventListener("transitionend", () => {
      item.remove();
      productService.destroy(id);
    });
  });
});

searchButton.addEventListener("click", () => {
  const searchData = searchInput.value;

  renderProducts(searchData);
});
