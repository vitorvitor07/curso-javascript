//Obejtos em JS

const pessoas =
    {
        nome: "Joujou",
        idade: '21'
    }

console.log(pessoas)
console.log(pessoas.nome)
console.log(pessoas.idade)


// Factory functions

function criaObjetos(nome, idade){
    return {
        nome,
        idade,
        cumprimentar() {
            return this
        }
    }
}

const pessoa01 = criaObjetos('Matheus', '30')

console.log(pessoa01.cumprimentar()); 

// Freezar objeto

Object.freeze(pessoas)

// Freezar objeto vindo da função construtora

function Pessoas(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)
    
}

const pessoa02 = new Pessoas('Vitor', 'Silva')
pessoa02.nome = 'Luciano'

console.log(pessoa02)

