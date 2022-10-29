//Prática 8: Criando nossa lista de filmes

let filme = {
    titulo: null,
    notaAvaliacao: null,
    duracao: null,
    anoPublicacao: null, 
    genero: null,
    exibir: function (){
        console.log(`
        ${this.titulo} (Nota: ${this.notaAvaliacao})
        • Duração: ${this.duracao} minutos
        • Ano de publicação: ${this.anoPublicacao}
        • Gênero: ${this.genero}`)
    },
    modificar: function (titulo, notaAvaliacao, duracao, anoPublicacao, genero){
        this.titulo = titulo;
        this.notaAvaliacao = notaAvaliacao;
        this.duracao = duracao;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }
};
filme.modificar("Estrelas Além do Tempo", 7.8, 127, 2016, ["Biografia", "Drama", "História"]);
filme.exibir();
filme.modificar("Top Gun", 8.6, 130, 2022, ["Ação", "Drama"]);
filme.exibir();
filme.modificar("O Jogo da Imitação", 8.0, 114, 2014, ["biografia", "drama", "suspense", "guerra"]);
filme.exibir();