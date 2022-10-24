//Prática 10: Registrando a quantidade de votos

function contagemVotos (lista) {

    let i = 0;
    let qtdDeVotos = [0,0,0,0];

    for (item of lista) {
        switch (lista[i]){
        case 1: qtdDeVotos[0] ++
        break;
        case 2: qtdDeVotos[1] ++
        break;
        case 3: qtdDeVotos[2] ++
        break;
        case 4: qtdDeVotos[3] ++
        break;
        default: console.log(`O Voto número ${i+1} é inválido`);
         };
       
        i ++;
        
    };

    const brasilFavorito = qtdDeVotos[0] > qtdDeVotos[1] && qtdDeVotos[0] > qtdDeVotos [2] && qtdDeVotos [0] > qtdDeVotos[3];
    const argentinaFavorita = qtdDeVotos[1] > qtdDeVotos[0] && qtdDeVotos[1] > qtdDeVotos [2] && qtdDeVotos [1] > qtdDeVotos[3];
    const espanhaFavorita = qtdDeVotos[2] > qtdDeVotos[0] && qtdDeVotos[2] > qtdDeVotos [1] && qtdDeVotos [2] > qtdDeVotos[3];
    const portugalFavorito = qtdDeVotos[3] > qtdDeVotos[0] && qtdDeVotos[3] > qtdDeVotos [1] && qtdDeVotos [3] > qtdDeVotos[2];

    if (brasilFavorito) 
        return `Brasil é o preferido para ganhar a Copa do Mundo!`;
     else if (argentinaFavorita)
        return `Argentina é a preferida para ganhar a Copa do Mundo!`;
     else if (espanhaFavorita)
        return `Espanha é a preferida para ganhar a Copa do Mundo!`;
     else if (portugalFavorito)
        return `Portugal é o preferido para ganhar a Copa do Mundo!`;
     else 
        return `Não há favorito para vencer a copa do mundo!`;   
      
};

console.log(contagemVotos([ 1, 1, 1, 4, 4, 2, 3, 2]));