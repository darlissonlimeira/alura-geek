class SellerService {
  #repository;

  constructor(sellerRepository) {
    this.#repository = sellerRepository;
  }

  create(seller) {
    this.#repository.create(seller);
  }

  findOne(sellerEmail) {
    const { id, email, name } = this.#repository.findOne(sellerEmail);

    const seller = {
      id,
      email,
      name,
    };

    return seller;
  }
}

export { SellerService };
