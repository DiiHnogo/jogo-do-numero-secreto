let numSorteados = [];
let numLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1; 

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
};

function reiniciarJogo(){
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

function gerarNumAleatorio() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let qtdElementosNaLista = numSorteados.length;

    if(qtdElementosNaLista == numLimite){
        numSorteados = [];
    };

    if(numSorteados.includes(numEscolhido)){
        return gerarNumAleatorio();
    }else{
        numSorteados.push(numEscolhido);
        console.log(numSorteados);
        return numEscolhido;
    }
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        };
        tentativas++;
        limparCampo();
    }; 
};

