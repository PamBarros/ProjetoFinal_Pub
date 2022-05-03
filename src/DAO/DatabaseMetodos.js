import Database from "../infra/Database.js"

class DatabaseMetodos {
    static createTableUsuario() {
        const tabela_usuarios = `
        CREATE TABLE IF NOT EXISTS usuario(
            id INTEGER PRIMARY KEY,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )`;

        return new Promise((resolve, reject) => {
            Database.run(tabela_usuarios, (e) => {
                if (e) {
                    reject(e.message);
                } else {
                    resolve("Tabela Usuário criada com sucesso");
                }
            });
        });
    
    }

    static createTableBebida() {
        const tabela_bebidas = `
        CREATE TABLE IF NOT EXISTS bebida(
            id INTEGER PRIMARY KEY,
            produto VARCHAR,
            preco FLOAT
        )`;

        return new Promise((resolve, reject) => {
            Database.run(tabela_bebidas, (e) => {
                if (e) {
                    reject(e.message);
                } else {
                    resolve("Tabela Bebida criada com sucesso");
                }
            });
        });
    }

    static createTablePetisco() {
        const tabela_petiscos = `
        CREATE TABLE IF NOT EXISTS petisco(
            id INTEGER PRIMARY KEY,
            produto VARCHAR,
            preco FLOAT
        )`;

        return new Promise((resolve, reject) => {
            Database.run(tabela_petiscos, (e) => {
                if (e) {
                    reject(e.message);
                } else {
                    resolve("Tabela Petisco criada com sucesso");
                }
            });
        });

    }

    static createTableIngresso() {
        const tabela_ingressos = `
        CREATE TABLE IF NOT EXISTS ingresso(
            id INTEGER PRIMARY KEY,
            categoria VARCHAR,
            preco FLOAT
        )`;
    
        return new Promise((resolve, reject) => {
            Database.run(tabela_ingressos, (e) => {
                if (e) {
                    reject(e.message);
                } else {
                    resolve("Tabela Ingresso criada com sucesso");
                }
            });
        });
    
    }


    /**
     * 
     * @param {Object} usuario 
     * @returns Promise<Object>
     */
    static popularUsuario(usuario) {
        const query = `INSERT INTO usuario VALUES (?, ?, ?, ?)`;
        const body = Object.values(usuario);
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e);
                } else {
                    resolve({ message: "usuário criado com sucesso" });
                }
            })
        });
    }

    /**
     * 
     * @param {Object} bebida 
     * @returns Promise<Object>
     */
    static popularBebida(bebida) {
        const query = `INSERT INTO bebida VALUES (?, ?, ?)`;
        const body = Object.values(bebida);
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e);
                } else {
                    resolve({ message: "bebida cadastrada com sucesso" });
                }
            })
        });
    }

    /**
     * 
     * @param {Object} petisco 
     * @returns Promise<Object>
     */
    static popularPetisco(petisco) {
        const query = `INSERT INTO petisco VALUES (?, ?, ?)`;
        const body = Object.values(petisco);
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e);
                } else {
                    resolve({ message: "petisco cadastrado com sucesso" });
                }
            })
        });
    }

    /**
     * 
     * @param {Object} ingresso 
     * @returns Promise<Object>
     */
    static popularIngresso(ingresso) {
        const query = `INSERT INTO ingresso VALUES (?, ?, ?)`;
        const body = Object.values(ingresso);
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e);
                } else {
                    resolve({ message: "ingresso cadastrado com sucesso" });
                }
            })
        });
    }




    static listarTodosUsuarios() {
        const query = `SELECT * FROM usuario`;
        return new Promise((resolve, reject) => {
            Database.all(query, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static listarTodasBebidas() {
        const query = `SELECT * FROM bebida`;
        return new Promise((resolve, reject) => {
            Database.all(query, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static listarTodosPetiscos() {
        const query = `SELECT * FROM petisco`;
        return new Promise((resolve, reject) => {
            Database.all(query, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static listarTodosIngressos() {
        const query = `SELECT * FROM ingresso`;
        return new Promise((resolve, reject) => {
            Database.all(query, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static listaUsuarioPorID(id){
        const query = `SELECT * FROM usuario WHERE id=?`
        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }


    static listaBebidaPorID(id) {
        const query = `SELECT * FROM bebida WHERE id=?`
        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static listaPetiscoPorID(id) {
        const query = `SELECT * FROM petisco WHERE id=?`
        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static listaIngressoPorID(id) {
        const query = `SELECT * FROM ingresso WHERE id=?`
        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static atualizaUsuarioPorID(usuario, id) {
        const query = `UPDATE usuario SET (id, nome, email, telefone) = (?,?,?,?) WHERE id=?`
        const body = Object.values(usuario)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({message: "atualizado com sucesso"})
                }
            })
        })
    }

    static atualizaBebidaPorID(bebida, id) {
        const query = `UPDATE bebida SET (id, produto, preco) = (?,?,?) WHERE id=?`
        const body = Object.values(bebida)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({message: "atualizado com sucesso"})
                }
            })
        })
    }


    static atualizaPetiscoPorID(petisco, id) {
        const query = `UPDATE petisco SET (id, produto, preco) = (?,?,?) WHERE id=?`
        const body = Object.values(petisco)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({message: "atualizado com sucesso"})
                }
            })
        })
    }

    static atualizaIngressoPorID(ingresso, id) {
        const query = `UPDATE ingresso SET (id, categoria, preco) = (?,?,?) WHERE id=?`
        const body = Object.values(ingresso)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({message: "atualizado com sucesso"})
                }
            })
        })
    }
    

    static deletaUsuarioPorID(id) {
        const query = `DELETE FROM usuario WHERE id=?`
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({ error: false, idDeletado: id })
                }
            })
        })
    }

    static deletaBebidaPorID(id) {
        const query = `DELETE FROM bebida WHERE id=?`
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({ error: false, idDeletado: id })
                }
            })
        })
    }

    static deletaPetiscoPorID(id) {
        const query = `DELETE FROM petisco WHERE id=?`
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({ error: false, idDeletado: id })
                }
            })
        })
    }

    static deletaIngressoPorID(id) {
        const query = `DELETE FROM ingresso WHERE id=?`
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({ error: false, idDeletado: id })
                }
            })
        })
    }

}

export default DatabaseMetodos