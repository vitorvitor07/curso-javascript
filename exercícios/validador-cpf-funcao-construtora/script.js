// Validação de CPF

// CPF: 705.484.450-52

/*
7x  0x  5x  4x  8x  4x  4x  5x  0  
10  9   8   7   6   5   4   3   2   
70  0   40  28  48  20  16  15  0  -> Somar -> = 237

Gerar 10º dígito

11 - (237 % 11) = 5 -> Se dígito > 9, dígito = 0

Gerar 11º dígito

7x  0x  5x  4x  8x  4x  4x  5x  0   5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10  -> Somar -> = 284

11 (284 % 11) = 2 -> Se dígito > 9, dígito = 0

*/




// let cpfLimpo = cpf.replace(/\D+/g, '')  /\D+/g = Tudo que não for número

// let cpfArray = Array.from(cpfLimpo) Retorna array com caracteres da string

// let somaDigitosCpf = cpfArray.reduce((acc, val) => acc + Number(val), 0) Soma elemntos do array à partir do indice indicado

function ValidaCPF(cpfEnviado) {


Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: () => {
        return cpfEnviado.replace(/\D+/g, '')
    }
})
}

ValidaCPF.prototype.valida = function() {

    if (typeof this.cpfLimpo === 'undefined') return false   
    if (this.cpfLimpo.length !== 11) return false
    if (this.eSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCPF = cpfParcial + digito1 + digito2

    if (this.cpfLimpo === novoCPF) return true

    return false
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {

    const cpfArray = Array.from(cpfParcial)
    
    let regressiva = cpfArray.length + 1

    let total = cpfArray.reduce((acumulador, valorAtual) => {
        acumulador += (Number(valorAtual) * regressiva)
        regressiva--

        return acumulador
    }, 0)

    const digito = 11 - (total % 11)

    if (digito > 9) return '0'

    return String(digito)

}

ValidaCPF.prototype.eSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)    
    return sequencia === this.cpfLimpo
}

const cpf01 = new ValidaCPF('705.484.450-52')

console.log(cpf01.valida())