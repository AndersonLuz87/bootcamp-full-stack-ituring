// Prática 10: Qual é o maior de 3 números?


function maiorNumero (numero1, numero2, numero3){
    let numero1Maior = numero1 > numero2 && numero1 > numero3
    let numero2Maior = numero2 > numero1 && numero2 > numero3
    let numero3Maior = numero3 > numero1 && numero3 > numero2
    if (numero1Maior) {
    console.log(numero1)
} else if (numero2Maior) {
    console.log(numero2)
} else if (numero3Maior){
    console.log(numero3)
} else {
    console.log ("Tem bug aí!")
}
}
maiorNumero (1,2,3)
maiorNumero (6,5,4)
maiorNumero (7,9,8)
maiorNumero (10,10,11)
maiorNumero (11,11,10)


