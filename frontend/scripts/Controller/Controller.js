import DataService from "../Modell/DataService.js";
import TableView from "../View/Table/TableView.js";
import FormView from "../View/Form/FormView.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("api/flights", this.show);
    // $(window).on("deleteRow"),
    //   (e) => {
    //     console.log(e.detail);
    //   };
  }
  show(list) {
    new TableView(list, $(".datas"));
    new FormView($(".form"));
  }
}

export default Controller;
