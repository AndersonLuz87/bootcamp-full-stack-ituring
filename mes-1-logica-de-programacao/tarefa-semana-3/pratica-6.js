//Prática 6: Melhorando o processo de busca

function serie (lista, busca){

    let listaFiltrada = []
    let indice = 0
  
    for (let i = 0; i < lista.length ; i ++){
        
        if (lista[i].includes(busca)){

           listaFiltrada[indice] = lista[i]
           indice ++
        } 
        
    } 
   
    return listaFiltrada 
}

let resultadoBusca = serie (["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th")
console.log(resultadoBusca)
