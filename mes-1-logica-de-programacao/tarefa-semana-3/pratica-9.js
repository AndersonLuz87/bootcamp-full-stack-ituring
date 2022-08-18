//Prática 9: Calculando um extrato do banco completo

function saldoFinal (valores) {
    
    function quantidadeDepositos (valores) {

        let numerosDeDepositos = 0
        let i = 0

        for (item of valores) {

            if (valores[i] > 0){
                numerosDeDepositos ++
            }   

            i++
        }
       
        return numerosDeDepositos
    }

    function quantidadeRetiradas (valores) {

        let numerosDeRetiradas = 0
        let i1 = 0

        for (item of valores) {

            if (valores[i1] < 0){
                
                numerosDeRetiradas ++
            }

            i1 ++
        }
        
        return numerosDeRetiradas
    }

    function totalDepositos (valores) {

        let valorDepositado = 0;
        let i2 = 0

        for (item of valores){

            if (valores[i2] > 0){
                
                valorDepositado = valorDepositado + valores[i2]
            }   

            i2++
        }
        
        return valorDepositado
    }

    function totalRetiradas (valores) {

        let valorRetirado = 0;
        let i3 = 0

        for (item of valores){

            if (valores[i3] < 0){
                
                valorRetirado = valorRetirado + valores[i3]
            }   

            i3++
        }
        
        return valorRetirado
    }
   
    let quantidadeDepositosExtraido = quantidadeDepositos(valores)
    let quantidadeRetiradasExtraidas = quantidadeRetiradas(valores) 
    let valorDepositadoExtraido = totalDepositos(valores)
    let valorRetiradoExtraido = totalRetiradas(valores)
    let saldoTotal = valorDepositadoExtraido + valorRetiradoExtraido  
   
    return [quantidadeDepositosExtraido, quantidadeRetiradasExtraidas,valorDepositadoExtraido,valorRetiradoExtraido,saldoTotal]
  
}

let valorFinal = saldoFinal([100, -20, -30, 10, -7, -21, -5])

console.log(`Total de depósitos: ${valorFinal[0]}
Total de retiradas: ${valorFinal[1]}
O valor total depositado foi de: R$ ${valorFinal[2]}
O valor total retirado foi de: R$ ${Math.abs(valorFinal[3])}
O saldo final da sua conta foi de: R$ ${valorFinal[4]}`)


