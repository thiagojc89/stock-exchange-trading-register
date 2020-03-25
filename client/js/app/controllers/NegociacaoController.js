class NegociacaoController {
    constructor(){
        // I could do this to avoid reapetition
        // mini jquery :)
        const $ = document.querySelector.bind(document)

        this._inputQuantidade = $('#quantidade')
        this._inputData = $('#data')
        this._inputValor = $('#valor')
        
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)
        
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagemView.update(this._mensagem)
    }
    add(event){
        event.preventDefault()

        // date format is comming like 'YYYY-MM-DD'
        // so we are gonna pass a array if that format ['yyyy','mm','dd']
        // we can do that by using split
        // const newdate = new Date(this._inputData.value.split('-'))

        // or using replace with regular expression
        // const newdate = new Date(this._inputData.value.replace(/-/g, ','))
        
        //Here I am destructuring an array 
        // let [year, month, day] = this._inputData.value.split('-')
        // and subtracting -1 from the month because the date constructor start counting the month from 0
        // month -= 1

        // using DateHelper helper to format the date
        
        this._listaNegociacoes.addNegociacao(this._criaNegociacao())
        this._negociacoesView.update(this._listaNegociacoes)
        this._listaNegociacoes.negociacoes.push(this._criaNegociacao())
        this._mensagem.text = "Negociacao criada com sucesso!"
        this._mensagemView.update(this._mensagem)
        
        console.log(this._listaNegociacoes.negociacoes)

        this._clearForm()
        
    }
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
            )
        }

    _clearForm(){
        this._inputData.value = ""
        this._inputQuantidade.value = "1"
        this._inputValor.value= "0.0"

        this._inputData.focus()
    }

}


// deferral due to the hardship from COVID - 19. 