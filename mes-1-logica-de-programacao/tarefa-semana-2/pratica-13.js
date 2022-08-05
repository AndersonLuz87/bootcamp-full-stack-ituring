// Prática 13: Aprendendo o operador ternário

function qualEhMenor (numero1,numero2) {
   let menor = numero1 < numero2 ? numero1 : numero2
   console.log(`Entre o número ${numero1} e o número ${numero2}, o menor (ou igual) é o ${menor}`)
}

qualEhMenor (1,2)
qualEhMenor (4,3)
qualEhMenor (5,5)