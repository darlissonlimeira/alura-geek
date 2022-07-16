class SellerService {
  #repository;

  constructor(sellerRepository) {
    this.#repository = sellerRepository;
  }

  create(seller) {
    this.#repository.create(seller);
  }

  findOne(sellerEmail) {
    return this.#repository.findOne(sellerEmail);
  }
}

export { SellerService };
