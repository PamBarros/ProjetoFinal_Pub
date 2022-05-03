import Validacoes from "../services/Validacoes.js"
import IngressosModel from "../models/IngressosModel.js"
import DatabaseMetodos from "../DAO/DatabaseMetodos.js"

class Ingressos{
    static routers(app){
        app.get("/ingresso", async (req, res)=>{
            const response = await DatabaseMetodos.listarTodosIngressos()
            res.status(200).json(response)
        })

        app.get("/ingresso/:id", async (req, res)=>{
            const {id} = req.params;
            try{
                    let response = await DatabaseMetodos.listaIngressoPorID(id);
                    res.status(200).json(response)
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })

        app.post("/ingresso", async (req, res)=> {
            try{
                if(Validacoes.validaPreco(req.body.preco)){
                const usuario = new IngressosModel(...Object.values(req.body))
                const response = await DatabaseMetodos.popularIngresso(usuario)
                res.status(201).json(response)
                } else {
                    throw new Error ("Requisição fora dos padrões")
                }
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })

        app.put("/ingresso/:id", async (req, res)=>{
            try {
                if (Validacoes.validaPreco(req.body.preco)) {
                    const cliente = req.body;
                    const response = await DatabaseMetodos.atualizaIngressoPorID(cliente, req.params.id)
                    res.status(200).json(response)
                } else {
                    throw new Error("Requisição fora do padrão")
                }         
            } catch (e) {
                res.status(400).json({ erro: e.message })
            }
        })

        app.delete("/ingresso/:id", async (req, res)=>{
            try{
                const response = await DatabaseMetodos.deletaIngressoPorID(req.params.id)
                res.status(200).json(response)
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })        

    }
}

export default Ingressos
