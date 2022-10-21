//Prática 8: Calculando um extrato do banco simples

function saldoBancario (lista) {

    let i = 0;
    let depositos = 0;
    let retirados = 0;

    for (item of lista) {

        if (lista[i] > 0)
            depositos = lista[i] + depositos;
         else 
             retirados = lista[i] + retirados;
        
        i++;
    }

    return `O valor total depositado foi de: R$ ${depositos}
    O valor total retirado foi de: R$ ${Math.abs(retirados)}
    O saldo final de sua conta é de R$ ${depositos + retirados}`
};

console.log(saldoBancario([100, -20, -30, 10, -7, -21, -5]));