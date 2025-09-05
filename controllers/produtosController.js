const ProdutosModel = require("../models/produtosModel");

module.exports = {
    listar(req, res) {
        const produtos = ProdutosModel.listar();
        res.render("produtos/lista", { produtos });
    },

    exibirAdicionar(req, res) {
        res.render("produtos/adicionar");
    },

    adicionar(req, res) {
        const { nome, preco, categoria } = req.body;
        ProdutosModel.adicionar({ nome, preco: Number(preco), categoria });
        res.redirect("/produtos");
    },

    exibirEditar(req, res) {
        const produto = ProdutosModel.buscarPorId(req.params.id);
        res.render("produtos/editar", { produto });
    },

    editar(req, res) {
        const { nome, preco, categoria } = req.body;
        ProdutosModel.editar(req.params.id, { nome, preco: Number(preco), categoria });
        res.redirect("/produtos");
    },

    excluir(req, res) {
        ProdutosModel.excluir(req.params.id);
        res.redirect("/produtos");
    }
};
