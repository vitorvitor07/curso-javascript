class dispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return;
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log('Dispositivo já desligado')
            return
        }            

        this.ligado = false
    }
}

class Smartphone extends dispositivoEletronico { // Extends para herdar a classe
    constructor(nome, cor, modelo) {
        super(nome) // Chamar os contrututores da classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

let cel = new Smartphone('Celular', 'Preto', 'Nokia')

cel.ligar()

console.log(cel)