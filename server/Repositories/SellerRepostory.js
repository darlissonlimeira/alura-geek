class SellerRepository {
  #storageDB;
  #sellers;

  constructor(storageDB) {
    this.#storageDB = storageDB;
    this.#sellers = this.#storageDB.getData("sellers");
  }

  create(seller) {
    this.#storageDB.push(seller);
    this.#storageDB.updateData("products", this.#sellers);
  }

  findOne(sellerEmail) {
    return this.#storageDB.find((seller) => seller.email === sellerEmail);
  }
}

export { SellerRepository };
