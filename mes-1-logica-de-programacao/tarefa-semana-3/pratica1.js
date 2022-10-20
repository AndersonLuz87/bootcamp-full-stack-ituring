//Prática 1: Implementando meu primeiro comando de repetição

function tabuada (numeral) {
    let resultado = 0;
    let i = 1;
    console.log(`Tabuada do ${numeral}`);
    while (i <= 10) {
        resultado = i * numeral;
        console.log(`${i} x ${numeral} = ${resultado}`)
        i ++;
    }
    return `Fim!`;
}

console.log(tabuada(9));