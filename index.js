//console.log('Hello World');

import express, { json } from 'express' //Type Module
//const express = require("express") // --type common JS

// inicializando o express (similar ao New em c#)
const app = express()

app.use(express.json())

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


//Exemplo em sala de aula utilizando o método post e o Body - aula 12/08
//Exercicio 1 usando POST

app.post("/api/somar1", (req, res) =>{
    const num1 = req.body.num1
    const num2 = req.body.num2

    res.send({resultado: num1 + num2})
})





//Exercicio 2 - usando params nos parametros - Usando GET
app.get("/api/salario/:valor/:hora", (req, res) => {
    const Vlr = Number(req.params.valor)
    const HorasTrab = Number(req.params.hora)

    const resultado = (Vlr * HorasTrab) * 30
    res.send({message: resultado})
})


//Exercicio 2 - usando params nos parametros - Usando POST
app.post("/api/exercicio2", (req, res) => {
    const Vlr = req.body.valor
    const HorasTrab = req.body.hora

    const resultado = (Vlr * HorasTrab) * 30
    res.send({message: resultado})
})



//Exercicio 3 - Media de Pesos de 5 pessoas usando GET
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

//Exercicio 3 - Media de Pesos de 5 pessoas usando POST
app.post("/api/exercicio3", (req, res) =>{
    const peso1 = req.body.peso1
    const peso2 = req.body.peso2
    const peso3 = req.body.peso3
    const peso4 = req.body.peso4
    const peso5 = req.body.peso5

    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.send({message: media})

})




//Exercicio 4 - Celsius para Fahrenheit USANDO GET
app.get ("/api/exercicio4", (req, res) => {
    const tempCelsius = Number(req.query.celsius)
    
    const tempFahreiheit = (9 * tempCelsius + 160) / 5
    res.send({message: tempFahreiheit})

    //para rodar o  codigo no navegador = http://localhost:3000/api/exercicio4?celsius=10
})


//Exercicio 4 - Celsius para Fahrenheit USANDO POST
app.post ("/api/exercicio4", (req, res) => {
    const tempCelsius = req.body.celsius
    
    const tempFahreiheit = (9 * tempCelsius + 160) / 5
    res.send({message: tempFahreiheit})

    //para rodar o  codigo no navegador = http://localhost:3000/api/exercicio4?celsius=10
})


//Exercicio 5 - Milhar para Km usando GET
app.get ("/api/exercicio5/:milhas", (req, res) => {
    const distMilhas = Number(req.params.milhas)

    const Km = distMilhas * 1.60934
    res.send({message: Km})
})


//Exercicio 5 - Milhar para Km usando POST
app.post ("/api/exercicio5", (req, res) => {
    const distMilhas = req.body.milhas

    const Km = distMilhas * 1.60934
    res.send({message: Km})
})

//Exercicio 6 - segundos para horas

app.get ("/api/exercicio6/:segundos", (req, res) => {
    const segundos = Number(req.params.segundos)

    const minutos = segundos * 60
    const horas = minutos * 60

    res.send({message: 'Tempo em segundo: ' +segundos+ ", tempo em minutos: " +minutos+ ", tempo em Horas: "+horas})

    //para rodar (não testado) -> http://localhost:3000/api/exercicio6/500
})


//Exercicio 6 - segundos para horas usando POST

app.post ("/api/exercicio6", (req, res) => {
    const segundos = req.body.segundos

    const minutos = segundos / 60
    const horas = minutos / 60

    res.send({message: 'Tempo em segundo: ' +segundos+ ", tempo em minutos: " +minutos+ ", tempo em Horas: "+horas})
})



app.get ("/api/exercicio7", (req, res) => {
    const distKm = Number(req.query.km)

    const metros = distKm*1000
    const centimetros = metros * 100

    res.send ({message: "A distancia informada em é: "+metros+ " metros ou " +centimetros+" centímetros"})

    //para rodar (não testado) -> http://localhost:3000/api/exercicio7?km=10
})


//Exercicio 7 usando POST
app.post ("/api/exercicio7", (req, res) => {
    const distKm = req.body.km

    const metros = distKm*1000
    const centimetros = metros * 100

    res.send ({message: "A distancia informada em é: "+metros+ " metros ou " +centimetros+" centímetros"})

    //para rodar (não testado) -> http://localhost:3000/api/exercicio7?km=10
})



//Exercicio 8 usando GET
app.get ("api/exercicio8", (req, res) => {
    const numero = Number(req.query.numero)

    let resul = [] //salvando a saída da tabuada em um array, para mostrar ela do um ao 10

    for (let index = 1; index <= 10; index++) {
        resul.push({ //a função push empilha mais uma linha no array
            message: number+"*"+index+"="+ (number*index)
        })
        res.send(resul) //faz a saída completa de uma só vez mostrando toda a tabuada (cada get pode ter apenas um .send)              
    }
    //para rodar (não testado - acho q ta errado dessa forma) -> http://localhost:3000/api/exercicio7?numero=2
})


//Exercicio 8 usando POST
app.post ("/api/exercicio8", (req, res) => {
    const number = req.body.numero

    let resul = [] //salvando a saída da tabuada em um array, para mostrar ela do um ao 10

    for (let index = 1; index <= 10; index++) {
        resul.push({ //a função push empilha mais uma linha no array
            message: number + "*" + index + "=" + (number*index)
        })           
    }
    res.send(resul) //faz a saída completa de uma só vez mostrando toda a tabuada (cada get/post pode ter apenas um .send)  
})



//Desafio 0 - idade em anos e mostrar em meses e dias -  usando GET
app.get ("api/desafio0", (req, res) => {
    const idade = Number(req.query.idade)

    const totalDias = idade * 365

    const totalMeses = totalDias / 30

    const dias =  totalDias % 30

    const saida = ({ message: "Transformando a idade: " +idade+ " para meses e dias é: " +totalMeses+ " meses e " +dias+" dias" })

    res.send(saida)

})



//Desafio 0 - idade em anos e mostrar em meses e dias -  usando POST
app.post ("/api/desafio0", (req, res) => {
    const idade = req.body.idade

    const totalDias = idade * 365

    const totalMeses = (totalDias / 30).toFixed(0)


    const saida = ({ message: idade+ " ano(s) em meses é: " +totalMeses+ ". E em dias é: " +totalDias })

    res.send(saida)

}) 



//Desafio 1 - trocar valores A e B usando POST

app.post("/api/desafio1", (req, res) => {
    let valorA = req.body.valorA
    let valorB = req.body.valorB

    const valorOrig = [valorA, valorB]

    let aux = valorA

    valorA = valorB
    valorB = aux

    res.send({message: "O valor original de A e B eram, respectivamente: " +valorOrig+ " e após a troca ficou... valor A: " +valorA+
        " e valor B: " +valorB})
})


//Desafio 2 - Pedir dois numeros inteiros e dizer quem é maior com POST

app.post("/api/desafio2", (req, res) =>{
    const num1 = req.body.num1
    const num2 = req.body.num2
    let saida = "Os dois números são iguais"

    if (num1>num2) {
        saida = "O primeiro valor digitado é maior que o segundo valor!"
    } else if (num2>num1) {
        saida = "O segundo valor digitado é maior que o primeiro valor!"
    } else {
        saida
    }

    res.send({message:saida})
})


//======================* Exercicios de Estrutura de Condição com POST *==================================

//Exercicio 9 - 3 notas de alunos e média

app.post("/api/exercicio9", (req, res) =>{
    const nota1 = req.body.nt1
    const nota2 = req.body.nt2
    const nota3 = req.body.nt3
    let msg = "Reprovado"

    const media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        msg = "Aprovado"
    } else if (media >= 5){
        msg = "Recuperação"
    } else {
        msg
    }

    res.send({message:"Aluno: " + msg})
})


//Exercicio 10 - Peso ideal H e M

app.post("/api/exercicio10", (req, res) => {
    let genero = req.body.genero
    let pesoIdeal
    const altura = req.body.altura
    let saida

    if (genero == 'H' || genero == 'h') {
        pesoIdeal = ((72.7 * altura) - 58).toFixed(2)
        saida = "O seu peso ideal com base no seu gênero e altura é: " +pesoIdeal 
    } else if (genero == "M" || genero == 'm') {
        pesoIdeal = ((62.1 * altura) - 44.7).toFixed(2)
        saida = "O seu peso ideal com base no seu gênero e altura é: " +pesoIdeal
    } else {
       saida =  "Opção não reconhecida "
    }

    res.send({message:saida})
})


//Exercicio 11 - Soma Numeros com operação - usando POST

app.post("/api/exercicio11", (req, res) =>{

    const num1 = req.body.num1
    const num2 = req.body.num2
    let result
    let saida
    const op = req.body.op

    if (op == "+") {
        result = num1 + num2
        saida = "A soma dos números é: " +result
    } else if (op == "-") {
        result = num1 - num2
        saida = "A subtração dos números é: " +result
    } else if (op == "*") {
        result = num1 * num2
        saida = "A multiplicação dos números é: " +result
    } else if (op == "/") {
        result = (num1 / num2).toFixed(2)
        saida = "A divisão dos números é: " +result 
    } else {
        saida = "Operação informada inválida"
    }

    res.send({message:saida})
})


//Exercicio 12 positivo ou negativo com POST

app.post("/api/exercicio12", (req, res) =>{
    const numero = req.body.numero
    let msg = "O número é igual a 0"

    if (numero > 0) {
        msg = "Número Positivo"
    } else if (numero < 0) {
        msg = "Número negativo"
    } else {
        msg
    }
    res.send({message: msg})
})



//Exercicio 13 - Par ou Impar

app.post("/api/exercicio13", (req, res) =>{
    const numero = req.body.numero
    let msg = "O número é igual a 0"

    if(numero % 2 == 0){
        msg = "O número informado é par"
    } else if(numero % 2 == 1){
        msg = "Número informado é ímpar"
    } else {
        msg
    }
    res.send({message:msg})

})


//Exercicio 15 - Maior Número

app.post("/api/exercicio15", (req, res) => {
    const numero1 = req.body.nmr1
    const numero2 = req.body.nmr2
    let msg = "Os dois números são iguais"

    if (numero1 > numero2) {
        msg = "O número " +numero1+ " é maior que o número "+numero2
    } else if (numero2>numero1) {
        msg = "O número " +numero2+ " é maior que o número "+numero1
    } else {
        msg
    }
    res.send({message:msg})
})


//Exercicio 16

app.post("/api/exercicio16", (req, res) => {
    const lado1 = req.body.ld1
    const lado2 = req.body.ld2
    const lado3 = req.body.ld3
    let msg = "Não é possível formar um triângulo com os lados informados"

    if((lado1+lado2 > lado3) && (lado1+lado3 > lado2) && (lado2+lado3 > lado1)){
        const base = req.body.base
        const altura = req.body.altura
        let area = (base*altura)/2

        msg = "A área do triângulo é: " +area 

    } else {
        msg
    }
    res.send({message:msg})
})



//Exercicio 17

app.post("/api/exercicio17", (req, res) =>{
    const cpf = req.body.cpf

    const nmrDependentes = req.body.dependente
    let rendaMensal = req.body.mensal
    let desconto
    let msg = ""

    if (nmrDependentes > 0) {
        desconto = nmrDependentes*5
        rendaMensal = rendaMensal - ((rendaMensal*desconto) /100)
    }

    if(rendaMensal  <= 3245 ) {
        msg = "Você não paga imposto de renda!"
    } else if (rendaMensal <= 4863) {
        msg = "Você pagará 5% de imposto de renda!"
        rendaMensal = (rendaMensal * 5)/100
    } else if (rendaMensal <= 8105) {
        msg = "Você pagará 10% de imposto de renda!"
        rendaMensal = (rendaMensal * 10) / 100
    } else if (rendaMensal <= 11347){
        msg = "Você pagará 15% de imposto de renda!"
        rendaMensal = (rendaMensal * 15) / 100
    } else {
        msg = "Você pagará 20% de imposto de renda!"
        rendaMensal = (rendaMensal * 20) / 100
    }

    res.send({message:msg + " sua renda com o desconto ficará: " +rendaMensal})
})














app.listen(3000, () => {
    console.log("Server na porta 3000 -> https://localhost:3000")
})