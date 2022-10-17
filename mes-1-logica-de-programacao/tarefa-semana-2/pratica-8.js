//Prática 8: Par ou ímpar?

let parOuImpar = function (numero) {
    if (numero%2 === 0){
        return `O numero ${numero} é par`;
    } else {
        return `O numero ${numero} é impar`;
    }
}

console.log(parOuImpar(4));
console.log(parOuImpar(5));