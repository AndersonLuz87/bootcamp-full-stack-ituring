//Prática 6: Melhorando o processo de busca

function buscarSeriados (lista, busca) {

    let i1 = 0;
    let i2 = 0;
    let resultadoDaBusca = [];
    
    for (item of lista) {

        if (lista[i1].includes(busca)){

            resultadoDaBusca[i2] = lista[i1]
            i2 ++;
        };    
        
        i1 ++

    };

    return resultadoDaBusca;
};

console.log(buscarSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th"));