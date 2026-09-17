import express from "express"
import ControllerExercicio from "../controller/exercicio.js"

const router = express.Router()


//Exercicio 1 - usando query nos paramentros
router.get("/api/somar", ControllerExercicio.Somar)


//Exemplo em sala de aula utilizando o método post e o Body - aula 12/08
//Exercicio 1 usando POST

router.post("/api/somar1", ControllerExercicio.Somar1)


//Exercicio Salario - usando params nos parametros - Usando GET
router.get("/api/salario/:valor/:hora", ControllerExercicio.Salario)


//Exercicio 2 - usando params nos parametros - Usando POST
router.post("/api/exercicio2", ControllerExercicio.Exercicio2)


/*
//Exercicio 3 - Media de Pesos de 5 pessoas usando GET
router.get("/api/exercicio3_1", (req, res) =>{
    const peso1 = Number(req.query.peso1)
    const peso2 = Number(req.query.peso2)
    const peso3 = Number(req.query.peso3)
    const peso4 = Number(req.query.peso4)
    const peso5 = Number(req.query.peso5)

    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.send({message: media})

    //para rodar o código no navegador = http://localhost:3000/api/exercicio3?peso1=10&peso2=20&peso3=30&peso4=40&peso5=50  = resultado igual a 30
})
*/



//Exercicio 3 - Media de Pesos de 5 pessoas usando POST
router.post("/api/exercicio3", ControllerExercicio.Exercicio3)



/*
//Exercicio 4 - Celsius para Fahrenheit USANDO GET
router.get ("/api/exercicio4_1", (req, res) => {
    const tempCelsius = Number(req.query.celsius)
    
    const tempFahreiheit = (9 * tempCelsius + 160) / 5
    res.send({message: tempFahreiheit})

    //para rodar o  codigo no navegador = http://localhost:3000/api/exercicio4?celsius=10
})
*/


//Exercicio 4 - Celsius para Fahrenheit USANDO POST
router.post("/api/exercicio4", ControllerExercicio.Exercicio4)

/*
//Exercicio 5 - Milhar para Km usando GET
router.get ("/api/exercicio5_1/:milhas", (req, res) => {
    const distMilhas = Number(req.params.milhas)

    const Km = distMilhas * 1.60934
    res.send({message: Km})
})
*/


//Exercicio 5 - Milhar para Km usando POST
router.post("/api/exercicio5", ControllerExercicio.Exercicio5)

/*

//Exercicio 6 - segundos para horas

router.get ("/api/exercicio6_1/:segundos", (req, res) => {
    const segundos = Number(req.params.segundos)

    const minutos = segundos * 60
    const horas = minutos * 60

    res.send({message: 'Tempo em segundo: ' +segundos+ ", tempo em minutos: " +minutos+ ", tempo em Horas: "+horas})

    //para rodar (não testado) -> http://localhost:3000/api/exercicio6/500
})

*/


//Exercicio 6 - segundos para horas usando POST

router.post("/api/exercicio6", ControllerExercicio.Exercicio6)


/*
router.get ("/api/exercicio7_1", (req, res) => {
    const distKm = Number(req.query.km)

    const metros = distKm*1000
    const centimetros = metros * 100

    res.send ({message: "A distancia informada em é: "+metros+ " metros ou " +centimetros+" centímetros"})

    //para rodar (não testado) -> http://localhost:3000/api/exercicio7?km=10
})
*/


//Exercicio 7 usando POST
router.post("/api/exercicio7", ControllerExercicio.Exercicio7)


/*
//Exercicio 8 usando GET
router.get ("api/exercicio8_1", (req, res) => {
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
*/


//Exercicio 8 usando POST
router.post("/api/exercicio8", ControllerExercicio.Exercicio8)


/*
//Desafio 0 - idade em anos e mostrar em meses e dias -  usando GET
router.get ("api/desafio0_1", (req, res) => {
    const idade = Number(req.query.idade)

    const totalDias = idade * 365

    const totalMeses = totalDias / 30

    const dias =  totalDias % 30

    const saida = ({ message: "Transformando a idade: " +idade+ " para meses e dias é: " +totalMeses+ " meses e " +dias+" dias" })

    res.send(saida)

})
*/



//Desafio 0 - idade em anos e mostrar em meses e dias -  usando POST
router.post("/api/desafio0", ControllerExercicio.Desafio0)



//Desafio 1 - trocar valores A e B usando POST

router.post("/api/desafio1", ControllerExercicio.Desafio1)


//Desafio 2 - Pedir dois numeros inteiros e dizer quem é maior com POST

router.post("/api/desafio2", ControllerExercicio.Desafio2)


//======================* Exercicios de Estrutura de Condição com POST *==================================

//Exercicio 9 - 3 notas de alunos e média

router.post("/api/exercicio9", ControllerExercicio.Exercicio9)


//Exercicio 10 - Peso ideal H e M

router.post("/api/exercicio10", ControllerExercicio.Exercicio10)


//Exercicio 11 - Soma Numeros com operação - usando POST

router.post("/api/exercicio11", ControllerExercicio.Exercicio11)


//Exercicio 12 positivo ou negativo com POST

router.post("/api/exercicio12", ControllerExercicio.Exercicio12)



//Exercicio 13 - Par ou Impar

router.post("/api/exercicio13", ControllerExercicio.Exercicio13)


//Exercicio 15 - Maior Número

router.post("/api/exercicio15", ControllerExercicio.Exercicio15)


//Exercicio 16

router.post("/api/exercicio16", ControllerExercicio.Exercicio16)



//Exercicio 17

router.post("/api/exercicio17", ControllerExercicio.Exercicio17)



//Desafio 3 - menor de 3 números

router.post("/api/desafio3", ControllerExercicio.Desafio3)


//Desafio 4 - Ano Bissexto

router.post("/api/desafio4", ControllerExercicio.Desafio4)



//Exercicio 17 - 3 notas e media ponderada
router.post("/api/exercicio17_2", ControllerExercicio.Exercicio17_2)


//Exercicio 18 - custo de fabrica do carro
router.post("/api/exercicio18", ControllerExercicio.Exercicio18)


//Exercicio 19 - capital inicial e taxa juros
router.post("/api/exercicio19", ControllerExercicio.Exercicio19)




export default router