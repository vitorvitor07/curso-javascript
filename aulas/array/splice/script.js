const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice((qual indice vai começar a mexer), (quantos elementos eu quero remover), (elementos para serem adicionados))

let result = nomes.splice(-2, 2, `Elemento adicionado`)

console.log(nomes)
console.log(result)