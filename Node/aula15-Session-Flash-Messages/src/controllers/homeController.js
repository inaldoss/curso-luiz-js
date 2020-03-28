exports.paginaInicial = (req, res) => {
    //req.session.usuario = { nome: 'Luiz', logado: true }
    console.log(req.session.usuario);
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}