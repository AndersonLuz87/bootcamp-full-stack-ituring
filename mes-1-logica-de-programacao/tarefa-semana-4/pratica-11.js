//Prática 11: Calculando um extrato do banco simples

function calcularSaldo (objeto){
    let listaFinal = [0,0,0]

    objeto.forEach(function (objeto, item) {

        if (objeto.movimentacao === "deposito"){
            listaFinal[0] = listaFinal[0] + objeto.valor           
            
        } else {
            listaFinal[1] = listaFinal[1] + objeto.valor       
         
        }       
          listaFinal[2] = listaFinal[0] - listaFinal[1]
    });

    return `
    O valor total depositado foi de: R$ ${listaFinal[0]}
    O valor total retirado foi de: R$ ${listaFinal[1]}
    O saldo final de sua conta foi positivo no valor de R$ ${listaFinal[2]}`
    
}

let calculoDoValor = calcularSaldo([{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }])

  console.log(calculoDoValor)