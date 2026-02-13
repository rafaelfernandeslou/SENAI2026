const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Digite a primeira nota do aluno: '));
let nota2 = Number(prompt('Digite a segunda nota do aluno: '));

let divisao = (nota1 + nota2) / 2
let div = divisao ** 2
console.log('O resultado das notas do aluno é: ' + div);

function calcularResultado() {
    let nota1 = Number(prompt('Digite a primeira nota do aluno: '));
    let nota2 = Number(prompt('Digite a segunda nota do aluno: '));

    let divisao = (nota1 + nota2) / 2;
    let div = divisao ** 2;

    console.log('O resultado das notas do aluno é: ' + div);
}
calcularResultado()