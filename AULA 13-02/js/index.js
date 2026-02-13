const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const paragrafo = document.querySelector('texto');
const container = document.querySelector('#container');

corpo.style.backgroundColor = '#ff00dd';
corpo.style.Color = 'black';

titulo.textContent = 'Manipulando o Dom de novo!';

let subtitulo = '<h2>Manipular o Dom é very easy!</h2>';
container.innerHTML = subtitulo;
