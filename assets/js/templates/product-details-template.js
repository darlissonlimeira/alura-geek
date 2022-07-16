const templateProductDetails = (product) => {
  return `
  <div class="product-details__container">
    <img
      class="product-details__img"
      src="${product.images.lg}"
      alt=""
    />

    <div class="row product-details__info">
      <h1 class="product-details__name">${product.name}</h1>
      <h2 class="product-details__price">R$ ${product.price}</h2>
      <p class="product-details__description">
      ${product.description}
      </p>
    </div>
  </div>
  `;
};

export { templateProductDetails };
