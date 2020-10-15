class Pilha {
    public data: Array<number> = [] // Array onde serão armazenado os dados
    public topo: number = -1 // Inicializando o topo

    push(value: number) {
        this.topo ++ // Atualizando o topo
        this.data[this.topo] = value // Colocando o dado no topo da pilha
    }

    pop() {
        if(this.topo < 0) {
            return false // Verificando se o array está vazio
        } else {
            this.topo -- // Atualiza o topo
            this.data.splice(this.topo, 1) // Tira o valor topo
        }
    }

    show() {
       console.log(this.topo, this.data)
    }
}


const minhaPilha = new Pilha()

minhaPilha.push(10)
minhaPilha.show()
minhaPilha.pop()
minhaPilha.pop()
minhaPilha.pop()
minhaPilha.show()
minhaPilha.push(1)
minhaPilha.push(2)
minhaPilha.push(3)
minhaPilha.show()
minhaPilha.pop()
minhaPilha.show()


