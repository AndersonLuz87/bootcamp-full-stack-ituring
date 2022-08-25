//Prática 14: Criando a média de avaliações

function calcularAvaliacoes (objeto) {
   
    let apenasNotas = objeto.avaliacoes.map(function(item){
        return item.nota
    });

    let soma = 0
    for (let i = 0; i < apenasNotas.length; i++){
        soma = soma + apenasNotas[i]
    }

    return `A média de avaliações do restaurante ${objeto.restaurante} foi de ${soma.toFixed(2)/apenasNotas.length}`
}

let x = calcularAvaliacoes ({
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  })
  console.log(x)