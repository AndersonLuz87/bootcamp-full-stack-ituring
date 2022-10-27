//Prática 4: Raiz quadrada dos elementos de uma lista.

function calcularRaiz (numeros){

    let resultadoRaiz = numeros.map(function(item){
        return Math.sqrt(item);
    });

    return resultadoRaiz;
};

console.log(calcularRaiz([4, 9, 16, 25, 36, 49]));