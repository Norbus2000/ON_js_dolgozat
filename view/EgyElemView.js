class EgyElemView {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    szuloElem.append(`
            <div class="egyelem">
                <h2>Cím: ${elem.cim}</h2>
                <h2>Szerző: ${elem.szerzo}</h2>
                <h3>Ár: ${elem.ar}</h3>
                <h3>Db: ${elem.db}</h3>
                <button class="torles">Darabszám csökkentése</button>
            </div>
`);
    this.recordElem = szuloElem.children("div:last-child");
    this.torolElem = szuloElem.children("div:last-child").children("button");
    this.torolElem.on("click", () => {
      this.kattintasTrigger("torol");
    });
  }
  kattintasTrigger(esemenyNeve) {
    const esemeny = new CustomEvent(esemenyNeve, { detail: this.#elem.id });
    window.dispatchEvent(esemeny);
  }
}

export default EgyElemView;
