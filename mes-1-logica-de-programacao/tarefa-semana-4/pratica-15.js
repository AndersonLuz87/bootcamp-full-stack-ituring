//Prática 15: Buscando o carro mais próximo

function motoristaProximo (objeto) {
  
 objeto.sort(function(a,b){
    if (a.tempoEstimado > b.tempoEstimado){
        return 1
    }
    if (a.tempoEstimado < b.tempoEstimado){
        return -1
    }
    return 0
   })

   return `${objeto[0].motorista} está a caminho com o carro ${objeto[0].veiculo} de placa ${objeto[0].placa}. Chega em ${objeto[0].tempoEstimado} minutos.`
};

let buscarMotorista = motoristaProximo ([{
    motorista: "Thais S.",
    avaliacao: 9.8,
    tempoEstimado: 7,
    veiculo: "Palio",
    placa: "ABC4321"
  },
  {
    motorista: "Thales Gonçalves",
    avaliacao: 8.9,
    tempoEstimado: 4,
    veiculo: "Celta",
    placa: "ABC0987"
  },
  {
    motorista: "José Lopes",
    avaliacao: 9.9,
    tempoEstimado: 5,
    veiculo: "Fox",
    placa: "ABC5678"
  },
  {
    motorista: "Cristina Souza",
    avaliacao: 9.3,
    tempoEstimado: 3,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Leo Garcia",
    avaliacao: 8.5,
    tempoEstimado: 9,
    veiculo: "Ka",
    placa: "ABC8765"
  }])

  console.log(buscarMotorista)