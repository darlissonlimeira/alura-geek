const session = JSON.parse(localStorage.getItem("DRKTECK_SESSION"));

if (session) {
  const baseURL = window.location.origin;
  const myProductsURL = new URL("/meus-produtos.html", baseURL);
  myProductsURL.search = `seller=${session.id}`;

  window.location.replace(myProductsURL);
} else {
  window.location.href = "/login.html";
}
