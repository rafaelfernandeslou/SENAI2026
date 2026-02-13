const titulo = document.querySelector('#titulo-principal');
const container = document.querySelector('#container-conteudo');
const botao = document.querySelector('#meu-botao');

document.body.style.backgroundColor = '#f0f0f0'; // Fundo cinza claro
titulo.style.color = 'darkblue';                 // Título em azul escuro
botao.style.padding = '10px 20px';               // Botão com preenchimento
botao.style.cursor = 'pointer';                  // Cursor de mãozinha
container.style.marginTop = '20px';              // Espaço acima da div


botao.addEventListener('click', function() {
   
    container.innerHTML = '<h2>Bob Esponja veio te dar um salve!</h2>';
   
   
    container.innerHTML += '<img src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/SpongeBob_SquarePants_personagem.png/250px-SpongeBob_SquarePants_personagem.png" alt="Imagem Legal" style="border: 5px solid white; box-shadow: 2px 2px 10px rgba(0,0,0,0.2);">';

    titulo.innerText = 'VOCE CLICOU, PARABENS!!';
    titulo.style.color = 'red';
});