//Prática 3: É um número primo?

//1 Descobrir se o número é primo
//2 Dividir o número por todos os valores até o próprio número, 
//3 Exibir na tela o valor true ou false

function numeroPrimo (valor) {

    for (let i = 2; i < valor; i ++)
        if (valor % i === 0){
            return false;
        } 
        return valor > 1;
  
}; 

let n0 = numeroPrimo(17)
let n1 = numeroPrimo(2)
let n2 = numeroPrimo(7)
let n3 = numeroPrimo(8)
let n4 = numeroPrimo(5)
let n5 = numeroPrimo(23)
let n6 = numeroPrimo(15)
let n7 = numeroPrimo(1500450271)
console.log(n0)
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)