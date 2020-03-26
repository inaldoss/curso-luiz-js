const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// Trata o body das requisições
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));// Está setando o caminho das views, a linha 10 é a mesma funcionalidade, apenas foi escrito de forma mais simples.
//app.set('views', './src/views');
app.set('view engine', 'ejs');

// Utilizando as rotas do arquivo routes.js
app.use(routes);

app.listen(1919, () => {
    console.log('Acessar http://localhost:1919');
    console.log('Servidor executando na porta 1919...');
});