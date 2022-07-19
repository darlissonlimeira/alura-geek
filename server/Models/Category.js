class Category {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  toJSON() {
    return {
      name: this.getName(),
    };
  }
}

export { Category };
