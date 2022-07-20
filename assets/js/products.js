import { productService } from "../../server/main.js";
import { templateProduct } from "./templates/product-template.js";

const productListEl = document.querySelector(".all-products__list");

const searchParam = new URLSearchParams(window.location.search).get("search");

const renderProducts = (searchFilter) => {
  if (searchFilter) {
    const productsHTML = productService
      .findAll()
      .filter((product) =>
        product.name.toLowerCase().includes(searchFilter.toLowerCase())
      )
      .map((product) => templateProduct(product))
      .join("");

    productListEl.innerHTML = productsHTML;

    return;
  }

  const productsHTML = productService
    .findAll()
    .map((product) => templateProduct(product))
    .join("");

  productListEl.innerHTML = productsHTML;
};

const search = (searchData) => {
  renderProducts(searchData.toLowerCase());
};

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  const searchData = searchInput.value;
  search(searchData);
});

if (searchParam) {
  renderProducts(searchParam);
} else {
  renderProducts();
}
