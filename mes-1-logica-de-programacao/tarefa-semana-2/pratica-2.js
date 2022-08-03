//Prática 2 .. Criando funções com parametros

// Criando a função com um parametro
function compra (nomeComprador){
    
    console.log(`Ola comprador(a) ${nomeComprador}`)
}

//Criando a função entrega com 3 parametros
function entrega(produto, nomeRecebedor, enderecoEntrega){
    console.log(`Fizemos a entrega do produto ${produto} no endereço ${enderecoEntrega} com sucesso!
O seu produto foi recebido por: ${nomeRecebedor}
Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`)
}

//Criando a função equipe com um parametro
function equipe (emailEquipe){
    console.log(`Atenciosamente,
${emailEquipe}`)
}

//Chamando as funções
compra("Maria")
entrega("bola","José","Alameda Sem Nome, 357")
equipe("João")