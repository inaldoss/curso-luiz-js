module.exports = (req, res, next) => {
    res.locals.UmavariavelLocal = 'Este é o valor da variável local.';
    next();
};