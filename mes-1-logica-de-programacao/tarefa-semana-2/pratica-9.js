//Prática 9: Qual é o maior de 2 números?

function maiorOuMenor (numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`O numero ${numero1} é maior que o numero ${numero2}`)
    } else if (numero1 === numero2) {
        console.log(`${numero1} e ${numero2} são iguais`)
    } else { console.log(`O numero ${numero2} é maior que o numero ${numero1}`)
}
}

maiorOuMenor (5,4)
maiorOuMenor (6,7)
maiorOuMenor (4,4)