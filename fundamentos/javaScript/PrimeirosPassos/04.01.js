//operações aritmética básica
const a= 10;
const b= 4;
let adicao = a + b;
let subtracao = a - b;
var multiplicacao = a * b;
var divisao = a / b;
var modulo = a % b;
console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

//maior de dois numeros
const numero1 = 23;
const numero2 = 18;
 if (numero1 >= numero2){
    console.log( 'Primeiro número é maior');
 } else {
    console.log ('Segundo número é maior');
 }

 //maior de três numeros
const num1 = 25;
const num2 = 42;
const num3 = 3;
if (num1 > num2 && num1 > num3) {
    console.log('Primeiro número é maior');
  } else if (num2 > num1 && num2 > num3) 
  {    
    console.log('Segundo número é maior');
  } else {
    console.log('Terceiro número é maior');
  }

  //valor recebido
let isPositive = 'negativo';
if (isPositive === 'positivo'){
    console.log ('É positivo');
} else if (isPositive === 'negativo'){7
console.log ('É negativo');
} else {
    console.log('zero');
}

//ângulos do triangulo
const lado1 = 45;
const lado2 = 45;
const lado3 = 45;
const somaLados =
  lado1 + lado2 + lado3;
if (somaLados === 180) {
  console.log(true);
} else if (somaLados < 180 || somaLados > 180) {
  console.log(false);
} else {
  console.log('Erro');
}

//xadrez
let nomePecaXadrex = 'bispo';

switch (nomePecaXadrex) {
  case 'rei':
    console.log(
      'move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.'
    );
    break;
  default:
    console.log('Não é uma peça válida');
    break;
}

//Ṕorcentagem
let porcentagem = (0 * 100) / 20;
if (porcentagem >= 90) {
  console.log('A');
} else if (porcentagem >= 80 && porcentagem < 90) {
  console.log('B');
} else if (porcentagem >= 70 && porcentagem < 80) {
  console.log('C');
} else if (porcentagem >= 60 && porcentagem < 70) {
  console.log('D');
} else if (porcentagem >= 50 && porcentagem < 60) {
  console.log('E');
} else if (porcentagem >= 0 && porcentagem < 50) {
  console.log('F');
} else {
  console.log('Erro! Nota é menor que 0 ou maior que 100');
}

//par
const np= 13;
const np2 = 7;
const np3 = 45;
if (
 np % 2 === 0 ||
  np2 % 2 === 0 ||
np3 % 2 === 0
) {
  console.log('Um dos valores é par');
} else {
  console.log('Nenhum valor par');
}

//impar
const npi = 26;
const npi2 = 75;
const npi3 = 4;
if (
  npi% 2 === 1 ||
  npi2 % 2 === 1 ||
  npi3% 2 === 1
) {
  console.log('Um dos valores é impar');
} else {
  console.log('Nenhum valor impar');
}

//produto
const custo = 30;
const venda = 42;
const imposto = custo * 0.2;
const total = custo + imposto;
const lucro = (venda - total) * 1000;
if (custo < 0 || venda < 0) {
  console.log('Error! Valor inválido');
} else {
  console.log(`Seu lucro foi de: ${lucro}`);
}

//imposto renda
const salarioBruto = 3000;
let salarioBase, salarioLiquido, impostoDeRenda, inss;
if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}
salarioBase = salarioBruto - inss;
if (salarioBase <= 1903.98) {
  impostoDeRenda = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  impostoDeRenda = salarioBase * 0.075 - 142.8;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  impostoDeRenda = salarioBase * 0.15 - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  impostoDeRenda = salarioBase * 0.225 - 636.13;
} else {
  impostoDeRenda = salarioBase * 0.275 - 869.36;
}
salarioLiquido = salarioBase - impostoDeRenda;
console.log(salarioLiquido);