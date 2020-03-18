function meuEscopo() {
    const form = document.querySelector('.form');
    const div = document.querySelector('.resultado');

    const pessoas = [];

    /*    form.onsubmit = function (evento) {
            evento.preventDefault();
            alert(1)
            console.log('Foi enviado')
        };*/

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobreNome: sobreNome.value,
            peso: peso.value,
            altura: altura.value
        })
            div.innerHTML += `<p>${nome.value}  ${sobreNome.value}  ${peso.value}  ${altura.value}</p>`
       
        //console.log(pessoas)
    };
    form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();