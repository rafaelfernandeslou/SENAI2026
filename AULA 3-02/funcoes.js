// primeiro tipo de função: padrão
// function saudacao(nome, sobrenome) {
//     console.log('Olá, ' + nome + " " + sobrenome);
// }
// saudacao('Balão', 'Mágico');

//segundo tipo de função: anonima
// const somar = function(num1, num2) {
//     console.log('A soma dos numeros é: ' + (num1+num2));
// }
// somar(25,35);

//terceiro tipo: arrow function
const subtrair = (num1, num2) => {
    console.log('A subtração dos numeros é: ' + (num1-num2));
}
subtrair(35,25)

//função com retorno
const subtrairComRetorno = (num1, num2) => {
    return num1-num2;
}
console.log('A subtração dos numeros é: ' + subtrairComRetorno(35,25));
