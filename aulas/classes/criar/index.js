// Criando classe

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(this.nome + ' está falando')
    }
}

let p1 = new Pessoa('Vitor', 'Silva')

p1.falar()

class Carro {
    constructor(nome) {
        this.nome = nome
        this.velocidade = 0
    }

    acelerar() {
        if (this.velocidade >= 100) return
        this.velocidade++
    }

    frear() {
        if (this.velocidade <= 0) return
        this.velocidade--
    }
}

const carro01 = new Carro('Volks')

for(let i = 0; i <= 200; i++) {
    carro01.acelerar()
}

console.log(carro01.velocidade)