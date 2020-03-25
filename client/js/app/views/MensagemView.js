class MensagemView extends View{
    constructor(element){
        super(element)
        this._element = element
    }
    template(model){
        return model.text ?`<p class="alert alert-info">${model.text}</p>`: `<p></p>`
    }

}


// Crie uma classe chamada Conta.Ela terá apenas um atributo: o saldo.Passe o atributo no construtor e crie também um getter para a propriedade.

// Além disso, defina o método atualiza, na classe Conta, que recebe um parâmetro taxa.

// Dentro do método atualiza, jogue uma exceção para garantir que ninguém chame o método sem ter uma filha em mãos.

// Não é necessário criar outra classe que herde de Conta por enquanto, a ideia aqui é apenas focar o design da classe.

class Conta {
    constructor(saldo){
        this._saldo = saldo
    }

    get saldo(){
        return this._saldo
    }

    atualiza(taxa){
        throw new Error(" You need to override the method 'atualiza' in the child class")
    }
}

class ContaCorrente extends Conta{
    constructor(saldo){
        super(saldo)
    }
    
    atualiza(taxa){
        this._saldo += taxa
    }
}

class ContaPoupanca extends Conta{
    constructor(saldo){
        super(saldo)
    } 
    
    atualiza(taxa){
        this._saldo += taxa*2
    }
}
// conta1 = new ContaCorrente(200);
// conta2 = new ContaPoupanca(300);
// conta1.atualiza(2);
// conta2.atualiza(3);
// console.log(conta1.saldo); //202
// console.log(conta2.saldo); //306