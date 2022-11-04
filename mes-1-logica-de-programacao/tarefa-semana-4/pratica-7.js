//Prática 7: Descobrindo as chaves do objeto

function exibeChave (objeto){
   let chaveObjeto = Object.keys(objeto)
   return chaveObjeto;
}


let objeto1 = exibeChave({
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
  });

  console.log(objeto1);