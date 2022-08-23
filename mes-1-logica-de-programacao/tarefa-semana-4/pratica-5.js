//Prática 5: Ordenando uma lista de números

function ordenarLista (lista) {
    
    lista.sort(function (a,b){
    
    return a - b;

    })

    console.log(lista)
}

ordenarLista ([4, 9, 7, 1, 8, 12])