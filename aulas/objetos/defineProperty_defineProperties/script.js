// Object.defineProperty e Object.defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome // Pública - pode ser acessada fora do objeto -> p1.nome
    this.preco= preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave - Pode ser utilizado no for in
        value: estoque, // Definir o valor
        writable: false, // Permite ou não que o valor seja alterado
        configurable: true // Pode ou não configurar/deletar a chave - fazer outro desse
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: estoque,
            writable: false,
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: estoque,
            writable: false,
            configurable: true
        },
        estoque: {
            enumerable: true, 
            value: estoque,
            writable: false,
            configurable: true
        }
    })
}

const p1 = new Produto('Salgado', 10, 20)

console.log(p1)

console.log(Object.keys(p1)) // Retorna uma array com as chaves numeráveis

