//Prática 3: Funções sem parâmetros e retornando valores

//Criando uma função sem parametro, com objeto Math para gerar um numero aleatório inteiro entre 0 e 10000


function numeroAleatorio () {
    min = 0
    max = 10000
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

console.log(numeroAleatorio())
