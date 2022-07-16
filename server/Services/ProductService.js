class ProductService {
  #repository;

  constructor(productRepository) {
    this.#repository = productRepository;
  }

  save(product) {
    const productExists = this.#repository.findByName(product.name);

    if (productExists) throw "Esse produto já existe na base de dados.";

    this.#repository.save(product);
  }

  destroy(productId) {
    this.#repository.destroy(productId);
  }

  update(product) {
    this.#repository.update(product);
  }

  findAll() {
    return this.#repository.findAll();
  }

  findByName(productName) {
    return this.#repository.findByName(productName);
  }

  findById(productId) {
    return this.#repository.findById(productId);
  }
}

export { ProductService };
