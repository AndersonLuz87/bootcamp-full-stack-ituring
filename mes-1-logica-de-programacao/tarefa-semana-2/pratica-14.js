//Prática 14: Cálculo do IMC

function calcularIMC (altura,peso){

    const imc = peso / (altura * altura);
    console.log(imc)

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

console.log(calcularIMC(1.88, 75.7));