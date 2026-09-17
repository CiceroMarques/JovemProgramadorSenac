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

}

export default new ServiceExercicio()