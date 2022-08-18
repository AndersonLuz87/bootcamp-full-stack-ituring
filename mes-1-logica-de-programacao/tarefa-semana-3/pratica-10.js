//Prática 10: Registrando a quantidade de votos

    function contagemVoto (lista){
        let votosTotais = []
        let i = 0   
        let contagemBrasil = 0
        let contagemArgentina = 0
        let contagemEspanha = 0
        let contagemPortugal = 0

        for (item of lista){

        if (lista[i] === 1) {
         contagemBrasil ++
        }
        if (lista[i] === 2){
         contagemArgentina ++
        }
         if (lista[i] === 3){
         contagemEspanha ++
        }
        if (lista[i] === 4){
            contagemPortugal ++
        }

            i++
        }

     votosTotais = [contagemBrasil, contagemArgentina, contagemEspanha, contagemPortugal]
     
     if (contagemBrasil > contagemArgentina && contagemBrasil > contagemEspanha && contagemBrasil > contagemPortugal){
        votosTotais.push("Brasil")
     }
     if (contagemArgentina > contagemBrasil && contagemArgentina > contagemEspanha && contagemArgentina > contagemPortugal){
        votosTotais.push("Argentina")
     }
     if (contagemEspanha > contagemBrasil && contagemEspanha > contagemArgentina && contagemEspanha > contagemPortugal){
        votosTotais.push("Espanha")
     } else{
        votosTotais.push("Portugal")
     }

     return votosTotais
    }

let votosFinais = contagemVoto ([1, 1, 1, 4, 4, 2, 3, 2])
console.log (`Brasil: ${votosFinais[0]}
Argentina: ${votosFinais[1]}
Espanha: ${votosFinais[2]}
Portugal: ${votosFinais[3]}

O ${votosFinais[4]} é o preferido para ganhar a Copa do Mundo!`)


