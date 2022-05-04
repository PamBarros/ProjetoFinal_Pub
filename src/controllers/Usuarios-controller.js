import Validacoes from "../services/Validacoes.js"
import UsuariosModel from "../models/UsuariosModel.js"
import DatabaseMetodos from "../DAO/DatabaseMetodos.js"

class Usuarios{
    static routers(app){
        app.get("/usuario", async (req, res)=>{
            const response = await DatabaseMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/usuario/:id", async (req, res)=>{
            const {id} = req.params;
            try{
                    let response = await DatabaseMetodos.listaUsuarioPorID(id);
                    res.status(200).json(response)
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })

        app.post("/usuario", async (req, res)=> {
            try{
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaTelefone(req.body.telefone) && Validacoes.validaEmail(req.body.email)){
                const usuario = new UsuariosModel(...Object.values(req.body))
                const response = await DatabaseMetodos.popularUsuario(usuario)
                res.status(201).json(response)
                } else {
                    throw new Error ("Requisição fora dos padrões")
                }
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })

        app.put("/usuario/:id", async (req, res)=>{
            try {
                if (Validacoes.validaNome(req.body.nome) && Validacoes.validaTelefone(req.body.telefone) && Validacoes.validaEmail(req.body.email)) {
                    const cliente = req.body;
                    const response = await DatabaseMetodos.atualizaUsuarioPorID(cliente, req.params.id)
                    res.status(200).json(response)
                } else {
                    throw new Error("Requisição fora do padrão")
                }         
            } catch (e) {
                res.status(400).json({ erro: e.message })
            }
        })

        app.delete("/usuario/:id", async (req, res)=>{
            try{
                const response = await DatabaseMetodos.deletaUsuarioPorID(req.params.id)
                res.status(200).json(response)
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })        

    }
}

export default Usuarios