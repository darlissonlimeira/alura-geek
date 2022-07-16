class AuthService {
  #sellerService;

  constructor(sellerService) {
    this.#sellerService = sellerService;
  }

  signIn(email, password) {
    const seller = this.#sellerService.findOne(sellerEmail);

    if (!seller || seller.email !== email || seller.password !== password) {
      throw "Email or password wrong.";
    }

    const signInData = {
      id: seller.id,
      email: seller.email,
    };

    localStorage.setItem("drkteck-session", JSON.stringify(signInData));

    return {
      loggedIn: signInData,
    };
  }

  signOut() {
    localStorage.removeItem("drkteck-session");

    return {
      loggedIn: null,
    };
  }
}

export { AuthService };
