//Prática 2: Funções com parâmetros

function quemComprou (comprador){
    
    console.log(`Olá, ${comprador}`);
}

function confirmacaoDeCompra (produto, endereco, recebedor) {

    console.log(`Fizemos a entrega do produto ${produto} no endereço ${endereco} com sucesso!

    O seu produto foi recebido por: ${recebedor}
    
    Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`);
}

function assinaturaEmail (vendedor) {

    console.log(`Atenciosamente,
    ${vendedor}`);
}

quemComprou ("José");
confirmacaoDeCompra ("Camisa", "Rua: Das Rosas, 100", "Mária");
assinaturaEmail("João");
