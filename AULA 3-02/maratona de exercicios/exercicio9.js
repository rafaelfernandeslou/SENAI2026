const prompt = require('prompt-sync')();

let valor = parseFloat(prompt('Digite o valor da compra: '));
let valorCompra = valor;
let desconto = prompt('Qual seu desconto?');

if (desconto === 'BRONZE') {
  valor *= 0.05;
} else if (desconto === 'PRATA') {
  valor *= 0.10;
} else if (desconto === 'OURO') {
  valor *= 0.15;
} else {
  console.log('Desconto inválido.');
}

console.log("O valor final da compra é: " + (valorCompra - valor));