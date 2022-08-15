//Prática 2: Exiba os ímpares

function ehImpar (numeroMaximo){

    let numero = 1;

    while (numero <= numeroMaximo) {

        if (numero % 2 === 1) {

         console.log (`O número ${numero} é ímpar`)

        }
        
        numero ++
    }

    return numero;
}

let numeroImpares = ehImpar (17)