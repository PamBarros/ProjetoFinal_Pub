class Validacoes {
    /**
     * 
     * @param {string} string 
     * @returns boolean
     */
    static validaNome(string) {
        if (string.length >= 3) {
            return true
        } else {
            return false
        }
    }
    static validaTelefone(telefone) {
        const telefoneNum = parseInt(telefone)
        if (telefone.length == 11 && telefoneNum == telefone) {
            return true
        } else {
            return false
        }
    }
    /**
     * 
     * @param {string} email 
     * @returns boolean
     */
     static validaEmail(email){
        const em = email.toString
        const er = (/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
        if(!er.test(em)){
            return true
        } else {
            return false
        }
    }

    static validaPreco(preco){
        const valorProduto = parseFloat(preco) //para transformar em float
        if (preco.length >= 1 && valorProduto == preco) { //para nao deixar o campo vazio e comparar se esta apenas numeros 
            return true
        } else {
            return false
        }

    }
}

export default Validacoes;