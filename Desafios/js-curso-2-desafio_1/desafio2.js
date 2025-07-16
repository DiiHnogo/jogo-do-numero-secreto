let mensagem;

//1
function olaMundo(){
    console.log('Olá, mundo!');
};
//olaMundo();

//2
function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
};
//olaNome('Diogo');

//3
function dobroFunction(numero) {
    let resultado = numero * 2;
    return resultado;
};
let num = 2;
let dobro = dobroFunction(num);
//console.log(`O dobro do número ${num} escolhido é ${dobro}`);


//4
function mediaFunction(valor1, valor2, valor3) {
    let soma = valor1 + valor2 + valor3;
    let media = soma / 3;
    return media
};
let valor1, valor2, valor3;
valor1 = 2;
valor2 = 5;
valor3 = 5;
let media = mediaFunction(valor1, valor2, valor3);
//console.log(`A média dos valores ${valor1}, ${valor2}, ${valor3} é ${media}`);

//5
function desafio5(num1, num2) {
    let maior;
    if (num1 > num2) {
        maior = num1;
        return maior;
    }else{
        maior = num2;
        return maior;
    };
};
let maiorNum = desafio5(4, 2);
//console.log(`O maior número é o ${maiorNum}`);

//6
function multFunction(num) {
    let resultado = num * num;
    return resultado;
}
let multiplicacao = multFunction(9);
//console.log(`O resultado da multiplicação é ${multiplicacao}`);

//7
function calcularIMC(altura, peso) {
    let imc = peso/(altura * altura);
    console.log(`O seu IMC é de ${imc}`);
};
//calcularIMC(1.80, 110);

//8
function calcularFatorial(numero) {
    let resultado = 1;
    let num = numero;
    if (num == 0) {
        console.log(`O fatorial de ${numero} é ${resultado}`)
    }else if (num < 0) {
        console.log('Impossível. Fatorial de número negativo não existe!');
    }else{
        while(num > 0){
            resultado = resultado * num;
            num--;
        };
        console.log(`O fatorial de ${numero} é ${resultado}`);
    };
};
//calcularFatorial(6);

//9
function conversaoDolar(dolar) {
    if (dolar <= 0) {
        console.log('Impossível converter um valor menor ou igual à zero.');
    }else{
        let real = dolar * 4.80;
        console.log(`O valor de $${dolar} dolares em reais é R$${real}`);
    };
};
//conversaoDolar(100);

//10
function calcularSala(altura, largura) {
    let area = largura * altura;
    let perimetro = 2 * (largura + altura); 
    console.log(`A área e perímetro da sala são respectivamente de ${area} e ${perimetro} metros`);
};
//calcularSala(9, 5);

//11
function calcularCirculo(raio){
    let pi = 3.14;
    let area = pi * raio;
    let perimetro = 2 * pi * raio;
    console.log(`A área e perímetro da sala círcular são respectivamente de ${area} e ${perimetro} metros`);
};
//calcularCirculo(9);

//12
function tabuada(numero) {
    let num = 0;
    console.log(`TABUADA DO NÚMERO ${numero}!`);
    while (num <= 10) {
        let resultado = numero * num;
        console.log(`${numero} * ${num} = ${resultado}`);
        num++;
    };
};
//tabuada(10);

//13
let listaGenerica = [];
console.log(listaGenerica);

let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin' ,'Python'];
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
console.log(linguagensDeProgramacao);

let Nomes = ['Diogo', 'Emilly', 'Alice']
linguagensDeProgramacao.push('GoLang');
console.log(Nomes[0]);
console.log(Nomes[1]);
console.log(Nomes[2]);