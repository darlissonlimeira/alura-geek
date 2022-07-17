const session = JSON.parse(localStorage.getItem("DRKTECK_SESSION"));

if (window.location.href.includes("/meus-produtos.html") && !session) {
  window.location.href = "/auth.html";
}
