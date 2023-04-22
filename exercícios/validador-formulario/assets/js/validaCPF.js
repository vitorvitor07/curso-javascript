class ValidaCPF {
    constructor(cpfEnviado) {
       
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')            
        })
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false
        if (this.sequencia()) return false
        if (this.cpfLimpo.length !== 11) return false

        let cpfParcial = this.cpfLimpo.slice(0, -2)

        let digito1 = this.criaDigito(cpfParcial)

        let digito2 = this.criaDigito(cpfParcial + digito1)        
        
        let novoCPF = cpfParcial + digito1 + digito2

        if (novoCPF === this.cpfLimpo) return true
        
        return false
    }

    criaDigito(cpfParcial) {

        let cpfArray = Array.from(cpfParcial)

        let regressiva = cpfArray.length + 1

        let total = cpfArray.reduce((acumulador, valorAtual) => {
            acumulador += Number(valorAtual * regressiva)
            regressiva--

            return acumulador
        }, 0)

        let digito = 11 - (total % 11)

        if (digito > 9) return '0'

        return String(digito)

    }
     
    sequencia() {
        
        let sequencia = '';
        
        for (let index = 0; index < this.cpfLimpo.length; ++index) {
            sequencia += `${this.cpfLimpo[0]}`            
        }


        if (sequencia === this.cpfLimpo) return true

        return false
    }

}
    
