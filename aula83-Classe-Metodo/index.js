//Métodos estáticos e métodos de instância
//OBS: Métodos estáticos não tem acesso aos dados de instância.
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    //Método de instância
    dimunuirVolume() {
        this.volume -= 2;
    }
    //Método de estático
    static trocaPilha() {
        console.log('OK, vou trocar.')
    }
    //Método de estático
    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();//Chama pela instância
ControleRemoto.trocaPilha();//chama pela classe
console.log(controle1);

console.log(ControleRemoto.soma(2, 2));




