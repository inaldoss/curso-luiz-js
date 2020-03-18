// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    )
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo); // passando agencia, conta e saldo para a conta
    this.limite = limite; // aqui o limite é da conta corrente
}

// likando os objetos
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

//sobresctita do método sacas do objeto Conta
CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo); // passando agencia, conta e saldo para a conta
}

// likando os objetos
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

