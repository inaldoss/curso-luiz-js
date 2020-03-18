const express = require('express');
const app = express();

// Trata o body das requisições
app.use(
    express.urlencoded({
        extended:true
    })
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method= "POST">
    Nome: <input type="text" name="qualquercoisa">
    <button>Enviar Formulário</button>
    </form>
    `);
});

// Interrogação serve para indicar que o parâmetro não é obrigatório
app.get('/testes/:idUsuario?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuario);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000...')
});