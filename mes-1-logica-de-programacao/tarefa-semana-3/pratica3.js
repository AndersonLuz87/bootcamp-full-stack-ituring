//Prática 3: É um número primo? 

function ehPrimo (numero){
    let i = 3;

    while (i <= numero) {

        if (numero % (i-1) === 0) 
            
         return `O número ${numero} não é primo`;

        i ++;
    }
        return `O número ${numero} é primo`;
}

console.log(ehPrimo(17));
console.log(ehPrimo(2));
console.log(ehPrimo(7));
console.log(ehPrimo(8));
console.log(ehPrimo(5));
console.log(ehPrimo(23));
console.log(ehPrimo(1500450271));