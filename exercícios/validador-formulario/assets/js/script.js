class ValidaForm {
    constructor(){
        this.formulario = document.querySelector('.formulario')

        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const campoValidado = this.camposValidados()

        const senhaValidada = this.senhaValidada()

        if (campoValidado && senhaValidada) {
            alert('Formulário enviado')
            this.formulario.submit()
        }

    }

    camposValidados() {
        let valido = true;

        for (let errorText of this.formulario.querySelectorAll('.msg-erro')) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText
            
            if (!campo.value) {
                this.criaErro(campo, `O campo "${label}" não pode estar em branco`)
                valido = false
            }
            
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valido = false;
            }
            
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valido = false
            }
            
        }

        return valido
        
    }

    senhaValidada() {   
        let valido = true

        let senha = document.querySelector('.senha')

        let repetirSenha = document.querySelector('.repetirSenha')

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, `Senha precisa ter entre 6 e 12 caracteres`)      
            valido = false     
        }

        if (repetirSenha.value.length < 6 || repetirSenha.value.length > 12) {
            this.criaErro(repetirSenha, `Senha precisa ter entre 6 e 12 caracteres`)      
            valido = false     
        }

        if (repetirSenha.value !== senha.value) {
            this.criaErro(repetirSenha, `As senhas não coincidem`)
            this.criaErro(senha, `As senhas não coincidem`)
        }




        return valido
    }

    validaUsuario(campo) {

        const usuario = campo.value

        let valid = true

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, `Usuário deve conter de 3 a 12 caracteres`)
            valid = false
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, `Usuário deve conter apenas letras e/ou números`)
            valid = false
        }

        return valid
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if (!cpf.valida()) {
            this.criaErro(campo, `CPF Inválido`)
            return false
        }

        return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('msg-erro')
        campo.insertAdjacentElement('afterend', div)
        
    }



}



const valida = new ValidaForm()