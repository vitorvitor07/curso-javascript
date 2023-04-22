// Getter e Setter
// Definida no Object.defineProperty()
// chave get, valor () => { return {chave} }
// chave get, valor (valor) => { return {chave} }

function Produto(nome, preco, estoque) {
    this.nome = nome // Pública - pode ser acessada fora do objeto -> p1.nome
    this.preco= preco

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave - Pode ser utilizado no for in
        configurable: true, // Pode ou não configurar/deletar a chave - fazer outro desse
        get: () => { 
            return estoque
        },
        set: (valor) => {
            estoquePrivado = valor
        }
    })

}

const p1 = new Produto('Salgado', 10, 20)

console.log(p1)

p1.estoque = 'Valor 3'

console.log(p1.estoque)

// console.log(Object.keys(p1)) // Retorna uma array com as chaves numeráveis


