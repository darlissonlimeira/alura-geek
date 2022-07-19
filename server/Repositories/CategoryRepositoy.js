class CategoryRepository {
  #storageDB;
  #categories;

  constructor(storageDB) {
    this.#storageDB = storageDB;
    this.#categories = this.#storageDB.getData("categories");
  }

  findOne(name) {
    return this.#categories.find((category) => category.name === name);
  }

  findAll() {
    return this.#categories;
  }

  create(category) {
    const categoryExists = this.findOne(category.name);

    if (categoryExists) {
      return;
    }

    this.#categories.push(category);
    this.#storageDB.updateData("categories", this.#categories);
  }
}

export { CategoryRepository };
