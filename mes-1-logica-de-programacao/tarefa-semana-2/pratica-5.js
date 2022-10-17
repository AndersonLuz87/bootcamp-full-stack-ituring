//Prática 5: Funções como variáveis (Expressão de função)

let valorFinal = function (valor, desconto){

    return (valor * (100 - desconto)) / 100;
}

console.log ( valorFinal (100, 10));