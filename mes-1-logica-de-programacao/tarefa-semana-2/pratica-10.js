//Prática 10: Qual é o maior de 3 números?

let comparadores = function maiorNumero (primeiroNumero, segundoNumero, terceiroNumero){

    if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero){
        return `${primeiroNumero}`
    } else if (segundoNumero > terceiroNumero && segundoNumero > primeiroNumero){
        return `${segundoNumero}`
    } else {
        return `${terceiroNumero}`
    }
}

console.log(comparadores (10, 20, 30));
console.log(comparadores (40, 60, 50));
console.log(comparadores (90, 80, 70));