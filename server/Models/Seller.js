class Seller {
  #id;
  #email;
  #password;

  constructor(email, password) {
    this.#email = email;
    this.#password = password;
    this.#id = String(Date.now() + Math.random());
  }
}

export { Seller };
