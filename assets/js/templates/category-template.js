import { templateProduct } from "./product-template.js";

const templateCategory = (sectionName, produtsList) => {
  const productTemplates = produtsList
    .map((product) => templateProduct(product))
    .join("");

  return `
    <section class="category">
      <div class="row category__container">
        <header class="category__header">
          <h2 id="${sectionName
            .toLowerCase()
            .replace(" ", "-")}" class="category__title">${sectionName}</h2>
          <a class="category___all-button" href="/produtos.html"
            >Ver tudo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="button-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </header>
        <ul class="product__list">
        ${productTemplates}
        </ul>
      </div>
    </section>
  `;
};

export { templateCategory };
