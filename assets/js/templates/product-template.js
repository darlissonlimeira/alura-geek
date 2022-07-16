const templateProduct = (product) => {
  return `
  <li class="product__item">
    <a class="product__link" data-id="${product.id}" href="./produto.html?product=${product.name}&id=${product.id}">
      <div class="product__card">
        <figure>
          <img
            class="product__img"
            src="${product.images.sm}"
            alt=""
          />
        </figure>
        <div class="product__info">
          <h3 class="product__title">${product.name}</h3>
          <h4 class="product__price">${product.price}</h4>
        </div>
      </div>
    </a>
  </li>
  `;
};

export { templateProduct };
