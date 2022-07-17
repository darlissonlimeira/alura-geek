const templateManagerProduct = (product) => {
  return `
  <li class="product__item">
    <div class="product__card">
      <figure>
        <img
          class="product__img"
          src="${product.images.sm}"
          alt="${product.name}"
        />
      </figure>

      <div class="product__data">
        <div class="product__control">
          <a class="product__edit-button" href="#"
          >Editar produto</a>
          <form class="product__form-delete" data-id="${product.id}">
            <button class="product__delete-button" data-label="Excluir produto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="button-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            </form>
        </div>
        <div class="product__info">
          <h3 class="product__title">${product.name}</h3>
          <h4 class="product__price">R$ ${product.price}</h4>
        </div>
      </div>
    </div>
  </li>
  `;
};

export { templateManagerProduct };
