class ListaNegociacoes {
    constructor(){
        this._negociacoes = []
    }
    addNegociacao(negociacao){
        this._negociacoes.push(negociacao)
        
    }
    get negociacoes (){
        // here I am using the spread operator as a defensive programming to avoid
        // external manipulatio. that means I sending a copy of the original array _negociacoes
        return [...this._negociacoes]
    }
    deleteAll (){
        this._negociacoes = []
    }
}