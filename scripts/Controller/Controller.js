import DataService from "../Modell/DataService.js";
import TableView from "../View/Table/TableView.js";
import FormView from "../View/Form/FormView.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("./jsons/datas2.json", this.show);
  }
  show(list) {
    new TableView(list, $(".datas"));
    new FormView($(".form"))
  }
}

export default Controller;
