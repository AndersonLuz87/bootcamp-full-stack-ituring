//Prática 6: Criando nosso primeiro objeto

function infoFilmes (objeto){

    console.log(`O filme ${objeto.titulo}, que estreiou em ${objeto.anoPublicacao}, tem a avaliação de ${objeto.notaDeAvaliacao} no IMDb`)
}

infoFilmes({
    titulo: "Estrelas Além do Tempo",
    notaDeAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    categoria: "Drama"
})