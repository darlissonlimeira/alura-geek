const form = document.querySelector("#login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = window.location.href.replace("login.html", "meus-produtos.html");
  window.location.replace(url);

  return;
});
