const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

function removerSelecaoAtual(classe) {
    const selecionado = document.querySelector(`.${classe}.selecionado`);
    if (selecionado) {
        selecionado.classList.remove('selecionado');
    }
}

function selecionarElemento(elemento) {
    elemento.classList.add('selecionado');
}

function trocarPersonagem(indice) {
    removerSelecaoAtual('personagem');
    selecionarElemento(personagens[indice]);
}

function trocarBotao(botao) {
    removerSelecaoAtual('botao');
    selecionarElemento(botao);
}

function configurarEventos() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            trocarBotao(botao);
            trocarPersonagem(indice);
        });
    });
}

configurarEventos();