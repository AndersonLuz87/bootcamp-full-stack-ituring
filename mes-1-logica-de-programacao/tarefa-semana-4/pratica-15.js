//Prática 15: Buscando o carro mais próximo

function buscarUber (objeto) {

    let listaDeUber = objeto.sort((a,b)=> a.tempoEstimado - b.tempoEstimado);
    
    return `${listaDeUber[0].motorista} está a caminho com o carro ${listaDeUber[0].veiculo} de placa ${listaDeUber[0].placa}. Chega em ${listaDeUber[0].tempoEstimado} minutos.`
};

let uberMaisProximo = buscarUber([{
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
    placa: "ABC1235"
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
  }]);

  console.log(uberMaisProximo);