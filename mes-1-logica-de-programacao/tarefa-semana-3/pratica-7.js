//Prática 7: Calculando o saldo final

function calcularSaldo (lista){

    let resultadoDaConta = 0
    let i = 0

    for (item of lista) {

        resultadoDaConta = resultadoDaConta + lista[i]
        i ++
    }
    
    return resultadoDaConta
}

let contaFinal = calcularSaldo ([100, -20, -30, 10, -7, -21, -5])
console.log(`O saldo final é de R$ ${contaFinal} reais`)

