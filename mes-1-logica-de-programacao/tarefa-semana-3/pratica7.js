//Prática 7: Calculando o saldo final

function calcularSaldo (lista) {

    let i = 0;
    let saldoFinal = 0;
    
    for (item of lista) {

        saldoFinal = lista[i] + saldoFinal;
        i ++;
    }

    return `O saldo final da sua conta é de R$ ${saldoFinal}`;
}

console.log(calcularSaldo([100, -20, -30, 10, -7, -21, -5]));