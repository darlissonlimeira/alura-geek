class ProductRepository {
  #storageDB;
  #products;

  constructor(storageDB) {
    this.#storageDB = storageDB;
    this.#products = this.#storageDB.getData("products");
  }

  save(product) {
    this.#products.push(product);

    console.log(this.#products);
    this.#storageDB.updateData("products", this.#products);
  }

  destroy(productId) {
    const updatedProducts = this.#products.filter(
      (product) => product.id !== productId
    );
    this.#products = updatedProducts;

    this.#storageDB.updateData("products", this.#products);
  }

  update(productData) {
    for (const product of this.#products) {
      if (product.id === productData.id) {
        product = {
          ...productData,
        };
        break;
      }
    }

    this.#storageDB.updateData("products", this.#products);
  }

  findAll() {
    return this.#products;
  }

  findById(productId) {
    return this.#products.find((product) => product.id === productId);
  }

  findByName(productName) {
    return this.#products.find((product) => product.name === productName);
  }
}

export { ProductRepository };
