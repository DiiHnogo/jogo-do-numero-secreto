let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function verificarConsole(){
    console.log('O botão foi clicado.');
};

function verificarAlert() {
    console.log('Eu amo JS! S2');
};

function verificarPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`)
};

function verificarSoma(){
    let valor1 = prompt('Digite o valor do primeiro número inteiro: ');
    let valor2 = prompt('Digite o valor do segundo número inteiro: ');
    let resultado = parseInt(valor1) + parseInt(valor2);

    alert(`A soma dos valores ${valor1} e ${valor2} é ${resultado}!`);
}