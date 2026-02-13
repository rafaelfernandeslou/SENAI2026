const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número: '));

function parimpar(num) {
    if (num % 2 === 0) {
        return console.log('O numero é par!');
    } else {
        return console.log('O numero é impar');
    };
};
let resultado = parimpar(num);

