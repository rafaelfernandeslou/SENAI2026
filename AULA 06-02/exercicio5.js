const prompt = require('prompt-sync')();

let anodenascimento = prompt("Qual seu ano de nascimento: ");
const anodehoje = new Date().getFullYear()
let idade = anodehoje - anodenascimento

console.log("Você tem: " + idade)


