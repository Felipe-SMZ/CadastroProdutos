let produtos = [
    {id:1, nome: "Notebook", preco: 3500, categoria: "Eletrônicos"},
    {id:2, nome: "Cadeira Gamer", preco: 1200, categoria: "Móveis"}
];

module.exports = {

    listar() {
        return produtos;
    },

    adicionar(produto) {
        produto.id = produtos.length ? produtos[produtos.length -1].id +1 : 1;
        produtos.push(produto);
    },

    buscarPorId(id) {
        return produtos.find(p=> p.id == id);
    },

    editar(id, novoProduto) {
        const index = produtos.findIndex(p=> p.id == id);
        if (index >=0) {
            produtos[index] = {id: Number(id), ...novoProduto};
        }
    },

    excluir(id) {
        produtos = produtos.filter(p=> p.id != id);
    }
}