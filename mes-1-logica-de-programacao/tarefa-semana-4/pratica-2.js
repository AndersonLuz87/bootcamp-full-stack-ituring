//Prática 2: Utilizando o método .forEach() (parte 2)

function buscarSeriado (lista,termoDeBusca){
    let resultadoDaBusca = undefined;

  lista.forEach(function(item){
    
    if(item.includes(termoDeBusca))
        resultadoDaBusca = lista.indexOf(item); 
   
  });
    return resultadoDaBusca
}

console.log(buscarSeriado(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter"));