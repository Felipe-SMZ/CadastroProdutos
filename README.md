# 📦 Cadastro de Produtos (CRUD em Node.js - MVC)

Aplicação web simples para gerenciamento de produtos, desenvolvida como exercício da disciplina **Técnicas de Programação**.
O objetivo é praticar a arquitetura **MVC (Model-View-Controller)** e a implementação de um CRUD (**Create, Read, Update, Delete**) utilizando **Node.js** sem banco de dados (os dados ficam armazenados em memória).

---

## 🚀 Funcionalidades

* Listar produtos
* Adicionar novo produto
* Editar produto existente
* Excluir produto
* Layout simples e responsivo com CSS
* (Extra futuro) Filtro por categoria

---

## 🛠️ Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Express-Handlebars](https://handlebarsjs.com/) para as views
* [Body-parser](https://www.npmjs.com/package/body-parser)
* CSS puro para estilização

---

## 📂 Estrutura de pastas

```
CadastroProdutos/
├── app.js                 # arquivo principal
├── controllers/           # lógica das rotas
│   └── produtosController.js
├── models/                # manipulação dos dados em memória
│   └── produtosModel.js
├── views/                 # templates Handlebars
│   ├── layouts/
│   │   └── main.handlebars
│   └── produtos/
│       ├── lista.handlebars
│       ├── adicionar.handlebars
│       └── editar.handlebars
├── public/                # arquivos estáticos
│   └── css/
│       └── style.css
└── package.json
```

---

## ▶️ Como executar o projeto

1. Clone este repositório ou baixe os arquivos:

   ```bash
   git clone https://github.com/seu-usuario/cadastro-produtos.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd CadastroProdutos
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   node app.js
   ```

5. Acesse no navegador:

   ```
   http://localhost:3000
   ```

---

## 🎨 Layout

* O sistema possui um cabeçalho azul com navegação.
* Tabelas e formulários foram estilizados com **cards brancos e sombras leves**, deixando a aplicação simples e agradável.

---

## 📌 Observações

* Os dados são armazenados em memória (array em JavaScript).

  * Ao reiniciar o servidor, todos os produtos cadastrados serão apagados.
* Este projeto tem fins **didáticos**, servindo como introdução a MVC e CRUD com Node.js.

---

## ✨ Futuras melhorias

* Implementar filtro por categoria.
* Criar validações mais completas nos formulários.
* Exibir mensagens de sucesso/erro.
* Persistência de dados em banco (MySQL, PostgreSQL ou MongoDB).

