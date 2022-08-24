//Prática 8: Criando nossa lista de filmes

function infoFilmes (objeto){
    return `
    ${objeto[0].titulo}(Nota: ${objeto[0].notaAvaliacao})
    •Duração: ${objeto[0].duracao} minutos
    •Ano de publicação: ${objeto[0].anoPublicacao}
    •Gênero: ${objeto[0].genero}

    ${objeto[1].titulo}(Nota: ${objeto[1].notaAvaliacao})
    •Duração: ${objeto[1].duracao} minutos
    •Ano de publicação: ${objeto[1].anoPublicacao}
    •Gênero: ${objeto[1].genero}

    ${objeto[2].titulo}(Nota: ${objeto[2].notaAvaliacao})
    •Duração: ${objeto[2].duracao} minutos
    •Ano de publicação: ${objeto[2].anoPublicacao}
    •Gênero: ${objeto[2].genero}
    `
}

let n = infoFilmes([{
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ["Biografia", "Drama", "História"]
  },
  {
    titulo: "Top Gun",
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ["Ação", "Drama"]
  },
  {
    titulo: "O Jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"]
  }])

  console.log(n)