//Prática 7: Descobrindo as chaves do objeto

function infoTalher (objeto){
   
    return Object.keys(objeto)
}

let n = infoTalher({
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
  })
  console.log(n)