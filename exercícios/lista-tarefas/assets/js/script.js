class Tarefa {
    constructor() {
        this.tarefa = document.querySelector('.tarefatxt');
        this.formulario = document.querySelector('.form')
        this.result = document.querySelector('.result');
    }
    
    init() {
        this.eventos()
    }    

    eventos() {
        this.formulario.addEventListener('submit', e => {
            e.preventDefault()
            this.adicionaTarefa()
        })

    }

    adicionaTarefa() {
        this.divTarefa = document.createElement('div')
        this.result.appendChild(this.divTarefa)
        
        let _tarefa = document.createElement('div');
        _tarefa.setAttribute('class', 'tarefa')
        _tarefa.innerHTML = this.tarefa.value;
        
        this.divTarefa.appendChild(_tarefa);
        this.adicionarBotões(this.divTarefa)
        
    }

    adicionarBotões(divTarefa) {
        let btnRemove = document.createElement('button');
        btnRemove.setAttribute('class', 'remove');
        btnRemove.innerText = 'Remove';

        let divRemove = document.createElement('div');
        divRemove.appendChild(btnRemove);

        divTarefa.appendChild(divRemove);      
        
        let btnAlterar = document.createElement('button');
        btnAlterar.classList.add('alterar');
        btnAlterar.innerText = 'Alterar';

        let divAlterar = document.createElement('div');
        divAlterar.appendChild(btnAlterar);

        divTarefa.appendChild(divAlterar);

        this.remove = document.querySelector('.remove');
        this.remove.addEventListener('click', e => this.removerTarefa(this.remove));
    }

    removerTarefa(e) {
        
        let divTarefa = e.parentNode.parentNode

        divTarefa.remove()       

    }    

}

const tarefa = new Tarefa()

tarefa.init()
