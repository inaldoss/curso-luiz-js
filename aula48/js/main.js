const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) { // Pegando a tecla ENTER que tem o código 13
        if (!inputTarefa.value) return; // Quando o if possui apenas uma linha, não precisa de chaves
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar'); // Criando uma classe para o botão
    li.appendChild(botaoApagar);
};

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};


btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return; // Quando o if possui apenas uma linha, não precisa de chaves
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target; // Seleciona o elemnto que está sendo clicado na tela
    if (el.classList.contains('apagar')) { // Verifica de o elemento selecionado é o botão 'apagar'
        el.parentElement.remove(); // Deleta o elemento pai, que no caso é o li
        salvarTarefas()
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // Selecionando todos os elementos do tipo <li> dentro da <ul>
    const listaDeTarefas = []; // Criado array para armazenar esses elementos <li>

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; // Variável que vai armazenar o texto dos elementos do tipo <li>
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Tirando os textos e espaços dos elementos do tipo <button> para que apareça apenas o texto dos elementos <li>
        listaDeTarefas.push(tarefaTexto); // Carregando os elementos no array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Transformando o conteúdo no formato JSON
    localStorage.setItem('tarefas', tarefasJSON); // Salvando as informações no navegador para não perde-las ao atualizar o browser
};

function adicionaTarefasSalvas() {
    const tarefas = window.localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa);
    }
};

adicionaTarefasSalvas();