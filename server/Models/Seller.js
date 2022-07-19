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

  getID() {
    return this.#id;
  }

  getEmail() {
    return this.#email;
  }

  getName() {
    return this.#name;
  }

  getPassword() {
    return this.#password;
  }

  toJSON() {
    return {
      id: this.getID(),
      name: this.getName(),
      email: this.getEmail(),
      password: this.getPassword(),
    };
  }
}

export { Seller };
