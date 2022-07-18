class Seller {
  #id;
  #email;
  #password;
  #name;

  constructor({ email, password, name }) {
    this.#email = email;
    this.#password = password;
    this.#name = name;
    this.#id = String(Date.now() + Math.random());
  }
}

export { Seller };
