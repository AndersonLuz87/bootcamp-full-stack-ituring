// Prática 5: Procurando um seriado especial

function buscarSeries (lista, indice) {
   let qualIndiceDaLista = lista.indexOf(indice) > 0 ? true : false

    if (qualIndiceDaLista){
        return lista.indexOf(indice)
    } else {
        return "Undefined"
    }
    
}

let serieRetornada0 = buscarSeries(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter")
let serieRetornada1 = buscarSeries(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends")
console.log(serieRetornada0)
console.log(serieRetornada1)
