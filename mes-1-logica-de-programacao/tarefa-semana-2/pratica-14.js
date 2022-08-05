// Prática 14: Cálculo do IMC

function calculoImc (pesoKg, alturaMetros){
    let imc = pesoKg / (alturaMetros * alturaMetros)
    console.log(`O IMC é ${imc}`)
    let abaixoPeso = imc < 18.5
    let pesoNormal = imc >= 18.5 && imc < 25
    let sobrepeso = imc >= 25 && imc < 30
    if (abaixoPeso){
        console.log("Você está abaixo do peso")
    } else if(pesoNormal){
        console.log("Você está com o peso normal")
    } else if(sobrepeso){
        console.log("Você está com sobre-peso")
    } else {
        console.log("Você está obeso!")
    }
    
}

calculoImc(30 , 1.5)
calculoImc(45 , 1.5)
calculoImc(65 , 1.5)
calculoImc(100 , 1.5)
