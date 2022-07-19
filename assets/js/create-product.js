import { categoryService, productService } from "../../server/main.js";
import { Product } from "../../server/Models/Product.js";

const form = document.querySelector("#create-product-form");

const { id: seller } = JSON.parse(localStorage.getItem("DRKTECK_SESSION"));

const productId = new URLSearchParams(window.location.search).get("productId");

const formData = new FormData(form);

if (productId) {
  const productData = productService.findById(productId);

  form.querySelector("[name='name']").value = productData.name;
  form.querySelector("[name='price']").value = productData.price;
  form.querySelector("[name='category']").value = productData.category;
  form.querySelector("[name='image-uri']").value = productData.images.sm;
  form.querySelector("[name='description']").value = productData.description;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = Object.fromEntries(Array.from(formData.entries()));

  const product = new Product({
    name: data.name,
    price: data.price,
    category: data.category,
    imageSm: data["image-uri"],
    imageLg: data["image-uri"],
    description: data.description,
    seller,
    id: productId,
  });

  const category = {
    name: data.category,
  };
  categoryService.create(category);

  if (productId) {
    productService.update(product);
  } else {
    productService.save(product);
  }

  window.location.href = "/auth.html";
});
