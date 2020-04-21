class View {
    constructor(elemento){
        this._elemento = elemento
    }
    template(model){
        throw new Error(" This method needs to be override")
    }
    update(model){
        this._elemento.innerHTML = this.template(model)
    }
}