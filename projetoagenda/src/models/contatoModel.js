const mogoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mogoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = mogoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function () {
    this.valida();
    if (this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);//Aqui ele está manda para o MongoDB o body tratado na função cleanUp
};

Contato.prototype.valida = function () {
    this.cleanUp();
    //Validação
    //Se tiver e-mail, valida.
    if (this.body.email && !validator.isEmail(this.body.email)) { this.errors.push('E-mail inválido') }
    if (!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
    if (!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
    }
};

Contato.prototype.cleanUp = function () {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    }
}

Contato.prototype.edit = async function (id) {
    if (typeof id !== 'string') return;
    this.valida();
    if (this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
}
//Métodos estáticos (são métodos que não tem acesso ao this)
Contato.buscaPorId = async function (id) {
    if (typeof id !== 'string') return;
    const user = await ContatoModel.findById(id);
    return user;
}

Contato.buscaContatos = async function () {
    const user = await ContatoModel.find()
        .sort({ criadoEm: -1 });//Ordenando os contatos
    return user;
}

Contato.delete = async function (id) {
    if (typeof id !== 'string') return;
    const user = await ContatoModel.findByIdAndDelete(id);
    return user;
}

module.exports = Contato;