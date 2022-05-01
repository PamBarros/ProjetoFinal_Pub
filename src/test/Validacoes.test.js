import Validacoes from "../services/Validacoes.js";

test("Validar se o nome tem pelo menos 3 caracteres.", ()=>{
    expect(Validacoes.validaNome("Pub")).toBe(true)
})
test("Validar se o número de telefone tem 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("12345678910")).toBe(true)
})

test("Validar se o email tem @ e pontos e quantidade minima de digitos", ()=>{
    expect(Validacoes.validaEmail("email@email.com")).toBe(true)
})

test("Validar se o preco não possui string e possui mais de um numero digitado", ()=>{
    expect(Validacoes.validaPreco("123")).toBe(true)
})