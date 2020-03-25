class NegociacoesView extends View{

    constructor(element){
        super(element)
        this._element = element
    }

    template(model) {   
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                ${
                    model.negociacoes.map(negociacao => `
                            <tr>
                                <td>${DateHelper.dateToText(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                    ).join('')
                }
                </tbody>

                <tfoot>
                    <td colspan='3'></td>
                    <td>
                        ${model.negociacoes.reduce((total, elem)=> total += elem.volume,0.0)}
                    </td>
                </tfoot>
            </table>`
    }
}