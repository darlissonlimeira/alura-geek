class AuthService {
  #sellerRepository;

  constructor(sellerRepository) {
    this.#sellerRepository = sellerRepository;
  }

  signIn(email, password) {
    const seller = this.#sellerRepository.findOne(email);

    if (!seller || seller.email !== email || seller.password !== password) {
      return {
        loggedIn: null,
      };
    }

    const signInData = {
      id: seller.id,
      email: seller.email,
      name: seller.name,
    };

    localStorage.setItem("DRKTECK_SESSION", JSON.stringify(signInData));

    return {
      loggedIn: signInData,
    };
  }

  signOut() {
    localStorage.removeItem("DRKTECK_SESSION");

    return {
      loggedIn: null,
    };
  }
}

export { AuthService };
