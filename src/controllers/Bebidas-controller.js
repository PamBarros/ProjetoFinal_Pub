import Validacoes from "../services/Validacoes.js"
import BebidasModel from "../models/BebidasModel.js"
import DatabaseMetodos from "../DAO/DatabaseMetodos.js"

class Bebidas{
    static routers(app){
        app.get("/bebidas", async (req, res)=>{
<<<<<<< Updated upstream
            const response = await DatabaseMetodos.listarTodosIngressos()
=======
            const response = await DatabaseMetodos.listarTodasBebidas()
>>>>>>> Stashed changes
            res.status(200).json(response)
        })

        app.get("/bebidas/:id", async (req, res)=>{
            const {id} = req.params;
            try{
<<<<<<< Updated upstream
                    let response = await DatabaseMetodos.listaIngressoPorID(id);
=======
                    let response = await DatabaseMetodos.listaBebidaPorID(id);
>>>>>>> Stashed changes
                    res.status(200).json(response)
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })

        app.post("/bebidas", async (req, res)=> {
            try{
                if(Validacoes.validaPreco(req.body.preco)){
                const usuario = new BebidasModel(...Object.values(req.body))
                const response = await DatabaseMetodos.popularBebida(usuario)
                res.status(201).json(response)
                } else {
                    throw new Error ("Requisição fora dos padrões")
                }
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })

        app.put("/bebidas/:id", async (req, res)=>{
            try {
                if (Validacoes.validaPreco(req.body.preco)) {
                    const cliente = req.body;
                    const response = await DatabaseMetodos.atualizaBebidaPorID(cliente, req.params.id)
                    res.status(200).json(response)
                } else {
                    throw new Error("Requisição fora do padrão")
                }         
            } catch (e) {
                res.status(400).json({ erro: e.message })
            }
        })

        app.delete("/bebidas/:id", async (req, res)=>{
            try{
                const response = await DatabaseMetodos.deletaBebidaPorID(req.params.id)
                res.status(200).json(response)
            } catch (e){
                res.status(400).json({erro: e.message})
            }
        })        

    }
}

<<<<<<< Updated upstream
export default Bebidas

=======
export default Bebidas
>>>>>>> Stashed changes
