import { productService } from "../../server/main.js";
import { Product } from "../../server/Models/Product.js";

const form = document.querySelector("#create-product-form");

const { id: seller } = JSON.parse(localStorage.getItem("DRKTECK_SESSION"));

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
  });

  productService.save(product);

  window.location.href = "/auth.html";
});
