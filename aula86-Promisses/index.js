function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min));
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string')
            reject('BAD VALUE');
        return;

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', aleatorio(1, 3));
    })
    .then(resposta => { /*Está pegando o retorno da Frase 2*/
        console.log(resposta);
        return esperaAi('Frase 3', aleatorio(1, 3));
    })
    .then(resposta => { /*Está pegando o retorno da Frase 3*/
        console.log(resposta);
    })
    .then(() => {
        console.log('Eu não recebi parametro nenhum.')
    })
    .catch(e => { /*Está pegando o retorno do reject*/
        console.log('ERRO -', e)
    });