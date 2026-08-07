//console.log('Hello World');

import express from 'express' //Type Module
//const express = require("express") // --type common JS

// inicializando o express (similar ao New em c#)
const app = express()

//Exercicio 1 - usando query nos paramentros
app.get("/api/somar", (req, res) => {
    //3 "tipos" de variaveis no javascript
    //const - variavel que não muda nunca (constante) - do inicio ao fim do programa se manterá a mesma
    //let - variavel que pode ser alterada durante a execução do programa - começa com um valor e pode ser alterado no final
    //var - não iremos utilizar :(

    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({message: num1 + num2})
})

//Exercicio 2 - usando params nos parametros 
app.get("/api/salario/:valor/:hora", (req, res) => {
    const Vlr = Number(req.params.valor)
    const HorasTrab = Number(req.params.hora)

    const resultado = (Vlr * HorasTrab) * 30
    res.send({message: resultado})
})

//Exercicio 3 - Media de Pesos de 5 pessoas
app.get("/api/exercicio3", (req, res) =>{
    const peso1 = Number(req.query.peso1)
    const peso2 = Number(req.query.peso2)
    const peso3 = Number(req.query.peso3)
    const peso4 = Number(req.query.peso4)
    const peso5 = Number(req.query.peso5)

    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.send({message: media})

    //para rodar o código no navegador = http://localhost:3000/api/exercicio3?peso1=10&peso2=20&peso3=30&peso4=40&peso5=50  = resultado igual a 30
})

//Exercicio 4 - Celsius para Fahrenheit
app.get ("/api/exercicio4", (req, res) => {
    const tempCelsius = Number(req.query.celsius)
    
    const tempFahreiheit = (9 * tempCelsius + 160) / 5
    res.send({message: tempFahreiheit})

    //para rodar o  codigo no navegador = http://localhost:3000/api/exercicio4?celsius=10
})


//Exercicio 5 - Milhar para Km
app.get ("/api/exercicio5/:milhas", (req, res) => {
    const distMilhas = Number(req.params.milhas)

    const Km = distMilhas * 1.60934
    res.send({message: Km})
})


//Exercicio 6 teste





app.listen(3000, () => {
    console.log("Server rodando na porta 3000 -> https://localhost:3000")
})