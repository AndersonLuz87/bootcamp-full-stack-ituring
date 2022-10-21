//Prática 4: Minha lista de seriados

function listaSeriados (lista) {
    let i = 0
   for (item of lista) {
    console.log(`[${i}] ${lista[i]}`);
    i ++
   } 
}

listaSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]);