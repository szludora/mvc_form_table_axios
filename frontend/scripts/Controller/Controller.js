import DataService from "../Modell/DataService.js";
import TableView from "../View/Table/TableView.js";
import FormView from "../View/Form/FormView.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("flights", this.show);
    $(window).on("deleteRow", (e) => {
      this.dataService.delData("flights", e.detail, this.show, this.errorMessage);
    });
    
  }
  show(list) {
    new TableView(list, $(".datas"));
    new FormView($(".form"));
  }
  errorMessage(error) {
    console.log("Error message: ", error);
  }
}

export default Controller;
