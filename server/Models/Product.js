class Product {
  #uri;
  #category;
  #name;
  #price;
  #description;
  #id;

  constructor({ name, uri, category, price, description }) {
    this.#uri = uri;
    this.#category = category;
    this.#name = name;
    this.#price = price;
    this.#description = description;
    this.#id = String(Date.now() + Math.random());
  }

  getID() {
    return this.#id;
  }

  getURI() {
    return this.#uri;
  }

  getCategory() {
    return this.#category;
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }

  getDescription() {
    return this.#description;
  }
}

export { Product };
