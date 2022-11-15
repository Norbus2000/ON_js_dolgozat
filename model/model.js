class Model {
  #AdatokLista = [];
  #Darabszam;
  constructor() {}

  adatBe(vegpont, myCallBack) {
    fetch(vegpont, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.#AdatokLista = data.konyv;
        console.log(this.#AdatokLista);
        myCallBack(this.#AdatokLista);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  onTorles(index) {
    console.log(this.#AdatokLista[index]);
  }

  getAdatokLista() {
    return this.#AdatokLista;
  }
  getDarabszam() {
    this.#AdatokLista.forEach((elem) => {
      console.log(elem);
    });
  }
  setDarabszam() {}
}

export default Model;
