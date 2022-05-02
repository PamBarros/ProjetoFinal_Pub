import DatabaseMetodos from "../DAO/DatabaseMetodos.js";

try{
    const tableUsuario = await DatabaseMetodos.createTableUsuario()
    console.log(tableUsuario)
    console.log("passou usuario!")
    let populaUsuario = await DatabaseMetodos.popularUsuario(
        {
            id: "1", 
            nome:"José", 
            email:"couve@mineira.com",
            telefone: "2198654754"
        }

    )

    console.log(populaUsuario)

    const tableBebida = await DatabaseMetodos.createTableBebida()
    console.log(tableBebida)
    console.log("passou bebida!")

    let populaBebida = await DatabaseMetodos.popularBebida(
        {
            id: "1", 
            produto:"Long Neck Bud", 
            preco: "12.00"

        })

    console.log(populaBebida)

    const tablePetisco = await DatabaseMetodos.createTablePetisco()
    console.log(tablePetisco)
    console.log("passou petisco!")

    let populaPetisco = await DatabaseMetodos.popularPetisco(
        {
            id: "1", 
            produto:"Frango a passarinho", 
            preco: "20.00"

        })

    console.log(populaPetisco)

    const tableIngresso = await DatabaseMetodos.createTableIngresso()
    console.log(tableIngresso)
    console.log("passou ingresso!")

    let popularIngresso = await DatabaseMetodos.popularIngresso(
        {
            id: "1", 
            categoria:"VIP", 
            preco: "12.00"

        })

    console.log(popularIngresso)

} catch (e){
    console.log(e.message)
} 