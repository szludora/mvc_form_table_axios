class TableHeadView{
    #obj;
    constructor(obj, parent){
        this.#obj=obj;
        parent.append(this.create())
    }
    create(){
        let txt = `<tr>`
        for (const key in this.#obj) {
            const element = this.#obj[key];
            txt += `<th>${element}</th>`
        }
        txt += `</tr>`
        return txt
    }
}

export default TableHeadView;