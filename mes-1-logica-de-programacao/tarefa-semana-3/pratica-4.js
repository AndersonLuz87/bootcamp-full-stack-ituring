//Prática 4: Minha lista de seriados

function listaSeries (lista, indice){
    console.log(`Olá, temos as seguintes séries: ${lista}, você quer escolher uma?`)

    return lista [indice]
}

let exibirLista = listaSeries( ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"],0)
console.log(`Você escolheu a série ${exibirLista} para assistir!`)