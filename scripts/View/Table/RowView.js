class RowView {
  #obj = {};
  constructor(obj, index, parent) {
    this.#obj = obj;
    this.index = index;
    parent.append(this.createRow());
  }
  createRow() {
    let txt = `<tr>`;
    for (const key in this.#obj) {
      const element = this.#obj[key];
      txt += `<td>${element}</td>`;
    }
    txt += `</tr>`;
    return txt;
  }
}
export default RowView;
