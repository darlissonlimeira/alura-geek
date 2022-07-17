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

  findOne(email) {
    return this.#sellers.find((seller) => seller.email === email);
  }
}

export { SellerRepository };
