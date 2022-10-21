//Prática 5: Procurando um seriado especial

function buscarSeriados (lista,busca) {

    let i = 0;
    
    for (item of lista){

        if (lista[i] === busca)
            
            return i;
        
        i++;
    }
    return undefined;
}

console.log(buscarSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter"));