import { productService } from "../../server/main.js";
import { templateProduct } from "./templates/product-template.js";

const productListEl = document.querySelector(".all-products__list");

const searchParam = new URLSearchParams(window.location.search).get("search");

const renderProducts = (searchFilter) => {
  if (searchFilter) {
    const products = productService
      .findAll()
      .filter((product) =>
        product.name.toLowerCase().includes(searchFilter.toLowerCase())
      )
      .map((product) => templateProduct(product));

    const productsHTML = products.join("");
    productListEl.innerHTML = productsHTML;

    document.querySelector(
      "#results"
    ).textContent = `${products.length} resultados para "${searchFilter}."`;

    return;
  }

  const productsHTML = productService
    .findAll()
    .map((product) => templateProduct(product))
    .join("");

  productListEl.innerHTML = productsHTML;
};

const search = (searchData) => {
  renderProducts(searchData);
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
