const prompt = require('prompt-sync')();

let numero = prompt('Escolha um numero de 1 a 10: ')
let sorteado = parseInt(Math.random() * 10);

console.log('Seu chute é: ' + numero);
console.log('O numero sorteado é: ' + sorteado);

if (numero == sorteado) {
    console.log('Parabéns, você acertou!!')
} else {
    console.log('Você errou!!')
}