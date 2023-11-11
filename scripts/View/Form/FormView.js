import {descriptor} from "../Table/descriptor.js";

class FormView {
  constructor(parent) {
    this.parent = parent;
    parent.append(`<form class="form-horizontal>`);

    parent.append(this.createForm());
  }
  createForm() {
    for (const key in descriptor) {
      const element = descriptor[key];

      this.parent.append(`
      <div class="form-group col-8">
        <label class="control-label col-sm-2" for="${key}">${element}</label>
        <div ><input type="text" class="form-control" id="${key}"></div>
      </div>`);
    }
  }
}
export default FormView;
