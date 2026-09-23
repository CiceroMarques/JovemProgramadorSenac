class ServiceExercicio {

    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números!")
        }
        return num1 + num2
    }

    Somar1(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números!")
        }
        return num1 + num2
    }

    Salario(vlr, horas) {
        if(isNaN(vlr) || isNaN(horas)) {
            throw new Error("Favor informar somente números!")
        }
        return (vlr * horas) * 30
    }

    Exercicio2(vlr, horas) {
        if(isNaN(vlr) || isNaN(horas)) {
            throw new Error("Favor informar somente números!")
        }
        return (vlr * horas) * 30        
    }

    Exercicio3(p1, p2, p3, p4, p5) {
        if(isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(p4) || isNaN(p5)) {
            throw new Error("Favor informar somente números!");
        }
        return (p1 + p2 + p3 + p4 + p5) / 5
    }

    Exercicio4 (tpCelsius) {
        if (isNaN(tpCelsius)) {
            throw new Error("Favor informar apenas números!");            
        }
        return (9 * tpCelsius + 160) / 5
    }

    Exercicio5 (milhas) {
         if (isNaN(milhas)) {
            throw new Error("Favor informar apenas números!");            
        }
        return (milhas * 1.60934)
    }

    Exercicio6(segundos) {
        if (isNaN(segundos)) {
            throw new Error("Favor informar apenas números!");            
        }
        const minutos = (segundos / 60).toFixed(2);
        const horas = (minutos / 60).toFixed(2);
        return {minutos, horas};


    }



}

export default new ServiceExercicio()