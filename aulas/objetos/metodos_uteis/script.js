// Métodos úteis

// Copiar objeto

const produto = { nome: 'Caneca', material: 'Porcelana'}

// Copiar
// const copiaProduto = { ...produto}

// Cópia +
const copiaProduto = {
    ...produto,
    preco: 99.99
}

// Ou..

// const copiaProduto = Object.assing({}, produto, { preco: 99.99 })

// console.log(produto)

// console.log(copiaProduto)

function Produto(nome, material) {
    this.nome = nome
    this.material = material

    Object.defineProperty(this, 'material', {
        enumerable: true,
        writable: true,
        configurable: true
    })

}

const _produto = new Produto(`Garrafa`, 'Plastico')

console.log(_produto)

// Acessar definições de propriedade do objeto

console.log(Object.getOwnPropertyDescriptor(_produto, 'material')) 

// Acessar valores das chaves 

console.log(Object.values(_produto))

// Array com arrays de chaves e valores

console.log(Object.entries(_produto))