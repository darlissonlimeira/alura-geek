const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  const searchData = searchInput.value;

  window.location.href = `/alura-geek/produtos.html?search=${searchData.toLowerCase()}`;
});
