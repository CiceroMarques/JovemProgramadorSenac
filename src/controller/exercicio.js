import ServiceExercicio from '../Service/exercicio.js'
class ControllerExercicio {

    Somar(req, res) {

        //3 "tipos" de variaveis no javascript
        //const - variavel que não muda nunca (constante) - do inicio ao fim do programa se manterá a mesma
        //let - variavel que pode ser alterada durante a execução do programa - começa com um valor e pode ser alterado no final
        //var - não iremos utilizar :(

        try {
            const num1 = Number(req.query.num1)
            const num2 = Number(req.query.num2)
            const soma = ServiceExercicio.Somar(num1, num2)

            res.send({ message: soma })

        } catch (error) {
            res.send({ message: error.message})
        }

    }
    Somar1(req, res) { //esse é com post
        const num1 = req.body.num1
        const num2 = req.body.num2
        const soma = ServiceExercicio.Somar1(num1, num2)

        res.send({ message: soma })
    }

    Salario(req, res) {
        const Vlr = Number(req.params.valor)
        const HorasTrab = Number(req.params.hora)
        const resultado = ServiceExercicio.Salario(Vlr, HorasTrab)

        res.send({ message: resultado })
    }

    Exercicio2(req, res) {
        const Vlr = req.body.valor
        const HorasTrab = req.body.hora

        const resultado = (Vlr * HorasTrab) * 30
        res.send({ message: resultado })
    }

    Exercicio3(req, res) {
        const peso1 = req.body.peso1
        const peso2 = req.body.peso2
        const peso3 = req.body.peso3
        const peso4 = req.body.peso4
        const peso5 = req.body.peso5

        const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
        res.send({ message: media })

    }
    Exercicio4(req, res) {
        const tempCelsius = req.body.celsius

        const tempFahreiheit = (9 * tempCelsius + 160) / 5
        res.send({ message: tempFahreiheit })

        //para rodar o  codigo no navegador = http://localhost:3000/api/exercicio4?celsius=10
    }
    Exercicio5(req, res) {
        const distMilhas = req.body.milhas

        const Km = distMilhas * 1.60934
        res.send({ message: Km })
    }
    Exercicio6(req, res) {
        const segundos = req.body.segundos

        const minutos = segundos / 60
        const horas = minutos / 60

        res.send({ message: 'Tempo em segundo: ' + segundos + ", tempo em minutos: " + minutos + ", tempo em Horas: " + horas })
    }
    Exercicio7(req, res) {
        const distKm = req.body.km

        const metros = distKm * 1000
        const centimetros = metros * 100

        res.send({ message: "A distancia informada em é: " + metros + " metros ou " + centimetros + " centímetros" })

        //para rodar (não testado) -> http://localhost:3000/api/exercicio7?km=10
    }
    Exercicio8(req, res) {
        const number = req.body.numero

        let resul = [] //salvando a saída da tabuada em um array, para mostrar ela do um ao 10

        for (let index = 1; index <= 10; index++) {
            resul.push({ //a função push empilha mais uma linha no array
                message: number + "*" + index + "=" + (number * index)
            })
        }
        res.send(resul) //faz a saída completa de uma só vez mostrando toda a tabuada (cada get/post pode ter apenas um .send)  
    }
    Desafio0(req, res) {
        const idade = req.body.idade

        const totalDias = idade * 365

        const totalMeses = (totalDias / 30).toFixed(0)


        const saida = ({ message: idade + " ano(s) em meses é: " + totalMeses + ". E em dias é: " + totalDias })

        res.send(saida)

    }
    Desafio1(req, res) {
        let valorA = req.body.valorA
        let valorB = req.body.valorB

        const valorOrig = [valorA, valorB]

        let aux = valorA

        valorA = valorB
        valorB = aux

        res.send({
            message: "O valor original de A e B eram, respectivamente: " + valorOrig + " e após a troca ficou... valor A: " + valorA +
                " e valor B: " + valorB
        })
    }
    Desafio2(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        let saida = "Os dois números são iguais"

        if (num1 > num2) {
            saida = "O primeiro valor digitado é maior que o segundo valor!"
        } else if (num2 > num1) {
            saida = "O segundo valor digitado é maior que o primeiro valor!"
        }

        res.send({ message: saida })
    }
    Exercicio9(req, res) {
        const nota1 = req.body.nt1
        const nota2 = req.body.nt2
        const nota3 = req.body.nt3
        let msg = "Reprovado"

        const media = (nota1 + nota2 + nota3) / 3

        if (media >= 7) {
            msg = "Aprovado"
        } else if (media >= 5) {
            msg = "Recuperação"
        }

        res.send({ message: "Aluno: " + msg })
    }
    Exercicio10(req, res) {
        let genero = req.body.genero
        let pesoIdeal
        const altura = req.body.altura
        let saida

        if (genero == 'H' || genero == 'h') {
            pesoIdeal = ((72.7 * altura) - 58).toFixed(2)
            saida = "O seu peso ideal com base no seu gênero e altura é: " + pesoIdeal
        } else if (genero == "M" || genero == 'm') {
            pesoIdeal = ((62.1 * altura) - 44.7).toFixed(2)
            saida = "O seu peso ideal com base no seu gênero e altura é: " + pesoIdeal
        } else {
            saida = "Opção não reconhecida "
        }

        res.send({ message: saida })
    }
    Exercicio11(req, res) {

        const num1 = req.body.num1
        const num2 = req.body.num2
        let result
        let saida
        const op = req.body.op

        if (op == "+") {
            result = num1 + num2
            saida = "A soma dos números é: " + result
        } else if (op == "-") {
            result = num1 - num2
            saida = "A subtração dos números é: " + result
        } else if (op == "*") {
            result = num1 * num2
            saida = "A multiplicação dos números é: " + result
        } else if (op == "/") {
            result = (num1 / num2).toFixed(2)
            saida = "A divisão dos números é: " + result
        } else {
            saida = "Operação informada inválida"
        }

        res.send({ message: saida })
    }
    Exercicio12(req, res) {
        const numero = req.body.numero
        let msg = "O número é igual a 0"

        if (numero > 0) {
            msg = "Número Positivo"
        } else if (numero < 0) {
            msg = "Número negativo"
        }
        res.send({ message: msg })
    }
    Exercicio13(req, res) {
        const numero = req.body.numero
        let msg = "O número é igual a 0"

        if (numero % 2 == 0) {
            msg = "O número informado é par"
        } else if (numero % 2 == 1) {
            msg = "Número informado é ímpar"
        }
        res.send({ message: msg })

    }
    Exercicio15(req, res) {
        const numero1 = req.body.nmr1
        const numero2 = req.body.nmr2
        let msg = "Os dois números são iguais"

        if (numero1 > numero2) {
            msg = "O número " + numero1 + " é maior que o número " + numero2
        } else if (numero2 > numero1) {
            msg = "O número " + numero2 + " é maior que o número " + numero1
        }
        res.send({ message: msg })
    }
    Exercicio16(req, res) {
        const lado1 = req.body.ld1
        const lado2 = req.body.ld2
        const lado3 = req.body.ld3
        let msg = "Não é possível formar um triângulo com os lados informados"

        if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)) {
            const base = req.body.base
            const altura = req.body.altura
            let area = (base * altura) / 2

            msg = "A área do triângulo é: " + area
        }

        res.send({ message: msg })
    }
    Exercicio17(req, res) {
        const cpf = req.body.cpf

        const nmrDependentes = req.body.dependente
        let rendaMensal = req.body.mensal
        let desconto
        let msg = ""

        if (nmrDependentes > 0) {
            desconto = nmrDependentes * 5
            rendaMensal = rendaMensal - ((rendaMensal * desconto) / 100)
        }

        if (rendaMensal <= 3245) {
            msg = "Você não paga imposto de renda!"
        } else if (rendaMensal <= 4863) {
            msg = "Você pagará 5% de imposto de renda!"
            rendaMensal = (rendaMensal * 5) / 100
        } else if (rendaMensal <= 8105) {
            msg = "Você pagará 10% de imposto de renda!"
            rendaMensal = (rendaMensal * 10) / 100
        } else if (rendaMensal <= 11347) {
            msg = "Você pagará 15% de imposto de renda!"
            rendaMensal = (rendaMensal * 15) / 100
        } else {
            msg = "Você pagará 20% de imposto de renda!"
            rendaMensal = (rendaMensal * 20) / 100
        }

        res.send({ message: msg + " Você terá " + (rendaMensal).toFixed(2) + " reais de desconto" })
    }
    Desafio3(req, res) {
        const num1 = req.body.nm1 //2
        const num2 = req.body.nm2 //1
        const num3 = req.body.nm3 //15

        let menor = num1 //2

        if (num2 < menor) {//1 é menor q 2? 
            menor = num2
        }
        if (num3 < menor) {
            menor = num3
        }
        res.send({ message: "O menor valor digitado é: " + menor })
    }
    Desafio4(req, res) {
        const ano = req.body.ano
        let msg = "é bissexto"

        if (ano % 4 == 0) {
            if (ano % 100 == 0 && ano % 400 != 0) {
                msg = "Não é bissexto"
            } else {
                msg = "É bissexto"
            }
        } else {
            msg = "Não é Bissexto"
        }

        res.send({ message: msg }) //2016 é Bissexto -  2017 não é
    }
    Exercicio17_2(req, res) {
        const nota1 = req.body.nota1
        const nota2 = req.body.nota2
        const nota3 = req.body.nota3
        const nota4 = req.body.nota4

        const peso1 = req.body.peso1
        const peso2 = req.body.peso2
        const peso3 = req.body.peso3
        const peso4 = req.body.peso4

        const mediaFinal = (((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4)) / (peso1 + peso2 + peso3)).toFixed(1)

        res.send({ message: "A média é " + mediaFinal })
    }
    Exercicio18(req, res) {
        const custoCarro = req.body.carro
        const vlrDistribuidor = custoCarro * 0.28
        const vlrImposto = custoCarro * 0.45
        const valorFinal = custoCarro + vlrImposto + vlrDistribuidor

        res.send({ message: "O valor final para o consumidor será: " + valorFinal })
    }
    Exercicio19(req, res) {
        const capital = req.body.capital
        const txJuros = req.body.juros
        const dias = req.body.dias

        const montante = capital + ((capital * txJuros) * dias)

        res.send({ message: `O montante é ${montante}` })
    }


}





export default new ControllerExercicio()