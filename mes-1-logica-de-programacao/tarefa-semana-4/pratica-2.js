//Prática 2: Utilizando o método .forEach() (parte 2)

function buscarSerie (lista , busca) {

    let listaSeries = lista
    let indiceResultado = null

    listaSeries.forEach(function(item, indice){     

        if (item === busca){
            
            indiceResultado = indice
            console.log(indice)
        }           
    })    

    if (indiceResultado === null){
        console.log("Undefined")
    }
}

buscarSerie (["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"] , "Dexter")
