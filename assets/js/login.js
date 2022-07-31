import { authService } from "../../server/main.js";

const form = document.querySelector("#login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const [email, password] = Array.from(formData.values());
  const authData = authService.signIn(email, password);

  if (!authData) return;

  window.location.href = "/alura-geek/auth.html";
});
