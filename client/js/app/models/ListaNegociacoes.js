class ListaNegociacoes {
    constructor(armadilha){
        this._negociacoes = [],
        this._armadilha = armadilha // this is a function that will call the update method on the View
    }
    addNegociacao(negociacao){
        this._negociacoes.push(negociacao)
        this._armadilha(this)
    }
    get negociacoes (){
        // here I am using the spread operator as a defensive programming to avoid
        // external manipulatio. that means I sending a copy of the original array _negociacoes
        return [...this._negociacoes]
    }
    deleteAll (){
        this._negociacoes = []
        this._armadilha(this)
    }
}