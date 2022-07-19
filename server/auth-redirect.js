import { sellerService } from "./main.js";

const session = JSON.parse(localStorage.getItem("DRKTECK_SESSION"));
const sellerExists = session && sellerService.findOne(session.email);

if (session && sellerExists) {
  const baseURL = window.location.origin;
  const myProductsURL = new URL("/meus-produtos.html", baseURL);
  myProductsURL.search = `seller=${session.id}`;

  window.location.replace(myProductsURL);
} else {
  window.location.href = "/login.html";
}