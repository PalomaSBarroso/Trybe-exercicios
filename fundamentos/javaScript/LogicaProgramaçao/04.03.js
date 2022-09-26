// crie um algoritmo que imprima na tela o fatorial de 10
let numero = 10;
let fatorial = 1;
for (index = numero; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial);

//estrutura for para desenvolver algoritimo capaz de inverter uma palavra
let word = 'tryber';
let drow = '';
for (let index = word.length - 1; index >= 0; index -= 1) {
    drow += word[index];
}
console.log(drow);

//estrutura for para escrever dois algoritimos
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];
for (let index = 0; index < array.length; index += 1) {
    if (menor.length < array[index].length) {
        menor = array[index];
    }
    if (maior.length > array[index].length) {
        maior = array[index];
    }
}
console.log(maior);
console.log(menor);

//um número primo inteiro 
let larger = 2;
for (let numero = 2; numero <= 50; numero += 1) {
    let primo = true;
    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor == 0) {
            primo = false;
        }
    }
    if (primo) {
        larger = numero;                
    }
}
console.log(larger);