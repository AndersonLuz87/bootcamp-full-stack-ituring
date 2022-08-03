/*Prática 4: Funções com parâmetros e retornando valores

Criando a função calcularValor que calcula o valor total do produto (valor produto - desconto %)*/
function calcularValor (valorProduto, desconto) {
  
    valorTotal = valorProduto * ((100 - desconto) / 100) /*Calculando o valor total do produto*/
    console.log(`O valor a ser pago pelo cliente é R$ ${valorTotal} reais`) /*Imprimindo o valor total no terminal*/
  return calcularValor 
}

calcularValor(100,10) // Chamando a função com valorProduto = 100 e desconto = 10
calcularValor(100,20) // Chamando a função com valorProduto = 100 e desconto = 20
calcularValor(100,30) // Chamando a função com valorProduto = 100 e desconto = 30
calcularValor(100,40) // Chamando a função com valorProduto = 100 e desconto = 40
calcularValor(100,50) // Chamando a função com valorProduto = 100 e desconto = 50