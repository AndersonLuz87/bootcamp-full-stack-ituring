//Prática 4: Raiz quadrada dos elementos de uma lista

function calcularRaizes (lista){

let raizQuadrada = lista.map(function(item){
    
    return Math.sqrt(item)
})

console.log(raizQuadrada)
}

calcularRaizes([4, 9, 16, 25, 36, 49])