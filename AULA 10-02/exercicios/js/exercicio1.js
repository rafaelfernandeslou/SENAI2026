const corpo = document.getElementById('corpo');
const titulo = document.getElementById('titulo');
const container = document.querySelector('.container');
const texto = document.querySelector('.texto');
let nome = 'Rafael'

titulo.textContent += nome;
texto.textContent += ' , e esse éescrito em js.';
corpo.style.backgroundColor = '#ff0000';
container.style.backgroundColor = 'pink';
titulo.style.color = 'white';
titulo.style.border = '1px white solid';
texto.style.color = 'white';
texto.style.fontFamily = 'Arial';