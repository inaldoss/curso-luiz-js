const mogoose = require('mongoose');

const HomeSchema = new mogoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mogoose.model('Home', HomeSchema);

module.exports = HomeModel;