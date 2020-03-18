function aleatorio(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min));
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toLocaleUpperCase() + ' - Passei na promisse');
            return;
        }, tempo);
    });
}
/*
esperaAi('Fase 1', aleatorio(0, 3))
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', aleatorio());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', aleatorio());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .catch(e => console.log(e));
*/
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio()); // await substitui o then
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', aleatorio()); // await substitui o then
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', aleatorio()); // await substitui o then
        console.log(fase3);

    }
    catch (e) {
        console.log(e);
    }
}
executa();

/* Status das promises
   - pending -> pendente
   - fullfilled -> resolvida
   - reject -> rejeitada
*/
