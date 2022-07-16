class Category {
  #name;

  constructor(name) {
    this.#name = name;

    Object.freeze(this);
  }

  getName() {
    return this.#name;
  }
}

export { Category };
