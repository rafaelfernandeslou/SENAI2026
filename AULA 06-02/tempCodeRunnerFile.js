const prompt = require('prompt-sync')();

let anodenascimento = prompt("Qual seu ano de nascimento: ")
const anodehoje = new Date().data.getFullYear()
let idade = anodehoje - anodenascimento

console.log("Você tem: " + idade)


