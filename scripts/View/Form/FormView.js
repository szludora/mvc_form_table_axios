import { descriptor } from "../Table/descriptor.js";

class FormView {
  constructor(parent) {
    this.parent = parent;
    parent.append(`<form class="form-horizontal>`);

    parent.append(this.createForm());
  }
  createForm() {
    this.parent.append(`<div class="d-flex align-items-center flex-column">`);
    for (const key in descriptor) {
      const element = descriptor[key];
      if(element!="Id"){
        this.parent.find(".d-flex")
        .append(`<div class="form-group mb-auto col-lg-3 col-md-6 col-sm-10">
        <label class="control-label p-2" for="${key}">${element}</label>
        <input type="text" class="form-control" id="${key}"></div>`);
      }
    }
    this.parent
      .find(".d-flex")
      .append(
        `<div class='mb-auto'><button class="btn btn-success submit">Küldés</button></div></div>`
      );
  }
}
export default FormView;
