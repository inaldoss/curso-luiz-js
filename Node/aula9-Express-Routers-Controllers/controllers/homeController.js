exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method= "POST">
    Nome: <input type="text" name="qualquercoisa">
    <button>Enviar Formulário</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, eu sou sua nova rota de POST.')
}