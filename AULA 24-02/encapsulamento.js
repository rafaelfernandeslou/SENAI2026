class Pessoa {
    nome;//publico
    #cpf;//privado
    #salario;//privado

    //metodos getters = setters
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }

    setSalario(valor){
        this.#salario = valor;
    }
    getSalario(){
        return this.#salario;
    }
}

const silva = new Pessoa()
silva.nome = 'Pedro';
silva.setCpf = 222222222222;
console.log(silva.getCpf());
silva.setSalario(600);
console.log(silva.getSalario());
console.log(silva)