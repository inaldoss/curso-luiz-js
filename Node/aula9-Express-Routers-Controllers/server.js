const express = require('express');
const app = express();
const routes = require('./routes');

// Trata o body das requisições
app.use(express.urlencoded({extended:true}));

// Utilizando as rotas do arquivo routes.js
app.use(routes);

app.listen(9895, () => {
    console.log('Acessar http://localhost:9895');
    console.log('Servidor executando na porta 9895...');
});