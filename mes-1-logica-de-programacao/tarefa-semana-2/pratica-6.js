/* Prática 6 - Arrow functions

Criando a função calcularValor que calcula o valor total do produto (valor produto - desconto %)*/
let valorPago = (valorProduto, desconto) => {
  
    valorTotal = valorProduto * ((100 - desconto) / 100) /*Calculando o valor total do produto*/
    console.log(`O valor a ser pago pelo cliente é R$ ${valorTotal} reais`) /*Imprimindo o valor total no terminal*/
 
}

valorPago(100,10) //Chamando a variavel valorPago com valorProduto = 100 e desconto = 10
valorPago(100,20) //Chamando a variavel valorPago com valorProduto = 100 e desconto = 20
valorPago(100,30) //Chamando a variavel valorPago com valorProduto = 100 e desconto = 30
valorPago(100,40) //Chamando a variavel valorPago com valorProduto = 100 e desconto = 40
valorPago(100,50) //Chamando a variavel valorPago com valorProduto = 100 e desconto = 50

