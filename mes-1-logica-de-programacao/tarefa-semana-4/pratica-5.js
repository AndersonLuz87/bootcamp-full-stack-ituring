//Prática 5: Ordenando uma lista de números

function ordenarNumeros (numeros) {
    let listaOrdenada = numeros.sort(function(a,b){
            return a-b;
        });

    return listaOrdenada;
};

console.log(ordenarNumeros([4, 9, 7, 1, 8, 12]));