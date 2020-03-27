module.exports = (req, res, next) => {
    if (req.body.cliente) {//Esse cliente vem do formulário (do arquivo index.ejs)
        console.log('-----------------------------------------');
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log('-----------------------------------------');
    }

    next();
};