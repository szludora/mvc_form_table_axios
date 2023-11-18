class RowView {
  #obj = {};
  constructor(obj, index, parent) {
    this.#obj = obj;
    this.index = index;
    parent.append(this.createRow());
    this.deleteRow = this.parent.find(".deleteButton:last");
    console.log(deleteRow);
    this.deleteRow.on("click", () => {
      console.log("Delete");
      this.trigger("deleteRow");
    });
  }
  createRow() {
    let txt = `<tr>`;
    for (const key in this.#obj) {
      const element = this.#obj[key];
      txt += `<td>${element}</td>`;
    }
    txt += `<td><button class="deleteButton">Delete</button></td>`;
    txt += `</tr>`;
    return txt;
  }
  trigger(e) {
    const event = new CustomEvent(e, { detail: this.index });
    window.dispatchEvent(event);
  }
}
export default RowView;
