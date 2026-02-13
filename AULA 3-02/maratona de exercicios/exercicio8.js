const prompt = require('prompt-sync')();

function calculaNota (nota) {
    if (nota >= 90) {
        return 'A';
    } else if (nota >= 80) {
        return 'B';
    } else if (nota >= 70) {
        return 'C';
    } else if (nota >= 60) {
        return 'D';
    } else if (nota < 60) {
        return 'F';
    }
}

let nota = Number(prompt("Digite a nota do aluno (0-100): "));
console.log("A nota do aluno é: " + calculaNota(nota));