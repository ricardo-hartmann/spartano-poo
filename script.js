class Produto {

    constructor() {
        this.id = 0;
        this.nomeProduto = '';
        this.valor = 0;
    }

    adicionar() {
        alert("Item adicionado!")
    }

    excluir() {
        alert("Item excluído!")
    }
}


var produto = new Produto()