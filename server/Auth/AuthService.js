class AuthService {
  #sellerService;

  constructor(sellerService) {
    this.#sellerService = sellerService;
  }

  signIn(email, password) {
    const seller = this.#sellerService.findOne(email);

    if (!seller || seller.email !== email || seller.password !== password) {
      return {
        loggedIn: null,
      };
    }

    const signInData = {
      id: seller.id,
      email: seller.email,
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
