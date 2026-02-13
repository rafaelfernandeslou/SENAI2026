const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite sua idade: '));

if (idade >= 16 && idade <= 18) {
    console.log('Você tem mais de 16 anos, pode pegar livro!');
} else if (idade > 18) {
    console.log('Você tem mais de 18 anos, pode pegar o livro!');
} else {
    console.log('Você não é maior de idade, não pode pegar livro!');
};