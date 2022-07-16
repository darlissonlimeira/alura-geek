const hasValidName = (name) => /^[a-zA-Z\s]{3,}$/g.test(name);

class CategoryService {
  #repository;

  constructor(categoryRepository) {
    this.#repository = categoryRepository;
  }

  save(category) {
    if (!hasValidName(category.getName())) throw "Not a valid category name.";

    const categoryExists = this.#repository.findByName(category.name);

    if (!categoryExists) {
      this.#repository.save(category);
    }

    return category.name;
  }

  findAll() {
    return this.#repository.findAll();
  }
}

export { CategoryService };
