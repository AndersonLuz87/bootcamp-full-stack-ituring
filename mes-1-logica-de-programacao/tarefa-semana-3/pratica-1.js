//Prática 1: Implementando meu primeiro comando de repetição

function tabuada (numero1, numero2, limite){

    let resultado = 0;

    while (numero2 <= limite) {
        
    resultado = numero1 * numero2;
    
    console.log(`${numero1} x ${numero2} = ${resultado}`)

    numero2 += 1;

    }
    return resultado;
}

let resultadoDaTabuada = tabuada (9,1,10)



