class Veiculo {
    //atributos
    modelo = 'SUV';
    marca = 'BMW - X6';
    ano = 2026;


    //métodos ou ações
        dirigir(){
            console.log('Começou a se mover');
        }
        break(){
            console.log('Parei a bagaça')
        }
}

//instanciar ou criar o objeto
const carro = new Veiculo();
console.log(carro);
