class CategoryRepository {
  #storageDB;
  #categories;

  constructor(storageDB) {
    this.#storageDB = storageDB;
    this.#categories = this.#storageDB.getData("categories");
  }

  findByName(categoryname) {
    return this.#categories.find((category) => category.name === categoryname);
  }

  findAll() {
    return this.#categories;
  }

  save(category) {
    this.#categories.push(category);
  }
}

export { CategoryRepository };
