const prompt = require('prompt-sync')();

console.log('Responda com S/N');
let temCadastro = prompt('Tem cadastro? ');
let temCracha = prompt('Tem crasha? ');
let estaDeUniforme = prompt('Está de uniforme? ');
let ehMonitor = prompt('É monitor? ');

if (temCadastro === 'S' && temCracha === 'S' && estaDeUniforme === 'S' && ehMonitor === 'S') {
    console.log('Acesso liberado!');
} else {
    console.log('Acesso negado!');
}