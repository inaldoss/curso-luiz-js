// Capturar o evento submit do formulário
const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Capturando os dados dos input´s
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // Convertendo os valos para o tipo Number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Verificar se os valores são válidos
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    // Calculando o IMC
    const imc = getImc(peso, altura);
    // Verificando o nível de IMC
    const nivelImc = getNivelImc(imc);
    // Montando a mensagem
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >= 34.9) {
        return nivel[4];
    } else if (imc >= 29.9) {
        return nivel[3];
    } else if (imc >= 24.9) {
        return nivel[2];
    } else if (imc >= 18.9) {
        return nivel[1];
    } else if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Função para criar elemento HTML
function criaP() {
    const p = document.createElement('p'); // Criando o elemento p dentro da div
    return p;
}

// Função para mostrar o resultado
function setResultado(msg, isValid) {
    const res = document.querySelector('#resultado');
    res.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    res.appendChild(p);
}






