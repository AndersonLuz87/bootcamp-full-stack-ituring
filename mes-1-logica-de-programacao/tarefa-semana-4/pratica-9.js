//Prática 9: Listando os melhores avaliados

function ordenarFilmes (objeto){
         objeto.sort(function (a,b){
         return b.notaAvaliacao-a.notaAvaliacao
    }); 

    return `O filme de melhor avaliação com nota ${objeto[0].notaAvaliacao} é: ${objeto[0].titulo}.`
}

let filmeMaiorNota = ordenarFilmes([{
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama"
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama"
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação"
  }]);

  console.log(filmeMaiorNota);
  