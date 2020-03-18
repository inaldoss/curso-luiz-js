document.body.onload = adcElemento;

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]


function adcElemento() {
    for (i = 0; i < elementos.length; i++) {
        var newElement = document.createElement(elementos[i].tag);
        var newText = document.createTextNode(elementos[i].texto);
        newElement.appendChild(newText);

        var secao = document.querySelector('.secao');
        secao.appendChild(newElement);
    }
}
