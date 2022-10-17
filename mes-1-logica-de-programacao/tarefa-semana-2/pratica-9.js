//Prática 9: Qual é o maior de 2 números?

let numeroMaior = (primeiroNumero , segundoNumero) => {
    if (primeiroNumero >= segundoNumero) {
        return `O número ${primeiroNumero} é maior ou igual ao número ${segundoNumero}`;
    } else { 
        return `O número ${primeiroNumero} é menor que o número ${segundoNumero}`;
    }
}

console.log(numeroMaior(10,20));
console.log(numeroMaior(40,30));
console.log(numeroMaior(50,50));