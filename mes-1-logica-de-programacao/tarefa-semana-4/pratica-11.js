//Prática 11: Calculando um extrato do banco simples

function extratoBancario (objeto){
    let valorTotalDepositado = 0;
    let valorTotalRetirado = 0;

    objeto.forEach(function (item) {
        if (item.movimentacao === "retirada")
            valorTotalRetirado = valorTotalRetirado + item.valor
            else 
            valorTotalDepositado = valorTotalDepositado + item.valor
    });

    return `
O valor total depositado foi de: R$ ${valorTotalDepositado}
O valor total retirado foi de: R$ ${valorTotalRetirado}
O saldo final de sua conta foi R$ ${valorTotalDepositado - valorTotalRetirado}`
};

let extratoSimples = extratoBancario([{
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
  }]);

  console.log(extratoSimples);