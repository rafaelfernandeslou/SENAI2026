const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Digite a sua primeira nota: '));
let nota2 = Number(prompt('Digite a sua segunda nota: '));
let nota3 = Number(prompt('Digite a sua terceira nota: '));

let media = ((nota1 + nota2 + nota3) / 3);

console.log('Sua média é: ' + media);