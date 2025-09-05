const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const produtosController = require("./controllers/produtosController");

const app = express();

// Configurações
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => res.redirect("/produtos"));
app.get("/produtos", produtosController.listar);
app.get("/produtos/adicionar", produtosController.exibirAdicionar);
app.post("/produtos/adicionar", produtosController.adicionar);
app.get("/produtos/:id/editar", produtosController.exibirEditar);
app.post("/produtos/:id/editar", produtosController.editar);
app.post("/produtos/:id/excluir", produtosController.excluir);

// Servidor
app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));