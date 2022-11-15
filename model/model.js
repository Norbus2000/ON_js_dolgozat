class Model {
    #AdatokLista;
    #Darabszam;
    constructor() {
    }
    adatLekeres(fajl, callBack) {
      fetch(fajl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          callBack(data.konyv);
          this.#AdatokLista = data.konyv;
        });
    }
    getAdatokLista() {
      return this.#AdatokLista;
    }
    getDarabszam() {
        this.#AdatokLista[length-1]
    }
  }
  export default KonyvModel;