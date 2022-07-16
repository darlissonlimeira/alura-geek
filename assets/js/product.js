import { productService } from "../../server/main.js";
import { templateProductDetails } from "./templates/product-details-template.js";
import { templateProduct } from "./templates/product-template.js";

const productDetailsEl = document.querySelector(".product-details");
const productListEl = document.querySelector(".product__list");

const productId = new URLSearchParams(window.location.search).get("id");

const getProduct = (id) => {
  return productService.findById(id);
};

const getRelatedProducts = (categoryName) => {
  const products = productService.findAll();
  return products.filter(
    (item) => item.category === categoryName && item.id !== productId
  );
};

const renderProductDetails = () => {
  const productDetails = getProduct(productId);
  const productDetailsHTML = templateProductDetails(productDetails);

  const relatedProducts = getRelatedProducts(productDetails.category);
  const relatedProductsHTML = relatedProducts
    .map((product) => templateProduct(product))
    .join("");

  productDetailsEl.innerHTML = productDetailsHTML;
  productListEl.innerHTML = relatedProductsHTML;
};

renderProductDetails();
