const prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite um numero: '));
let num2 = Number(prompt('Digite outro numero'));

if (num1 === num2) {
    console.log('Os numeros são iguais.')
} else if ( num1>num2) {
    console.log('O maior numero é: '+num1);
} else {
    console.log('O maior numero é: '+num2);
}

if (num1 === 0 || num2 === 0) {
    console.log('Um dos numeros é zero.');
}