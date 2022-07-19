class Product {
  #images = {};
  #category;
  #name;
  #price;
  #description;
  #id;
  #seller;

  constructor({
    name,
    imageSm,
    imageLg,
    category,
    price,
    description,
    seller,
    id,
  }) {
    this.#images.sm = imageSm;
    this.#images.lg = imageLg;
    this.#category = category;
    this.#name = name;
    this.#price = price;
    this.#description = description;
    this.#seller = seller;
    this.#id = id || String(Date.now() + Math.random());
  }

  getID() {
    return this.#id;
  }

  getImages() {
    return this.#images;
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

  getImages() {
    return this.#images;
  }

  getSeller() {
    return this.#seller;
  }

  toJSON() {
    return {
      images: this.getImages(),
      category: this.getCategory(),
      name: this.getName(),
      price: this.getPrice(),
      description: this.getDescription(),
      id: this.getID(),
      seller: this.getSeller(),
    };
  }
}

export { Product };
