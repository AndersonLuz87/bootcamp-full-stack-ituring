//Prática 6: Criando nosso primeiro objeto

function exibeFilme (titulo, notaAvaliacao, duracao, anoPublicacao, categoria){

    let filme = {
        nome: titulo,
        nota: notaAvaliacao,
        tempo: duracao,
        ano: anoPublicacao,
        tipo: categoria
        };
       
    return `O filme ${filme.nome} que estreou em ${filme.ano} tem a avaliação de ${filme.nota} pelo IMDb.`
};

let filme1 = exibeFilme("Estrelas além do tempo", 7.8, 127, 2016, "Drama");
console.log(filme1);