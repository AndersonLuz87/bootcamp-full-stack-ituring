//

function calcularSaldo (objeto){
    let listaFinal = [0,0,0,0,0]

    objeto.forEach(function (objeto, item) {

        if (objeto.valor >= 0){
            listaFinal[2] = listaFinal[2] + objeto.valor           
            listaFinal[0] ++
        } else {
            listaFinal[3] = listaFinal[3] + objeto.valor       
            listaFinal[1] ++
        }       
          listaFinal[4] = listaFinal[2] + listaFinal[3]
    });

    return `
    Total de depósitos: ${listaFinal[0]}
    Total de retiradas: ${listaFinal[1]}
    O valor total depositado foi de: R$ ${listaFinal[2]}
    O valor total retirado foi de: R$ ${listaFinal[3]}
    O saldo final de sua conta foi positivo no valor de R$ ${listaFinal[4]}`
    
}

let calculoDoValor = calcularSaldo([{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: -20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: -30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: -7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: -21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: -5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }])

  console.log(calculoDoValor)