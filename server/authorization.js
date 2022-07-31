import { sellerService } from "./main.js";

const session = JSON.parse(localStorage.getItem("DRKTECK_SESSION"));
const sellerExists = session && sellerService.findOne(session.email);

if (
  (window.location.href.includes("alura-geek/meus-produtos.html") &&
    !session) ||
  !sellerExists
) {
  window.location.href = "alura-geek/auth.html";
}
