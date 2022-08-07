//Prática 15: Cálculo do IMC (modularizado)

function calcularIMC (peso, altura){
  return imc = peso / (altura * altura);
}
calcularIMC (85, 1.74)
console.log(`O seu IMC é ${imc}`)

function tabelaIMC (imc) {
    if (imc < 18.5){
        console.log(`Abaixo do peso`)
    } else if (imc >= 18.5 && imc < 25){
        console.log(`Peso normal`)
    } else if (imc >= 25 && imc < 30){
        console.log(`Sobre-peso`)
    } else {
        console.log(`Obesidade`)
    }
}
tabelaIMC(imc)
