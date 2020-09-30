class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adiciona (event) {
        event.preventDefault();

        let data = DateConverter.paraData(this._data.value);

        let negociacao = new Negociacao(
            data,
            parseInt(this._quantidade.value),
            parseFloat(this._valor.value)
        )

        let diaMesAno = DateConverter.paraTexto(negociacao.data);
        console.log(diaMesAno);

    }
}