class Livro{
    titulo = 'Vidas Secas';
    Autor = 'Graciliano Ramos';
    editora = 'Livraria';
    ano = 1929;
    paginas = 320;
    genero = 'Romance';
    idioma = 'Brasileiro';
    preço = 39.99;

    mostrar() {
        console.log(titulo);
        console.log(autor);
        console.log(editora);
        console.log(ano);
        console.log(paginas);
        console.log(genero);
        console.log(idioma);
        console.log(preco);
    }
}

const livro = new Livro()
console.log(livro)