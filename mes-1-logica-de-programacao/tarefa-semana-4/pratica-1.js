//Prática 1: Utilizando o método .forEach() (parte 1)

let listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
listaSeries.forEach(function(item , indice) {
    console.log(`[${indice}] ${item}`)
})