// Reduzir o valor do array

const number = [5, 50, 80, 1, 2, 3, 5, 22, 27]
const total = number.reduce((acumulador, valorAtual, indice, array) => {
    acumulador += valorAtual
    return acumulador
    
}, 0 /* Valor inicial do acumulador */) // Se o valor inicial for uma array vazia e não der push no acumulador, concatena os elementos

console.log(total)