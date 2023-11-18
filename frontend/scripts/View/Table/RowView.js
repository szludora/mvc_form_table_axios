class RowView {
  #obj = {};
  constructor(obj, index, parent) {
    this.#obj = obj;
    this.index = index;
    this.parent = parent;
    this.id = this.#obj.id;
    this.parent.append(this.createRow());
    this.deleteButton = this.parent.find(".deleteButton:last");
    this.deleteButton.on("click", (e) => {
      this.trigger("deleteRow");
    });
  }
  createRow() {
    let txt = `<tr>`;
    for (const key in this.#obj) {
        const element = this.#obj[key];
        let string = JSON.stringify(this.#obj[key]);

        // dátumok formázása
        if (key === 'created_at' || key === 'updated_at') {
            const formattedDate = new Date(element).toISOString().split('T')[0];
            txt += `<td>${formattedDate}</td>`;
        } else if (string[0] != "[" && string[0] != "{") {
            txt += `<td>${element}</td>`;
        } else {
            for (const target in element) {
                const objElem = element[target];
                let string = JSON.stringify(objElem);

          // travels kiiratása itt történne
          if (string[0] == "{") {
            // for (const objKey in objElem) {
            //   const e = objElem[objKey];
            //   txt += `<td>e: ${e}</td>`;
            // }

            // ariline kiírása
          } else {
            if(typeof element[target] != 'number'){

              txt += `<td>${element[target]}</td>`;
            }
          }
        }
      }
    }
    txt += `<td><button class="deleteButton">Delete</button></td></tr>`;
    return txt;
  }
  trigger(e) {
    const event = new CustomEvent(e, { detail: this.id });
    window.dispatchEvent(event);
  }
}
export default RowView;
