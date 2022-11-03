//Prática 14: Criando a média de avaliações

function calcularMediaAvaliacoes (objeto){
    
    let notaTotal = 0;
    let quantidadeDeNotas = 0;

    objeto.avaliacoes.forEach(item => {
        notaTotal = notaTotal + item.nota;
        quantidadeDeNotas ++;
    });

   return `A média de avaliações do restaurante Turing Gourmet foi de ${(notaTotal / quantidadeDeNotas).toFixed(2)}.`

};

let mediaAvaliacoes = calcularMediaAvaliacoes({
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
  });

console.log(mediaAvaliacoes);