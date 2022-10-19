//Prática 15: Cálculo do IMC (modularizado)

function calcularIMC (altura,peso){
    return peso / (altura*altura);
}

function analizarIMC (imc) {
    console.log(imc);
    if (imc < 18.5) {
        return `Abaixo do peso`;
    } else if ( imc >= 18.5 && imc < 25) {
        return `Peso normal`;
    } else if ( imc >= 25 && imc < 30) {
        return `Sobrepeso`;
    } else {
        return `Obesidade`;
    }
}

console.log(analizarIMC(calcularIMC(1.88,75.5)));