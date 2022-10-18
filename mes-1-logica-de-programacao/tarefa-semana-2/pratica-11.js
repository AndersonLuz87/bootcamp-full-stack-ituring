//Prática 11: Exibindo a cor RGB (Aprendendo o comando switch)

let cor = "rosa";
let codigo = null;
    switch (cor) {
        case "vermelha": 
          codigo = "rgb (255,000,000)";
        break;
        case "laranja":
            codigo = "rgb (255,128,000)";
        break;
        case "amarela":
            codigo = "rgb (255,255,000)";
        break;
        case "verde":
            codigo = "rgb (000,255,000)";
        break;
        case "azul claro":
            codigo = "rgb (000,255,255)";
        break;
        case "azul marinho":
            codigo = "rgb (000,000,255)";
        break;
        case "rosa":
            codigo = "rgb (255,000,255)";
        break;
        default:
            codigo = "rgb (255,255,255)";
}

console.log(codigo);
console.log (typeof codigo);

