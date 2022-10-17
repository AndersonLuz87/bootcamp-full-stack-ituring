//Prática 4: Funções com parâmetros e retornando valores

function valorFinal (valor, desconto){

    return (valor * (100 - desconto)) / 100;
}

console.log(valorFinal(100,10));