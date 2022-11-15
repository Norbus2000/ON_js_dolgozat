import EgyElemView from "./EgyElemView.js";
class View {
  constructor(tomb, szuloElem) {
    szuloElem.append(
      `<div>
                <div class="elemek"></div>
            </div>`
    );

    this.foelem = szuloElem.children("div:last-child");
    this.elem = this.foelem.children("div");

    tomb.forEach((konyv) => {
      const konyvem = new EgyElemView(konyv, this.elem);
    });
  }
}

export default View;
