class Cidade {
    qtdeHabitantes = 10000000;
    estado = 'Ilha Virgens Americanas';
    nome = 'Ilha Epstein';

    mostrar() {
        console.log(this.qtdeHabitantes);
        console.log(this.estado);
        console.log(this.nome)
    }
}

const city = new Cidade()
console.log(city)