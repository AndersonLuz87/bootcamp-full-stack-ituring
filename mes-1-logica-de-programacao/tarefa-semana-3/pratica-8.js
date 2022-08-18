//Prática 8: Calculando um extrato do banco simples

function calcularSaldo (valores) {

    let valorDepositado = 0
    let valorRetirado = 0
    let i = 0

    for (item of valores) {

        if (valores[i] > 0){

            valorDepositado = valorDepositado + valores[i]

        } else if (valores[i] < 0){

            valorRetirado = valorRetirado + valores[i]
        }
        
        i++

    }

    return valorDepositado + valorRetirado
}

let saldoFinal = calcularSaldo([100, -20, -30, 10, -7, -21, -5])
console.log(`O saldo final é de ${saldoFinal} reais`)