/*Prática 5: Funções como variáveis (Expressão de função)*/

let valorPago = function (valorProduto, desconto) { //Atribuindo uma função na variavel valorPAgo
  valorTotal = valorProduto * ((100 - desconto) / 100) //Calculo do valor menos o desconto
    console.log(`O valor a ser pago pelo cliente é R$ ${valorTotal} reais`) // Imprimindo o resultado na tela
    
}

valorPago (100,10) //Chamada da variavel com valorProduto = 100 e desconto = 10
valorPago (100,20) //Chamada da variavel com valorProduto = 100 e desconto = 20
valorPago (100,30) //Chamada da variavel com valorProduto = 100 e desconto = 30
valorPago (100,40) //Chamada da variavel com valorProduto = 100 e desconto = 40
valorPago (100,50) //Chamada da variavel com valorProduto = 100 e desconto = 50
