// class Carro {
//    constructor(nome) {
//        this.nome = nome
//        this.velocidade = 0
//    }
//
//    acelerar() {
//       if (this.velocidade >= 100) return
//        this.velocidade++
//   }
// }
//
// const carro01 = new Carro('Kombi')
//
// console.log(carro01.velocidade)
//
// Pra não ter a possibilidade de alguem setar carro01.velocidade = 1500 usa-se Symbol()

// const velocidade = Symbol() - Toda vez que for chamado vai gerar uma key aleatória para não ser acessado - não usa new

const _velocidade = Symbol('velocidade')

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }
    
    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
    }
}

const carro01 = new Carro('Kombi')

carro01.acelerar()

console.log(carro01)

