//Prática 11: Ordenação

function ordenarNumeros (lista){
   let listaOrdenada = lista;   
    listaOrdenada.sort(function(a, b){
        return a - b
    });
    return listaOrdenada
}

let n = ordenarNumeros([10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824])
console.log(`[${n}]`)