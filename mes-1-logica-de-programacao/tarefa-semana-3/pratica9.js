//Prática 9: Calculando um extrato do banco completo

function saldoBancario (lista) {

    let i = 0;
    let depositos = 0;
    let retirados = 0;
    let contadorDepositos = 0;

    for (item of lista) {

        if (lista[i] > 0) {
            depositos = lista[i] + depositos;
            contadorDepositos ++;
        } else 
             retirados = lista[i] + retirados;
        
        i++;
    }

    return `
    Total de depósitos: ${contadorDepositos}
    Total de retiradas: ${lista.length - contadorDepositos}
    O valor total depositado foi de: R$ ${depositos}
    O valor total retirado foi de: R$ ${Math.abs(retirados)}
    O saldo final de sua conta é de R$ ${depositos + retirados}`
};

console.log(saldoBancario([100, -20, -30, 10, -7, -21, -5]));