class StorageService {
  #dbName;
  #data;

  constructor() {
    this.#dbName = "DRKTECK_DB";
    this.#data = JSON.parse(localStorage.getItem(this.#dbName)) || {
      categories: [],
      products: [],
      sellers: [],
    };
  }

  getData(docName) {
    if (!docName || typeof docName !== "string")
      throw "Can't find docData in database: " + docName;

    return this.#data[docName];
  }

  updateData(docName, docData) {
    if (!docData || typeof docData !== "object")
      throw "docData must be a Object.";
    if (!docName || typeof docName !== "string")
      throw "docData must be a string." + docName;

    this.#data[docName] = docData;
    localStorage.setItem(this.#dbName, JSON.stringify(this.#data));
  }
}

export { StorageService };
