//Prática 3: Funções sem parâmetros e retornando valores

const numeroMax = 10000;
const numeroMin = 0 

function numeroAleatório(){

    return Math.floor(Math.random()*(numeroMax - numeroMin) - numeroMin);
}

console.log(numeroAleatório())