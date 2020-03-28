require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('Pronto');
    })
    .catch(e => console(e + 'Deu erro!!!!'));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

// Trata o body das requisições
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'hfshfkhkfhhdfhdifheifhef1f545f12f2df4',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));// Está setando o caminho das views, a linha 10 é a mesma funcionalidade, apenas foi escrito de forma mais simples.
//app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use(meuMiddleware);
// Utilizando as rotas do arquivo routes.js
app.use(routes);

app.on('Pronto', () => {
    app.listen(1919, () => {
        console.log('Acessar http://localhost:1919');
        console.log('Servidor executando na porta 1919...');
    });
});
