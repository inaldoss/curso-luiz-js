class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    //Prototype
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
    }
    //Prototype
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }
        this.ligado = true;
    }
}

// Smartphone herdando a classe DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);//o "super" chama o construtor da classe pai e passando todos os seus parâmetros que nesse caso é apenas "nome". Para não ter que passar um monte de "this".
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    //Sobrescrevendo o método "ligar" da classe pai
    ligar() {
        console.log('Olha, você alterou método ligar!');
    }
    //Criando um método novo e ele não se extende à classe pai. A herança só funciona de cima para baixo.
    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.falaOi();
console.log(t1);