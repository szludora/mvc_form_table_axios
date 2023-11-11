import { descriptor } from "./descriptor.js";
import RowView from "./RowView.js";
import TableHeadView from "./TableHeadView.js";

class TableView {
  #list;
  constructor(list, parent) {
    this.#list = list;
    parent.append(`
    <table class='table table-striped table-hover'>
    <thead></thead>
    <tbody></tbody>
    </table>`);
    this.table = parent.find("table");
    this.thead = parent.find("thead");
    this.tbody = parent.find("tbody");
    new TableHeadView(descriptor, this.thead)
    this.createTbody(this.tbody)
  }

  createTbody(parent) {
    this.#list.forEach((e, i) => {
      new RowView(e, i, parent);
    });
  }
}

export default TableView;
