//Prática 8: Par ou ímpar?

function parOuImpar (numero) {
    if (numero%2 === 0 && numero !== 0) {
        console.log(`O número ${numero} é par!`)
    } else if (numero%2 === 1) {
        console.log(`O número ${numero} é impar!`)
    } else {
        console.log(`O número ${numero} é nulo!`)
    }
}

parOuImpar (4)
parOuImpar (5)
parOuImpar (0)
