const prompt = require('prompt-sync')();

let numero = prompt('Escolha um numero para fazer a raiz quadrada: ');
let raiz = Math.sqrt(numero);

console.log('A raiz é: ' + raiz);