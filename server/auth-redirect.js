import { sellerService } from "./main.js";

const session = JSON.parse(localStorage.getItem("DRKTECK_SESSION"));
const sellerExists = session && sellerService.findOne(session.email);

if (session && sellerExists) {
  window.location.href = "/alura-geek/meus-produtos.html";
} else {
  window.location.href = "/alura-geek/login.html";
}
