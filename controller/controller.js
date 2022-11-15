import View from "../View/view.js";
import Model from "../Model/model.js";

class Controller {
  constructor() {
    const model = new Model();
    model.adatBe("../adat.json", this.adatok);
    $(window).on("torol", (event) => {
      model.onTorles(event.detail);
    });
  }

  adatok(tomb) {
    let szuloelem = $(".app");
    new View(tomb, szuloelem);
  }
}

export default Controller;
