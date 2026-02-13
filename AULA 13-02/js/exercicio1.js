const tituloH1 = document.querySelector('.titulo-pagina');
const container = document.querySelector('#container');
const areaImagem = document.querySelector('#area-imagem');

tituloH1.innerText = 'Dom feito com sucesso!!!';

container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#f0f0f0';
container.style.textAlign = 'center';

container.innerHTML = '<h2 id="SENAI"></h2>';
document.querySelector('#SENAI').innerText = 'Dom, meu melhor amigo kkkkkkkkkkkkkkkkkkkkkkk';

areaImagem.innerHTML = '<img src="https://hojeediadefilosofia.wordpress.com/wp-content/uploads/2017/01/bob-esponja-principal.jpg?w=1920&h=1080&crop=1" alt="Imagem">';