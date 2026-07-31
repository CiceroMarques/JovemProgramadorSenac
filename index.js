//console.log('Hello World');

import express from 'express' //Type Module
//const express = require("express") // --type common JS

// inicializando o express (similar ao New em c#)
const app = express()

app.get("/api/somar", (req, res) => {
    //3 "tipos" de variaveis no javascript
    //const - variavel que não muda nunca (constante) - do inicio ao fim do programa se manterá a mesma
    //let - variavel que pode ser alterada durante a execução do programa - começa com um valor e pode ser alterado no final
    //var - não iremos utilizar :(

    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({message: num1 + num2})
})

app.listen(3000, () => {
    console.log("Server rodando na porta 3000 -> https://localhost:3000")
})