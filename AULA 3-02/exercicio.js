const prompt = require('prompt-sync')();
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite o segundo número: "));

let soma = (num1 + num2)
let subtracao = (num1 - num2)
let multiplicacao = (num1 * num2)
let divisao = (num1 / num2)

console.log('A soma é: ' + soma);
console.log('A subtração é: ' + subtracao);
console.log('A multiplicação é: ' + multiplicacao);
console.log('A divisão é: ' + divisao);
