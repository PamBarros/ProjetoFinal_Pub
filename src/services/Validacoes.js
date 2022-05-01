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
    static validaEmail(email) {
        user = email.value.substring(0, email.value.indexOf("@")); // verificando se no parametro email existe o @
        domain = email.value.substring(email.value.indexOf("@") + 1, email.value.length);
        if ((user.length >= 1) &&
            (domain.length >= 3) &&
            (user.search("@") == -1) &&
            (domain.search("@") == -1) &&
            (user.search(" ") == -1) &&
            (domain.search(" ") == -1) &&
            (user.search(" ") == -1) &&
            (domain.search(".") != -1) &&
            (domain.indexOf(".") >= 1) &&
            (domain.lastIndexOf(".") < domain.length - 1)) {
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