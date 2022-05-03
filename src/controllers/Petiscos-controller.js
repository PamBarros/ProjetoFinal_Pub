import Validacoes from "../services/Validacoes.js"
import PetiscosModel from "../models/PetiscosModel.js"
import DatabaseMetodos from "../DAO/DatabaseMetodos.js"

class Petiscos{
    static routers(app){
        app.get("/petiscos", async (req, res)=>{
            const response = await DatabaseMetodos.listarTodosPetiscos()
            res.status(200).json(response)
        })

        app.get("/petiscos/:id", async (req, res)=>{
            const {id} = req.params;
            try{
                    let response = await DatabaseMetodos.listaPetiscoPorID(id);
                    res.status(200).json(response)
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })

        app.post("/petiscos", async (req, res)=> {
            try{
                if(Validacoes.validaPreco(req.body.preco)){
                const usuario = new PetiscosModel(...Object.values(req.body))
                const response = await DatabaseMetodos.popularPetisco(usuario)
                res.status(201).json(response)
                } else {
                    throw new Error ("Requisição fora dos padrões")
                }
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })

        app.put("/petiscos/:id", async (req, res)=>{
            try {
                if (Validacoes.validaPreco(req.body.preco)) {
                    const cliente = req.body;
                    const response = await DatabaseMetodos.atualizaPetiscoPorID(cliente, req.params.id)
                    res.status(200).json(response)
                } else {
                    throw new Error("Requisição fora do padrão")
                }         
            } catch (e) {
                res.status(400).json({ erro: e.message })
            }
        })

        app.delete("/petiscos/:id", async (req, res)=>{
            try{
                const response = await DatabaseMetodos.deletaPetiscoPorID(req.params.id)
                res.status(200).json(response)
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })        

    }
}

export default Petiscos
