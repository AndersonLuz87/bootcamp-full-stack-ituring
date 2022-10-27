//Prática 3: Utilizando o método .filter()

function buscarSeriados (lista,busca){
    let resultadoDaBusca = lista.filter(function(item){
        return item.includes(busca);
});
    return resultadoDaBusca;
};

console.log(buscarSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th"));