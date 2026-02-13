const prompt = require('prompt-sync')();

let peso = Number(prompt('Digite seu peso (kg): '));
let altura = Number(prompt('Digite sua altura (m): '));

let imc = peso / (altura ** 2);

console.log('Seu IMC é: ' + imc);

if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
  console.log('Normal');
} else if (imc >= 25 && imc < 30) {
  console.log('Sobrepeso');
} else {
  console.log('Obesidade');
}
