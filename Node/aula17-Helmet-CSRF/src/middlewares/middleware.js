module.exports = (req, res, next) => {
    res.locals.UmavariavelLocal = 'Este é o valor da variável local.';
    next();
};

module.exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
}
module.exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}