const hasValidName = (name) => /^[a-zA-Z\s]{3,}$/g.test(name);

class CategoryService {
  #repository;

  constructor(categoryRepository) {
    this.#repository = categoryRepository;
  }

  create(category) {
    if (!hasValidName(category.name)) throw "Not a valid category name.";

    const categoryExists = this.#repository.findOne(category.name);

    if (categoryExists) {
      return;
    }

    this.#repository.create(category);
  }

  findOne(name) {
    return this.#repository().findOne(name);
  }

  findAll() {
    return this.#repository.findAll();
  }
}

export { CategoryService };
