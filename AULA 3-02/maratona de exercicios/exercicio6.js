const prompt = require('prompt-sync')();

function verificaIdade(idade) {
    if (idade < 12) {
        console.log('Voce é criança!');
    } else if (idade >= 12 && idade < 18) {
        console.log('Voce é um adolescente!');
    } else if (idade >= 18) {
        console.log('Voce é maior de idade!');
    } else if (idade >= 60) {
        console.log('Voce é idoso!');
    }
};

let idade = Number(prompt('Digite sua idade'));
verificaIdade(idade);