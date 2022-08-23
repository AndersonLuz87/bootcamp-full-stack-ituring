//Prática 3: Utilizando o método .filter()

function buscaFiltrada (lista, busca) {

    let resultadoBusca = lista.filter(function(item){
    
    return item.includes(busca)
})

console.log(resultadoBusca)

}

buscaFiltrada(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"] , "Th")